<script>
  import jpegFileName from './lib/jpeg-file-name.js'; 
  import FlexCellConstants from './lib/flex-cell-constants.js';
  import FlexRowConstants from './lib/flex-row-constants.js';
  import axios from 'axios'; 
  import IntersectionObserver from 'svelte-intersection-observer';
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  export let id = null;
  export let table = null;
  export let columns = 0;

  let colspanBuffer = 1;

  const reqUrl = `https://api-auszeichnungen.fmh.de/graphql`;
  let element;
 
  const query = `
    {
      flex_table(id: ${id}) {
        title
        subtitle
        explanation
        footer
        data_annotation
        table_annotation
        flex_rows(search: {active: true}, pagination: {pageSize: 100}, order: {position: ASC}) {
          docs {
            active
            id
            row_type
            label
            position
            flex_cells(search: {active: true}, pagination: {pageSize: 100}, order: {position: ASC}) {
              docs {
                id
                active
                col_type
                col_width
                align_type
                colspan
                url
                content
              }
            }
          }
        }
        laureates(search: {active: true}, order: {degree_type: ASC, position: ASC}) {
          docs {
            id
            image_file_name
            commendation {
              award {
               name
              }
              volume {
                year 
              }
            }
            bank {
              name
            }
          }
        }
      }
    } 
  `;

  function rank(laureate) {
    if (laureate.degree_type) {
      return `${laureate.degree_type}. Platz`;
    }
    return '';
  }

  function imgAlt(laureate) {
    return `${laureate?.bank?.name} ${laureate?.commendation?.award?.name}
    ${laureate?.commendation?.volume?.year}`;
  }

  function hasImage(laureate) {
    return laureate?.image_file_name;
  }

  function imgSrc (laureate, size = 'big') { 
    const imgFileName = jpegFileName(laureate.image_file_name);
    return `https://auszeichnungen.fmh.de/laureates/images/${laureate.id}/${size}/${laureate.file_hash}!${imgFileName}`;
  }

  function fetchData(_ev) {
    if (table) return true;
    axios({method: 'post', url: reqUrl, data: {query}})
      .then((res) => {
        table = res.data.data.flex_table;
        columns = 0 || table?.flex_rows?.docs?.[0].flex_cells?.docs?.length; 
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function rowClasses(row) {
    const classes = [];
    const block = 'awards-table';
    const element = `${block}__tr`;
    const rowVal = FlexRowConstants.getVal('RowTypes', row.row_type);
    classes.push(rowVal);
    return classes.map(c =>  `${element}--${c}`).join(' ');
  }
  
  function cellClasses(cell) {
    const classes = [];
    const block = 'awards-table';
    const element = `${block}__td`;
    const cellVal = FlexCellConstants.getVal('ColTypes', cell.col_type);
    classes.push(cellVal);
    const alignVal = 'align-' + FlexCellConstants.getVal('AlignTypes', cell.align_type);
    classes.push(alignVal);
    return classes.map(c =>  `${element}--${c}`).join(' ');
  }

  function colspan(cell) {
    if (cell.colspan > 1) {
      colspanBuffer = cell.colspan;
      return cell.colspan; 
    }
    if (colspanBuffer > 1) {
      colspanBuffer -= 1;
      return cell.colspan = 0;
    }
    return cell.colspan = 1;
  }

  function hiddenClass(cell) {
    return cell.colspan === 0 ? 'awards-table__td--hidden' : '';
  }

</script>

<template>
  <IntersectionObserver {element} on:intersect={fetchData}>
    <div bind:this={element} class="awards-table">
      {#if table} 
        <div class="awards-table__table-container"> 
          <table class="awards-table__table">
            <caption class="awards-table__caption">
              <h2 class="awards-table__title">{table.title}</h2>
              {#if table.subtitle} 
                <p class="awards-table__subtitle">{table.subtitle}</p>
              {/if}
            </caption>
            {#each table?.flex_rows?.docs as row}
              <tr class="awards-table__tr {rowClasses(row)}">
                {#each row?.flex_cells?.docs as cell}
                  <td colspan={colspan(cell)} class="awards-table__td {cellClasses(cell)}
                    {hiddenClass(cell)}">
                    {@html cell.content}
                  </td>
                {/each}
              </tr>
            {/each}
            <tfoot class="awards-table__tfoot">
              {#if table.annotation }
                <tr class="awards-table__tr">
                  <td class="awards-table__td"
                    colspan="{columns}">
                    <p>{@html table.annotation}</p>
                  </td>
                </tr>
              {/if}
              {#if table.data_annotation }
                <tr class="awards-table__tr">
                  <td class="awards-table__td"
                    colspan="{columns}">
                    <p>{@html table.data_annotation}</p>
                  </td>
                </tr>
              {/if}
              {#if table.table_annotation }
                <tr class="awards-table__tr">
                  <td class="awards-table__td"
                    colspan="{columns}">
                    <p>{@html table.table_annotation}</p>
                  </td>
                </tr>
              {/if}
              <tr class="awards-table__tr">
                <td class="awards-table__td"
                  colspan="{columns}">
                  <p>Quelle: FMH-Finanzberatung. Alle Angaben sind
                    urheberrechtlich geschützt.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {#if table.laureates?.docs?.length}
          <div class="awards-table__siegel">
            {#each table.laureates?.docs as laureate}
              {#if hasImage(laureate) } 
                <figure class="awards-table__figure">
                  <img class="awards-table__img"
                    src={imgSrc(laureate)}
                    alt={imgAlt(laureate)}
                    loading="lazy">
                  <figcaption class="awards-table__figcaption">
                    {imgAlt(laureate)} {rank(laureate)}
                  </figcaption>
                </figure>
              {/if}
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </IntersectionObserver>
</template>

<style type="text/scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .awards-table {
    &, * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
    display: flex;
    justify-content: space-between;
    &__table-container {
      flex: auto 1 1; 
    }
    &__siegel {
      max-width: 180px;
      margin-top: 3rem;
    }
    &__caption {
      padding: 0.5rem;
    }
    &__title, &__subtitle, &__p {
      line-height: 1.2em;
      font-family: $font-family__primary;
    }
    &__title {
      font-size: $font-size__headline;
      font-weight: 500;
    } 
    &__subtitle {
      color: $color__text;
      font-size: $font-size__subtitle;
      font-weight: 500;
    }
    &__table {
      width: 100%;
      border-collapse: collapse;
    }
    &__tr {
      &--blank {
        td {
          height: 1rem; 
          border-left: 0;
          border-right: 0;
          color: white;
        }      
      }
      &--label {
        td {
          background-color: #f3f3f3;
          text-align: center; 
          font-weight: 500;
          &:first-child {
            text-align: left; 
          } 
        }      
      }
      &--data {
        td {
          text-align: center; 
        }
      }
    }
    &__td, &__th {
      vertical-align: top;
      padding: 0.5em;
      font-family: $font-family__primary;
      font-size: $font-size__primary;
      color: $color__text;
      font-weight: 400;
      border-bottom: 1px solid #ddd; 
      &--blank {
        border-left: 0;
        border-right: 0;
        height: 1rem;
      }
      &--label {
        background-color: #f3f3f3;
        color: $color__primary--lighter;
        text-align: center; 
        font-weight: 500;
        &:first-child {
            text-align: left; 
        }
      }
      &--data {
        text-align: center; 
      }
      &--hidden {
        display: none;
      }
      &--align-left {
        text-align: left !important;
      }
      &--align-right {
        text-align: right !important;
      }
      &--align-center {
        text-align: center !important;
      }
      &--align-block {
        text-align: justify !important;
      }
    }
    &__img {
      width: 100%;
      height: auto;
    } 
    &__figure {
      margin-right: 0;
      margin-left: auto;
      min-width: 80px;
      max-width: 100%; 
      display: block; 
      padding:  0.25rem 0 0.25rem 0.5rem;
    } 
    &__figcaption {
      overflow-x: hidden;
      text-overflow: ellipsis;
      font-family: $font-family__primary;
      font-size: $font-size__small;
      text-align: center; 
    } 
    &__link {
      display: block;
      text-decoration: none;
      &:hover {
        .awards-table__title,
        .awards-table__subtitle,
        .awards-table__more {
          text-decoration: underline;
        }
      }
    }
    &__title, &__more {
     color: $color__text--secondary;
    }
    &__title, &__subtitle {
      display: block;
    }
    &__title {
      margin: 0.25em 0; 
      line-height: 1.3em; 
      font-weight: 500; 
      font-size: $font-size__headline;  
      letter-spacing: 0.025em;
    }
    &__subtitle {
      line-height: 1.3em; 
      margin: 0.5em 0; 
      color: $color__text;
      font-weight: 500; 
      font-size: $font-size__subtitle;  
    }
    &__p {
      color: $color__text; 
      line-height: 1.4em;
      font-size: $font-size__primary;  
    }
    &__more {
      font-weight: 500; 
    }

  }
</style>

