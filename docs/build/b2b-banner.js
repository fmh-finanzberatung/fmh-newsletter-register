!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function L(e){return document.createElement(e)}function c(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function u(){return f(" ")}function d(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let h;function p(e){h=e}const g=[],v=[],m=[],b=[],_=Promise.resolve();let C=!1;function $(e){m.push(e)}const x=new Set;let M=0;function w(){const e=h;do{for(;M<g.length;){const e=g[M];M++,p(e),Z(e.$$)}for(p(null),g.length=0,M=0;v.length;)v.pop()();for(let e=0;e<m.length;e+=1){const t=m[e];x.has(t)||(x.add(t),t())}m.length=0}while(g.length);for(;b.length;)b.pop()();C=!1,x.clear(),p(e)}function Z(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const y=new Set;function S(e,t){e&&e.i&&(y.delete(e),e.i(t))}function k(e,t,n,s){if(e&&e.o){if(y.has(e))return;y.add(e),undefined.c.push((()=>{y.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function B(e){e&&e.c()}function P(e,n,r,o){const{fragment:l,on_mount:a,on_destroy:L,after_update:c}=e.$$;l&&l.m(n,r),o||$((()=>{const n=a.map(t).filter(i);L?L.push(...n):s(n),e.$$.on_mount=[]})),c.forEach($)}function F(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(g.push(e),C||(C=!0,_.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,i,r,o,l,L,c,f=[-1]){const u=h;p(t);const d=t.$$={fragment:null,ctx:null,props:L,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(u?u.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:i.target||u.$$.root};c&&c(d.root);let g=!1;if(d.ctx=r?r(t,i.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),g&&z(t,e)),n})):[],d.update(),g=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);d.fragment&&d.fragment.l(e),e.forEach(a)}else d.fragment&&d.fragment.c();i.intro&&S(t.$$.fragment),P(t,i.target,i.anchor,i.customElement),w()}p(u)}class H{$destroy(){F(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function E(t){let n,s,i,r,L,f;return{c(){n=c("svg"),s=c("g"),i=c("polygon"),r=c("path"),L=c("path"),f=c("polygon"),d(i,"id","Path-Copy-2"),d(i,"points","0 0 76 0 76 76 0 76"),d(r,"d","M70,19 L70,57 L38.5,57 L38.5,50.5 L64.5,50.5 L64.5,24.5 L38.5,24.5 L38.5,19 L70,19 Z M59.5,40.5 L59.5,45.5 L54,45.5 L54,40.5 L59.5,40.5 Z M49,40.5 L49,45.5 L43.5,45.5 L43.5,40.5 L49,40.5 Z M59.5,30 L59.5,35 L54,35 L54,30 L59.5,30 Z M49,30 L49,35 L43.5,35 L43.5,30 L49,30 Z"),d(r,"id","Combined-Shape"),d(r,"fill","#1194DB"),d(L,"d","M44.5,8 L44.5,57 L6,57 L6,8 L44.5,8 Z M38.5,45.5 L33,45.5 L33,51 L38.5,51 L38.5,45.5 Z M28,45.5 L22.5,45.5 L22.5,51 L28,51 L28,45.5 Z M17.5,45.5 L12,45.5 L12,51 L17.5,51 L17.5,45.5 Z M38.5,35 L33,35 L33,40.5 L38.5,40.5 L38.5,35 Z M28,35 L22.5,35 L22.5,40.5 L28,40.5 L28,35 Z M17.5,35 L12,35 L12,40.5 L17.5,40.5 L17.5,35 Z M38.5,24.5 L33,24.5 L33,30 L38.5,30 L38.5,24.5 Z M28,24.5 L22.5,24.5 L22.5,30 L28,30 L28,24.5 Z M17.5,24.5 L12,24.5 L12,30 L17.5,30 L17.5,24.5 Z M38.5,14 L33,14 L33,19.5 L38.5,19.5 L38.5,14 Z M28,14 L22.5,14 L22.5,19.5 L28,19.5 L28,14 Z M17.5,14 L12,14 L12,19.5 L17.5,19.5 L17.5,14 Z"),d(L,"id","Combined-Shape"),d(L,"fill","#1194DB"),d(f,"id","Path-3"),d(f,"fill","#5FD5FF"),d(f,"points","0 71 16 55 26 65 41 50 51 60 71 40 76 45 76 30 61 30 66 35 51 50 41 40 26 55 16 45 0 61"),d(s,"id","Banking-Corporate-Services"),d(s,"stroke","none"),d(s,"stroke-width","1"),d(s,"fill","none"),d(s,"fill-rule","evenodd"),d(n,"width","76px"),d(n,"height","76px"),d(n,"viewBox","0 0 76 76"),d(n,"version","1.1"),d(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){l(e,n,t),o(n,s),o(s,i),o(s,r),o(s,L),o(s,f)},p:e,i:e,o:e,d(e){e&&a(n)}}}class N extends H{constructor(e){super(),D(this,e,null,E,r,{})}}function T(t){let n,s,i,r,L,f,u,h,p,g;return{c(){n=c("svg"),s=c("g"),i=c("polygon"),r=c("g"),L=c("path"),f=c("path"),u=c("g"),h=c("path"),p=c("path"),g=c("path"),d(i,"id","Path-Copy-2"),d(i,"points","0.166666667 0 76.1666667 0 76.1666667 76 0.166666667 76"),d(L,"d","M58.1818182,0 L5.81818182,0 C2.61818182,0 0,2.61818182 0,5.81818182 L0,40.7272727 C0,43.9272727 2.61818182,46.5454545 5.81818182,46.5454545 L26.1818182,46.5454545 L26.1818182,52.2666667 L20.3636364,52.2666667 L20.3636364,57.6 L43.6363636,57.6 L43.6363636,52.2666667 L37.8181818,52.2666667 L37.8181818,46.5454545 L58.1818182,46.5454545 C61.3818182,46.5454545 64,43.9272727 64,40.7272727 L64,5.81818182 C64,2.61818182 61.3818182,0 58.1818182,0 Z M58.3871658,40.9326203 L6.02352941,40.9326203 L6.02352941,6.02352941 L58.3871658,6.02352941 L58.3871658,40.9326203 Z"),d(L,"id","Shape"),d(L,"fill-rule","nonzero"),d(f,"d","M19.741193,12 L19.741193,15.5218175 L15.7035228,15.5218175 L15.7035228,20.8647718 L19.2253403,20.8647718 L19.2253403,24.3859087 L15.7035228,24.3859087 L15.7035228,33.25 L12,33.25 L12,12 L19.741193,12 Z M28.1363891,12 L30.6863891,20.0753403 L33.2363891,12 L36.9705364,12 L36.9705364,33.25 L33.4180945,33.25 L33.4180945,20.3482386 L30.7163331,28.4535228 L30.6557646,28.4535228 L27.9540032,20.3482386 L27.9540032,33.25 L24.4022418,33.25 L24.4022418,12 L28.1363891,12 Z M45.4535228,12 L45.4535228,20.8035228 L48.6718175,20.8035228 L48.6718175,12 L52.3753403,12 L52.3753403,33.25 L48.6718175,33.25 L48.6718175,24.3253403 L45.4535228,24.3253403 L45.4535228,33.25 L41.75,33.25 L41.75,12 L45.4535228,12 Z"),d(f,"id","Combined-Shape"),d(r,"id","Desktop"),d(r,"transform","translate(0.000000, 8.000000)"),d(r,"fill","#1194DB"),d(h,"d","M19.94,39.7 C22.14,39.7 23.94,37.9 23.94,35.7 L15.94,35.7 C15.94,37.9 17.72,39.7 19.94,39.7 Z M31.94,27.7 L31.94,17.7 C31.94,11.56 28.66,6.42 22.94,5.06 L22.94,3.7 C22.94,2.04 21.6,0.7 19.94,0.7 C18.28,0.7 16.94,2.04 16.94,3.7 L16.94,5.06 C11.2,6.42 7.94,11.54 7.94,17.7 L7.94,27.7 L3.94,31.7 L3.94,33.7 L35.94,33.7 L35.94,31.7 L31.94,27.7 Z"),d(h,"id","Shape"),d(p,"d","M11.1,2.86 L8.24,0 C3.44,3.66 0.28,9.3 0,15.7 L4,15.7 C4.3,10.4 7.02,5.76 11.1,2.86 L11.1,2.86 Z"),d(p,"id","Path"),d(g,"d","M35.88,15.7 L39.88,15.7 C39.58,9.3 36.42,3.66 31.64,0 L28.8,2.86 C32.84,5.76 35.58,10.4 35.88,15.7 Z"),d(g,"id","Path"),d(u,"id","Notification"),d(u,"transform","translate(35.226667, 36.300000)"),d(u,"fill","#5FD5FF"),d(u,"fill-rule","nonzero"),d(s,"id","Info-Services"),d(s,"transform","matrix(1, 0, 0, 1, 0.833313, 0)"),d(s,"stroke","none"),d(s,"stroke-width","1"),d(s,"fill","none"),d(s,"fill-rule","evenodd"),d(n,"width","77px"),d(n,"height","76px"),d(n,"viewBox","0 0 77 76"),d(n,"version","1.1"),d(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){l(e,n,t),o(n,s),o(s,i),o(s,r),o(r,L),o(r,f),o(s,u),o(u,h),o(u,p),o(u,g)},p:e,i:e,o:e,d(e){e&&a(n)}}}class j extends H{constructor(e){super(),D(this,e,null,T,r,{})}}function A(t){let n,s,i,r,L,u,h,p;return{c(){n=c("svg"),s=c("title"),i=f("Presse-Services"),r=c("g"),L=c("polygon"),u=c("path"),h=c("path"),p=c("path"),d(L,"id","Path-Copy-2"),d(L,"points","0 0 76 0 76 76 0 76"),d(u,"d","M45.8988701,8 L60.8988701,23 L60.8988701,53 C60.8988701,55.75 58.6488701,58 55.8988701,58 L55.8988701,58 L43.411,58 L43.4115273,53 L55.8988701,53 L55.8988701,25.5 L43.3988701,25.5 L43.3988701,12 L21,12.000086 C21.4665241,9.7249205 23.4910393,8 25.8988701,8 L25.8988701,8 L45.8988701,8 Z"),d(u,"id","Combined-Shape"),d(u,"fill","#1194DB"),d(u,"fill-rule","nonzero"),d(h,"d","M13.5,50 L33.5,50 L33.5,55 L13.5,55 L13.5,50 Z M13.5,40 L33.5,40 L33.5,45 L13.5,45 L13.5,40 Z M28.5,15 L8.5,15 C5.75,15 3.5,17.25 3.5,20 L3.5,60 C3.5,62.75 5.725,65 8.475,65 L38.5,65 C41.25,65 43.5,62.75 43.5,60 L43.5,30 L28.5,15 Z M38.5,60 L8.5,60 L8.5,20 L26,20 L26,32.5 L38.5,32.5 L38.5,60 Z"),d(h,"id","Shape-Copy"),d(h,"fill","#1194DB"),d(h,"fill-rule","nonzero"),d(p,"d","M46,40 L46,70 L36,70 L36,40 L46,40 Z M61,20 L61,70 L51,70 L51,20 L61,20 Z M76,32 L76,70 L66,70 L66,32 L76,32 Z"),d(p,"id","Combined-Shape"),d(p,"fill","#5FD5FF"),d(r,"id","Presse-Services"),d(r,"stroke","none"),d(r,"stroke-width","1"),d(r,"fill","none"),d(r,"fill-rule","evenodd"),d(n,"width","76px"),d(n,"height","76px"),d(n,"viewBox","0 0 76 76"),d(n,"version","1.1"),d(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){l(e,n,t),o(n,s),o(s,i),o(n,r),o(r,L),o(r,u),o(r,h),o(r,p)},p:e,i:e,o:e,d(e){e&&a(n)}}}class I extends H{constructor(e){super(),D(this,e,null,A,r,{})}}function O(t){let n,s,i,r,L,u,h;return{c(){n=c("svg"),s=c("title"),i=f("Pubilshing Services"),r=c("g"),L=c("path"),u=c("path"),h=c("path"),d(L,"d","M76,0 L76,76 L0,76 L0,0 L76,0 Z"),d(L,"id","Path-Copy-3"),d(u,"d","M37.973,6 C23.069,6 11,18.096 11,33 C11,47.904 23.069,60 37.973,60 C52.904,60 65,47.904 65,33 C65,18.096 52.904,6 37.973,6 Z M56.684,22.2 L48.719,22.2 C47.855,18.825 46.613,15.585 44.993,12.588 C49.961,14.289 54.092,17.745 56.684,22.2 Z M38,11.508 C40.241,14.748 41.996,18.339 43.157,22.2 L32.843,22.2 C34.004,18.339 35.759,14.748 38,11.508 Z M17.102,38.4 C16.67,36.672 16.4,34.863 16.4,33 C16.4,31.137 16.67,29.328 17.102,27.6 L26.228,27.6 C26.012,29.382 25.85,31.164 25.85,33 C25.85,34.836 26.012,36.618 26.228,38.4 L17.102,38.4 Z M19.316,43.8 L27.281,43.8 C28.145,47.175 29.387,50.415 31.007,53.412 C26.039,51.711 21.908,48.282 19.316,43.8 L19.316,43.8 Z M27.281,22.2 L19.316,22.2 C21.908,17.718 26.039,14.289 31.007,12.588 C29.387,15.585 28.145,18.825 27.281,22.2 L27.281,22.2 Z M38,54.492 C35.759,51.252 34.004,47.661 32.843,43.8 L43.157,43.8 C41.996,47.661 40.241,51.252 38,54.492 Z M44.318,38.4 L31.682,38.4 C31.439,36.618 31.25,34.836 31.25,33 C31.25,31.164 31.439,29.355 31.682,27.6 L44.318,27.6 C44.561,29.355 44.75,31.164 44.75,33 C44.75,34.836 44.561,36.618 44.318,38.4 Z M44.993,53.412 C46.613,50.415 47.855,47.175 48.719,43.8 L56.684,43.8 C54.092,48.255 49.961,51.711 44.993,53.412 L44.993,53.412 Z M49.772,38.4 C49.988,36.618 50.15,34.836 50.15,33 C50.15,31.164 49.988,29.382 49.772,27.6 L58.898,27.6 C59.33,29.328 59.6,31.137 59.6,33 C59.6,34.863 59.33,36.672 58.898,38.4 L49.772,38.4 Z"),d(u,"id","Shape"),d(u,"fill","#1194DB"),d(u,"fill-rule","nonzero"),d(h,"d","M58,63 L38,63 L38,68 L58,68 L58,63 Z M76,52 L76,58 L38,58 L38,52 L76,52 Z M76,41 L76,47 L38,47 L38,41 L76,41 Z M38,30 L38,36 L76,36 L76,30 L38,30 Z"),d(h,"id","Shape"),d(h,"fill","#5FD5FF"),d(h,"fill-rule","nonzero"),d(r,"id","Pubilshing-Services"),d(r,"stroke","none"),d(r,"stroke-width","1"),d(r,"fill","none"),d(r,"fill-rule","evenodd"),d(n,"width","76px"),d(n,"height","76px"),d(n,"viewBox","0 0 76 76"),d(n,"version","1.1"),d(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){l(e,n,t),o(n,s),o(s,i),o(n,r),o(r,L),o(r,u),o(r,h)},p:e,i:e,o:e,d(e){e&&a(n)}}}class q extends H{constructor(e){super(),D(this,e,null,O,r,{})}}function K(t){let n,s,i,r,c,f,h,p,g,v,m,b,_,C,$,x,M,w,Z,y,z,D,H,E,T,A,O,K,X,V,W,G,J;return m=new N({}),x=new q({}),z=new I({}),A=new j({}),{c(){n=L("div"),s=L("div"),i=L("h1"),i.textContent="Schon gesehen?",r=u(),c=L("h2"),c.innerHTML='FMH hat jetzt auch eine eigene B2B-Brand: <span class="b2b-banner__fmhx svelte-sgv10b">FMH X</span>',f=u(),h=L("p"),h.textContent="Profitieren Sie von unseren Daten, Produkten und Leistungen!",p=u(),g=L("ul"),v=L("a"),B(m.$$.fragment),b=u(),_=L("span"),_.textContent="Banking & Corporate Services",C=u(),$=L("a"),B(x.$$.fragment),M=u(),w=L("span"),w.textContent="Publishing Services",Z=u(),y=L("a"),B(z.$$.fragment),D=u(),H=L("span"),H.textContent="Presse-Services",E=u(),T=L("a"),B(A.$$.fragment),O=u(),K=L("span"),K.textContent="Info-Services",X=u(),V=L("div"),V.innerHTML='<a class="b2b-banner__button b2b-banner__button--primary svelte-sgv10b" href="https://www.fmhx.de">Zur Website von FMH X</a>',W=u(),G=L("div"),G.innerHTML='<figure class="certificates__figure svelte-sgv10b"><caption class="certificates__caption svelte-sgv10b"><div class="certificates__title svelte-sgv10b">Kundenorientierte Baufinanzierung</div> \n          <div class="certificates__subtitle svelte-sgv10b">FMH-Zertifikat für Baufinanzierungsvermittler</div></caption> \n        <a href="https://cert.fmh.de" class="certificates__logo-link svelte-sgv10b"><img class="certificates__logo svelte-sgv10b" src="https://www.fmh.de/resources/assets/1936/original/0eb4d826ec0bcf0d380a246530bd491ceaee6f78-Vermittler-Zertifikat-Logo.png"/></a></figure> \n      <div class="certificates__buttons svelte-sgv10b"><a class="b2b-banner__button b2b-banner__button--secondary svelte-sgv10b" href="https://cert.fmh.de">Zur FMH-Zertizierung</a></div> \n      <a class="certificates__text-link svelte-sgv10b" href="https://www.fmh.de/baufinanzierung/artikel/zertifikat-fuer-baufinanzierungsvermittler-2023-07-01">Kundenorientierter Service und Dienstleistungen stehen im Mittelpunkt</a>',d(i,"class","fmhx__title svelte-sgv10b"),d(c,"class","fmhx__subtitle svelte-sgv10b"),d(h,"class","fmhx__p svelte-sgv10b"),d(_,"class","fmhx__slider-caption svelte-sgv10b"),d(v,"role","listitem"),d(v,"class","fmhx__slider-item svelte-sgv10b"),d(v,"href","https://www.fmhx.de"),d(v,"title","Banking & Corporate Services"),d(w,"class","fmhx__slider-caption svelte-sgv10b"),d($,"role","listitem"),d($,"class","fmhx__slider-item svelte-sgv10b"),d($,"href","https://www.fmhx.de"),d($,"title","Publishing Services"),d(H,"class","fmhx__slider-caption svelte-sgv10b"),d(y,"role","listitem"),d(y,"class","fmhx__slider-item svelte-sgv10b"),d(y,"href","/fuer-redaktionen"),d(y,"title","Presse Services"),d(K,"class","fmhx__slider-caption svelte-sgv10b"),d(T,"role","listitem"),d(T,"class","fmhx__slider-item svelte-sgv10b"),d(T,"href","/banking-corporate-service"),d(T,"title","Info-Services"),d(g,"class","fmhx__slider-list svelte-sgv10b"),d(V,"class","fmhx__buttons svelte-sgv10b"),d(s,"class","b2b-banner__fmhx fmhx svelte-sgv10b"),d(G,"class","b2b-banner__certificates certificates svelte-sgv10b"),d(n,"class","b2b-banner svelte-sgv10b")},m(e,t){l(e,n,t),o(n,s),o(s,i),o(s,r),o(s,c),o(s,f),o(s,h),o(s,p),o(s,g),o(g,v),P(m,v,null),o(v,b),o(v,_),o(g,C),o(g,$),P(x,$,null),o($,M),o($,w),o(g,Z),o(g,y),P(z,y,null),o(y,D),o(y,H),o(g,E),o(g,T),P(A,T,null),o(T,O),o(T,K),o(s,X),o(s,V),o(n,W),o(n,G),J=!0},p:e,i(e){J||(S(m.$$.fragment,e),S(x.$$.fragment,e),S(z.$$.fragment,e),S(A.$$.fragment,e),J=!0)},o(e){k(m.$$.fragment,e),k(x.$$.fragment,e),k(z.$$.fragment,e),k(A.$$.fragment,e),J=!1},d(e){e&&a(n),F(m),F(x),F(z),F(A)}}}class X extends H{constructor(e){super(),D(this,e,null,K,r,{})}}const V=document.querySelector("#b2b-banner"),W=function(e){return{int(t,n){const s=parseInt(e.dataset[t]);return isNaN(s)?n:s},str:(t,n)=>e.dataset[t]||n}}(V).int("delay",100);setTimeout((()=>{new X({target:V,props:{}})}),W)}();
//# sourceMappingURL=b2b-banner.js.map
