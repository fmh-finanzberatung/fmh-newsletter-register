<script>
  export let maxRequests = 0;

  const day = 1000 * 60 * 60 * 24;
  function ensurePwState(requests, maxRequests) {
    let date = new Date().getTime();
    const storedDate = localStorage.getItem('pwDate');
    if (storedDate) {
      if (date - storedDate > day) { // renew access after a day
        localStorage.setItem('pwDate', date);
        localStorage.setItem('pwRequests', 1);
        return true; // access allowed
      }
      if (requests <= maxRequests) {
        return true; // access allowed 
      }
      return false;
    }
    localStorage.setItem('pwDate', date);
    localStorage.setItem('pwRequests', 1);
    return true;
  }

  if (!localStorage.hasItem('date')) {
    localStorage.setItem('pwDate', new Date().getTime());
    localStorage.setItem('pwCount', 0);
  } else {

  }

</script>

<template>
  <div class="paywall">
    Paywall {maxRequests}
  </div>
</template>
  
<style type="text/scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  @import './css/buttons.scss';
  .paywall {
    &__title, &__p {
     font-family: $font-family__primary;
    }
    &__title, &__link {
     color: $color__text--secondary;
    }
    &__title {
      margin: 0.25em 0; 
      line-height: 1.3em; 
      font-weight: 500; 
      font-size: $font-size__headline;  
      letter-spacing: 0.025em;
    }
    &__p {
      color: $color__text; 
      line-height: 1.4em;
      font-size: $font-size__primary;  
    }
    &__link {
      display: block;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__button {
      @include button;
      @include button__standard;
      display: block;
      text-align: center;
      text-decoration: none;
      max-width: 180px;
      margin-top: 1em;
      margin-left: auto;
      margin-right: auto;
    }
  }   
</style>
