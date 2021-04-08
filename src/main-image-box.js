import App from './AppImageBox.svelte';
import EleAttr from 'mk-data-attribute';

const targets = document.querySelectorAll('[data-target="image-box"]');

for (let i = 0, l = targets.length; i < l; i++) {

  const target = targets[i];
  const ele = EleAttr(target);

  const caption = ele.str('caption', '');
  const captionLink = ele.str('captionLink', '');
  const imgUrl = ele.str('imgUrl', '');
  const alt = ele.str('alt', '');
  const blowUpUrl = ele.str('blowUpUrl', '');
  const delay = ele.int('delay', 0);

  setTimeout(() => {
    new App({
      target,
      props: {
        caption,
        imgUrl,
        alt,
        blowUpUrl: blowUpUrl || imgUrl,
        captionLink
      }
    });

  }, delay);
}
