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
  <h2>{title}</h2>
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
        Minuten {minutes}
      </div>
      <div class="countdown__number"> 
        Sekunden {seconds}
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  
  .countdown {
    &__number, &__label {
      font-family: $font-family__primary;
    }
  }  
</style>
