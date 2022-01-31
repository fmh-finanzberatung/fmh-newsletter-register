<script>
  import axios from 'axios'; 
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  import randomListInterval from './lib/random-list-interval'; 
  import jpegFileName from './lib/jpeg-file-name.js'; 
  export let interval = 0;
  export let fromYear = 0;
  export let throughYear = 0;

  let url =
    `${process.env.AWARDS_API_HOST}/laureates/fmh+award/badges/${fromYear}`;

  if (throughYear) {
    url += `/${throughYear}`;
  }

  url += `.json`;

  let imgSrc = '';
  let imgAlt = '';
  let caption = '';
  let size = 'big';
  let allLaureatesUrl = '';

  function swap(randItem) {

    const imgFileName = jpegFileName(randItem.image_file_name);

    imgAlt = 
      `${randItem.bank.name} ${randItem.commendation.award} ${randItem.commendation.volume.year}`;
    imgSrc = 
      `https://auszeichnungen.fmh.de/laureates/images/${randItem.id}/${size}/${randItem.file_hash}!${imgFileName}`;
    caption = randItem.bank.name;
    allLaureatesUrl=`https://www.fmh.de/auszeichnungen/preistraeger/fmh-award-${randItem.commendation.volume.year}`; 
  }

  axios.get(url)
    .then((res) => {
      if (!res.data || res.data.lengt === 0) return false;
      randomListInterval(res.data, swap, interval);
      res
    }).catch((err) => {
      console.error(err);
    });
</script>

<div class="random-laureates">
  <figure class="random-laureates__figure">
    <img class="random-laureates__img" 
      src="{imgSrc}" 
      alt="{imgAlt}" /> 
    <figcaption class="random-laureates__figcaption">
      {caption}
    </figcaption>
  </figure>
  <a href="{allLaureatesUrl}"
    class="random-laureates__link">Alle Preisträger anschauen</a>
</div>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .random-laureates {
    &, & * {
      box-sizing: border-box;
    }
    padding-bottom: 10px; 
    width: 100%;
    height: 100%;
    float: left; 
    border-radius: 4px; 
    background-color: #f3f3f3; 
    display: block;
    box-shadow: 0px 4px 5px rgba(black, 0.2);  
    &__figure {
      border-radius: 4px;
      background-color: white;
      padding: 10px; 
    } 
    &__figure, &__link {
      margin-left: auto;
      margin-right: auto;
      max-width: 300px;
    } 
    &__figcaption, &__link {
      text-align: center;
      font-size: 13.5px;
      line-height: 1.3em;
      font-family: $font-family__primary;
      font-size: $font-size__primary;
    }
    &__img {
      display: block;
      width: auto;
      margin-left: auto;
      margin-right: auto;
      max-height: 300px;
    }
    &__figcaption {
      width: 100%;
      display: block; 
      margin: 0.5em auto 0;
      color: $color__text;
      font-weight: 500; 
    }
    &__link {
      display: block;
      line-height: 1.3em;
      display: block;
      text-align: center;
      color: $color__text--secondary;
      text-decoration: none;
    }
  } 
</style>
