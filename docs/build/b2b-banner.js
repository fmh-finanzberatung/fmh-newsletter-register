!function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function s(e){e.forEach(n)}function r(e){return"function"==typeof e}function i(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}let l,o;function a(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function d(e){e.parentNode.removeChild(e)}function L(e){return document.createElement(e)}function u(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function b(){return f(" ")}function h(e,n,t,s){return e.addEventListener(n,t,s),()=>e.removeEventListener(n,t,s)}function p(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function v(e){o=e}function _(e){(function(){if(!o)throw new Error("Function called outside component initialization");return o})().$$.on_mount.push(e)}const g=[],m=[],$=[],w=[],C=Promise.resolve();let M=!1;function x(e){$.push(e)}const Z=new Set;let y=0;function k(){const e=o;do{for(;y<g.length;){const e=g[y];y++,v(e),S(e.$$)}for(v(null),g.length=0,y=0;m.length;)m.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];Z.has(n)||(Z.add(n),n())}$.length=0}while(g.length);for(;w.length;)w.pop()();M=!1,Z.clear(),v(e)}function S(e){if(null!==e.fragment){e.update(),s(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(x)}}const D=new Set;function E(e,n){e&&e.i&&(D.delete(e),e.i(n))}function F(e,n,t,s){if(e&&e.o){if(D.has(e))return;D.add(e),undefined.c.push((()=>{D.delete(e),s&&(t&&e.d(1),s())})),e.o(n)}}function B(e){e&&e.c()}function P(e,t,i,l){const{fragment:o,on_mount:a,on_destroy:c,after_update:d}=e.$$;o&&o.m(t,i),l||x((()=>{const t=a.map(n).filter(r);c?c.push(...t):s(t),e.$$.on_mount=[]})),d.forEach(x)}function z(e,n){const t=e.$$;null!==t.fragment&&(s(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function N(e,n){-1===e.$$.dirty[0]&&(g.push(e),M||(M=!0,C.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,i,l,a,c,L,u=[-1]){const f=o;v(n);const b=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:t(),dirty:u,skip_bound:!1,root:r.target||f.$$.root};L&&L(b.root);let h=!1;if(b.ctx=i?i(n,r.props||{},((e,t,...s)=>{const r=s.length?s[0]:t;return b.ctx&&a(b.ctx[e],b.ctx[e]=r)&&(!b.skip_bound&&b.bound[e]&&b.bound[e](r),h&&N(n,e)),t})):[],b.update(),h=!0,s(b.before_update),b.fragment=!!l&&l(b.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);b.fragment&&b.fragment.l(e),e.forEach(d)}else b.fragment&&b.fragment.c();r.intro&&E(n.$$.fragment),P(n,r.target,r.anchor,r.customElement),k()}v(f)}class j{$destroy(){z(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function A(n){let t,s,r,i,l,o;return{c(){t=u("svg"),s=u("g"),r=u("polygon"),i=u("path"),l=u("path"),o=u("polygon"),p(r,"id","Path-Copy-2"),p(r,"points","0 0 76 0 76 76 0 76"),p(i,"d","M70,19 L70,57 L38.5,57 L38.5,50.5 L64.5,50.5 L64.5,24.5 L38.5,24.5 L38.5,19 L70,19 Z M59.5,40.5 L59.5,45.5 L54,45.5 L54,40.5 L59.5,40.5 Z M49,40.5 L49,45.5 L43.5,45.5 L43.5,40.5 L49,40.5 Z M59.5,30 L59.5,35 L54,35 L54,30 L59.5,30 Z M49,30 L49,35 L43.5,35 L43.5,30 L49,30 Z"),p(i,"id","Combined-Shape"),p(i,"fill","#1194DB"),p(l,"d","M44.5,8 L44.5,57 L6,57 L6,8 L44.5,8 Z M38.5,45.5 L33,45.5 L33,51 L38.5,51 L38.5,45.5 Z M28,45.5 L22.5,45.5 L22.5,51 L28,51 L28,45.5 Z M17.5,45.5 L12,45.5 L12,51 L17.5,51 L17.5,45.5 Z M38.5,35 L33,35 L33,40.5 L38.5,40.5 L38.5,35 Z M28,35 L22.5,35 L22.5,40.5 L28,40.5 L28,35 Z M17.5,35 L12,35 L12,40.5 L17.5,40.5 L17.5,35 Z M38.5,24.5 L33,24.5 L33,30 L38.5,30 L38.5,24.5 Z M28,24.5 L22.5,24.5 L22.5,30 L28,30 L28,24.5 Z M17.5,24.5 L12,24.5 L12,30 L17.5,30 L17.5,24.5 Z M38.5,14 L33,14 L33,19.5 L38.5,19.5 L38.5,14 Z M28,14 L22.5,14 L22.5,19.5 L28,19.5 L28,14 Z M17.5,14 L12,14 L12,19.5 L17.5,19.5 L17.5,14 Z"),p(l,"id","Combined-Shape"),p(l,"fill","#1194DB"),p(o,"id","Path-3"),p(o,"fill","#5FD5FF"),p(o,"points","0 71 16 55 26 65 41 50 51 60 71 40 76 45 76 30 61 30 66 35 51 50 41 40 26 55 16 45 0 61"),p(s,"id","Banking-Corporate-Services"),p(s,"stroke","none"),p(s,"stroke-width","1"),p(s,"fill","none"),p(s,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),a(t,s),a(s,r),a(s,i),a(s,l),a(s,o)},p:e,i:e,o:e,d(e){e&&d(t)}}}class O extends j{constructor(e){super(),T(this,e,null,A,i,{})}}function q(n){let t,s,r,i,l,o,L,f,b,h;return{c(){t=u("svg"),s=u("g"),r=u("polygon"),i=u("g"),l=u("path"),o=u("path"),L=u("g"),f=u("path"),b=u("path"),h=u("path"),p(r,"id","Path-Copy-2"),p(r,"points","0.166666667 0 76.1666667 0 76.1666667 76 0.166666667 76"),p(l,"d","M58.1818182,0 L5.81818182,0 C2.61818182,0 0,2.61818182 0,5.81818182 L0,40.7272727 C0,43.9272727 2.61818182,46.5454545 5.81818182,46.5454545 L26.1818182,46.5454545 L26.1818182,52.2666667 L20.3636364,52.2666667 L20.3636364,57.6 L43.6363636,57.6 L43.6363636,52.2666667 L37.8181818,52.2666667 L37.8181818,46.5454545 L58.1818182,46.5454545 C61.3818182,46.5454545 64,43.9272727 64,40.7272727 L64,5.81818182 C64,2.61818182 61.3818182,0 58.1818182,0 Z M58.3871658,40.9326203 L6.02352941,40.9326203 L6.02352941,6.02352941 L58.3871658,6.02352941 L58.3871658,40.9326203 Z"),p(l,"id","Shape"),p(l,"fill-rule","nonzero"),p(o,"d","M19.741193,12 L19.741193,15.5218175 L15.7035228,15.5218175 L15.7035228,20.8647718 L19.2253403,20.8647718 L19.2253403,24.3859087 L15.7035228,24.3859087 L15.7035228,33.25 L12,33.25 L12,12 L19.741193,12 Z M28.1363891,12 L30.6863891,20.0753403 L33.2363891,12 L36.9705364,12 L36.9705364,33.25 L33.4180945,33.25 L33.4180945,20.3482386 L30.7163331,28.4535228 L30.6557646,28.4535228 L27.9540032,20.3482386 L27.9540032,33.25 L24.4022418,33.25 L24.4022418,12 L28.1363891,12 Z M45.4535228,12 L45.4535228,20.8035228 L48.6718175,20.8035228 L48.6718175,12 L52.3753403,12 L52.3753403,33.25 L48.6718175,33.25 L48.6718175,24.3253403 L45.4535228,24.3253403 L45.4535228,33.25 L41.75,33.25 L41.75,12 L45.4535228,12 Z"),p(o,"id","Combined-Shape"),p(i,"id","Desktop"),p(i,"transform","translate(0.000000, 8.000000)"),p(i,"fill","#1194DB"),p(f,"d","M19.94,39.7 C22.14,39.7 23.94,37.9 23.94,35.7 L15.94,35.7 C15.94,37.9 17.72,39.7 19.94,39.7 Z M31.94,27.7 L31.94,17.7 C31.94,11.56 28.66,6.42 22.94,5.06 L22.94,3.7 C22.94,2.04 21.6,0.7 19.94,0.7 C18.28,0.7 16.94,2.04 16.94,3.7 L16.94,5.06 C11.2,6.42 7.94,11.54 7.94,17.7 L7.94,27.7 L3.94,31.7 L3.94,33.7 L35.94,33.7 L35.94,31.7 L31.94,27.7 Z"),p(f,"id","Shape"),p(b,"d","M11.1,2.86 L8.24,0 C3.44,3.66 0.28,9.3 0,15.7 L4,15.7 C4.3,10.4 7.02,5.76 11.1,2.86 L11.1,2.86 Z"),p(b,"id","Path"),p(h,"d","M35.88,15.7 L39.88,15.7 C39.58,9.3 36.42,3.66 31.64,0 L28.8,2.86 C32.84,5.76 35.58,10.4 35.88,15.7 Z"),p(h,"id","Path"),p(L,"id","Notification"),p(L,"transform","translate(35.226667, 36.300000)"),p(L,"fill","#5FD5FF"),p(L,"fill-rule","nonzero"),p(s,"id","Info-Services"),p(s,"transform","matrix(1, 0, 0, 1, 0.833313, 0)"),p(s,"stroke","none"),p(s,"stroke-width","1"),p(s,"fill","none"),p(s,"fill-rule","evenodd"),p(t,"width","77px"),p(t,"height","76px"),p(t,"viewBox","0 0 77 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),a(t,s),a(s,r),a(s,i),a(i,l),a(i,o),a(s,L),a(L,f),a(L,b),a(L,h)},p:e,i:e,o:e,d(e){e&&d(t)}}}class I extends j{constructor(e){super(),T(this,e,null,q,i,{})}}function H(n){let t,s,r,i,l,o,L,b;return{c(){t=u("svg"),s=u("title"),r=f("Presse-Services"),i=u("g"),l=u("polygon"),o=u("path"),L=u("path"),b=u("path"),p(l,"id","Path-Copy-2"),p(l,"points","0 0 76 0 76 76 0 76"),p(o,"d","M45.8988701,8 L60.8988701,23 L60.8988701,53 C60.8988701,55.75 58.6488701,58 55.8988701,58 L55.8988701,58 L43.411,58 L43.4115273,53 L55.8988701,53 L55.8988701,25.5 L43.3988701,25.5 L43.3988701,12 L21,12.000086 C21.4665241,9.7249205 23.4910393,8 25.8988701,8 L25.8988701,8 L45.8988701,8 Z"),p(o,"id","Combined-Shape"),p(o,"fill","#1194DB"),p(o,"fill-rule","nonzero"),p(L,"d","M13.5,50 L33.5,50 L33.5,55 L13.5,55 L13.5,50 Z M13.5,40 L33.5,40 L33.5,45 L13.5,45 L13.5,40 Z M28.5,15 L8.5,15 C5.75,15 3.5,17.25 3.5,20 L3.5,60 C3.5,62.75 5.725,65 8.475,65 L38.5,65 C41.25,65 43.5,62.75 43.5,60 L43.5,30 L28.5,15 Z M38.5,60 L8.5,60 L8.5,20 L26,20 L26,32.5 L38.5,32.5 L38.5,60 Z"),p(L,"id","Shape-Copy"),p(L,"fill","#1194DB"),p(L,"fill-rule","nonzero"),p(b,"d","M46,40 L46,70 L36,70 L36,40 L46,40 Z M61,20 L61,70 L51,70 L51,20 L61,20 Z M76,32 L76,70 L66,70 L66,32 L76,32 Z"),p(b,"id","Combined-Shape"),p(b,"fill","#5FD5FF"),p(i,"id","Presse-Services"),p(i,"stroke","none"),p(i,"stroke-width","1"),p(i,"fill","none"),p(i,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),a(t,s),a(s,r),a(t,i),a(i,l),a(i,o),a(i,L),a(i,b)},p:e,i:e,o:e,d(e){e&&d(t)}}}class W extends j{constructor(e){super(),T(this,e,null,H,i,{})}}function X(n){let t,s,r,i,l,o,L;return{c(){t=u("svg"),s=u("title"),r=f("Pubilshing Services"),i=u("g"),l=u("path"),o=u("path"),L=u("path"),p(l,"d","M76,0 L76,76 L0,76 L0,0 L76,0 Z"),p(l,"id","Path-Copy-3"),p(o,"d","M37.973,6 C23.069,6 11,18.096 11,33 C11,47.904 23.069,60 37.973,60 C52.904,60 65,47.904 65,33 C65,18.096 52.904,6 37.973,6 Z M56.684,22.2 L48.719,22.2 C47.855,18.825 46.613,15.585 44.993,12.588 C49.961,14.289 54.092,17.745 56.684,22.2 Z M38,11.508 C40.241,14.748 41.996,18.339 43.157,22.2 L32.843,22.2 C34.004,18.339 35.759,14.748 38,11.508 Z M17.102,38.4 C16.67,36.672 16.4,34.863 16.4,33 C16.4,31.137 16.67,29.328 17.102,27.6 L26.228,27.6 C26.012,29.382 25.85,31.164 25.85,33 C25.85,34.836 26.012,36.618 26.228,38.4 L17.102,38.4 Z M19.316,43.8 L27.281,43.8 C28.145,47.175 29.387,50.415 31.007,53.412 C26.039,51.711 21.908,48.282 19.316,43.8 L19.316,43.8 Z M27.281,22.2 L19.316,22.2 C21.908,17.718 26.039,14.289 31.007,12.588 C29.387,15.585 28.145,18.825 27.281,22.2 L27.281,22.2 Z M38,54.492 C35.759,51.252 34.004,47.661 32.843,43.8 L43.157,43.8 C41.996,47.661 40.241,51.252 38,54.492 Z M44.318,38.4 L31.682,38.4 C31.439,36.618 31.25,34.836 31.25,33 C31.25,31.164 31.439,29.355 31.682,27.6 L44.318,27.6 C44.561,29.355 44.75,31.164 44.75,33 C44.75,34.836 44.561,36.618 44.318,38.4 Z M44.993,53.412 C46.613,50.415 47.855,47.175 48.719,43.8 L56.684,43.8 C54.092,48.255 49.961,51.711 44.993,53.412 L44.993,53.412 Z M49.772,38.4 C49.988,36.618 50.15,34.836 50.15,33 C50.15,31.164 49.988,29.382 49.772,27.6 L58.898,27.6 C59.33,29.328 59.6,31.137 59.6,33 C59.6,34.863 59.33,36.672 58.898,38.4 L49.772,38.4 Z"),p(o,"id","Shape"),p(o,"fill","#1194DB"),p(o,"fill-rule","nonzero"),p(L,"d","M58,63 L38,63 L38,68 L58,68 L58,63 Z M76,52 L76,58 L38,58 L38,52 L76,52 Z M76,41 L76,47 L38,47 L38,41 L76,41 Z M38,30 L38,36 L76,36 L76,30 L38,30 Z"),p(L,"id","Shape"),p(L,"fill","#5FD5FF"),p(L,"fill-rule","nonzero"),p(i,"id","Pubilshing-Services"),p(i,"stroke","none"),p(i,"stroke-width","1"),p(i,"fill","none"),p(i,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),a(t,s),a(s,r),a(t,i),a(i,l),a(i,o),a(i,L)},p:e,i:e,o:e,d(e){e&&d(t)}}}class J extends j{constructor(e){super(),T(this,e,null,X,i,{})}}function U(n){let t,s,r;return{c(){t=u("svg"),s=u("polygon"),p(s,"points","9.522 18 8 16.59 12.945 12 8 7.41 9.522 6 16 12"),p(s,"transform","matrix(-1, 0, 0, -1, 24, 24)"),p(s,"fill-rule","nonzero"),p(s,"stroke","none"),p(s,"class",r="chevron__polygon "+(n[0]?"chevron__polygon--active":"")+" svelte-wy3lof"),p(t,"width","100%"),p(t,"height","100%"),p(t,"viewBox","0 0 24 24"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"class","chevron "+n[1]+" svelte-wy3lof")},m(e,n){c(e,t,n),a(t,s)},p(e,[n]){1&n&&r!==(r="chevron__polygon "+(e[0]?"chevron__polygon--active":"")+" svelte-wy3lof")&&p(s,"class",r)},i:e,o:e,d(e){e&&d(t)}}}function G(e,n,t){let{active:s=!1}=n,{flip:r=!1}=n,i=r?"chevron--flip":"";return e.$$set=e=>{"active"in e&&t(0,s=e.active),"flip"in e&&t(2,r=e.flip)},[s,i,r]}class K extends j{constructor(e){super(),T(this,e,G,U,i,{active:0,flip:2})}}function Q(e){let n,t,r,i,o,u,f,v,_,g,m,$,w,C,M,x,Z,y,k,S,D,N,T,j,A,q,H,X,U,G,Q,V,Y,ee,ne,te,se,re,ie,le,oe,ae,ce,de,Le,ue,fe,be,he;return Z=new O({}),N=new J({}),H=new W({}),V=new I({}),re=new K({props:{active:e[3]}}),de=new K({props:{flip:"true",active:e[2]}}),{c(){var s,a;n=L("div"),t=L("div"),r=L("picture"),i=L("source"),o=b(),u=L("source"),f=b(),v=L("img"),g=b(),m=L("a"),m.innerHTML='<span class="b2b-banner__box-question svelte-10s2d96">Schon gewusst?</span> \n        <span class="b2b-banner__box-answer svelte-10s2d96">Mehr als 300 europäische Unternehmen nutzen bereits unsere Daten und\n          Services für ihren Erfolg.</span> \n        <span class="b2b-banner__box-can-we-help svelte-10s2d96">Was können wir für Sie tun?</span> \n        <span class="b2b-banner__box-link svelte-10s2d96">Jetzt beraten lassen</span>',$=b(),w=L("footer"),C=L("div"),M=L("ul"),x=L("li"),B(Z.$$.fragment),y=b(),k=L("span"),k.textContent="Banking & Corporate Services",S=b(),D=L("li"),B(N.$$.fragment),T=b(),j=L("span"),j.textContent="Publishing Services",A=b(),q=L("li"),B(H.$$.fragment),X=b(),U=L("span"),U.textContent="Presse-Services",G=b(),Q=L("li"),B(V.$$.fragment),Y=b(),ee=L("span"),ee.textContent="Info-Services",ne=b(),te=L("div"),se=L("div"),B(re.$$.fragment),oe=b(),ae=L("div"),ce=L("div"),B(de.$$.fragment),p(i,"media","(max-width: 799px)"),p(i,"srcset",R("giant")),p(i,"class","svelte-10s2d96"),p(u,"media","(min-width: 800px)"),p(u,"srcset",R("original")),p(u,"class","svelte-10s2d96"),p(v,"class","b2b-banner__img svelte-10s2d96"),s=v.src,a=_=R("original"),l||(l=document.createElement("a")),l.href=a,s!==l.href&&p(v,"src",_),p(v,"alt","FMH Firmenkunden"),p(v,"loading","lazy"),p(v,"width","800"),p(v,"height","320"),p(r,"class","b2b-banner__picture svelte-10s2d96"),p(m,"class","b2b-banner__box svelte-10s2d96"),p(m,"href","https://www.fmh.de/kontakt"),p(k,"class","b2b-banner__slider-caption svelte-10s2d96"),p(x,"class","b2b-banner__slider-item svelte-10s2d96"),p(j,"class","b2b-banner__slider-caption svelte-10s2d96"),p(D,"class","b2b-banner__slider-item svelte-10s2d96"),p(U,"class","b2b-banner__slider-caption svelte-10s2d96"),p(q,"class","b2b-banner__slider-item svelte-10s2d96"),p(ee,"class","b2b-banner__slider-caption svelte-10s2d96"),p(Q,"class","b2b-banner__slider-item svelte-10s2d96"),p(M,"class","b2b-banner__slider-list svelte-10s2d96"),p(M,"dir","ltr"),p(C,"class","b2b-banner__slider-wrapper svelte-10s2d96"),p(se,"class",ie="b2b-banner__slider-handle-icon "+(e[3]?"b2b-banner__slider-handle-icon--active":"")+" svelte-10s2d96"),p(te,"class",le="b2b-banner__slider-handle b2b-banner__slider-handle--left "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[5]?"b2b-banner__slider-handle--touch":"")+" svelte-10s2d96"),p(ce,"class",Le="b2b-banner__slider-handle-icon "+(e[2]?"b2b-banner__slider-handle-icon--active":"")+" svelte-10s2d96"),p(ae,"class",ue="b2b-banner__slider-handle b2b-banner__slider-handle--right "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[4]?"b2b-banner__slider-handle--touch":"")+" svelte-10s2d96"),p(w,"class","b2b-banner__slider svelte-10s2d96"),p(t,"class","b2b-banner__wrapper svelte-10s2d96"),p(n,"class","b2b-banner svelte-10s2d96")},m(s,l){c(s,n,l),a(n,t),a(t,r),a(r,i),a(r,o),a(r,u),a(r,f),a(r,v),a(t,g),a(t,m),a(t,$),a(t,w),a(w,C),a(C,M),a(M,x),P(Z,x,null),a(x,y),a(x,k),a(M,S),a(M,D),P(N,D,null),a(D,T),a(D,j),a(M,A),a(M,q),P(H,q,null),a(q,X),a(q,U),a(M,G),a(M,Q),P(V,Q,null),a(Q,Y),a(Q,ee),e[10](M),a(w,ne),a(w,te),a(te,se),P(re,se,null),a(w,oe),a(w,ae),a(ae,ce),P(de,ce,null),fe=!0,be||(he=[h(te,"click",e[6]),h(te,"touchstart",e[11],{passive:!0}),h(te,"touchend",e[12],{passive:!0}),h(ae,"click",e[7]),h(ae,"touchstart",e[13],{passive:!0}),h(ae,"touchend",e[14],{passive:!0})],be=!0)},p(e,[n]){const t={};8&n&&(t.active=e[3]),re.$set(t),(!fe||8&n&&ie!==(ie="b2b-banner__slider-handle-icon "+(e[3]?"b2b-banner__slider-handle-icon--active":"")+" svelte-10s2d96"))&&p(se,"class",ie),(!fe||40&n&&le!==(le="b2b-banner__slider-handle b2b-banner__slider-handle--left "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[5]?"b2b-banner__slider-handle--touch":"")+" svelte-10s2d96"))&&p(te,"class",le);const s={};4&n&&(s.active=e[2]),de.$set(s),(!fe||4&n&&Le!==(Le="b2b-banner__slider-handle-icon "+(e[2]?"b2b-banner__slider-handle-icon--active":"")+" svelte-10s2d96"))&&p(ce,"class",Le),(!fe||24&n&&ue!==(ue="b2b-banner__slider-handle b2b-banner__slider-handle--right "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[4]?"b2b-banner__slider-handle--touch":"")+" svelte-10s2d96"))&&p(ae,"class",ue)},i(e){fe||(E(Z.$$.fragment,e),E(N.$$.fragment,e),E(H.$$.fragment,e),E(V.$$.fragment,e),E(re.$$.fragment,e),E(de.$$.fragment,e),fe=!0)},o(e){F(Z.$$.fragment,e),F(N.$$.fragment,e),F(H.$$.fragment,e),F(V.$$.fragment,e),F(re.$$.fragment,e),F(de.$$.fragment,e),fe=!1},d(t){t&&d(n),z(Z),z(N),z(H),z(V),e[10](null),z(re),z(de),be=!1,s(he)}}}function R(e){return`https://www.fmh.de/resources/assets/1762/${e}/c8c2ac41cdecb1817a0e9f7b51efbe6ad78747cc-burning-planet.jpg`}function V(e){return[...e.childNodes].filter((e=>e.tagName))}function Y(e,n){e.animate([{transform:`translateX(${n}px)`}],{duration:500,easing:"ease-in-out",fill:"forwards"}).onfinish=e=>{console.log("animation finished",e)}}function ee(e,n,t){let s,r,i,l,o=null,a=0,c=0,d="";function L(e){console.log("ev:",e),console.log("ev:",e.clientX);let n=function(e){const n=V(e);return n.reduce(((e,n)=>e+n.clientWidth),0)/n.length}(o);Y(o,a*n)}_((()=>{t(9,c=V(o).length),window.addEventListener("resize",((e,n)=>{let t;return function(...s){clearTimeout(t),t=setTimeout((()=>{clearTimeout(t),e(...s)}),n)}})((e=>{Y(o,0)}),500),!0),window.DeviceOrientationEvent&&window.addEventListener("orientationchange",(e=>{Y(o,0)}),!0)}));return e.$$.update=()=>{1&e.$$.dirty&&t(5,s="left"===d),1&e.$$.dirty&&t(4,r="right"===d),256&e.$$.dirty&&t(3,i=Math.abs(a)>0),768&e.$$.dirty&&t(2,l=Math.abs(a)<c-2)},[d,o,l,i,r,s,function(e){return!!i&&(e.preventDefault(),t(8,a+=1),L(e))},function(e){return!!l&&(e.preventDefault(),t(8,a-=1),a>=c-2&&t(8,a=c-2),L(e))},a,c,function(e){m[e?"unshift":"push"]((()=>{o=e,t(1,o)}))},()=>t(0,d="left"),()=>t(0,d=""),()=>t(0,d="right"),()=>t(0,d="")]}class ne extends j{constructor(e){super(),T(this,e,ee,Q,i,{})}}const te=document.querySelector("#b2b-banner"),se=function(e){return{int(n,t){const s=parseInt(e.dataset[n]);return isNaN(s)?t:s},str:(n,t)=>e.dataset[n]||t}}(te).int("delay",100);setTimeout((()=>{new ne({target:te,props:{}})}),se)}();
//# sourceMappingURL=b2b-banner.js.map
