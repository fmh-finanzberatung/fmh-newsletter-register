import App from './AppGallery.svelte';
import EleAttr from './lib/ele-attr.js';

const target = document.querySelector("#gallery");
const ele = EleAttr(target);

// optional attribute: year
const year = ele.int('year', new Date().getFullYear());
const delay = ele.int('delay', 0);

setTimeout(() => {
  new App({
    target,
    props: {
      year
    }
  });

}, delay);

