var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/box/docs.mdx.js"]=function(e){function t(t){for(var a,o,s=t[0],c=t[1],i=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,i||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,s=1;s<l.length;s++){var c=l[s];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={88:0},r=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=c;return r.push([262,0]),l()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},262:function(e,t,l){"use strict";l.r(t),l.d(t,"getElement",(function(){return b})),l.d(t,"getContents",(function(){return f}));var a=l(0),n=l.n(a),r=l(4),o=l(1),s=l(2),c=[{id:"default",label:"Size - Default",element:n.a.createElement("div",{className:"slds-box"},n.a.createElement("p",null,"This is a regular-sized box."))},{id:"small",label:"Size - small",element:n.a.createElement("div",{className:"slds-box slds-box_small"},n.a.createElement("p",null,"This is a small box."))},{id:"x-small",label:"Size - x-small",element:n.a.createElement("div",{className:"slds-box slds-box_x-small"},n.a.createElement("p",null,"This is an extra-small box."))},{id:"xx-small",label:"Size - xx-small",element:n.a.createElement("div",{className:"slds-box slds-box_xx-small"},n.a.createElement("p",null,"This is an extra-extra-small box."))}],i=r.c.a,u=r.c.h2,d=r.c.h3,m=r.c.p,b=function(){return Object(a.createElement)(r.b,{},Object(a.createElement)("div",{className:"doc lead"},"A box theme applies spacing, a border, and rounded corners to areas of content."),u({id:"About-Box"},"About Box"),m({},"Three padding settings are available. You can also add a ",i({href:"/utilities/themes/#flavor-color"},"color theme")," to your box."),u({id:"Base"},"Base"),Object(a.createElement)(o.a,null,Object(s.e)(c,"default")),u({id:"Examples"},"Examples"),d({id:"Small"},"Small"),Object(a.createElement)(o.a,null,Object(s.e)(c,"small")),d({id:"X-Small"},"X-Small"),Object(a.createElement)(o.a,null,Object(s.e)(c,"x-small")),d({id:"XX-Small"},"XX-Small"),Object(a.createElement)(o.a,null,Object(s.e)(c,"xx-small")))},f=function(){return Object(r.a)(b())}}});