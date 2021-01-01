/*! For license information please see app-0.0.1.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n,o={310:(e,t,r)=>{r.d(t,{E:()=>n});var n=7584300},655:(e,t,r)=>{r.d(t,{ZT:()=>o,mG:()=>a,Jh:()=>i,pr:()=>u});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function a(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function u(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((n=n.apply(e,t||[])).next())}))}function i(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function u(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}}},a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);i.r(r);var n={};if(2&t&&"object"==typeof e&&e)for(const t in e)n[t]=()=>e[t];return n.default=()=>e,i.d(r,n),r},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({426:"phaser",516:"menu-scene",563:"main-scene",793:"gameclear-scene",842:"boot-scene"}[e]+"-0.0.1.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="spider-solitaire:",i.l=(r,n,o)=>{if(e[r])e[r].push(n);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){a=s;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/spider-solitaire/",(()=>{var e={143:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=o);var a=i.p+i.u(t),u=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+t)}};var t=self.webpackChunkspider_solitaire=self.webpackChunkspider_solitaire||[],r=t.push.bind(t);t.push=t=>{for(var n,o,[a,u,l]=t,c=0,s=[];c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&s.push(e[o][0]),e[o]=0;for(n in u)i.o(u,n)&&(i.m[n]=u[n]);for(l&&l(i),r(t);s.length;)s.shift()()}})(),r=i(655),n=i(310),window.addEventListener("load",(function(){return(0,r.mG)(void 0,void 0,void 0,(function(){var e,t,o,a,u,l,c;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return(e=document.createElement("div")).innerHTML="\n  <div class=\"loading-pane\">\n    <img src =\"./images/loading.svg\" width='50' height='50'><br />\n    Loading game files...\n  </div>\n  ",document.body.append(e),[4,i.e(426).then(i.t.bind(i,260,7))];case 1:return t=r.sent().default,[4,Promise.all([i.e(426),i.e(563)]).then(i.bind(i,314))];case 2:return o=r.sent().default,[4,Promise.all([i.e(426),i.e(842)]).then(i.bind(i,483))];case 3:return a=r.sent().default,[4,Promise.all([i.e(426),i.e(793)]).then(i.bind(i,978))];case 4:return u=r.sent().default,[4,Promise.all([i.e(426),i.e(516)]).then(i.bind(i,895))];case 5:return l=r.sent().default,document.body.removeChild(e),c={type:t.AUTO,scale:{mode:t.Scale.FIT,autoCenter:t.Scale.CENTER_BOTH,width:1e3,height:563,max:{width:1e3,height:563},autoRound:!0},scene:[a,o,u,l],backgroundColor:"#"+n.E.toString(16)},new t.Game(c),[2]}}))}))}))})();