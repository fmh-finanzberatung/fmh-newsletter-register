import App from './AppAwardsTable.svelte';
import EleAttr from 'mk-data-attribute';

const targets = document.querySelectorAll('[data-target="awards-table"]');

for (let i = 0, l = targets.length; i < l; i++) {
  const target = targets[i];
  const ele = EleAttr(target);

  // optional attribute: year
  const delay = ele.int('delay', 0);
  const id = ele.int('id', 0);

  setTimeout(() => {
    new App({
      target,
      props: {
        id 
      }
    });

  }, delay);
}
