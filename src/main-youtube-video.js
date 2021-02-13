import App from './AppYoutubeVideo.svelte';
import EleAttr from './lib/ele-attr.js';

// optional attribute: year
const targets = document.querySelectorAll('[data-target="youtube-video"]');

for (let i = 0, l = targets.length; i < l; i++) {

  const target = targets[i];
  const ele = EleAttr(target);
  const delay = ele.int('delay',0);
  const src = ele.str('src','');
  const caption = ele.str('caption','');
  const captionLink = ele.str('captionLink','');

  setTimeout(() => {
    new App({
      target: target,
      props: {
        src,
        caption,
        captionLink
      }
    });

  }, delay);

}
