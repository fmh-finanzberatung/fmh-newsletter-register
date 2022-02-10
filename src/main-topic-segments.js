import App from './AppTopicSegments.svelte';
import EleAttr from 'mk-data-attribute';

const targets = document.querySelectorAll('[data-target="topic-segments"]');

console.log('targets', targets);

for (let i = 0, l = targets.length; i < l; i++) {
  const target = targets[i];
  const ele = EleAttr(target);

  console.log('target', target);

  const filter = ele.str('filter', ''); 
  const interval = ele.int('interval',0);
  const styleClass = ele.str('class', '');

  // optional attribute: year
  const delay = ele.int('delay', 0);
  const topicId = ele.int('topicId', 0);

  setTimeout(() => {
    new App({
      target,
      props: {
        topicId,
        filter,
        interval,
        styleClass,
      }
    });

  }, delay);
}

