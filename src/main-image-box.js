import App from './AppImageBox.svelte';
import EleAttr from './lib/ele-attr.js';

const targets = document.querySelectorAll('[data-target="image-box"]');

for (let i = 0, l = targets.length; i < l; i++) {

  const target = targets[i];
  const ele = EleAttr(target);

  console.log('ele dataset', ele.dataset);

  // optional attribute: year
  const caption = ele.int('caption', '');
  const captionLink = ele.int('captionLink', '');
  const imgUrl = ele.int('imgUrl', '');
  const blowUpUrl = ele.int('blowUpUrl', '');
  const delay = ele.int('delay', 0);

  setTimeout(() => {
    new App({
      target,
      caption,
      imgUrl,
      blowUpUrl: blowUpUrl || imgUrl,
      captionLink
    });

  }, delay);
}
