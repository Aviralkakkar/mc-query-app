var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/toast/docs.mdx.js"]=function(e){function t(t){for(var s,r,i=t[0],o=t[1],c=t[2],d=0,u=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(m&&m(t);u.length;)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},l={77:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=o;return n.push([261,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},261:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return S})),a.d(t,"getContents",(function(){return j}));var s=a(0),l=a.n(s),n=a(4),r=a(1),i=(a(14),a(49)),o=a(3),c=a.n(o),m=a(7),d=a(12),u=a(5),h=a.n(u),p=function(e){var t=e.containerClassName,a=e.className,s=e.type,n=e.children;return l.a.createElement("div",{className:h()("slds-notify_container",t)},l.a.createElement("div",{className:h()("slds-notify slds-notify_toast",a,s&&"slds-theme_"+s),role:"status"},l.a.createElement("span",{className:"slds-assistive-text"},s),n,l.a.createElement("div",{className:"slds-notify__close"},l.a.createElement(m.b,{className:"slds-button_icon-inverse",iconClassName:"slds-button__icon_large",symbol:"close",assistiveText:"Close",title:"Close"}))))};p.propTypes={containerClassName:c.a.string,className:c.a.string,type:c.a.oneOf(["info","success","warning","error"]),children:c.a.node},p.defaultProps={type:"info"};var f=l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(p,{type:"info",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"info"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"26 potential duplicate leads were found."," ",l.a.createElement("a",{href:"javascript:void(0);"},"Select Leads to Merge"))))),v=[{id:"success",label:"Success",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(p,{type:"success",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"success"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Account ",l.a.createElement("a",{href:"javascript:void(0);"},"ACME - 100")," widgets was created."))))},{id:"warning",label:"Warning",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(p,{type:"warning",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"warning"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Can’t share file “report-q3.pdf” with the"," ",l.a.createElement("a",{href:"javascript:void(0);"},"selected users"),"."))))},{id:"error",label:"Error",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(p,{type:"error",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"error"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Can’t save lead “Sally Wong” because"," ",l.a.createElement("a",{href:"javascript:void(0);"},"another lead")," has the same name."))))},{id:"error-with-details",label:"Error With Details",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(p,{type:"error",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"error"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"You've encountered some errors when trying to save edits to Samuel Smith."),l.a.createElement("p",null,"Here's some detail of"," ",l.a.createElement("a",{href:"javascript:void(0);"},"what happened"),", being very descriptive and transparent."))))}],y=[{id:"small",label:"Small Column",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem",width:"25rem"}},l.a.createElement("div",{className:"slds-region_narrow slds-is-relative"},l.a.createElement(p,{type:"info",containerClassName:"slds-is-absolute"},l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"26 potential ",l.a.createElement("a",{href:"javascript:void(0);"},"duplicate leads")," ","were found.")))))}],g=a(2),b=n.c.code,E=n.c.h2,_=n.c.h3,N=n.c.p,S=function(){return Object(s.createElement)(n.b,{},Object(s.createElement)("div",{className:"doc lead"},"Toast serves as a feedback & confirmation mechanism after the user takes an action."),Object(s.createElement)(r.a,{exampleOnly:!0,demoStyles:"height: 4rem;"},f),E({id:"About-Toast"},"About Toast"),_({id:"Accessibility"},"Accessibility"),N({},"Notifications should contain ",b({},'role="status"')," on the container to signal to assistive technology that they require the user’s attention. Historically the role of ",b({},"alert")," would be used, but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. Role of ",b({},"status")," is a polite live region, which does not clear the queue, reducing the risk of a toast message being missed."),N({},"Use a span with ",b({},"slds-assistive-text")," to let the user know what type of notification it is."),E({id:"Base"},"Base"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},f),E({id:"States"},"States"),_({id:"Success"},"Success"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.e)(v,"success")),_({id:"Warning"},"Warning"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.e)(v,"warning")),_({id:"Error"},"Error"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.e)(v,"error")),_({id:"Error-With-Details"},"Error With Details"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.e)(v,"error-with-details")),E({id:"Examples"},"Examples"),_({id:"Small-Column"},"Small Column"),Object(s.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.e)(y,"small")),E({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(s.createElement)(i.a,{name:"toast",type:"component"}))},j=function(){return Object(n.a)(S())}}});