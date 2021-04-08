<script>
  export let src = '';
  export let caption = '';
  export let captionLink = '';
</script>

<div class="youtube-video">
  <figure class="youtube-video__figure">
    <div class="youtube-video__liquid">
      <iframe
        class="youtube-video__iframe"
        title="FMH-Award"
        src="{src}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    </div>
  </figure>
  <caption class="youtube-video__caption">
    {#if captionLink }
      <a href="{captionLink}"
        class="youtube-video__caption-link"> 
        {caption}
      </a>
    {:else}
      <span 
        class="youtube-video__caption-text"> 
       {caption}
     </span>
    {/if}   
  </caption>
</div>
  
<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .youtube-video {
    background-color: $color__primary--lighter;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    &, & * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0; 
    }
    &__figure {
      display: block;
      width: 100%; 
    }
    &__liquid {
      position: relative; 
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
    } 
    &__iframe {
      box-shadow: 0px 4px 5px rgba(black, 0.3);  
      border: 10px solid $color__primary--lighter;
      border-radius: 4px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none; 
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    &__caption {
      margin: 0 10px 10px; 
      display: block; 
    }
    &__caption-text,  &__caption-link {
      font-family: $font-family__primary;
      font-size: $font-size__primary;
      padding: 1em;
      color: white;
      line-height: 1.3em;
      display: block;
      border-radius: 4px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      color: white;
      background-color: rgba(white, 0.1); 
    }
    &__caption-link {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }   
</style>
