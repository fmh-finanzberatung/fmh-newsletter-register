import App from './AppRandomLaureates.svelte';
import EleAttr from 'mk-data-attribute';

// optional attribute: year

const target = document.querySelector('#random-laureates');
const ele = EleAttr(target);
const fromYear = ele.int('fromYear', 0); 
const throughYear = ele.int('throughYear', 0); 
const delay = ele.int('delay',0);
const interval = ele.int('interval', 3000);

setTimeout(() => {
  
  new App({
    target: target,
    props: {
      interval, 
      fromYear,
      throughYear
    }
  });
}, delay);

