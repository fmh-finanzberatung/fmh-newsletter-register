<svg
  width="100%"
  height="100%"
  viewBox="0 0 24 24"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  class="chevron {flipClass} "  
>
  <polygon
    points="9.522 18 8 16.59 12.945 12 8 7.41 9.522 6 16 12"
    transform="matrix(-1, 0, 0, -1, 24, 24)"
    fill-rule="nonzero"
    stroke="none"
    class="chevron__polygon { active ? 'chevron__polygon--active' : '' }"
  />
</svg>
<script>
  export let active = false;
  export let flip = false;
  let flipClass = flip ? 'chevron--flip' : '';
</script>
<style type="text/scss">
   @import '../css/colors.scss';
  .chevron {
    &__polygon {
      width: 100%;
      height: 100%;
      fill: rgba(white, 0.3);
    }
    &--flip {
      transform: scaleX(-1);
    }
    &__polygon { 
      &--active {
        fill: white;
      }
    }
  }
</style>
