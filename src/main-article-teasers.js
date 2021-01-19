import App from './AppArticleTeasers.svelte';
import EleAttr from './lib/ele-attr.js';

const target = document.querySelector("#article-teasers");
const ele = EleAttr(target);

const page = ele.int('page', 1);
const pageSize = ele.int('pageSize',10);
const delay = ele.int('delay',0);
const url = ele.str('url', '');
const keyword = ele.str('keyword', '');

setTimeout(() => {

  new App({
    target,
    props: {
      url,
      keyword,
      page,
      pageSize
    }
  });
}, delay);


