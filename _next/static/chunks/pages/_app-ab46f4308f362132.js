(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return s}});var r=n(7294);let o=["light","dark"],i="(prefers-color-scheme: dark)",u="undefined"==typeof window,c=(0,r.createContext)(void 0),a={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,r.useContext)(c))&&void 0!==e?e:a},s=e=>(0,r.useContext)(c)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),f=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:u=!0,storageKey:a="theme",themes:l=f,defaultTheme:s=n?"system":"light",attribute:d="data-theme",value:y,children:g,nonce:b})=>{let[w,E]=(0,r.useState)(()=>h(a,s)),[x,T]=(0,r.useState)(()=>h(a)),O=y?Object.values(y):l,_=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let i=y?y[r]:r,c=t?p():null,a=document.documentElement;if("class"===d?(a.classList.remove(...O),i&&a.classList.add(i)):i?a.setAttribute(d,i):a.removeAttribute(d),u){let e=o.includes(s)?s:null,t=o.includes(r)?r:e;a.style.colorScheme=t}null==c||c()},[]),C=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),S=(0,r.useCallback)(t=>{let r=v(t);T(r),"system"===w&&n&&!e&&_("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(i);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&C(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{_(null!=e?e:w)},[e,w]);let k=(0,r.useMemo)(()=>({theme:w,setTheme:C,forcedTheme:e,resolvedTheme:"system"===w?x:w,themes:n?[...l,"system"]:l,systemTheme:n?x:void 0}),[w,C,e,x,n,l]);return r.createElement(c.Provider,{value:k},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:u,storageKey:a,themes:l,defaultTheme:s,attribute:d,value:y,children:g,attrs:O,nonce:b}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:u,enableColorScheme:c,defaultTheme:a,value:l,attrs:s,nonce:f})=>{let d="system"===a,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=c?o.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let i=l?l[e]:e,u=t?e+"|| ''":`'${i}'`,a="";return c&&r&&!t&&o.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===n?a+=t||i?`c.add(${u})`:"null":i&&(a+=`d[s](n,${u})`),a},v=e?`!function(){${m}${p(e)}}()`:u?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${p(l?"x[e]":"e",!0)}}${d?"":"else{"+p(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${p(l?"x[e]":"e",!0)}}else{${p(a,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!u){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")},3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4178)}])},4178:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),i=n(5364),u=n.n(i);n(3814);var c=n(1190),a=n(2010);t.default=function(e){var t;let{Component:n,pageProps:i,router:l}=e,s=null!==(t=n.getLayout)&&void 0!==t?t:e=>e;return(0,r.jsx)(a.f,{attribute:"class",defaultTheme:"dark",children:(0,r.jsx)("main",{className:"".concat(u().className),style:{height:"100vh"},children:(0,r.jsx)(c.M,{exitBeforeEnter:!0,initial:!0,onExitComplete:()=>{window.scrollTo({top:0})},children:s((0,o.createElement)(n,{...i,key:l.asPath}))})})})}},3814:function(){},5364:function(e){e.exports={style:{fontFamily:"'__Inter_d9825c', '__Inter_Fallback_d9825c'",fontStyle:"normal"},className:"__className_d9825c"}},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a=[],l=!1,s=-1;function f(){l&&r&&(l=!1,r.length?a=r.concat(a):s=-1,a.length&&d())}function d(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(r=a,a=[];++s<t;)r&&r[s].run();s=-1,t=a.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new m(e,t)),1!==a.length||l||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},655:function(e,t,n){"use strict";n.d(t,{CR:function(){return a},XA:function(){return c},ZT:function(){return o},_T:function(){return u},ev:function(){return l},pi:function(){return i}});var r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function l(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}},1190:function(e,t,n){"use strict";n.d(t,{M:function(){return y}});var r=n(655),o=n(7294),i=n(9304),u=n(4735),c=n(8868);function a(){var e=(0,o.useRef)(!1);return(0,c.L)(function(){return e.current=!0,function(){e.current=!1}},[]),e}var l=n(240),s=n(6681),f=n(6316),d=function(e){var t=e.children,n=e.initial,i=e.isPresent,u=e.onExitComplete,c=e.custom,a=e.presenceAffectsLayout,d=(0,s.h)(m),h=(0,f.M)(),p=(0,o.useMemo)(function(){return{id:h,initial:n,isPresent:i,custom:c,onExitComplete:function(e){var t,n;d.set(e,!0);try{for(var o=(0,r.XA)(d.values()),i=o.next();!i.done;i=o.next())if(!i.value)return}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}null==u||u()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}},a?void 0:[i]);return(0,o.useMemo)(function(){d.forEach(function(e,t){return d.set(t,!1)})},[i]),o.useEffect(function(){i||d.size||null==u||u()},[i]),o.createElement(l.O.Provider,{value:p},t)};function m(){return new Map}var h=n(3057),p=n(5411),v=function(e){return e.key||""},y=function(e){var t,n,l,s,f,m,y=e.children,g=e.custom,b=e.initial,w=void 0===b||b,E=e.onExitComplete,x=e.exitBeforeEnter,T=e.presenceAffectsLayout,O=void 0===T||T,_=(0,r.CR)((t=a(),l=(n=(0,r.CR)((0,o.useState)(0),2))[0],s=n[1],f=(0,o.useCallback)(function(){t.current&&s(l+1)},[l]),[(0,o.useCallback)(function(){return u.ZP.postRender(f)},[f]),l]),1)[0],C=(0,o.useContext)(h.p).forceRender;C&&(_=C);var S=a(),k=(m=[],o.Children.forEach(y,function(e){(0,o.isValidElement)(e)&&m.push(e)}),m),$=k,L=new Set,P=(0,o.useRef)($),j=(0,o.useRef)(new Map).current,A=(0,o.useRef)(!0);if((0,c.L)(function(){A.current=!1,function(e,t){e.forEach(function(e){var n=v(e);t.set(n,e)})}(k,j),P.current=$}),(0,p.z)(function(){A.current=!0,j.clear(),L.clear()}),A.current)return o.createElement(o.Fragment,null,$.map(function(e){return o.createElement(d,{key:v(e),isPresent:!0,initial:!!w&&void 0,presenceAffectsLayout:O},e)}));$=(0,r.ev)([],(0,r.CR)($),!1);for(var M=P.current.map(v),R=k.map(v),N=M.length,I=0;I<N;I++){var z=M[I];-1===R.indexOf(z)&&L.add(z)}return x&&L.size&&($=[]),L.forEach(function(e){if(-1===R.indexOf(e)){var t=j.get(e);if(t){var n=M.indexOf(e);$.splice(n,0,o.createElement(d,{key:v(t),isPresent:!1,onExitComplete:function(){j.delete(e),L.delete(e);var t=P.current.findIndex(function(t){return t.key===e});if(P.current.splice(t,1),!L.size){if(P.current=k,!1===S.current)return;_(),E&&E()}},custom:g,presenceAffectsLayout:O},t))}}}),$=$.map(function(e){var t=e.key;return L.has(t)?e:o.createElement(d,{key:v(e),isPresent:!0,presenceAffectsLayout:O},e)}),"production"!==i.O&&x&&$.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),o.createElement(o.Fragment,null,L.size?$:$.map(function(e){return(0,o.cloneElement)(e)}))}},3057:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=(0,n(7294).createContext)({})},240:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r=(0,n(7294).createContext)(null)},1741:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});var r="undefined"!=typeof document},9304:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(3454),o=(void 0===r||r.env,"production")},6681:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(7294);function o(e){var t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},6316:function(e,t,n){"use strict";n.d(t,{M:function(){return u}});var r=n(6681),o=0,i=function(){return o++},u=function(){return(0,r.h)(i)}},8868:function(e,t,n){"use strict";n.d(t,{L:function(){return o}});var r=n(7294),o=n(1741).j?r.useLayoutEffect:r.useEffect},5411:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(7294);function o(e){return(0,r.useEffect)(function(){return function(){return e()}},[])}},4735:function(e,t,n){"use strict";n.d(t,{qY:function(){return m},ZP:function(){return b},iW:function(){return h},$B:function(){return g}});let r=1/60*1e3,o="undefined"!=typeof performance?()=>performance.now():()=>Date.now(),i="undefined"!=typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(o()),r),u=!0,c=!1,a=!1,l={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],f=s.reduce((e,t)=>(e[t]=function(e){let t=[],n=[],r=0,o=!1,i=!1,u=new WeakSet,c={schedule:(e,i=!1,c=!1)=>{let a=c&&o,l=a?t:n;return i&&u.add(e),-1===l.indexOf(e)&&(l.push(e),a&&o&&(r=t.length)),e},cancel:e=>{let t=n.indexOf(e);-1!==t&&n.splice(t,1),u.delete(e)},process:a=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length)for(let n=0;n<r;n++){let r=t[n];r(a),u.has(r)&&(c.schedule(r),e())}o=!1,i&&(i=!1,c.process(a))}};return c}(()=>c=!0),e),{}),d=s.reduce((e,t)=>{let n=f[t];return e[t]=(e,t=!1,r=!1)=>(c||y(),n.schedule(e,t,r)),e},{}),m=s.reduce((e,t)=>(e[t]=f[t].cancel,e),{}),h=s.reduce((e,t)=>(e[t]=()=>f[t].process(l),e),{}),p=e=>f[e].process(l),v=e=>{c=!1,l.delta=u?r:Math.max(Math.min(e-l.timestamp,40),1),l.timestamp=e,a=!0,s.forEach(p),a=!1,c&&(u=!1,i(v))},y=()=>{c=!0,u=!0,a||i(v)},g=()=>l;var b=d}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);