import App from './AppB2BBanner.svelte';
import EleAttr from 'mk-data-attribute';

const target = document.querySelector("#b2b-banner");
const ele = EleAttr(target);

const delay = ele.int('delay', 100);

setTimeout(() => {

  new App({
    target,
    props: { }
  });
}, delay);
