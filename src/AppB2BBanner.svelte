<script>
  import BankingIcon from "./assets/fmh-b2b-banking-corporate-services.svelte";
  import InfoIcon from "./assets/fmh-b2b-info-services.svelte";
  import PressServicesIcon from "./assets/fmh-b2b-press-services.svelte";
  import PublishingServicesIcon from "./assets/fmh-b2b-publishing-services.svelte";
  import { onMount } from "svelte";
</script>

<template>
  <div class="b2b-banner">
    <div class="b2b-banner__fmhx fmhx">
      <h1 class="fmhx__title">Schon gesehen?</h1>
      <h2 class="fmhx__subtitle">
        FMH hat jetzt auch eine eigene B2B-Brand: FMH X
      </h2>
      <p class="fmhx__p">
        Profitieren Sie von unseren Daten, Produkten und Leistungen!
      </p>
      <ul class="b2b-banner__slider-list">
        <a
          role="listitem"
          class="b2b-banner__slider-item"
          href="https://www.fmhx.de"
          title="Banking &amp; Corporate Services"
        >
          <BankingIcon />
          <span class="b2b-banner__slider-caption">
            Banking &amp; Corporate Services
          </span>
        </a>
        <a
          role="listitem"
          class="b2b-banner__slider-item"
          href="https://www.fmhx.de"
          title="Publishing Services"
        >
          <PublishingServicesIcon />
          <span class="b2b-banner__slider-caption"> Publishing Services </span>
        </a>
        <a
          role="listitem"
          class="b2b-banner__slider-item"
          href="/fuer-redaktionen"
          title="Presse Services"
        >
          <PressServicesIcon />
          <span class="b2b-banner__slider-caption"> Presse-Services </span>
        </a>
        <a
          role="listitem"
          class="b2b-banner__slider-item"
          href="/banking-corporate-service"
          title="Info-Services"
        >
          <InfoIcon />
          <span class="b2b-banner__slider-caption"> Info-Services </span>
        </a>
      </ul>

      <div class="fmhx__buttons">
        <a
          class="b2b-banner__button b2b-banner__button--primary"
          href="https://www.fmhx.de">Zur Website von FMH X</a
        >
      </div>
    </div>
    <div class="b2b-banner__certificates certificates">
      <figure class="certificates__figure">
        <caption class="certificates__caption">
          <div class="certificates__title">
            Zertifizierte Kundenfreundlichkeit
          </div>
          <div class="certificates__subtitle">
            Für Vermittler von Baufinanzierungen
          </div>
        </caption>
        <a href="https://cert.fmh.de" class="certificates__logo-link">
          <img
            class="certificates__logo"
            src="https://www.fmh.de/resources/assets/1936/original/0eb4d826ec0bcf0d380a246530bd491ceaee6f78-Vermittler-Zertifikat-Logo.png"
          />
        </a>
      </figure>
      <div class="certificates__buttons">
        <a
          class="b2b-banner__button b2b-banner__button--secondary"
          href="https://cert.fmh.de"
        >
          Zur FMH-Zertizierung
        </a>
      </div>
      <a
        class="certificates__text-link"
        href="https://www.fmh.de/baufinanzierung/artikel/zertifikat-fuer-baufinanzierungsvermittler-2023-07-01"
      >
        Kundenorientierter Service und Dienstleistungen stehen im Mittelpunkt
      </a>
    </div>
  </div>
</template>

<style type="text/scss">
  @import "./css/buttons.scss";
  @import "./css/colors.scss";
  @import "./css/fonts.scss";

  .b2b-banner {
    &,
    & * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    margin: 0 auto;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    &__button {
      @include button;
      @include button__standard;
      border-radius: 3px;
      font-family: $font-family__primary;
      display: inline-block;
      text-decoration: none;
      line-height: 1.6em;
      background-color: $color__primary--lighter;
      padding: 0.25em 0.5em;
      width: 75%;
      &--primary {
        &:hover {
          color: $color__primary--dark;
          background-color: white;
        }
      }
      &--secondary {
        &:hover {
          background-color: $color__primary--lighter;
        }
      }
    }
  }

  .fmhx,
  .certificates {
    flex: 1 1 300;
    min-width: 300px;
    position: relative;
    padding-bottom: 4rem;
    &__p {
      color: white;
      font-family: $font-family__primary;
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
    &__buttons {
      padding: 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-bottom: 0;
      //buttons container
    }
  }

  .fmhx {
    padding: 1rem;
    background-color: $color__primary--lighter-a;
    &__title,
    &__subtitle {
      margin: 0;
      padding: 0;
      font-family: $font-family__primary;
      line-height: 1.2em;
    }
    &__title {
      font-size: 1.4rem;
      font-family: $font-family__primary;
      font-weight: 300;
      color: $color__primary--tender;
    }
    &__subtitle {
      font-size: 1.6rem;
      font-family: $font-family__primary;
      font-weight: 300;
      color: white;
    }
  }

  .certificates {
    &__title {
      font-size: 1.4rem;
      font-family: $font-family__primary;
      font-weight: 300;
      color: $color__primary;
    }
    &__subtitle {
      font-size: 1.6rem;
      font-family: $font-family__primary;
      font-weight: 300;
      color: $color__primary;
    }
    &__logo {
      display: block;
      width: 100%;
      max-width: calc(400px - 2rem);
      height: auto;
    }
    &__figure {
    }
  }
</style>
