import App from './AppRandomLaureates.svelte';

// optional attribute: year

setTimeout(() => {
  const ele = document.querySelector('#random-laureates');
  const parsedYear =  parseInt(ele.getAttribute('year'));
  new App({
    target: ele,
    props: {
      interval: 3000, 
      year: isNaN(parsedYear) ? new Date().fullYear() : parsedYear 
    }
  });

}, 0);

