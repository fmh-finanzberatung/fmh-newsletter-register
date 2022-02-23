<script>
  const DirPosTop = true;
  const DirPosLeft = true;
  const BurgerStateExpanded = true;
  const BurgerStateCollapsed = false;
  export let folders;

  let vertDirPos = DirPosTop;
  let horDirPos = DirPosLeft;
  let burgerState = BurgerStateExpanded;
  let showAll = false;

  let dirItems = [];
  folders.forEach((f) => {
    f.style.height = 0;
    f.style.overflowY = 'hidden';
    dirItems = [...dirItems, f];
  });

  function toggleSelectedItem(index) {
    dirItems[index].style.height =
      dirItems[index].style.height === '0px' ? 'auto' : '0px';
    dirItems[index].style.overflowY =
      dirItems[index].style.overflowY === 'hidden' ? 'auto' : 'hidden';
  }

  function toggleVertDirPos() {
    vertDirPos = !vertDirPos;
  }

  function toggleHorDirPos() {
    horDirPos = !horDirPos;
  }

  function toggleShowAll(ev) {
    ev.preventDefault();
    showAll = !showAll;
    if (showAll) {
      dirItems.forEach((f) => {
        f.style.height = 'auto';
        f.style.overflowY = 'auto';
      });
      return;
    }
    dirItems.forEach((f) => {
      f.style.height = '0px';
      f.style.overflowY = 'hidden';
    });
  }

  function toggleBurger(ev) {
    ev.preventDefault();
    burgerState = !burgerState;
  }
</script>

<section
  class="directory 
   {vertDirPos === DirPosTop ? 'directory--top' : 'directory--bottom'}
   {horDirPos === DirPosLeft ? 'directory--left' : 'directory--right'}"
>
  <nav
    class="directory__nav {burgerState === BurgerStateCollapsed
      ? 'directory__nav--collapsed'
      : ''}"
  >
    <header class="directory__header">
      <a href="#" class="directory__burger" on:click={toggleBurger}>
        <div class="directory__burger-bun directory__burger-bun--top" />
        <div class="directory__burger-bun directory__burger-bun--middle" />
        <div class="directory__burger-bun directory__burger-bun--bottom" />
      </a>
      <h2 class="directory__title">Components</h2>
      <div
        class="directory__corner"
        title="Move Component Directory to different corner"
      >
        <div
          class="directory__corner-item directory__corner-item--top"
          on:click={() => toggleVertDirPos()}
        />
        <div
          class="directory__corner-item directory__corner-item--left"
          on:click={() => toggleHorDirPos()}
        />
        <div
          class="directory__corner-item directory__corner-item--right"
          on:click={() => toggleHorDirPos()}
        />
        <div
          class="directory__corner-item directory__corner-item--bottom"
          on:click={() => toggleVertDirPos()}
        />
      </div>
    </header>
    <ul class="directory__list">
      {#each dirItems as item, index}
        <li
          class="directory__item {item.style.height != '0px'
            ? 'directory__item--selected'
            : ''}"
          on:click={() => toggleSelectedItem(index)}
        >
          <span class="directory__item-nr">{index + 1}</span>
          {item.dataset['dir']}
        </li>
      {/each}
    </ul>
    <div class="directory__show-options">
      <a
        href="#"
        class="directory__show directory__show--all"
        on:click={toggleShowAll}>{ showAll ? 'Show All' : 'Hide All' }</a
      >
      <!--a
        href="#"
        class="directory__show directory__show--none"
        on:click={toggleOrientation}></a
      -->
    </div>
  </nav>
</section>

<style type="text/scss">
  @import './css/buttons.scss';
  @import './css/colors.scss';
  @import './css/fonts.scss';
  .directory {
    &,
    & * {
      box-sizing: border-box;
    }
    border-bottom-right-radius: 4px;
    position: relative;
    padding: 0.5rem 1rem 1rem;
    background-color: rgba($color__primary, 0.8);
    transition: all 1s ease;
    position: fixed;
    z-index: 1000;
    &__nav {
      position: relative;
    }
    &__burger {
      top: 0.3rem;
      width: 2.5rem;
      position: absolute;
      display: flex;
      flex-flow: row wrap;
      gap: 0.4rem 0;
    }
    &__burger-bun {
      &:before {
        border-radius: 4px;
        width: 2rem;
        display: block;
        content: ' ';
        background-color: white;
        height: 0.3rem;
      }
      &--top {
      }
      &--middle {
      }
      &--bottom {
      }
    }
    &__corner {
      width: 2.5rem;
      position: absolute;
      top: 0.1rem;
      right: 0rem;
      display: flex;
      flex-flow: row wrap;
    }
    &__corner-item {
      line-height: 0.75rem;
      cursor: pointer;
      font-size: 0.8rem;
      &:before {
        display: inline-block;
        color: white;
        content: '▲';
      }
      &--top {
        text-align: center;
        width: 2.5rem;
        &:before {
        }
      }
      &--bottom {
        text-align: center;
        width: 2.5rem;
        &:before {
          transform: scaleY(-1);
        }
      }
      &--left {
        width: 1.25rem;
        text-align: left;
        &:before {
          transform: rotate(-90deg);
        }
      }
      &--right {
        text-align: right;
        width: 1.25rem;
        &:before {
          transform: rotate(90deg);
        }
      }
      &:hover {
        &:before {
          color: $color__primary;
        }
      }
    }
    &--top {
      top: 0px;
    }
    &--bottom {
      bottom: 0px;
    }
    &--left {
      left: 0px;
    }
    &--right {
      left: none;
      right: 0px;
    }
    &__nav {
      max-width: 500px;
      max-height: 800px;
      height: auto;
      width: auto;
      transition: all 1s ease;
      overflow: visible;
      &--collapsed {
        max-width: 2.2rem;
        max-height: 2.2rem;
        overflow: hidden;
      }
    }
    &__header {
      min-width: 300px;
      position: relative;
    }
    &__title {
      text-align: center;
      color: white;
      padding: 0.25em 1em 0.75em 1em;
      line-height: 1.4em;
      font-family: $font-family__primary;
      font-weight: 500;
      margin: 0;
      font-size: $font-size__headline;
    }
    &__list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      cursor: pointer;
      color: $color__primary;
      background-color: rgba(white, 0.5);
      margin: 0;
      padding: 0.25em 0.5em;
      font-weight: 500;
      border-bottom: 1px solid rgba($color__primary, 0.5);
      font-family: $font-family__primary;
      &--selected {
        background-color: rgba($color__primary, 0.9);
        color: white;
      }
      &:hover {
        background-color: rgba($color__primary, 0.1);
        color: white;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    &__item-nr {
      display: inline-block;
      width: 2em;
      color: white;
    }
    &__show-options {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: 0.5em 0;
    }
    &__show {
      padding: 0.5em 0.5em 0 0.5em;
      line-height: 1.4em;
      cursor: pointer;
      color: $color__primary--tender;
      font-weight: 500;
      font-family: $font-family__primary;
      text-decoration: none;
      &:hover {
        color: white;
      }
    }
  }
  @media (max-width: 800px) {
  }
</style>
