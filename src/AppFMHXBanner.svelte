<script>
  import { onMount } from "svelte";

  const DISPLAY_TYPE_GENERAL = "general";
  const DISPLAY_TYPE_MORTGAGE_RESEARCH = "mg";
  const DISPLAY_TYPE_FMHX = "fmhx";

  export let displayType = DISPLAY_TYPE_FMHX; //DISPLAY_TYPE_MORTGAGE_RESEARCH; //DISPLAY_TYPE_GENERAL;

  const displayDefintions = {
    [DISPLAY_TYPE_GENERAL]: {
      imgUrl(size) {
        return `https://www.fmh.de/resources/assets/1762/${size}/c8c2ac41cdecb1817a0e9f7b51efbe6ad78747cc-burning-planet.jpg`;
      },
      box: {
        question: "Schon gewusst?",
        answer: `Mehr als 300 europäische Unternehmen nutzen bereits unsere
        Daten und Service für ihren Erfolg`,
        ctaLabel: "Was können wir für Sie tun?",
        ctaText: "Jetzt beraten lassen",
        link: "/banking-corporate-service",
      },
    },
    [DISPLAY_TYPE_MORTGAGE_RESEARCH]: {
      imgUrl(size) {
        return `https://www.fmh.de/resources/assets/1789/${size}/d596912241d8c877dc85a93c0cdaa6c2b588e998-mortgage-research.jpg`;
      },
      box: {
        question: "Neue Studie",
        answer: `Marktkompass 2022: Baufinanzierung und
        Turbulenzen<br/>Einblick. Ausblick. Durchblick.`,
        ctaLabel: "Eine Studie von FMH X und SWI Finance",
        ctaText: "Mehr erfahren",
        link: "https://www.fmhx.de/studie-marktkompass-baufinanzierung-2022",
      },
    },
    [DISPLAY_TYPE_FMHX]: {
      imgUrl(size) {
        return `https://www.fmh.de/resources/assets/1789/${size}/d596912241d8c877dc85a93c0cdaa6c2b588e998-mortgage-research.jpg`;
      },
      box: {
        question: "Schon gesehen?",
        answer: `FMH hat jetzt auch eine eigene
        B2B-Brand: FMH X`,
        ctaLabel:
          "Profitieren Sie von unseren Daten, Produkten und Leistungen!",
        ctaText: "Zur Website von FMH X",
        link: "https://www.fmhx.de",
      },
    },
  };
  const displayDef = displayDefintions[displayType];
  let slider = null;
  let sliderItemIndex = 0;
  let sliderItemsLength = 0;
  let touchedHandle = "";

  import BankingIcon from "./assets/fmh-b2b-banking-corporate-services.svelte";
  import InfoIcon from "./assets/fmh-b2b-info-services.svelte";
  import PressServicesIcon from "./assets/fmh-b2b-press-services.svelte";
  import PublishingServicesIcon from "./assets/fmh-b2b-publishing-services.svelte";
  import ChevronLeftIcon from "./assets/chevron-left.svelte";

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  function imgUrl(size) {}

  function filterTagChildren(parentNode) {
    const children = [...parentNode.childNodes].filter((n) => n.tagName);
    return children;
  }

  function avgItemWidth(parentNode) {
    const tagChildren = filterTagChildren(parentNode);
    return (
      tagChildren.reduce((sum, child) => sum + child.clientWidth, 0) /
      tagChildren.length
    );
  }

  $: touchedLeftHandle = touchedHandle === "left";
  $: touchedRightHandle = touchedHandle === "right";
  $: activeLeftHandle = Math.abs(sliderItemIndex) > 0;
  $: activeRightHandle = Math.abs(sliderItemIndex) < sliderItemsLength - 2;

  function moveElement(ele, x) {
    const animation = ele.animate(
      [
        //{ transform: `translateX(${startAt})` },
        { transform: `translateX(${x}px)` },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        //easing: 'linear',
        fill: "forwards",
      }
    );
    animation.onfinish = (ev) => {
      console.log("animation finished", ev);
    };
    //animation.pause();
  }

  onMount(() => {
    sliderItemsLength = filterTagChildren(slider).length;
    window.addEventListener(
      "resize",
      debounce((ev) => {
        //console.log('debounce ev', ev);
        const x = 0;
        moveElement(slider, x);
      }, 500),
      true
    );
    if (window.DeviceOrientationEvent) {
      window.addEventListener(
        "orientationchange",
        (ev) => {
          // console.log(ev);
          const x = 0;
          moveElement(slider, x);
        },
        true
      );
    }
  });

  function slideLeft(ev) {
    if (!activeLeftHandle) {
      return false;
    }
    ev.preventDefault();
    sliderItemIndex += 1;
    //if (sliderItemIndex <= 0) {
    //  sliderItemIndex = 0;
    //}
    return slide(ev);
  }

  function slideRight(ev) {
    if (!activeRightHandle) {
      return false;
    }
    ev.preventDefault();
    sliderItemIndex -= 1;
    if (sliderItemIndex >= sliderItemsLength - 2) {
      sliderItemIndex = sliderItemsLength - 2;
    }
    return slide(ev);
  }

  function slide(ev) {
    console.log("ev:", ev);
    console.log("ev:", ev.clientX);
    let scrollWidth = avgItemWidth(slider);
    let x = sliderItemIndex * scrollWidth;
    moveElement(slider, x);
  }
</script>

<template>
  <div class="b2b-banner">
    <div class="b2b-banner__wrapper">
      <picture class="b2b-banner__picture">
        <source
          media="(max-width: 799px)"
          srcset={displayDef.imgUrl("giant")}
        />
        <source
          media="(min-width: 800px)"
          srcset={displayDef.imgUrl("original")}
        />
        <img
          class="b2b-banner__img"
          src={displayDef.imgUrl("original")}
          alt="FMH Firmenkunden"
          loading="lazy"
          width="800"
          height="320"
        />
      </picture>
      <a class="b2b-banner__box" href={displayDef.box.link}>
        <span class="b2b-banner__box-question"
          >{@html displayDef.box.question}</span
        >
        <span class="b2b-banner__box-answer">
          {@html displayDef.box.answer}
        </span>
        <span class="b2b-banner__box-can-we-help">
          {displayDef.box.ctaLabel}
        </span>
        <span class="b2b-banner__box-link"> {displayDef.box.ctaText} </span>
      </a>
      <footer class="b2b-banner__slider">
        <div class="b2b-banner__slider-wrapper">
          <ul class="b2b-banner__slider-list" dir="ltr" bind:this={slider}>
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
              <span class="b2b-banner__slider-caption">
                Publishing Services
              </span>
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
        </div>
        <div
          class="b2b-banner__slider-handle b2b-banner__slider-handle--left
{activeLeftHandle ? 'b2b-banner__slider-handle--active' : ''}
{touchedLeftHandle ? 'b2b-banner__slider-handle--touch' : ''}
"
          on:click={slideLeft}
          on:touchstart={() => (touchedHandle = "left")}
          on:touchend={() => (touchedHandle = "")}
        >
          <div
            class="b2b-banner__slider-handle-icon 
            {activeLeftHandle ? 'b2b-banner__slider-handle-icon--active' : ''}"
          >
            <ChevronLeftIcon active={activeLeftHandle} />
          </div>
        </div>
        <div
          class="b2b-banner__slider-handle b2b-banner__slider-handle--right
{activeLeftHandle ? 'b2b-banner__slider-handle--active' : ''}
{touchedRightHandle ? 'b2b-banner__slider-handle--touch' : ''}
"
          on:click={slideRight}
          on:touchstart={() => (touchedHandle = "right")}
          on:touchend={() => (touchedHandle = "")}
        >
          <div
            class="b2b-banner__slider-handle-icon
              {activeRightHandle
              ? 'b2b-banner__slider-handle-icon--active'
              : ''}"
          >
            <ChevronLeftIcon flip="true" active={activeRightHandle} />
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style type="text/scss">
  @import "./css/buttons.scss";
  @import "./css/colors.scss";
  @import "./css/fonts.scss";
  $handleWidth: 60px;
  .b2b-banner {
    margin: 0 auto;
    box-sizing: border-box;

    & * {
      padding: 0;
      box-sizing: border-box;
      margin: 0;
      border: 0;
    }

    padding: 0 20px;
    &__wrapper {
      padding: 30px 0 0 0;
      overflow: hidden;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      max-width: 1210px;
    }
    &__box {
      text-decoration: none;
      display: block;
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
      background-color: $color__primary--lighter;
      transition: all 0.3s linear;
    }
    &__slider-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
    &__slider-list {
      position: relative;
      justify-content: space-evenly;
      list-style: none;
      display: flex;
    }
    &__slider-item {
      text-decoration: none;
      position: relative;
      letter-spacing: 0.025em;
      padding: 12px 0;
      text-align: center;
      width: 25%;
      max-width: 200px;
      transition: background-color 0.3s linear;
      &:hover,
      &:active {
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
      background-color: $color__primary--lighter;
      height: 0;
      overflow-y: hidden;
      width: $handleWidth;
      position: absolute;
      top: 0;
      transition: background-color 0.3s linear;
      &--left {
        left: 0;
      }
      &--right {
        right: 0;
      }
      &--active {
        cursor: pointer;
        pointer-events: auto;
        &:hover,
        .b2b-banner__slider-handle--touch {
          // background-color: rgba(black, 0.18);
          background-color: $color__primary--dark;
        }
      }
    }
    &__slider-handle-icon {
      $dim: 60px;
      transform: translateY(20%);
      position: absolute;
      top: 0;
      transform: translateY(50%);
      width: $dim;
      height: $dim;
    }
  }

  // max-width must include 40px of left (20px) and right (20px) margin
  @media (max-width: 560px) {
    .b2b-banner {
      padding: 0;
      &__box {
        margin-left: auto;
        margin-right: auto;
      }
      &__img {
        margin-left: 0;
      }
      &__slider {
        //white-space: nowrap;
      }
      &__slider-wrapper {
        overflow-x: scroll;
        margin-left: $handleWidth;
        margin-right: $handleWidth;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ * */
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
          background: transparent;
          width: 0px;
          height: 0px;
        }
      }
      &__slider-list {
        gap: 0;
        justify-content: space-between;
        // indent left by width of handle
      }
      &__slider-item {
        min-width: 200px;
        scroll-snap-align: start; // center
        scroll-snap-stop: always;
      }
      &__slider-handle {
        height: 100%;
        overflow-y: visible;
      }
    }
  }
</style>
