var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/setup-assistant/docs.mdx.js"]=function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={68:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;return a.push([235,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},235:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return X})),n.d(t,"getContents",(function(){return Z}));var r=n(0),s=n.n(r),a=n(4),i=n(1),o=(n(23),n(11)),l=n(14),c=n(68),u=n(5),p=n.n(u),d=n(3),m=n.n(d),f=n(12),h=n(13),b=n(72),g=n(60);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(o,e);var t,n,r,a,i=(t=o,function(){var e,n=j(t);if(S()){var r=j(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return O(this,e)});function o(){return v(this,o),i.apply(this,arguments)}return n=o,(r=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,r=e.action,a=e.duration,i=e.stepProgress,o=e.isActiveStep,l=e.referenceId,c=e.isOpen,u=r&&("button"===r.type?s.a.createElement(h.a,{isOutlineBrand:!0},r.title):"toggle"===r.type?s.a.createElement(b.a,{title:r.title,isBare:!0,checked:r.checked}):s.a.createElement("a",{href:"javascript:void(0);"},r.title)),d=i&&(i.isComplete?s.a.createElement(g.a,{className:"slds-progress-ring_large",percent:100,isComplete:!0},s.a.createElement(f.a,{symbol:"check",title:"Complete",assistiveText:"Complete"})):s.a.createElement(g.a,{className:"slds-progress-ring_large",percent:o?i.percentage:0,isActiveStep:o,isFilling:!0},i.number)),m=s.a.createElement("div",{className:"slds-media"},s.a.createElement("div",{className:"slds-setup-assistant__step-summary-content slds-media__body"},s.a.createElement("h3",{className:"slds-setup-assistant__step-summary-title slds-text-heading_small"},l?s.a.createElement(h.a,{className:"slds-button_reset","aria-controls":l,"aria-expanded":c?"true":"false"},t):t),s.a.createElement("p",null,n)),s.a.createElement("div",{className:"slds-media__figure slds-media__figure_reverse"},u,a&&s.a.createElement("p",{className:p()("slds-text-align_right","slds-text-color_weak",{"slds-p-top_medium":r})},a)));return s.a.createElement("div",{className:"slds-setup-assistant__step-summary"},i?s.a.createElement("div",{className:"slds-media"},s.a.createElement("div",{className:"slds-media__figure"},d),s.a.createElement("div",{className:"slds-media__body slds-m-top_x-small"},m)):m)}}])&&E(n.prototype,r),a&&E(n,a),o}(s.a.Component);P.propTypes={title:m.a.string.isRequired,description:m.a.string.isRequired,action:m.a.object,duration:m.a.string,stepProgress:m.a.object,isActiveStep:m.a.bool},P.defaultProps={title:"Configure user settings for this org",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."};var w=P,k=n(52),x=n(73);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=[{complete:!0,title:"Turn on Lightning for all users.",action:{type:"toggle",title:"Turn on Lightning for all users",checked:!0}},{active:!0,title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",action:{type:"link",title:"View in Trailhead"}},{title:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"button",title:"Add Users"}}],q=function(e){return e.map((function(e,t){return s.a.createElement(k.b,{key:"progress-step-".concat(t),done:e.complete,hasSuccessMarker:e.complete,active:e.active,assistiveText:e.title},s.a.createElement("div",{className:"slds-size_3-of-4"},e.title),s.a.createElement("div",{className:"slds-grid slds-grid_align-end slds-size_1-of-4"},(n=e.action)&&"button"===n.type?s.a.createElement(h.a,{isOutlineBrand:!0},n.title):"toggle"===n.type?s.a.createElement(b.a,{title:n.title,isBare:!0,checked:n.checked}):s.a.createElement("a",{href:"javascript:void(0);"},n.title)));var n}))},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(o,e);var t,n,r,a,i=(t=o,function(){var e,n=R(t);if(B()){var r=R(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return L(this,e)});function o(){return N(this,o),i.apply(this,arguments)}return n=o,(r=[{key:"render",value:function(){var e=p()("slds-setup-assistant__step-detail",this.props.className);return s.a.createElement("div",{className:e},s.a.createElement(k.a,{value:"50",hasBorders:!0,hasSuccessBar:!0},q(I)),s.a.createElement(x.a,{theme:"light"},s.a.createElement("p",null,"It looks as if duplicates exist for this lead."," ",s.a.createElement("a",{href:"javascript:void(0);"},"View Duplicates."))))}}])&&T(n.prototype,r),a&&T(n,a),o}(s.a.Component);D.propTypes={className:m.a.string};var H=D,U=n(59),V=[{title:"Add Users to Your Org",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"button",title:"Add Users"},duration:"4 mins",stepProgress:{isComplete:!0,number:"1"}},{title:"Create Profiles for Your Users",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"button",title:"Add Profiles"},stepProgress:{isComplete:!1,number:"2",percentage:33},isActiveStep:!0,isOpen:!0},{title:"Learn How to Use Profiles to control Visibility",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"link",title:"View on Trailhead"},duration:"15 mins",stepProgress:{isComplete:!0,number:"3",percentage:"0"}},{title:"Turn on tracking for profiles",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"toggle",title:"Turn on tracking for profiles"},stepProgress:{isComplete:!1,number:"4",percentage:"0"}},{title:"Setup Einstein Visibility for Admins",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",action:{type:"link",title:"Watch Video"},stepProgress:{isComplete:!1,number:"5",percentage:"0"}}],M=function(e){return s.a.createElement("li",{className:"slds-setup-assistant__item"},s.a.createElement("article",{className:"slds-setup-assistant__step"},e.children))},z=function(e){return s.a.createElement("ol",{className:"slds-setup-assistant"},e.children)},F=function(e){var t=e.isBase,n=e.stepsHaveProgress,r=e.stepsAreExpandable;return s.a.createElement(z,null,t&&function(e,t){return e.map((function(e,n){return s.a.createElement(M,{key:"base-step-".concat(e.title,"-").concat(t,"-").concat(n)},s.a.createElement(w,{title:e.title,stepProgress:t&&e.stepProgress,action:e.action,duration:e.duration}))}))}(V,n),r&&V.map((function(e,t){return s.a.createElement(M,{key:"expand-step-".concat(e.title,"-").concat(t)},s.a.createElement(c.a,{className:p()({"slds-is-open":e.isOpen})},s.a.createElement(c.b,{className:"slds-m-top_x-small",referenceId:"step-".concat(t,"-summary-action"),isOpen:e.isOpen,summaryTitle:e.title}),s.a.createElement("div",{className:"slds-container_fluid"},s.a.createElement(c.d,null,s.a.createElement(w,{title:e.title,isActiveStep:e.isActiveStep,stepProgress:e.stepProgress,duration:e.duration||"10 mins",referenceId:"step-".concat(t,"-summary-action"),isOpen:e.isOpen})),s.a.createElement(c.c,{referenceId:"step-".concat(t,"-summary-action"),isOpen:e.isOpen},s.a.createElement(H,null)))))})))},J=function(e){return s.a.createElement("section",{className:"slds-card"},s.a.createElement("header",{className:"slds-theme_shade slds-p-around_medium slds-m-bottom_small"},s.a.createElement(U.a,{barClassName:"slds-progress-bar_circular",label:"Complete all the steps below to finish setting up Einstein Visibility",value:"50",isSuccess:!0})),s.a.createElement(s.a.Fragment,null,e.children))},W=a.c.a,Y=a.c.h2,G=a.c.li,K=a.c.p,Q=a.c.ul,X=function(){return Object(r.createElement)(a.b,{},Object(r.createElement)("div",{className:"doc lead"},"Setup Assistant provides Administrators with a centralized list of tasks for onboarding organizations, clouds, or features within the Salesforce Platform. It provides a prescriptive and detailed guide for learning, configuring, and importing data which can take hours to days."),Object(r.createElement)(i.a,{exampleOnly:!0},Object(r.createElement)(F,{isBase:!0,stepsHaveProgress:!0})),Y({id:"About-Setup-Assistant"},"About Setup Assistant"),K({},"Actions in the assistant launch LSF (Lightning Setup Flow) or link to configuration pages, and may be accompanied by links to Trailheads, articles, Help & Training documentation, and videos."),Q({},G({},"The title of the assistant should always end with “Setup Assistant” (e.g. Einstein Setup Assistant)."),G({},"Use links to navigate to Trailheads, articles, Help & Training documentation, and videos."),G({},"Use the Outline Brand Button to open LSF or configuration pages."),G({},"Estimated time is optional.")),Y({id:"Base"},"Base"),K({},"Basic list of learning and task links that do not require progress tracking and do not have sequential steps."),Object(r.createElement)(o.a,{title:"Setup Assistant Base"},Object(r.createElement)(i.a,null,Object(r.createElement)(F,{isBase:!0}))),Y({id:"With-Step-Progress"},"With Step Progress"),K({},"List of learning and task links with a recommended sequence that require progress tracking. Depending on the platform, completion checking will be through an API or a link click. The progress markers use the ",W({href:"../progress-ring"},"Progress Ring")," component."),Object(r.createElement)(o.a,{title:"Setup Assistant Base steps with Progress"},Object(r.createElement)(i.a,null,Object(r.createElement)(F,{isBase:!0,stepsHaveProgress:!0}))),Y({id:"Hub-with-Expandable-Steps"},"Hub with Expandable Steps"),K({},"Includes all the features of Setup Assistant Base + Progress, but also includes substeps that require sequential completion within the primary step. Inline Text within each primary step is optional."),K({},"Clicking on the icon toggle or the primary step's title will open and close that step's details. If a primary step's substeps have been started, the primary step's progress ring turns blue to indicate the amount of progress made on the substeps."),Object(r.createElement)(l.a,{type:"a11y",header:"Accessibility Note"},Object(r.createElement)("p",null,"Since both the chevron toggle and the step's title act as a trigger to open and close the step's detail, ensure both the icon button and the title include"," ",Object(r.createElement)("code",null,"aria-controls=[uniqueId]")," where the ",Object(r.createElement)("code",null,"uniqueId")," matches the "," ",Object(r.createElement)("code",null,"id")," on the"," ",Object(r.createElement)("code",null,"<div>")," with ",Object(r.createElement)("code",null,'class="slds-summary-detail__content"'),".")),Object(r.createElement)(o.a,{title:"Setup Assistant Hub Expandable"},Object(r.createElement)(i.a,null,Object(r.createElement)(F,{stepsAreExpandable:!0}))),Y({id:"In-a-Card"},"In a Card"),K({},"If the steps have associated progress, a header is added to the card containing the steps. This header indicates overall progress on this Setup Assistant and utilizes the ",W({href:"../progress-bar"},"Descriptive Progress Bar")),Object(r.createElement)(l.a,{type:"a11y",header:"Accessibility Note"},Object(r.createElement)("p",null,"In order to prevent duplicating information for screen reader users, the percentage info on the top of the progress bar is hidden using the"," ",Object(r.createElement)("code",null,"slds-assistive-text")," class.")),Object(r.createElement)(o.a,{title:"Setup Assistant Hub Expandable"},Object(r.createElement)(i.a,null,Object(r.createElement)(J,null,Object(r.createElement)(F,{stepsAreExpandable:!0})))))},Z=function(){return Object(a.a)(X())}}});