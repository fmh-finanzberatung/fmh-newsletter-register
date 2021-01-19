<script>
  import axios from 'axios'; 
  import randomListInterval from './lib/random-list-interval'; 
  export let interval = 0;
  export let year = new Date().getFullYear();

  const reqYear = year || new Date().getFullYear() - 1;
  const apiHost = process.env.VUE_APP_API_HOST_AUSZEICHNUNGEN;

  let url =
    `${apiHost}/laureates/fmh+award/badges/${reqYear}.json`;
  let imgSrc = '';
  let imgAlt = '';
  let caption = '';
  let size = 'big';
  let allLaureatesUrl = '';

  function swap(randItem) {

    console.log('randItem'. randItem);

    imgAlt = 
      `${randItem.bank.name} ${randItem.commendation.award} ${randItem.commendation.volume.year}`;
    imgSrc = 
      `https://auszeichnungen.fmh.de/laureates/images/${randItem.id}/${size}/${randItem.file_hash}!${randItem.image_file_name}`;
      caption = randItem.bank.name;
      allLaureatesUrl=`https://auszeichnungen.fmh.de/fmh-award/${year}/preistraeger`; 
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
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 250px;
    &__figcaption, &__link {
      text-align: center;
      font-size: 13.5px;
      line-height: 1.5em;
      font-family: $font-family__primary;
    }
    &__img {
      display: block;
      width: 100%;
    }
    &__figcaption {
      color: $color__text; 
    }
    &__link {
      display: block;
      text-align: center;
      color: $color__primary;
      text-decoration: none;
    }
  } 

</style>
