<script>
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

  const reqUrl = `https://api-auszeichnungen.fmh.de/graphql`;
  let element;
 
  const query = `{
    flex_table(id: ${id}) {
      title
      subtitle
      explanation 
      flex_rows(pagination: {pageSize: 100} order: {position: ASC} ) {
        docs {
          active
          id
          row_type
          label
          position
          flex_cells(pagination: {pageSize: 100}, order: {position: ASC}) {
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
    }
  }`;


  function fetchData(_ev) {
    if (table) return true;
    axios({method: 'post', url: reqUrl, data: {query}})
      .then((res) => {
        console.log('res.data.data.flex_table', res.data.data.flex_table);
        table = res.data.data.flex_table;
        columns = 0 || table?.flex_rows?.docs?.[0].flex_cells?.doc?.length; 
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
    return classes.map(c =>  `${element}--${c}`).join(' ');
  }
</script>

<template>
  <IntersectionObserver {element} on:intersect={fetchData}>
    <div bind:this={element} class="awards-table">
      {#if table} 
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
                <td class="awards-table__td {cellClasses(cell)}"
                  colspan={cell.colspan}>
                  {@html cell.content}
                </td>
              {/each}
            </tr>
          {/each}
          {#if table.annotation}
          <tfoot class="awards-table__tfoot">
            <tr class="awards-table__tr">
              <td class="awards-table__td"
                colspan="{table.flex_cells?.docs?.length}">
                <p>{@html table.annotation}</p>
              </td>
            </tr>
          </tfoot>
          {/if}
        </table>
      {/if}
    </div>
  </IntersectionObserver>
</template>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .awards-table {
    &, * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
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
      table-layout: fixed;
      border-radius: 4px; 
      //box-shadow: 0px 4px 5px rgba(black, 0.3);  
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
      padding: 0.25rem 0.5rem;
      font-family: $font-family__primary;
      font-size: $font-size__primary;
      color: $color__text; 
      border-bottom: 1px solid #ddd; 
      &--blank {
        border-left: 0;
        border-right: 0;
        height: 1rem;
      }
      &--label {
        background-color: #f3f3f3;
        text-align: center; 
        font-weight: 500;
        &:first-child {
            text-align: left; 
        }
      }
      &--data {
        text-align: center; 
        font-weight: 500;
      }
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

