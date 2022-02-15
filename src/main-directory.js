import App from './AppDirectory.svelte';
import EleAttr from 'mk-data-attribute';

const folders = document.querySelectorAll('[data-dir]');
const target = document.querySelector("#directory");
const ele = EleAttr(target);
const delay = ele.int('delay', 0);
const devHost = ele.str('devHost', '');

//don't use in development 

setTimeout(() => {

  if (window.location.href.indexOf(devHost) !== -1) {
    console.log(`Component Viewer is not active because devHost ${devHost} is in the url`);
    console.log(`Component Viewer not visible in development`);
    return false;
  }

  new App({
    target,
    props: {
      folders  
    }
  });
}, delay);



