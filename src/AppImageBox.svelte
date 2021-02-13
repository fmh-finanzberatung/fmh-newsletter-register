<script>
  export let caption= "";
  export let imgUrl= "";
  export let blowUpUrl = "";
  export let captionLink= "";

  export let blowUpVisible = false;

  console.log('image box   ***************');
  console.log('img     url ***************', imgUrl);
  console.log('blow up url ***************', blowUpUrl);

  function showBlowUp() {
    if (!blowUpUrl) return false;
    blowUpVisible = true;
  }
  
  function hideBlowUp() {
    blowUpVisible = false;
  }

</script>

<template>
  <figure class="blow-up"> 
    blow up 
    <img src="{blowUpUrl}" />
    {#if caption}
      <figcaption
        class="image-box__figcaption">
        {#if captionLink} 
          <a href="{captionLink}"> 
            {captionUrl}
          </a>
        {/if}
      </figcaption>
    {/if}
  </figure>
  <figure class="image-box">
    image box 
    {#if blowUpUrl} 
      <a href="/"
         on:click|preventDefault={showBlowUp}> 
        <img src="{imgUrl}" />
      </a>  
    {:else}
      <img src="{imgUrl}" />
    {/if}
    {#if caption}
      <figcaption
        class="image-box__figcaption">
        {#if captionLink} 
          <a href="{captionLink}"> 
            {caption}
          </a>
        {/if}
      </figcaption>
    {/if}
  </figure>
</template>

<style lang="scss">
  @import "./css/colors.scss";
  @import "./css/fonts.scss";
  @import "./css/buttons.scss";
  .image-box {
    background-color: red;
  }
</style>
