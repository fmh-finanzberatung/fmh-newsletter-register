<script>
  export let year = 0;
</script>

<template>
  <div class="text-box">
    <h2 class="text-box__title">
      <a href="/fmh-award/2021/preistraeger"
        class="text-box__link">FMH-Award 2021</a>
    </h2>
    <p class="text-box__p">
      Für den FMH-Award 2021 haben wir uns etwas ganz Besonderes ausgedacht. 
      Zwar war es aufgrund der Corona-Pandemie und den daraus resultierenden
      Beschränkungen nicht möglich, eine Live-Veranstaltung zu organisieren.
      Nichtsdestotrotz haben wir aber auch in diesem Jahr wieder die besten 
      Baufinanzierer Deutschlands aus allen Anbietern herausgefiltert – und 
      prämiert. 
    </p>
    <p class="text-box__p">
      Die Verleihung des FMH-Awards in Kooperation mit dem TV-Sender ntv 
      fand in diesem Jahr auf virtuellem Wege statt – das außergewöhnliche 
      Ergebnis sehen Sie in obigem Video. 
    </p>
    <p class="text-box__p">
      <a href="/fmh-award/2021/preistraeger"
        class="text-box__link">
        Die Gewinner des FMH-Awards 2021 finden Sie hier:
      </a>
    </p>
    <p class="text-box__p">
      <a href="/fmh-award/2021/preistraeger"
        class="text-box__button">
        zu den Gewinnern 
      </a>
    </p>
  </div>
</template>
  
<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  @import './css/buttons.scss';
  .text-box {
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
