import App from './AppCountDown.svelte';
import EleAttr from 'mk-data-attribute';

//const delay = EleAttr('#count-down').int('delay', 0);

const target = document.querySelector("#count-down");
const ele = EleAttr(target);

const title = ele.str('title', 'FMH-Award'); 
const year = ele.int('year', 2000); 
const month = ele.int('month', 1); 
const day = ele.int('day', 1); 
const hour = ele.int('hour', 1); 
const min = ele.int('min', 1); 
const sec = ele.int('sec', 1); 
const delay = ele.int('delay',0);
const interval = ele.int('interval',0);

setTimeout(() => {

  new App({
    target,
    props: {
      title,
      eventDate: new Date(year, month -1, day, hour, min, sec),
      interval 
    }
  });
}, delay);

//export default app;
