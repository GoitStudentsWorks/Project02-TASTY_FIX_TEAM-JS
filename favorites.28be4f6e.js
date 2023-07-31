const t=document.querySelector(".button-burger"),e=document.getElementById("mobileMenu"),n=document.querySelector(".button-close");t.addEventListener("click",(()=>{e.classList.add("show-mob")})),n.addEventListener("click",(()=>{e.classList.remove("show-mob")}));const i=window.location.href;function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}document.querySelectorAll(".nav-list").forEach((t=>{const e=t.querySelector("a").href;i===e?t.classList.add("active"):t.classList.remove("active")}));
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var o={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function a(t){t.length=0}function s(t,e,n){return Array.prototype.slice.call(t,e,n)}function u(t){return t.bind.apply(t,[null].concat(s(arguments,1)))}var c=setTimeout,l=function(){};function d(t){return requestAnimationFrame(t)}function f(t,e){return typeof e===t}function p(t){return!y(t)&&f("object",t)}var v=Array.isArray,h=u(f,"function"),g=u(f,"string"),m=u(f,"undefined");function y(t){return null===t}function b(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function w(t){return v(t)?t:[t]}function _(t,e){w(t).forEach(e)}function E(t,e){return t.indexOf(e)>-1}function S(t,e){return t.push.apply(t,w(e)),t}function x(t,e,n){t&&_(e,(function(e){e&&t.classList[n?"add":"remove"](e)}))}function P(t,e){x(t,g(e)?e.split(" "):e,!0)}function L(t,e){_(e,t.appendChild.bind(t))}function k(t,e){_(t,(function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)}))}function C(t,e){return b(t)&&(t.msMatchesSelector||t.matches).call(t,e)}function A(t,e){var n=t?s(t.children):[];return e?n.filter((function(t){return C(t,e)})):n}function z(t,e){return e?A(t,e)[0]:t.firstElementChild}var M=Object.keys;function D(t,e,n){return t&&(n?M(t).reverse():M(t)).forEach((function(n){"__proto__"!==n&&e(t[n],n)})),t}function I(t){return s(arguments,1).forEach((function(e){D(e,(function(n,i){t[i]=e[i]}))})),t}function N(t){return s(arguments,1).forEach((function(e){D(e,(function(e,n){v(e)?t[n]=e.slice():p(e)?t[n]=N({},p(t[n])?t[n]:{},e):t[n]=e}))})),t}function O(t,e){_(e||M(t),(function(e){delete t[e]}))}function T(t,e){_(t,(function(t){_(e,(function(e){t&&t.removeAttribute(e)}))}))}function R(t,e,n){p(e)?D(e,(function(e,n){R(t,n,e)})):_(t,(function(t){y(n)||""===n?T(t,e):t.setAttribute(e,String(n))}))}function B(t,e,n){var i=document.createElement(t);return e&&(g(e)?P(i,e):R(i,e)),n&&L(n,i),i}function F(t,e,n){if(m(n))return getComputedStyle(t)[e];y(n)||(t.style[e]=""+n)}function j(t,e){F(t,"display",e)}function q(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function W(t,e){return t.getAttribute(e)}function X(t,e){return t&&t.classList.contains(e)}function G(t){return t.getBoundingClientRect()}function H(t){_(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function U(t){return z((new DOMParser).parseFromString(t,"text/html").body)}function $(t,e){t.preventDefault(),e&&(t.stopPropagation(),t.stopImmediatePropagation())}function Y(t,e){return t&&t.querySelector(e)}function J(t,e){return e?s(t.querySelectorAll(e)):[]}function K(t,e){x(t,e,!1)}function V(t){return t.timeStamp}function Q(t){return g(t)?t:t?t+"px":""}function Z(t,e){if(!t)throw new Error("[splide] "+(e||""))}var tt=Math.min,et=Math.max,nt=Math.floor,it=Math.ceil,rt=Math.abs;function ot(t,e,n){return rt(t-e)<n}function at(t,e,n,i){var r=tt(e,n),o=et(e,n);return i?r<t&&t<o:r<=t&&t<=o}function st(t,e,n){var i=tt(e,n),r=et(e,n);return tt(et(i,t),r)}function ut(t){return+(t>0)-+(t<0)}function ct(t,e){return _(e,(function(e){t=t.replace("%s",""+e)})),t}function lt(t){return t<10?"0"+t:""+t}var dt={};function ft(t){return""+t+lt(dt[t]=(dt[t]||0)+1)}function pt(){var t=[];function e(t,e,n){_(t,(function(t){t&&_(e,(function(e){e.split(" ").forEach((function(e){var i=e.split(".");n(t,i[0],i[1])}))}))}))}return{bind:function(n,i,r,o){e(n,i,(function(e,n,i){var a="addEventListener"in e,s=a?e.removeEventListener.bind(e,n,r,o):e.removeListener.bind(e,r);a?e.addEventListener(n,r,o):e.addListener(r),t.push([e,n,i,r,s])}))},unbind:function(n,i,r){e(n,i,(function(e,n,i){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var i;return"function"==typeof CustomEvent?i=new CustomEvent(e,{bubbles:true,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,true,!1,n),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),a(t)}}}function vt(t){var e=t?t.event.bus:document.createDocumentFragment(),n=pt();return t&&t.event.on("destroy",n.destroy),I(n,{bus:e,on:function(t,i){n.bind(e,w(t).join(" "),(function(t){i.apply(i,v(t.detail)?t.detail:[])}))},off:u(n.unbind,e),emit:function(t){n.dispatch(e,t,s(arguments,1))}})}function ht(t,e,n,i){var r,o,a=Date.now,s=0,u=!0,c=0;function l(){if(!u){if(s=t?tt((a()-r)/t,1):1,n&&n(s),s>=1&&(e(),r=a(),i&&++c>=i))return f();o=d(l)}}function f(){u=!0}function p(){o&&cancelAnimationFrame(o),s=0,o=0,u=!0}return{start:function(e){e||p(),r=a()-(e?s*t:0),u=!1,o=d(l)},rewind:function(){r=a(),s=0,n&&n(s)},pause:f,cancel:p,set:function(e){t=e},isPaused:function(){return u}}}var gt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function mt(t,e,n){return{resolve:function(t,e,i){var r="rtl"!==(i=i||n.direction)||e?"ttb"===i?0:-1:1;return gt[t]&&gt[t][r]||t.replace(/width|left|right/i,(function(t,e){var n=gt[t.toLowerCase()][r]||t;return e>0?n.charAt(0).toUpperCase()+n.slice(1):n}))},orient:function(t){return t*("rtl"===n.direction?1:-1)}}}var yt=["role","tabindex","disabled","aria-controls","aria-current","aria-label","aria-labelledby","aria-hidden","aria-orientation","aria-roledescription"],bt="splide",wt="is-active",_t=[wt,"is-visible","is-prev","is-next","is-loading","is-focus-in","is-overflow"],Et={slide:"splide__slide",clone:"splide__slide--clone",arrows:"splide__arrows",arrow:"splide__arrow",prev:"splide__arrow--prev",next:"splide__arrow--next",pagination:"splide__pagination",page:"splide__pagination__page",spinner:"splide__spinner"};function St(t,e,n,i){var r,o=vt(t),a=o.on,s=o.emit,c=o.bind,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,h=f.i18n,g=f.pagination,m=f.slideFocus,y=l.Direction.resolve,b=W(i,"style"),w=W(i,"aria-label"),_=n>-1,E=z(i,".splide__slide__container");function S(){var r=t.splides.map((function(t){var n=t.splide.Components.Slides.getAt(e);return n?n.slide.id:""})).join(" ");R(i,"aria-label",ct(h.slideX,(_?n:e)+1)),R(i,"aria-controls",r),R(i,"role",m?"button":""),m&&T(i,"aria-roledescription")}function P(){r||L()}function L(){if(!r){var n=t.index;(o=k())!==X(i,wt)&&(x(i,wt,o),R(i,"aria-current",p&&o||""),s(o?"active":"inactive",C)),function(){var e=function(){if(t.is("fade"))return k();var e=G(l.Elements.track),n=G(i),r=y("left",!0),o=y("right",!0);return nt(e[r])<=it(n[r])&&nt(n[o])<=it(e[o])}(),n=!e&&(!k()||_);t.state.is([4,5])||R(i,"aria-hidden",n||"");R(J(i,f.focusableNodes||""),"tabindex",n?-1:""),m&&R(i,"tabindex",n?-1:0);e!==X(i,"is-visible")&&(x(i,"is-visible",e),s(e?"visible":"hidden",C));if(!e&&document.activeElement===i){var r=l.Slides.getAt(t.index);r&&q(r.slide)}}(),x(i,"is-prev",e===n-1),x(i,"is-next",e===n+1)}var o}function k(){var i=t.index;return i===e||f.cloneStatus&&i===n}var C={index:e,slideIndex:n,slide:i,container:E,isClone:_,mount:function(){_||(i.id=d.id+"-slide"+lt(e+1),R(i,"role",g?"tabpanel":"group"),R(i,"aria-roledescription",h.slide),R(i,"aria-label",w||ct(h.slideLabel,[e+1,t.length]))),c(i,"click",u(s,"click",C)),c(i,"keydown",u(s,"sk",C)),a(["moved","sh","scrolled"],L),a("navigation:mounted",S),v&&a("move",P)},destroy:function(){r=!0,o.destroy(),K(i,_t),T(i,yt),R(i,"style",b),R(i,"aria-label",w||"")},update:L,style:function(t,e,n){F(n&&E||i,t,e)},isWithin:function(n,i){var r=rt(n-e);return _||!f.rewind&&!t.is("loop")||(r=tt(r,t.length-r)),r<=i}};return C}var xt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var Pt={passive:!1,capture:!0};var Lt={Spacebar:" ",Right:"ArrowRight",Left:"ArrowLeft",Up:"ArrowUp",Down:"ArrowDown"};function kt(t){return t=g(t)?t:t.key,Lt[t]||t}var Ct=[" ","Enter"];var At=Object.freeze({__proto__:null,Media:function(t,e,n){var i=t.state,r=n.breakpoints||{},o=n.reducedMotion||{},a=pt(),s=[];function u(t){t&&a.destroy()}function c(t,e){var n=matchMedia(e);a.bind(n,"change",l),s.push([t,n])}function l(){var e=i.is(7),r=n.direction,o=s.reduce((function(t,e){return N(t,e[1].matches?e[0]:{})}),{});O(n),d(o),n.destroy?t.destroy("completely"===n.destroy):e?(u(!0),t.mount()):r!==n.direction&&t.refresh()}function d(e,r,o){N(n,e),r&&N(Object.getPrototypeOf(n),e),!o&&i.is(1)||t.emit("updated",n)}return{setup:function(){var t="min"===n.mediaQuery;M(r).sort((function(e,n){return t?+e-+n:+n-+e})).forEach((function(e){c(r[e],"("+(t?"min":"max")+"-width:"+e+"px)")})),c(o,"(prefers-reduced-motion: reduce)"),l()},destroy:u,reduce:function(t){matchMedia("(prefers-reduced-motion: reduce)").matches&&(t?N(n,o):O(n,M(o)))},set:d}},Direction:mt,Elements:function(t,e,n){var i,r,o,s=vt(t),u=s.on,c=s.bind,l=t.root,d=n.i18n,f={},p=[],v=[],g=[];function m(){i=w(".splide__track"),r=z(i,".splide__list"),Z(i&&r,"A track/list element is missing."),S(p,A(r,".splide__slide:not(.splide__slide--clone)")),D({arrows:"splide__arrows",pagination:"splide__pagination",prev:"splide__arrow--prev",next:"splide__arrow--next",bar:"splide__progress__bar",toggle:"splide__toggle"},(function(t,e){f[e]=w("."+t)})),I(f,{root:l,track:i,list:r,slides:p}),function(){var t=l.id||ft("splide"),e=n.role;l.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!W(l,"role")&&"SECTION"!==l.tagName&&e&&R(l,"role",e);R(l,"aria-roledescription",d.carousel),R(r,"role","presentation")}(),b()}function y(t){var e=yt.concat("style");a(p),K(l,v),K(i,g),T([i,r],e),T(l,t?e:["style","aria-roledescription"])}function b(){K(l,v),K(i,g),v=_(bt),g=_("splide__track"),P(l,v),P(i,g),R(l,"aria-label",n.label),R(l,"aria-labelledby",n.labelledby)}function w(t){var e=Y(l,t);return e&&function(t,e){if(h(t.closest))return t.closest(e);for(var n=t;n&&1===n.nodeType&&!C(n,e);)n=n.parentElement;return n}(e,"."+bt)===l?e:void 0}function _(t){return[t+"--"+n.type,t+"--"+n.direction,n.drag&&t+"--draggable",n.isNavigation&&t+"--nav",t===bt&&wt]}return I(f,{setup:m,mount:function(){u("refresh",y),u("refresh",m),u("updated",b),c(document,"touchstart mousedown keydown",(function(t){o="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){x(l,"is-focus-in",!!o)}))},destroy:y})},Slides:function(t,e,n){var i=vt(t),r=i.on,o=i.emit,s=i.bind,c=e.Elements,l=c.slides,d=c.list,f=[];function p(){l.forEach((function(t,e){m(t,e,-1)}))}function v(){S((function(t){t.destroy()})),a(f)}function m(e,n,i){var r=St(t,n,i,e);r.mount(),f.push(r),f.sort((function(t,e){return t.index-e.index}))}function y(t){return t?x((function(t){return!t.isClone})):f}function S(t,e){y(e).forEach(t)}function x(t){return f.filter(h(t)?t:function(e){return g(t)?C(e.slide,t):E(w(t),e.index)})}return{mount:function(){p(),r("refresh",v),r("refresh",p)},destroy:v,update:function(){S((function(t){t.update()}))},register:m,get:y,getIn:function(t){var i=e.Controller,r=i.toIndex(t),o=i.hasFocus()?1:n.perPage;return x((function(t){return at(t.index,r,r+o-1)}))},getAt:function(t){return x(t)[0]},add:function(t,e){_(t,(function(t){if(g(t)&&(t=U(t)),b(t)){var i=l[e];i?k(t,i):L(d,t),P(t,n.classes.slide),r=t,a=u(o,"resize"),c=J(r,"img"),(f=c.length)?c.forEach((function(t){s(t,"load error",(function(){--f||a()}))})):a()}var r,a,c,f})),o("refresh")},remove:function(t){H(x(t).map((function(t){return t.slide}))),o("refresh")},forEach:S,filter:x,style:function(t,e,n){S((function(i){i.style(t,e,n)}))},getLength:function(t){return t?l.length:f.length},isEnough:function(){return f.length>n.perPage}}},Layout:function(t,e,n){var i,r,o,a=vt(t),s=a.on,c=a.bind,l=a.emit,d=e.Slides,f=e.Direction.resolve,v=e.Elements,h=v.root,g=v.track,m=v.list,y=d.getAt,b=d.style;function w(){i="ttb"===n.direction,F(h,"maxWidth",Q(n.width)),F(g,f("paddingLeft"),E(!1)),F(g,f("paddingRight"),E(!0)),_(!0)}function _(t){var e=G(h);(t||r.width!==e.width||r.height!==e.height)&&(F(g,"height",function(){var t="";i&&(Z(t=S(),"height or heightRatio is missing."),t="calc("+t+" - "+E(!1)+" - "+E(!0)+")");return t}()),b(f("marginRight"),Q(n.gap)),b("width",n.autoWidth?null:Q(n.fixedWidth)||(i?"":P())),b("height",Q(n.fixedHeight)||(i?n.autoHeight?null:P():S()),!0),r=e,l("resized"),o!==(o=M())&&(x(h,"is-overflow",o),l("overflow",o)))}function E(t){var e=n.padding,i=f(t?"right":"left");return e&&Q(e[i]||(p(e)?0:e))||"0px"}function S(){return Q(n.height||G(m).width*n.heightRatio)}function P(){var t=Q(n.gap);return"calc((100%"+(t&&" + "+t)+")/"+(n.perPage||1)+(t&&" - "+t)+")"}function L(){return G(m)[f("width")]}function k(t,e){var n=y(t||0);return n?G(n.slide)[f("width")]+(e?0:z()):0}function C(t,e){var n=y(t);if(n){var i=G(n.slide)[f("right")],r=G(m)[f("left")];return rt(i-r)+(e?0:z())}return 0}function A(e){return C(t.length-1)-C(0)+k(0,e)}function z(){var t=y(0);return t&&parseFloat(F(t.slide,f("marginRight")))||0}function M(){return t.is("fade")||A(!0)>L()}return{mount:function(){var t,e,n;w(),c(window,"resize load",(t=u(l,"resize"),n=ht(e||0,t,null,1),function(){n.isPaused()&&n.start()})),s(["updated","refresh"],w),s("resize",_)},resize:_,listSize:L,slideSize:k,sliderSize:A,totalSize:C,getPadding:function(t){return parseFloat(F(g,f("padding"+(t?"Right":"Left"))))||0},isOverflow:M}},Clones:function(t,e,n){var i,r=vt(t),o=r.on,s=e.Elements,u=e.Slides,c=e.Direction.resolve,l=[];function d(){o("refresh",f),o(["updated","resize"],v),(i=h())&&(!function(e){var i=u.get().slice(),r=i.length;if(r){for(;i.length<e;)S(i,i);S(i.slice(-e),i.slice(0,e)).forEach((function(o,a){var c=a<e,d=function(e,i){var r=e.cloneNode(!0);return P(r,n.classes.clone),r.id=t.root.id+"-clone"+lt(i+1),r}(o.slide,a);c?k(d,i[0].slide):L(s.list,d),S(l,d),u.register(d,a-e+(c?0:r),o.index)}))}}(i),e.Layout.resize(!0))}function f(){p(),d()}function p(){H(l),a(l),r.destroy()}function v(){var t=h();i!==t&&(i<t||!t)&&r.emit("refresh")}function h(){var i=n.clones;if(t.is("loop")){if(m(i)){var r=n[c("fixedWidth")]&&e.Layout.slideSize(0);i=r&&it(G(s.track)[c("width")]/r)||n[c("autoWidth")]&&t.length||2*n.perPage}}else i=0;return i}return{mount:d,destroy:p}},Move:function(t,e,n){var i,r=vt(t),o=r.on,a=r.emit,s=t.state.set,u=e.Layout,c=u.slideSize,l=u.getPadding,d=u.totalSize,f=u.listSize,p=u.sliderSize,v=e.Direction,h=v.resolve,g=v.orient,y=e.Elements,b=y.list,w=y.track;function _(){e.Controller.isBusy()||(e.Scroll.cancel(),E(t.index),e.Slides.update())}function E(t){S(k(t,!0))}function S(n,i){if(!t.is("fade")){var r=i?n:function(n){if(t.is("loop")){var i=L(n),r=i>e.Controller.getEnd();(i<0||r)&&(n=x(n,r))}return n}(n);F(b,"transform","translate"+h("X")+"("+r+"px)"),n!==r&&a("sh")}}function x(t,e){var n=t-A(e),i=p();return t-=g(i*(it(rt(n)/i)||1))*(e?1:-1)}function P(){S(C(),!0),i.cancel()}function L(t){for(var n=e.Slides.get(),i=0,r=1/0,o=0;o<n.length;o++){var a=n[o].index,s=rt(k(a,!0)-t);if(!(s<=r))break;r=s,i=a}return i}function k(e,i){var r=g(d(e-1)-function(t){var e=n.focus;return"center"===e?(f()-c(t,!0))/2:+e*c(t)||0}(e));return i?function(e){n.trimSpace&&t.is("slide")&&(e=st(e,0,g(p(!0)-f())));return e}(r):r}function C(){var t=h("left");return G(b)[t]-G(w)[t]+g(l(!1))}function A(t){return k(t?e.Controller.getEnd():0,!!n.trimSpace)}return{mount:function(){i=e.Transition,o(["mounted","resized","updated","refresh"],_)},move:function(t,e,n,r){var o,u;t!==e&&(o=t>n,u=g(x(C(),o)),o?u>=0:u<=b[h("scrollWidth")]-G(w)[h("width")])&&(P(),S(x(C(),t>n),!0)),s(4),a("move",e,n,t),i.start(e,(function(){s(3),a("moved",e,n,t),r&&r()}))},jump:E,translate:S,shift:x,cancel:P,toIndex:L,toPosition:k,getPosition:C,getLimit:A,exceededLimit:function(t,e){e=m(e)?C():e;var n=!0!==t&&g(e)<g(A(!1)),i=!1!==t&&g(e)>g(A(!0));return n||i},reposition:_}},Controller:function(t,e,n){var i,r,o,a,s=vt(t),c=s.on,l=s.emit,d=e.Move,f=d.getPosition,p=d.getLimit,v=d.toPosition,h=e.Slides,y=h.isEnough,b=h.getLength,w=n.omitEnd,_=t.is("loop"),E=t.is("slide"),S=u(A,!1),x=u(A,!0),P=n.start||0,L=P;function k(){r=b(!0),o=n.perMove,a=n.perPage,i=D();var t=st(P,0,w?i:r-1);t!==P&&(P=t,d.reposition())}function C(){i!==D()&&l("ei")}function A(t,e){var n=o||(T()?1:a),r=z(P+n*(t?-1:1),P,!(o||T()));return-1===r&&E&&!ot(f(),p(!t),1)?t?0:i:e?r:M(r)}function z(e,s,u){if(y()||T()){var c=function(e){if(E&&"move"===n.trimSpace&&e!==P)for(var i=f();i===v(e,!0)&&at(e,0,t.length-1,!n.rewind);)e<P?--e:++e;return e}(e);c!==e&&(s=e,e=c,u=!1),e<0||e>i?e=o||!at(0,e,s,!0)&&!at(i,s,e,!0)?_?u?e<0?-(r%a||a):r:e:n.rewind?e<0?i:0:-1:I(N(e)):u&&e!==s&&(e=I(N(s)+(e<s?-1:1)))}else e=-1;return e}function M(t){return _?(t+r)%r||0:t}function D(){for(var t=r-(T()||_&&o?1:a);w&&t-- >0;)if(v(r-1,!0)!==v(t,!0)){t++;break}return st(t,0,r-1)}function I(t){return st(T()?t:a*t,0,i)}function N(t){return T()?tt(t,i):nt((t>=i?r-1:t)/a)}function O(t){t!==P&&(L=P,P=t)}function T(){return!m(n.focus)||n.isNavigation}function R(){return t.state.is([4,5])&&!!n.waitForTransition}return{mount:function(){k(),c(["updated","refresh","ei"],k),c("resized",C)},go:function(t,e,n){if(!R()){var r=function(t){var e=P;if(g(t)){var n=t.match(/([+\-<>])(\d+)?/)||[],r=n[1],o=n[2];"+"===r||"-"===r?e=z(P+ +(""+r+(+o||1)),P):">"===r?e=o?I(+o):S(!0):"<"===r&&(e=x(!0))}else e=_?t:st(t,0,i);return e}(t),o=M(r);o>-1&&(e||o!==P)&&(O(o),d.move(r,o,L,n))}},scroll:function(t,n,r,o){e.Scroll.scroll(t,n,r,(function(){var t=M(d.toIndex(f()));O(w?tt(t,i):t),o&&o()}))},getNext:S,getPrev:x,getAdjacent:A,getEnd:D,setIndex:O,getIndex:function(t){return t?L:P},toIndex:I,toPage:N,toDest:function(t){var e=d.toIndex(t);return E?st(e,0,i):e},hasFocus:T,isBusy:R}},Arrows:function(t,e,n){var i,r,o=vt(t),a=o.on,s=o.bind,c=o.emit,l=n.classes,d=n.i18n,f=e.Elements,p=e.Controller,v=f.arrows,h=f.track,g=v,m=f.prev,y=f.next,b={};function w(){!function(){var t=n.arrows;!t||m&&y||(g=v||B("div",l.arrows),m=x(!0),y=x(!1),i=!0,L(g,[m,y]),!v&&k(g,h));m&&y&&(I(b,{prev:m,next:y}),j(g,t?"":"none"),P(g,r="splide__arrows--"+n.direction),t&&(a(["mounted","moved","refresh","scrolled","ei"],C),s(y,"click",u(S,">")),s(m,"click",u(S,"<")),C(),R([m,y],"aria-controls",h.id),c("arrows:mounted",m,y)))}(),a("updated",_)}function _(){E(),w()}function E(){o.destroy(),K(g,r),i?(H(v?[m,y]:g),m=y=null):T([m,y],yt)}function S(t){p.go(t,!0)}function x(t){return U('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(n.arrowPath||xt)+'" />')}function C(){if(m&&y){var e=t.index,n=p.getPrev(),i=p.getNext(),r=n>-1&&e<n?d.last:d.prev,o=i>-1&&e>i?d.first:d.next;m.disabled=n<0,y.disabled=i<0,R(m,"aria-label",r),R(y,"aria-label",o),c("arrows:updated",m,y,n,i)}}return{arrows:b,mount:w,destroy:E,update:C}},Autoplay:function(t,e,n){var i,r,o=vt(t),a=o.on,s=o.bind,u=o.emit,c=ht(n.interval,t.go.bind(t,">"),(function(t){var e=d.bar;e&&F(e,"width",100*t+"%"),u("autoplay:playing",t)})),l=c.isPaused,d=e.Elements,f=e.Elements,p=f.root,v=f.toggle,h=n.autoplay,g="pause"===h;function m(){l()&&e.Slides.isEnough()&&(c.start(!n.resetProgress),r=i=g=!1,w(),u("autoplay:play"))}function y(t){void 0===t&&(t=!0),g=!!t,w(),l()||(c.pause(),u("autoplay:pause"))}function b(){g||(i||r?y(!1):m())}function w(){v&&(x(v,wt,!g),R(v,"aria-label",n.i18n[g?"play":"pause"]))}function _(t){var i=e.Slides.getAt(t);c.set(i&&+W(i.slide,"data-splide-interval")||n.interval)}return{mount:function(){h&&(!function(){n.pauseOnHover&&s(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()}));n.pauseOnFocus&&s(p,"focusin focusout",(function(t){r="focusin"===t.type,b()}));v&&s(v,"click",(function(){g?m():y(!0)}));a(["move","scroll","refresh"],c.rewind),a("move",_)}(),v&&R(v,"aria-controls",d.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(t,e,n){var i=vt(t).on;function r(t){e.Slides.forEach((function(e){var n=z(e.container||e.slide,"img");n&&n.src&&o(t,n,e)}))}function o(t,e,n){n.style("background",t?'center/cover no-repeat url("'+e.src+'")':"",!0),j(e,t?"none":"")}return{mount:function(){n.cover&&(i("lazyload:loaded",u(o,!0)),i(["mounted","updated","refresh"],u(r,!0)))},destroy:u(r,!1)}},Scroll:function(t,e,n){var i,r,o=vt(t),a=o.on,s=o.emit,c=t.state.set,l=e.Move,d=l.getPosition,f=l.getLimit,p=l.exceededLimit,v=l.translate,h=t.is("slide"),g=1;function m(t,n,o,a,f){var v=d();if(w(),o&&(!h||!p())){var m=e.Layout.sliderSize(),_=ut(t)*m*nt(rt(t)/m)||0;t=l.toPosition(e.Controller.toDest(t%m))+_}var E=ot(v,t,1);g=1,n=E?0:n||et(rt(t-v)/1.5,800),r=a,i=ht(n,y,u(b,v,t,f),1),c(5),s("scroll"),i.start()}function y(){c(3),r&&r(),s("scrolled")}function b(t,e,i,o){var a,s,u=d(),c=(t+(e-t)*(a=o,(s=n.easingFunc)?s(a):1-Math.pow(1-a,4))-u)*g;v(u+c),h&&!i&&p()&&(g*=.6,rt(c)<10&&m(f(p(!0)),600,!1,r,!0))}function w(){i&&i.cancel()}function _(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){a("move",w),a(["updated","refresh"],_)},destroy:w,scroll:m,cancel:_}},Drag:function(t,e,n){var i,r,o,a,s,u,c,d,f=vt(t),v=f.on,h=f.emit,g=f.bind,m=f.unbind,y=t.state,b=e.Move,w=e.Scroll,_=e.Controller,E=e.Elements.track,S=e.Media.reduce,x=e.Direction,P=x.resolve,L=x.orient,k=b.getPosition,A=b.exceededLimit,z=!1;function M(){var t=n.drag;W(!t),a="free"===t}function D(t){if(u=!1,!c){var e=q(t);i=t.target,r=n.noDrag,C(i,".splide__pagination__page, .splide__arrow")||r&&C(i,r)||!e&&t.button||(_.isBusy()?$(t,!0):(d=e?E:window,s=y.is([4,5]),o=null,g(d,"touchmove mousemove",I,Pt),g(d,"touchend touchcancel mouseup click",N,Pt),b.cancel(),w.cancel(),T(t)))}var i,r}function I(e){if(y.is(6)||(y.set(6),h("drag")),e.cancelable)if(s){b.translate(i+R(e)/(z&&t.is("slide")?5:1));var r=B(e)>200,o=z!==(z=A());(r||o)&&T(e),u=!0,h("dragging"),$(e)}else(function(t){return rt(R(t))>rt(R(t,!0))})(e)&&(s=function(t){var e=n.dragMinThreshold,i=p(e),r=i&&e.mouse||0,o=(i?e.touch:+e)||10;return rt(R(t))>(q(t)?o:r)}(e),$(e))}function N(i){y.is(6)&&(y.set(3),h("dragged")),s&&(!function(i){var r=function(e){if(t.is("loop")||!z){var n=B(e);if(n&&n<200)return R(e)/n}return 0}(i),o=function(t){return k()+ut(t)*tt(rt(t)*(n.flickPower||600),a?1/0:e.Layout.listSize()*(n.flickMaxPages||1))}(r),s=n.rewind&&n.rewindByDrag;S(!1),a?_.scroll(o,0,n.snap):t.is("fade")?_.go(L(ut(r))<0?s?"<":"-":s?">":"+"):t.is("slide")&&z&&s?_.go(A(!0)?">":"<"):_.go(_.toDest(o),!0);S(!0)}(i),$(i)),m(d,"touchmove mousemove",I),m(d,"touchend touchcancel mouseup click",N),s=!1}function O(t){!c&&u&&$(t,!0)}function T(t){o=r,r=t,i=k()}function R(t,e){return j(t,e)-j(F(t),e)}function B(t){return V(t)-V(F(t))}function F(t){return r===t&&o||r}function j(t,e){return(q(t)?t.changedTouches[0]:t)["page"+P(e?"Y":"X")]}function q(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function W(t){c=t}return{mount:function(){g(E,"touchmove mousemove",l,Pt),g(E,"touchend touchcancel mouseup click",l,Pt),g(E,"touchstart mousedown",D,Pt),g(E,"click",O,{capture:!0}),g(E,"dragstart",$),v(["mounted","updated"],M)},disable:W,isDragging:function(){return s}}},Keyboard:function(t,e,n){var i,r,o=vt(t),a=o.on,s=o.bind,u=o.unbind,l=t.root,d=e.Direction.resolve;function f(){var t=n.keyboard;t&&(i="global"===t?window:l,s(i,"keydown",h))}function p(){u(i,"keydown")}function v(){var t=r;r=!0,c((function(){r=t}))}function h(e){if(!r){var n=kt(e);n===d("ArrowLeft")?t.go("<"):n===d("ArrowRight")&&t.go(">")}}return{mount:function(){f(),a("updated",p),a("updated",f),a("move",v)},destroy:p,disable:function(t){r=t}}},LazyLoad:function(t,e,n){var i=vt(t),r=i.on,o=i.off,s=i.bind,c=i.emit,l="sequential"===n.lazyLoad,d=["moved","scrolled"],f=[];function p(){a(f),e.Slides.forEach((function(t){J(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(e){var i=W(e,"data-splide-lazy"),r=W(e,"data-splide-lazy-srcset");if(i!==e.src||r!==e.srcset){var o=n.classes.spinner,a=e.parentElement,s=z(a,"."+o)||B("span",o,a);f.push([e,t,s]),e.src||j(e,"none")}}))})),l?m():(o(d),r(d,v),v())}function v(){(f=f.filter((function(e){var i=n.perPage*((n.preloadPages||1)+1)-1;return!e[1].isWithin(t.index,i)||h(e)}))).length||o(d)}function h(t){var e=t[0];P(t[1].slide,"is-loading"),s(e,"load error",u(g,t)),R(e,"src",W(e,"data-splide-lazy")),R(e,"srcset",W(e,"data-splide-lazy-srcset")),T(e,"data-splide-lazy"),T(e,"data-splide-lazy-srcset")}function g(t,e){var n=t[0],i=t[1];K(i.slide,"is-loading"),"error"!==e.type&&(H(t[2]),j(n,""),c("lazyload:loaded",n,i),c("resize")),l&&m()}function m(){f.length&&h(f.shift())}return{mount:function(){n.lazyLoad&&(p(),r("refresh",p))},destroy:u(a,f),check:v}},Pagination:function(t,e,n){var i,r,o=vt(t),c=o.on,l=o.emit,d=o.bind,f=e.Slides,p=e.Elements,v=e.Controller,h=v.hasFocus,g=v.getIndex,m=v.go,y=e.Direction.resolve,b=p.pagination,w=[];function _(){i&&(H(b?s(i.children):i),K(i,r),a(w),i=null),o.destroy()}function E(t){m(">"+t,!0)}function S(t,e){var n=w.length,i=kt(e),r=x(),o=-1;i===y("ArrowRight",!1,r)?o=++t%n:i===y("ArrowLeft",!1,r)?o=(--t+n)%n:"Home"===i?o=0:"End"===i&&(o=n-1);var a=w[o];a&&(q(a.button),m(">"+o),$(e,!0))}function x(){return n.paginationDirection||n.direction}function L(t){return w[v.toPage(t)]}function k(){var t=L(g(!0)),e=L(g());if(t){var n=t.button;K(n,wt),T(n,"aria-selected"),R(n,"tabindex",-1)}if(e){var r=e.button;P(r,wt),R(r,"aria-selected",!0),R(r,"tabindex","")}l("pagination:updated",{list:i,items:w},t,e)}return{items:w,mount:function e(){_(),c(["updated","refresh","ei"],e);var o=n.pagination;b&&j(b,o?"":"none"),o&&(c(["move","scroll","scrolled"],k),function(){var e=t.length,o=n.classes,a=n.i18n,s=n.perPage,c=h()?v.getEnd()+1:it(e/s);P(i=b||B("ul",o.pagination,p.track.parentElement),r="splide__pagination--"+x()),R(i,"role","tablist"),R(i,"aria-label",a.select),R(i,"aria-orientation","ttb"===x()?"vertical":"");for(var l=0;l<c;l++){var g=B("li",null,i),m=B("button",{class:o.page,type:"button"},g),y=f.getIn(l).map((function(t){return t.slide.id})),_=!h()&&s>1?a.pageX:a.slideX;d(m,"click",u(E,l)),n.paginationKeyboard&&d(m,"keydown",u(S,l)),R(g,"role","presentation"),R(m,"role","tab"),R(m,"aria-controls",y.join(" ")),R(m,"aria-label",ct(_,l+1)),R(m,"tabindex",-1),w.push({li:g,button:m,page:l})}}(),k(),l("pagination:mounted",{list:i,items:w},L(t.index)))},destroy:_,getAt:L,update:k}},Sync:function(t,e,n){var i=n.isNavigation,r=n.slideFocus,o=[];function s(){var e,n;t.splides.forEach((function(e){e.isParent||(l(t,e.splide),l(e.splide,t))})),i&&(e=vt(t),(n=e.on)("click",f),n("sk",p),n(["mounted","updated"],d),o.push(e),e.emit("navigation:mounted",t.splides))}function c(){o.forEach((function(t){t.destroy()})),a(o)}function l(t,e){var n=vt(t);n.on("move",(function(t,n,i){e.go(e.is("loop")?i:t)})),o.push(n)}function d(){R(e.Elements.list,"aria-orientation","ttb"===n.direction?"vertical":"")}function f(e){t.go(e.index)}function p(t,e){E(Ct,kt(e))&&(f(t),$(e))}return{setup:u(e.Media.set,{slideFocus:m(r)?i:r},!0),mount:s,destroy:c,remount:function(){c(),s()}}},Wheel:function(t,e,n){var i=vt(t).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,a=o<0,s=V(i),u=n.wheelMinThreshold||0,c=n.wheelSleep||0;rt(o)>u&&s-r>c&&(t.go(a?"<":">"),r=s),function(i){return!n.releaseWheel||t.state.is(4)||-1!==e.Controller.getAdjacent(i)}(a)&&$(i)}}return{mount:function(){n.wheel&&i(e.Elements.track,"wheel",o,Pt)}}},Live:function(t,e,n){var i=vt(t).on,r=e.Elements.track,o=n.live&&!n.isNavigation,a=B("span","splide__sr"),s=ht(90,u(c,!1));function c(t){R(r,"aria-busy",t),t?(L(r,a),s.start()):(H(a),s.cancel())}function l(t){o&&R(r,"aria-live",t?"off":"polite")}return{mount:function(){o&&(l(!e.Autoplay.isPaused()),R(r,"aria-atomic",!0),a.textContent="…",i("autoplay:play",u(l,!0)),i("autoplay:pause",u(l,!1)),i(["moved","scrolled"],u(c,!0)))},disable:l,destroy:function(){T(r,["aria-live","aria-atomic","aria-busy"]),H(a)}}}}),zt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Et,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Mt(t,e,n){var i=e.Slides;function r(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){vt(t).on(["mounted","refresh"],r)},start:function(t,e){i.style("transition","opacity "+n.speed+"ms "+n.easing),c(e)},cancel:l}}function Dt(t,e,n){var i,r=e.Move,o=e.Controller,a=e.Scroll,s=e.Elements.list,c=u(F,s,"transition");function l(){c(""),a.cancel()}return{mount:function(){vt(t).bind(s,"transitionend",(function(t){t.target===s&&i&&(l(),i())}))},start:function(e,s){var u=r.toPosition(e,!0),l=r.getPosition(),d=function(e){var i=n.rewindSpeed;if(t.is("slide")&&i){var r=o.getIndex(!0),a=o.getEnd();if(0===r&&e>=a||r>=a&&0===e)return i}return n.speed}(e);rt(u-l)>=1&&d>=1?n.useScroll?a.scroll(u,d,!1,s):(c("transform "+d+"ms "+n.easing),r.translate(u,!0),i=s):(r.jump(e),s())},cancel:l}}var It=function(){function t(e,n){var i;this.event=vt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return E(w(t),i)}}),this.splides=[],this._o={},this._E={};var r=g(e)?Y(document,e):e;Z(r,r+" is invalid."),this.root=r,n=N({label:W(r,"aria-label")||"",labelledby:W(r,"aria-labelledby")||""},zt,t.defaults,n||{});try{N(n,JSON.parse(W(r,"data-splide")))}catch(t){Z(!1,"Invalid JSON")}this._o=Object.create(N({},n))}var e,n,i,o=t.prototype;return o.mount=function(t,e){var n=this,i=this.state,r=this.Components;return Z(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=e||this._T||(this.is("fade")?Mt:Dt),this._E=t||this._E,D(I({},At,this._E,{Transition:this._T}),(function(t,e){var i=t(n,r,n._o);r[e]=i,i.setup&&i.setup()})),D(r,(function(t){t.mount&&t.mount()})),this.emit("mounted"),P(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},o.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},o.go=function(t){return this._C.Controller.go(t),this},o.on=function(t,e){return this.event.on(t,e),this},o.off=function(t){return this.event.off(t),this},o.emit=function(t){var e;return(e=this.event).emit.apply(e,[t].concat(s(arguments,1))),this},o.add=function(t,e){return this._C.Slides.add(t,e),this},o.remove=function(t){return this._C.Slides.remove(t),this},o.is=function(t){return this._o.type===t},o.refresh=function(){return this.emit("refresh"),this},o.destroy=function(t){void 0===t&&(t=!0);var e=this.event,n=this.state;return n.is(1)?vt(this).on("ready",this.destroy.bind(this,t)):(D(this._C,(function(e){e.destroy&&e.destroy(t)}),!0),e.emit("destroy"),e.destroy(),t&&a(this.splides),n.set(7)),this},e=t,(n=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&r(e.prototype,n),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();It.defaults={},It.STATES=o;function Nt(t){const e=JSON.parse(localStorage.getItem(t));return console.log(e),e}function Ot(t){return!(!t||"Array"!=t.constructor.name)}function Tt(t){let e="";const n=t.filter(((t,e)=>{console.log(`Recipe -> ${t.title}`);const n=(currentPage-1)*pageSize,i=currentPage*pageSize;if(e>=n&&e<=i)return!0}));return console.log("favPerPage",n),n.forEach((t=>{console.log("pop",t),e+=`<li class="favor-item">\n    <img\n      src=${t.preview}\n      class="img-favor"\n      alt="preview"\n      width="335"\n      height="335"\n    />\n    <div class="card-favor">\n      <h2 class="title-favor">${t.title}</h2>\n      <p class="desc-favor">${t.description}</p>\n      <div class="rating-btn-favor">\n        <p class="rating-favor">\n        \n        ${Math.round(t.popularity/100)} <p></p> ${function(t){let e=[];t=Math.round(t/100),console.log(t);for(let n=t;n>=1;n--)e.push('<i class="fa fa-star star" aria-hidden="true" ></i>&nbsp;');return e=e.join(" "),e}(t.popularity)}</p>\n       \n        <btn class="btn-favor">See recipe</btn>\n      </div>\n    </div>\n  </li>`})),e}async function Rt(t=1){Ft(t),jt(t);const e=Nt("favorites");if(console.log(e),Ot(e)){const t=Tt(e);console.log(t),document.getElementById("favorList").innerHTML=t}else document.getElementById("favorList").innerHTML="<li>It appears that you haven`t added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</li>"}function Bt(){if(!Ot(favorites))return 0;try{return Math.ceil(favorites.length/pageSize)}catch(t){return console.log(t),0}}function Ft(t){prevButton.style.visibility=1===t?"hidden":"visible"}function jt(t){0===Bt()||t===Bt()?nextButton.style.visibility="hidden":nextButton.style.visibility="visible"}favorites=Nt("favorites"),mobile=!0,BASE_URL="https://tasty-treats-backend.p.goit.global/api",currentPage=1,pageSize=9,Rt(),document.querySelector("#prevButton").addEventListener("click",(function(){currentPage>1&&(currentPage--,Rt(currentPage))}),!1),document.querySelector("#nextButton").addEventListener("click",(function(){currentPage*pageSize<favorites.length&&(currentPage++,Rt(currentPage))}),!1);
//# sourceMappingURL=favorites.28be4f6e.js.map
