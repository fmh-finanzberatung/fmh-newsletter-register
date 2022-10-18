!function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}let l,a;function o(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function d(e){e.parentNode.removeChild(e)}function L(e){return document.createElement(e)}function u(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function h(){return b(" ")}function f(e,n,t,r){return e.addEventListener(n,t,r),()=>e.removeEventListener(n,t,r)}function p(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function v(e){a=e}function g(e){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_mount.push(e)}const m=[],_=[],x=[],$=[],w=Promise.resolve();let y=!1;function C(e){x.push(e)}const M=new Set;let Z=0;function k(){const e=a;do{for(;Z<m.length;){const e=m[Z];Z++,v(e),j(e.$$)}for(v(null),m.length=0,Z=0;_.length;)_.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];M.has(n)||(M.add(n),n())}x.length=0}while(m.length);for(;$.length;)$.pop()();y=!1,M.clear(),v(e)}function j(e){if(null!==e.fragment){e.update(),r(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(C)}}const S=new Set;function F(e,n){e&&e.i&&(S.delete(e),e.i(n))}function B(e,n,t,r){if(e&&e.o){if(S.has(e))return;S.add(e),undefined.c.push((()=>{S.delete(e),r&&(t&&e.d(1),r())})),e.o(n)}}function P(e){e&&e.c()}function D(e,t,s,l){const{fragment:a,on_mount:o,on_destroy:c,after_update:d}=e.$$;a&&a.m(t,s),l||C((()=>{const t=o.map(n).filter(i);c?c.push(...t):r(t),e.$$.on_mount=[]})),d.forEach(C)}function E(e,n){const t=e.$$;null!==t.fragment&&(r(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function z(e,n){-1===e.$$.dirty[0]&&(m.push(e),y||(y=!0,w.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function T(n,i,s,l,o,c,L,u=[-1]){const b=a;v(n);const h=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(b?b.$$.context:[])),callbacks:t(),dirty:u,skip_bound:!1,root:i.target||b.$$.root};L&&L(h.root);let f=!1;if(h.ctx=s?s(n,i.props||{},((e,t,...r)=>{const i=r.length?r[0]:t;return h.ctx&&o(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),f&&z(n,e)),t})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(d)}else h.fragment&&h.fragment.c();i.intro&&F(n.$$.fragment),D(n,i.target,i.anchor,i.customElement),k()}v(b)}class N{$destroy(){E(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function q(n){let t,r,i,s,l,a;return{c(){t=u("svg"),r=u("g"),i=u("polygon"),s=u("path"),l=u("path"),a=u("polygon"),p(i,"id","Path-Copy-2"),p(i,"points","0 0 76 0 76 76 0 76"),p(s,"d","M70,19 L70,57 L38.5,57 L38.5,50.5 L64.5,50.5 L64.5,24.5 L38.5,24.5 L38.5,19 L70,19 Z M59.5,40.5 L59.5,45.5 L54,45.5 L54,40.5 L59.5,40.5 Z M49,40.5 L49,45.5 L43.5,45.5 L43.5,40.5 L49,40.5 Z M59.5,30 L59.5,35 L54,35 L54,30 L59.5,30 Z M49,30 L49,35 L43.5,35 L43.5,30 L49,30 Z"),p(s,"id","Combined-Shape"),p(s,"fill","#1194DB"),p(l,"d","M44.5,8 L44.5,57 L6,57 L6,8 L44.5,8 Z M38.5,45.5 L33,45.5 L33,51 L38.5,51 L38.5,45.5 Z M28,45.5 L22.5,45.5 L22.5,51 L28,51 L28,45.5 Z M17.5,45.5 L12,45.5 L12,51 L17.5,51 L17.5,45.5 Z M38.5,35 L33,35 L33,40.5 L38.5,40.5 L38.5,35 Z M28,35 L22.5,35 L22.5,40.5 L28,40.5 L28,35 Z M17.5,35 L12,35 L12,40.5 L17.5,40.5 L17.5,35 Z M38.5,24.5 L33,24.5 L33,30 L38.5,30 L38.5,24.5 Z M28,24.5 L22.5,24.5 L22.5,30 L28,30 L28,24.5 Z M17.5,24.5 L12,24.5 L12,30 L17.5,30 L17.5,24.5 Z M38.5,14 L33,14 L33,19.5 L38.5,19.5 L38.5,14 Z M28,14 L22.5,14 L22.5,19.5 L28,19.5 L28,14 Z M17.5,14 L12,14 L12,19.5 L17.5,19.5 L17.5,14 Z"),p(l,"id","Combined-Shape"),p(l,"fill","#1194DB"),p(a,"id","Path-3"),p(a,"fill","#5FD5FF"),p(a,"points","0 71 16 55 26 65 41 50 51 60 71 40 76 45 76 30 61 30 66 35 51 50 41 40 26 55 16 45 0 61"),p(r,"id","Banking-Corporate-Services"),p(r,"stroke","none"),p(r,"stroke-width","1"),p(r,"fill","none"),p(r,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),o(t,r),o(r,i),o(r,s),o(r,l),o(r,a)},p:e,i:e,o:e,d(e){e&&d(t)}}}class H extends N{constructor(e){super(),T(this,e,null,q,s,{})}}function U(n){let t,r,i,s,l,a,L,b,h,f;return{c(){t=u("svg"),r=u("g"),i=u("polygon"),s=u("g"),l=u("path"),a=u("path"),L=u("g"),b=u("path"),h=u("path"),f=u("path"),p(i,"id","Path-Copy-2"),p(i,"points","0.166666667 0 76.1666667 0 76.1666667 76 0.166666667 76"),p(l,"d","M58.1818182,0 L5.81818182,0 C2.61818182,0 0,2.61818182 0,5.81818182 L0,40.7272727 C0,43.9272727 2.61818182,46.5454545 5.81818182,46.5454545 L26.1818182,46.5454545 L26.1818182,52.2666667 L20.3636364,52.2666667 L20.3636364,57.6 L43.6363636,57.6 L43.6363636,52.2666667 L37.8181818,52.2666667 L37.8181818,46.5454545 L58.1818182,46.5454545 C61.3818182,46.5454545 64,43.9272727 64,40.7272727 L64,5.81818182 C64,2.61818182 61.3818182,0 58.1818182,0 Z M58.3871658,40.9326203 L6.02352941,40.9326203 L6.02352941,6.02352941 L58.3871658,6.02352941 L58.3871658,40.9326203 Z"),p(l,"id","Shape"),p(l,"fill-rule","nonzero"),p(a,"d","M19.741193,12 L19.741193,15.5218175 L15.7035228,15.5218175 L15.7035228,20.8647718 L19.2253403,20.8647718 L19.2253403,24.3859087 L15.7035228,24.3859087 L15.7035228,33.25 L12,33.25 L12,12 L19.741193,12 Z M28.1363891,12 L30.6863891,20.0753403 L33.2363891,12 L36.9705364,12 L36.9705364,33.25 L33.4180945,33.25 L33.4180945,20.3482386 L30.7163331,28.4535228 L30.6557646,28.4535228 L27.9540032,20.3482386 L27.9540032,33.25 L24.4022418,33.25 L24.4022418,12 L28.1363891,12 Z M45.4535228,12 L45.4535228,20.8035228 L48.6718175,20.8035228 L48.6718175,12 L52.3753403,12 L52.3753403,33.25 L48.6718175,33.25 L48.6718175,24.3253403 L45.4535228,24.3253403 L45.4535228,33.25 L41.75,33.25 L41.75,12 L45.4535228,12 Z"),p(a,"id","Combined-Shape"),p(s,"id","Desktop"),p(s,"transform","translate(0.000000, 8.000000)"),p(s,"fill","#1194DB"),p(b,"d","M19.94,39.7 C22.14,39.7 23.94,37.9 23.94,35.7 L15.94,35.7 C15.94,37.9 17.72,39.7 19.94,39.7 Z M31.94,27.7 L31.94,17.7 C31.94,11.56 28.66,6.42 22.94,5.06 L22.94,3.7 C22.94,2.04 21.6,0.7 19.94,0.7 C18.28,0.7 16.94,2.04 16.94,3.7 L16.94,5.06 C11.2,6.42 7.94,11.54 7.94,17.7 L7.94,27.7 L3.94,31.7 L3.94,33.7 L35.94,33.7 L35.94,31.7 L31.94,27.7 Z"),p(b,"id","Shape"),p(h,"d","M11.1,2.86 L8.24,0 C3.44,3.66 0.28,9.3 0,15.7 L4,15.7 C4.3,10.4 7.02,5.76 11.1,2.86 L11.1,2.86 Z"),p(h,"id","Path"),p(f,"d","M35.88,15.7 L39.88,15.7 C39.58,9.3 36.42,3.66 31.64,0 L28.8,2.86 C32.84,5.76 35.58,10.4 35.88,15.7 Z"),p(f,"id","Path"),p(L,"id","Notification"),p(L,"transform","translate(35.226667, 36.300000)"),p(L,"fill","#5FD5FF"),p(L,"fill-rule","nonzero"),p(r,"id","Info-Services"),p(r,"transform","matrix(1, 0, 0, 1, 0.833313, 0)"),p(r,"stroke","none"),p(r,"stroke-width","1"),p(r,"fill","none"),p(r,"fill-rule","evenodd"),p(t,"width","77px"),p(t,"height","76px"),p(t,"viewBox","0 0 77 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),o(t,r),o(r,i),o(r,s),o(s,l),o(s,a),o(r,L),o(L,b),o(L,h),o(L,f)},p:e,i:e,o:e,d(e){e&&d(t)}}}class A extends N{constructor(e){super(),T(this,e,null,U,s,{})}}function I(n){let t,r,i,s,l,a,L,h;return{c(){t=u("svg"),r=u("title"),i=b("Presse-Services"),s=u("g"),l=u("polygon"),a=u("path"),L=u("path"),h=u("path"),p(l,"id","Path-Copy-2"),p(l,"points","0 0 76 0 76 76 0 76"),p(a,"d","M45.8988701,8 L60.8988701,23 L60.8988701,53 C60.8988701,55.75 58.6488701,58 55.8988701,58 L55.8988701,58 L43.411,58 L43.4115273,53 L55.8988701,53 L55.8988701,25.5 L43.3988701,25.5 L43.3988701,12 L21,12.000086 C21.4665241,9.7249205 23.4910393,8 25.8988701,8 L25.8988701,8 L45.8988701,8 Z"),p(a,"id","Combined-Shape"),p(a,"fill","#1194DB"),p(a,"fill-rule","nonzero"),p(L,"d","M13.5,50 L33.5,50 L33.5,55 L13.5,55 L13.5,50 Z M13.5,40 L33.5,40 L33.5,45 L13.5,45 L13.5,40 Z M28.5,15 L8.5,15 C5.75,15 3.5,17.25 3.5,20 L3.5,60 C3.5,62.75 5.725,65 8.475,65 L38.5,65 C41.25,65 43.5,62.75 43.5,60 L43.5,30 L28.5,15 Z M38.5,60 L8.5,60 L8.5,20 L26,20 L26,32.5 L38.5,32.5 L38.5,60 Z"),p(L,"id","Shape-Copy"),p(L,"fill","#1194DB"),p(L,"fill-rule","nonzero"),p(h,"d","M46,40 L46,70 L36,70 L36,40 L46,40 Z M61,20 L61,70 L51,70 L51,20 L61,20 Z M76,32 L76,70 L66,70 L66,32 L76,32 Z"),p(h,"id","Combined-Shape"),p(h,"fill","#5FD5FF"),p(s,"id","Presse-Services"),p(s,"stroke","none"),p(s,"stroke-width","1"),p(s,"fill","none"),p(s,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),o(t,r),o(r,i),o(t,s),o(s,l),o(s,a),o(s,L),o(s,h)},p:e,i:e,o:e,d(e){e&&d(t)}}}class X extends N{constructor(e){super(),T(this,e,null,I,s,{})}}function O(n){let t,r,i,s,l,a,L;return{c(){t=u("svg"),r=u("title"),i=b("Pubilshing Services"),s=u("g"),l=u("path"),a=u("path"),L=u("path"),p(l,"d","M76,0 L76,76 L0,76 L0,0 L76,0 Z"),p(l,"id","Path-Copy-3"),p(a,"d","M37.973,6 C23.069,6 11,18.096 11,33 C11,47.904 23.069,60 37.973,60 C52.904,60 65,47.904 65,33 C65,18.096 52.904,6 37.973,6 Z M56.684,22.2 L48.719,22.2 C47.855,18.825 46.613,15.585 44.993,12.588 C49.961,14.289 54.092,17.745 56.684,22.2 Z M38,11.508 C40.241,14.748 41.996,18.339 43.157,22.2 L32.843,22.2 C34.004,18.339 35.759,14.748 38,11.508 Z M17.102,38.4 C16.67,36.672 16.4,34.863 16.4,33 C16.4,31.137 16.67,29.328 17.102,27.6 L26.228,27.6 C26.012,29.382 25.85,31.164 25.85,33 C25.85,34.836 26.012,36.618 26.228,38.4 L17.102,38.4 Z M19.316,43.8 L27.281,43.8 C28.145,47.175 29.387,50.415 31.007,53.412 C26.039,51.711 21.908,48.282 19.316,43.8 L19.316,43.8 Z M27.281,22.2 L19.316,22.2 C21.908,17.718 26.039,14.289 31.007,12.588 C29.387,15.585 28.145,18.825 27.281,22.2 L27.281,22.2 Z M38,54.492 C35.759,51.252 34.004,47.661 32.843,43.8 L43.157,43.8 C41.996,47.661 40.241,51.252 38,54.492 Z M44.318,38.4 L31.682,38.4 C31.439,36.618 31.25,34.836 31.25,33 C31.25,31.164 31.439,29.355 31.682,27.6 L44.318,27.6 C44.561,29.355 44.75,31.164 44.75,33 C44.75,34.836 44.561,36.618 44.318,38.4 Z M44.993,53.412 C46.613,50.415 47.855,47.175 48.719,43.8 L56.684,43.8 C54.092,48.255 49.961,51.711 44.993,53.412 L44.993,53.412 Z M49.772,38.4 C49.988,36.618 50.15,34.836 50.15,33 C50.15,31.164 49.988,29.382 49.772,27.6 L58.898,27.6 C59.33,29.328 59.6,31.137 59.6,33 C59.6,34.863 59.33,36.672 58.898,38.4 L49.772,38.4 Z"),p(a,"id","Shape"),p(a,"fill","#1194DB"),p(a,"fill-rule","nonzero"),p(L,"d","M58,63 L38,63 L38,68 L58,68 L58,63 Z M76,52 L76,58 L38,58 L38,52 L76,52 Z M76,41 L76,47 L38,47 L38,41 L76,41 Z M38,30 L38,36 L76,36 L76,30 L38,30 Z"),p(L,"id","Shape"),p(L,"fill","#5FD5FF"),p(L,"fill-rule","nonzero"),p(s,"id","Pubilshing-Services"),p(s,"stroke","none"),p(s,"stroke-width","1"),p(s,"fill","none"),p(s,"fill-rule","evenodd"),p(t,"width","76px"),p(t,"height","76px"),p(t,"viewBox","0 0 76 76"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg")},m(e,n){c(e,t,n),o(t,r),o(r,i),o(t,s),o(s,l),o(s,a),o(s,L)},p:e,i:e,o:e,d(e){e&&d(t)}}}class W extends N{constructor(e){super(),T(this,e,null,O,s,{})}}function J(n){let t,r,i;return{c(){t=u("svg"),r=u("polygon"),p(r,"points","9.522 18 8 16.59 12.945 12 8 7.41 9.522 6 16 12"),p(r,"transform","matrix(-1, 0, 0, -1, 24, 24)"),p(r,"fill-rule","nonzero"),p(r,"stroke","none"),p(r,"class",i="chevron__polygon "+(n[0]?"chevron__polygon--active":"")+" svelte-wy3lof"),p(t,"width","100%"),p(t,"height","100%"),p(t,"viewBox","0 0 24 24"),p(t,"version","1.1"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"class","chevron "+n[1]+" svelte-wy3lof")},m(e,n){c(e,t,n),o(t,r)},p(e,[n]){1&n&&i!==(i="chevron__polygon "+(e[0]?"chevron__polygon--active":"")+" svelte-wy3lof")&&p(r,"class",i)},i:e,o:e,d(e){e&&d(t)}}}function G(e,n,t){let{active:r=!1}=n,{flip:i=!1}=n,s=i?"chevron--flip":"";return e.$$set=e=>{"active"in e&&t(0,r=e.active),"flip"in e&&t(2,i=e.flip)},[r,s,i]}class K extends N{constructor(e){super(),T(this,e,G,J,s,{active:0,flip:2})}}function Q(e){let n,t,i,s,a,u,b,v,g,m,_,x,$,w,y,C,M,Z,k,j,S,z,T,N,q,U,I,O,J,G,Q,R,V,Y,ee,ne,te,re,ie,se,le,ae,oe,ce,de,Le,ue,be,he,fe,pe,ve,ge,me,_e,xe,$e=e[6].box.question+"",we=e[6].box.answer+"";return N=new H({}),J=new W({}),Y=new X({}),ie=new A({}),de=new K({props:{active:e[3]}}),pe=new K({props:{flip:"true",active:e[2]}}),{c(){var r,o;n=L("div"),t=L("div"),i=L("picture"),s=L("source"),a=h(),u=L("source"),b=h(),v=L("img"),m=h(),_=L("a"),x=L("span"),$=h(),w=L("span"),y=h(),C=L("span"),C.textContent=`${e[6].box.ctaLabel}`,M=h(),Z=L("span"),Z.textContent=`${e[6].box.ctaText}`,k=h(),j=L("footer"),S=L("div"),z=L("ul"),T=L("a"),P(N.$$.fragment),q=h(),U=L("span"),U.textContent="Banking & Corporate Services",I=h(),O=L("a"),P(J.$$.fragment),G=h(),Q=L("span"),Q.textContent="Publishing Services",R=h(),V=L("a"),P(Y.$$.fragment),ee=h(),ne=L("span"),ne.textContent="Presse-Services",te=h(),re=L("a"),P(ie.$$.fragment),se=h(),le=L("span"),le.textContent="Info-Services",ae=h(),oe=L("div"),ce=L("div"),P(de.$$.fragment),be=h(),he=L("div"),fe=L("div"),P(pe.$$.fragment),p(s,"media","(max-width: 799px)"),p(s,"srcset",e[6].imgUrl("giant")),p(s,"class","svelte-1deyvxj"),p(u,"media","(min-width: 800px)"),p(u,"srcset",e[6].imgUrl("original")),p(u,"class","svelte-1deyvxj"),p(v,"class","b2b-banner__img svelte-1deyvxj"),r=v.src,o=g=e[6].imgUrl("original"),l||(l=document.createElement("a")),l.href=o,r!==l.href&&p(v,"src",g),p(v,"alt","FMH Firmenkunden"),p(v,"loading","lazy"),p(v,"width","800"),p(v,"height","320"),p(i,"class","b2b-banner__picture svelte-1deyvxj"),p(x,"class","b2b-banner__box-question svelte-1deyvxj"),p(w,"class","b2b-banner__box-answer svelte-1deyvxj"),p(C,"class","b2b-banner__box-can-we-help svelte-1deyvxj"),p(Z,"class","b2b-banner__box-link svelte-1deyvxj"),p(_,"class","b2b-banner__box svelte-1deyvxj"),p(_,"href",e[6].box.link),p(U,"class","b2b-banner__slider-caption svelte-1deyvxj"),p(T,"role","listitem"),p(T,"class","b2b-banner__slider-item svelte-1deyvxj"),p(T,"href","https://www.fmhx.de"),p(T,"title","Banking & Corporate Services"),p(Q,"class","b2b-banner__slider-caption svelte-1deyvxj"),p(O,"role","listitem"),p(O,"class","b2b-banner__slider-item svelte-1deyvxj"),p(O,"href","https://www.fmhx.de"),p(O,"title","Publishing Services"),p(ne,"class","b2b-banner__slider-caption svelte-1deyvxj"),p(V,"role","listitem"),p(V,"class","b2b-banner__slider-item svelte-1deyvxj"),p(V,"href","/fuer-redaktionen"),p(V,"title","Presse Services"),p(le,"class","b2b-banner__slider-caption svelte-1deyvxj"),p(re,"role","listitem"),p(re,"class","b2b-banner__slider-item svelte-1deyvxj"),p(re,"href","/banking-corporate-service"),p(re,"title","Info-Services"),p(z,"class","b2b-banner__slider-list svelte-1deyvxj"),p(z,"dir","ltr"),p(S,"class","b2b-banner__slider-wrapper svelte-1deyvxj"),p(ce,"class",Le="b2b-banner__slider-handle-icon "+(e[3]?"b2b-banner__slider-handle-icon--active":"")+" svelte-1deyvxj"),p(oe,"class",ue="b2b-banner__slider-handle b2b-banner__slider-handle--left "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[5]?"b2b-banner__slider-handle--touch":"")+" svelte-1deyvxj"),p(fe,"class",ve="b2b-banner__slider-handle-icon "+(e[2]?"b2b-banner__slider-handle-icon--active":"")+" svelte-1deyvxj"),p(he,"class",ge="b2b-banner__slider-handle b2b-banner__slider-handle--right "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[4]?"b2b-banner__slider-handle--touch":"")+" svelte-1deyvxj"),p(j,"class","b2b-banner__slider svelte-1deyvxj"),p(t,"class","b2b-banner__wrapper svelte-1deyvxj"),p(n,"class","b2b-banner svelte-1deyvxj")},m(r,l){c(r,n,l),o(n,t),o(t,i),o(i,s),o(i,a),o(i,u),o(i,b),o(i,v),o(t,m),o(t,_),o(_,x),x.innerHTML=$e,o(_,$),o(_,w),w.innerHTML=we,o(_,y),o(_,C),o(_,M),o(_,Z),o(t,k),o(t,j),o(j,S),o(S,z),o(z,T),D(N,T,null),o(T,q),o(T,U),o(z,I),o(z,O),D(J,O,null),o(O,G),o(O,Q),o(z,R),o(z,V),D(Y,V,null),o(V,ee),o(V,ne),o(z,te),o(z,re),D(ie,re,null),o(re,se),o(re,le),e[12](z),o(j,ae),o(j,oe),o(oe,ce),D(de,ce,null),o(j,be),o(j,he),o(he,fe),D(pe,fe,null),me=!0,_e||(xe=[f(oe,"click",e[7]),f(oe,"touchstart",e[13],{passive:!0}),f(oe,"touchend",e[14],{passive:!0}),f(he,"click",e[8]),f(he,"touchstart",e[15],{passive:!0}),f(he,"touchend",e[16],{passive:!0})],_e=!0)},p(e,[n]){const t={};8&n&&(t.active=e[3]),de.$set(t),(!me||8&n&&Le!==(Le="b2b-banner__slider-handle-icon "+(e[3]?"b2b-banner__slider-handle-icon--active":"")+" svelte-1deyvxj"))&&p(ce,"class",Le),(!me||40&n&&ue!==(ue="b2b-banner__slider-handle b2b-banner__slider-handle--left "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[5]?"b2b-banner__slider-handle--touch":"")+" svelte-1deyvxj"))&&p(oe,"class",ue);const r={};4&n&&(r.active=e[2]),pe.$set(r),(!me||4&n&&ve!==(ve="b2b-banner__slider-handle-icon "+(e[2]?"b2b-banner__slider-handle-icon--active":"")+" svelte-1deyvxj"))&&p(fe,"class",ve),(!me||24&n&&ge!==(ge="b2b-banner__slider-handle b2b-banner__slider-handle--right "+(e[3]?"b2b-banner__slider-handle--active":"")+" "+(e[4]?"b2b-banner__slider-handle--touch":"")+" svelte-1deyvxj"))&&p(he,"class",ge)},i(e){me||(F(N.$$.fragment,e),F(J.$$.fragment,e),F(Y.$$.fragment,e),F(ie.$$.fragment,e),F(de.$$.fragment,e),F(pe.$$.fragment,e),me=!0)},o(e){B(N.$$.fragment,e),B(J.$$.fragment,e),B(Y.$$.fragment,e),B(ie.$$.fragment,e),B(de.$$.fragment,e),B(pe.$$.fragment,e),me=!1},d(t){t&&d(n),E(N),E(J),E(Y),E(ie),e[12](null),E(de),E(pe),_e=!1,r(xe)}}}const R="fmhx";function V(e){return[...e.childNodes].filter((e=>e.tagName))}function Y(e,n){e.animate([{transform:`translateX(${n}px)`}],{duration:500,easing:"ease-in-out",fill:"forwards"}).onfinish=e=>{console.log("animation finished",e)}}function ee(e,n,t){let r,i,s,l,{displayType:a=R}=n;const o={general:{imgUrl:e=>`https://www.fmh.de/resources/assets/1762/${e}/c8c2ac41cdecb1817a0e9f7b51efbe6ad78747cc-burning-planet.jpg`,box:{question:"Schon gewusst?",answer:"Mehr als 300 europäische Unternehmen nutzen bereits unsere\n        Daten und Service für ihren Erfolg",ctaLabel:"Was können wir für Sie tun?",ctaText:"Jetzt beraten lassen",link:"/banking-corporate-service"}},mg:{imgUrl:e=>`https://www.fmh.de/resources/assets/1789/${e}/d596912241d8c877dc85a93c0cdaa6c2b588e998-mortgage-research.jpg`,box:{question:"Neue Studie",answer:"Marktkompass 2022: Baufinanzierung und\n        Turbulenzen<br/>Einblick. Ausblick. Durchblick.",ctaLabel:"Eine Studie von FMH X und SWI Finance",ctaText:"Mehr erfahren",link:"https://www.fmhx.de/studie-marktkompass-baufinanzierung-2022"}},[R]:{imgUrl:e=>`https://www.fmh.de/resources/assets/1789/${e}/d596912241d8c877dc85a93c0cdaa6c2b588e998-mortgage-research.jpg`,box:{question:"Schon gesehen?",answer:"FMH hat jetzt auch eine eigene\n        B2B-Brand: FMH X",ctaLabel:"Profitieren Sie von unseren Daten, Produkten und Leistungen!",ctaText:"Zur Website von FMH X",link:"https://www.fmhx.de"}}}[a];let c=null,d=0,L=0,u="";function b(e){console.log("ev:",e),console.log("ev:",e.clientX);let n=function(e){const n=V(e);return n.reduce(((e,n)=>e+n.clientWidth),0)/n.length}(c);Y(c,d*n)}g((()=>{t(11,L=V(c).length),window.addEventListener("resize",((e,n)=>{let t;return function(...r){clearTimeout(t),t=setTimeout((()=>{clearTimeout(t),e(...r)}),n)}})((e=>{Y(c,0)}),500),!0),window.DeviceOrientationEvent&&window.addEventListener("orientationchange",(e=>{Y(c,0)}),!0)}));return e.$$set=e=>{"displayType"in e&&t(9,a=e.displayType)},e.$$.update=()=>{1&e.$$.dirty&&t(5,r="left"===u),1&e.$$.dirty&&t(4,i="right"===u),1024&e.$$.dirty&&t(3,s=Math.abs(d)>0),3072&e.$$.dirty&&t(2,l=Math.abs(d)<L-2)},[u,c,l,s,i,r,o,function(e){return!!s&&(e.preventDefault(),t(10,d+=1),b(e))},function(e){return!!l&&(e.preventDefault(),t(10,d-=1),d>=L-2&&t(10,d=L-2),b(e))},a,d,L,function(e){_[e?"unshift":"push"]((()=>{c=e,t(1,c)}))},()=>t(0,u="left"),()=>t(0,u=""),()=>t(0,u="right"),()=>t(0,u="")]}class ne extends N{constructor(e){super(),T(this,e,ee,Q,s,{displayType:9})}}const te=document.querySelector("#b2b-banner"),re=function(e){return{int(n,t){const r=parseInt(e.dataset[n]);return isNaN(r)?t:r},str:(n,t)=>e.dataset[n]||t}}(te).int("delay",100);setTimeout((()=>{new ne({target:te,props:{}})}),re)}();
//# sourceMappingURL=b2b-banner.js.map
