<script>
  
  export let eventDate;
  export let title;
  let seconds = 0;
  let minutes = 0;
  let hours = 0; 
  let days = 0;

  function checkDate() {

    let now = new Date();
    
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
  <div class="container"> 
    <h2 class="title">{title}</h2>
    <ul class="countdown">
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
</template>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .container {
    width: 100%;
    height: 100%;
    border: 50px solid $color__primary--dark;
    &, & * {
	    box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    background-color: $color__primary--dark; 
  }
  .title {
    border: 0; 
    letter-spacing: 0.025em; 
    margin: 0 0 1em 0; 
    display: block;
    font-size: 22px;
    line-height: 1.3em;
    text-align: center;
    color: white;
    font-weight: 400;
    font-family: $font-family__primary;
  }
  .countdown {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 400px;
    background-color: white;
    display: flex;
    flex-flow: row wrap; 
    list-style: none;
    &__item {
      padding: 5px;
      margin: 10px;
      flex: calc(20% - 10px) 1 1;
      color: white;
      background-color: $color__primary--light;
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
