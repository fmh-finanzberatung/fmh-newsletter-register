!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a,i;function l(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function c(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function g(){return m(" ")}function y(){return m("")}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e){i=e}function _(){if(!i)throw new Error("Function called outside component initialization");return i}function T(){const e=_();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(t,n);r.slice().forEach((t=>{t.call(e,o)}))}}}const $=[],x=[],E=[],k=[],S=Promise.resolve();let A=!1;function C(){A||(A=!0,S.then(N))}function j(e){E.push(e)}const q=new Set;let O=0;function N(){const e=i;do{for(;O<$.length;){const e=$[O];O++,w(e),R(e.$$)}for(w(null),$.length=0,O=0;x.length;)x.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];q.has(t)||(q.add(t),t())}E.length=0}while($.length);for(;k.length;)k.pop()();A=!1,q.clear(),w(e)}function R(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const L=new Set;function P(e,t){e&&e.i&&(L.delete(e),e.i(t))}function U(e,t,n,r){if(e&&e.o){if(L.has(e))return;L.add(e),undefined.c.push((()=>{L.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function B(e,n,s,a){const{fragment:i,on_mount:l,on_destroy:u,after_update:c}=e.$$;i&&i.m(n,s),a||j((()=>{const n=l.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),c.forEach(j)}function M(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,o,s,a,l,u,c,f=[-1]){const p=i;w(t);const h=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||p.$$.root};c&&c(h.root);let m=!1;if(h.ctx=s?s(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&l(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),m&&function(e,t){-1===e.$$.dirty[0]&&($.push(e),C(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(d)}else h.fragment&&h.fragment.c();o.intro&&P(t.$$.fragment),B(t,o.target,o.anchor,o.customElement),N()}w(p)}class H{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function D(e,t){if(!e)throw new Error("No typesName argument");if(!this[e])throw new Error("No types map with name:",e);return this[e].filter((e=>{let n=e[Object.keys(e)[0]];return t===n})).map((e=>Object.keys(e)[0]))[0]}const z={ColTypeData:0,ColTypeLabel:1,ColTypeBlank:2,AlignTypeNeutral:0,AlignTypeLeft:1,AlignTypeCenter:2,AlignTypeRight:3,AlignTypeJustify:4,SectionTypeThead:1,SectionTypeTbody:2,SectionTypeTfoot:3};z.ColTypes=[{data:z.ColTypeData},{label:z.ColTypeLabel},{blank:z.ColTypeBlank}],z.AlignTypes=[{neutral:z.AlignTypeNeutral},{left:z.AlignTypeLeft},{center:z.AlignTypeCenter},{right:z.AlignTypeRight},{justify:z.AlignTypeJustify}],z.SectionTypes=[{thead:z.SectionTypeThead},{tbody:z.SectionTypeTbody},{tfoot:z.SectionTypeTfoot}],z.getVal=D;const F={RowTypeData:0,RowTypeLabel:1,RowTypeBlank:2,InputTypeSingleLine:0,InputTypeMultiLine:1,InputTypeColspan:2,InputTypeAlign:3,InputTypeUrl:4};F.RowTypes=[{data:F.RowTypeData},{label:F.RowTypeLabel},{blank:F.RowTypeBlank}],F.InputTypes=[{single_line:F.InputTypeSingleLine},{multi_line:F.InputTypeMultiLine},{colspan:F.InputTypeColspan},{align:F.InputTypeAlign},{url:F.InputTypeUrl}],F.getVal=D;var J={exports:{}},V=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},X=V,W=Object.prototype.toString;function K(e){return Array.isArray(e)}function G(e){return void 0===e}function Q(e){return"[object ArrayBuffer]"===W.call(e)}function Y(e){return null!==e&&"object"==typeof e}function Z(e){if("[object Object]"!==W.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function ee(e){return"[object Function]"===W.call(e)}function te(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),K(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ne={isArray:K,isArrayBuffer:Q,isBuffer:function(e){return null!==e&&!G(e)&&null!==e.constructor&&!G(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===W.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Q(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Y,isPlainObject:Z,isUndefined:G,isDate:function(e){return"[object Date]"===W.call(e)},isFile:function(e){return"[object File]"===W.call(e)},isBlob:function(e){return"[object Blob]"===W.call(e)},isFunction:ee,isStream:function(e){return Y(e)&&ee(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===W.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:te,merge:function e(){var t={};function n(n,r){Z(t[r])&&Z(n)?t[r]=e(t[r],n):Z(n)?t[r]=e({},n):K(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)te(arguments[r],n);return t},extend:function(e,t,n){return te(t,(function(t,r){e[r]=n&&"function"==typeof t?X(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},re=ne;function oe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var se=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(re.isURLSearchParams(t))r=t.toString();else{var o=[];re.forEach(t,(function(e,t){null!=e&&(re.isArray(e)?t+="[]":e=[e],re.forEach(e,(function(e){re.isDate(e)?e=e.toISOString():re.isObject(e)&&(e=JSON.stringify(e)),o.push(oe(t)+"="+oe(e))})))})),r=o.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},ae=ne;function ie(){this.handlers=[]}ie.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},ie.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ie.prototype.forEach=function(e){ae.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var le=ie,ue=ne,ce=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},fe=ce,de=function(e,t,n,r,o){var s=new Error(e);return fe(s,t,n,r,o)},pe=de,he=ne,me=he.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),he.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),he.isString(r)&&a.push("path="+r),he.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ge=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},ye=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},be=ne,ve=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],we=ne,_e=we.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=we.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function Te(e){this.message=e}Te.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Te.prototype.__CANCEL__=!0;var $e=Te,xe=ne,Ee=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(pe("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},ke=me,Se=se,Ae=function(e,t){return e&&!ge(t)?ye(e,t):t},Ce=function(e){var t,n,r,o={};return e?(be.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=be.trim(e.substr(0,r)).toLowerCase(),n=be.trim(e.substr(r+1)),t){if(o[t]&&ve.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},je=_e,qe=de,Oe=De,Ne=$e,Re=function(e){return new Promise((function(t,n){var r,o=e.data,s=e.headers,a=e.responseType;function i(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}xe.isFormData(o)&&delete s["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(u+":"+c)}var f=Ae(e.baseURL,e.url);function d(){if(l){var r="getAllResponseHeaders"in l?Ce(l.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};Ee((function(e){t(e),i()}),(function(e){n(e),i()}),o),l=null}}if(l.open(e.method.toUpperCase(),Se(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(qe("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){n(qe("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||Oe.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(qe(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",l)),l=null},xe.isStandardBrowserEnv()){var p=(e.withCredentials||je(f))&&e.xsrfCookieName?ke.read(e.xsrfCookieName):void 0;p&&(s[e.xsrfHeaderName]=p)}"setRequestHeader"in l&&xe.forEach(s,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:l.setRequestHeader(t,e)})),xe.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){l&&(n(!e||e&&e.type?new Ne("canceled"):e),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null),l.send(o)}))},Le=ne,Pe=function(e,t){ue.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Ue=ce,Be={"Content-Type":"application/x-www-form-urlencoded"};function Me(e,t){!Le.isUndefined(e)&&Le.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ie,He={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ie=Re),Ie),transformRequest:[function(e,t){return Pe(t,"Accept"),Pe(t,"Content-Type"),Le.isFormData(e)||Le.isArrayBuffer(e)||Le.isBuffer(e)||Le.isStream(e)||Le.isFile(e)||Le.isBlob(e)?e:Le.isArrayBufferView(e)?e.buffer:Le.isURLSearchParams(e)?(Me(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Le.isObject(e)||t&&"application/json"===t["Content-Type"]?(Me(t,"application/json"),function(e,t,n){if(Le.isString(e))try{return(t||JSON.parse)(e),Le.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||He.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&Le.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw Ue(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Le.forEach(["delete","get","head"],(function(e){He.headers[e]={}})),Le.forEach(["post","put","patch"],(function(e){He.headers[e]=Le.merge(Be)}));var De=He,ze=ne,Fe=De,Je=function(e){return!(!e||!e.__CANCEL__)},Ve=ne,Xe=function(e,t,n){var r=this||Fe;return ze.forEach(n,(function(n){e=n.call(r,e,t)})),e},We=Je,Ke=De,Ge=$e;function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ge("canceled")}var Ye=ne,Ze=function(e,t){t=t||{};var n={};function r(e,t){return Ye.isPlainObject(e)&&Ye.isPlainObject(t)?Ye.merge(e,t):Ye.isPlainObject(t)?Ye.merge({},t):Ye.isArray(t)?t.slice():t}function o(n){return Ye.isUndefined(t[n])?Ye.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!Ye.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return Ye.isUndefined(t[n])?Ye.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function i(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:i};return Ye.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||o,r=t(e);Ye.isUndefined(r)&&t!==i||(n[e]=r)})),n},et="0.25.0",tt=et,nt={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){nt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var rt={};nt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+tt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,s){if(!1===e)throw new Error(r(o," has been removed"+(t?" in "+t:"")));return t&&!rt[o]&&(rt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var ot={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],a=t[s];if(a){var i=e[s],l=void 0===i||a(i,s,e);if(!0!==l)throw new TypeError("option "+s+" must be "+l)}else if(!0!==n)throw Error("Unknown option "+s)}},validators:nt},st=ne,at=se,it=le,lt=function(e){return Qe(e),e.headers=e.headers||{},e.data=Xe.call(e,e.data,e.headers,e.transformRequest),e.headers=Ve.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ve.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ke.adapter)(e).then((function(t){return Qe(e),t.data=Xe.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return We(t)||(Qe(e),t&&t.response&&(t.response.data=Xe.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ut=Ze,ct=ot,ft=ct.validators;function dt(e){this.defaults=e,this.interceptors={request:new it,response:new it}}dt.prototype.request=function(e,t){if("string"==typeof e?(t=t||{}).url=e:t=e||{},!t.url)throw new Error("Provided config url is not valid");(t=ut(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&ct.assertOptions(n,{silentJSONParsing:ft.transitional(ft.boolean),forcedJSONParsing:ft.transitional(ft.boolean),clarifyTimeoutError:ft.transitional(ft.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var i=[lt,void 0];for(Array.prototype.unshift.apply(i,r),i=i.concat(a),s=Promise.resolve(t);i.length;)s=s.then(i.shift(),i.shift());return s}for(var l=t;r.length;){var u=r.shift(),c=r.shift();try{l=u(l)}catch(e){c(e);break}}try{s=lt(l)}catch(e){return Promise.reject(e)}for(;a.length;)s=s.then(a.shift(),a.shift());return s},dt.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=ut(this.defaults,e),at(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},st.forEach(["delete","get","head","options"],(function(e){dt.prototype[e]=function(t,n){return this.request(ut(n||{},{method:e,url:t,data:(n||{}).data}))}})),st.forEach(["post","put","patch"],(function(e){dt.prototype[e]=function(t,n,r){return this.request(ut(r||{},{method:e,url:t,data:n}))}}));var pt=dt,ht=$e;function mt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new ht(e),t(n.reason))}))}mt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},mt.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},mt.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},mt.source=function(){var e;return{token:new mt((function(t){e=t})),cancel:e}};var gt=mt,yt=ne,bt=ne,vt=V,wt=pt,_t=Ze;var Tt=function e(t){var n=new wt(t),r=vt(wt.prototype.request,n);return bt.extend(r,wt.prototype,n),bt.extend(r,n),r.create=function(n){return e(_t(t,n))},r}(De);Tt.Axios=wt,Tt.Cancel=$e,Tt.CancelToken=gt,Tt.isCancel=Je,Tt.VERSION=et,Tt.all=function(e){return Promise.all(e)},Tt.spread=function(e){return function(t){return e.apply(null,t)}},Tt.isAxiosError=function(e){return yt.isObject(e)&&!0===e.isAxiosError},J.exports=Tt,J.exports.default=Tt;var $t=J.exports;const xt=e=>({intersecting:1&e,entry:2&e,observer:4&e}),Et=e=>({intersecting:e[0],entry:e[1],observer:e[2]});function kt(e){let t;const n=e[9].default,r=function(e,t,n,r){if(e){const o=u(e,t,n,r);return e[0](o)}}(n,e,e[8],Et);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[o]){r&&r.p&&(!t||263&o)&&function(e,t,n,r,o,s){if(o){const a=u(t,n,r,s);e.p(a,o)}}(r,n,e,e[8],t?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(n,e[8],o,xt):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[8]),Et)},i(e){t||(P(r,e),t=!0)},o(e){U(r,e),t=!1},d(e){r&&r.d(e)}}}function St(e,t,n){let{$$slots:r={},$$scope:o}=t,{element:s=null}=t,{once:a=!1}=t,{intersecting:i=!1}=t,{root:l=null}=t,{rootMargin:u="0px"}=t,{threshold:c=0}=t,{entry:f=null}=t,{observer:d=null}=t;const p=T();let h=null,m=null;const g=()=>{n(2,d=new IntersectionObserver((e=>{e.forEach((e=>{n(1,f=e),n(0,i=e.isIntersecting)}))}),{root:l,rootMargin:u,threshold:c}))};var y;return y=()=>(g(),()=>{d&&(d.disconnect(),n(2,d=null))}),_().$$.on_mount.push(y),function(e){_().$$.after_update.push(e)}((async()=>{null!==f&&(p("observe",f),f.isIntersecting&&(p("intersect",f),a&&d.unobserve(s))),await(C(),S),null!==s&&s!==m&&(d.observe(s),null!==m&&d.unobserve(m),m=s),h&&u!==h&&(d.disconnect(),m=null,g()),h=u})),e.$$set=e=>{"element"in e&&n(3,s=e.element),"once"in e&&n(4,a=e.once),"intersecting"in e&&n(0,i=e.intersecting),"root"in e&&n(5,l=e.root),"rootMargin"in e&&n(6,u=e.rootMargin),"threshold"in e&&n(7,c=e.threshold),"entry"in e&&n(1,f=e.entry),"observer"in e&&n(2,d=e.observer),"$$scope"in e&&n(8,o=e.$$scope)},[i,f,d,s,a,l,u,c,o,r]}var At=class extends H{constructor(e){super(),I(this,e,St,kt,s,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}};function Ct(e,t,n){const r=e.slice();return r[14]=t[n],r}function jt(e,t,n){const r=e.slice();return r[17]=t[n],r}function qt(e,t,n){const r=e.slice();return r[20]=t[n],r}function Ot(e){let t,n,r,o,s,a,i,l,u,w,_,T,$,x,E,k,S,A,C=e[0].title+"",j=e[0].subtitle&&Nt(e),q=e[0]?.flex_rows?.docs,O=[];for(let t=0;t<q.length;t+=1)O[t]=Lt(jt(e,q,t));let N=e[0].annotation&&Pt(e),R=e[0].data_annotation&&Ut(e),L=e[0].table_annotation&&Bt(e),P=e[0].footer&&Mt(e),U=e[0].laureates?.docs?.length&&It(e);return{c(){t=h("div"),n=h("table"),r=h("caption"),o=h("h2"),s=m(C),a=g(),j&&j.c(),i=g();for(let e=0;e<O.length;e+=1)O[e].c();l=g(),u=h("tfoot"),N&&N.c(),w=g(),R&&R.c(),_=g(),L&&L.c(),T=g(),P&&P.c(),$=g(),x=h("tr"),E=h("td"),k=h("p"),k.textContent="Quelle: FMH-Finanzberatung. Alle Angaben sind\n                    urheberrechtlich geschützt.",S=g(),U&&U.c(),A=y(),b(o,"class","awards-table__title svelte-1uqkf3u"),b(r,"class","awards-table__caption svelte-1uqkf3u"),b(k,"class","svelte-1uqkf3u"),b(E,"class","awards-table__td svelte-1uqkf3u"),b(E,"colspan",e[1]),b(x,"class","awards-table__tr svelte-1uqkf3u"),b(u,"class","awards-table__tfoot svelte-1uqkf3u"),b(n,"class","awards-table__table svelte-1uqkf3u"),b(t,"class","awards-table__table-container svelte-1uqkf3u")},m(e,d){f(e,t,d),c(t,n),c(n,r),c(r,o),c(o,s),c(r,a),j&&j.m(r,null),c(n,i);for(let e=0;e<O.length;e+=1)O[e].m(n,null);c(n,l),c(n,u),N&&N.m(u,null),c(u,w),R&&R.m(u,null),c(u,_),L&&L.m(u,null),c(u,T),P&&P.m(u,null),c(u,$),c(u,x),c(x,E),c(E,k),f(e,S,d),U&&U.m(e,d),f(e,A,d)},p(e,t){if(1&t&&C!==(C=e[0].title+"")&&v(s,C),e[0].subtitle?j?j.p(e,t):(j=Nt(e),j.c(),j.m(r,null)):j&&(j.d(1),j=null),225&t){let r;for(q=e[0]?.flex_rows?.docs,r=0;r<q.length;r+=1){const o=jt(e,q,r);O[r]?O[r].p(o,t):(O[r]=Lt(o),O[r].c(),O[r].m(n,l))}for(;r<O.length;r+=1)O[r].d(1);O.length=q.length}e[0].annotation?N?N.p(e,t):(N=Pt(e),N.c(),N.m(u,w)):N&&(N.d(1),N=null),e[0].data_annotation?R?R.p(e,t):(R=Ut(e),R.c(),R.m(u,_)):R&&(R.d(1),R=null),e[0].table_annotation?L?L.p(e,t):(L=Bt(e),L.c(),L.m(u,T)):L&&(L.d(1),L=null),e[0].footer?P?P.p(e,t):(P=Mt(e),P.c(),P.m(u,$)):P&&(P.d(1),P=null),2&t&&b(E,"colspan",e[1]),e[0].laureates?.docs?.length?U?U.p(e,t):(U=It(e),U.c(),U.m(A.parentNode,A)):U&&(U.d(1),U=null)},d(e){e&&d(t),j&&j.d(),p(O,e),N&&N.d(),R&&R.d(),L&&L.d(),P&&P.d(),e&&d(S),U&&U.d(e),e&&d(A)}}}function Nt(e){let t,n,r=e[0].subtitle+"";return{c(){t=h("p"),n=m(r),b(t,"class","awards-table__subtitle svelte-1uqkf3u")},m(e,r){f(e,t,r),c(t,n)},p(e,t){1&t&&r!==(r=e[0].subtitle+"")&&v(n,r)},d(e){e&&d(t)}}}function Rt(e){let t,n,r,o=e[20].content+"";return{c(){t=h("td"),b(t,"colspan",n=e[7](e[20])),b(t,"class",r="awards-table__td "+e[6](e[20])+" "+Wt(e[20])+" svelte-1uqkf3u")},m(e,n){f(e,t,n),t.innerHTML=o},p(e,s){1&s&&o!==(o=e[20].content+"")&&(t.innerHTML=o),1&s&&n!==(n=e[7](e[20]))&&b(t,"colspan",n),1&s&&r!==(r="awards-table__td "+e[6](e[20])+" "+Wt(e[20])+" svelte-1uqkf3u")&&b(t,"class",r)},d(e){e&&d(t)}}}function Lt(e){let t,n,r=e[17]?.flex_cells?.docs,o=[];for(let t=0;t<r.length;t+=1)o[t]=Rt(qt(e,r,t));return{c(){t=h("tr");for(let e=0;e<o.length;e+=1)o[e].c();b(t,"class",n="awards-table__tr "+e[5](e[17])+" svelte-1uqkf3u")},m(e,n){f(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,s){if(193&s){let n;for(r=e[17]?.flex_cells?.docs,n=0;n<r.length;n+=1){const a=qt(e,r,n);o[n]?o[n].p(a,s):(o[n]=Rt(a),o[n].c(),o[n].m(t,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}1&s&&n!==(n="awards-table__tr "+e[5](e[17])+" svelte-1uqkf3u")&&b(t,"class",n)},d(e){e&&d(t),p(o,e)}}}function Pt(e){let t,n,r,o=e[0].annotation+"";return{c(){t=h("tr"),n=h("td"),r=h("p"),b(r,"class","svelte-1uqkf3u"),b(n,"class","awards-table__td svelte-1uqkf3u"),b(n,"colspan",e[1]),b(t,"class","awards-table__tr svelte-1uqkf3u")},m(e,s){f(e,t,s),c(t,n),c(n,r),r.innerHTML=o},p(e,t){1&t&&o!==(o=e[0].annotation+"")&&(r.innerHTML=o),2&t&&b(n,"colspan",e[1])},d(e){e&&d(t)}}}function Ut(e){let t,n,r,o=e[0].data_annotation+"";return{c(){t=h("tr"),n=h("td"),r=h("p"),b(r,"class","svelte-1uqkf3u"),b(n,"class","awards-table__td svelte-1uqkf3u"),b(n,"colspan",e[1]),b(t,"class","awards-table__tr svelte-1uqkf3u")},m(e,s){f(e,t,s),c(t,n),c(n,r),r.innerHTML=o},p(e,t){1&t&&o!==(o=e[0].data_annotation+"")&&(r.innerHTML=o),2&t&&b(n,"colspan",e[1])},d(e){e&&d(t)}}}function Bt(e){let t,n,r,o=e[0].table_annotation+"";return{c(){t=h("tr"),n=h("td"),r=h("p"),b(r,"class","svelte-1uqkf3u"),b(n,"class","awards-table__td svelte-1uqkf3u"),b(n,"colspan",e[1]),b(t,"class","awards-table__tr svelte-1uqkf3u")},m(e,s){f(e,t,s),c(t,n),c(n,r),r.innerHTML=o},p(e,t){1&t&&o!==(o=e[0].table_annotation+"")&&(r.innerHTML=o),2&t&&b(n,"colspan",e[1])},d(e){e&&d(t)}}}function Mt(e){let t,n,r,o=e[0].footer+"";return{c(){t=h("tr"),n=h("td"),r=h("p"),b(r,"class","svelte-1uqkf3u"),b(n,"class","awards-table__td svelte-1uqkf3u"),b(n,"colspan",e[1]),b(t,"class","awards-table__tr svelte-1uqkf3u")},m(e,s){f(e,t,s),c(t,n),c(n,r),r.innerHTML=o},p(e,t){1&t&&o!==(o=e[0].footer+"")&&(r.innerHTML=o),2&t&&b(n,"colspan",e[1])},d(e){e&&d(t)}}}function It(e){let t,n=e[0].laureates?.docs,r=[];for(let t=0;t<n.length;t+=1)r[t]=Dt(Ct(e,n,t));return{c(){t=h("div");for(let e=0;e<r.length;e+=1)r[e].c();b(t,"class","awards-table__siegel svelte-1uqkf3u")},m(e,n){f(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,o){if(9&o){let s;for(n=e[0].laureates?.docs,s=0;s<n.length;s+=1){const a=Ct(e,n,s);r[s]?r[s].p(a,o):(r[s]=Dt(a),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){e&&d(t),p(r,e)}}}function Ht(e){let t,n,r,o,s,a,i,u,p,y,w=Vt(e[14])+"",_=Jt(e[14])+"";return{c(){t=h("figure"),n=h("img"),s=g(),a=h("figcaption"),i=m(w),u=g(),p=m(_),y=g(),b(n,"class","awards-table__img svelte-1uqkf3u"),l(n.src,r=e[3](e[14]))||b(n,"src",r),b(n,"alt",o=Vt(e[14])),b(n,"loading","lazy"),b(a,"class","awards-table__figcaption svelte-1uqkf3u"),b(t,"class","awards-table__figure svelte-1uqkf3u")},m(e,r){f(e,t,r),c(t,n),c(t,s),c(t,a),c(a,i),c(a,u),c(a,p),c(t,y)},p(e,t){1&t&&!l(n.src,r=e[3](e[14]))&&b(n,"src",r),1&t&&o!==(o=Vt(e[14]))&&b(n,"alt",o),1&t&&w!==(w=Vt(e[14])+"")&&v(i,w),1&t&&_!==(_=Jt(e[14])+"")&&v(p,_)},d(e){e&&d(t)}}}function Dt(e){let t,n=Xt(e[14]),r=n&&Ht(e);return{c(){r&&r.c(),t=y()},m(e,n){r&&r.m(e,n),f(e,t,n)},p(e,o){1&o&&(n=Xt(e[14])),n?r?r.p(e,o):(r=Ht(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(e){r&&r.d(e),e&&d(t)}}}function zt(e){let t,n=e[0]&&Ot(e);return{c(){t=h("div"),n&&n.c(),b(t,"class","awards-table svelte-1uqkf3u")},m(r,o){f(r,t,o),n&&n.m(t,null),e[9](t)},p(e,r){e[0]?n?n.p(e,r):(n=Ot(e),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(r){r&&d(t),n&&n.d(),e[9](null)}}}function Ft(e){let t,n;return t=new At({props:{element:e[2],$$slots:{default:[zt]},$$scope:{ctx:e}}}),t.$on("intersect",e[4]),{c(){var e;(e=t.$$.fragment)&&e.c()},m(e,r){B(t,e,r),n=!0},p(e,[n]){const r={};4&n&&(r.element=e[2]),8388615&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){M(t,e)}}}function Jt(e){return e.degree_type?`${e.degree_type}. Platz`:""}function Vt(e){return`${e?.bank?.name} ${e?.commendation?.award?.name}\n    ${e?.commendation?.volume?.year}`}function Xt(e){return e?.image_file_name}function Wt(e){return 0===e.colspan?"awards-table__td--hidden":""}function Kt(e,t,n){$t.defaults.headers.common.Accept="application/json",$t.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",$t.defaults.headers.common["Content-Type"]="application/json";let{id:r=null}=t,{table:o=null}=t,{columns:s=0}=t,a=1;let i;const l=`\n    {\n      flex_table(id: ${r}) {\n        title\n        subtitle\n        explanation\n        footer\n        data_annotation\n        table_annotation\n        flex_rows(search: {active: true}, pagination: {pageSize: 100}, order: {position: ASC}) {\n          docs {\n            active\n            id\n            row_type\n            label\n            position\n            flex_cells(search: {active: true}, pagination: {pageSize: 100}, order: {position: ASC}) {\n              docs {\n                id\n                active\n                col_type\n                col_width\n                align_type\n                colspan\n                url\n                content\n              }\n            }\n          }\n        }\n        laureates(search: {active: true}, order: {degree_type: ASC, position: ASC}) {\n          docs {\n            id\n            image_file_name\n            commendation {\n              award {\n               name\n              }\n              volume {\n                year \n              }\n            }\n            bank {\n              name\n            }\n          }\n        }\n      }\n    } \n  `;return e.$$set=e=>{"id"in e&&n(8,r=e.id),"table"in e&&n(0,o=e.table),"columns"in e&&n(1,s=e.columns)},[o,s,i,function(e,t="big"){const n=(r=e.image_file_name)?r.replace(/gif$|png$/,"jpg"):"";var r;return`https://auszeichnungen.fmh.de/laureates/images/${e.id}/${t}/${e.file_hash}!${n}`},function(e){if(o)return!0;$t({method:"post",url:"https://api-auszeichnungen.fmh.de/graphql",data:{query:l}}).then((e=>{n(0,o=e.data.data.flex_table),n(1,s=o?.flex_rows?.docs?.[0].flex_cells?.docs?.length)})).catch((e=>{console.error(e)}))},function(e){const t=[],n=F.getVal("RowTypes",e.row_type);return t.push(n),t.map((e=>`awards-table__tr--${e}`)).join(" ")},function(e){const t=[],n=z.getVal("ColTypes",e.col_type);t.push(n);const r="align-"+z.getVal("AlignTypes",e.align_type);return t.push(r),t.map((e=>`awards-table__td--${e}`)).join(" ")},function(e){return e.colspan>1?(a=e.colspan,e.colspan):a>1?(a-=1,e.colspan=0):e.colspan=1},r,function(e){x[e?"unshift":"push"]((()=>{i=e,n(2,i)}))}]}class Gt extends H{constructor(e){super(),I(this,e,Kt,Ft,s,{id:8,table:0,columns:1})}}function Qt(e){return{int(t,n){const r=parseInt(e.dataset[t]);return isNaN(r)?n:r},str:(t,n)=>e.dataset[t]||n}}const Yt=document.querySelectorAll('[data-target="awards-table"]');for(let e=0,t=Yt.length;e<t;e++){const t=Yt[e],n=Qt(t),r=n.int("delay",0),o=n.int("id",0);setTimeout((()=>{new Gt({target:t,props:{id:o}})}),r)}}();
//# sourceMappingURL=awards-table.js.map
