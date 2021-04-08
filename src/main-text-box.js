import App from './AppTextBox.svelte';
import EleAttr from 'mk-data-attribute';

const targets = document.querySelectorAll('[data-target="text-box"]');

console.log('targets', targets);
for (let i = 0, l = targets.length; i < l; i++) {
  const target = targets[i];
  const ele = EleAttr(target);

  // optional attribute: year
  const delay = ele.int('delay', 0);
  const year = ele.int('year', 2021);

  setTimeout(() => {
    new App({
      target,
      props: {
        year
      }
    });

  }, delay);
}
