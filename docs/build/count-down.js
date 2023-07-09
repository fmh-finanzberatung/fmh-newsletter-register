!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,a;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function u(e,t){e.appendChild(t)}function l(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e){a=e}const v=[],b=[],y=[],w=[],_=Promise.resolve();let E=!1;function x(e){y.push(e)}const S=new Set;let O=0;function j(){const e=a;do{for(;O<v.length;){const e=v[O];O++,g(e),$(e.$$)}for(g(null),v.length=0,O=0;b.length;)b.pop()();for(let e=0;e<y.length;e+=1){const t=y[e];S.has(t)||(S.add(t),t())}y.length=0}while(v.length);for(;w.length;)w.pop()();E=!1,S.clear(),g(e)}function $(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const A=new Set;function C(e,t){-1===e.$$.dirty[0]&&(v.push(e),E||(E=!0,_.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function N(i,s,c,u,f,d,p,h=[-1]){const m=a;g(i);const v=i.$$={fragment:null,ctx:null,props:d,update:e,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:s.target||m.$$.root};p&&p(v.root);let b=!1;if(v.ctx=c?c(i,s.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return v.ctx&&f(v.ctx[e],v.ctx[e]=r)&&(!v.skip_bound&&v.bound[e]&&v.bound[e](r),b&&C(i,e)),t})):[],v.update(),b=!0,r(v.before_update),v.fragment=!!u&&u(v.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);v.fragment&&v.fragment.l(e),e.forEach(l)}else v.fragment&&v.fragment.c();s.intro&&((y=i.$$.fragment)&&y.i&&(A.delete(y),y.i(w))),function(e,n,i,s){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=e.$$;a&&a.m(n,i),s||x((()=>{const n=c.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(x)}(i,s.target,s.anchor,s.customElement),j()}var y,w;g(m)}var T={exports:{}},R=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},k=R,P=Object.prototype.toString;function z(e){return Array.isArray(e)}function U(e){return void 0===e}function B(e){return"[object ArrayBuffer]"===P.call(e)}function D(e){return null!==e&&"object"==typeof e}function L(e){if("[object Object]"!==P.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function q(e){return"[object Function]"===P.call(e)}function M(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),z(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var F={isArray:z,isArrayBuffer:B,isBuffer:function(e){return null!==e&&!U(e)&&null!==e.constructor&&!U(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===P.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&B(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:D,isPlainObject:L,isUndefined:U,isDate:function(e){return"[object Date]"===P.call(e)},isFile:function(e){return"[object File]"===P.call(e)},isBlob:function(e){return"[object Blob]"===P.call(e)},isFunction:q,isStream:function(e){return D(e)&&q(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===P.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:M,merge:function e(){var t={};function n(n,r){L(t[r])&&L(n)?t[r]=e(t[r],n):L(n)?t[r]=e({},n):z(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)M(arguments[r],n);return t},extend:function(e,t,n){return M(t,(function(t,r){e[r]=n&&"function"==typeof t?k(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},I=F;function J(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var H=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(I.isURLSearchParams(t))r=t.toString();else{var o=[];I.forEach(t,(function(e,t){null!=e&&(I.isArray(e)?t+="[]":e=[e],I.forEach(e,(function(e){I.isDate(e)?e=e.toISOString():I.isObject(e)&&(e=JSON.stringify(e)),o.push(J(t)+"="+J(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},V=F;function X(){this.handlers=[]}X.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},X.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},X.prototype.forEach=function(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var W=X,K=F,G=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Y=G,Q=function(e,t,n,r,o){var i=new Error(e);return Y(i,t,n,r,o)},Z=Q,ee=F,te=ee.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),ee.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ee.isString(r)&&s.push("path="+r),ee.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ne=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},re=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},oe=F,ie=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],se=F,ae=se.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=se.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function ce(e){this.message=e}ce.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ce.prototype.__CANCEL__=!0;var ue=ce,le=F,fe=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(Z("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},de=te,pe=H,he=function(e,t){return e&&!ne(t)?re(e,t):t},me=function(e){var t,n,r,o={};return e?(oe.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=oe.trim(e.substr(0,r)).toLowerCase(),n=oe.trim(e.substr(r+1)),t){if(o[t]&&ie.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},ge=ae,ve=Q,be=Ae,ye=ue,we=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}le.isFormData(o)&&delete i["Content-Type"];var c=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(u+":"+l)}var f=he(e.baseURL,e.url);function d(){if(c){var r="getAllResponseHeaders"in c?me(c.getAllResponseHeaders()):null,o={data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};fe((function(e){t(e),a()}),(function(e){n(e),a()}),o),c=null}}if(c.open(e.method.toUpperCase(),pe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(d)},c.onabort=function(){c&&(n(ve("Request aborted",e,"ECONNABORTED",c)),c=null)},c.onerror=function(){n(ve("Network Error",e,null,c)),c=null},c.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||be.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ve(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},le.isStandardBrowserEnv()){var p=(e.withCredentials||ge(f))&&e.xsrfCookieName?de.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in c&&le.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:c.setRequestHeader(t,e)})),le.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){c&&(n(!e||e&&e.type?new ye("canceled"):e),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null),c.send(o)}))},_e=F,Ee=function(e,t){K.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},xe=G,Se={"Content-Type":"application/x-www-form-urlencoded"};function Oe(e,t){!_e.isUndefined(e)&&_e.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var je,$e={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(je=we),je),transformRequest:[function(e,t){return Ee(t,"Accept"),Ee(t,"Content-Type"),_e.isFormData(e)||_e.isArrayBuffer(e)||_e.isBuffer(e)||_e.isStream(e)||_e.isFile(e)||_e.isBlob(e)?e:_e.isArrayBufferView(e)?e.buffer:_e.isURLSearchParams(e)?(Oe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):_e.isObject(e)||t&&"application/json"===t["Content-Type"]?(Oe(t,"application/json"),function(e,t,n){if(_e.isString(e))try{return(t||JSON.parse)(e),_e.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||$e.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&_e.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw xe(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_e.forEach(["delete","get","head"],(function(e){$e.headers[e]={}})),_e.forEach(["post","put","patch"],(function(e){$e.headers[e]=_e.merge(Se)}));var Ae=$e,Ce=F,Ne=Ae,Te=function(e){return!(!e||!e.__CANCEL__)},Re=F,ke=function(e,t,n){var r=this||Ne;return Ce.forEach(n,(function(n){e=n.call(r,e,t)})),e},Pe=Te,ze=Ae,Ue=ue;function Be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ue("canceled")}var De=F,Le=function(e,t){t=t||{};var n={};function r(e,t){return De.isPlainObject(e)&&De.isPlainObject(t)?De.merge(e,t):De.isPlainObject(t)?De.merge({},t):De.isArray(t)?t.slice():t}function o(n){return De.isUndefined(t[n])?De.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!De.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return De.isUndefined(t[n])?De.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return De.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,r=t(e);De.isUndefined(r)&&t!==a||(n[e]=r)})),n},qe="0.25.0",Me=qe,Fe={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Fe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Ie={};Fe.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Me+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!Ie[o]&&(Ie[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Je={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:Fe},He=F,Ve=H,Xe=W,We=function(e){return Be(e),e.headers=e.headers||{},e.data=ke.call(e,e.data,e.headers,e.transformRequest),e.headers=Re.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Re.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ze.adapter)(e).then((function(t){return Be(e),t.data=ke.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Pe(t)||(Be(e),t&&t.response&&(t.response.data=ke.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Ke=Le,Ge=Je,Ye=Ge.validators;function Qe(e){this.defaults=e,this.interceptors={request:new Xe,response:new Xe}}Qe.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=Ke(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&Ge.assertOptions(n,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,s=[];if(this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)})),!o){var a=[We,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(s),i=Promise.resolve(t);a.length;)i=i.then(a.shift(),a.shift());return i}for(var c=t;r.length;){var u=r.shift(),l=r.shift();try{c=u(c)}catch(e){l(e);break}}try{i=We(c)}catch(e){return Promise.reject(e)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},Qe.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=Ke(this.defaults,e),Ve(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},He.forEach(["delete","get","head","options"],(function(e){Qe.prototype[e]=function(t,n){return this.request(Ke(n||{},{method:e,url:t,data:(n||{}).data}))}})),He.forEach(["post","put","patch"],(function(e){Qe.prototype[e]=function(t,n,r){return this.request(Ke(r||{},{method:e,url:t,data:n}))}}));var Ze=Qe,et=ue;function tt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new et(e),t(n.reason))}))}tt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},tt.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},tt.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},tt.source=function(){var e;return{token:new tt((function(t){e=t})),cancel:e}};var nt=tt,rt=F,ot=F,it=R,st=Ze,at=Le;var ct=function e(t){var n=new st(t),r=it(st.prototype.request,n);return ot.extend(r,st.prototype,n),ot.extend(r,n),r.create=function(n){return e(at(t,n))},r}(Ae);ct.Axios=st,ct.Cancel=ue,ct.CancelToken=nt,ct.isCancel=Te,ct.VERSION=qe,ct.all=function(e){return Promise.all(e)},ct.spread=function(e){return function(t){return e.apply(null,t)}},ct.isAxiosError=function(e){return rt.isObject(e)&&!0===e.isAxiosError},T.exports=ct,T.exports.default=ct;var ut=T.exports;function lt(e){if(!e||!e.length)return-1;return Math.floor(Math.random()*(e.length-1))}function ft(t){let n,r,o,i,s,a,g,v,b,y,w,_,E,x,S,O,j,$,A,C,N,T,R,k,P,z,U,B,D,L,q,M,F,I,J,H,V;return{c(){n=f("div"),r=f("img"),i=p(),s=f("div"),a=f("div"),g=f("h2"),v=d(t[3]),b=p(),y=d(t[2]),w=p(),_=f("ul"),E=f("li"),x=f("div"),S=d(t[7]),O=p(),j=f("div"),j.textContent="Tage",$=p(),A=f("li"),C=f("div"),N=d(t[6]),T=p(),R=f("div"),R.textContent="Stunden",k=p(),P=f("li"),z=f("div"),U=d(t[5]),B=p(),D=f("div"),D.textContent="Minuten",L=p(),q=f("div"),M=p(),F=f("li"),I=f("div"),J=d(t[4]),H=p(),V=f("div"),V.textContent="Sekunden",h(r,"class","countdown__img svelte-z4dbg5"),c(r.src,o=t[0])||h(r,"src",o),h(r,"alt",t[1]),h(g,"class","countdown__title svelte-z4dbg5"),h(x,"class","countdown__number svelte-z4dbg5"),h(j,"class","countdown__label svelte-z4dbg5"),h(E,"class","countdown__item svelte-z4dbg5"),h(C,"class","countdown__number svelte-z4dbg5"),h(R,"class","countdown__label svelte-z4dbg5"),h(A,"class","countdown__item svelte-z4dbg5"),h(z,"class","countdown__number svelte-z4dbg5"),h(D,"class","countdown__label svelte-z4dbg5"),h(q,"class","countdown__number svelte-z4dbg5"),h(P,"class","countdown__item svelte-z4dbg5"),h(I,"class","countdown__number svelte-z4dbg5"),h(V,"class","countdown__label svelte-z4dbg5"),h(F,"class","countdown__item svelte-z4dbg5"),h(_,"class","countdown__counter svelte-z4dbg5"),h(a,"class","countdown__content svelte-z4dbg5"),h(s,"class","countdown__canvas svelte-z4dbg5"),h(n,"class","countdown svelte-z4dbg5")},m(e,t){!function(e,t,n){e.insertBefore(t,n||null)}(e,n,t),u(n,r),u(n,i),u(n,s),u(s,a),u(a,g),u(g,v),u(g,b),u(g,y),u(a,w),u(a,_),u(_,E),u(E,x),u(x,S),u(E,O),u(E,j),u(_,$),u(_,A),u(A,C),u(C,N),u(A,T),u(A,R),u(_,k),u(_,P),u(P,z),u(z,U),u(P,B),u(P,D),u(P,L),u(P,q),u(_,M),u(_,F),u(F,I),u(I,J),u(F,H),u(F,V)},p(e,[t]){1&t&&!c(r.src,o=e[0])&&h(r,"src",o),2&t&&h(r,"alt",e[1]),8&t&&m(v,e[3]),4&t&&m(y,e[2]),128&t&&m(S,e[7]),64&t&&m(N,e[6]),32&t&&m(U,e[5]),16&t&&m(J,e[4])},i:e,o:e,d(e){e&&l(n)}}}function dt(e,t,n){let{interval:r=1e3}=t,{imgSrc:o=""}=t,{imgAlt:i=""}=t,{size:s="original"}=t,{caption:a=""}=t,{year:c=(new Date).getFullYear()}=t;function u(e){n(0,o=`https://auszeichnungen.fmh.de/photos/images/${e.id}/${s}/${e.image_file_name}`),n(1,i=e.description),n(8,a=e.title)}const l=`https://api-auszeichnungen.fmh.de/photos/fmh+award/awards/${c-1}.json`;ut.get(l).then((e=>{if(!e.data||!e.data.length)return!1;u(e.data[0]),function(e,t,n){const r=n||1e3,o=lt(e);t(e[o],o),setInterval((()=>{const n=lt(e);t(e[n],n)}),r)}(e.data,u,r)})).catch((e=>{console.error(e)}));let{eventDate:f}=t,{title:d}=t,p=0,h=0,m=0,g=0;return setInterval((function(){const e=Date.parse(f)-Date.parse(new Date);n(4,p=Math.floor(e/1e3%60)),n(5,h=Math.floor(e/1e3/60%60)),n(6,m=Math.floor(e/36e5%24)),n(7,g=Math.floor(e/864e5))}),1e3),e.$$set=e=>{"interval"in e&&n(9,r=e.interval),"imgSrc"in e&&n(0,o=e.imgSrc),"imgAlt"in e&&n(1,i=e.imgAlt),"size"in e&&n(10,s=e.size),"caption"in e&&n(8,a=e.caption),"year"in e&&n(2,c=e.year),"eventDate"in e&&n(11,f=e.eventDate),"title"in e&&n(3,d=e.title)},[o,i,c,d,p,h,m,g,a,r,s,f]}class pt extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),N(this,e,dt,ft,i,{interval:9,imgSrc:0,imgAlt:1,size:10,caption:8,year:2,eventDate:11,title:3})}}const ht=document.querySelector("#count-down"),mt=function(e){return{int(t,n){const r=parseInt(e.dataset[t]);return isNaN(r)?n:r},str:(t,n)=>e.dataset[t]||n}}(ht),gt=mt.str("title","FMH-Award"),vt=mt.int("year",2e3),bt=mt.int("month",1),yt=mt.int("day",1),wt=mt.int("hour",1),_t=mt.int("min",1),Et=mt.int("sec",1),xt=mt.int("delay",0),St=mt.int("interval",0);setTimeout((()=>{new pt({target:ht,props:{title:gt,eventDate:new Date(vt,bt-1,yt,wt,_t,Et),interval:St}})}),xt)}();
//# sourceMappingURL=count-down.js.map
