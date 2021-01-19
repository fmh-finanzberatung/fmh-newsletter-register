<script>
  import axios from 'axios'; 

  export let year = new Date().getFullYear();
  export let items = [];
  export let size = 'original';
  export let caption = '';
  export let imgSrc = '';
  export let imgAlt = '';

  const reqYear = year || new Date().getFullYear() - 1;
  const apiHost = process.env.VUE_APP_API_HOST_AUSZEICHNUNGEN;
  let index = -1;

  const url = `${apiHost}/photos/fmh+award/awards/${reqYear}.json`;

  function populateImage(index) {
    const item = items[index];
    imgSrc = 
      `https://auszeichnungen.fmh.de/photos/images/${item.id}/${size}/${item.image_file_name}`;
    imgAlt = item.description;
    caption = item.title;
  }

  function prev() {
    if (!items || !items.length) return false;
    if (index === 0) return false; 
    index -= 1;
    populateImage(index); 

  }

  function next() {
    if (!items || !items.length) return false;
    if (index === items.length) return false; 
    index += 1;
    populateImage(index); 
  }

  axios.get(url)
  .then((res) => {
    if (!res.data || !res.data.length) return false;
    for (let i = 0, l = res.data.length; i < l; i++) {
      items = [...items, res.data[i]]; 
    }
    index = 0;
    populateImage(index); 
  }).catch((err) => {
    console.error(err);
  });
</script>

<div class="gallery">
  <figure class="gallery__figure">
    <img
      class="gallery__img"
      src="{imgSrc}" 
      alt="{imgAlt}" /> 
    <div class="gallery__nav">
      <a href="#blank" role="button"
        on:click|preventDefault={prev} class="gallery__prev"><span/></a>
      <a href="#blank" role="button"
        on:click|preventDefault={next} class="gallery__next"><span/></a>
    </div>
    <figcaption class="gallery__figcaption">
      {caption}
    </figcaption>
  </figure>
</div>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .gallery {
    box-shadow: 0px 4px 5px rgba(black, 0.3);  
    &, * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    border: 10px solid $color__primary--lighter; 
    border-radius: 4px;
    position: relative;
    &__figure {
      display: block; 
    }
    &__img {
      display: block; 
      width: 100%;
    }
    &__figcaption {
      padding: 0.5em 1em;
      font-size: 13.5px;
      line-height: 1.5em;
      font-family: $font-family__primary;
      color: white;
      border-top: 2.5px solid rgba($color__primary--lighter, 0.75); 
      background-color: rgba($color__primary--light, 0.75);
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    &__nav {
      z-index: 1;
      top: 0;
      right: 0;
      position: absolute;
      background-color: rgba($color__primary--light, 0.75);
    }
    &__prev, &__next {
      padding: 0.5em; 
      font-size: 18.5px;
      display: inline-block; 
      &::before {
        display: inline-block; 
        content: '▼';
      }
      text-decoration: none;  
      color: white;
      &:hover {
        background-color: rgba($color__primary--dark, 0.5);
      } 
    }
    &__prev {
      &:before {
        transform: rotate(90deg); 
      } 
    }
    &__next {
      &:before {
        transform: rotate(-90deg); 
      } 
    }
  }
</style>
