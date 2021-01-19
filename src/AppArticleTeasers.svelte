<script>
  import axios from 'axios'; 
  import preferredImage from './lib/preferred-image.js';
  import preferredUrl from './lib/preferred-url.js';
  export let url = '';
  export let page = 1;
  export let pageSize = 10;
  export let keyword = '';
  export let articles = [];

  let reqUrl = url;
  if (keyword) { 
    reqUrl += `/${keyword}`;
  }
  if (page) { 
    reqUrl += `/${pageSize}`;
  }
  if (pageSize) { 
    reqUrl += `/${page}`;
  }
  
  axios.get(reqUrl)
  .then((res) => {
     console.log('res.data', res.data.articles);
     for (let i = 0, l = res.data.articles.length; i < l; i++) {
        articles = [...articles, res.data.articles[i]]; 
      }
    })
    .catch((err) => {
      console.error(err);
    });

</script>

<template>
  <div class="article-teasers">
    <ul class="article-teasers__list"> 
      {#each articles as article }
        <li class="article-teasers__list-item">
          <a href="{preferredUrl(article.urls)}"
            class="article-teasers__link">
            {#if preferredImage(article.documents)} 
              <figure class="article-teasers__figure">         
                <img src="{preferredImage(article.documents, 'medium').url}" 
                  alt="{preferredImage(article.documents, 'medium').alt}"
                 class="article-teasers__img" />
              </figure>
            {/if} 
            <h2 class="article-teasers__headline">
              <span class="article-teasers__title">
                {article.title}
              </span>
              <span class="article-teasers__subtitle">
                {article.subtitle}
              </span>
            </h2>
            <div class="article-teasers__abstract">
              <p class="article-teasers__p">
                {article.abstract} <span class="article-teasers__more">... mehr</span>
              </p>
            </div>
          </a>
        </li>
      {/each}
    </ul> 
  </div>
</template>

<style lang="scss">
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .article-teasers {
    &, * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
    &__title, &__subtitle, &__p {
     font-family: $font-family__primary;
    }
    &__img {
      display: block;
      border-radius: 4px;
    } 
    &__figure {
      display: block;
      margin: 0 1em 0 0;
      float: left; 
    } 
    &__list {
      padding: 10px;
      display: block;
      border-radius: 4px; 
      box-shadow: 0px 4px 5px rgba(black, 0.3);  
    }
    &__list-item {
      padding: 10px 10px; 
      display: block;
      &:after {
        display: table;
      }
      &:first-child {
        border-bottom: 1px solid #ddd; 
      }
    }
    &__link {
      display: block;
      text-decoration: none;
      &:hover {
        .article-teasers__title,
        .article-teasers__subtitle,
        .article-teasers__more {
          text-decoration: underline;
        }
      }
    }
    &__title, &__more {
     color: $color__primary;
    }
    &__title, &__subtitle {
      display: block;
    }
    &__title {
      margin: 0.25em 0; 
      line-height: 1.3em; 
      font-weight: 500; 
      font-size: $font-size__headline;  
      letter-spacing: 0.025em;
    }
    &__subtitle {
      line-height: 1.3em; 
      margin: 0.5em 0; 
      color: $color__text;
      font-weight: 500; 
      font-size: $font-size__subtitle;  
    }
    &__p {
      color: $color__text; 
      line-height: 1.4em;
      font-size: $font-size__primary;  
    }
    &__more {
      font-weight: 500; 
    }

  }
</style>
