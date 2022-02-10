<script>
  import IntersectionObserver from 'svelte-intersection-observer';
  export let topicId;
  export let filter;
  export let styleClass;

  console.log('filter', filter);

  import axios from 'axios'; 

  let element;
  let segments = [];
  
  const url = `https://www.fmh.de/api/topics/topic/${topicId}/segments`;

  function fetchData(e) {
    // do not fetch if there is already data
    if (segments.length) return false; 
    axios.get(url)
      .then((res) => {
        if (!res.data || res.data.length === 0) return false;
        res.data.segments.forEach((segment) => {
          segments = [...segments, segment]; 
        });
      }).catch((err) => {
        console.error(err);
      });
  }

</script>

<template>
  <IntersectionObserver {element} on:intersect={fetchData}>
    <div bind:this={element} class="topic-segments {styleClass}">
      {#each segments as segment}  
        <section class="topic-segments__section {segment.namespace_not_heritable}">
          <h2 class="topic-segments__title">{@html segment.title}</h2>
          <div class="topic-segments__description">
            {@html segment.formattedDescription}
          </div>
        </section>
      {/each}
    </div>
  </IntersectionObserver>
</template>
  
<style type="text/scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .topic-segments {
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
    // &__description {
    // must be applied in target website 
    // }
    &__link {
      display: block;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
