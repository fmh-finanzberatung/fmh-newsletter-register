import App from './AppMediaSlider.svelte';
import EleAttr from 'mk-data-attribute';

const target = document.querySelector("#media-slider");
const ele = EleAttr(target);

const delay = ele.str('delay', 0);
const url = ele.str('url', '');
const keyword = ele.str('keyword', '');

setTimeout(() => {

  new App({
    target,
    props: {
      url,
      keyword
    }
  });
}, delay);



