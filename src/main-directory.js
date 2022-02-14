import App from './AppDirectory.svelte';
import EleAttr from 'mk-data-attribute';

const folders = document.querySelectorAll('[data-dir]');



const target = document.querySelector("#directory");
const ele = EleAttr(target);
const delay = ele.int('delay',0);

setTimeout(() => {

  new App({
    target,
    props: {
      folders  
    }
  });
}, delay);



