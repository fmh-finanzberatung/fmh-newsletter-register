<script>
  import BankingIcon from "./assets/fmh-b2b-banking-corporate-services.svelte";
  import InfoIcon from "./assets/fmh-b2b-info-services.svelte";
  import PressServicesIcon from "./assets/fmh-b2b-press-services.svelte";
  import PublishingServicesIcon from "./assets/fmh-b2b-publishing-services.svelte";
  import ChevronLeftIcon from "./assets/chevron-left.svelte";

  function imgUrl(size) {
    return `https://www.fmh.de/resources/assets/1762/${size}/c8c2ac41cdecb1817a0e9f7b51efbe6ad78747cc-burning-planet.jpg`;
  }
</script>

<template>
  <div class="b2b-banner">
    <picture class="b2b-banner__picture">
      <source media="(max-width: 799px)" srcset={imgUrl("giant")} />
      <source media="(min-width: 800px)" srcset={imgUrl("original")} />
      <img
        class="b2b-banner__img"
        src={imgUrl("original")}
        alt="FMH Firmenkunden"
        loading="lazy"
        width="800"
        height="320"
      />
    </picture>
    <div class="b2b-banner__box">
      <span class="b2b-banner__box-question"> Schon gewusst? </span>
      <span class="b2b-banner__box-answer">
        Mehr als 300 europäische Unternehmen nutzen bereits unsere Daten und
        Services für ihren Erfolg.
      </span>
      <span class="b2b-banner__box-can-we-help">
        Was können wir für Sie tun?
      </span>
      <a class="b2b-banner__box-link" href="https://www.fmh.de/b2b/">
        Jetzt beraten lassen
      </a>
    </div>
    <div class="b2b-banner__slider">
      <ul class="b2b-banner__slider-list" dir="ltr">
        <li class="b2b-banner__slider-item">
          <BankingIcon />
          <span class="b2b-banner__slider-caption">
            Banking & Corporate<br />Services
          </span>
        </li>
        <li class="b2b-banner__slider-item">
          <PublishingServicesIcon />
          <span class="b2b-banner__slider-caption"> Publishing Services </span>
        </li>
        <li class="b2b-banner__slider-item">
          <PressServicesIcon />
          <span class="b2b-banner__slider-caption"> Presse-Services </span>
        </li>
        <li class="b2b-banner__slider-item">
          <InfoIcon />
          <span class="b2b-banner__slider-caption"> Info-Services </span>
        </li>
      </ul>
      <div class="b2b-banner__slider-handle b2b-banner__slider-handle--left">
        <div class="b2b-banner__slider-handle-icon">
          <ChevronLeftIcon />
        </div>
      </div>
      <div class="b2b-banner__slider-handle b2b-banner__slider-handle--right">
        <div class="b2b-banner__slider-handle-icon">
          <ChevronLeftIcon flip="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/scss">
  @import "./css/buttons.scss";
  @import "./css/colors.scss";
  @import "./css/fonts.scss";
  .b2b-banner {
    & {
      padding: 30px 0 0 0;
    }
    & * {
      padding: 0;
    }
    &,
    & * {
      box-sizing: border-box;
      margin: 0;
      border: 0;
    }
    overflow: hidden;
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 1210px;
    &__box {
      position: relative;
      max-width: 480px;
      padding: 30px 40px 25px;
      background-color: $color__primary--lighter-a;
      margin-bottom: 27px;
    }

    &__box-answer,
    &__box-question,
    &__box-can-we-help {
      letter-spacing: 0.0125em;
    }

    &__box-answer,
    &__box-question {
      line-height: calc(24px * 1.2);
      font-size: 24px;
    }
    &__box-question {
      color: $color__primary--tender;
    }
    &__box-answer {
      color: white;
    }
    &__box-answer,
    &__box-question,
    &__box-can-we-help,
    &__box-link {
      display: block;
      font-family: $font-family__primary;
    }
    &__box-question {
      font-family: $font-family__primary;
    }
    &__box-answer {
      font-family: $font-family__primary;
    }
    &__box-can-we-help {
      font-size: 16px;
      margin: 1em 0;
      line-height: 1.4em;
      font-family: $font-family__primary;
      font-weight: 300;
      color: white;
    }
    &__box-link {
      transition: all 0.3s linear;
      letter-spacing: 0.085em;
      padding: 0.5em 0;
      line-height: 1.4em;
      font-weight: normal;
      text-decoration: none;
      color: white;
      font-family: $font-family__primary;
      border-radius: 4px;
      text-align: center;
      display: block;
      font-size: 16px;
      font-family: $font-family__primary;
      margin: 10px 0;
      text-transform: uppercase;
      background-color: $color__primary--lighter;
    }
    &__picture {
      left: 0;
      top: 0;
      display: block;
      position: absolute;
      overflow: hidden;
    }
    &__img {
      margin-left: 100px;
      display: block;
      width: 120%; //calc(vw - 100px); //auto;
      min-width: 800px;
      height: auto;
      transform: scaleX(-1);
    }
    &__slider {
      margin: auto 0 0 0;
      position: relative;
      width: 100%;
      background-color: $color__primary--lighter;
    }
    &__slider-list {
      justify-content: space-evenly;
      list-style: none;
      display: flex;
    }
    &__slider-item {
      letter-spacing: 0.025em;
      padding: 12px 0;
      text-align: center;
      width: 25%;
      max-width: 200px;
      transition: background-color 0.3s linear;
      &:hover {
        background-color: rgba(black, 0.18);
        cursor: pointer;
      }
    }
    &__slider-caption {
      color: white;
      font-family: $font-family__primary;
      display: block;
    }
    &__box:hover {
      cursor: pointer;
      .b2b-banner__box-link {
        background-color: white;
        color: $color__primary;
      }
    }
    &__slider-handle {
      height: 0;
      overflow-y: hidden;
      width: 60px;
      position: absolute;
      top: 0;
      cursor: pointer;
      transition: background-color 0.3s linear;
      &--left {
        left: 0;
      }
      &--right {
        right: 0;
      }
      &:hover {
        cursor: pointer;
        background-color: rgba(black, 0.18);
      }
    }
    &__slider-handle-icon {
      $dim: 60px;
      transform: translateY(20%);
      position: absolute;
      top: 0;
      transform: translateY(65%);
      width: $dim;
      height: $dim;
    }
  }

  // max-width must include 40px of left (20px) and right (20px) margin
  @media (max-width: 600px) {
    .b2b-banner {
      margin-right: 10px;
      margin-left: 10px;
      &__box {
        margin-left: 20px;
        margin-right: 20px;
      }
      &__img {
        margin-left: 0;
      }
      &__slider {
        //overflow-x: scroll;
      }
      &__slider-list {
        scroll-snap-type: x proximity;
        padding-left: 425px;
        margin-right: 40px;
        overflow-x: scroll;
      }
      &__slider-item {
        min-width: 200px;
        scroll-snap-align: center;
      }
      &__slider-handle {
        height: 100%;
        overflow-y: visible;
      }
    }
  }
</style>
