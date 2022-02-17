!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,o;function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function L(e){return document.createElement(e)}function d(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function f(){return p(" ")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e){o=e}function g(e){(function(){if(!o)throw new Error("Function called outside component initialization");return o})().$$.on_mount.push(e)}const $=[],v=[],x=[],_=[],w=Promise.resolve();let C=!1;function M(e){x.push(e)}const Z=new Set;let y=0;function S(){const e=o;do{for(;y<$.length;){const e=$[y];y++,m(e),k(e.$$)}for(m(null),$.length=0,y=0;v.length;)v.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];Z.has(t)||(Z.add(t),t())}x.length=0}while($.length);for(;_.length;)_.pop()();C=!1,Z.clear(),m(e)}function k(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const F=new Set;let B;function P(){B={r:0,c:[],p:B}}function D(){B.r||r(B.c),B=B.p}function E(e,t){e&&e.i&&(F.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(F.has(e))return;F.add(e),B.c.push((()=>{F.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function N(e){e&&e.c()}function j(e,n,s,l){const{fragment:o,on_mount:a,on_destroy:c,after_update:u}=e.$$;o&&o.m(n,s),l||M((()=>{const n=a.map(t).filter(i);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(M)}function A(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function q(e,t){-1===e.$$.dirty[0]&&($.push(e),C||(C=!0,w.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(t,i,s,l,a,c,L,d=[-1]){const p=o;m(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:i.target||p.$$.root};L&&L(f.root);let h=!1;if(f.ctx=s?s(t,i.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),h&&q(t,e)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();i.intro&&E(t.$$.fragment),j(t,i.target,i.anchor,i.customElement),S()}m(p)}class O{$destroy(){A(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function T(t){let n,r,i,s,l,o;return{c(){n=d("svg"),r=d("g"),i=d("polygon"),s=d("path"),l=d("path"),o=d("polygon"),b(i,"id","Path-Copy-2"),b(i,"points","0 0 76 0 76 76 0 76"),b(s,"d","M70,19 L70,57 L38.5,57 L38.5,50.5 L64.5,50.5 L64.5,24.5 L38.5,24.5 L38.5,19 L70,19 Z M59.5,40.5 L59.5,45.5 L54,45.5 L54,40.5 L59.5,40.5 Z M49,40.5 L49,45.5 L43.5,45.5 L43.5,40.5 L49,40.5 Z M59.5,30 L59.5,35 L54,35 L54,30 L59.5,30 Z M49,30 L49,35 L43.5,35 L43.5,30 L49,30 Z"),b(s,"id","Combined-Shape"),b(s,"fill","#1194DB"),b(l,"d","M44.5,8 L44.5,57 L6,57 L6,8 L44.5,8 Z M38.5,45.5 L33,45.5 L33,51 L38.5,51 L38.5,45.5 Z M28,45.5 L22.5,45.5 L22.5,51 L28,51 L28,45.5 Z M17.5,45.5 L12,45.5 L12,51 L17.5,51 L17.5,45.5 Z M38.5,35 L33,35 L33,40.5 L38.5,40.5 L38.5,35 Z M28,35 L22.5,35 L22.5,40.5 L28,40.5 L28,35 Z M17.5,35 L12,35 L12,40.5 L17.5,40.5 L17.5,35 Z M38.5,24.5 L33,24.5 L33,30 L38.5,30 L38.5,24.5 Z M28,24.5 L22.5,24.5 L22.5,30 L28,30 L28,24.5 Z M17.5,24.5 L12,24.5 L12,30 L17.5,30 L17.5,24.5 Z M38.5,14 L33,14 L33,19.5 L38.5,19.5 L38.5,14 Z M28,14 L22.5,14 L22.5,19.5 L28,19.5 L28,14 Z M17.5,14 L12,14 L12,19.5 L17.5,19.5 L17.5,14 Z"),b(l,"id","Combined-Shape"),b(l,"fill","#1194DB"),b(o,"id","Path-3"),b(o,"fill","#5FD5FF"),b(o,"points","0 71 16 55 26 65 41 50 51 60 71 40 76 45 76 30 61 30 66 35 51 50 41 40 26 55 16 45 0 61"),b(r,"id","Banking-Corporate-Services"),b(r,"stroke","none"),b(r,"stroke-width","1"),b(r,"fill","none"),b(r,"fill-rule","evenodd"),b(n,"width","76px"),b(n,"height","76px"),b(n,"viewBox","0 0 76 76"),b(n,"version","1.1"),b(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){c(e,n,t),a(n,r),a(r,i),a(r,s),a(r,l),a(r,o)},p:e,i:e,o:e,d(e){e&&u(n)}}}class H extends O{constructor(e){super(),I(this,e,null,T,s,{})}}function W(t){let n,r,i,s,l,o,L,p,f,h;return{c(){n=d("svg"),r=d("g"),i=d("polygon"),s=d("g"),l=d("path"),o=d("path"),L=d("g"),p=d("path"),f=d("path"),h=d("path"),b(i,"id","Path-Copy-2"),b(i,"points","0.166666667 0 76.1666667 0 76.1666667 76 0.166666667 76"),b(l,"d","M58.1818182,0 L5.81818182,0 C2.61818182,0 0,2.61818182 0,5.81818182 L0,40.7272727 C0,43.9272727 2.61818182,46.5454545 5.81818182,46.5454545 L26.1818182,46.5454545 L26.1818182,52.2666667 L20.3636364,52.2666667 L20.3636364,57.6 L43.6363636,57.6 L43.6363636,52.2666667 L37.8181818,52.2666667 L37.8181818,46.5454545 L58.1818182,46.5454545 C61.3818182,46.5454545 64,43.9272727 64,40.7272727 L64,5.81818182 C64,2.61818182 61.3818182,0 58.1818182,0 Z M58.3871658,40.9326203 L6.02352941,40.9326203 L6.02352941,6.02352941 L58.3871658,6.02352941 L58.3871658,40.9326203 Z"),b(l,"id","Shape"),b(l,"fill-rule","nonzero"),b(o,"d","M19.741193,12 L19.741193,15.5218175 L15.7035228,15.5218175 L15.7035228,20.8647718 L19.2253403,20.8647718 L19.2253403,24.3859087 L15.7035228,24.3859087 L15.7035228,33.25 L12,33.25 L12,12 L19.741193,12 Z M28.1363891,12 L30.6863891,20.0753403 L33.2363891,12 L36.9705364,12 L36.9705364,33.25 L33.4180945,33.25 L33.4180945,20.3482386 L30.7163331,28.4535228 L30.6557646,28.4535228 L27.9540032,20.3482386 L27.9540032,33.25 L24.4022418,33.25 L24.4022418,12 L28.1363891,12 Z M45.4535228,12 L45.4535228,20.8035228 L48.6718175,20.8035228 L48.6718175,12 L52.3753403,12 L52.3753403,33.25 L48.6718175,33.25 L48.6718175,24.3253403 L45.4535228,24.3253403 L45.4535228,33.25 L41.75,33.25 L41.75,12 L45.4535228,12 Z"),b(o,"id","Combined-Shape"),b(s,"id","Desktop"),b(s,"transform","translate(0.000000, 8.000000)"),b(s,"fill","#1194DB"),b(p,"d","M19.94,39.7 C22.14,39.7 23.94,37.9 23.94,35.7 L15.94,35.7 C15.94,37.9 17.72,39.7 19.94,39.7 Z M31.94,27.7 L31.94,17.7 C31.94,11.56 28.66,6.42 22.94,5.06 L22.94,3.7 C22.94,2.04 21.6,0.7 19.94,0.7 C18.28,0.7 16.94,2.04 16.94,3.7 L16.94,5.06 C11.2,6.42 7.94,11.54 7.94,17.7 L7.94,27.7 L3.94,31.7 L3.94,33.7 L35.94,33.7 L35.94,31.7 L31.94,27.7 Z"),b(p,"id","Shape"),b(f,"d","M11.1,2.86 L8.24,0 C3.44,3.66 0.28,9.3 0,15.7 L4,15.7 C4.3,10.4 7.02,5.76 11.1,2.86 L11.1,2.86 Z"),b(f,"id","Path"),b(h,"d","M35.88,15.7 L39.88,15.7 C39.58,9.3 36.42,3.66 31.64,0 L28.8,2.86 C32.84,5.76 35.58,10.4 35.88,15.7 Z"),b(h,"id","Path"),b(L,"id","Notification"),b(L,"transform","translate(35.226667, 36.300000)"),b(L,"fill","#5FD5FF"),b(L,"fill-rule","nonzero"),b(r,"id","Info-Services"),b(r,"transform","matrix(1, 0, 0, 1, 0.833313, 0)"),b(r,"stroke","none"),b(r,"stroke-width","1"),b(r,"fill","none"),b(r,"fill-rule","evenodd"),b(n,"width","77px"),b(n,"height","76px"),b(n,"viewBox","0 0 77 76"),b(n,"version","1.1"),b(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){c(e,n,t),a(n,r),a(r,i),a(r,s),a(s,l),a(s,o),a(r,L),a(L,p),a(L,f),a(L,h)},p:e,i:e,o:e,d(e){e&&u(n)}}}class J extends O{constructor(e){super(),I(this,e,null,W,s,{})}}function U(t){let n,r,i,s,l,o,L,f;return{c(){n=d("svg"),r=d("title"),i=p("Presse-Services"),s=d("g"),l=d("polygon"),o=d("path"),L=d("path"),f=d("path"),b(l,"id","Path-Copy-2"),b(l,"points","0 0 76 0 76 76 0 76"),b(o,"d","M45.8988701,8 L60.8988701,23 L60.8988701,53 C60.8988701,55.75 58.6488701,58 55.8988701,58 L55.8988701,58 L43.411,58 L43.4115273,53 L55.8988701,53 L55.8988701,25.5 L43.3988701,25.5 L43.3988701,12 L21,12.000086 C21.4665241,9.7249205 23.4910393,8 25.8988701,8 L25.8988701,8 L45.8988701,8 Z"),b(o,"id","Combined-Shape"),b(o,"fill","#1194DB"),b(o,"fill-rule","nonzero"),b(L,"d","M13.5,50 L33.5,50 L33.5,55 L13.5,55 L13.5,50 Z M13.5,40 L33.5,40 L33.5,45 L13.5,45 L13.5,40 Z M28.5,15 L8.5,15 C5.75,15 3.5,17.25 3.5,20 L3.5,60 C3.5,62.75 5.725,65 8.475,65 L38.5,65 C41.25,65 43.5,62.75 43.5,60 L43.5,30 L28.5,15 Z M38.5,60 L8.5,60 L8.5,20 L26,20 L26,32.5 L38.5,32.5 L38.5,60 Z"),b(L,"id","Shape-Copy"),b(L,"fill","#1194DB"),b(L,"fill-rule","nonzero"),b(f,"d","M46,40 L46,70 L36,70 L36,40 L46,40 Z M61,20 L61,70 L51,70 L51,20 L61,20 Z M76,32 L76,70 L66,70 L66,32 L76,32 Z"),b(f,"id","Combined-Shape"),b(f,"fill","#5FD5FF"),b(s,"id","Presse-Services"),b(s,"stroke","none"),b(s,"stroke-width","1"),b(s,"fill","none"),b(s,"fill-rule","evenodd"),b(n,"width","76px"),b(n,"height","76px"),b(n,"viewBox","0 0 76 76"),b(n,"version","1.1"),b(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){c(e,n,t),a(n,r),a(r,i),a(n,s),a(s,l),a(s,o),a(s,L),a(s,f)},p:e,i:e,o:e,d(e){e&&u(n)}}}class X extends O{constructor(e){super(),I(this,e,null,U,s,{})}}function G(t){let n,r,i,s,l,o,L;return{c(){n=d("svg"),r=d("title"),i=p("Pubilshing Services"),s=d("g"),l=d("path"),o=d("path"),L=d("path"),b(l,"d","M76,0 L76,76 L0,76 L0,0 L76,0 Z"),b(l,"id","Path-Copy-3"),b(o,"d","M37.973,6 C23.069,6 11,18.096 11,33 C11,47.904 23.069,60 37.973,60 C52.904,60 65,47.904 65,33 C65,18.096 52.904,6 37.973,6 Z M56.684,22.2 L48.719,22.2 C47.855,18.825 46.613,15.585 44.993,12.588 C49.961,14.289 54.092,17.745 56.684,22.2 Z M38,11.508 C40.241,14.748 41.996,18.339 43.157,22.2 L32.843,22.2 C34.004,18.339 35.759,14.748 38,11.508 Z M17.102,38.4 C16.67,36.672 16.4,34.863 16.4,33 C16.4,31.137 16.67,29.328 17.102,27.6 L26.228,27.6 C26.012,29.382 25.85,31.164 25.85,33 C25.85,34.836 26.012,36.618 26.228,38.4 L17.102,38.4 Z M19.316,43.8 L27.281,43.8 C28.145,47.175 29.387,50.415 31.007,53.412 C26.039,51.711 21.908,48.282 19.316,43.8 L19.316,43.8 Z M27.281,22.2 L19.316,22.2 C21.908,17.718 26.039,14.289 31.007,12.588 C29.387,15.585 28.145,18.825 27.281,22.2 L27.281,22.2 Z M38,54.492 C35.759,51.252 34.004,47.661 32.843,43.8 L43.157,43.8 C41.996,47.661 40.241,51.252 38,54.492 Z M44.318,38.4 L31.682,38.4 C31.439,36.618 31.25,34.836 31.25,33 C31.25,31.164 31.439,29.355 31.682,27.6 L44.318,27.6 C44.561,29.355 44.75,31.164 44.75,33 C44.75,34.836 44.561,36.618 44.318,38.4 Z M44.993,53.412 C46.613,50.415 47.855,47.175 48.719,43.8 L56.684,43.8 C54.092,48.255 49.961,51.711 44.993,53.412 L44.993,53.412 Z M49.772,38.4 C49.988,36.618 50.15,34.836 50.15,33 C50.15,31.164 49.988,29.382 49.772,27.6 L58.898,27.6 C59.33,29.328 59.6,31.137 59.6,33 C59.6,34.863 59.33,36.672 58.898,38.4 L49.772,38.4 Z"),b(o,"id","Shape"),b(o,"fill","#1194DB"),b(o,"fill-rule","nonzero"),b(L,"d","M58,63 L38,63 L38,68 L58,68 L58,63 Z M76,52 L76,58 L38,58 L38,52 L76,52 Z M76,41 L76,47 L38,47 L38,41 L76,41 Z M38,30 L38,36 L76,36 L76,30 L38,30 Z"),b(L,"id","Shape"),b(L,"fill","#5FD5FF"),b(L,"fill-rule","nonzero"),b(s,"id","Pubilshing-Services"),b(s,"stroke","none"),b(s,"stroke-width","1"),b(s,"fill","none"),b(s,"fill-rule","evenodd"),b(n,"width","76px"),b(n,"height","76px"),b(n,"viewBox","0 0 76 76"),b(n,"version","1.1"),b(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){c(e,n,t),a(n,r),a(r,i),a(n,s),a(s,l),a(s,o),a(s,L)},p:e,i:e,o:e,d(e){e&&u(n)}}}class K extends O{constructor(e){super(),I(this,e,null,G,s,{})}}function Q(t){let n,r;return{c(){n=d("svg"),r=d("polygon"),b(r,"points","9.522 18 8 16.59 12.945 12 8 7.41 9.522 6 16 12"),b(r,"transform","matrix(-1, 0, 0, -1, 24, 24)"),b(r,"fill","#ffffff"),b(r,"fill-rule","nonzero"),b(r,"stroke","none"),b(r,"class","chevron__polygon svelte-v09hrm"),b(n,"width","100%"),b(n,"height","100%"),b(n,"viewBox","0 0 24 24"),b(n,"version","1.1"),b(n,"xmlns","http://www.w3.org/2000/svg"),b(n,"class","chevron "+t[0]+" svelte-v09hrm")},m(e,t){c(e,n,t),a(n,r)},p:e,i:e,o:e,d(e){e&&u(n)}}}function R(e,t,n){let{flip:r=!1}=t,i=r?"chevron--flip":"";return e.$$set=e=>{"flip"in e&&n(1,r=e.flip)},[i,r]}class V extends O{constructor(e){super(),I(this,e,R,Q,s,{flip:1})}}function Y(t){let n,r,i,s,l,o;return i=new V({}),{c(){n=L("div"),r=L("div"),N(i.$$.fragment),b(r,"class","b2b-banner__slider-handle-icon svelte-1x2tuip"),b(n,"class","b2b-banner__slider-handle b2b-banner__slider-handle--left svelte-1x2tuip")},m(e,u){c(e,n,u),a(n,r),j(i,r,null),s=!0,l||(o=h(n,"click",t[3]),l=!0)},p:e,i(e){s||(E(i.$$.fragment,e),s=!0)},o(e){z(i.$$.fragment,e),s=!1},d(e){e&&u(n),A(i),l=!1,o()}}}function ee(t){let n,r,i,s,l,o;return i=new V({props:{flip:"true"}}),{c(){n=L("div"),r=L("div"),N(i.$$.fragment),b(r,"class","b2b-banner__slider-handle-icon svelte-1x2tuip"),b(n,"class","b2b-banner__slider-handle b2b-banner__slider-handle--right svelte-1x2tuip")},m(e,u){c(e,n,u),a(n,r),j(i,r,null),s=!0,l||(o=h(n,"click",t[4]),l=!0)},p:e,i(e){s||(E(i.$$.fragment,e),s=!0)},o(e){z(i.$$.fragment,e),s=!1},d(e){e&&u(n),A(i),l=!1,o()}}}function te(e){let t,n,r,i,s,o,d,p,h,m,g,$,v,x,_,w,C,M,Z,y,S,k,F,B,q,I,O,T,W,U,G,Q,R,V,te,re,ie;C=new H({}),k=new K({}),O=new X({}),Q=new J({});let se=e[2]&&Y(e),le=e[1]&&ee(e);return{c(){var e,a;t=L("div"),n=L("div"),r=L("picture"),i=L("source"),s=f(),o=L("source"),d=f(),p=L("img"),m=f(),g=L("div"),g.innerHTML='<span class="b2b-banner__box-question svelte-1x2tuip">Schon gewusst?</span> \n        <span class="b2b-banner__box-answer svelte-1x2tuip">Mehr als 300 europäische Unternehmen nutzen bereits unsere Daten und\n          Services für ihren Erfolg.</span> \n        <span class="b2b-banner__box-can-we-help svelte-1x2tuip">Was können wir für Sie tun?</span> \n        <a class="b2b-banner__box-link svelte-1x2tuip" href="https://www.fmh.de/b2b/">Jetzt beraten lassen</a>',$=f(),v=L("footer"),x=L("div"),_=L("ul"),w=L("li"),N(C.$$.fragment),M=f(),Z=L("span"),Z.textContent="Für Banken",y=f(),S=L("li"),N(k.$$.fragment),F=f(),B=L("span"),B.textContent="Publishing Services",q=f(),I=L("li"),N(O.$$.fragment),T=f(),W=L("span"),W.textContent="Presse-Services",U=f(),G=L("li"),N(Q.$$.fragment),R=f(),V=L("span"),V.textContent="Info-Services",te=f(),se&&se.c(),re=f(),le&&le.c(),b(i,"media","(max-width: 799px)"),b(i,"srcset",ne("giant")),b(i,"class","svelte-1x2tuip"),b(o,"media","(min-width: 800px)"),b(o,"srcset",ne("original")),b(o,"class","svelte-1x2tuip"),b(p,"class","b2b-banner__img svelte-1x2tuip"),e=p.src,a=h=ne("original"),l||(l=document.createElement("a")),l.href=a,e!==l.href&&b(p,"src",h),b(p,"alt","FMH Firmenkunden"),b(p,"loading","lazy"),b(p,"width","800"),b(p,"height","320"),b(r,"class","b2b-banner__picture svelte-1x2tuip"),b(g,"class","b2b-banner__box svelte-1x2tuip"),b(Z,"class","b2b-banner__slider-caption svelte-1x2tuip"),b(w,"class","b2b-banner__slider-item svelte-1x2tuip"),b(B,"class","b2b-banner__slider-caption svelte-1x2tuip"),b(S,"class","b2b-banner__slider-item svelte-1x2tuip"),b(W,"class","b2b-banner__slider-caption svelte-1x2tuip"),b(I,"class","b2b-banner__slider-item svelte-1x2tuip"),b(V,"class","b2b-banner__slider-caption svelte-1x2tuip"),b(G,"class","b2b-banner__slider-item svelte-1x2tuip"),b(_,"class","b2b-banner__slider-list svelte-1x2tuip"),b(_,"dir","ltr"),b(x,"class","b2b-banner__slider-wrapper svelte-1x2tuip"),b(v,"class","b2b-banner__slider svelte-1x2tuip"),b(n,"class","b2b-banner__wrapper svelte-1x2tuip"),b(t,"class","b2b-banner svelte-1x2tuip")},m(l,u){c(l,t,u),a(t,n),a(n,r),a(r,i),a(r,s),a(r,o),a(r,d),a(r,p),a(n,m),a(n,g),a(n,$),a(n,v),a(v,x),a(x,_),a(_,w),j(C,w,null),a(w,M),a(w,Z),a(_,y),a(_,S),j(k,S,null),a(S,F),a(S,B),a(_,q),a(_,I),j(O,I,null),a(I,T),a(I,W),a(_,U),a(_,G),j(Q,G,null),a(G,R),a(G,V),e[7](_),a(v,te),se&&se.m(v,null),a(v,re),le&&le.m(v,null),ie=!0},p(e,[t]){e[2]?se?(se.p(e,t),4&t&&E(se,1)):(se=Y(e),se.c(),E(se,1),se.m(v,re)):se&&(P(),z(se,1,1,(()=>{se=null})),D()),e[1]?le?(le.p(e,t),2&t&&E(le,1)):(le=ee(e),le.c(),E(le,1),le.m(v,null)):le&&(P(),z(le,1,1,(()=>{le=null})),D())},i(e){ie||(E(C.$$.fragment,e),E(k.$$.fragment,e),E(O.$$.fragment,e),E(Q.$$.fragment,e),E(se),E(le),ie=!0)},o(e){z(C.$$.fragment,e),z(k.$$.fragment,e),z(O.$$.fragment,e),z(Q.$$.fragment,e),z(se),z(le),ie=!1},d(n){n&&u(t),A(C),A(k),A(O),A(Q),e[7](null),se&&se.d(),le&&le.d()}}}function ne(e){return`https://www.fmh.de/resources/assets/1762/${e}/c8c2ac41cdecb1817a0e9f7b51efbe6ad78747cc-burning-planet.jpg`}function re(e){return[...e.childNodes].filter((e=>e.tagName))}function ie(e,t,n){let r,i,s=null,l=0,o=0;function a(e){e.preventDefault();let t=function(e){const t=re(e);return t.reduce(((e,t)=>e+t.clientWidth),0)/t.length}(s),n=l*t;s.animate([{transform:`translateX(${n}px)`}],{duration:1e3,easing:"linear",fill:"forwards"}).onfinish=e=>{console.log("animation finished",e)}}return g((()=>{n(6,o=re(s).length)})),e.$$.update=()=>{32&e.$$.dirty&&n(2,r=Math.abs(l)>0),96&e.$$.dirty&&n(1,i=Math.abs(l)<o-2)},[s,i,r,function(e){return n(5,l+=1),a(e)},function(e){return n(5,l-=1),l>=o-2&&n(5,l=o-2),a(e)},l,o,function(e){v[e?"unshift":"push"]((()=>{s=e,n(0,s)}))}]}class se extends O{constructor(e){super(),I(this,e,ie,te,s,{})}}const le=document.querySelector("#b2b-banner"),oe=function(e){return{int(t,n){const r=parseInt(e.dataset[t]);return isNaN(r)?n:r},str:(t,n)=>e.dataset[t]||n}}(le).int("delay",0);setTimeout((()=>{new se({target:le,props:{}})}),oe)}();
//# sourceMappingURL=b2b-banner.js.map
