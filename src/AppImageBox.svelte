<script>
  export let caption = '';
  export let imgUrl = '';
  export let blowUpUrl = '';
  export let captionLink = '';
  export let alt = '';

  export let blowUpClass = '';

  function toggleBlowUp() {
    if (!blowUpUrl) return false;
    
    blowUpClass = blowUpClass ? '' : 'blow-up--visible';
  }

  function altText() {
    if (alt) {
      return alt;
    }
    if (caption) {
      return caption;
    }
    return '';
  }
</script>

<template>
  <div class="image-box"> 
    <figure class="image-box__blow-up blow-up {blowUpClass}">
      <img src="{blowUpUrl}"
        alt="{altText()}"
        on:click|preventDefault={toggleBlowUp}
        class="img blow-up__img" />
      {#if caption}
        <figcaption
          class="figcaption">
          {#if captionLink} 
            <a href="{captionLink}"
              class="caption-text caption-text--link blow-up__caption-text"> 
              {caption}
            </a>
          {:else}
            <span
              class="caption-text blow-up__caption-text"> 
              {caption}
            </span>
          {/if}
        </figcaption>
      {/if}
    </figure>
    <figure class="image-box__figure">
      {#if blowUpUrl} 
        <a href="/"
           on:click|preventDefault={toggleBlowUp}> 
          <img src="{imgUrl}"
            alt="{altText()}"
            class="img image-box__img"/>
        </a>  
      {:else}
        imgUrl: {imgUrl}
        <img lazy="true"
          src="{imgUrl}"
          alt="{altText()}"
          class="img image-box__img"/>
      {/if}
      {#if caption}
        <figcaption
          class="figcaption">
          {#if captionLink} 
            <a href="{captionLink}"
              class="caption-text caption-text--link image-box__caption-text"> 
              {caption}
            </a>
          {:else}
            <span
              class="caption-text image-box__caption-text"> 
              {caption}
            </span>
          {/if}
        </figcaption>
      {/if}
    </figure>
  </div>  
</template>

<style lang="scss">
  @import "./css/colors.scss";
  @import "./css/fonts.scss";
  @import "./css/buttons.scss";

  .figcaption {
    display: block;
  }
  .caption-text {
    margin-left: auto;
    margin-right: auto;
    padding: 1em; 
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: block;
    line-height: 1.4em;
    font-family: $font-family__primary; 
    background-color: rgba($color__primary--lighter, 1);
    color: white;
    font-weight: 500;
    text-align: center;
    &--link {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      } 
    }
  }
  .img {
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .blow-up {
    &, * {
      box-sizing: border-box;  
    }
    display: block;
    background-color: rgba($color__primary--light, 0.2);
    left: 0px;
    top: 0px;
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    position: fixed;
    &--visible {
      z-index: 10; 
      visibility: visible;
      overflow: visible;
      width: 100vw;
      height: 100vh;
    }
    &__img {
      border: 5px  $color__primary--dark; 
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5vh;
      width:70vw;
      min-width: 300px;
      max-width: 650px;
    }
    &__caption-text {
      box-shadow: 0 5px 5px rgba($color__primary--dark, 0.7); 
      font-size: $font-size__headline;
      width:70vw;
      min-width: 300px;
      max-width: 650px;
    }
  } 
  .image-box {
  &, & > * {
      margin: 0; 
      box-sizing: border-box;  
    }
    height: 100%; 
    &__img {
      margin-top: 0;
      width: 100%; 
      display: block;
    }
    &__caption-text {
      font-size: $font-size__primary;
    }
  }
  

</style>
