// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,a=t.__lookupGetter__,u=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(a.call(e,r)||u.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&i&&i.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t,n,o,i){var a,u,l;if(e<=0)return n;for(a=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,l=0;l<e;l++)n[u]=i(r[a]),a+=t,u+=o;return n}function _(e,r,t,n,o,i,a,u){var l,f,c;if(e<=0)return o;for(l=n,f=a,c=0;c<e;c++)o[f]=u(r[l]),l+=t,f+=i;return o}f(c,"ndarray",_);var p=Math.sqrt;function d(e){return 1/p(e)}function s(e,r,t,n,o){return c(e,r,t,n,o,d)}return f(s,"ndarray",(function(e,r,t,n,o,i,a){return _(e,r,t,n,o,i,a,d)})),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).drsqrt=r();
//# sourceMappingURL=index.js.map
