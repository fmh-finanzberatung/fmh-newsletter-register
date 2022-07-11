import App from './AppPaywall.svelte';
import EleAttr from 'mk-data-attribute';

const targets = document.querySelectorAll('[data-target="paywall"]');

for (let i = 0, l = targets.length; i < l; i++) {
  const target = targets[i];
  const ele = EleAttr(target);

  // optional attribute: year
  const delay = ele.int('delay', 0);
  const maxRequests = ele.int('maxRequests', 5);

  setTimeout(() => {
    new App({
      target,
      props: {
        maxRequests, 
      }
    });

  }, delay);
}
