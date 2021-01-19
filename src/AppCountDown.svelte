<script>
  import axios from 'axios'; 
  import randomListInterval from './lib/random-list-interval'; 
  export let interval = 1000;
  export let imgSrc = '';
  export let imgAlt = '';
  export let size = 'original';
  export let caption = '';
  export let year = new Date().getFullYear();
  
  let index = -1;
  
  const apiHost = process.env.VUE_APP_API_HOST_AUSZEICHNUNGEN;
  
  function populateImage(item) {
    imgSrc = 
      `https://auszeichnungen.fmh.de/photos/images/${item.id}/${size}/${item.image_file_name}`;
    imgAlt = item.description;
    caption = item.title;
  }
  
  const url = `${apiHost}/photos/fmh+award/awards/${year}.json`;

  axios.get(url)
    .then((res) => {
      if (!res.data || !res.data.length) return false;
      populateImage(res.data[0]);
      randomListInterval(res.data, populateImage, interval);

    }).catch((err) => {
      console.error(err);
    });


  export let eventDate;
  export let title;
  let seconds = 0;
  let minutes = 0;
  let hours = 0; 
  let days = 0;

  function checkDate() {

    const now = new Date();
    
    const total = Date.parse(eventDate) - Date.parse(new Date());
    seconds = Math.floor( (total/1000) % 60 );
    minutes = Math.floor( (total/1000/60) % 60 );
    hours = Math.floor( (total/(1000*60*60)) % 24 );
    days = Math.floor( total/(1000*60*60*24) );

  }

  setInterval(checkDate, 1000);

  //checkDate();

</script>

<template>
  <div class="countdown"> 
    <img
      class="countdown__img"
      src="{imgSrc}"
      alt={imgAlt} /> 
    <div class="countdown__canvas">
      <div class="countdown__content">
        <h2 class="countdown__title">{title}</h2>
        <ul class="countdown__counter">
          <li class="countdown__item"> 
            <div class="countdown__number"> 
              {days}
            </div>  
            <div class="countdown__label"> 
              Tage 
            </div>
          </li>
          <li class="countdown__item"> 
            <div class="countdown__number"> 
              {hours}
            </div>  
            <div class="countdown__label"> 
               Stunden 
            </div>
          </li>
          <li class="countdown__item"> 
            <div class="countdown__number"> 
              {minutes}
            </div>
            <div class="countdown__label"> 
              Minuten 
            </div>
            <div class="countdown__number"> 
          </li>
          <li class="countdown__item"> 
            <div class="countdown__number"> 
              {seconds}
            </div>
            <div class="countdown__label"> 
              Sekunden 
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .countdown {
    border-radius: 4px;
    box-shadow: 0px 4px 5px rgba(black, 0.3);  
    //background-color: rgba($color__primary--dark, 0.4); 
    width: 100%;
    height: 100%;
    position: relative;  
    &, & * {
	    box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    &__img {
      display: block;
      border-radius: 4px; 
      width: 100%;
      height: auto;
    } 
    &__canvas {
      top: 0;
      left: 0;
      position: absolute;
      display:flex;
      flex-flow: row wrap; 
      align-items: center;
      justify-content: center; 
      width: 100%;
      height: 100%;
      background-color: rgba($color__primary--dark, 0.4); 
      border-radius: 4px;
    }
    &__content {
      padding: 20px;
      width: 80%;
      vertical-align: middle;
    }
    &__title {
      border: 0; 
      letter-spacing: 0.025em; 
      margin: 0 auto 1em; 
      display: block;
      font-size: 22px;
      line-height: 1.3em;
      text-align: center;
      text-shadow: 0px 0px 2px rgba($color__primary--dark, 0.8); 
      color: white;
      font-weight: 400;
      font-family: $font-family__primary;
    }
    &__counter {
      margin: 0 auto; 
      padding: 10px;
      background-color: rgba(white, 0.5);
      display: flex;
      flex-flow: row wrap;
      list-style: none;
    }  
    &__item {
      padding: 5px;
      margin: 10px;
      flex: 1 1 calc(20% - 10px);
      color: white;
      background-color: $color__primary--light;
      border-radius: 4px; 
    } 
    &__number, &__label {
      font-weight: normal;
      text-align: center;
      font-family: $font-family__primary;
    }
    &__number {
      font-size: 22.5px;
    }
    &__label {
      text-transform: uppercase;
      letter-spacing: 0.025em; 
      font-size: 12.5px;
    }
  }
</style>
