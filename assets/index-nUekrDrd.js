(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function dx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dh={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function px(){if(W1)return zl;W1=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:c}}return zl.Fragment=e,zl.jsx=i,zl.jsxs=i,zl}var Z1;function mx(){return Z1||(Z1=1,dh.exports=px()),dh.exports}var Se=mx(),ph={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1;function gx(){if(q1)return ct;q1=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function x(N,K,ye){this.props=N,this.context=K,this.refs=y,this.updater=ye||A}x.prototype.isReactComponent={},x.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function B(N,K,ye){this.props=N,this.context=K,this.refs=y,this.updater=ye||A}var w=B.prototype=new O;w.constructor=B,D(w,x.prototype),w.isPureReactComponent=!0;var z=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function U(N,K,ye){var Te=ye.ref;return{$$typeof:s,type:N,key:K,ref:Te!==void 0?Te:null,props:ye}}function q(N,K){return U(N.type,K,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function $(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return K[ye]})}var pe=/\/+/g;function Y(N,K){return typeof N=="object"&&N!==null&&N.key!=null?$(""+N.key):K.toString(36)}function J(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(P,P):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,K,ye,Te,Oe){var se=typeof N;(se==="undefined"||se==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case s:case e:Me=!0;break;case v:return Me=N._init,F(Me(N._payload),K,ye,Te,Oe)}}if(Me)return Oe=Oe(N),Me=Te===""?"."+Y(N,0):Te,z(Oe)?(ye="",Me!=null&&(ye=Me.replace(pe,"$&/")+"/"),F(Oe,K,ye,"",function(nt){return nt})):Oe!=null&&(G(Oe)&&(Oe=q(Oe,ye+(Oe.key==null||N&&N.key===Oe.key?"":(""+Oe.key).replace(pe,"$&/")+"/")+Me)),K.push(Oe)),1;Me=0;var Ee=Te===""?".":Te+":";if(z(N))for(var Be=0;Be<N.length;Be++)Te=N[Be],se=Ee+Y(Te,Be),Me+=F(Te,K,ye,se,Oe);else if(Be=S(N),typeof Be=="function")for(N=Be.call(N),Be=0;!(Te=N.next()).done;)Te=Te.value,se=Ee+Y(Te,Be++),Me+=F(Te,K,ye,se,Oe);else if(se==="object"){if(typeof N.then=="function")return F(J(N),K,ye,Te,Oe);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(N,K,ye){if(N==null)return N;var Te=[],Oe=0;return F(N,Te,"","",function(se){return K.call(ye,se,Oe++)}),Te}function te(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var ge=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Ae={map:H,forEach:function(N,K,ye){H(N,function(){K.apply(this,arguments)},ye)},count:function(N){var K=0;return H(N,function(){K++}),K},toArray:function(N){return H(N,function(K){return K})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ct.Activity=M,ct.Children=Ae,ct.Component=x,ct.Fragment=i,ct.Profiler=o,ct.PureComponent=B,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ct.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ct.cache=function(N){return function(){return N.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(N,K,ye){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=D({},N.props),Oe=N.key;if(K!=null)for(se in K.key!==void 0&&(Oe=""+K.key),K)!b.call(K,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&K.ref===void 0||(Te[se]=K[se]);var se=arguments.length-2;if(se===1)Te.children=ye;else if(1<se){for(var Me=Array(se),Ee=0;Ee<se;Ee++)Me[Ee]=arguments[Ee+2];Te.children=Me}return U(N.type,Oe,Te)},ct.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ct.createElement=function(N,K,ye){var Te,Oe={},se=null;if(K!=null)for(Te in K.key!==void 0&&(se=""+K.key),K)b.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Oe[Te]=K[Te]);var Me=arguments.length-2;if(Me===1)Oe.children=ye;else if(1<Me){for(var Ee=Array(Me),Be=0;Be<Me;Be++)Ee[Be]=arguments[Be+2];Oe.children=Ee}if(N&&N.defaultProps)for(Te in Me=N.defaultProps,Me)Oe[Te]===void 0&&(Oe[Te]=Me[Te]);return U(N,se,Oe)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(N){return{$$typeof:p,render:N}},ct.isValidElement=G,ct.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:te}},ct.memo=function(N,K){return{$$typeof:d,type:N,compare:K===void 0?null:K}},ct.startTransition=function(N){var K=I.T,ye={};I.T=ye;try{var Te=N(),Oe=I.S;Oe!==null&&Oe(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(P,ge)}catch(se){ge(se)}finally{K!==null&&ye.types!==null&&(K.types=ye.types),I.T=K}},ct.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ct.use=function(N){return I.H.use(N)},ct.useActionState=function(N,K,ye){return I.H.useActionState(N,K,ye)},ct.useCallback=function(N,K){return I.H.useCallback(N,K)},ct.useContext=function(N){return I.H.useContext(N)},ct.useDebugValue=function(){},ct.useDeferredValue=function(N,K){return I.H.useDeferredValue(N,K)},ct.useEffect=function(N,K){return I.H.useEffect(N,K)},ct.useEffectEvent=function(N){return I.H.useEffectEvent(N)},ct.useId=function(){return I.H.useId()},ct.useImperativeHandle=function(N,K,ye){return I.H.useImperativeHandle(N,K,ye)},ct.useInsertionEffect=function(N,K){return I.H.useInsertionEffect(N,K)},ct.useLayoutEffect=function(N,K){return I.H.useLayoutEffect(N,K)},ct.useMemo=function(N,K){return I.H.useMemo(N,K)},ct.useOptimistic=function(N,K){return I.H.useOptimistic(N,K)},ct.useReducer=function(N,K,ye){return I.H.useReducer(N,K,ye)},ct.useRef=function(N){return I.H.useRef(N)},ct.useState=function(N){return I.H.useState(N)},ct.useSyncExternalStore=function(N,K,ye){return I.H.useSyncExternalStore(N,K,ye)},ct.useTransition=function(){return I.H.useTransition()},ct.version="19.2.0",ct}var Y1;function Zd(){return Y1||(Y1=1,ph.exports=gx()),ph.exports}var R=Zd();const _x=dx(R);var mh={exports:{}},Bl={},gh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1;function vx(){return K1||(K1=1,(function(s){function e(F,H){var te=F.length;F.push(H);e:for(;0<te;){var ge=te-1>>>1,Ae=F[ge];if(0<o(Ae,H))F[ge]=H,F[te]=Ae,te=ge;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],te=F.pop();if(te!==H){F[0]=te;e:for(var ge=0,Ae=F.length,N=Ae>>>1;ge<N;){var K=2*(ge+1)-1,ye=F[K],Te=K+1,Oe=F[Te];if(0>o(ye,te))Te<Ae&&0>o(Oe,ye)?(F[ge]=Oe,F[Te]=te,ge=Te):(F[ge]=ye,F[K]=te,ge=K);else if(Te<Ae&&0>o(Oe,te))F[ge]=Oe,F[Te]=te,ge=Te;else break e}}return H}function o(F,H){var te=F.sortIndex-H.sortIndex;return te!==0?te:F.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,M=null,g=3,S=!1,A=!1,D=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=F)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function z(F){if(D=!1,w(F),!A)if(i(m)!==null)A=!0,P||(P=!0,$());else{var H=i(d);H!==null&&J(z,H.startTime-F)}}var P=!1,I=-1,b=5,U=-1;function q(){return y?!0:!(s.unstable_now()-U<b)}function G(){if(y=!1,P){var F=s.unstable_now();U=F;var H=!0;try{e:{A=!1,D&&(D=!1,O(I),I=-1),S=!0;var te=g;try{t:{for(w(F),M=i(m);M!==null&&!(M.expirationTime>F&&q());){var ge=M.callback;if(typeof ge=="function"){M.callback=null,g=M.priorityLevel;var Ae=ge(M.expirationTime<=F);if(F=s.unstable_now(),typeof Ae=="function"){M.callback=Ae,w(F),H=!0;break t}M===i(m)&&r(m),w(F)}else r(m);M=i(m)}if(M!==null)H=!0;else{var N=i(d);N!==null&&J(z,N.startTime-F),H=!1}}break e}finally{M=null,g=te,S=!1}H=void 0}}finally{H?$():P=!1}}}var $;if(typeof B=="function")$=function(){B(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Y=pe.port2;pe.port1.onmessage=G,$=function(){Y.postMessage(null)}}else $=function(){x(G,0)};function J(F,H){I=x(function(){F(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var te=g;g=H;try{return F()}finally{g=te}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=g;g=F;try{return H()}finally{g=te}},s.unstable_scheduleCallback=function(F,H,te){var ge=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,F){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=te+Ae,F={id:v++,callback:H,priorityLevel:F,startTime:te,expirationTime:Ae,sortIndex:-1},te>ge?(F.sortIndex=te,e(d,F),i(m)===null&&F===i(d)&&(D?(O(I),I=-1):D=!0,J(z,te-ge))):(F.sortIndex=Ae,e(m,F),A||S||(A=!0,P||(P=!0,$()))),F},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(F){var H=g;return function(){var te=g;g=H;try{return F.apply(this,arguments)}finally{g=te}}}})(_h)),_h}var Q1;function xx(){return Q1||(Q1=1,gh.exports=vx()),gh.exports}var vh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function Mx(){if(J1)return Ln;J1=1;var s=Zd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,v){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:M==null?null:""+M,children:m,containerInfo:d,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Ln.flushSync=function(m){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=v,r.d.f()}},Ln.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,M=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:M,integrity:g,fetchPriority:S}):v==="script"&&r.d.X(m,{crossOrigin:M,integrity:g,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Ln.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,M=p(v,d.crossOrigin);r.d.L(m,v,{crossOrigin:M,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,d){return m(d)},Ln.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var j1;function Sx(){if(j1)return vh.exports;j1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vh.exports=Mx(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function yx(){if($1)return Bl;$1=1;var s=xx(),e=Zd(),i=Sx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,l=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===l)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,l=f;break}if(C===l){_=!0,l=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,l=u;break}if(C===l){_=!0,l=f,a=u;break}C=C.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var M=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),B=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case B:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var J=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],Ae=-1;function N(t){return{current:t}}function K(t){0>Ae||(t.current=ge[Ae],ge[Ae]=null,Ae--)}function ye(t,n){Ae++,ge[Ae]=t.current,t.current=n}var Te=N(null),Oe=N(null),se=N(null),Me=N(null);function Ee(t,n){switch(ye(se,n),ye(Oe,t),ye(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?p1(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=p1(n),t=m1(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),ye(Te,t)}function Be(){K(Te),K(Oe),K(se)}function nt(t){t.memoizedState!==null&&ye(Me,t);var n=Te.current,a=m1(n,t.type);n!==a&&(ye(Oe,t),ye(Te,a))}function Qe(t){Oe.current===t&&(K(Te),K(Oe)),Me.current===t&&(K(Me),Ol._currentValue=te)}var Wt,ot;function xt(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+ot}var vt=!1;function gt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var ce=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){ce=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){ce=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&ce&&typeof ue.stack=="string")return[ue.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var V=_.split(`
`),ie=C.split(`
`);for(u=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(l===V.length||u===ie.length)for(l=V.length-1,u=ie.length-1;1<=l&&0<=u&&V[l]!==ie[u];)u--;for(;1<=l&&0<=u;l--,u--)if(V[l]!==ie[u]){if(l!==1||u!==1)do if(l--,u--,0>u||V[l]!==ie[u]){var me=`
`+V[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return xt("Activity");default:return""}}function qe(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var lt=Object.prototype.hasOwnProperty,it=s.unstable_scheduleCallback,ft=s.unstable_cancelCallback,Ct=s.unstable_shouldYield,W=s.unstable_requestPaint,Mt=s.unstable_now,pt=s.unstable_getCurrentPriorityLevel,L=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,Q=s.unstable_NormalPriority,le=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Re=s.log,Le=s.unstable_setDisableYieldValue,he=null,de=null;function we(t){if(typeof Re=="function"&&Le(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(he,t)}catch{}}var He=Math.clz32?Math.clz32:je,Pe=Math.log,Ue=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Pe(t)/Ue|0)|0}var $e=256,st=262144,k=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var l=t.pendingLanes;if(l===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~f,l!==0?u=Ce(l):(_&=C,_!==0?u=Ce(_):a||(a=C&~t,a!==0&&(u=Ce(a))))):(C=l&~f,C!==0?u=Ce(C):_!==0?u=Ce(_):a||(a=l&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,l,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,ie=t.hiddenUpdates;for(a=_&~a;0<a;){var me=31-He(a),xe=1<<me;C[me]=0,V[me]=-1;var ce=ie[me];if(ce!==null)for(ie[me]=null,me=0;me<ce.length;me++){var ue=ce[me];ue!==null&&(ue.lane&=-536870913)}a&=~xe}l!==0&&zt(t,l,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function zt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-He(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function jn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-He(a),u=1<<l;u&n|t[l]&n&&(t[l]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:Ys(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ks(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:z1(t.type))}function Gr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Oi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Oi,bn="__reactProps$"+Oi,kn="__reactContainer$"+Oi,cr="__reactEvents$"+Oi,so="__reactListeners$"+Oi,lo="__reactHandles$"+Oi,ur="__reactResources$"+Oi,Ta="__reactMarker$"+Oi;function Ra(t){delete t[fn],delete t[bn],delete t[cr],delete t[so],delete t[lo]}function Qi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[kn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=y1(t);t!==null;){if(a=t[fn])return a;t=y1(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[fn]||t[kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ca(t){var n=t[ur];return n||(n=t[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ta]=!0}var oo=new Set,T={};function Z(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(T[t]=n,t=0;t<n.length;t++)oo.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function Ge(t){return lt.call(Fe,t)?!0:lt.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function Ne(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+l)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nt(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=ht(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function Ht(t){return t.replace(Bt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,l,u,f,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?St(t,_,et(n)):a!=null?St(t,_,et(a)):l!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+et(C):t.removeAttribute("name")}function Dn(t,n,a,l,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Nt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Nt(t)}function St(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,l){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Ei(t,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(J(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Nt(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&a[u]!==l&&an(t,u,l)}else for(var f in n)n.hasOwnProperty(f)&&an(t,f,n[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hr(t){return wa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,kr=null;function d0(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var u=l[bn]||null;if(!u)throw Error(r(90));Ve(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===t.form&&nn(l)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var fu=!1;function p0(t,n,a){if(fu)return t(n,a);fu=!0;try{var l=t(n);return l}finally{if(fu=!1,(Xr!==null||kr!==null)&&(Qo(),Xr&&(n=Xr,t=kr,kr=Xr=null,d0(n),t)))for(n=0;n<t.length;n++)d0(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var l=a[bn]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if($i)try{var js={};Object.defineProperty(js,"passive",{get:function(){hu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{hu=!1}var Da=null,du=null,co=null;function m0(){if(co)return co;var t,n=du,a=n.length,l,u="value"in Da?Da.value:Da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(l=1;l<=_&&n[a-l]===u[f-l];l++);return co=u.slice(t,1<l?1-l:void 0)}function uo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function g0(){return!1}function Wn(t){function n(a,l,u,f,_){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fo:g0,this.isPropagationStopped=g0,this}return M(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=Wn(dr),$s=M({},dr,{view:0,detail:0}),f2=Wn($s),pu,mu,el,po=M({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==el&&(el&&t.type==="mousemove"?(pu=t.screenX-el.screenX,mu=t.screenY-el.screenY):mu=pu=0,el=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),_0=Wn(po),h2=M({},po,{dataTransfer:0}),d2=Wn(h2),p2=M({},$s,{relatedTarget:0}),gu=Wn(p2),m2=M({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),g2=Wn(m2),_2=M({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v2=Wn(_2),x2=M({},dr,{data:0}),v0=Wn(x2),M2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E2(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=y2[t])?!!n[t]:!1}function _u(){return E2}var b2=M({},$s,{key:function(t){if(t.key){var n=M2[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A2=Wn(b2),T2=M({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=Wn(T2),R2=M({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),C2=Wn(R2),w2=M({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),D2=Wn(w2),L2=M({},po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U2=Wn(L2),N2=M({},dr,{newState:0,oldState:0}),O2=Wn(N2),P2=[9,13,27,32],vu=$i&&"CompositionEvent"in window,tl=null;$i&&"documentMode"in document&&(tl=document.documentMode);var F2=$i&&"TextEvent"in window&&!tl,M0=$i&&(!vu||tl&&8<tl&&11>=tl),S0=" ",y0=!1;function E0(t,n){switch(t){case"keyup":return P2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function I2(t,n){switch(t){case"compositionend":return b0(n);case"keypress":return n.which!==32?null:(y0=!0,S0);case"textInput":return t=n.data,t===S0&&y0?null:t;default:return null}}function z2(t,n){if(Wr)return t==="compositionend"||!vu&&E0(t,n)?(t=m0(),co=du=Da=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return M0&&n.locale!=="ko"?null:n.data;default:return null}}var B2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!B2[t.type]:n==="textarea"}function T0(t,n,a,l){Xr?kr?kr.push(l):kr=[l]:Xr=l,n=ic(n,"onChange"),0<n.length&&(a=new ho("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var nl=null,il=null;function H2(t){o1(t,0)}function mo(t){var n=fr(t);if(nn(n))return t}function R0(t,n){if(t==="change")return n}var C0=!1;if($i){var xu;if($i){var Mu="oninput"in document;if(!Mu){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Mu=typeof w0.oninput=="function"}xu=Mu}else xu=!1;C0=xu&&(!document.documentMode||9<document.documentMode)}function D0(){nl&&(nl.detachEvent("onpropertychange",L0),il=nl=null)}function L0(t){if(t.propertyName==="value"&&mo(il)){var n=[];T0(n,il,t,uu(t)),p0(H2,n)}}function V2(t,n,a){t==="focusin"?(D0(),nl=n,il=a,nl.attachEvent("onpropertychange",L0)):t==="focusout"&&D0()}function G2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mo(il)}function X2(t,n){if(t==="click")return mo(n)}function k2(t,n){if(t==="input"||t==="change")return mo(n)}function W2(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:W2;function al(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!lt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function U0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function N0(t,n){var a=U0(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=U0(a)}}function O0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?O0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function P0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Z2=$i&&"documentMode"in document&&11>=document.documentMode,Zr=null,yu=null,rl=null,Eu=!1;function F0(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Zr==null||Zr!==Kt(l)||(l=Zr,"selectionStart"in l&&Su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rl&&al(rl,l)||(rl=l,l=ic(yu,"onSelect"),0<l.length&&(n=new ho("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=Zr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},bu={},I0={};$i&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function mr(t){if(bu[t])return bu[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in I0)return bu[t]=n[a];return t}var z0=mr("animationend"),B0=mr("animationiteration"),H0=mr("animationstart"),q2=mr("transitionrun"),Y2=mr("transitionstart"),K2=mr("transitioncancel"),V0=mr("transitionend"),G0=new Map,Au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Au.push("scrollEnd");function Ai(t,n){G0.set(t,n),Z(n,[t])}var go=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Yr=0,Tu=0;function _o(){for(var t=Yr,n=Tu=Yr=0;n<t;){var a=di[n];di[n++]=null;var l=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,l!==null&&u!==null){var _=l.pending;_===null?u.next=u:(u.next=_.next,_.next=u),l.pending=u}f!==0&&X0(a,u,f)}}function vo(t,n,a,l){di[Yr++]=t,di[Yr++]=n,di[Yr++]=a,di[Yr++]=l,Tu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ru(t,n,a,l){return vo(t,n,a,l),xo(t)}function gr(t,n){return vo(t,null,null,n),xo(t)}function X0(t,n,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-He(a),t=f.hiddenUpdates,l=t[u],l===null?t[u]=[n]:l.push(n),n.lane=a|536870912),f):null}function xo(t){if(50<Rl)throw Rl=0,If=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Kr={};function Q2(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,l){return new Q2(t,n,a,l)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function k0(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Mo(t,n,a,l,u,f){var _=0;if(l=t,typeof t=="function")Cu(t)&&(_=1);else if(typeof t=="string")_=tx(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ii(31,a,n,u),t.elementType=U,t.lanes=f,t;case D:return _r(a.children,u,f,n);case y:_=8,u|=24;break;case x:return t=ii(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=ii(13,a,n,u),t.elementType=z,t.lanes=f,t;case P:return t=ii(19,a,n,u),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:_=10;break e;case O:_=9;break e;case w:_=11;break e;case I:_=14;break e;case b:_=16,l=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ii(_,a,n,u),n.elementType=t,n.type=l,n.lanes=f,n}function _r(t,n,a,l){return t=ii(7,t,l,n),t.lanes=a,t}function wu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function W0(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Z0=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Z0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qe(n)},Z0.set(t,n),n)}return{value:t,source:n,stack:qe(n)}}var Qr=[],Jr=0,So=null,sl=0,mi=[],gi=0,La=null,Fi=1,Ii="";function ta(t,n){Qr[Jr++]=sl,Qr[Jr++]=So,So=t,sl=n}function q0(t,n,a){mi[gi++]=Fi,mi[gi++]=Ii,mi[gi++]=La,La=t;var l=Fi;t=Ii;var u=32-He(l)-1;l&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var _=u-u%5;f=(l&(1<<_)-1).toString(32),l>>=_,u-=_,Fi=1<<32-He(n)+u|a<<u|l,Ii=f+t}else Fi=1<<f|a<<u|l,Ii=t}function Lu(t){t.return!==null&&(ta(t,1),q0(t,1,0))}function Uu(t){for(;t===So;)So=Qr[--Jr],Qr[Jr]=null,sl=Qr[--Jr],Qr[Jr]=null;for(;t===La;)La=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Y0(t,n){mi[gi++]=Fi,mi[gi++]=Ii,mi[gi++]=La,Fi=n.id,Ii=n.overflow,La=t}var An=null,jt=null,wt=!1,Ua=null,_i=!1,Nu=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll(pi(n,t)),Nu}function K0(t){var n=t.stateNode,a=t.type,l=t.memoizedProps;switch(n[fn]=t,n[bn]=l,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<wl.length;a++)Et(wl[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Dn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ei(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||h1(n.textContent,a)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Na(t,!0)}function Q0(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:An=An.return}}function jr(t){if(t!==An)return!1;if(!wt)return Q0(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&jt&&Na(t),Q0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=S1(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=S1(t)}else n===27?(n=jt,qa(t.type)?(t=ih,ih=null,jt=t):jt=n):jt=An?xi(t.stateNode.nextSibling):null;return!0}function vr(){jt=An=null,wt=!1}function Ou(){var t=Ua;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ua=null),t}function ll(t){Ua===null?Ua=[t]:Ua.push(t)}var Pu=N(null),xr=null,na=null;function Oa(t,n,a){ye(Pu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Pu.current,K(Pu)}function Fu(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Fu(f.return,a,t),l||(_=null);break e}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Fu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function $r(t,n,a,l){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var C=u.type;ni(u.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ol):t=[Ol])}u=u.return}t!==null&&Iu(n,t,a,l),n.flags|=262144}function yo(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){xr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return J0(xr,t)}function Eo(t,n){return xr===null&&Mr(t),J0(t,n)}function J0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(r(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var J2=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},j2=s.unstable_scheduleCallback,$2=s.unstable_NormalPriority,dn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new J2,data:new Map,refCount:0}}function ol(t){t.refCount--,t.refCount===0&&j2($2,function(){t.controller.abort()})}var cl=null,Bu=0,es=0,ts=null;function ev(t,n){if(cl===null){var a=cl=[];Bu=0,es=Xf(),ts={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bu++,n.then(j0,j0),n}function j0(){if(--Bu===0&&cl!==null){ts!==null&&(ts.status="fulfilled");var t=cl;cl=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function tv(t,n){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var $0=F.S;F.S=function(t,n){Fm=Mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ev(t,n),$0!==null&&$0(t,n)};var Sr=N(null);function Hu(){var t=Sr.current;return t!==null?t:Qt.pooledCache}function bo(t,n){n===null?ye(Sr,Sr.current):ye(Sr,n.pool)}function ep(){var t=Hu();return t===null?null:{parent:dn._currentValue,pool:t}}var ns=Error(r(460)),Vu=Error(r(474)),Ao=Error(r(542)),To={then:function(){}};function tp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ap(t),t}throw Er=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,ns):a}}var Er=null;function ip(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function ap(t){if(t===ns||t===Ao)throw Error(r(483))}var is=null,ul=0;function Ro(t){var n=ul;return ul+=1,is===null&&(is=[]),np(is,t,n)}function fl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Co(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rp(t){function n(j,X){if(t){var ne=j.deletions;ne===null?(j.deletions=[X],j.flags|=16):ne.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function l(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=ea(j,X),j.index=0,j.sibling=null,j}function f(j,X,ne){return j.index=ne,t?(ne=j.alternate,ne!==null?(ne=ne.index,ne<X?(j.flags|=67108866,X):ne):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function C(j,X,ne,ve){return X===null||X.tag!==6?(X=wu(ne,j.mode,ve),X.return=j,X):(X=u(X,ne),X.return=j,X)}function V(j,X,ne,ve){var tt=ne.type;return tt===D?me(j,X,ne.props.children,ve,ne.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===b&&yr(tt)===X.type)?(X=u(X,ne.props),fl(X,ne),X.return=j,X):(X=Mo(ne.type,ne.key,ne.props,null,j.mode,ve),fl(X,ne),X.return=j,X)}function ie(j,X,ne,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Du(ne,j.mode,ve),X.return=j,X):(X=u(X,ne.children||[]),X.return=j,X)}function me(j,X,ne,ve,tt){return X===null||X.tag!==7?(X=_r(ne,j.mode,ve,tt),X.return=j,X):(X=u(X,ne),X.return=j,X)}function xe(j,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=wu(""+X,j.mode,ne),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return ne=Mo(X.type,X.key,X.props,null,j.mode,ne),fl(ne,X),ne.return=j,ne;case A:return X=Du(X,j.mode,ne),X.return=j,X;case b:return X=yr(X),xe(j,X,ne)}if(J(X)||$(X))return X=_r(X,j.mode,ne,null),X.return=j,X;if(typeof X.then=="function")return xe(j,Ro(X),ne);if(X.$$typeof===B)return xe(j,Eo(j,X),ne);Co(j,X)}return null}function ce(j,X,ne,ve){var tt=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:C(j,X,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===tt?V(j,X,ne,ve):null;case A:return ne.key===tt?ie(j,X,ne,ve):null;case b:return ne=yr(ne),ce(j,X,ne,ve)}if(J(ne)||$(ne))return tt!==null?null:me(j,X,ne,ve,null);if(typeof ne.then=="function")return ce(j,X,Ro(ne),ve);if(ne.$$typeof===B)return ce(j,X,Eo(j,ne),ve);Co(j,ne)}return null}function ue(j,X,ne,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(ne)||null,C(X,j,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return j=j.get(ve.key===null?ne:ve.key)||null,V(X,j,ve,tt);case A:return j=j.get(ve.key===null?ne:ve.key)||null,ie(X,j,ve,tt);case b:return ve=yr(ve),ue(j,X,ne,ve,tt)}if(J(ve)||$(ve))return j=j.get(ne)||null,me(X,j,ve,tt,null);if(typeof ve.then=="function")return ue(j,X,ne,Ro(ve),tt);if(ve.$$typeof===B)return ue(j,X,ne,Eo(X,ve),tt);Co(X,ve)}return null}function Ze(j,X,ne,ve){for(var tt=null,Ot=null,Ke=X,mt=X=0,At=null;Ke!==null&&mt<ne.length;mt++){Ke.index>mt?(At=Ke,Ke=null):At=Ke.sibling;var Pt=ce(j,Ke,ne[mt],ve);if(Pt===null){Ke===null&&(Ke=At);break}t&&Ke&&Pt.alternate===null&&n(j,Ke),X=f(Pt,X,mt),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt,Ke=At}if(mt===ne.length)return a(j,Ke),wt&&ta(j,mt),tt;if(Ke===null){for(;mt<ne.length;mt++)Ke=xe(j,ne[mt],ve),Ke!==null&&(X=f(Ke,X,mt),Ot===null?tt=Ke:Ot.sibling=Ke,Ot=Ke);return wt&&ta(j,mt),tt}for(Ke=l(Ke);mt<ne.length;mt++)At=ue(Ke,j,mt,ne[mt],ve),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?mt:At.key),X=f(At,X,mt),Ot===null?tt=At:Ot.sibling=At,Ot=At);return t&&Ke.forEach(function(ja){return n(j,ja)}),wt&&ta(j,mt),tt}function at(j,X,ne,ve){if(ne==null)throw Error(r(151));for(var tt=null,Ot=null,Ke=X,mt=X=0,At=null,Pt=ne.next();Ke!==null&&!Pt.done;mt++,Pt=ne.next()){Ke.index>mt?(At=Ke,Ke=null):At=Ke.sibling;var ja=ce(j,Ke,Pt.value,ve);if(ja===null){Ke===null&&(Ke=At);break}t&&Ke&&ja.alternate===null&&n(j,Ke),X=f(ja,X,mt),Ot===null?tt=ja:Ot.sibling=ja,Ot=ja,Ke=At}if(Pt.done)return a(j,Ke),wt&&ta(j,mt),tt;if(Ke===null){for(;!Pt.done;mt++,Pt=ne.next())Pt=xe(j,Pt.value,ve),Pt!==null&&(X=f(Pt,X,mt),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return wt&&ta(j,mt),tt}for(Ke=l(Ke);!Pt.done;mt++,Pt=ne.next())Pt=ue(Ke,j,mt,Pt.value,ve),Pt!==null&&(t&&Pt.alternate!==null&&Ke.delete(Pt.key===null?mt:Pt.key),X=f(Pt,X,mt),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Ke.forEach(function(hx){return n(j,hx)}),wt&&ta(j,mt),tt}function Yt(j,X,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===D&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var tt=ne.key;X!==null;){if(X.key===tt){if(tt=ne.type,tt===D){if(X.tag===7){a(j,X.sibling),ve=u(X,ne.props.children),ve.return=j,j=ve;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===b&&yr(tt)===X.type){a(j,X.sibling),ve=u(X,ne.props),fl(ve,ne),ve.return=j,j=ve;break e}a(j,X);break}else n(j,X);X=X.sibling}ne.type===D?(ve=_r(ne.props.children,j.mode,ve,ne.key),ve.return=j,j=ve):(ve=Mo(ne.type,ne.key,ne.props,null,j.mode,ve),fl(ve,ne),ve.return=j,j=ve)}return _(j);case A:e:{for(tt=ne.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(j,X.sibling),ve=u(X,ne.children||[]),ve.return=j,j=ve;break e}else{a(j,X);break}else n(j,X);X=X.sibling}ve=Du(ne,j.mode,ve),ve.return=j,j=ve}return _(j);case b:return ne=yr(ne),Yt(j,X,ne,ve)}if(J(ne))return Ze(j,X,ne,ve);if($(ne)){if(tt=$(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),at(j,X,ne,ve)}if(typeof ne.then=="function")return Yt(j,X,Ro(ne),ve);if(ne.$$typeof===B)return Yt(j,X,Eo(j,ne),ve);Co(j,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(j,X.sibling),ve=u(X,ne),ve.return=j,j=ve):(a(j,X),ve=wu(ne,j.mode,ve),ve.return=j,j=ve),_(j)):a(j,X)}return function(j,X,ne,ve){try{ul=0;var tt=Yt(j,X,ne,ve);return is=null,tt}catch(Ke){if(Ke===ns||Ke===Ao)throw Ke;var Ot=ii(29,Ke,null,j.mode);return Ot.lanes=ve,Ot.return=j,Ot}finally{}}}var br=rp(!0),sp=rp(!1),Pa=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=xo(t),X0(t,null,a),n}return vo(t,l,n,a),xo(t)}function hl(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,jn(t,a)}}function ku(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function dl(){if(Wu){var t=ts;if(t!==null)throw t}}function pl(t,n,a,l){Wu=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,ie=V.next;V.next=null,_===null?f=ie:_.next=ie,_=V;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==_&&(C===null?me.firstBaseUpdate=ie:C.next=ie,me.lastBaseUpdate=V))}if(f!==null){var xe=u.baseState;_=0,me=ie=V=null,C=f;do{var ce=C.lane&-536870913,ue=ce!==C.lane;if(ue?(bt&ce)===ce:(l&ce)===ce){ce!==0&&ce===es&&(Wu=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,at=C;ce=n;var Yt=a;switch(at.tag){case 1:if(Ze=at.payload,typeof Ze=="function"){xe=Ze.call(Yt,xe,ce);break e}xe=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=at.payload,ce=typeof Ze=="function"?Ze.call(Yt,xe,ce):Ze,ce==null)break e;xe=M({},xe,ce);break e;case 2:Pa=!0}}ce=C.callback,ce!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ce]:ue.push(ce))}else ue={lane:ce,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ie=me=ue,V=xe):me=me.next=ue,_|=ce;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);me===null&&(V=xe),u.baseState=V,u.firstBaseUpdate=ie,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ga|=_,t.lanes=_,t.memoizedState=xe}}function lp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lp(a[t],n)}var as=N(null),wo=N(0);function cp(t,n){t=ha,ye(wo,t),ye(as,n),ha=t|n.baseLanes}function Zu(){ye(wo,ha),ye(as,as.current)}function qu(){ha=wo.current,K(as),K(wo)}var ai=N(null),vi=null;function za(t){var n=t.alternate;ye(cn,cn.current&1),ye(ai,t),vi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(vi=t)}function Yu(t){ye(cn,cn.current),ye(ai,t),vi===null&&(vi=t)}function up(t){t.tag===22?(ye(cn,cn.current),ye(ai,t),vi===null&&(vi=t)):Ba()}function Ba(){ye(cn,cn.current),ye(ai,ai.current)}function ri(t){K(ai),vi===t&&(vi=null),K(cn)}var cn=N(0);function Do(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,dt=null,Zt=null,pn=null,Lo=!1,rs=!1,Ar=!1,Uo=0,ml=0,ss=null,nv=0;function ln(){throw Error(r(321))}function Ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Qu(t,n,a,l,u,f){return aa=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?qp:hf,Ar=!1,f=a(l,u),Ar=!1,rs&&(f=hp(n,a,l,u)),fp(t),f}function fp(t){F.H=vl;var n=Zt!==null&&Zt.next!==null;if(aa=0,pn=Zt=dt=null,Lo=!1,ml=0,ss=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&yo(t)&&(mn=!0))}function hp(t,n,a,l){dt=t;var u=0;do{if(rs&&(ss=null),ml=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,pn=Zt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Yp,f=n(a,l)}while(rs);return f}function iv(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?gl(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Ju(){var t=Uo!==0;return Uo=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(Lo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Lo=!1}aa=0,pn=Zt=dt=null,rs=!1,ml=Uo=0,ss=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?dt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=pn===null?dt.memoizedState:pn.next;if(n!==null)pn=n,Zt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},pn===null?dt.memoizedState=pn=t:pn=pn.next=t}return pn}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gl(t){var n=ml;return ml+=1,ss===null&&(ss=[]),t=np(ss,t,n),n=dt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?qp:hf),t}function Oo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return gl(t);if(t.$$typeof===B)return Tn(t)}throw Error(r(438,String(t)))}function ef(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=No(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),l=0;l<t;l++)a[l]=q;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Po(t){var n=un();return tf(n,Zt,t)}function tf(t,n,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=t.baseQueue,f=l.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,l.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=_=null,V=null,ie=n,me=!1;do{var xe=ie.lane&-536870913;if(xe!==ie.lane?(bt&xe)===xe:(aa&xe)===xe){var ce=ie.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),xe===es&&(me=!0);else if((aa&ce)===ce){ie=ie.next,ce===es&&(me=!0);continue}else xe={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(C=V=xe,_=f):V=V.next=xe,dt.lanes|=ce,Ga|=ce;xe=ie.action,Ar&&a(f,xe),f=ie.hasEagerState?ie.eagerState:a(f,xe)}else ce={lane:xe,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(C=V=ce,_=f):V=V.next=ce,dt.lanes|=xe,Ga|=xe;ie=ie.next}while(ie!==null&&ie!==n);if(V===null?_=f:V.next=C,!ni(f,t.memoizedState)&&(mn=!0,me&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,l.lastRenderedState=f}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function nf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ni(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function dp(t,n,a){var l=dt,u=un(),f=wt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ni((Zt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,sf(gp.bind(null,l,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,ls(9,{destroy:void 0},mp.bind(null,l,u,a,n),null),Qt===null)throw Error(r(349));f||(aa&127)!==0||pp(l,n,a)}return a}function pp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=No(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mp(t,n,a,l){n.value=a,n.getSnapshot=l,_p(n)&&vp(t)}function gp(t,n,a){return a(function(){_p(n)&&vp(t)})}function _p(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function vp(t){var n=gr(t,2);n!==null&&Qn(n,t,2)}function af(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Ar){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function xp(t,n,a,l){return t.baseState=a,tf(t,Zt,typeof l=="function"?l:ra)}function av(t,n,a,l,u){if(zo(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Mp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mp(t,n){var a=n.action,l=n.payload,u=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var C=a(u,l),V=F.S;V!==null&&V(_,C),Sp(t,n,C)}catch(ie){rf(t,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(u,l),Sp(t,n,f)}catch(ie){rf(t,n,ie)}}function Sp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){yp(t,n,l)},function(l){return rf(t,n,l)}):yp(t,n,a)}function yp(t,n,a){n.status="fulfilled",n.value=a,Ep(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mp(t,a)))}function rf(t,n,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,Ep(n),n=n.next;while(n!==l)}t.action=null}function Ep(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bp(t,n){return n}function Ap(t,n){if(wt){var a=Qt.formState;if(a!==null){e:{var l=dt;if(wt){if(jt){t:{for(var u=jt,f=_i;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=xi(u.nextSibling),l=u.data==="F!";break e}}Na(l)}l=!1}l&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:n},a.queue=l,a=kp.bind(null,dt,l),l.dispatch=a,l=af(!1),f=ff.bind(null,dt,!1,l.queue),l=Bn(),u={state:n,dispatch:null,action:t,pending:null},l.queue=u,a=av.bind(null,dt,u,f,a),u.dispatch=a,l.memoizedState=t,[n,a,!1]}function Tp(t){var n=un();return Rp(n,Zt,t)}function Rp(t,n,a){if(n=tf(t,n,bp)[0],t=Po(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=gl(n)}catch(_){throw _===ns?Ao:_}else l=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ls(9,{destroy:void 0},rv.bind(null,u,a),null)),[l,f,t]}function rv(t,n){t.action=n}function Cp(t){var n=un(),a=Zt;if(a!==null)return Rp(n,a,t);un(),n=n.memoizedState,a=un();var l=a.queue.dispatch;return a.memoizedState=t,[n,l,!1]}function ls(t,n,a,l){return t={tag:t,create:a,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=No(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t),t}function wp(){return un().memoizedState}function Fo(t,n,a,l){var u=Bn();dt.flags|=t,u.memoizedState=ls(1|n,{destroy:void 0},a,l===void 0?null:l)}function Io(t,n,a,l){var u=un();l=l===void 0?null:l;var f=u.memoizedState.inst;Zt!==null&&l!==null&&Ku(l,Zt.memoizedState.deps)?u.memoizedState=ls(n,f,a,l):(dt.flags|=t,u.memoizedState=ls(1|n,f,a,l))}function Dp(t,n){Fo(8390656,8,t,n)}function sf(t,n){Io(2048,8,t,n)}function sv(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=No(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Lp(t){var n=un().memoizedState;return sv({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Up(t,n){return Io(4,2,t,n)}function Np(t,n){return Io(4,4,t,n)}function Op(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pp(t,n,a){a=a!=null?a.concat([t]):null,Io(4,4,Op.bind(null,n,t),a)}function lf(){}function Fp(t,n){var a=un();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Ku(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function Ip(t,n){var a=un();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Ku(n,l[1]))return l[0];if(l=t(),Ar){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[l,n],l}function of(t,n,a){return a===void 0||(aa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zm(),dt.lanes|=t,Ga|=t,a)}function zp(t,n,a,l){return ni(a,n)?a:as.current!==null?(t=of(t,a,l),ni(t,n)||(mn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(bt&261930)===0?(mn=!0,t.memoizedState=a):(t=zm(),dt.lanes|=t,Ga|=t,n)}function Bp(t,n,a,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=F.T,C={};F.T=C,ff(t,!1,n,a);try{var V=u(),ie=F.S;if(ie!==null&&ie(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=tv(V,l);_l(t,n,me,oi(t))}else _l(t,n,l,oi(t))}catch(xe){_l(t,n,{then:function(){},status:"rejected",reason:xe},oi())}finally{H.p=f,_!==null&&C.types!==null&&(_.types=C.types),F.T=_}}function lv(){}function cf(t,n,a,l){if(t.tag!==5)throw Error(r(476));var u=Hp(t).queue;Bp(t,u,n,te,a===null?lv:function(){return Vp(t),a(l)})}function Hp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vp(t){var n=Hp(t);n.next===null&&(n=t.alternate.memoizedState),_l(t,n.next.queue,{},oi())}function uf(){return Tn(Ol)}function Gp(){return un().memoizedState}function Xp(){return un().memoizedState}function ov(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Fa(a);var l=Ia(n,t,a);l!==null&&(Qn(l,n,a),hl(l,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function cv(t,n,a){var l=oi();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zo(t)?Wp(n,a):(a=Ru(t,n,a,l),a!==null&&(Qn(a,t,l),Zp(a,n,l)))}function kp(t,n,a){var l=oi();_l(t,n,a,l)}function _l(t,n,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zo(t))Wp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,ni(C,_))return vo(t,n,u,0),Qt===null&&_o(),!1}catch{}finally{}if(a=Ru(t,n,u,l),a!==null)return Qn(a,t,l),Zp(a,n,l),!0}return!1}function ff(t,n,a,l){if(l={lane:2,revertLane:Xf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},zo(t)){if(n)throw Error(r(479))}else n=Ru(t,a,l,2),n!==null&&Qn(n,t,2)}function zo(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Wp(t,n){rs=Lo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Zp(t,n,a){if((a&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,jn(t,a)}}var vl={readContext:Tn,use:Oo,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};vl.useEffectEvent=ln;var qp={readContext:Tn,use:Oo,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Dp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fo(4194308,4,Op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fo(4194308,4,t,n)},useInsertionEffect:function(t,n){Fo(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var l=t();if(Ar){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[l,n],l},useReducer:function(t,n,a){var l=Bn();if(a!==void 0){var u=a(n);if(Ar){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=cv.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=kp.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(t,n){var a=Bn();return of(a,t,n)},useTransition:function(){var t=af(!1);return t=Bp.bind(null,dt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var l=dt,u=Bn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qt===null)throw Error(r(349));(bt&127)!==0||pp(l,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dp(gp.bind(null,l,f,t),[t]),l.flags|=2048,ls(9,{destroy:void 0},mp.bind(null,l,f,a,n),null),a},useId:function(){var t=Bn(),n=Qt.identifierPrefix;if(wt){var a=Ii,l=Fi;a=(l&~(1<<32-He(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Uo++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Ap,useActionState:Ap,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return Bn().memoizedState=ov.bind(null,dt)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Tn,use:Oo,useCallback:Fp,useContext:Tn,useEffect:sf,useImperativeHandle:Pp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:Ip,useReducer:Po,useRef:wp,useState:function(){return Po(ra)},useDebugValue:lf,useDeferredValue:function(t,n){var a=un();return zp(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Po(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:gl(t),n]},useSyncExternalStore:dp,useId:Gp,useHostTransitionStatus:uf,useFormState:Tp,useActionState:Tp,useOptimistic:function(t,n){var a=un();return xp(a,Zt,t,n)},useMemoCache:ef,useCacheRefresh:Xp};hf.useEffectEvent=Lp;var Yp={readContext:Tn,use:Oo,useCallback:Fp,useContext:Tn,useEffect:sf,useImperativeHandle:Pp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:Ip,useReducer:nf,useRef:wp,useState:function(){return nf(ra)},useDebugValue:lf,useDeferredValue:function(t,n){var a=un();return Zt===null?of(a,t,n):zp(a,Zt.memoizedState,t,n)},useTransition:function(){var t=nf(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:gl(t),n]},useSyncExternalStore:dp,useId:Gp,useHostTransitionStatus:uf,useFormState:Cp,useActionState:Cp,useOptimistic:function(t,n){var a=un();return Zt!==null?xp(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Xp};Yp.useEffectEvent=Lp;function df(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:M({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var l=oi(),u=Fa(l);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,l),n!==null&&(Qn(n,t,l),hl(n,t,l))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=oi(),u=Fa(l);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,l),n!==null&&(Qn(n,t,l),hl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),l=Fa(a);l.tag=2,n!=null&&(l.callback=n),n=Ia(t,l,a),n!==null&&(Qn(n,t,a),hl(n,t,a))}};function Kp(t,n,a,l,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,_):n.prototype&&n.prototype.isPureReactComponent?!al(a,l)||!al(u,f):!0}function Qp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(t=t.defaultProps){a===n&&(a=M({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Jp(t){go(t)}function jp(t){console.error(t)}function $p(t){go(t)}function Bo(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function em(t,n,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Bo(t,n)},a}function tm(t){return t=Fa(t),t.tag=3,t}function nm(t,n,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;t.payload=function(){return u(f)},t.callback=function(){em(n,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){em(n,a,l),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function uv(t,n,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Jo():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===To?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Hf(t,l,u)),!1;case 22:return a.flags|=65536,l===To?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Hf(t,l,u)),!1}throw Error(r(435,a.tag))}return Hf(t,l,u),Jo(),!1}if(wt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Nu&&(t=Error(r(422),{cause:l}),ll(pi(t,a)))):(l!==Nu&&(n=Error(r(423),{cause:l}),ll(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=pi(l,a),u=mf(t.stateNode,l,u),ku(t,u),on!==4&&(on=2)),!1;var f=Error(r(520),{cause:l});if(f=pi(f,a),Tl===null?Tl=[f]:Tl.push(f),on!==4&&(on=2),n===null)return!0;l=pi(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,l,t),ku(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=tm(u),nm(u,t,a,l),ku(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),mn=!1;function Rn(t,n,a,l){n.child=t===null?sp(n,null,a,l):br(n,t.child,a,l)}function im(t,n,a,l,u){a=a.render;var f=n.ref;if("ref"in l){var _={};for(var C in l)C!=="ref"&&(_[C]=l[C])}else _=l;return Mr(n),l=Qu(t,n,a,_,f,u),C=Ju(),t!==null&&!mn?(ju(t,n,u),sa(t,n,u)):(wt&&C&&Lu(n),n.flags|=1,Rn(t,n,l,u),n.child)}function am(t,n,a,l,u){if(t===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,rm(t,n,f,l,u)):(t=Mo(a.type,null,l,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!bf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:al,a(_,l)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=ea(f,l),t.ref=n.ref,t.return=n,n.child=t}function rm(t,n,a,l,u){if(t!==null){var f=t.memoizedProps;if(al(f,l)&&t.ref===n.ref)if(mn=!1,n.pendingProps=l=f,bf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return _f(t,n,a,l,u)}function sm(t,n,a,l){var u=l.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(l=n.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,n.child=null;return lm(t,n,f,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bo(n,f!==null?f.cachePool:null),f!==null?cp(n,f):Zu(),up(n);else return l=n.lanes=536870912,lm(t,n,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(bo(n,f.cachePool),cp(n,f),Ba(),n.memoizedState=null):(t!==null&&bo(n,null),Zu(),Ba());return Rn(t,n,u,a),n.child}function xl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lm(t,n,a,l,u){var f=Hu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&bo(n,null),Zu(),up(n),t!==null&&$r(t,n,l,!0),n.childLanes=u,null}function Ho(t,n){return n=Go({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function om(t,n,a){return br(n,t.child,null,a),t=Ho(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function fv(t,n,a){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=Ho(n,l),n.lanes=536870912,xl(null,t);if(Yu(n),(t=jt)?(t=M1(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=W0(t),a.return=n,n.child=a,An=n,jt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Ho(n,l)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Yu(n),u)if(n.flags&256)n.flags&=-257,n=om(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(l=Qt,l!==null&&(_=$n(l,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,gr(t,_),Qn(l,t,_),gf;Jo(),n=om(t,n,a)}else t=f.treeContext,jt=xi(_.nextSibling),An=n,wt=!0,Ua=null,_i=!1,t!==null&&Y0(n,t),n=Ho(n,l),n.flags|=4096;return n}return t=ea(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vo(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,l,u){return Mr(n),a=Qu(t,n,a,l,void 0,u),l=Ju(),t!==null&&!mn?(ju(t,n,u),sa(t,n,u)):(wt&&l&&Lu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function cm(t,n,a,l,u,f){return Mr(n),n.updateQueue=null,a=hp(n,l,a,u),fp(t),l=Ju(),t!==null&&!mn?(ju(t,n,f),sa(t,n,f)):(wt&&l&&Lu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function um(t,n,a,l,u){if(Mr(n),n.stateNode===null){var f=Kr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Tn(_)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Tn(_):Kr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(df(n,a,_,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&pf.enqueueReplaceState(f,f.state,null),pl(n,l,f,u),dl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,V=Tr(a,C);f.props=V;var ie=f.context,me=a.contextType;_=Kr,typeof me=="object"&&me!==null&&(_=Tn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ie!==_)&&Qp(n,f,l,_),Pa=!1;var ce=n.memoizedState;f.state=ce,pl(n,l,f,u),dl(),ie=n.memoizedState,C||ce!==ie||Pa?(typeof xe=="function"&&(df(n,a,xe,l),ie=n.memoizedState),(V=Pa||Kp(n,a,V,l,ce,ie,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ie),f.props=l,f.state=ie,f.context=_,l=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Xu(t,n),_=n.memoizedProps,me=Tr(a,_),f.props=me,xe=n.pendingProps,ce=f.context,ie=a.contextType,V=Kr,typeof ie=="object"&&ie!==null&&(V=Tn(ie)),C=a.getDerivedStateFromProps,(ie=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||ce!==V)&&Qp(n,f,l,V),Pa=!1,ce=n.memoizedState,f.state=ce,pl(n,l,f,u),dl();var ue=n.memoizedState;_!==xe||ce!==ue||Pa||t!==null&&t.dependencies!==null&&yo(t.dependencies)?(typeof C=="function"&&(df(n,a,C,l),ue=n.memoizedState),(me=Pa||Kp(n,a,me,l,ce,ue,V)||t!==null&&t.dependencies!==null&&yo(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,ue,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,ue,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ue),f.props=l,f.state=ue,f.context=V,l=me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,Vo(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=sa(t,n,u),t}function fm(t,n,a,l){return vr(),n.flags|=256,Rn(t,n,a,l),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:ep()}}function Mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function hm(t,n,a){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?za(n):Ba(),(t=jt)?(t=M1(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=W0(t),a.return=n,n.child=a,An=n,jt=null)):t=null,t===null)throw Na(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,u?(Ba(),u=n.mode,C=Go({mode:"hidden",children:C},u),l=_r(l,u,a,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=xf(a),l.childLanes=Mf(t,_,a),n.memoizedState=vf,xl(null,l)):(za(n),Sf(n,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=yf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),C=l.fallback,u=n.mode,l=Go({mode:"visible",children:l.children},u),C=_r(C,u,a,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,br(n,t.child,null,a),l=n.child,l.memoizedState=xf(a),l.childLanes=Mf(t,_,a),n.memoizedState=vf,n=xl(null,l));else if(za(n),nh(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var ie=_.dgst;_=ie,l=Error(r(419)),l.stack="",l.digest=_,ll({value:l,source:null,stack:null}),n=yf(t,n,a)}else if(mn||$r(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=Qt,_!==null&&(l=$n(_,a),l!==0&&l!==V.retryLane))throw V.retryLane=l,gr(t,l),Qn(_,t,l),gf;th(C)||Jo(),n=yf(t,n,a)}else th(C)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,jt=xi(C.nextSibling),An=n,wt=!0,Ua=null,_i=!1,t!==null&&Y0(n,t),n=Sf(n,l.children),n.flags|=4096);return n}return u?(Ba(),C=l.fallback,u=n.mode,V=t.child,ie=V.sibling,l=ea(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ie!==null?C=ea(ie,C):(C=_r(C,u,a,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,xl(null,l),l=n.child,C=t.child.memoizedState,C===null?C=xf(a):(u=C.cachePool,u!==null?(V=dn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=ep(),C={baseLanes:C.baseLanes|a,cachePool:u}),l.memoizedState=C,l.childLanes=Mf(t,_,a),n.memoizedState=vf,xl(t.child,l)):(za(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=Go({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Go(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function yf(t,n,a){return br(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dm(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Fu(t.return,n,a)}function Ef(t,n,a,l,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function pm(t,n,a){var l=n.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var _=cn.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,ye(cn,_),Rn(t,n,l,a),l=wt?sl:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,a,n);else if(t.tag===19)dm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Do(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ef(n,!0,a,null,f,l);break;case"together":Ef(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yo(t)))}function hv(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Oa(n,dn,t.memoizedState.cache),vr();break;case 27:case 5:nt(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hm(t,n,a):(za(n),t=sa(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||($r(t,n,a,!1),l=(a&n.childLanes)!==0),u){if(l)return pm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(cn,cn.current),l)break;return null;case 22:return n.lanes=0,sm(t,n,a,n.pendingProps);case 24:Oa(n,dn,t.memoizedState.cache)}return sa(t,n,a)}function mm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!bf(t,a)&&(n.flags&128)===0)return mn=!1,hv(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,wt&&(n.flags&1048576)!==0&&q0(n,sl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Cu(t)?(l=Tr(t,l),n.tag=1,n=um(null,n,t,l,a)):(n.tag=0,n=_f(null,n,t,l,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=im(null,n,t,l,a);break e}else if(u===I){n.tag=14,n=am(null,n,t,l,a);break e}}throw n=Y(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return l=n.type,u=Tr(l,n.pendingProps),um(t,n,l,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(t,n),pl(n,l,null,a);var _=n.memoizedState;if(l=_.cache,Oa(n,dn,l),l!==f.cache&&Iu(n,[dn],a,!0),dl(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=fm(t,n,l,a);break e}else if(l!==u){u=pi(Error(r(424)),n),ll(u),n=fm(t,n,l,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=xi(t.firstChild),An=n,wt=!0,Ua=null,_i=!0,a=sp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vr(),l===u){n=sa(t,n,a);break e}Rn(t,n,l,a)}n=n.child}return n;case 26:return Vo(t,n),t===null?(a=T1(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,l=ac(se.current).createElement(a),l[fn]=n,l[bn]=t,Cn(l,a,t),hn(l),n.stateNode=l):n.memoizedState=T1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&wt&&(l=n.stateNode=E1(n.type,n.pendingProps,se.current),An=n,_i=!0,u=jt,qa(n.type)?(ih=u,jt=xi(l.firstChild)):jt=u),Rn(t,n,n.pendingProps.children,a),Vo(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=l=jt)&&(l=Gv(l,n.type,n.pendingProps,_i),l!==null?(n.stateNode=l,An=n,jt=xi(l.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),nt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,l=f.children,jf(u,f)?l=null:_!==null&&jf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(t,n,iv,null,null,a),Ol._currentValue=u),Vo(t,n),Rn(t,n,l,a),n.child;case 6:return t===null&&wt&&((t=a=jt)&&(a=Xv(a,n.pendingProps,_i),a!==null?(n.stateNode=a,An=n,jt=null,t=!0):t=!1),t||Na(n)),null;case 13:return hm(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=br(n,null,l,a):Rn(t,n,l,a),n.child;case 11:return im(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Oa(n,n.type,l.value),Rn(t,n,l.children,a),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Mr(n),u=Tn(u),l=l(u),n.flags|=1,Rn(t,n,l,a),n.child;case 14:return am(t,n,n.type,n.pendingProps,a);case 15:return rm(t,n,n.type,n.pendingProps,a);case 19:return pm(t,n,a);case 31:return fv(t,n,a);case 22:return sm(t,n,a,n.pendingProps);case 24:return Mr(n),l=Tn(dn),t===null?(u=Hu(),u===null&&(u=Qt,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:l,cache:u},Gu(n),Oa(n,dn,u)):((t.lanes&a)!==0&&(Xu(t,n),pl(n,null,null,a),dl()),u=t.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,dn,l)):(l=f.cache,Oa(n,dn,l),l!==u.cache&&Iu(n,[dn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function la(t){t.flags|=4}function Af(t,n,a,l,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Gm())t.flags|=8192;else throw Er=To,Vu}else t.flags&=-16777217}function gm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!L1(n))if(Gm())t.flags|=8192;else throw Er=To,Vu}function Xo(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,fs|=n)}function Ml(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function dv(t,n,a){var l=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),ia(dn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),$t(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(la(n),f!==null?($t(n),gm(n,f)):($t(n),Af(n,u,null,l,a))):f?f!==t.memoizedState?(la(n),$t(n),gm(n,f)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&la(n),$t(n),Af(n,u,t,l,a)),null;case 27:if(Qe(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&la(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return $t(n),null}t=Te.current,jr(n)?K0(n):(t=E1(u,l,a),n.stateNode=t,la(n))}return $t(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&la(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return $t(n),null}if(f=Te.current,jr(n))K0(n);else{var _=ac(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?_.createElement(u,{is:l.is}):_.createElement(u)}}f[fn]=n,f[bn]=l;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Cn(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&la(n)}}return $t(n),Af(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&la(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,l=null,u=An,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||h1(t.nodeValue,a)),t||Na(n,!0)}else t=ac(t).createTextNode(l),t[fn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(l=jr(n),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return $t(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xo(n,n.updateQueue),$t(n),null);case 4:return Be(),t===null&&qf(n.stateNode.containerInfo),$t(n),null;case 10:return ia(n.type),$t(n),null;case 19:if(K(cn),l=n.memoizedState,l===null)return $t(n),null;if(u=(n.flags&128)!==0,f=l.rendering,f===null)if(u)Ml(l,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Do(t),f!==null){for(n.flags|=128,Ml(l,!1),t=f.updateQueue,n.updateQueue=t,Xo(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)k0(a,t),a=a.sibling;return ye(cn,cn.current&1|2),wt&&ta(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Mt()>Yo&&(n.flags|=128,u=!0,Ml(l,!1),n.lanes=4194304)}else{if(!u)if(t=Do(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xo(n,t),Ml(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!wt)return $t(n),null}else 2*Mt()-l.renderingStartTime>Yo&&a!==536870912&&(n.flags|=128,u=!0,Ml(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(t=l.last,t!==null?t.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Mt(),t.sibling=null,a=cn.current,ye(cn,u?a&1|2:a&1),wt&&ta(n,l.treeForkCount),t):($t(n),null);case 22:case 23:return ri(n),qu(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Xo(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),t!==null&&K(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(dn),$t(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function pv(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(dn),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(cn),null;case 4:return Be(),null;case 10:return ia(n.type),null;case 22:case 23:return ri(n),qu(),t!==null&&K(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(dn),null;case 25:return null;default:return null}}function _m(t,n){switch(Uu(n),n.tag){case 3:ia(dn),Be();break;case 26:case 27:case 5:Qe(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:K(cn);break;case 10:ia(n.type);break;case 22:case 23:ri(n),qu(),t!==null&&K(Sr);break;case 24:ia(dn)}}function Sl(t,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&t)===t){l=void 0;var f=a.create,_=a.inst;l=f(),_.destroy=l}a=a.next}while(a!==u)}}catch(C){Xt(n,n.return,C)}}function Ha(t,n,a){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&t)===t){var _=l.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var V=a,ie=C;try{ie()}catch(me){Xt(u,V,me)}}}l=l.next}while(l!==f)}}catch(me){Xt(n,n.return,me)}}function vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{op(n,a)}catch(l){Xt(t,t.return,l)}}}function xm(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Xt(t,n,l)}}function yl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(u){Xt(t,n,u)}}function zi(t,n){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Xt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(t,n,u)}else a.current=null}function Mm(t){var n=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Xt(t,t.return,u)}}function Tf(t,n,a){try{var l=t.stateNode;Fv(l,t.type,a,n),l[bn]=n}catch(u){Xt(t,t.return,u)}}function Sm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(l!==4&&(l===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,a),t=t.sibling;t!==null;)Cf(t,n,a),t=t.sibling}function ko(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(l===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ko(t,n,a),t=t.sibling;t!==null;)ko(t,n,a),t=t.sibling}function ym(t){var n=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,l,a),n[fn]=t,n[bn]=a}catch(f){Xt(t,t.return,f)}}var oa=!1,gn=!1,wf=!1,Em=typeof WeakSet=="function"?WeakSet:Set,yn=null;function mv(t,n){if(t=t.containerInfo,Qf=fc,t=P0(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,C=-1,V=-1,ie=0,me=0,xe=t,ce=null;t:for(;;){for(var ue;xe!==a||u!==0&&xe.nodeType!==3||(C=_+u),xe!==f||l!==0&&xe.nodeType!==3||(V=_+l),xe.nodeType===3&&(_+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)ce=xe,xe=ue;for(;;){if(xe===t)break t;if(ce===a&&++ie===u&&(C=_),ce===f&&++me===l&&(V=_),(ue=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=ue}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:t,selectionRange:a},fc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var Ze=Tr(a.type,u);t=l.getSnapshotBeforeUpdate(Ze,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Xt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)eh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function bm(t,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),l&4&&Sl(5,a);break;case 1:if(ua(t,a),l&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Xt(a,a.return,_)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Xt(a,a.return,_)}}l&64&&vm(a),l&512&&yl(a,a.return);break;case 3:if(ua(t,a),l&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{op(t,n)}catch(_){Xt(a,a.return,_)}}break;case 27:n===null&&l&4&&ym(a);case 26:case 5:ua(t,a),n===null&&l&4&&Mm(a),l&512&&yl(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),l&4&&Rm(t,a);break;case 13:ua(t,a),l&4&&Cm(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=bv.bind(null,a),kv(t,a))));break;case 22:if(l=a.memoizedState!==null||oa,!l){n=n!==null&&n.memoizedState!==null||gn,u=oa;var f=gn;oa=l,(gn=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),oa=u,gn=f}break;case 30:break;default:ua(t,a)}}function Am(t){var n=t.alternate;n!==null&&(t.alternate=null,Am(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Zn=!1;function ca(t,n,a){for(a=a.child;a!==null;)Tm(t,n,a),a=a.sibling}function Tm(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(he,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var l=rn,u=Zn;qa(a.type)&&(rn=a.stateNode,Zn=!1),ca(t,n,a),Ll(a.stateNode),rn=l,Zn=u;break;case 5:gn||zi(a,n);case 6:if(l=rn,u=Zn,rn=null,ca(t,n,a),rn=l,Zn=u,rn!==null)if(Zn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Xt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Xt(a,n,f)}break;case 18:rn!==null&&(Zn?(t=rn,v1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):v1(rn,a.stateNode));break;case 4:l=rn,u=Zn,rn=a.stateNode.containerInfo,Zn=!0,ca(t,n,a),rn=l,Zn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),gn||Ha(4,a,n),ca(t,n,a);break;case 1:gn||(zi(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&xm(a,n,l)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:gn=(l=gn)||a.memoizedState!==null,ca(t,n,a),gn=l;break;default:ca(t,n,a)}}function Rm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Xt(n,n.return,a)}}}function Cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Xt(n,n.return,a)}}function gv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Em),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Em),n;default:throw Error(r(435,t.tag))}}function Wo(t,n){var a=gv(t);n.forEach(function(l){if(!a.has(l)){a.add(l);var u=Av.bind(null,t,l);l.then(u,u)}})}function qn(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=t,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(qa(C.type)){rn=C.stateNode,Zn=!1;break e}break;case 5:rn=C.stateNode,Zn=!1;break e;case 3:case 4:rn=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if(rn===null)throw Error(r(160));Tm(f,_,u),rn=null,Zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)wm(n,t),n=n.sibling}var Ti=null;function wm(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),l&4&&(Ha(3,t,t.return),Sl(3,t),Ha(5,t,t.return));break;case 1:qn(n,t),Yn(t),l&512&&(gn||a===null||zi(a,a.return)),l&64&&oa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Ti;if(qn(n,t),Yn(t),l&512&&(gn||a===null||zi(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,l,a),f[fn]=t,hn(f),l=f;break e;case"link":var _=w1("link","href",u).get(l+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}f=u.createElement(l),Cn(f,l,a),u.head.appendChild(f);break;case"meta":if(_=w1("meta","content",u).get(l+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}f=u.createElement(l),Cn(f,l,a),u.head.appendChild(f);break;default:throw Error(r(468,l))}f[fn]=t,hn(f),l=f}t.stateNode=l}else D1(u,t.type,t.stateNode);else t.stateNode=C1(u,l,t.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?D1(u,t.type,t.stateNode):C1(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),l&512&&(gn||a===null||zi(a,a.return)),a!==null&&l&4&&Tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),l&512&&(gn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(Ze){Xt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,Tf(t,u,a!==null?a.memoizedProps:u)),l&1024&&(wf=!0);break;case 6:if(qn(n,t),Yn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Ze){Xt(t,t.return,Ze)}}break;case 3:if(lc=null,u=Ti,Ti=rc(n.containerInfo),qn(n,t),Ti=u,Yn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(Ze){Xt(t,t.return,Ze)}wf&&(wf=!1,Dm(t));break;case 4:l=Ti,Ti=rc(t.stateNode.containerInfo),qn(n,t),Yn(t),Ti=l;break;case 12:qn(n,t),Yn(t);break;case 31:qn(n,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wo(t,l)));break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(qo=Mt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wo(t,l)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ie=oa,me=gn;if(oa=ie||u,gn=me||V,qn(n,t),gn=me,oa=ie,Yn(t),l&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||oa||gn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=V.stateNode;var xe=V.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ze){Xt(V,V.return,Ze)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Ze){Xt(V,V.return,Ze)}}}else if(n.tag===18){if(a===null){V=n;try{var ue=V.stateNode;u?x1(ue,!0):x1(V.stateNode,!1)}catch(Ze){Xt(V,V.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wo(t,a))));break;case 19:qn(n,t),Yn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wo(t,l)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,l=t.return;l!==null;){if(Sm(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Rf(t);ko(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ti(_,""),a.flags&=-33);var C=Rf(t);ko(t,C,_);break;case 3:case 4:var V=a.stateNode.containerInfo,ie=Rf(t);Cf(t,ie,V);break;default:throw Error(r(161))}}catch(me){Xt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Rr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xm(n,n.return,a),Rr(n);break;case 27:Ll(n.stateNode);case 26:case 5:zi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Sl(4,f);break;case 1:if(fa(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Xt(l,l.return,ie)}if(l=f,u=l.updateQueue,u!==null){var C=l.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)lp(V[u],C)}catch(ie){Xt(l,l.return,ie)}}a&&_&64&&vm(f),yl(f,f.return);break;case 27:ym(f);case 26:case 5:fa(u,f,a),a&&l===null&&_&4&&Mm(f),yl(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&_&4&&Rm(u,f);break;case 13:fa(u,f,a),a&&_&4&&Cm(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),yl(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ol(a))}function Lf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ol(t))}function Ri(t,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lm(t,n,a,l),n=n.sibling}function Lm(t,n,a,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,l),u&2048&&Sl(9,n);break;case 1:Ri(t,n,a,l);break;case 3:Ri(t,n,a,l),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ol(t)));break;case 12:if(u&2048){Ri(t,n,a,l),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Xt(n,n.return,V)}}else Ri(t,n,a,l);break;case 31:Ri(t,n,a,l);break;case 13:Ri(t,n,a,l);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,l):El(t,n):f._visibility&2?Ri(t,n,a,l):(f._visibility|=2,os(t,n,a,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(_,n);break;case 24:Ri(t,n,a,l),u&2048&&Lf(n.alternate,n);break;default:Ri(t,n,a,l)}}function os(t,n,a,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,C=a,V=l,ie=_.flags;switch(_.tag){case 0:case 11:case 15:os(f,_,C,V,u),Sl(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?os(f,_,C,V,u):El(f,_):(me._visibility|=2,os(f,_,C,V,u)),u&&ie&2048&&Df(_.alternate,_);break;case 24:os(f,_,C,V,u),u&&ie&2048&&Lf(_.alternate,_);break;default:os(f,_,C,V,u)}n=n.sibling}}function El(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,l=n,u=l.flags;switch(l.tag){case 22:El(a,l),u&2048&&Df(l.alternate,l);break;case 24:El(a,l),u&2048&&Lf(l.alternate,l);break;default:El(a,l)}n=n.sibling}}var bl=8192;function cs(t,n,a){if(t.subtreeFlags&bl)for(t=t.child;t!==null;)Um(t,n,a),t=t.sibling}function Um(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&bl&&t.memoizedState!==null&&nx(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var l=Ti;Ti=rc(t.stateNode.containerInfo),cs(t,n,a),Ti=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=bl,bl=16777216,cs(t,n,a),bl=l):cs(t,n,a));break;default:cs(t,n,a)}}function Nm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];yn=l,Pm(l,t)}Nm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(t),t=t.sibling}function Om(t){switch(t.tag){case 0:case 11:case 15:Al(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Al(t);break;case 12:Al(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Zo(t)):Al(t);break;default:Al(t)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];yn=l,Pm(l,t)}Nm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Zo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zo(n));break;default:Zo(n)}t=t.sibling}}function Pm(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ol(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,yn=l;else e:for(a=t;yn!==null;){l=yn;var u=l.sibling,f=l.return;if(Am(l),l===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var _v={getCacheForType:function(t){var n=Tn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},vv=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,yt=null,bt=0,Gt=0,si=null,Va=!1,us=!1,Uf=!1,ha=0,on=0,Ga=0,Cr=0,Nf=0,li=0,fs=0,Tl=null,Kn=null,Of=!1,qo=0,Fm=0,Yo=1/0,Ko=null,Xa=null,xn=0,ka=null,hs=null,da=0,Pf=0,Ff=null,Im=null,Rl=0,If=null;function oi(){return(Ft&2)!==0&&bt!==0?bt&-bt:F.T!==null?Xf():Qs()}function zm(){if(li===0)if((bt&536870912)===0||wt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),li=t}else li=536870912;return t=ai.current,t!==null&&(t.flags|=32),li}function Qn(t,n,a){(t===Qt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Wa(t,bt,li,!1)),Xe(t,a),((Ft&2)===0||t!==Qt)&&(t===Qt&&((Ft&2)===0&&(Cr|=a),on===4&&Wa(t,bt,li,!1)),Bi(t))}function Bm(t,n,a){if((Ft&6)!==0)throw Error(r(327));var l=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=l?Sv(t,n):Bf(t,n,!0),f=l;do{if(u===0){us&&!l&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!xv(a)){u=Bf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=t;u=Tl;var V=C.current.memoizedState.isDehydrated;if(V&&(ds(C,_).flags|=256),_=Bf(C,_,!1),_!==2){if(Uf&&!V){C.errorRecoveryDisabledLanes|=f,Cr|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ds(t,0),Wa(t,n,0,!0);break}e:{switch(l=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(l,n,li,!Va);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=qo+300-Mt(),10<u)){if(Wa(l,n,li,!Va),_e(l,0,!0)!==0)break e;da=n,l.timeoutHandle=g1(Hm.bind(null,l,a,Kn,Ko,Of,n,li,Cr,fs,Va,f,"Throttled",-0,0),u);break e}Hm(l,a,Kn,Ko,Of,n,li,Cr,fs,Va,f,null,-0,0)}}break}while(!0);Bi(t)}function Hm(t,n,a,l,u,f,_,C,V,ie,me,xe,ce,ue){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Um(n,f,xe);var Ze=(f&62914560)===f?qo-Mt():(f&4194048)===f?Fm-Mt():0;if(Ze=ix(xe,Ze),Ze!==null){da=f,t.cancelPendingCommit=Ze(Ym.bind(null,t,n,f,a,l,u,_,C,V,me,xe,null,ce,ue)),Wa(t,f,_,!ie);return}}Ym(t,n,f,a,l,u,_,C,V)}function xv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,l){n&=~Nf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var u=n;0<u;){var f=31-He(u),_=1<<f;l[f]=-1,u&=~_}a!==0&&zt(t,a,n)}function Qo(){return(Ft&6)===0?(Cl(0),!1):!0}function zf(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,na=xr=null,$u(t),is=null,ul=0,t=yt;for(;t!==null;)_m(t.alternate,t),t=t.return;yt=null}}function ds(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Bv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,zf(),Qt=t,yt=a=ea(t.current,null),bt=n,Gt=0,si=null,Va=!1,us=De(t,n),Uf=!1,fs=li=Nf=Cr=Ga=on=0,Kn=Tl=null,Of=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var u=31-He(l),f=1<<u;n|=t[u],l&=~f}return ha=n,_o(),a}function Vm(t,n){dt=null,F.H=vl,n===ns||n===Ao?(n=ip(),Gt=3):n===Vu?(n=ip(),Gt=4):Gt=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,yt===null&&(on=1,Bo(t,pi(n,t.current)))}function Gm(){var t=ai.current;return t===null?!0:(bt&4194048)===bt?vi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===vi:!1}function Xm(){var t=F.H;return F.H=vl,t===null?vl:t}function km(){var t=F.A;return F.A=_v,t}function Jo(){on=4,Va||(bt&4194048)!==bt&&ai.current!==null||(us=!0),(Ga&134217727)===0&&(Cr&134217727)===0||Qt===null||Wa(Qt,bt,li,!1)}function Bf(t,n,a){var l=Ft;Ft|=2;var u=Xm(),f=km();(Qt!==t||bt!==n)&&(Ko=null,ds(t,n)),n=!1;var _=on;e:do try{if(Gt!==0&&yt!==null){var C=yt,V=si;switch(Gt){case 8:zf(),_=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var ie=Gt;if(Gt=0,si=null,ps(t,C,V,ie),a&&us){_=0;break e}break;default:ie=Gt,Gt=0,si=null,ps(t,C,V,ie)}}Mv(),_=on;break}catch(me){Vm(t,me)}while(!0);return n&&t.shellSuspendCounter++,na=xr=null,Ft=l,F.H=u,F.A=f,yt===null&&(Qt=null,bt=0,_o()),_}function Mv(){for(;yt!==null;)Wm(yt)}function Sv(t,n){var a=Ft;Ft|=2;var l=Xm(),u=km();Qt!==t||bt!==n?(Ko=null,Yo=Mt()+500,ds(t,n)):us=De(t,n);e:do try{if(Gt!==0&&yt!==null){n=yt;var f=si;t:switch(Gt){case 1:Gt=0,si=null,ps(t,n,f,1);break;case 2:case 9:if(tp(f)){Gt=0,si=null,Zm(n);break}n=function(){Gt!==2&&Gt!==9||Qt!==t||(Gt=7),Bi(t)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:tp(f)?(Gt=0,si=null,Zm(n)):(Gt=0,si=null,ps(t,n,f,7));break;case 5:var _=null;switch(yt.tag){case 26:_=yt.memoizedState;case 5:case 27:var C=yt;if(_?L1(_):C.stateNode.complete){Gt=0,si=null;var V=C.sibling;if(V!==null)yt=V;else{var ie=C.return;ie!==null?(yt=ie,jo(ie)):yt=null}break t}}Gt=0,si=null,ps(t,n,f,5);break;case 6:Gt=0,si=null,ps(t,n,f,6);break;case 8:zf(),on=6;break e;default:throw Error(r(462))}}yv();break}catch(me){Vm(t,me)}while(!0);return na=xr=null,F.H=l,F.A=u,Ft=a,yt!==null?0:(Qt=null,bt=0,_o(),on)}function yv(){for(;yt!==null&&!Ct();)Wm(yt)}function Wm(t){var n=mm(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?jo(t):yt=n}function Zm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=cm(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=cm(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:$u(n);default:_m(a,n),n=yt=k0(n,ha),n=mm(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?jo(t):yt=n}function ps(t,n,a,l){na=xr=null,$u(n),is=null,ul=0;var u=n.return;try{if(uv(t,u,n,a,bt)){on=1,Bo(t,pi(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;on=1,Bo(t,pi(a,t.current)),yt=null;return}n.flags&32768?(wt||l===1?t=!0:us||(bt&536870912)!==0?t=!1:(Va=t=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),qm(n,t)):jo(n)}function jo(t){var n=t;do{if((n.flags&32768)!==0){qm(n,Va);return}t=n.return;var a=dv(n.alternate,n,ha);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);on===0&&(on=5)}function qm(t,n){do{var a=pv(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);on=6,yt=null}function Ym(t,n,a,l,u,f,_,C,V){t.cancelPendingCommit=null;do $o();while(xn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Tu,tn(t,a,f,_,C,V),t===Qt&&(yt=Qt=null,bt=0),hs=n,ka=t,da=a,Pf=f,Ff=u,Im=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Tv(Q,function(){return $m(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,u=H.p,H.p=2,_=Ft,Ft|=4;try{mv(t,n,a)}finally{Ft=_,H.p=u,F.T=l}}xn=1,Km(),Qm(),Jm()}}function Km(){if(xn===1){xn=0;var t=ka,n=hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=H.p;H.p=2;var u=Ft;Ft|=4;try{wm(n,t);var f=Jf,_=P0(t.containerInfo),C=f.focusedElem,V=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&O0(C.ownerDocument.documentElement,C)){if(V!==null&&Su(C)){var ie=V.start,me=V.end;if(me===void 0&&(me=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(me,C.value.length);else{var xe=C.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var ue=ce.getSelection(),Ze=C.textContent.length,at=Math.min(V.start,Ze),Yt=V.end===void 0?at:Math.min(V.end,Ze);!ue.extend&&at>Yt&&(_=Yt,Yt=at,at=_);var j=N0(C,at),X=N0(C,Yt);if(j&&X&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var ne=xe.createRange();ne.setStart(j.node,j.offset),ue.removeAllRanges(),at>Yt?(ue.addRange(ne),ue.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),ue.addRange(ne))}}}}for(xe=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var ve=xe[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}fc=!!Qf,Jf=Qf=null}finally{Ft=u,H.p=l,F.T=a}}t.current=n,xn=2}}function Qm(){if(xn===2){xn=0;var t=ka,n=hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=H.p;H.p=2;var u=Ft;Ft|=4;try{bm(t,n.alternate,n)}finally{Ft=u,H.p=l,F.T=a}}xn=3}}function Jm(){if(xn===4||xn===3){xn=0,W();var t=ka,n=hs,a=da,l=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,hs=ka=null,jm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Ks(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<l.length;_++){var C=l[_];f(C.value,{componentStack:C.stack})}}finally{F.T=n,H.p=u}}(da&3)!==0&&$o(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===If?Rl++:(Rl=0,If=t):Rl=0,Cl(0)}}function jm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ol(n)))}function $o(){return Km(),Qm(),Jm(),$m()}function $m(){if(xn!==5)return!1;var t=ka,n=Pf;Pf=0;var a=Ks(da),l=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=Ff,Ff=null;var f=ka,_=da;if(xn=0,hs=ka=null,da=0,(Ft&6)!==0)throw Error(r(331));var C=Ft;if(Ft|=4,Om(f.current),Lm(f,f.current,_,a),Ft=C,Cl(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(he,f)}catch{}return!0}finally{H.p=u,F.T=l,jm(t,n)}}function e1(t,n,a){n=pi(a,n),n=mf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(Xe(t,2),Bi(t))}function Xt(t,n,a){if(t.tag===3)e1(t,t,a);else for(;n!==null;){if(n.tag===3){e1(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){t=pi(a,t),a=tm(2),l=Ia(n,a,2),l!==null&&(nm(a,l,n,t),Xe(l,2),Bi(l));break}}n=n.return}}function Hf(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new vv;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(a)||(Uf=!0,u.add(a),t=Ev.bind(null,t,n,a),n.then(t,t))}function Ev(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(bt&a)===a&&(on===4||on===3&&(bt&62914560)===bt&&300>Mt()-qo?(Ft&2)===0&&ds(t,0):Nf|=a,fs===bt&&(fs=0)),Bi(t)}function t1(t,n){n===0&&(n=be()),t=gr(t,n),t!==null&&(Xe(t,n),Bi(t))}function bv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),t1(t,a)}function Av(t,n){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),t1(t,a)}function Tv(t,n){return it(t,n)}var ec=null,ms=null,Vf=!1,tc=!1,Gf=!1,Za=0;function Bi(t){t!==ms&&t.next===null&&(ms===null?ec=ms=t:ms=ms.next=t),tc=!0,Vf||(Vf=!0,Cv())}function Cl(t,n){if(!Gf&&tc){Gf=!0;do for(var a=!1,l=ec;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var _=l.suspendedLanes,C=l.pingedLanes;f=(1<<31-He(42|t)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,r1(l,f))}else f=bt,f=_e(l,l===Qt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||De(l,f)||(a=!0,r1(l,f));l=l.next}while(a);Gf=!1}}function Rv(){n1()}function n1(){tc=Vf=!1;var t=0;Za!==0&&zv()&&(t=Za);for(var n=Mt(),a=null,l=ec;l!==null;){var u=l.next,f=i1(l,n);f===0?(l.next=null,a===null?ec=u:a.next=u,u===null&&(ms=a)):(a=l,(t!==0||(f&3)!==0)&&(tc=!0)),l=u}xn!==0&&xn!==5||Cl(t),Za!==0&&(Za=0)}function i1(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-He(f),C=1<<_,V=u[_];V===-1?((C&a)===0||(C&l)!==0)&&(u[_]=ze(C,n)):V<=n&&(t.expiredLanes|=C),f&=~C}if(n=Qt,a=bt,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ft(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(l!==null&&ft(l),Ks(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=fe;break;default:a=Q}return l=a1.bind(null,t),a=it(a,l),t.callbackPriority=n,t.callbackNode=a,n}return l!==null&&l!==null&&ft(l),t.callbackPriority=2,t.callbackNode=null,2}function a1(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($o()&&t.callbackNode!==a)return null;var l=bt;return l=_e(t,t===Qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Bm(t,l,n),i1(t,Mt()),t.callbackNode!=null&&t.callbackNode===a?a1.bind(null,t):null)}function r1(t,n){if($o())return null;Bm(t,n,!0)}function Cv(){Hv(function(){(Ft&6)!==0?it(L,Rv):n1()})}function Xf(){if(Za===0){var t=es;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),Za=t}return Za}function s1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hr(""+t)}function l1(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function wv(t,n,a,l,u){if(n==="submit"&&a&&a.stateNode===u){var f=s1((u[bn]||null).action),_=l.submitter;_&&(n=(n=_[bn]||null)?s1(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new ho("action","action",null,l,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Za!==0){var V=_?l1(u,_):new FormData(u);cf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(C.preventDefault(),V=_?l1(u,_):new FormData(u),cf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var kf=0;kf<Au.length;kf++){var Wf=Au[kf],Dv=Wf.toLowerCase(),Lv=Wf[0].toUpperCase()+Wf.slice(1);Ai(Dv,"on"+Lv)}Ai(z0,"onAnimationEnd"),Ai(B0,"onAnimationIteration"),Ai(H0,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(q2,"onTransitionRun"),Ai(Y2,"onTransitionStart"),Ai(K2,"onTransitionCancel"),Ai(V0,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function o1(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var _=l.length-1;0<=_;_--){var C=l[_],V=C.instance,ie=C.currentTarget;if(C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){go(me)}u.currentTarget=null,f=V}else for(_=0;_<l.length;_++){if(C=l[_],V=C.instance,ie=C.currentTarget,C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(me){go(me)}u.currentTarget=null,f=V}}}}function Et(t,n){var a=n[cr];a===void 0&&(a=n[cr]=new Set);var l=t+"__bubble";a.has(l)||(c1(n,t,2,!1),a.add(l))}function Zf(t,n,a){var l=0;n&&(l|=4),c1(a,t,l,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function qf(t){if(!t[nc]){t[nc]=!0,oo.forEach(function(a){a!=="selectionchange"&&(Uv.has(a)||Zf(a,!1,t),Zf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Zf("selectionchange",!1,n))}}function c1(t,n,a,l){switch(z1(n)){case 2:var u=sx;break;case 8:u=lx;break;default:u=oh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Yf(t,n,a,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var C=l.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=l.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=Qi(C),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){l=f=_;continue e}C=C.parentNode}}l=l.return}p0(function(){var ie=f,me=uu(a),xe=[];e:{var ce=G0.get(t);if(ce!==void 0){var ue=ho,Ze=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":ue=A2;break;case"focusin":Ze="focus",ue=gu;break;case"focusout":Ze="blur",ue=gu;break;case"beforeblur":case"afterblur":ue=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=_0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=d2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=C2;break;case z0:case B0:case H0:ue=g2;break;case V0:ue=D2;break;case"scroll":case"scrollend":ue=f2;break;case"wheel":ue=U2;break;case"copy":case"cut":case"paste":ue=v2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=x0;break;case"toggle":case"beforetoggle":ue=O2}var at=(n&4)!==0,Yt=!at&&(t==="scroll"||t==="scrollend"),j=at?ce!==null?ce+"Capture":null:ce;at=[];for(var X=ie,ne;X!==null;){var ve=X;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||j===null||(ve=Js(X,j),ve!=null&&at.push(Dl(X,ve,ne))),Yt)break;X=X.return}0<at.length&&(ce=new ue(ce,Ze,null,a,me),xe.push({event:ce,listeners:at}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ce&&a!==cu&&(Ze=a.relatedTarget||a.fromElement)&&(Qi(Ze)||Ze[kn]))break e;if((ue||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,ue?(Ze=a.relatedTarget||a.toElement,ue=ie,Ze=Ze?Qi(Ze):null,Ze!==null&&(Yt=c(Ze),at=Ze.tag,Ze!==Yt||at!==5&&at!==27&&at!==6)&&(Ze=null)):(ue=null,Ze=ie),ue!==Ze)){if(at=_0,ve="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(at=x0,ve="onPointerLeave",j="onPointerEnter",X="pointer"),Yt=ue==null?ce:fr(ue),ne=Ze==null?ce:fr(Ze),ce=new at(ve,X+"leave",ue,a,me),ce.target=Yt,ce.relatedTarget=ne,ve=null,Qi(me)===ie&&(at=new at(j,X+"enter",Ze,a,me),at.target=ne,at.relatedTarget=Yt,ve=at),Yt=ve,ue&&Ze)t:{for(at=Nv,j=ue,X=Ze,ne=0,ve=j;ve;ve=at(ve))ne++;ve=0;for(var tt=X;tt;tt=at(tt))ve++;for(;0<ne-ve;)j=at(j),ne--;for(;0<ve-ne;)X=at(X),ve--;for(;ne--;){if(j===X||X!==null&&j===X.alternate){at=j;break t}j=at(j),X=at(X)}at=null}else at=null;ue!==null&&u1(xe,ce,ue,at,!1),Ze!==null&&Yt!==null&&u1(xe,Yt,Ze,at,!0)}}e:{if(ce=ie?fr(ie):window,ue=ce.nodeName&&ce.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ce.type==="file")var Ot=R0;else if(A0(ce))if(C0)Ot=k2;else{Ot=G2;var Ke=V2}else ue=ce.nodeName,!ue||ue.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ie&&It(ie.elementType)&&(Ot=R0):Ot=X2;if(Ot&&(Ot=Ot(t,ie))){T0(xe,Ot,a,me);break e}Ke&&Ke(t,ce,ie),t==="focusout"&&ie&&ce.type==="number"&&ie.memoizedProps.value!=null&&St(ce,"number",ce.value)}switch(Ke=ie?fr(ie):window,t){case"focusin":(A0(Ke)||Ke.contentEditable==="true")&&(Zr=Ke,yu=ie,rl=null);break;case"focusout":rl=yu=Zr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,F0(xe,a,me);break;case"selectionchange":if(Z2)break;case"keydown":case"keyup":F0(xe,a,me)}var mt;if(vu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Wr?E0(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(M0&&a.locale!=="ko"&&(Wr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Wr&&(mt=m0()):(Da=me,du="value"in Da?Da.value:Da.textContent,Wr=!0)),Ke=ic(ie,At),0<Ke.length&&(At=new v0(At,t,null,a,me),xe.push({event:At,listeners:Ke}),mt?At.data=mt:(mt=b0(a),mt!==null&&(At.data=mt)))),(mt=F2?I2(t,a):z2(t,a))&&(At=ic(ie,"onBeforeInput"),0<At.length&&(Ke=new v0("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:At}),Ke.data=mt)),wv(xe,t,ie,a,me)}o1(xe,n)})}function Dl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",l=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Js(t,a),u!=null&&l.unshift(Dl(t,u,f)),u=Js(t,n),u!=null&&l.push(Dl(t,u,f))),t.tag===3)return l;t=t.return}return[]}function Nv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u1(t,n,a,l,u){for(var f=n._reactName,_=[];a!==null&&a!==l;){var C=a,V=C.alternate,ie=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||ie===null||(V=ie,u?(ie=Js(a,f),ie!=null&&_.unshift(Dl(a,ie,V))):u||(ie=Js(a,f),ie!=null&&_.push(Dl(a,ie,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ov=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function f1(t){return(typeof t=="string"?t:""+t).replace(Ov,`
`).replace(Pv,"")}function h1(t,n){return n=f1(n),f1(t)===n}function qt(t,n,a,l,u,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ti(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ti(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,l);break;case"style":bi(t,l,f);break;case"data":if(n!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=hr(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=hr(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ji);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=hr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ne(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ne(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Ne(t,a,l))}}function Kf(t,n,a,l,u,f){switch(a){case"style":bi(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?ti(t,l):(typeof l=="number"||typeof l=="bigint")&&ti(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,l,u);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ne(t,a,l)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,f,_,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),l&&qt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var C=f=_=u=null,V=null,ie=null;for(l in a)if(a.hasOwnProperty(l)){var me=a[l];if(me!=null)switch(l){case"name":u=me;break;case"type":_=me;break;case"checked":V=me;break;case"defaultChecked":ie=me;break;case"value":f=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:qt(t,n,l,me,a,null)}}Dn(t,f,C,V,ie,_,u,!1);return;case"select":Et("invalid",t),l=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":l=C;default:qt(t,n,u,C,a,null)}n=f,a=_,t.multiple=!!l,n!=null?vn(t,!!l,n,!1):a!=null&&vn(t,!!l,a,!0);return;case"textarea":Et("invalid",t),f=u=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":l=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:qt(t,n,_,C,a,null)}Ei(t,l,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:qt(t,n,V,l,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<wl.length;l++)Et(wl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(l=a[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,ie,l,a,null)}return;default:if(It(n)){for(me in a)a.hasOwnProperty(me)&&(l=a[me],l!==void 0&&Kf(t,n,me,l,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(l=a[C],l!=null&&qt(t,n,C,l,a,null))}function Fv(t,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,V=null,ie=null,me=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":V=xe;default:l.hasOwnProperty(ue)||qt(t,n,ue,null,l,xe)}}for(var ce in l){var ue=l[ce];if(xe=a[ce],l.hasOwnProperty(ce)&&(ue!=null||xe!=null))switch(ce){case"type":f=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":me=ue;break;case"value":_=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==xe&&qt(t,n,ce,ue,l,xe)}}Ve(t,_,C,V,ie,me,f,u);return;case"select":ue=_=C=ce=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ue=V;default:l.hasOwnProperty(f)||qt(t,n,f,null,l,V)}for(u in l)if(f=l[u],V=a[u],l.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ce=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==V&&qt(t,n,u,f,l,V)}n=C,a=_,l=ue,ce!=null?vn(t,!!a,ce,!1):!!l!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ue=ce=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,l,u)}for(_ in l)if(u=l[_],f=a[_],l.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&qt(t,n,_,u,l,f)}ei(t,ce,ue);return;case"option":for(var Ze in a)if(ce=a[Ze],a.hasOwnProperty(Ze)&&ce!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:qt(t,n,Ze,null,l,ce)}for(V in l)if(ce=l[V],ue=a[V],l.hasOwnProperty(V)&&ce!==ue&&(ce!=null||ue!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:qt(t,n,V,ce,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)ce=a[at],a.hasOwnProperty(at)&&ce!=null&&!l.hasOwnProperty(at)&&qt(t,n,at,null,l,ce);for(ie in l)if(ce=l[ie],ue=a[ie],l.hasOwnProperty(ie)&&ce!==ue&&(ce!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:qt(t,n,ie,ce,l,ue)}return;default:if(It(n)){for(var Yt in a)ce=a[Yt],a.hasOwnProperty(Yt)&&ce!==void 0&&!l.hasOwnProperty(Yt)&&Kf(t,n,Yt,void 0,l,ce);for(me in l)ce=l[me],ue=a[me],!l.hasOwnProperty(me)||ce===ue||ce===void 0&&ue===void 0||Kf(t,n,me,ce,l,ue);return}}for(var j in a)ce=a[j],a.hasOwnProperty(j)&&ce!=null&&!l.hasOwnProperty(j)&&qt(t,n,j,null,l,ce);for(xe in l)ce=l[xe],ue=a[xe],!l.hasOwnProperty(xe)||ce===ue||ce==null&&ue==null||qt(t,n,xe,ce,l,ue)}function d1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&d1(_)){for(_=0,C=u.responseEnd,l+=1;l<a.length;l++){var V=a[l],ie=V.startTime;if(ie>C)break;var me=V.transferSize,xe=V.initiatorType;me&&d1(xe)&&(V=V.responseEnd,_+=me*(V<C?1:(C-ie)/(V-ie)))}if(--l,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qf=null,Jf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function p1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m1(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function zv(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var g1=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,_1=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof _1<"u"?function(t){return _1.resolve(null).then(t).catch(Vv)}:g1;function Vv(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function v1(t,n){var a=n,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(u),xs(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ll(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ll(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[Ta]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ll(t.ownerDocument.body);a=u}while(a);xs(n)}function x1(t,n){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Ra(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gv(t,n,a,l){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function Xv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function M1(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function S1(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function y1(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function E1(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ll(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ra(t)}var Mi=new Map,b1=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=H.d;H.d={f:Wv,r:Zv,D:qv,C:Yv,L:Kv,m:Qv,X:jv,S:Jv,M:$v};function Wv(){var t=pa.f(),n=Qo();return t||n}function Zv(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?Vp(n):pa.r(t)}var gs=typeof document>"u"?null:document;function A1(t,n,a){var l=gs;if(l&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),b1.has(u)||(b1.add(u),t={rel:t,crossOrigin:a,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Cn(n,"link",t),hn(n),l.head.appendChild(n)))}}function qv(t){pa.D(t),A1("dns-prefetch",t,null)}function Yv(t,n){pa.C(t,n),A1("preconnect",t,n)}function Kv(t,n,a){pa.L(t,n,a);var l=gs;if(l&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}Mi.has(f)||(t=M({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),l.querySelector(u)!==null||n==="style"&&l.querySelector(Ul(f))||n==="script"&&l.querySelector(Nl(f))||(n=l.createElement("link"),Cn(n,"link",t),hn(n),l.head.appendChild(n)))}}function Qv(t,n){pa.m(t,n);var a=gs;if(a&&t){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(t)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!Mi.has(f)&&(t=M({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(f)))return}l=a.createElement("link"),Cn(l,"link",t),hn(l),a.head.appendChild(l)}}}function Jv(t,n,a){pa.S(t,n,a);var l=gs;if(l&&t){var u=Ca(l).hoistableStyles,f=_s(t);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=l.querySelector(Ul(f)))C.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&ah(t,a);var V=_=l.createElement("link");hn(V),Cn(V,"link",t),V._p=new Promise(function(ie,me){V.onload=ie,V.onerror=me}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,sc(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function jv(t,n){pa.X(t,n);var a=gs;if(a&&t){var l=Ca(a).hoistableScripts,u=vs(t),f=l.get(u);f||(f=a.querySelector(Nl(u)),f||(t=M({src:t,async:!0},n),(n=Mi.get(u))&&rh(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function $v(t,n){pa.M(t,n);var a=gs;if(a&&t){var l=Ca(a).hoistableScripts,u=vs(t),f=l.get(u);f||(f=a.querySelector(Nl(u)),f||(t=M({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&rh(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function T1(t,n,a,l){var u=(u=se.current)?rc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=Ca(u).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=Ca(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Ul(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||ex(u,t,a,_.state))),n&&l===null)throw Error(r(528,""));return _}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=Ca(u).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+Ht(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function R1(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function ex(t,n,a,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Cn(n,"link",a),hn(n),t.head.appendChild(n))}function vs(t){return'[src="'+Ht(t)+'"]'}function Nl(t){return"script[async]"+t}function C1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(l)return n.instance=l,hn(l),l;var u=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),hn(l),Cn(l,"style",u),sc(l,a.precedence,t),n.instance=l;case"stylesheet":u=_s(a.href);var f=t.querySelector(Ul(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;l=R1(a),(u=Mi.get(u))&&ah(l,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(C,V){_.onload=C,_.onerror=V}),Cn(f,"link",l),n.state.loading|=4,sc(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(Nl(f)))?(n.instance=u,hn(u),u):(l=a,(u=Mi.get(f))&&(l=M({},a),rh(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Cn(u,"link",l),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,sc(l,a.precedence,t));return n.instance}function sc(t,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,_=0;_<l.length;_++){var C=l[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var lc=null;function w1(t,n,a){if(lc===null){var l=new Map,u=lc=new Map;u.set(a,l)}else u=lc,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var C=l.get(_);C?C.push(f):l.set(_,[f])}}return l}function D1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function L1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nx(t,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(l.href),f=n.querySelector(Ul(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=oc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,l=R1(l),(u=Mi.get(u))&&ah(l,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(C,V){_.onload=C,_.onerror=V}),Cn(f,"link",l),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=oc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function ix(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&sh===0&&(sh=62500*Iv());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>sh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(ax,t),cc=null,oc.call(t))}function ax(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var l=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||l,f===l&&a.set(null,u),a.set(_,u),this.count++,l=oc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ol={$$typeof:B,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function rx(t,n,a,l,u,f,_,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function U1(t,n,a,l,u,f,_,C,V,ie,me,xe){return t=new rx(t,n,a,_,V,ie,me,xe,C),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Gu(f),t}function N1(t){return t?(t=Kr,t):Kr}function O1(t,n,a,l,u,f){u=N1(u),l.context===null?l.context=u:l.pendingContext=u,l=Fa(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Ia(t,l,n),a!==null&&(Qn(a,t,n),hl(a,t,n))}function P1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function lh(t,n){P1(t,n),(t=t.alternate)&&P1(t,n)}function F1(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Qn(n,t,67108864),lh(t,67108864)}}function I1(t){if(t.tag===13||t.tag===31){var n=oi();n=Ys(n);var a=gr(t,n);a!==null&&Qn(a,t,n),lh(t,n)}}var fc=!0;function sx(t,n,a,l){var u=F.T;F.T=null;var f=H.p;try{H.p=2,oh(t,n,a,l)}finally{H.p=f,F.T=u}}function lx(t,n,a,l){var u=F.T;F.T=null;var f=H.p;try{H.p=8,oh(t,n,a,l)}finally{H.p=f,F.T=u}}function oh(t,n,a,l){if(fc){var u=ch(l);if(u===null)Yf(t,n,l,hc,a),B1(t,l);else if(cx(u,t,n,a,l))l.stopPropagation();else if(B1(t,l),n&4&&-1<ox.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ce(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var V=1<<31-He(_);C.entanglements[1]|=V,_&=~V}Bi(f),(Ft&6)===0&&(Yo=Mt()+500,Cl(0))}}break;case 31:case 13:C=gr(f,2),C!==null&&Qn(C,f,2),Qo(),lh(f,2)}if(f=ch(l),f===null&&Yf(t,n,l,hc,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else Yf(t,n,l,null,a)}}function ch(t){return t=uu(t),uh(t)}var hc=null;function uh(t){if(hc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hc=t,null}function z1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pt()){case L:return 2;case E:return 8;case Q:case le:return 32;case fe:return 268435456;default:return 32}default:return 32}}var fh=!1,Ya=null,Ka=null,Qa=null,Pl=new Map,Fl=new Map,Ja=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B1(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(n.pointerId)}}function Il(t,n,a,l,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&F1(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function cx(t,n,a,l,u){switch(n){case"focusin":return Ya=Il(Ya,t,n,a,l,u),!0;case"dragenter":return Ka=Il(Ka,t,n,a,l,u),!0;case"mouseover":return Qa=Il(Qa,t,n,a,l,u),!0;case"pointerover":var f=u.pointerId;return Pl.set(f,Il(Pl.get(f)||null,t,n,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Fl.set(f,Il(Fl.get(f)||null,t,n,a,l,u)),!0}return!1}function H1(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){I1(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){I1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);cu=l,a.target.dispatchEvent(l),cu=null}else return n=Ji(a),n!==null&&F1(n),t.blockedOn=a,!1;n.shift()}return!0}function V1(t,n,a){dc(t)&&a.delete(n)}function ux(){fh=!1,Ya!==null&&dc(Ya)&&(Ya=null),Ka!==null&&dc(Ka)&&(Ka=null),Qa!==null&&dc(Qa)&&(Qa=null),Pl.forEach(V1),Fl.forEach(V1)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ux)))}var mc=null;function G1(t){mc!==t&&(mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],l=t[n+1],u=t[n+2];if(typeof l!="function"){if(uh(l||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function xs(t){function n(V){return pc(V,t)}Ya!==null&&pc(Ya,t),Ka!==null&&pc(Ka,t),Qa!==null&&pc(Qa,t),Pl.forEach(n),Fl.forEach(n);for(var a=0;a<Ja.length;a++){var l=Ja[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)H1(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],_=u[bn]||null;if(typeof f=="function")_||G1(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[bn]||null)C=_.formAction;else if(uh(u)!==null)continue}else C=_.action;typeof C=="function"?a[l+1]=C:(a.splice(l,3),l-=3),G1(a)}}}function X1(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(t){this._internalRoot=t}gc.prototype.render=hh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=oi();O1(a,l,t,n,null,null)},gc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;O1(t.current,2,null,t,null,null),Qo(),n[kn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Qs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&H1(t)}};var k1=e.version;if(k1!=="19.2.0")throw Error(r(527,k1,"19.2.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var fx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{he=_c.inject(fx),de=_c}catch{}}return Bl.createRoot=function(t,n){if(!o(t))throw Error(r(299));var a=!1,l="",u=Jp,f=jp,_=$p;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=U1(t,1,!1,null,null,a,l,null,u,f,_,X1),t[kn]=n.current,qf(t),new hh(n)},Bl.hydrateRoot=function(t,n,a){if(!o(t))throw Error(r(299));var l=!1,u="",f=Jp,_=jp,C=$p,V=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=U1(t,1,!0,n,a??null,l,u,V,f,_,C,X1),n.context=N1(null),a=n.current,l=oi(),l=Ys(l),u=Fa(l),u.callback=null,Ia(a,u,l),a=l,n.current.lanes=a,Xe(n,a),Bi(n),t[kn]=n.current,qf(t),new gc(n)},Bl.version="19.2.0",Bl}var eg;function Ex(){if(eg)return mh.exports;eg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mh.exports=yx(),mh.exports}var bx=Ex();const Ax=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),R.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"}))]]),Tx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),R.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Rx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),R.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z"}))]]),Cx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),R.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),wx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",opacity:"0.2"}),R.createElement("path",{d:"M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z"}))]]),Dx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),R.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),Lx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm92-27.21v-1.58l14-17.51a12,12,0,0,0,2.23-10.59A111.75,111.75,0,0,0,225,71.89,12,12,0,0,0,215.89,66L193.61,63.5l-1.11-1.11L190,40.1A12,12,0,0,0,184.11,31a111.67,111.67,0,0,0-27.23-11.27A12,12,0,0,0,146.3,22L128.79,36h-1.58L109.7,22a12,12,0,0,0-10.59-2.23A111.75,111.75,0,0,0,71.89,31.05,12,12,0,0,0,66,40.11L63.5,62.39,62.39,63.5,40.1,66A12,12,0,0,0,31,71.89,111.67,111.67,0,0,0,19.77,99.12,12,12,0,0,0,22,109.7l14,17.51v1.58L22,146.3a12,12,0,0,0-2.23,10.59,111.75,111.75,0,0,0,11.29,27.22A12,12,0,0,0,40.11,190l22.28,2.48,1.11,1.11L66,215.9A12,12,0,0,0,71.89,225a111.67,111.67,0,0,0,27.23,11.27A12,12,0,0,0,109.7,234l17.51-14h1.58l17.51,14a12,12,0,0,0,10.59,2.23A111.75,111.75,0,0,0,184.11,225a12,12,0,0,0,5.91-9.06l2.48-22.28,1.11-1.11L215.9,190a12,12,0,0,0,9.06-5.91,111.67,111.67,0,0,0,11.27-27.23A12,12,0,0,0,234,146.3Zm-24.12-4.89a70.1,70.1,0,0,1,0,8.2,12,12,0,0,0,2.61,8.22l12.84,16.05A86.47,86.47,0,0,1,207,166.86l-20.43,2.27a12,12,0,0,0-7.65,4,69,69,0,0,1-5.8,5.8,12,12,0,0,0-4,7.65L166.86,207a86.47,86.47,0,0,1-10.49,4.35l-16.05-12.85a12,12,0,0,0-7.5-2.62c-.24,0-.48,0-.72,0a70.1,70.1,0,0,1-8.2,0,12.06,12.06,0,0,0-8.22,2.6L99.63,211.33A86.47,86.47,0,0,1,89.14,207l-2.27-20.43a12,12,0,0,0-4-7.65,69,69,0,0,1-5.8-5.8,12,12,0,0,0-7.65-4L49,166.86a86.47,86.47,0,0,1-4.35-10.49l12.84-16.05a12,12,0,0,0,2.61-8.22,70.1,70.1,0,0,1,0-8.2,12,12,0,0,0-2.61-8.22L44.67,99.63A86.47,86.47,0,0,1,49,89.14l20.43-2.27a12,12,0,0,0,7.65-4,69,69,0,0,1,5.8-5.8,12,12,0,0,0,4-7.65L89.14,49a86.47,86.47,0,0,1,10.49-4.35l16.05,12.85a12.06,12.06,0,0,0,8.22,2.6,70.1,70.1,0,0,1,8.2,0,12,12,0,0,0,8.22-2.6l16.05-12.85A86.47,86.47,0,0,1,166.86,49l2.27,20.43a12,12,0,0,0,4,7.65,69,69,0,0,1,5.8,5.8,12,12,0,0,0,7.65,4L207,89.14a86.47,86.47,0,0,1,4.35,10.49l-12.84,16.05A12,12,0,0,0,195.88,123.9Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),R.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM214,130.84c.06-1.89.06-3.79,0-5.68L229.33,106a6,6,0,0,0,1.11-5.29A105.34,105.34,0,0,0,219.76,74.9a6,6,0,0,0-4.53-3l-24.45-2.71q-1.93-2.07-4-4l-2.72-24.46a6,6,0,0,0-3-4.53,105.65,105.65,0,0,0-25.77-10.66A6,6,0,0,0,150,26.68l-19.2,15.37c-1.89-.06-3.79-.06-5.68,0L106,26.67a6,6,0,0,0-5.29-1.11A105.34,105.34,0,0,0,74.9,36.24a6,6,0,0,0-3,4.53L69.23,65.22q-2.07,1.94-4,4L40.76,72a6,6,0,0,0-4.53,3,105.65,105.65,0,0,0-10.66,25.77A6,6,0,0,0,26.68,106l15.37,19.2c-.06,1.89-.06,3.79,0,5.68L26.67,150.05a6,6,0,0,0-1.11,5.29A105.34,105.34,0,0,0,36.24,181.1a6,6,0,0,0,4.53,3l24.45,2.71q1.94,2.07,4,4L72,215.24a6,6,0,0,0,3,4.53,105.65,105.65,0,0,0,25.77,10.66,6,6,0,0,0,5.29-1.11L125.16,214c1.89.06,3.79.06,5.68,0l19.21,15.38a6,6,0,0,0,3.75,1.31,6.2,6.2,0,0,0,1.54-.2,105.34,105.34,0,0,0,25.76-10.68,6,6,0,0,0,3-4.53l2.71-24.45q2.07-1.93,4-4l24.46-2.72a6,6,0,0,0,4.53-3,105.49,105.49,0,0,0,10.66-25.77,6,6,0,0,0-1.11-5.29Zm-3.1,41.63-23.64,2.63a6,6,0,0,0-3.82,2,75.14,75.14,0,0,1-6.31,6.31,6,6,0,0,0-2,3.82l-2.63,23.63A94.28,94.28,0,0,1,155.14,218l-18.57-14.86a6,6,0,0,0-3.75-1.31h-.36a78.07,78.07,0,0,1-8.92,0,6,6,0,0,0-4.11,1.3L100.87,218a94.13,94.13,0,0,1-17.34-7.17L80.9,187.21a6,6,0,0,0-2-3.82,75.14,75.14,0,0,1-6.31-6.31,6,6,0,0,0-3.82-2l-23.63-2.63A94.28,94.28,0,0,1,38,155.14l14.86-18.57a6,6,0,0,0,1.3-4.11,78.07,78.07,0,0,1,0-8.92,6,6,0,0,0-1.3-4.11L38,100.87a94.13,94.13,0,0,1,7.17-17.34L68.79,80.9a6,6,0,0,0,3.82-2,75.14,75.14,0,0,1,6.31-6.31,6,6,0,0,0,2-3.82l2.63-23.63A94.28,94.28,0,0,1,100.86,38l18.57,14.86a6,6,0,0,0,4.11,1.3,78.07,78.07,0,0,1,8.92,0,6,6,0,0,0,4.11-1.3L155.13,38a94.13,94.13,0,0,1,17.34,7.17l2.63,23.64a6,6,0,0,0,2,3.82,75.14,75.14,0,0,1,6.31,6.31,6,6,0,0,0,3.82,2l23.63,2.63A94.28,94.28,0,0,1,218,100.86l-14.86,18.57a6,6,0,0,0-1.3,4.11,78.07,78.07,0,0,1,0,8.92,6,6,0,0,0,1.3,4.11L218,155.13A94.13,94.13,0,0,1,210.85,172.47Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm83.93-32.49q.13-3.51,0-7l15.83-19.79a4,4,0,0,0,.75-3.53A103.64,103.64,0,0,0,218,75.9a4,4,0,0,0-3-2l-25.19-2.8c-1.58-1.71-3.24-3.37-4.95-4.95L182.07,41a4,4,0,0,0-2-3A104,104,0,0,0,154.82,27.5a4,4,0,0,0-3.53.74L131.51,44.07q-3.51-.14-7,0L104.7,28.24a4,4,0,0,0-3.53-.75A103.64,103.64,0,0,0,75.9,38a4,4,0,0,0-2,3l-2.8,25.19c-1.71,1.58-3.37,3.24-4.95,4.95L41,73.93a4,4,0,0,0-3,2A104,104,0,0,0,27.5,101.18a4,4,0,0,0,.74,3.53l15.83,19.78q-.14,3.51,0,7L28.24,151.3a4,4,0,0,0-.75,3.53A103.64,103.64,0,0,0,38,180.1a4,4,0,0,0,3,2l25.19,2.8c1.58,1.71,3.24,3.37,4.95,4.95l2.8,25.2a4,4,0,0,0,2,3,104,104,0,0,0,25.28,10.46,4,4,0,0,0,3.53-.74l19.78-15.83q3.51.13,7,0l19.79,15.83a4,4,0,0,0,2.5.88,4,4,0,0,0,1-.13A103.64,103.64,0,0,0,180.1,218a4,4,0,0,0,2-3l2.8-25.19c1.71-1.58,3.37-3.24,4.95-4.95l25.2-2.8a4,4,0,0,0,3-2,104,104,0,0,0,10.46-25.28,4,4,0,0,0-.74-3.53Zm.17,42.83-24.67,2.74a4,4,0,0,0-2.55,1.32,76.2,76.2,0,0,1-6.48,6.48,4,4,0,0,0-1.32,2.55l-2.74,24.66a95.45,95.45,0,0,1-19.64,8.15l-19.38-15.51a4,4,0,0,0-2.5-.87h-.24a73.67,73.67,0,0,1-9.16,0,4,4,0,0,0-2.74.87l-19.37,15.5a95.33,95.33,0,0,1-19.65-8.13l-2.74-24.67a4,4,0,0,0-1.32-2.55,76.2,76.2,0,0,1-6.48-6.48,4,4,0,0,0-2.55-1.32l-24.66-2.74a95.45,95.45,0,0,1-8.15-19.64l15.51-19.38a4,4,0,0,0,.87-2.74,77.76,77.76,0,0,1,0-9.16,4,4,0,0,0-.87-2.74l-15.5-19.37A95.33,95.33,0,0,1,43.9,81.66l24.67-2.74a4,4,0,0,0,2.55-1.32,76.2,76.2,0,0,1,6.48-6.48,4,4,0,0,0,1.32-2.55l2.74-24.66a95.45,95.45,0,0,1,19.64-8.15l19.38,15.51a4,4,0,0,0,2.74.87,73.67,73.67,0,0,1,9.16,0,4,4,0,0,0,2.74-.87l19.37-15.5a95.33,95.33,0,0,1,19.65,8.13l2.74,24.67a4,4,0,0,0,1.32,2.55,76.2,76.2,0,0,1,6.48,6.48,4,4,0,0,0,2.55,1.32l24.66,2.74a95.45,95.45,0,0,1,8.15,19.64l-15.51,19.38a4,4,0,0,0-.87,2.74,77.76,77.76,0,0,1,0,9.16,4,4,0,0,0,.87,2.74l15.5,19.37A95.33,95.33,0,0,1,212.1,174.34Z"}))]]),Ux=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),R.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),Nx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),R.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),Ox=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),R.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),Px=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"}),R.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"}))]]),Fx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),R.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),Ix=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M238.15,70.54,185.46,17.86a20,20,0,0,0-28.29,0L17.85,157.17a20,20,0,0,0,0,28.29l52.69,52.68a20,20,0,0,0,28.29,0L238.15,98.83A20,20,0,0,0,238.15,70.54ZM84.68,218.34l-47-47L64,145l23.52,23.52a12,12,0,0,0,17-17L81,128l15-15,23.51,23.52a12,12,0,0,0,17-17L113,96l15-15,23.52,23.52a12,12,0,0,0,17-17L145,64l26.35-26.34,47,47Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M229.66,90.34,90.34,229.66a8,8,0,0,1-11.31,0L26.34,177a8,8,0,0,1,0-11.31L165.66,26.34a8,8,0,0,1,11.31,0L229.66,79A8,8,0,0,1,229.66,90.34Z",opacity:"0.2"}),R.createElement("path",{d:"M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M235.32,96,96,235.31a16,16,0,0,1-22.63,0L20.68,182.63a16,16,0,0,1,0-22.63l29.17-29.17a4,4,0,0,1,5.66,0l34.83,34.83a8,8,0,0,0,11.71-.43,8.18,8.18,0,0,0-.6-11.09L66.82,119.51a4,4,0,0,1,0-5.65l15-15a4,4,0,0,1,5.66,0l34.83,34.83a8,8,0,0,0,11.71-.43,8.18,8.18,0,0,0-.6-11.09L98.83,87.51a4,4,0,0,1,0-5.65l15-15a4,4,0,0,1,5.65,0l34.83,34.83a8,8,0,0,0,11.72-.43,8.18,8.18,0,0,0-.61-11.09L130.83,55.51a4,4,0,0,1,0-5.65L160,20.69a16,16,0,0,1,22.63,0l52.69,52.68A16,16,0,0,1,235.32,96Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M233.91,74.79,181.22,22.1a14,14,0,0,0-19.8,0L22.09,161.41a14,14,0,0,0,0,19.8L74.78,233.9a14,14,0,0,0,19.8,0L233.91,94.59A14,14,0,0,0,233.91,74.79ZM225.42,86.1,86.1,225.41h0a2,2,0,0,1-2.83,0L30.58,172.73a2,2,0,0,1,0-2.83L64,136.48l27.76,27.76a6,6,0,1,0,8.48-8.48L72.48,128,96,104.48l27.76,27.76a6,6,0,0,0,8.48-8.48L104.48,96,128,72.49l27.76,27.75a6,6,0,0,0,8.48-8.48L136.49,64,169.9,30.59a2,2,0,0,1,2.83,0l52.69,52.68A2,2,0,0,1,225.42,86.1Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M235.32,73.37,182.63,20.69a16,16,0,0,0-22.63,0L20.68,160a16,16,0,0,0,0,22.63l52.69,52.68a16,16,0,0,0,22.63,0L235.32,96A16,16,0,0,0,235.32,73.37ZM84.68,224,32,171.31l32-32,26.34,26.35a8,8,0,0,0,11.32-11.32L75.31,128,96,107.31l26.34,26.35a8,8,0,0,0,11.32-11.32L107.31,96,128,75.31l26.34,26.35a8,8,0,0,0,11.32-11.32L139.31,64l32-32L224,84.69Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M232.49,76.2,179.8,23.51a12,12,0,0,0-17,0L23.51,162.83a12,12,0,0,0,0,17L76.2,232.49a12,12,0,0,0,17,0L232.49,93.17A12,12,0,0,0,232.49,76.2Zm-5.66,11.31L87.51,226.83a4,4,0,0,1-5.65,0L29.17,174.14a4,4,0,0,1,0-5.65L64,133.66l29.17,29.17a4,4,0,1,0,5.66-5.66L69.65,128,96,101.66l29.17,29.17a4,4,0,0,0,5.66-5.66L101.65,96,128,69.66l29.17,29.17a4,4,0,1,0,5.66-5.66L133.66,64l34.83-34.83a4,4,0,0,1,5.65,0l52.69,52.69A4,4,0,0,1,226.83,87.51Z"}))]]),zx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",opacity:"0.2"}),R.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z"}))]]),Bx=new Map([["bold",R.createElement(R.Fragment,null,R.createElement("path",{d:"M212,52a32,32,0,1,0,32,32A32,32,0,0,0,212,52Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,212,92ZM160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V92a12,12,0,0,1,24,0v75.22A24,24,0,0,1,132,188Z"}))],["duotone",R.createElement(R.Fragment,null,R.createElement("path",{d:"M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z",opacity:"0.2"}),R.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"}))],["fill",R.createElement(R.Fragment,null,R.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,104H104V40a16,16,0,0,1,32,0Z"}))],["light",R.createElement(R.Fragment,null,R.createElement("path",{d:"M212,58a26,26,0,1,0,26,26A26,26,0,0,0,212,58Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,212,98Zm-86,56.6V88a6,6,0,0,0-12,0v66.6a30,30,0,1,0,12,0ZM120,202a18,18,0,1,1,18-18A18,18,0,0,1,120,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,94,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,120,234Z"}))],["regular",R.createElement(R.Fragment,null,R.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"}))],["thin",R.createElement(R.Fragment,null,R.createElement("path",{d:"M212,60a24,24,0,1,0,24,24A24,24,0,0,0,212,60Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,212,100Zm-88,56.29V88a4,4,0,0,0-8,0v68.29a28,28,0,1,0,8,0ZM120,204a20,20,0,1,1,20-20A20,20,0,0,1,120,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM120,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,92,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,120,236Z"}))]]),Hx=R.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),zn=R.forwardRef((s,e)=>{const{alt:i,color:r,size:o,weight:c,mirrored:h,children:p,weights:m,...d}=s,{color:v="currentColor",size:M,weight:g="regular",mirrored:S=!1,...A}=R.useContext(Hx);return R.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:o??M,height:o??M,fill:r??v,viewBox:"0 0 256 256",transform:h||S?"scale(-1, 1)":void 0,...A,...d},!!i&&R.createElement("title",null,i),p,m.get(c??g))});zn.displayName="IconBase";const h_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Ax}));h_.displayName="ArrowCounterClockwiseIcon";const Vx=h_,d_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Tx}));d_.displayName="ArrowRightIcon";const Gx=d_,p_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Rx}));p_.displayName="CircleIcon";const tg=p_,m_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Cx}));m_.displayName="ClockIcon";const Xx=m_,g_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:wx}));g_.displayName="CubeIcon";const kx=g_,__=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Dx}));__.displayName="DatabaseIcon";const ng=__,v_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Lx}));v_.displayName="GearIcon";const Wx=v_,x_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Ux}));x_.displayName="MagnifyingGlassIcon";const Zx=x_,M_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Nx}));M_.displayName="MinusIcon";const qx=M_,S_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Ox}));S_.displayName="PlanetIcon";const ig=S_,y_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Px}));y_.displayName="PlayIcon";const Yx=y_,E_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Fx}));E_.displayName="PlusIcon";const Kx=E_,b_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Ix}));b_.displayName="RulerIcon";const Qx=b_,A_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:zx}));A_.displayName="SlidersHorizontalIcon";const Jx=A_,T_=R.forwardRef((s,e)=>R.createElement(zn,{ref:e,...s,weights:Bx}));T_.displayName="ThermometerIcon";const jx=T_;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="185",$x=0,ag=1,eM=2,kc=1,tM=2,ql=3,lr=0,Gn=1,Xi=2,ya=0,zs=1,$h=2,rg=3,sg=4,nM=5,Or=100,iM=101,aM=102,rM=103,sM=104,lM=200,oM=201,cM=202,uM=203,ed=204,td=205,fM=206,hM=207,dM=208,pM=209,mM=210,gM=211,_M=212,vM=213,xM=214,nd=0,id=1,ad=2,Vs=3,rd=4,sd=5,ld=6,od=7,R_=0,MM=1,SM=2,Zi=0,C_=1,w_=2,D_=3,L_=4,U_=5,N_=6,O_=7,P_=300,zr=301,Gs=302,xh=303,Mh=304,au=306,cd=1e3,Sa=1001,ud=1002,wn=1003,yM=1004,vc=1005,On=1006,Sh=1007,Fr=1008,hi=1009,F_=1010,I_=1011,jl=1012,Yd=1013,Yi=1014,ki=1015,ba=1016,Kd=1017,Qd=1018,$l=1020,z_=35902,B_=35899,H_=1021,V_=1022,Ui=1023,Aa=1026,Ir=1027,G_=1028,Jd=1029,Br=1030,jd=1031,$d=1033,Wc=33776,Zc=33777,qc=33778,Yc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,Qc=37490,Md=37491,Sd=37808,yd=37809,Ed=37810,bd=37811,Ad=37812,Td=37813,Rd=37814,Cd=37815,wd=37816,Dd=37817,Ld=37818,Ud=37819,Nd=37820,Od=37821,Pd=36492,Fd=36494,Id=36495,zd=36283,Bd=36284,Jc=36285,Hd=36286,EM=3200,Vd=0,bM=1,rr="",Jn="srgb",jc="srgb-linear",$c="linear",kt="srgb",Ms=7680,lg=519,AM=512,TM=513,RM=514,e0=515,CM=516,wM=517,t0=518,DM=519,og=35044,cg="300 es",Wi=2e3,eo=2001;function LM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function to(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function UM(){const s=to("canvas");return s.style.display="block",s}const ug={};function fg(...s){const e="THREE."+s.shift();console.log(e,...s)}function X_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=X_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Ut(...s){s=X_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Bs(...s){const e=s.join(" ");e in ug||(ug[e]=!0,rt(...s))}function NM(s,e,i){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const OM={[nd]:id,[ad]:ld,[rd]:od,[Vs]:sd,[id]:nd,[ld]:ad,[od]:rd,[sd]:Vs};class Hr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,h=o.length;c<h;c++)o[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const Kl=Math.PI/180,no=180/Math.PI;function Ws(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Tt(s,e,i){return Math.max(e,Math.min(i,s))}function n0(s,e){return(s%e+e)%e}function PM(s,e,i,r,o){return r+(s-e)*(o-r)/(i-e)}function FM(s,e,i){return s!==e?(i-s)/(e-s):0}function Ql(s,e,i){return(1-i)*s+i*e}function IM(s,e,i,r){return Ql(s,e,1-Math.exp(-i*r))}function zM(s,e=1){return e-Math.abs(n0(s,e*2)-e)}function BM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function HM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function VM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function GM(s,e){return s+Math.random()*(e-s)}function XM(s){return s*(.5-Math.random())}function kM(s){s!==void 0&&(hg=s);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WM(s){return s*Kl}function ZM(s){return s*no}function qM(s){return(s&s-1)===0&&s!==0}function YM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function KM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function QM(s,e,i,r,o){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+r)/2),v=h((e+r)/2),M=c((e-r)/2),g=h((e-r)/2),S=c((r-e)/2),A=h((r-e)/2);switch(o){case"XYX":s.set(p*v,m*M,m*g,p*d);break;case"YZY":s.set(m*g,p*v,m*M,p*d);break;case"ZXZ":s.set(m*M,m*g,p*v,p*d);break;case"XZX":s.set(p*v,m*A,m*S,p*d);break;case"YXY":s.set(m*S,p*v,m*A,p*d);break;case"ZYZ":s.set(m*A,m*S,p*v,p*d);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Fs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const JM={DEG2RAD:Kl,RAD2DEG:no,generateUUID:Ws,clamp:Tt,euclideanModulo:n0,mapLinear:PM,inverseLerp:FM,lerp:Ql,damp:IM,pingpong:zM,smoothstep:BM,smootherstep:HM,randInt:VM,randFloat:GM,randFloatSpread:XM,seededRandom:kM,degToRad:WM,radToDeg:ZM,isPowerOfTwo:qM,ceilPowerOfTwo:YM,floorPowerOfTwo:KM,setQuaternionFromProperEuler:QM,normalize:Hn,denormalize:Fs},o0=class o0{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*o+e.x,this.y=c*o+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};o0.prototype.isVector2=!0;let Rt=o0;class Zs{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,h,p){let m=r[o+0],d=r[o+1],v=r[o+2],M=r[o+3],g=c[h+0],S=c[h+1],A=c[h+2],D=c[h+3];if(M!==D||m!==g||d!==S||v!==A){let y=m*g+d*S+v*A+M*D;y<0&&(g=-g,S=-S,A=-A,D=-D,y=-y);let x=1-p;if(y<.9995){const O=Math.acos(y),B=Math.sin(O);x=Math.sin(x*O)/B,p=Math.sin(p*O)/B,m=m*x+g*p,d=d*x+S*p,v=v*x+A*p,M=M*x+D*p}else{m=m*x+g*p,d=d*x+S*p,v=v*x+A*p,M=M*x+D*p;const O=1/Math.sqrt(m*m+d*d+v*v+M*M);m*=O,d*=O,v*=O,M*=O}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=M}static multiplyQuaternionsFlat(e,i,r,o,c,h){const p=r[o],m=r[o+1],d=r[o+2],v=r[o+3],M=c[h],g=c[h+1],S=c[h+2],A=c[h+3];return e[i]=p*A+v*M+m*S-d*g,e[i+1]=m*A+v*g+d*M-p*S,e[i+2]=d*A+v*S+p*g-m*M,e[i+3]=v*A-p*M-m*g-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),v=p(o/2),M=p(c/2),g=m(r/2),S=m(o/2),A=m(c/2);switch(h){case"XYZ":this._x=g*v*M+d*S*A,this._y=d*S*M-g*v*A,this._z=d*v*A+g*S*M,this._w=d*v*M-g*S*A;break;case"YXZ":this._x=g*v*M+d*S*A,this._y=d*S*M-g*v*A,this._z=d*v*A-g*S*M,this._w=d*v*M+g*S*A;break;case"ZXY":this._x=g*v*M-d*S*A,this._y=d*S*M+g*v*A,this._z=d*v*A+g*S*M,this._w=d*v*M-g*S*A;break;case"ZYX":this._x=g*v*M-d*S*A,this._y=d*S*M+g*v*A,this._z=d*v*A-g*S*M,this._w=d*v*M+g*S*A;break;case"YZX":this._x=g*v*M+d*S*A,this._y=d*S*M+g*v*A,this._z=d*v*A-g*S*M,this._w=d*v*M-g*S*A;break;case"XZY":this._x=g*v*M-d*S*A,this._y=d*S*M-g*v*A,this._z=d*v*A+g*S*M,this._w=d*v*M+g*S*A;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],M=i[10],g=r+p+M;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-d)*S,this._z=(h-o)*S}else if(r>p&&r>M){const S=2*Math.sqrt(1+r-p-M);this._w=(v-m)/S,this._x=.25*S,this._y=(o+h)/S,this._z=(c+d)/S}else if(p>M){const S=2*Math.sqrt(1+p-r-M);this._w=(c-d)/S,this._x=(o+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+M-r-p);this._w=(h-o)/S,this._x=(c+d)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=r*v+h*p+o*d-c*m,this._y=o*v+h*m+c*p-r*d,this._z=c*v+h*d+r*m-o*p,this._w=h*v-r*p-o*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const c0=class c0{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(dg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*o-p*r),v=2*(p*i-c*o),M=2*(c*r-h*i);return this.x=i+m*d+h*M-p*v,this.y=r+m*v+p*d-c*M,this.z=o+m*M+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=o*m-c*p,this.y=c*h-r*m,this.z=r*p-o*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};c0.prototype.isVector3=!0;let ee=c0;const yh=new ee,dg=new Zs,u0=class u0{constructor(e,i,r,o,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,h,p,m,d)}set(e,i,r,o,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=o,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],v=r[4],M=r[7],g=r[2],S=r[5],A=r[8],D=o[0],y=o[3],x=o[6],O=o[1],B=o[4],w=o[7],z=o[2],P=o[5],I=o[8];return c[0]=h*D+p*O+m*z,c[3]=h*y+p*B+m*P,c[6]=h*x+p*w+m*I,c[1]=d*D+v*O+M*z,c[4]=d*y+v*B+M*P,c[7]=d*x+v*w+M*I,c[2]=g*D+S*O+A*z,c[5]=g*y+S*B+A*P,c[8]=g*x+S*w+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-r*c*v+r*p*m+o*c*d-o*h*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],M=v*h-p*d,g=p*m-v*c,S=d*c-h*m,A=i*M+r*g+o*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=M*D,e[1]=(o*d-v*r)*D,e[2]=(p*r-o*h)*D,e[3]=g*D,e[4]=(v*i-o*m)*D,e[5]=(o*c-p*i)*D,e[6]=S*D,e[7]=(r*m-d*i)*D,e[8]=(h*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-o*d,o*m,-o*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,i)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,i){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};u0.prototype.isMatrix3=!0;let ut=u0;const Eh=new ut,pg=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jM(){const s={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(o,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===kt&&(o.r=Ea(o.r),o.g=Ea(o.g),o.b=Ea(o.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===kt&&(o.r=Hs(o.r),o.g=Hs(o.g),o.b=Hs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===rr?$c:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,h){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[jc]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const Dt=jM();function Ea(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class $M{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=to("canvas")),Ss.width=e.width,Ss.height=e.height;const o=Ss.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=to("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ea(i[r]/255)*255):i[r]=Ea(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eS=0;class i0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let h=0,p=o.length;h<p;h++)o[h].isDataTexture?c.push(bh(o[h].image)):c.push(bh(o[h]))}else c=bh(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function bh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$M.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let tS=0;const Ah=new ee;class Pn extends Hr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Sa,o=Sa,c=On,h=Fr,p=Ui,m=hi,d=Pn.DEFAULT_ANISOTROPY,v=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Ws(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ah).x}get height(){return this.source.getSize(Ah).y}get depth(){return this.source.getSize(Ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=P_;Pn.DEFAULT_ANISOTROPY=1;const f0=class f0{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*o+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*o+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*o+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*o+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,d=m[0],v=m[4],M=m[8],g=m[1],S=m[5],A=m[9],D=m[2],y=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(M-D)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(M+D)<.1&&Math.abs(A+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(d+1)/2,w=(S+1)/2,z=(x+1)/2,P=(v+g)/4,I=(M+D)/4,b=(A+y)/4;return B>w&&B>z?B<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(B),o=P/r,c=I/r):w>z?w<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),r=P/o,c=b/o):z<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(z),r=I/c,o=b/c),this.set(r,o,c,i),this}let O=Math.sqrt((y-A)*(y-A)+(M-D)*(M-D)+(g-v)*(g-v));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(M-D)/O,this.z=(g-v)/O,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};f0.prototype.isVector4=!0;let sn=f0;class nS extends Hr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Pn(o),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new i0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends nS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class k_ extends Pn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iS extends Pn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=class iu{constructor(e,i,r,o,c,h,p,m,d,v,M,g,S,A,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,h,p,m,d,v,M,g,S,A,D,y)}set(e,i,r,o,c,h,p,m,d,v,M,g,S,A,D,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=M,x[14]=g,x[3]=S,x[7]=A,x[11]=D,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new iu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),h=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(o),d=Math.sin(o),v=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const g=h*v,S=h*M,A=p*v,D=p*M;i[0]=m*v,i[4]=-m*M,i[8]=d,i[1]=S+A*d,i[5]=g-D*d,i[9]=-p*m,i[2]=D-g*d,i[6]=A+S*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,S=m*M,A=d*v,D=d*M;i[0]=g+D*p,i[4]=A*p-S,i[8]=h*d,i[1]=h*M,i[5]=h*v,i[9]=-p,i[2]=S*p-A,i[6]=D+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,S=m*M,A=d*v,D=d*M;i[0]=g-D*p,i[4]=-h*M,i[8]=A+S*p,i[1]=S+A*p,i[5]=h*v,i[9]=D-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,S=h*M,A=p*v,D=p*M;i[0]=m*v,i[4]=A*d-S,i[8]=g*d+D,i[1]=m*M,i[5]=D*d+g,i[9]=S*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,S=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=D-g*M,i[8]=A*M+S,i[1]=M,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=S*M+A,i[10]=g-D*M}else if(e.order==="XZY"){const g=h*m,S=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=-M,i[8]=d*v,i[1]=g*M+D,i[5]=h*v,i[9]=S*M-A,i[2]=A*M-S,i[6]=p*v,i[10]=D*M+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,rS)}lookAt(e,i,r){const o=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),$a.crossVectors(r,ci),$a.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),$a.crossVectors(r,ci)),$a.normalize(),xc.crossVectors(ci,$a),o[0]=$a.x,o[4]=xc.x,o[8]=ci.x,o[1]=$a.y,o[5]=xc.y,o[9]=ci.y,o[2]=$a.z,o[6]=xc.z,o[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],v=r[1],M=r[5],g=r[9],S=r[13],A=r[2],D=r[6],y=r[10],x=r[14],O=r[3],B=r[7],w=r[11],z=r[15],P=o[0],I=o[4],b=o[8],U=o[12],q=o[1],G=o[5],$=o[9],pe=o[13],Y=o[2],J=o[6],F=o[10],H=o[14],te=o[3],ge=o[7],Ae=o[11],N=o[15];return c[0]=h*P+p*q+m*Y+d*te,c[4]=h*I+p*G+m*J+d*ge,c[8]=h*b+p*$+m*F+d*Ae,c[12]=h*U+p*pe+m*H+d*N,c[1]=v*P+M*q+g*Y+S*te,c[5]=v*I+M*G+g*J+S*ge,c[9]=v*b+M*$+g*F+S*Ae,c[13]=v*U+M*pe+g*H+S*N,c[2]=A*P+D*q+y*Y+x*te,c[6]=A*I+D*G+y*J+x*ge,c[10]=A*b+D*$+y*F+x*Ae,c[14]=A*U+D*pe+y*H+x*N,c[3]=O*P+B*q+w*Y+z*te,c[7]=O*I+B*G+w*J+z*ge,c[11]=O*b+B*$+w*F+z*Ae,c[15]=O*U+B*pe+w*H+z*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],M=e[6],g=e[10],S=e[14],A=e[3],D=e[7],y=e[11],x=e[15],O=m*S-d*g,B=p*S-d*M,w=p*g-m*M,z=h*S-d*v,P=h*g-m*v,I=h*M-p*v;return i*(D*O-y*B+x*w)-r*(A*O-y*z+x*P)+o*(A*B-D*z+x*I)-c*(A*w-D*P+y*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-r*(c*v-p*m)+o*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],M=e[9],g=e[10],S=e[11],A=e[12],D=e[13],y=e[14],x=e[15],O=i*p-r*h,B=i*m-o*h,w=i*d-c*h,z=r*m-o*p,P=r*d-c*p,I=o*d-c*m,b=v*D-M*A,U=v*y-g*A,q=v*x-S*A,G=M*y-g*D,$=M*x-S*D,pe=g*x-S*y,Y=O*pe-B*$+w*G+z*q-P*U+I*b;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/Y;return e[0]=(p*pe-m*$+d*G)*J,e[1]=(o*$-r*pe-c*G)*J,e[2]=(D*I-y*P+x*z)*J,e[3]=(g*P-M*I-S*z)*J,e[4]=(m*q-h*pe-d*U)*J,e[5]=(i*pe-o*q+c*U)*J,e[6]=(y*w-A*I-x*B)*J,e[7]=(v*I-g*w+S*B)*J,e[8]=(h*$-p*q+d*b)*J,e[9]=(r*q-i*$-c*b)*J,e[10]=(A*P-D*w+x*O)*J,e[11]=(M*w-v*P-S*O)*J,e[12]=(p*U-h*G-m*b)*J,e[13]=(i*G-r*U+o*b)*J,e[14]=(D*B-A*z-y*O)*J,e[15]=(v*z-M*B+g*O)*J,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+r,d*p-o*m,d*m+o*p,0,d*p+o*m,v*p+r,v*m-o*h,0,d*m-o*p,v*m+o*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,h){return this.set(1,r,c,0,e,1,h,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,M=p+p,g=c*d,S=c*v,A=c*M,D=h*v,y=h*M,x=p*M,O=m*d,B=m*v,w=m*M,z=r.x,P=r.y,I=r.z;return o[0]=(1-(D+x))*z,o[1]=(S+w)*z,o[2]=(A-B)*z,o[3]=0,o[4]=(S-w)*P,o[5]=(1-(g+x))*P,o[6]=(y+O)*P,o[7]=0,o[8]=(A+B)*I,o[9]=(y-O)*I,o[10]=(1-(g+D))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=ys.set(o[0],o[1],o[2]).length();const p=ys.set(o[4],o[5],o[6]).length(),m=ys.set(o[8],o[9],o[10]).length();c<0&&(h=-h),Ci.copy(this);const d=1/h,v=1/p,M=1/m;return Ci.elements[0]*=d,Ci.elements[1]*=d,Ci.elements[2]*=d,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=M,Ci.elements[9]*=M,Ci.elements[10]*=M,i.setFromRotationMatrix(Ci),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,o,c,h,p=Wi,m=!1){const d=this.elements,v=2*c/(i-e),M=2*c/(r-o),g=(i+e)/(i-e),S=(r+o)/(r-o);let A,D;if(m)A=c/(h-c),D=h*c/(h-c);else if(p===Wi)A=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(p===eo)A=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=M,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,o,c,h,p=Wi,m=!1){const d=this.elements,v=2/(i-e),M=2/(r-o),g=-(i+e)/(i-e),S=-(r+o)/(r-o);let A,D;if(m)A=1/(h-c),D=h/(h-c);else if(p===Wi)A=-2/(h-c),D=-(h+c)/(h-c);else if(p===eo)A=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=M,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};iu.prototype.isMatrix4=!0;let en=iu;const ys=new ee,Ci=new en,aS=new ee(0,0,0),rS=new ee(1,1,1),$a=new ee,xc=new ee,ci=new ee,gg=new en,_g=new Zs;class or{constructor(e=0,i=0,r=0,o=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],h=o[4],p=o[8],m=o[1],d=o[5],v=o[9],M=o[2],g=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class a0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sS=0;const vg=new ee,Es=new Zs,ma=new en,Mc=new ee,Hl=new ee,lS=new ee,oS=new Zs,xg=new ee(1,0,0),Mg=new ee(0,1,0),Sg=new ee(0,0,1),yg={type:"added"},cS={type:"removed"},bs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Fn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ee,i=new or,r=new Zs,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new ut}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,i){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mc.copy(e):Mc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Hl,Mc,this.up):ma.lookAt(Mc,Hl,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Es.setFromRotationMatrix(ma),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),bs.child=e,this.dispatchEvent(bs),bs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cS),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,h=o.length;c<h;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const M=m[d];c(e.shapes,M)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));o.material=p}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),M=h(e.shapes),g=h(e.skeletons),S=h(e.animations),A=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),M.length>0&&(r.shapes=M),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=o,r;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new ee(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Is extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uS={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,r),x=this._getHandJoint(d,D);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=d.joints["index-finger-tip"],M=d.joints["thumb-tip"],g=v.position.distanceTo(M.position),S=.02,A=.005;d.inputState.pinching&&g>S+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=S-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(uS)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Is;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ch(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Lt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Dt.workingColorSpace){if(e=n0(e,1),i=Tt(i,0,1),r=Tt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Ch(h,c,e+1/3),this.g=Ch(h,c,e),this.b=Ch(h,c,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,i=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=o[1],p=o[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const r=W_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Dt.workingToColorSpace(Nn.copy(this),e),Math.round(Tt(Nn.r*255,0,255))*65536+Math.round(Tt(Nn.g*255,0,255))*256+Math.round(Tt(Nn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,o=Nn.g,c=Nn.b,h=Math.max(r,o,c),p=Math.min(r,o,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const M=h-p;switch(d=v<=.5?M/(h+p):M/(2-h-p),h){case r:m=(o-c)/M+(o<c?6:0);break;case o:m=(c-r)/M+2;break;case c:m=(r-o)/M+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Jn){Dt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,o=Nn.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(er),this.setHSL(er.h+e,er.s+i,er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(er),e.getHSL(Sc);const r=Ql(er.h,Sc.h,i),o=Ql(er.s,Sc.s,i),c=Ql(er.l,Sc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Lt;Lt.NAMES=W_;class fS extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new ee,ga=new ee,wh=new ee,_a=new ee,As=new ee,Ts=new ee,Eg=new ee,Dh=new ee,Lh=new ee,Uh=new ee,Nh=new sn,Oh=new sn,Ph=new sn;class Li{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),wi.subVectors(e,i),o.cross(wi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){wi.subVectors(o,i),ga.subVectors(r,i),wh.subVectors(e,i);const h=wi.dot(wi),p=wi.dot(ga),m=wi.dot(wh),d=ga.dot(ga),v=ga.dot(wh),M=h*d-p*p;if(M===0)return c.set(0,0,0),null;const g=1/M,S=(d*m-p*v)*g,A=(h*v-p*m)*g;return c.set(1-S-A,A,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,r,o,c,h,p,m){return this.getBarycoord(e,i,r,o,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,r,o,c,h){return Nh.setScalar(0),Oh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,r),Ph.fromBufferAttribute(e,o),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Oh,c.y),h.addScaledVector(Ph,c.z),h}static isFrontFacing(e,i,r,o){return wi.subVectors(r,i),ga.subVectors(e,i),wi.cross(ga).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),wi.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let h,p;As.subVectors(o,r),Ts.subVectors(c,r),Dh.subVectors(e,r);const m=As.dot(Dh),d=Ts.dot(Dh);if(m<=0&&d<=0)return i.copy(r);Lh.subVectors(e,o);const v=As.dot(Lh),M=Ts.dot(Lh);if(v>=0&&M<=v)return i.copy(o);const g=m*M-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(As,h);Uh.subVectors(e,c);const S=As.dot(Uh),A=Ts.dot(Uh);if(A>=0&&S<=A)return i.copy(c);const D=S*d-m*A;if(D<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(r).addScaledVector(Ts,p);const y=v*A-S*M;if(y<=0&&M-v>=0&&S-A>=0)return Eg.subVectors(c,o),p=(M-v)/(M-v+(S-A)),i.copy(o).addScaledVector(Eg,p);const x=1/(y+D+g);return h=D*x,p=g*x,i.copy(r).addScaledVector(As,h).addScaledVector(Ts,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class io{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Di):Di.fromBufferAttribute(c,h),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const o=e.children;for(let c=0,h=o.length;c<h;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vl),Ec.subVectors(this.max,Vl),Rs.subVectors(e.a,Vl),Cs.subVectors(e.b,Vl),ws.subVectors(e.c,Vl),tr.subVectors(Cs,Rs),nr.subVectors(ws,Cs),wr.subVectors(Rs,ws);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-wr.z,wr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,wr.z,0,-wr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-wr.y,wr.x,0];return!Fh(i,Rs,Cs,ws,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,Rs,Cs,ws,Ec))?!1:(bc.crossVectors(tr,nr),i=[bc.x,bc.y,bc.z],Fh(i,Rs,Cs,ws,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Di=new ee,yc=new io,Rs=new ee,Cs=new ee,ws=new ee,tr=new ee,nr=new ee,wr=new ee,Vl=new ee,Ec=new ee,bc=new ee,Dr=new ee;function Fh(s,e,i,r,o){for(let c=0,h=s.length-3;c<=h;c+=3){Dr.fromArray(s,c);const p=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),m=e.dot(Dr),d=i.dot(Dr),v=r.dot(Dr);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const _n=new ee,Ac=new Rt;let hS=0;class Ni extends Hr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=og,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Fs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),o=Hn(o,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Z_ extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class q_ extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class In extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}const dS=new io,Gl=new ee,Ih=new ee;class ao{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dS.setFromPoints(e).getCenter(r);let o=0;for(let c=0,h=e.length;c<h;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gl.subVectors(e,this.center);const i=Gl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(Gl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gl.copy(e.center).add(Ih)),this.expandByPoint(Gl.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pS=0;const Si=new en,zh=new Fn,Ds=new ee,ui=new io,Xl=new io,En=new ee;class Xn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?q_:Z_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,r){return Si.makeTranslation(e,i,r),this.applyMatrix4(Si),this}scale(e,i,r){return Si.makeScale(e,i,r),this.applyMatrix4(Si),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new In(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ao);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Xl.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(ui.min,Xl.min),ui.expandByPoint(En),En.addVectors(ui.max,Xl.max),ui.expandByPoint(En)):(ui.expandByPoint(Xl.min),ui.expandByPoint(Xl.max))}ui.getCenter(r);let o=0;for(let c=0,h=e.count;c<h;c++)En.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)En.fromBufferAttribute(p,d),m&&(Ds.fromBufferAttribute(e,d),En.add(Ds)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new Ni(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new ee,m[b]=new ee;const d=new ee,v=new ee,M=new ee,g=new Rt,S=new Rt,A=new Rt,D=new ee,y=new ee;function x(b,U,q){d.fromBufferAttribute(r,b),v.fromBufferAttribute(r,U),M.fromBufferAttribute(r,q),g.fromBufferAttribute(c,b),S.fromBufferAttribute(c,U),A.fromBufferAttribute(c,q),v.sub(d),M.sub(d),S.sub(g),A.sub(g);const G=1/(S.x*A.y-A.x*S.y);isFinite(G)&&(D.copy(v).multiplyScalar(A.y).addScaledVector(M,-S.y).multiplyScalar(G),y.copy(M).multiplyScalar(S.x).addScaledVector(v,-A.x).multiplyScalar(G),p[b].add(D),p[U].add(D),p[q].add(D),m[b].add(y),m[U].add(y),m[q].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let b=0,U=O.length;b<U;++b){const q=O[b],G=q.start,$=q.count;for(let pe=G,Y=G+$;pe<Y;pe+=3)x(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const B=new ee,w=new ee,z=new ee,P=new ee;function I(b){z.fromBufferAttribute(o,b),P.copy(z);const U=p[b];B.copy(U),B.sub(z.multiplyScalar(z.dot(U))).normalize(),w.crossVectors(P,U);const G=w.dot(m[b])<0?-1:1;h.setXYZW(b,B.x,B.y,B.z,G)}for(let b=0,U=O.length;b<U;++b){const q=O[b],G=q.start,$=q.count;for(let pe=G,Y=G+$;pe<Y;pe+=3)I(e.getX(pe+0)),I(e.getX(pe+1)),I(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ee,c=new ee,h=new ee,p=new ee,m=new ee,d=new ee,v=new ee,M=new ee;if(e)for(let g=0,S=e.count;g<S;g+=3){const A=e.getX(g+0),D=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),v.subVectors(h,c),M.subVectors(o,c),v.cross(M),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),d.fromBufferAttribute(r,y),p.add(v),m.add(v),d.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,S=i.count;g<S;g+=3)o.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),M.subVectors(o,c),v.cross(M),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,M=p.normalized,g=new d.constructor(m.length*v);let S=0,A=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?S=m[D]*p.data.stride+p.offset:S=m[D]*v;for(let x=0;x<v;x++)g[A++]=d[S++]}return new Ni(g,v,M)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xn,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,M=d.length;v<M;v++){const g=d[v],S=e(g,r);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let M=0,g=d.length;M<g;M++){const S=d[M];v.push(S.toJSON(e.data))}v.length>0&&(o[m]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const d in o){const v=o[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],M=c[d];for(let g=0,S=M.length;g<S;g++)v.push(M[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const M=h[d];this.addGroup(M.start,M.count,M.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mS=0;class Vr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=zs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ed&&(r.blendSrc=this.blendSrc),this.blendDst!==td&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=o(e.textures),h=o(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new ee,Bh=new ee,Tc=new ee,ir=new ee,Hh=new ee,Rc=new ee,Vh=new ee;class ru{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Bh.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),ir.copy(this.origin).sub(Bh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Tc),p=ir.dot(this.direction),m=-ir.dot(Tc),d=ir.lengthSq(),v=Math.abs(1-h*h);let M,g,S,A;if(v>0)if(M=h*m-p,g=h*p-m,A=c*v,M>=0)if(g>=-A)if(g<=A){const D=1/v;M*=D,g*=D,S=M*(M+h*g+2*p)+g*(h*M+g+2*m)+d}else g=c,M=Math.max(0,-(h*g+p)),S=-M*M+g*(g+2*m)+d;else g=-c,M=Math.max(0,-(h*g+p)),S=-M*M+g*(g+2*m)+d;else g<=-A?(M=Math.max(0,-(-h*c+p)),g=M>0?-c:Math.min(Math.max(-c,-m),c),S=-M*M+g*(g+2*m)+d):g<=A?(M=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+d):(M=Math.max(0,-(h*c+p)),g=M>0?c:Math.min(Math.max(-c,-m),c),S=-M*M+g*(g+2*m)+d);else g=h>0?-c:c,M=Math.max(0,-(h*g+p)),S=-M*M+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Bh).addScaledVector(Tc,g),S}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),o=xa.dot(xa)-r*r,c=e.radius*e.radius;if(o>c)return null;const h=Math.sqrt(c-o),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,o=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,o=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),r>h||c>o||((c>r||isNaN(r))&&(r=c),(h<o||isNaN(o))&&(o=h),M>=0?(p=(e.min.z-g.z)*M,m=(e.max.z-g.z)*M):(p=(e.max.z-g.z)*M,m=(e.min.z-g.z)*M),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,o,c){Hh.subVectors(i,e),Rc.subVectors(r,e),Vh.crossVectors(Hh,Rc);let h=this.direction.dot(Vh),p;if(h>0){if(o)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ir.subVectors(this.origin,e);const m=p*this.direction.dot(Rc.crossVectors(ir,Rc));if(m<0)return null;const d=p*this.direction.dot(Hh.cross(ir));if(d<0||m+d>h)return null;const v=-p*ir.dot(Vh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jl extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bg=new en,Lr=new ru,Cc=new ao,Ag=new ee,wc=new ee,Dc=new ee,Lc=new ee,Gh=new ee,Uc=new ee,Tg=new ee,Nc=new ee;class yi extends Fn{constructor(e=new Xn,i=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=o.length;c<h;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(c&&p){Uc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],M=c[m];v!==0&&(Gh.fromBufferAttribute(M,e),h?Uc.addScaledVector(Gh,v):Uc.addScaledVector(Gh.sub(i),v))}i.add(Uc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Cc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Cc,Ag)===null||Lr.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(bg.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(bg),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,M=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,D=g.length;A<D;A++){const y=g[A],x=h[y.materialIndex],O=Math.max(y.start,S.start),B=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,z=B;w<z;w+=3){const P=p.getX(w),I=p.getX(w+1),b=p.getX(w+2);o=Oc(this,x,e,r,d,v,M,P,I,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const A=Math.max(0,S.start),D=Math.min(p.count,S.start+S.count);for(let y=A,x=D;y<x;y+=3){const O=p.getX(y),B=p.getX(y+1),w=p.getX(y+2);o=Oc(this,h,e,r,d,v,M,O,B,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,D=g.length;A<D;A++){const y=g[A],x=h[y.materialIndex],O=Math.max(y.start,S.start),B=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=O,z=B;w<z;w+=3){const P=w,I=w+1,b=w+2;o=Oc(this,x,e,r,d,v,M,P,I,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const A=Math.max(0,S.start),D=Math.min(m.count,S.start+S.count);for(let y=A,x=D;y<x;y+=3){const O=y,B=y+1,w=y+2;o=Oc(this,h,e,r,d,v,M,O,B,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function gS(s,e,i,r,o,c,h,p){let m;if(e.side===Gn?m=r.intersectTriangle(h,c,o,!0,p):m=r.intersectTriangle(o,c,h,e.side===lr,p),m===null)return null;Nc.copy(p),Nc.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Nc);return d<i.near||d>i.far?null:{distance:d,point:Nc.clone(),object:s}}function Oc(s,e,i,r,o,c,h,p,m,d){s.getVertexPosition(p,wc),s.getVertexPosition(m,Dc),s.getVertexPosition(d,Lc);const v=gS(s,e,i,r,wc,Dc,Lc,Tg);if(v){const M=new ee;Li.getBarycoord(Tg,wc,Dc,Lc,M),o&&(v.uv=Li.getInterpolatedAttribute(o,p,m,d,M,new Rt)),c&&(v.uv1=Li.getInterpolatedAttribute(c,p,m,d,M,new Rt)),h&&(v.normal=Li.getInterpolatedAttribute(h,p,m,d,M,new ee),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new ee,materialIndex:0};Li.getNormal(wc,Dc,Lc,g.normal),v.face=g,v.barycoord=M}return v}class _S extends Pn{constructor(e=null,i=1,r=1,o,c,h,p,m,d=wn,v=wn,M,g){super(null,h,p,m,d,v,o,c,M,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new ee,vS=new ee,xS=new ut;class Nr{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Xh.subVectors(r,i).cross(vS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Xh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(o,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||xS.getNormalMatrix(e),o=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ao,MS=new Rt(.5,.5),Pc=new ee;class r0{constructor(e=new Nr,i=new Nr,r=new Nr,o=new Nr,c=new Nr,h=new Nr){this.planes=[e,i,r,o,c,h]}set(e,i,r,o,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Wi,r=!1){const o=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],M=c[5],g=c[6],S=c[7],A=c[8],D=c[9],y=c[10],x=c[11],O=c[12],B=c[13],w=c[14],z=c[15];if(o[0].setComponents(d-h,S-v,x-A,z-O).normalize(),o[1].setComponents(d+h,S+v,x+A,z+O).normalize(),o[2].setComponents(d+p,S+M,x+D,z+B).normalize(),o[3].setComponents(d-p,S-M,x-D,z-B).normalize(),r)o[4].setComponents(m,g,y,w).normalize(),o[5].setComponents(d-m,S-g,x-y,z-w).normalize();else if(o[4].setComponents(d-m,S-g,x-y,z-w).normalize(),i===Wi)o[5].setComponents(d+m,S+g,x+y,z+w).normalize();else if(i===eo)o[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=MS.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(Pc.x=o.normal.x>0?e.max.x:e.min.x,Pc.y=o.normal.y>0?e.max.y:e.min.y,Pc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new ee,tu=new ee,Rg=new en,kl=new ru,Fc=new ao,kh=new ee,Cg=new ee;class SS extends Fn{constructor(e=new Xn,i=new Y_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let o=1,c=i.count;o<c;o++)eu.fromBufferAttribute(i,o-1),tu.fromBufferAttribute(i,o),r[o]=r[o-1],r[o]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new In(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(o),Fc.radius+=c,e.ray.intersectsSphere(Fc)===!1)return;Rg.copy(o).invert(),kl.copy(e.ray).applyMatrix4(Rg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const S=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let D=S,y=A-1;D<y;D+=d){const x=v.getX(D),O=v.getX(D+1),B=Ic(this,e,kl,m,x,O,D);B&&i.push(B)}if(this.isLineLoop){const D=v.getX(A-1),y=v.getX(S),x=Ic(this,e,kl,m,D,y,A-1);x&&i.push(x)}}else{const S=Math.max(0,h.start),A=Math.min(g.count,h.start+h.count);for(let D=S,y=A-1;D<y;D+=d){const x=Ic(this,e,kl,m,D,D+1,D);x&&i.push(x)}if(this.isLineLoop){const D=Ic(this,e,kl,m,A-1,S,A-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=o.length;c<h;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Ic(s,e,i,r,o,c,h){const p=s.geometry.attributes.position;if(eu.fromBufferAttribute(p,o),tu.fromBufferAttribute(p,c),i.distanceSqToSegment(eu,tu,kh,Cg)>r)return;kh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(kh);if(!(d<e.near||d>e.far))return{distance:d,point:Cg.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}class yS extends SS{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class K_ extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wg=new en,Gd=new ru,zc=new ao,Bc=new ee;class ES extends Fn{constructor(e=new Xn,i=new K_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(o),zc.radius+=c,e.ray.intersectsSphere(zc)===!1)return;wg.copy(o).invert(),Gd.copy(e.ray).applyMatrix4(wg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,M=r.attributes.position;if(d!==null){const g=Math.max(0,h.start),S=Math.min(d.count,h.start+h.count);for(let A=g,D=S;A<D;A++){const y=d.getX(A);Bc.fromBufferAttribute(M,y),Dg(Bc,y,m,o,e,i,this)}}else{const g=Math.max(0,h.start),S=Math.min(M.count,h.start+h.count);for(let A=g,D=S;A<D;A++)Bc.fromBufferAttribute(M,A),Dg(Bc,A,m,o,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=o.length;c<h;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Dg(s,e,i,r,o,c,h){const p=Gd.distanceSqToPoint(s);if(p<i){const m=new ee;Gd.closestPointToPoint(s,m),m.applyMatrix4(r);const d=o.ray.origin.distanceTo(m);if(d<o.near||d>o.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Q_ extends Pn{constructor(e=[],i=zr,r,o,c,h,p,m,d,v){super(e,i,r,o,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends Pn{constructor(e,i,r=Yi,o,c,h,p=wn,m=wn,d,v=Aa,M=1){if(v!==Aa&&v!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:M};super(g,o,c,h,p,m,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new i0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bS extends Xs{constructor(e,i=Yi,r=zr,o,c,h=wn,p=wn,m,d=Aa){const v={width:e,height:e,depth:1},M=[v,v,v,v,v,v];super(e,e,i,r,o,c,h,p,m,d),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ro extends Xn{constructor(e=1,i=1,r=1,o=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:h};const p=this;o=Math.floor(o),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],M=[];let g=0,S=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,o,h,2),A("x","z","y",1,-1,e,r,-i,o,h,3),A("x","y","z",1,-1,e,i,r,o,c,4),A("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(v,3)),this.setAttribute("uv",new In(M,2));function A(D,y,x,O,B,w,z,P,I,b,U){const q=w/I,G=z/b,$=w/2,pe=z/2,Y=P/2,J=I+1,F=b+1;let H=0,te=0;const ge=new ee;for(let Ae=0;Ae<F;Ae++){const N=Ae*G-pe;for(let K=0;K<J;K++){const ye=K*q-$;ge[D]=ye*O,ge[y]=N*B,ge[x]=Y,d.push(ge.x,ge.y,ge.z),ge[D]=0,ge[y]=0,ge[x]=P>0?1:-1,v.push(ge.x,ge.y,ge.z),M.push(K/I),M.push(1-Ae/b),H+=1}}for(let Ae=0;Ae<b;Ae++)for(let N=0;N<I;N++){const K=g+N+J*Ae,ye=g+N+J*(Ae+1),Te=g+(N+1)+J*(Ae+1),Oe=g+(N+1)+J*Ae;m.push(K,ye,Oe),m.push(ye,Te,Oe),te+=6}p.addGroup(S,te,U),S+=te,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class su extends Xn{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,h=i/2,p=Math.floor(r),m=Math.floor(o),d=p+1,v=m+1,M=e/p,g=i/m,S=[],A=[],D=[],y=[];for(let x=0;x<v;x++){const O=x*g-h;for(let B=0;B<d;B++){const w=B*M-c;A.push(w,-O,0),D.push(0,0,1),y.push(B/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<p;O++){const B=O+d*x,w=O+d*(x+1),z=O+1+d*(x+1),P=O+1+d*x;S.push(B,w,P),S.push(w,z,P)}this.setIndex(S),this.setAttribute("position",new In(A,3)),this.setAttribute("normal",new In(D,3)),this.setAttribute("uv",new In(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class s0 extends Xn{constructor(e=.5,i=1,r=32,o=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:h},r=Math.max(3,r),o=Math.max(1,o);const p=[],m=[],d=[],v=[];let M=e;const g=(i-e)/o,S=new ee,A=new Rt;for(let D=0;D<=o;D++){for(let y=0;y<=r;y++){const x=c+y/r*h;S.x=M*Math.cos(x),S.y=M*Math.sin(x),m.push(S.x,S.y,S.z),d.push(0,0,1),A.x=(S.x/i+1)/2,A.y=(S.y/i+1)/2,v.push(A.x,A.y)}M+=g}for(let D=0;D<o;D++){const y=D*(r+1);for(let x=0;x<r;x++){const O=x+y,B=O,w=O+r+1,z=O+r+2,P=O+1;p.push(B,w,P),p.push(w,z,P)}}this.setIndex(p),this.setAttribute("position",new In(m,3)),this.setAttribute("normal",new In(d,3)),this.setAttribute("uv",new In(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nu extends Xn{constructor(e=1,i=32,r=16,o=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:o,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+p,Math.PI);let d=0;const v=[],M=new ee,g=new ee,S=[],A=[],D=[],y=[];for(let x=0;x<=r;x++){const O=[],B=x/r,w=h+B*p,z=e*Math.cos(w),P=Math.sqrt(e*e-z*z);let I=0;x===0&&h===0?I=.5/i:x===r&&m===Math.PI&&(I=-.5/i);for(let b=0;b<=i;b++){const U=b/i,q=o+U*c;M.x=-P*Math.cos(q),M.y=z,M.z=P*Math.sin(q),A.push(M.x,M.y,M.z),g.copy(M).normalize(),D.push(g.x,g.y,g.z),y.push(U+I,1-B),O.push(d++)}v.push(O)}for(let x=0;x<r;x++)for(let O=0;O<i;O++){const B=v[x][O+1],w=v[x][O],z=v[x+1][O],P=v[x+1][O+1];(x!==0||h>0)&&S.push(B,w,P),(x!==r-1||m<Math.PI)&&S.push(w,z,P)}this.setIndex(S),this.setAttribute("position",new In(A,3)),this.setAttribute("normal",new In(D,3)),this.setAttribute("uv",new In(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ks(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const o=s[i][r];if(Lg(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(Lg(o[0])){const c=[];for(let h=0,p=o.length;h<p;h++)c[h]=o[h].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Vn(s){const e={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const o in r)e[o]=r[o]}return e}function Lg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function AS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function j_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const TS={clone:ks,merge:Vn};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?i.uniforms[o]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[o]={type:"m4",value:h.toArray()}:i.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Rt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[r].value=new en().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wS extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DS extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LS extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class US extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Ug(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Ug(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Ug(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class NS{constructor(e,i,r){const o=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){p++,c===!1&&o.onStart!==void 0&&o.onStart(v,h,p),c=!0},this.itemEnd=function(v){h++,o.onProgress!==void 0&&o.onProgress(v,h,p),h===p&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,M){return d.push(v,M),this},this.removeHandler=function(v){const M=d.indexOf(v);return M!==-1&&d.splice(M,2),this},this.getHandler=function(v){for(let M=0,g=d.length;M<g;M+=2){const S=d[M],A=d[M+1];if(S.global&&(S.lastIndex=0),S.test(v))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const OS=new NS;class l0{constructor(e){this.manager=e!==void 0?e:OS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(o,c){r.load(e,o,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}l0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ls=new WeakMap;class PS extends l0{constructor(e){super(e)}load(e,i,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Wh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let M=Ls.get(h);M===void 0&&(M=[],Ls.set(h,M)),M.push({onLoad:i,onError:o})}return h}const p=to("img");function m(){v(),i&&i(this);const M=Ls.get(this)||[];for(let g=0;g<M.length;g++){const S=M[g];S.onLoad&&S.onLoad(this)}Ls.delete(this),c.manager.itemEnd(e)}function d(M){v(),o&&o(M),Wh.remove(`image:${e}`);const g=Ls.get(this)||[];for(let S=0;S<g.length;S++){const A=g[S];A.onError&&A.onError(M)}Ls.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Wh.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class FS extends l0{constructor(e){super(e)}load(e,i,r,o){const c=new Pn,h=new PS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,o),c}}class $_ extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Zh=new en,Ng=new ee,Og=new ee;class IS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r0,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ng),Og.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Og),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===eo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hc=new ee,Vc=new Zs,Hi=new ee;class e2 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Hc,Vc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ee,Pg=new Rt,Fg=new Rt;class fi extends e2{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,i){return this.getViewBounds(e,Pg,Fg),i.subVectors(Fg,Pg)}setViewOffset(e,i,r,o,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*o/m,i-=h.offsetY*r/d,o*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class zS extends IS{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class BS extends $_{constructor(e,i,r=0,o=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new zS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class t2 extends e2{constructor(e=-1,i=1,r=1,o=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,h=r+e,p=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class HS extends $_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Ns=1;class VS extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(Us,Ns,e,i);o.layers=this.layers,this.add(o);const c=new fi(Us,Ns,e,i);c.layers=this.layers,this.add(c);const h=new fi(Us,Ns,e,i);h.layers=this.layers,this.add(h);const p=new fi(Us,Ns,e,i);p.layers=this.layers,this.add(p);const m=new fi(Us,Ns,e,i);m.layers=this.layers,this.add(m);const d=new fi(Us,Ns,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,M=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(M,g,S),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class GS extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class XS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function kS(){this._document.hidden===!1&&this.reset()}const Ig=new en;class WS{constructor(e,i,r=0,o=1/0){this.ray=new ru(e,i),this.near=r,this.far=o,this.camera=null,this.layers=new a0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ut("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Ig.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ig),this}intersectObject(e,i=!0,r=[]){return Xd(e,this,r,i),r.sort(zg),r}intersectObjects(e,i=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Xd(e[o],this,r,i);return r.sort(zg),r}}function zg(s,e){return s.distance-e.distance}function Xd(s,e,i,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let h=0,p=c.length;h<p;h++)Xd(c[h],e,i,!0)}}const h0=class h0{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};h0.prototype.isMatrix2=!0;let Bg=h0;function Hg(s,e,i,r){const o=ZS(r);switch(i){case H_:return s*e;case G_:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case Br:return s*e*2/o.components*o.byteLength;case jd:return s*e*2/o.components*o.byteLength;case V_:return s*e*3/o.components*o.byteLength;case Ui:return s*e*4/o.components*o.byteLength;case $d:return s*e*4/o.components*o.byteLength;case Wc:case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:case pd:return Math.max(s,16)*Math.max(e,8)/4;case fd:case dd:return Math.max(s,8)*Math.max(e,8)/2;case md:case gd:case vd:case xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _d:case Qc:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pd:case Fd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jc:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZS(s){switch(s){case hi:case F_:return{byteLength:1,components:1};case jl:case I_:case ba:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case Yi:case Yd:case ki:return{byteLength:4,components:1};case z_:case B_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n2(){let s=null,e=!1,i=null,r=null;function o(c,h){i(c,h),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function qS(s){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,M=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,v),p.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:M}}function r(p,m,d){const v=m.array,M=m.updateRanges;if(s.bindBuffer(d,p),M.length===0)s.bufferSubData(d,0,v);else{M.sort((S,A)=>S.start-A.start);let g=0;for(let S=1;S<M.length;S++){const A=M[g],D=M[S];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++g,M[g]=D)}M.length=g+1;for(let S=0,A=M.length;S<A;S++){const D=M[S];s.bufferSubData(d,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:o,remove:c,update:h}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ly=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,By=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:YS,alphahash_pars_fragment:KS,alphamap_fragment:QS,alphamap_pars_fragment:JS,alphatest_fragment:jS,alphatest_pars_fragment:$S,aomap_fragment:ey,aomap_pars_fragment:ty,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:ay,beginnormal_vertex:ry,bsdfs:sy,iridescence_fragment:ly,bumpmap_pars_fragment:oy,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:fy,clipping_planes_vertex:hy,color_fragment:dy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:_y,cube_uv_reflection_fragment:vy,defaultnormal_vertex:xy,displacementmap_pars_vertex:My,displacementmap_vertex:Sy,emissivemap_fragment:yy,emissivemap_pars_fragment:Ey,colorspace_fragment:by,colorspace_pars_fragment:Ay,envmap_fragment:Ty,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Hy,envmap_vertex:Dy,fog_vertex:Ly,fog_pars_vertex:Uy,fog_fragment:Ny,fog_pars_fragment:Oy,gradientmap_pars_fragment:Py,lightmap_pars_fragment:Fy,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:zy,lights_pars_begin:By,lights_toon_fragment:Vy,lights_toon_pars_fragment:Gy,lights_phong_fragment:Xy,lights_phong_pars_fragment:ky,lights_physical_fragment:Wy,lights_physical_pars_fragment:Zy,lights_fragment_begin:qy,lights_fragment_maps:Yy,lights_fragment_end:Ky,lightprobes_pars_fragment:Qy,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:e3,map_fragment:t3,map_pars_fragment:n3,map_particle_fragment:i3,map_particle_pars_fragment:a3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:s3,morphinstance_vertex:l3,morphcolor_vertex:o3,morphnormal_vertex:c3,morphtarget_pars_vertex:u3,morphtarget_vertex:f3,normal_fragment_begin:h3,normal_fragment_maps:d3,normal_pars_fragment:p3,normal_pars_vertex:m3,normal_vertex:g3,normalmap_pars_fragment:_3,clearcoat_normal_fragment_begin:v3,clearcoat_normal_fragment_maps:x3,clearcoat_pars_fragment:M3,iridescence_pars_fragment:S3,opaque_fragment:y3,packing:E3,premultiplied_alpha_fragment:b3,project_vertex:A3,dithering_fragment:T3,dithering_pars_fragment:R3,roughnessmap_fragment:C3,roughnessmap_pars_fragment:w3,shadowmap_pars_fragment:D3,shadowmap_pars_vertex:L3,shadowmap_vertex:U3,shadowmask_pars_fragment:N3,skinbase_vertex:O3,skinning_pars_vertex:P3,skinning_vertex:F3,skinnormal_vertex:I3,specularmap_fragment:z3,specularmap_pars_fragment:B3,tonemapping_fragment:H3,tonemapping_pars_fragment:V3,transmission_fragment:G3,transmission_pars_fragment:X3,uv_pars_fragment:k3,uv_pars_vertex:W3,uv_vertex:Z3,worldpos_vertex:q3,background_vert:Y3,background_frag:K3,backgroundCube_vert:Q3,backgroundCube_frag:J3,cube_vert:j3,cube_frag:$3,depth_vert:eE,depth_frag:tE,distance_vert:nE,distance_frag:iE,equirect_vert:aE,equirect_frag:rE,linedashed_vert:sE,linedashed_frag:lE,meshbasic_vert:oE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:fE,meshmatcap_vert:hE,meshmatcap_frag:dE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:gE,meshphong_frag:_E,meshphysical_vert:vE,meshphysical_frag:xE,meshtoon_vert:ME,meshtoon_frag:SE,points_vert:yE,points_frag:EE,shadow_vert:bE,shadow_frag:AE,sprite_vert:TE,sprite_frag:RE},Ie={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Lt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Vn([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Vn([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Vn([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Vn([Ie.lights,Ie.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Gc={r:0,b:0,g:0},CE=new en,i2=new ut;i2.set(-1,0,0,0,1,0,0,0,1);function wE(s,e,i,r,o,c){const h=new Lt(0);let p=o===!0?0:1,m,d,v=null,M=0,g=null;function S(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){const w=O.backgroundBlurriness>0;B=e.get(B,w)}return B}function A(O){let B=!1;const w=S(O);w===null?y(h,p):w&&w.isColor&&(y(w,1),B=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(O,B){const w=S(B);w&&(w.isCubeTexture||w.mapping===au)?(d===void 0&&(d=new yi(new ro(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ks(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(B.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(i2),d.material.toneMapped=Dt.getTransfer(w.colorSpace)!==kt,(v!==w||M!==w.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,v=w,M=w.version,g=s.toneMapping),d.layers.enableAll(),O.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new yi(new su(2,2),new Ki({name:"BackgroundMaterial",uniforms:ks(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(w.colorSpace)!==kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||M!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,M=w.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,B){O.getRGB(Gc,j_(s)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,B,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,B=1){h.set(O),p=B,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,y(h,p)},render:A,addToRenderList:D,dispose:x}}function DE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,h=!1;function p(G,$,pe,Y,J){let F=!1;const H=M(G,Y,pe,$);c!==H&&(c=H,d(c.object)),F=S(G,Y,pe,J),F&&A(G,Y,pe,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,w(G,$,pe,Y),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function M(G,$,pe,Y){const J=Y.wireframe===!0;let F=r[$.id];F===void 0&&(F={},r[$.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let te=F[H];te===void 0&&(te={},F[H]=te);let ge=te[pe.id];ge===void 0&&(ge={},te[pe.id]=ge);let Ae=ge[J];return Ae===void 0&&(Ae=g(m()),ge[J]=Ae),Ae}function g(G){const $=[],pe=[],Y=[];for(let J=0;J<i;J++)$[J]=0,pe[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:pe,attributeDivisors:Y,object:G,attributes:{},index:null}}function S(G,$,pe,Y){const J=c.attributes,F=$.attributes;let H=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){const N=J[ge];let K=F[ge];if(K===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==Y}function A(G,$,pe,Y){const J={},F=$.attributes;let H=0;const te=pe.getAttributes();for(const ge in te)if(te[ge].location>=0){let N=F[ge];N===void 0&&(ge==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),ge==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),J[ge]=K,H++}c.attributes=J,c.attributesNum=H,c.index=Y}function D(){const G=c.newAttributes;for(let $=0,pe=G.length;$<pe;$++)G[$]=0}function y(G){x(G,0)}function x(G,$){const pe=c.newAttributes,Y=c.enabledAttributes,J=c.attributeDivisors;pe[G]=1,Y[G]===0&&(s.enableVertexAttribArray(G),Y[G]=1),J[G]!==$&&(s.vertexAttribDivisor(G,$),J[G]=$)}function O(){const G=c.newAttributes,$=c.enabledAttributes;for(let pe=0,Y=$.length;pe<Y;pe++)$[pe]!==G[pe]&&(s.disableVertexAttribArray(pe),$[pe]=0)}function B(G,$,pe,Y,J,F,H){H===!0?s.vertexAttribIPointer(G,$,pe,J,F):s.vertexAttribPointer(G,$,pe,Y,J,F)}function w(G,$,pe,Y){D();const J=Y.attributes,F=pe.getAttributes(),H=$.defaultAttributeValues;for(const te in F){const ge=F[te];if(ge.location>=0){let Ae=J[te];if(Ae===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(Ae=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(Ae=G.instanceColor)),Ae!==void 0){const N=Ae.normalized,K=Ae.itemSize,ye=e.get(Ae);if(ye===void 0)continue;const Te=ye.buffer,Oe=ye.type,se=ye.bytesPerElement,Me=Oe===s.INT||Oe===s.UNSIGNED_INT||Ae.gpuType===Yd;if(Ae.isInterleavedBufferAttribute){const Ee=Ae.data,Be=Ee.stride,nt=Ae.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<ge.locationSize;Qe++)x(ge.location+Qe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<ge.locationSize;Qe++)y(ge.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Qe=0;Qe<ge.locationSize;Qe++)B(ge.location+Qe,K/ge.locationSize,Oe,N,Be*se,(nt+K/ge.locationSize*Qe)*se,Me)}else{if(Ae.isInstancedBufferAttribute){for(let Ee=0;Ee<ge.locationSize;Ee++)x(ge.location+Ee,Ae.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<ge.locationSize;Ee++)y(ge.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Ee=0;Ee<ge.locationSize;Ee++)B(ge.location+Ee,K/ge.locationSize,Oe,N,K*se,K/ge.locationSize*Ee*se,Me)}}else if(H!==void 0){const N=H[te];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(ge.location,N);break;case 3:s.vertexAttrib3fv(ge.location,N);break;case 4:s.vertexAttrib4fv(ge.location,N);break;default:s.vertexAttrib1fv(ge.location,N)}}}}O()}function z(){U();for(const G in r){const $=r[G];for(const pe in $){const Y=$[pe];for(const J in Y){const F=Y[J];for(const H in F)v(F[H].object),delete F[H];delete Y[J]}}delete r[G]}}function P(G){if(r[G.id]===void 0)return;const $=r[G.id];for(const pe in $){const Y=$[pe];for(const J in Y){const F=Y[J];for(const H in F)v(F[H].object),delete F[H];delete Y[J]}}delete r[G.id]}function I(G){for(const $ in r){const pe=r[$];for(const Y in pe){const J=pe[Y];if(J[G.id]===void 0)continue;const F=J[G.id];for(const H in F)v(F[H].object),delete F[H];delete J[G.id]}}}function b(G){for(const $ in r){const pe=r[$],Y=G.isInstancedMesh===!0?G.id:0,J=pe[Y];if(J!==void 0){for(const F in J){const H=J[F];for(const te in H)v(H[te].object),delete H[te];delete J[F]}delete pe[Y],Object.keys(pe).length===0&&delete r[$]}}}function U(){q(),h=!0,c!==o&&(c=o,d(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:U,resetDefaultState:q,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:y,disableUnusedAttributes:O}}function LE(s,e,i){let r;function o(m){r=m}function c(m,d){s.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,v){v!==0&&(s.drawArraysInstanced(r,m,d,v),i.update(d,r,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,v);let g=0;for(let S=0;S<v;S++)g+=d[S];i.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function UE(s,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function h(I){return!(I!==Ui&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const b=I===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!b)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(rt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const M=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:M,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:w,maxSamples:z,samples:P}}function NE(s){const e=this;let i=null,r=0,o=!1,c=!1;const h=new Nr,p=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(M,g){const S=M.length!==0||g||r!==0||o;return o=g,r=M.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,g){i=v(M,g,0)},this.setState=function(M,g,S){const A=M.clippingPlanes,D=M.clipIntersection,y=M.clipShadows,x=s.get(M);if(!o||A===null||A.length===0||c&&!y)c?v(null):d();else{const O=c?0:r,B=O*4;let w=x.clippingState||null;m.value=w,w=v(A,g,B,S);for(let z=0;z!==B;++z)w[z]=i[z];x.clippingState=w,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=O}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(M,g,S,A){const D=M!==null?M.length:0;let y=null;if(D!==0){if(y=m.value,A!==!0||y===null){const x=S+D*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let B=0,w=S;B!==D;++B,w+=4)h.copy(M[B]).applyMatrix4(O,p),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const sr=4,Vg=[.125,.215,.35,.446,.526,.582],Pr=20,OE=256,Wl=new t2,Gg=new Lt;let qh=null,Yh=0,Kh=0,Qh=!1;const PE=new ee;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:h=256,position:p=PE}=c;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qh,Yh,Kh),this._renderer.xr.enabled=Qh,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:ba,format:Ui,colorSpace:jc,depthBuffer:!1},o=kg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(c)),this._blurMaterial=zE(c,e,i),this._ggxMaterial=IE(c,e,i)}return o}_compileMaterial(e){const i=new yi(new Xn,e);this._renderer.compile(i,Wl)}_sceneToCubeUV(e,i,r,o,c){const m=new fi(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],M=this._renderer,g=M.autoClear,S=M.toneMapping;M.getClearColor(Gg),M.toneMapping=Zi,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(o),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yi(new ro,new Jl({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(Gg),x=!0);for(let B=0;B<6;B++){const w=B%3;w===0?(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):w===1?(m.up.set(0,0,d[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const z=this._cubeSize;Os(o,w*z,B>2?z:0,z,z),M.setRenderTarget(o),x&&M.render(D,m),M.render(e,m)}M.toneMapping=S,M.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===zr||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const c=o?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Os(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),M=Math.sqrt(d*d-v*v),g=0+d*1.25,S=M*g,{_lodMax:A}=this,D=this._sizeLods[r],y=3*D*(r>A-sr?r-A+sr:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=A-i,Os(c,y,x,3*D,2*D),o.setRenderTarget(c),o.render(p,Wl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Os(e,y,x,3*D,2*D),o.setRenderTarget(e),o.render(p,Wl)}_blur(e,i,r,o,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,o,"latitudinal",c),this._halfBlur(h,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,M=this._lodMeshes[o];M.material=d;const g=d.uniforms,S=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Pr-1),D=c/A,y=isFinite(c)?1+Math.floor(v*D):Pr;y>Pr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Pr}`);const x=[];let O=0;for(let I=0;I<Pr;++I){const b=I/D,U=Math.exp(-b*b/2);x.push(U),I===0?O+=U:I<y&&(O+=2*U)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=A,g.mipInt.value=B-r;const w=this._sizeLods[o],z=3*w*(o>B-sr?o-B+sr:0),P=4*(this._cubeSize-w);Os(i,z,P,3*w,2*w),m.setRenderTarget(i),m.render(M,Wl)}}function FE(s){const e=[],i=[],r=[];let o=s;const c=s-sr+1+Vg.length;for(let h=0;h<c;h++){const p=Math.pow(2,o);e.push(p);let m=1/p;h>s-sr?m=Vg[h-s+sr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,M=1+d,g=[v,v,M,v,M,M,v,v,M,M,v,M],S=6,A=6,D=3,y=2,x=1,O=new Float32Array(D*A*S),B=new Float32Array(y*A*S),w=new Float32Array(x*A*S);for(let P=0;P<S;P++){const I=P%3*2/3-1,b=P>2?0:-1,U=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];O.set(U,D*A*P),B.set(g,y*A*P);const q=[P,P,P,P,P,P];w.set(q,x*A*P)}const z=new Xn;z.setAttribute("position",new Ni(O,D)),z.setAttribute("uv",new Ni(B,y)),z.setAttribute("faceIndex",new Ni(w,x)),r.push(new yi(z,null)),o>sr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function kg(s,e,i){const r=new qi(s,e,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,e,i,r,o){s.viewport.set(e,i,r,o),s.scissor.set(e,i,r,o)}function IE(s,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function zE(s,e,i){const r=new Float32Array(Pr),o=new ee(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Wg(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Zg(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class a2 extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Q_(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ro(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:ya});c.uniforms.tEquirect.value=i;const h=new yi(o,c),p=i.minFilter;return i.minFilter===Fr&&(i.minFilter=On),new VS(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,o);e.setRenderTarget(c)}}function BE(s){let e=new WeakMap,i=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?h(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===xh||S===Mh)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const D=new a2(A.height);return D.fromEquirectangularTexture(s,g),e.set(g,D),g.addEventListener("dispose",d),p(D.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const S=g.mapping,A=S===xh||S===Mh,D=S===zr||S===Gs;if(A||D){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Xg(s)),y=A?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const O=g.image;return A&&O&&O.height>0||D&&O&&m(O)?(r===null&&(r=new Xg(s)),y=A?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,S){return S===xh?g.mapping=zr:S===Mh&&(g.mapping=Gs),g}function m(g){let S=0;const A=6;for(let D=0;D<A;D++)g[D]!==void 0&&S++;return S===A}function d(g){const S=g.target;S.removeEventListener("dispose",d);const A=e.get(S);A!==void 0&&(e.delete(S),A.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const A=i.get(S);A!==void 0&&(i.delete(S),A.dispose())}function M(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function HE(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Bs("WebGLRenderer: "+r+" extension not supported."),o}}}function VE(s,e,i,r){const o={},c=new WeakMap;function h(M){const g=M.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",h),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(M,g){return o[g.id]===!0||(g.addEventListener("dispose",h),o[g.id]=!0,i.memory.geometries++),g}function m(M){const g=M.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function d(M){const g=[],S=M.index,A=M.attributes.position;let D=0;if(A===void 0)return;if(S!==null){const O=S.array;D=S.version;for(let B=0,w=O.length;B<w;B+=3){const z=O[B+0],P=O[B+1],I=O[B+2];g.push(z,P,P,I,I,z)}}else{const O=A.array;D=A.version;for(let B=0,w=O.length/3-1;B<w;B+=3){const z=B+0,P=B+1,I=B+2;g.push(z,P,P,I,I,z)}}const y=new(A.count>=65535?q_:Z_)(g,1);y.version=D;const x=c.get(M);x&&e.remove(x),c.set(M,y)}function v(M){const g=c.get(M);if(g){const S=M.index;S!==null&&g.version<S.version&&d(M)}else d(M);return c.get(M)}return{get:p,update:m,getWireframeAttribute:v}}function GE(s,e,i){let r;function o(M){r=M}let c,h;function p(M){c=M.type,h=M.bytesPerElement}function m(M,g){s.drawElements(r,g,c,M*h),i.update(g,r,1)}function d(M,g,S){S!==0&&(s.drawElementsInstanced(r,g,c,M*h,S),i.update(g,r,S))}function v(M,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,M,0,S);let D=0;for(let y=0;y<S;y++)D+=g[y];i.update(D,r,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function XE(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",h);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function kE(s,e,i){const r=new WeakMap,o=new sn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,M=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==M){let q=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",q)};var S=q;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let w=0;A===!0&&(w=1),D===!0&&(w=2),y===!0&&(w=3);let z=p.attributes.position.count*w,P=1;z>e.maxTextureSize&&(P=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*P*4*M),b=new k_(I,z,P,M);b.type=ki,b.needsUpdate=!0;const U=w*4;for(let G=0;G<M;G++){const $=x[G],pe=O[G],Y=B[G],J=z*P*4*G;for(let F=0;F<$.count;F++){const H=F*U;A===!0&&(o.fromBufferAttribute($,F),I[J+H+0]=o.x,I[J+H+1]=o.y,I[J+H+2]=o.z,I[J+H+3]=0),D===!0&&(o.fromBufferAttribute(pe,F),I[J+H+4]=o.x,I[J+H+5]=o.y,I[J+H+6]=o.z,I[J+H+7]=0),y===!0&&(o.fromBufferAttribute(Y,F),I[J+H+8]=o.x,I[J+H+9]=o.y,I[J+H+10]=o.z,I[J+H+11]=Y.itemSize===4?o.w:1)}}g={count:M,texture:b,size:new Rt(z,P)},r.set(p,g),p.addEventListener("dispose",q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<d.length;y++)A+=d[y];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function WE(s,e,i,r,o){let c=new WeakMap;function h(d){const v=o.render.frame,M=d.geometry,g=e.get(d,M);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const S=d.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const ZE={[C_]:"LINEAR_TONE_MAPPING",[w_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[L_]:"ACES_FILMIC_TONE_MAPPING",[N_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[U_]:"CUSTOM_TONE_MAPPING"};function qE(s,e,i,r,o,c){const h=new qi(e,i,{type:s,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Xs(e,i):void 0}),p=new qi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),m=new Xn;m.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new In([0,2,0,0,2,0],2));const d=new wS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new yi(m,d),M=new t2(-1,1,1,-1,0,1);let g=null,S=null,A=!1,D,y=null,x=[],O=!1;this.setSize=function(B,w){h.setSize(B,w),p.setSize(B,w);for(let z=0;z<x.length;z++){const P=x[z];P.setSize&&P.setSize(B,w)}},this.setEffects=function(B){x=B,O=x.length>0&&x[0].isRenderPass===!0;const w=h.width,z=h.height;for(let P=0;P<x.length;P++){const I=x[P];I.setSize&&I.setSize(w,z)}},this.begin=function(B,w){if(A||B.toneMapping===Zi&&x.length===0)return!1;if(y=w,w!==null){const z=w.width,P=w.height;(h.width!==z||h.height!==P)&&this.setSize(z,P)}return O===!1&&B.setRenderTarget(h),D=B.toneMapping,B.toneMapping=Zi,!0},this.hasRenderPass=function(){return O},this.end=function(B,w){B.toneMapping=D,A=!0;let z=h,P=p;for(let I=0;I<x.length;I++){const b=x[I];if(b.enabled!==!1&&(b.render(B,P,z,w),b.needsSwap!==!1)){const U=z;z=P,P=U}}if(g!==B.outputColorSpace||S!==B.toneMapping){g=B.outputColorSpace,S=B.toneMapping,d.defines={},Dt.getTransfer(g)===kt&&(d.defines.SRGB_TRANSFER="");const I=ZE[S];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=z.texture,B.setRenderTarget(y),B.render(v,M),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const r2=new Pn,kd=new Xs(1,1),s2=new k_,l2=new iS,o2=new Q_,qg=[],Yg=[],Kg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const o=e*i;let c=qg[o];if(c===void 0&&(c=new Float32Array(o),qg[o]=c),e!==0){r.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,s[h].toArray(c,p)}return c}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Sn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ou(s,e){let i=Yg[e];i===void 0&&(i=new Int32Array(e),Yg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function YE(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function KE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),Sn(i,e)}}function QE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),Sn(i,e)}}function JE(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),Sn(i,e)}}function jE(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(Mn(i,r))return;Jg.set(r),s.uniformMatrix2fv(this.addr,!1,Jg),Sn(i,r)}}function $E(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(Mn(i,r))return;Qg.set(r),s.uniformMatrix3fv(this.addr,!1,Qg),Sn(i,r)}}function eb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(Mn(i,r))return;Kg.set(r),s.uniformMatrix4fv(this.addr,!1,Kg),Sn(i,r)}}function tb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function nb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),Sn(i,e)}}function ib(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),Sn(i,e)}}function ab(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),Sn(i,e)}}function rb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),Sn(i,e)}}function lb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),Sn(i,e)}}function ob(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),Sn(i,e)}}function cb(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(kd.compareFunction=i.isReversedDepthBuffer()?t0:e0,c=kd):c=r2,i.setTexture2D(e||c,o)}function ub(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||l2,o)}function fb(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||o2,o)}function hb(s,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||s2,o)}function db(s){switch(s){case 5126:return YE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return jE;case 35675:return $E;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return ab;case 5125:return rb;case 36294:return sb;case 36295:return lb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}function pb(s,e){s.uniform1fv(this.addr,e)}function mb(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function gb(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function _b(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function vb(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function xb(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Mb(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Sb(s,e){s.uniform1iv(this.addr,e)}function yb(s,e){s.uniform2iv(this.addr,e)}function Eb(s,e){s.uniform3iv(this.addr,e)}function bb(s,e){s.uniform4iv(this.addr,e)}function Ab(s,e){s.uniform1uiv(this.addr,e)}function Tb(s,e){s.uniform2uiv(this.addr,e)}function Rb(s,e){s.uniform3uiv(this.addr,e)}function Cb(s,e){s.uniform4uiv(this.addr,e)}function wb(s,e,i){const r=this.cache,o=e.length,c=ou(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=kd:h=r2;for(let p=0;p!==o;++p)i.setTexture2D(e[p]||h,c[p])}function Db(s,e,i){const r=this.cache,o=e.length,c=ou(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==o;++h)i.setTexture3D(e[h]||l2,c[h])}function Lb(s,e,i){const r=this.cache,o=e.length,c=ou(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==o;++h)i.setTextureCube(e[h]||o2,c[h])}function Ub(s,e,i){const r=this.cache,o=e.length,c=ou(i,o);Mn(r,c)||(s.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==o;++h)i.setTexture2DArray(e[h]||s2,c[h])}function Nb(s){switch(s){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return Mb;case 5124:case 35670:return Sb;case 35667:case 35671:return yb;case 35668:case 35672:return Eb;case 35669:case 35673:return bb;case 5125:return Ab;case 36294:return Tb;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ub}}class Ob{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=db(i.type)}}class Pb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Nb(i.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,h=o.length;c!==h;++c){const p=o[c];p.setValue(e,i[p.id],r)}}}const Jh=/(\w+)(\])?(\[|\.)?/g;function jg(s,e){s.seq.push(e),s.map[e.id]=e}function Ib(s,e,i){const r=s.name,o=r.length;for(Jh.lastIndex=0;;){const c=Jh.exec(r),h=Jh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===o){jg(i,d===void 0?new Ob(p,s,e):new Pb(p,s,e));break}else{let M=i.map[p];M===void 0&&(M=new Fb(p),jg(i,M)),i=M}}}class Kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);Ib(p,m,this)}const o=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(h):c.push(h);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const h=e[o];h.id in i&&r.push(h)}return r}}function $g(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const zb=37297;let Bb=0;function Hb(s,e){const i=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=o;h<c;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const e_=new ut;function Vb(s){Dt._getMatrix(e_,Dt.workingColorSpace,s);const e=`mat3( ${e_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(s)){case $c:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function t_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Hb(s.getShaderSource(e),p)}else return c}function Gb(s,e){const i=Vb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Xb={[C_]:"Linear",[w_]:"Reinhard",[D_]:"Cineon",[L_]:"ACESFilmic",[N_]:"AgX",[O_]:"Neutral",[U_]:"Custom"};function kb(s,e){const i=Xb[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new ee;function Wb(){Dt.getLuminanceCoefficients(Xc);const s=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yl).join(`
`)}function qb(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Yb(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),h=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:p}}return i}function Yl(s){return s!==""}function n_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(Kb,Jb)}const Qb=new Map;function Jb(s,e){let i=_t[e];if(i===void 0){const r=Qb.get(e);if(r!==void 0)i=_t[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wd(i)}const jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(s){return s.replace(jb,$b)}function $b(s,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function r_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const eA={[kc]:"SHADOWMAP_TYPE_PCF",[ql]:"SHADOWMAP_TYPE_VSM"};function tA(s){return eA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nA={[zr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function iA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":nA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const aA={[Gs]:"ENVMAP_MODE_REFRACTION"};function rA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":aA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[R_]:"ENVMAP_BLENDING_MULTIPLY",[MM]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function lA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":sA[s.combine]||"ENVMAP_BLENDING_NONE"}function oA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function cA(s,e,i,r){const o=s.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=tA(i),d=iA(i),v=rA(i),M=lA(i),g=oA(i),S=Zb(i),A=qb(c),D=o.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Yl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Yl).join(`
`),x.length>0&&(x+=`
`)):(y=[r_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yl).join(`
`),x=[r_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+M:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?_t.tonemapping_pars_fragment:"",i.toneMapping!==Zi?kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Gb("linearToOutputTexel",i.outputColorSpace),Wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yl).join(`
`)),h=Wd(h),h=n_(h,i),h=i_(h,i),p=Wd(p),p=n_(p,i),p=i_(p,i),h=a_(h),p=a_(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const B=O+y+h,w=O+x+p,z=$g(o,o.VERTEX_SHADER,B),P=$g(o,o.FRAGMENT_SHADER,w);o.attachShader(D,z),o.attachShader(D,P),i.index0AttributeName!==void 0?o.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(D,0,"position"),o.linkProgram(D);function I(G){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(D)||"",pe=o.getShaderInfoLog(z)||"",Y=o.getShaderInfoLog(P)||"",J=$.trim(),F=pe.trim(),H=Y.trim();let te=!0,ge=!0;if(o.getProgramParameter(D,o.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,D,z,P);else{const Ae=t_(o,z,"vertex"),N=t_(o,P,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(D,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Ae+`
`+N)}else J!==""?rt("WebGLProgram: Program Info Log:",J):(F===""||H==="")&&(ge=!1);ge&&(G.diagnostics={runnable:te,programLog:J,vertexShader:{log:F,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(z),o.deleteShader(P),b=new Kc(o,D),U=Yb(o,D)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(D,zb)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=z,this.fragmentShader=P,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new hA(e),i.set(e,r)),r}}class hA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function dA(s){return s===Br||s===Qc||s===Jc}function pA(s,e,i,r,o,c){const h=new a0,p=new fA,m=new Set,d=[],v=new Map,M=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,U,q,G,$,pe){const Y=G.fog,J=$.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,te=e.get(b.envMap||F,H),ge=te&&te.mapping===au?te.image.height:null,Ae=S[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&rt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,K=N!==void 0?N.length:0;let ye=0;J.morphAttributes.position!==void 0&&(ye=1),J.morphAttributes.normal!==void 0&&(ye=2),J.morphAttributes.color!==void 0&&(ye=3);let Te,Oe,se,Me;if(Ae){const Xe=Gi[Ae];Te=Xe.vertexShader,Oe=Xe.fragmentShader}else{Te=b.vertexShader,Oe=b.fragmentShader;const Xe=p.getVertexShaderStage(b),tn=p.getFragmentShaderStage(b);p.update(b,Xe,tn),se=Xe.id,Me=tn.id}const Ee=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),nt=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,Wt=!!b.map,ot=!!b.matcap,xt=!!te,vt=!!b.aoMap,gt=!!b.lightMap,Jt=!!b.bumpMap&&b.wireframe===!1,qe=!!b.normalMap,lt=!!b.displacementMap,it=!!b.emissiveMap,ft=!!b.metalnessMap,Ct=!!b.roughnessMap,W=b.anisotropy>0,Mt=b.clearcoat>0,pt=b.dispersion>0,L=b.iridescence>0,E=b.sheen>0,Q=b.transmission>0,le=W&&!!b.anisotropyMap,fe=Mt&&!!b.clearcoatMap,Re=Mt&&!!b.clearcoatNormalMap,Le=Mt&&!!b.clearcoatRoughnessMap,he=L&&!!b.iridescenceMap,de=L&&!!b.iridescenceThicknessMap,we=E&&!!b.sheenColorMap,He=E&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Ue=!!b.specularColorMap,je=!!b.specularIntensityMap,$e=Q&&!!b.transmissionMap,st=Q&&!!b.thicknessMap,k=!!b.gradientMap,Ce=!!b.alphaMap,_e=b.alphaTest>0,De=!!b.alphaHash,ze=!!b.extensions;let be=Zi;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=s.toneMapping);const Ye={shaderID:Ae,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:Oe,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:nt,instancingColor:nt&&$.instanceColor!==null,instancingMorph:nt&&$.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Wt,matcap:ot,envMap:xt,envMapMode:xt&&te.mapping,envMapCubeUVHeight:ge,aoMap:vt,lightMap:gt,bumpMap:Jt,normalMap:qe,displacementMap:lt,emissiveMap:it,normalMapObjectSpace:qe&&b.normalMapType===bM,normalMapTangentSpace:qe&&b.normalMapType===Vd,packedNormalMap:qe&&b.normalMapType===Vd&&dA(b.normalMap.format),metalnessMap:ft,roughnessMap:Ct,anisotropy:W,anisotropyMap:le,clearcoat:Mt,clearcoatMap:fe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Le,dispersion:pt,iridescence:L,iridescenceMap:he,iridescenceThicknessMap:de,sheen:E,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:je,transmission:Q,transmissionMap:$e,thicknessMap:st,gradientMap:k,opaque:b.transparent===!1&&b.blending===zs&&b.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:De,combine:b.combine,mapUv:Wt&&A(b.map.channel),aoMapUv:vt&&A(b.aoMap.channel),lightMapUv:gt&&A(b.lightMap.channel),bumpMapUv:Jt&&A(b.bumpMap.channel),normalMapUv:qe&&A(b.normalMap.channel),displacementMapUv:lt&&A(b.displacementMap.channel),emissiveMapUv:it&&A(b.emissiveMap.channel),metalnessMapUv:ft&&A(b.metalnessMap.channel),roughnessMapUv:Ct&&A(b.roughnessMap.channel),anisotropyMapUv:le&&A(b.anisotropyMap.channel),clearcoatMapUv:fe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(b.sheenRoughnessMap.channel),specularMapUv:Pe&&A(b.specularMap.channel),specularColorMapUv:Ue&&A(b.specularColorMap.channel),specularIntensityMapUv:je&&A(b.specularIntensityMap.channel),transmissionMapUv:$e&&A(b.transmissionMap.channel),thicknessMapUv:st&&A(b.thicknessMap.channel),alphaMapUv:Ce&&A(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(qe||W),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(Wt||Ce),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&qe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Be,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ye,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Wt&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:it&&b.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xi,flipSided:b.side===Gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function y(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)U.push(q),U.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(x(U,b),O(U,b),U.push(s.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function x(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function O(b,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),U.packedNormalMap&&h.enable(22),U.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),U.numLightProbeGrids>0&&h.enable(22),U.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function B(b){const U=S[b.type];let q;if(U){const G=Gi[U];q=TS.clone(G.uniforms)}else q=b.uniforms;return q}function w(b,U){let q=v.get(U);return q!==void 0?++q.usedTimes:(q=new cA(s,U,b,o),d.push(q),v.set(U,q)),q}function z(b){if(--b.usedTimes===0){const U=d.indexOf(b);d[U]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function P(b){p.remove(b)}function I(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:B,acquireProgram:w,releaseProgram:z,releaseShaderCache:P,programs:d,dispose:I}}function mA(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let p=s.get(h);return p===void 0&&(p={},s.set(h,p)),p}function r(h){s.delete(h)}function o(h,p,m){s.get(h)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function gA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function s_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function l_(){const s=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function h(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,A,D,y,x){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:S,material:A,materialVariant:h(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:x},s[e]=O):(O.id=g.id,O.object=g,O.geometry=S,O.material=A,O.materialVariant=h(g),O.groupOrder=D,O.renderOrder=g.renderOrder,O.z=y,O.group=x),e++,O}function m(g,S,A,D,y,x){const O=p(g,S,A,D,y,x);A.transmission>0?r.push(O):A.transparent===!0?o.push(O):i.push(O)}function d(g,S,A,D,y,x){const O=p(g,S,A,D,y,x);A.transmission>0?r.unshift(O):A.transparent===!0?o.unshift(O):i.unshift(O)}function v(g,S,A){i.length>1&&i.sort(g||gA),r.length>1&&r.sort(S||s_),o.length>1&&o.sort(S||s_),A&&(i.reverse(),r.reverse(),o.reverse())}function M(){for(let g=e,S=s.length;g<S;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:d,finish:M,sort:v}}function _A(){let s=new WeakMap;function e(r,o){const c=s.get(r);let h;return c===void 0?(h=new l_,s.set(r,[h])):o>=c.length?(h=new l_,c.push(h)):h=c[o],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function vA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Lt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=i,i}}}function xA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let MA=0;function SA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yA(s){const e=new vA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ee);const o=new ee,c=new en,h=new en;function p(d){let v=0,M=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,A=0,D=0,y=0,x=0,O=0,B=0,w=0,z=0,P=0,I=0;d.sort(SA);for(let U=0,q=d.length;U<q;U++){const G=d[U],$=G.color,pe=G.intensity,Y=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Br?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=$.r*pe,M+=$.g*pe,g+=$.b*pe;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],pe);I++}else if(G.isDirectionalLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=G.shadow.matrix,O++}r.directional[S]=F,S++}else if(G.isSpotLight){const F=e.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy($).multiplyScalar(pe),F.distance=Y,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[D]=F;const H=G.shadow;if(G.map&&(r.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&P++),r.spotLightMatrix[D]=H.matrix,G.castShadow){const te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[D]=te,r.spotShadowMap[D]=J,w++}D++}else if(G.isRectAreaLight){const F=e.get(G);F.color.copy($).multiplyScalar(pe),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=F,y++}else if(G.isPointLight){const F=e.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[A]=te,r.pointShadowMap[A]=J,r.pointShadowMatrix[A]=G.shadow.matrix,B++}r.point[A]=F,A++}else if(G.isHemisphereLight){const F=e.get(G);F.skyColor.copy(G.color).multiplyScalar(pe),F.groundColor.copy(G.groundColor).multiplyScalar(pe),r.hemi[x]=F,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==S||b.pointLength!==A||b.spotLength!==D||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==O||b.numPointShadows!==B||b.numSpotShadows!==w||b.numSpotMaps!==z||b.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=D,r.rectArea.length=y,r.point.length=A,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=w+z-P,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=I,b.directionalLength=S,b.pointLength=A,b.spotLength=D,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=O,b.numPointShadows=B,b.numSpotShadows=w,b.numSpotMaps=z,b.numLightProbes=I,r.version=MA++)}function m(d,v){let M=0,g=0,S=0,A=0,D=0;const y=v.matrixWorldInverse;for(let x=0,O=d.length;x<O;x++){const B=d[x];if(B.isDirectionalLight){const w=r.directional[M];w.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),M++}else if(B.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),S++}else if(B.isRectAreaLight){const w=r.rectArea[A];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(B.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),A++}else if(B.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),g++}else if(B.isHemisphereLight){const w=r.hemi[D];w.direction.setFromMatrixPosition(B.matrixWorld),w.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:r}}function o_(s){const e=new yA(s),i=[],r=[],o=[];function c(g){M.camera=g,i.length=0,r.length=0,o.length=0}function h(g){i.push(g)}function p(g){r.push(g)}function m(g){o.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const M={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:M,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function EA(s){let e=new WeakMap;function i(o,c=0){const h=e.get(o);let p;return h===void 0?(p=new o_(s),e.set(o,[p])):c>=h.length?(p=new o_(s),h.push(p)):p=h[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TA=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],RA=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],c_=new en,Zl=new ee,jh=new ee;function CA(s,e,i){let r=new r0;const o=new Rt,c=new Rt,h=new sn,p=new LS,m=new US,d={},v=i.maxTextureSize,M={[lr]:Gn,[Gn]:lr,[Xi]:Xi},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:bA,fragmentShader:AA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const A=new Xn;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new yi(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let x=this.type;this.render=function(P,I,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===tM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const U=s.getRenderTarget(),q=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ya),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const pe=x!==this.type;pe&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(J=>J.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,J=P.length;Y<J;Y++){const F=P[Y],H=F.shadow;if(H===void 0){rt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const te=H.getFrameExtents();o.multiply(te),c.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/te.x),o.x=c.x*te.x,H.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/te.y),o.y=c.y*te.y,H.mapSize.y=c.y));const ge=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ge,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ql){if(F.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(o.x,o.y,{format:Br,type:ba,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Xs(o.x,o.y,ki),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn}else F.isPointLight?(H.map=new a2(o.x),H.map.depthTexture=new bS(o.x,Yi)):(H.map=new qi(o.x,o.y),H.map.depthTexture=new Xs(o.x,o.y,Yi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Aa,this.type===kc?(H.map.depthTexture.compareFunction=ge?t0:e0,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn);H.camera.updateProjectionMatrix()}const Ae=H.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Ae;N++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,N),s.clear();else{N===0&&(s.setRenderTarget(H.map),s.clear());const K=H.getViewport(N);h.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),$.viewport(h)}if(F.isPointLight){const K=H.camera,ye=H.matrix,Te=F.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),Zl.setFromMatrixPosition(F.matrixWorld),K.position.copy(Zl),jh.copy(K.position),jh.add(TA[N]),K.up.copy(RA[N]),K.lookAt(jh),K.updateMatrixWorld(),ye.makeTranslation(-Zl.x,-Zl.y,-Zl.z),c_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(c_,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),w(I,b,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===ql&&O(H,b),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(U,q,G)};function O(P,I){const b=e.update(D);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qi(o.x,o.y,{format:Br,type:ba})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,b,g,D,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,b,S,D,null)}function B(P,I,b,U){let q=null;const G=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)q=G;else if(q=b.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const $=q.uuid,pe=I.uuid;let Y=d[$];Y===void 0&&(Y={},d[$]=Y);let J=Y[pe];J===void 0&&(J=q.clone(),Y[pe]=J,I.addEventListener("dispose",z)),q=J}if(q.visible=I.visible,q.wireframe=I.wireframe,U===ql?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:M[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,b.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const $=s.properties.get(q);$.light=b}return q}function w(P,I,b,U,q){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&q===ql)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const pe=e.update(P),Y=P.material;if(Array.isArray(Y)){const J=pe.groups;for(let F=0,H=J.length;F<H;F++){const te=J[F],ge=Y[te.materialIndex];if(ge&&ge.visible){const Ae=B(P,ge,U,q);P.onBeforeShadow(s,P,I,b,pe,Ae,te),s.renderBufferDirect(b,null,pe,Ae,P,te),P.onAfterShadow(s,P,I,b,pe,Ae,te)}}}else if(Y.visible){const J=B(P,Y,U,q);P.onBeforeShadow(s,P,I,b,pe,J,null),s.renderBufferDirect(b,null,pe,J,P,null),P.onAfterShadow(s,P,I,b,pe,J,null)}}const $=P.children;for(let pe=0,Y=$.length;pe<Y;pe++)w($[pe],I,b,U,q)}function z(P){P.target.removeEventListener("dispose",z);for(const b in d){const U=d[b],q=P.target.uuid;q in U&&(U[q].dispose(),delete U[q])}}}function wA(s,e){function i(){let k=!1;const Ce=new sn;let _e=null;const De=new sn(0,0,0,0);return{setMask:function(ze){_e!==ze&&!k&&(s.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){k=ze},setClear:function(ze,be,Ye,Xe,tn){tn===!0&&(ze*=Xe,be*=Xe,Ye*=Xe),Ce.set(ze,be,Ye,Xe),De.equals(Ce)===!1&&(s.clearColor(ze,be,Ye,Xe),De.copy(Ce))},reset:function(){k=!1,_e=null,De.set(-1,0,0,0)}}}function r(){let k=!1,Ce=!1,_e=null,De=null,ze=null;return{setReversed:function(be){if(Ce!==be){const Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const Xe=ze;ze=null,this.setClear(Xe)}},getReversed:function(){return Ce},setTest:function(be){be?Ee(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(be){_e!==be&&!k&&(s.depthMask(be),_e=be)},setFunc:function(be){if(Ce&&(be=OM[be]),De!==be){switch(be){case nd:s.depthFunc(s.NEVER);break;case id:s.depthFunc(s.ALWAYS);break;case ad:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case rd:s.depthFunc(s.EQUAL);break;case sd:s.depthFunc(s.GEQUAL);break;case ld:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=be}},setLocked:function(be){k=be},setClear:function(be){ze!==be&&(ze=be,Ce&&(be=1-be),s.clearDepth(be))},reset:function(){k=!1,_e=null,De=null,ze=null,Ce=!1}}}function o(){let k=!1,Ce=null,_e=null,De=null,ze=null,be=null,Ye=null,Xe=null,tn=null;return{setTest:function(zt){k||(zt?Ee(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(zt){Ce!==zt&&!k&&(s.stencilMask(zt),Ce=zt)},setFunc:function(zt,jn,$n){(_e!==zt||De!==jn||ze!==$n)&&(s.stencilFunc(zt,jn,$n),_e=zt,De=jn,ze=$n)},setOp:function(zt,jn,$n){(be!==zt||Ye!==jn||Xe!==$n)&&(s.stencilOp(zt,jn,$n),be=zt,Ye=jn,Xe=$n)},setLocked:function(zt){k=zt},setClear:function(zt){tn!==zt&&(s.clearStencil(zt),tn=zt)},reset:function(){k=!1,Ce=null,_e=null,De=null,ze=null,be=null,Ye=null,Xe=null,tn=null}}}const c=new i,h=new r,p=new o,m=new WeakMap,d=new WeakMap;let v={},M={},g={},S=new WeakMap,A=[],D=null,y=!1,x=null,O=null,B=null,w=null,z=null,P=null,I=null,b=new Lt(0,0,0),U=0,q=!1,G=null,$=null,pe=null,Y=null,J=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),H=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),H=te>=2);let Ae=null,N={};const K=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Te=new sn().fromArray(K),Oe=new sn().fromArray(ye);function se(k,Ce,_e,De){const ze=new Uint8Array(4),be=s.createTexture();s.bindTexture(k,be),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<_e;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ce+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return be}const Me={};Me[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ee(s.DEPTH_TEST),h.setFunc(Vs),Jt(!1),qe(ag),Ee(s.CULL_FACE),vt(ya);function Ee(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function Be(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function nt(k,Ce){return g[k]!==Ce?(s.bindFramebuffer(k,Ce),g[k]=Ce,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(k,Ce){let _e=A,De=!1;if(k){_e=S.get(Ce),_e===void 0&&(_e=[],S.set(Ce,_e));const ze=k.textures;if(_e.length!==ze.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ye=ze.length;be<Ye;be++)_e[be]=s.COLOR_ATTACHMENT0+be;_e.length=ze.length,De=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,De=!0);De&&s.drawBuffers(_e)}function Wt(k){return D!==k?(s.useProgram(k),D=k,!0):!1}const ot={[Or]:s.FUNC_ADD,[iM]:s.FUNC_SUBTRACT,[aM]:s.FUNC_REVERSE_SUBTRACT};ot[rM]=s.MIN,ot[sM]=s.MAX;const xt={[lM]:s.ZERO,[oM]:s.ONE,[cM]:s.SRC_COLOR,[ed]:s.SRC_ALPHA,[mM]:s.SRC_ALPHA_SATURATE,[dM]:s.DST_COLOR,[fM]:s.DST_ALPHA,[uM]:s.ONE_MINUS_SRC_COLOR,[td]:s.ONE_MINUS_SRC_ALPHA,[pM]:s.ONE_MINUS_DST_COLOR,[hM]:s.ONE_MINUS_DST_ALPHA,[gM]:s.CONSTANT_COLOR,[_M]:s.ONE_MINUS_CONSTANT_COLOR,[vM]:s.CONSTANT_ALPHA,[xM]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(k,Ce,_e,De,ze,be,Ye,Xe,tn,zt){if(k===ya){y===!0&&(Be(s.BLEND),y=!1);return}if(y===!1&&(Ee(s.BLEND),y=!0),k!==nM){if(k!==x||zt!==q){if((O!==Or||z!==Or)&&(s.blendEquation(s.FUNC_ADD),O=Or,z=Or),zt)switch(k){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $h:s.blendFunc(s.ONE,s.ONE);break;case rg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",k);break}else switch(k){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $h:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",k);break}B=null,w=null,P=null,I=null,b.set(0,0,0),U=0,x=k,q=zt}return}ze=ze||Ce,be=be||_e,Ye=Ye||De,(Ce!==O||ze!==z)&&(s.blendEquationSeparate(ot[Ce],ot[ze]),O=Ce,z=ze),(_e!==B||De!==w||be!==P||Ye!==I)&&(s.blendFuncSeparate(xt[_e],xt[De],xt[be],xt[Ye]),B=_e,w=De,P=be,I=Ye),(Xe.equals(b)===!1||tn!==U)&&(s.blendColor(Xe.r,Xe.g,Xe.b,tn),b.copy(Xe),U=tn),x=k,q=!1}function gt(k,Ce){k.side===Xi?Be(s.CULL_FACE):Ee(s.CULL_FACE);let _e=k.side===Gn;Ce&&(_e=!_e),Jt(_e),k.blending===zs&&k.transparent===!1?vt(ya):vt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;p.setTest(De),De&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function qe(k){k!==$x?(Ee(s.CULL_FACE),k!==$&&(k===ag?s.cullFace(s.BACK):k===eM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),$=k}function lt(k){k!==pe&&(H&&s.lineWidth(k),pe=k)}function it(k,Ce,_e){k?(Ee(s.POLYGON_OFFSET_FILL),(Y!==Ce||J!==_e)&&(Y=Ce,J=_e,h.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,_e))):Be(s.POLYGON_OFFSET_FILL)}function ft(k){k?Ee(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function Ct(k){k===void 0&&(k=s.TEXTURE0+F-1),Ae!==k&&(s.activeTexture(k),Ae=k)}function W(k,Ce,_e){_e===void 0&&(Ae===null?_e=s.TEXTURE0+F-1:_e=Ae);let De=N[_e];De===void 0&&(De={type:void 0,texture:void 0},N[_e]=De),(De.type!==k||De.texture!==Ce)&&(Ae!==_e&&(s.activeTexture(_e),Ae=_e),s.bindTexture(k,Ce||Me[k]),De.type=k,De.texture=Ce)}function Mt(){const k=N[Ae];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function E(){try{s.texSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Q(){try{s.texSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Re(){try{s.texStorage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Le(){try{s.texStorage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function he(){try{s.texImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function de(){try{s.texImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function we(k){return M[k]!==void 0?M[k]:s.getParameter(k)}function He(k,Ce){M[k]!==Ce&&(s.pixelStorei(k,Ce),M[k]=Ce)}function Pe(k){Te.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Ue(k){Oe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Oe.copy(k))}function je(k,Ce){let _e=d.get(Ce);_e===void 0&&(_e=new WeakMap,d.set(Ce,_e));let De=_e.get(k);De===void 0&&(De=s.getUniformBlockIndex(Ce,k.name),_e.set(k,De))}function $e(k,Ce){const De=d.get(Ce).get(k);m.get(Ce)!==De&&(s.uniformBlockBinding(Ce,De,k.__bindingPointIndex),m.set(Ce,De))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},M={},Ae=null,N={},g={},S=new WeakMap,A=[],D=null,y=!1,x=null,O=null,B=null,w=null,z=null,P=null,I=null,b=new Lt(0,0,0),U=0,q=!1,G=null,$=null,pe=null,Y=null,J=null,Te.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Ee,disable:Be,bindFramebuffer:nt,drawBuffers:Qe,useProgram:Wt,setBlending:vt,setMaterial:gt,setFlipSided:Jt,setCullFace:qe,setLineWidth:lt,setPolygonOffset:it,setScissorTest:ft,activeTexture:Ct,bindTexture:W,unbindTexture:Mt,compressedTexImage2D:pt,compressedTexImage3D:L,texImage2D:he,texImage3D:de,pixelStorei:He,getParameter:we,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Re,texStorage3D:Le,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Pe,viewport:Ue,reset:st}}function DA(s,e,i,r,o,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Rt,v=new WeakMap,M=new Set;let g;const S=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(L,E){return A?new OffscreenCanvas(L,E):to("canvas")}function y(L,E,Q){let le=1;const fe=pt(L);if((fe.width>Q||fe.height>Q)&&(le=Q/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(le*fe.width),Le=Math.floor(le*fe.height);g===void 0&&(g=D(Re,Le));const he=E?D(Re,Le):g;return he.width=Re,he.height=Le,he.getContext("2d").drawImage(L,0,0,Re,Le),rt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Re+"x"+Le+")."),he}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),L;return L}function x(L){return L.generateMipmaps}function O(L){s.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(L,E,Q,le,fe,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Le;le&&(Le=e.get("EXT_texture_norm16"),Le||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8),Q===s.UNSIGNED_SHORT&&Le&&(he=Le.R16_EXT),Q===s.SHORT&&Le&&(he=Le.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8),Q===s.UNSIGNED_SHORT&&Le&&(he=Le.RG16_EXT),Q===s.SHORT&&Le&&(he=Le.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(Q===s.UNSIGNED_SHORT&&Le&&(he=Le.RGB16_EXT),Q===s.SHORT&&Le&&(he=Le.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const de=Re?$c:Dt.getTransfer(fe);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=de===kt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Le&&(he=Le.RGBA16_EXT),Q===s.SHORT&&Le&&(he=Le.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function z(L,E){let Q;return L?E===null||E===Yi||E===$l?Q=s.DEPTH24_STENCIL8:E===ki?Q=s.DEPTH32F_STENCIL8:E===jl&&(Q=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===$l?Q=s.DEPTH_COMPONENT24:E===ki?Q=s.DEPTH_COMPONENT32F:E===jl&&(Q=s.DEPTH_COMPONENT16),Q}function P(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&M.delete(E)}function b(L){const E=L.target;E.removeEventListener("dispose",b),G(E)}function U(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Q=L.source,le=S.get(Q);if(le){const fe=le[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(L),Object.keys(le).length===0&&S.delete(Q)}r.remove(L)}function q(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const Q=L.source,le=S.get(Q);delete le[E.__cacheKey],h.memory.textures--}function G(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let fe=0;fe<E.__webglFramebuffer[le].length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[le][fe]);else s.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)s.deleteFramebuffer(E.__webglFramebuffer[le]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let le=0,fe=Q.length;le<fe;le++){const Re=r.get(Q[le]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),h.memory.textures--),r.remove(Q[le])}r.remove(L)}let $=0;function pe(){$=0}function Y(){return $}function J(L){$=L}function F(){const L=$;return L>=o.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),$+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function te(L,E){const Q=r.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const le=L.image;if(le===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function ge(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Be(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function Ae(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Be(Q,L,E);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function N(L,E){const Q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){nt(Q,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}const K={[cd]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[ud]:s.MIRRORED_REPEAT},ye={[wn]:s.NEAREST,[yM]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Sh]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},Te={[AM]:s.NEVER,[DM]:s.ALWAYS,[TM]:s.LESS,[e0]:s.LEQUAL,[RM]:s.EQUAL,[t0]:s.GEQUAL,[CM]:s.GREATER,[wM]:s.NOTEQUAL};function Oe(L,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Sh||E.magFilter===vc||E.magFilter===Fr||E.minFilter===On||E.minFilter===Sh||E.minFilter===vc||E.minFilter===Fr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,K[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ye[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==vc&&E.minFilter!==Fr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function se(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const le=E.source;let fe=S.get(le);fe===void 0&&(fe={},S.set(le,fe));const Re=H(E);if(Re!==L.__cacheKey){fe[Re]===void 0&&(fe[Re]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),fe[Re].usedTimes++;const Le=fe[L.__cacheKey];Le!==void 0&&(fe[L.__cacheKey].usedTimes--,Le.usedTimes===0&&q(E)),L.__cacheKey=Re,L.__webglTexture=fe[Re].texture}return Q}function Me(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function Ee(L,E,Q,le){const Re=L.updateRanges;if(Re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Q,le,E.data);else{Re.sort((He,Pe)=>He.start-Pe.start);let Le=0;for(let He=1;He<Re.length;He++){const Pe=Re[Le],Ue=Re[He],je=Pe.start+Pe.count,$e=Me(Ue.start,E.width,4),st=Me(Pe.start,E.width,4);Ue.start<=je+1&&$e===st&&Me(Ue.start+Ue.count-1,E.width,4)===$e?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Le,Re[Le]=Ue)}Re.length=Le+1;const he=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),we=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let He=0,Pe=Re.length;He<Pe;He++){const Ue=Re[He],je=Math.floor(Ue.start/4),$e=Math.ceil(Ue.count/4),st=je%E.width,k=Math.floor(je/E.width),Ce=$e,_e=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,st),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,st,k,Ce,_e,Q,le,E.data)}L.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,he),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Be(L,E,Q){let le=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=s.TEXTURE_3D);const fe=se(L,E),Re=E.source;i.bindTexture(le,L.__webglTexture,s.TEXTURE0+Q);const Le=r.get(Re);if(Re.version!==Le.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=Dt.getPrimaries(Dt.workingColorSpace),De=E.colorSpace===rr?null:Dt.getPrimaries(E.colorSpace),ze=E.colorSpace===rr||_e===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let de=y(E.image,!1,o.maxTextureSize);de=Mt(E,de);const we=c.convert(E.format,E.colorSpace),He=c.convert(E.type);let Pe=w(E.internalFormat,we,He,E.normalized,E.colorSpace,E.isVideoTexture);Oe(le,E);let Ue;const je=E.mipmaps,$e=E.isVideoTexture!==!0,st=Le.__version===void 0||fe===!0,k=Re.dataReady,Ce=P(E,de);if(E.isDepthTexture)Pe=z(E.format===Ir,E.type),st&&($e?i.texStorage2D(s.TEXTURE_2D,1,Pe,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Pe,de.width,de.height,0,we,He,null));else if(E.isDataTexture)if(je.length>0){$e&&st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let _e=0,De=je.length;_e<De;_e++)Ue=je[_e],$e?k&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,we,He,Ue.data):i.texImage2D(s.TEXTURE_2D,_e,Pe,Ue.width,Ue.height,0,we,He,Ue.data);E.generateMipmaps=!1}else $e?(st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,de.width,de.height),k&&Ee(E,de,we,He)):i.texImage2D(s.TEXTURE_2D,0,Pe,de.width,de.height,0,we,He,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&st&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,je[0].width,je[0].height,de.depth);for(let _e=0,De=je.length;_e<De;_e++)if(Ue=je[_e],E.format!==Ui)if(we!==null)if($e){if(k)if(E.layerUpdates.size>0){const ze=Hg(Ue.width,Ue.height,E.format,E.type);for(const be of E.layerUpdates){const Ye=Ue.data.subarray(be*ze/Ue.data.BYTES_PER_ELEMENT,(be+1)*ze/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,be,Ue.width,Ue.height,1,we,Ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,de.depth,we,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Pe,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,de.depth,we,He,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,_e,Pe,Ue.width,Ue.height,de.depth,0,we,He,Ue.data)}else{$e&&st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let _e=0,De=je.length;_e<De;_e++)Ue=je[_e],E.format!==Ui?we!==null?$e?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,we,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,_e,Pe,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,we,He,Ue.data):i.texImage2D(s.TEXTURE_2D,_e,Pe,Ue.width,Ue.height,0,we,He,Ue.data)}else if(E.isDataArrayTexture)if($e){if(st&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,de.width,de.height,de.depth),k)if(E.layerUpdates.size>0){const _e=Hg(de.width,de.height,E.format,E.type);for(const De of E.layerUpdates){const ze=de.data.subarray(De*_e/de.data.BYTES_PER_ELEMENT,(De+1)*_e/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,de.width,de.height,1,we,He,ze)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,He,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,de.width,de.height,de.depth,0,we,He,de.data);else if(E.isData3DTexture)$e?(st&&i.texStorage3D(s.TEXTURE_3D,Ce,Pe,de.width,de.height,de.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,He,de.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,de.width,de.height,de.depth,0,we,He,de.data);else if(E.isFramebufferTexture){if(st)if($e)i.texStorage2D(s.TEXTURE_2D,Ce,Pe,de.width,de.height);else{let _e=de.width,De=de.height;for(let ze=0;ze<Ce;ze++)i.texImage2D(s.TEXTURE_2D,ze,Pe,_e,De,0,we,He,null),_e>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),M.add(E),_e.onpaint=De=>{const ze=De.changedElements;for(const be of M)ze.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const ze=s.RGBA,be=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,be,Ye,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if($e&&st){const _e=pt(je[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,_e.width,_e.height)}for(let _e=0,De=je.length;_e<De;_e++)Ue=je[_e],$e?k&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,we,He,Ue):i.texImage2D(s.TEXTURE_2D,_e,Pe,we,He,Ue);E.generateMipmaps=!1}else if($e){if(st){const _e=pt(de);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,_e.width,_e.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,He,de)}else i.texImage2D(s.TEXTURE_2D,0,Pe,we,He,de);x(E)&&O(le),Le.__version=Re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function nt(L,E,Q){if(E.image.length!==6)return;const le=se(L,E),fe=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const Re=r.get(fe);if(fe.version!==Re.__version||le===!0){i.activeTexture(s.TEXTURE0+Q);const Le=Dt.getPrimaries(Dt.workingColorSpace),he=E.colorSpace===rr?null:Dt.getPrimaries(E.colorSpace),de=E.colorSpace===rr||Le===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,He=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let be=0;be<6;be++)!we&&!He?Pe[be]=y(E.image[be],!0,o.maxCubemapSize):Pe[be]=He?E.image[be].image:E.image[be],Pe[be]=Mt(E,Pe[be]);const Ue=Pe[0],je=c.convert(E.format,E.colorSpace),$e=c.convert(E.type),st=w(E.internalFormat,je,$e,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ce=Re.__version===void 0||le===!0,_e=fe.dataReady;let De=P(E,Ue);Oe(s.TEXTURE_CUBE_MAP,E);let ze;if(we){k&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,Ue.width,Ue.height);for(let be=0;be<6;be++){ze=Pe[be].mipmaps;for(let Ye=0;Ye<ze.length;Ye++){const Xe=ze[Ye];E.format!==Ui?je!==null?k?_e&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,Xe.width,Xe.height,je,Xe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,st,Xe.width,Xe.height,0,Xe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,Xe.width,Xe.height,je,$e,Xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,st,Xe.width,Xe.height,0,je,$e,Xe.data)}}}else{if(ze=E.mipmaps,k&&Ce){ze.length>0&&De++;const be=pt(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,be.width,be.height)}for(let be=0;be<6;be++)if(He){k?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Pe[be].width,Pe[be].height,je,$e,Pe[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Pe[be].width,Pe[be].height,0,je,$e,Pe[be].data);for(let Ye=0;Ye<ze.length;Ye++){const tn=ze[Ye].image[be].image;k?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,tn.width,tn.height,je,$e,tn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,st,tn.width,tn.height,0,je,$e,tn.data)}}else{k?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,$e,Pe[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,je,$e,Pe[be]);for(let Ye=0;Ye<ze.length;Ye++){const Xe=ze[Ye];k?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,je,$e,Xe.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,st,je,$e,Xe.image[be])}}}x(E)&&O(s.TEXTURE_CUBE_MAP),Re.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Qe(L,E,Q,le,fe,Re){const Le=c.convert(Q.format,Q.colorSpace),he=c.convert(Q.type),de=w(Q.internalFormat,Le,he,Q.normalized,Q.colorSpace),we=r.get(E),He=r.get(Q);if(He.__renderTarget=E,!we.__hasExternalTextures){const Pe=Math.max(1,E.width>>Re),Ue=Math.max(1,E.height>>Re);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Re,de,Pe,Ue,E.depth,0,Le,he,null):i.texImage2D(fe,Re,de,Pe,Ue,0,Le,he,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Ct(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,fe,He.__webglTexture,0,ft(E)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,fe,He.__webglTexture,Re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(L,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const le=E.depthTexture,fe=le&&le.isDepthTexture?le.type:null,Re=z(E.stencilBuffer,fe),Le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(E),Re,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(E),Re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Re,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,L)}else{const le=E.textures;for(let fe=0;fe<le.length;fe++){const Re=le[fe],Le=c.convert(Re.format,Re.colorSpace),he=c.convert(Re.type),de=w(Re.internalFormat,Le,he,Re.normalized,Re.colorSpace);Ct(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(E),de,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(L,E,Q){const le=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),He=c.convert(E.depthTexture.type);let Pe;E.depthTexture.format===Aa?Pe=s.DEPTH_COMPONENT24:E.depthTexture.format===Ir&&(Pe=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Pe,E.width,E.height,0,we,He,null)}}else te(E.depthTexture,0);const Re=fe.__webglTexture,Le=ft(E),he=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,de=E.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)Ct(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,he,Re,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,de,he,Re,0);else if(E.depthTexture.format===Ir)Ct(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,he,Re,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,de,he,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(L){const E=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",fe)};le.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=le}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let le=0;le<6;le++)ot(E.__webglFramebuffer[le],L,le);else{const le=L.texture.mipmaps;le&&le.length>0?ot(E.__webglFramebuffer[0],L,0):ot(E.__webglFramebuffer,L,0)}else if(Q){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=s.createRenderbuffer(),Wt(E.__webglDepthbuffer[le],L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Re)}}else{const le=L.texture.mipmaps;if(le&&le.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Wt(E.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(L,E,Q){const le=r.get(L);E!==void 0&&Qe(le.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&xt(L)}function gt(L){const E=L.texture,Q=r.get(L),le=r.get(E);L.addEventListener("dispose",b);const fe=L.textures,Re=L.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=E.version,h.memory.textures++),Re){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let de=0;de<E.mipmaps.length;de++)Q.__webglFramebuffer[he][de]=s.createFramebuffer()}else Q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)Q.__webglFramebuffer[he]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Le)for(let he=0,de=fe.length;he<de;he++){const we=r.get(fe[he]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&Ct(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<fe.length;he++){const de=fe[he];Q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const we=c.convert(de.format,de.colorSpace),He=c.convert(de.type),Pe=w(de.internalFormat,we,He,de.normalized,de.colorSpace,L.isXRRenderTarget===!0),Ue=ft(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){i.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Qe(Q.__webglFramebuffer[he][de],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else Qe(Q.__webglFramebuffer[he],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(E)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let he=0,de=fe.length;he<de;he++){const we=fe[he],He=r.get(we);let Pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,He.__webglTexture),Oe(Pe,we),Qe(Q.__webglFramebuffer,L,we,s.COLOR_ATTACHMENT0+he,Pe,0),x(we)&&O(Pe)}i.unbindTexture()}else{let he=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(he,le.__webglTexture),Oe(he,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Qe(Q.__webglFramebuffer[de],L,E,s.COLOR_ATTACHMENT0,he,de);else Qe(Q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,he,0);x(E)&&O(he),i.unbindTexture()}L.depthBuffer&&xt(L)}function Jt(L){const E=L.textures;for(let Q=0,le=E.length;Q<le;Q++){const fe=E[Q];if(x(fe)){const Re=B(L),Le=r.get(fe).__webglTexture;i.bindTexture(Re,Le),O(Re),i.unbindTexture()}}}const qe=[],lt=[];function it(L){if(L.samples>0){if(Ct(L)===!1){const E=L.textures,Q=L.width,le=L.height;let fe=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(L),he=E.length>1;if(he)for(let we=0;we<E.length;we++)i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const de=L.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let we=0;we<E.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const He=r.get(E[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,Q,le,0,0,Q,le,fe,s.NEAREST),m===!0&&(qe.length=0,lt.length=0,qe.push(s.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qe.push(Re),lt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<E.length;we++){i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Le.__webglColorRenderbuffer[we]);const He=r.get(E[we]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,He,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function Ct(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(L){const E=h.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Mt(L,E){const Q=L.colorSpace,le=L.format,fe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==jc&&Q!==rr&&(Dt.getTransfer(Q)===kt?(le!==Ui||fe!==hi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",Q)),E}function pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=pe,this.getTextureUnits=Y,this.setTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=Ae,this.setTextureCube=N,this.rebindTextures=vt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function LA(s,e){function i(r,o=rr){let c;const h=Dt.getTransfer(o);if(r===hi)return s.UNSIGNED_BYTE;if(r===Kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===F_)return s.BYTE;if(r===I_)return s.SHORT;if(r===jl)return s.UNSIGNED_SHORT;if(r===Yd)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===ba)return s.HALF_FLOAT;if(r===H_)return s.ALPHA;if(r===V_)return s.RGB;if(r===Ui)return s.RGBA;if(r===Aa)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===G_)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===Br)return s.RG;if(r===jd)return s.RG_INTEGER;if(r===$d)return s.RGBA_INTEGER;if(r===Wc||r===Zc||r===qc||r===Yc)if(h===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===dd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===_d||r===vd||r===xd||r===Qc||r===Md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return h===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vd)return c.COMPRESSED_R11_EAC;if(r===xd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Qc)return c.COMPRESSED_RG11_EAC;if(r===Md)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sd||r===yd||r===Ed||r===bd||r===Ad||r===Td||r===Rd||r===Cd||r===wd||r===Dd||r===Ld||r===Ud||r===Nd||r===Od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Sd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Td)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ud)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nd)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return h===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pd||r===Fd||r===Id)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Pd)return h===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zd||r===Bd||r===Jc||r===Hd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===zd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$l?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new J_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ki({vertexShader:UA,fragmentShader:NA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new su(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Hr{constructor(e,i){super();const r=this;let o=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,M=null,g=null,S=null,A=null;const D=typeof XRWebGLBinding<"u",y=new OA,x={},O=i.getContextAttributes();let B=null,w=null;const z=[],P=[],I=new Rt;let b=null;const U=new fi;U.viewport=new sn;const q=new fi;q.viewport=new sn;const G=[U,q],$=new GS;let pe=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=z[se];return Me===void 0&&(Me=new Rh,z[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=z[se];return Me===void 0&&(Me=new Rh,z[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=z[se];return Me===void 0&&(Me=new Rh,z[se]=Me),Me.getHandSpace()};function J(se){const Me=P.indexOf(se.inputSource);if(Me===-1)return;const Ee=z[Me];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,d||h),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let se=0;se<z.length;se++){const Me=P[se];Me!==null&&(P[se]=null,z[se].disconnect(Me))}pe=null,Y=null,y.reset();for(const se in x)delete x[se];e.setRenderTarget(B),S=null,g=null,M=null,o=null,w=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return M===null&&D&&(M=new XRWebGLBinding(o,i)),M},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Be=null,nt=null;O.depth&&(nt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=O.stencil?Ir:Aa,Be=O.stencil?$l:Yi);const Qe={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};M=this.getBinding(),g=M.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new qi(g.textureWidth,g.textureHeight,{format:Ui,type:hi,depthTexture:new Xs(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new qi(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await o.requestReferenceSpace(p),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(se){for(let Me=0;Me<se.removed.length;Me++){const Ee=se.removed[Me],Be=P.indexOf(Ee);Be>=0&&(P[Be]=null,z[Be].disconnect(Ee))}for(let Me=0;Me<se.added.length;Me++){const Ee=se.added[Me];let Be=P.indexOf(Ee);if(Be===-1){for(let Qe=0;Qe<z.length;Qe++)if(Qe>=P.length){P.push(Ee),Be=Qe;break}else if(P[Qe]===null){P[Qe]=Ee,Be=Qe;break}if(Be===-1)break}const nt=z[Be];nt&&nt.connect(Ee)}}const te=new ee,ge=new ee;function Ae(se,Me,Ee){te.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const Be=te.distanceTo(ge),nt=Me.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Wt=nt[14]/(nt[10]-1),ot=nt[14]/(nt[10]+1),xt=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],gt=(nt[8]-1)/nt[0],Jt=(Qe[8]+1)/Qe[0],qe=Wt*gt,lt=Wt*Jt,it=Be/(-gt+Jt),ft=it*-gt;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ft),se.translateZ(it),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),nt[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ct=Wt+it,W=ot+it,Mt=qe-ft,pt=lt+(Be-ft),L=xt*ot/W*Ct,E=vt*ot/W*Ct;se.projectionMatrix.makePerspective(Mt,pt,L,E,Ct,W),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function N(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Me=se.near,Ee=se.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),$.near=q.near=U.near=Me,$.far=q.far=U.far=Ee,(pe!==$.near||Y!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),pe=$.near,Y=$.far),$.layers.mask=se.layers.mask|6,U.layers.mask=$.layers.mask&-5,q.layers.mask=$.layers.mask&-3;const Be=se.parent,nt=$.cameras;N($,Be);for(let Qe=0;Qe<nt.length;Qe++)N(nt[Qe],Be);nt.length===2?Ae($,U,q):$.projectionMatrix.copy(U.projectionMatrix),K(se,$,Be)};function K(se,Me,Ee){Ee===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=no*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(se){return x[se]};let ye=null;function Te(se,Me){if(v=Me.getViewerPose(d||h),A=Me,v!==null){const Ee=v.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Be=!1;Ee.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let ot=0;ot<Ee.length;ot++){const xt=Ee[ot];let vt=null;if(S!==null)vt=S.getViewport(xt);else{const Jt=M.getViewSubImage(g,xt);vt=Jt.viewport,ot===0&&(e.setRenderTargetTextures(w,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(w))}let gt=G[ot];gt===void 0&&(gt=new fi,gt.layers.enable(ot),gt.viewport=new sn,G[ot]=gt),gt.matrix.fromArray(xt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(xt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(vt.x,vt.y,vt.width,vt.height),ot===0&&($.matrix.copy(gt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(gt)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&D){M=r.getBinding();const ot=M.getDepthInformation(Ee[0]);ot&&ot.isValid&&ot.texture&&y.init(ot,o.renderState)}if(nt&&nt.includes("camera-access")&&D){e.state.unbindTexture(),M=r.getBinding();for(let ot=0;ot<Ee.length;ot++){const xt=Ee[ot].camera;if(xt){let vt=x[xt];vt||(vt=new J_,x[xt]=vt);const gt=M.getCameraImage(xt);vt.sourceTexture=gt}}}}for(let Ee=0;Ee<z.length;Ee++){const Be=P[Ee],nt=z[Ee];Be!==null&&nt!==void 0&&nt.update(Be,Me,d||h)}ye&&ye(se,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),A=null}const Oe=new n2;Oe.setAnimationLoop(Te),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const FA=new en,c2=new ut;c2.set(-1,0,0,0,1,0,0,0,1);function IA(s,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,j_(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,O,B,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),M(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),A(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),D(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,O,B):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Gn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Gn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),B=O.envMap,w=O.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(w)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(c2),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,O,B){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=B*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function M(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function D(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function zA(s,e,i,r){let o={},c={},h=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,z){const P=z.program;r.uniformBlockBinding(w,P)}function d(w,z){let P=o[w.id];P===void 0&&(y(w),P=v(w),o[w.id]=P,w.addEventListener("dispose",O));const I=z.program;r.updateUBOMapping(w,I);const b=e.render.frame;c[w.id]!==b&&(g(w),c[w.id]=b)}function v(w){const z=M();w.__bindingPointIndex=z;const P=s.createBuffer(),I=w.__size,b=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,z,P),P}function M(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const z=o[w.id],P=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,z);for(let b=0,U=P.length;b<U;b++){const q=P[b];if(Array.isArray(q))for(let G=0,$=q.length;G<$;G++)S(q[G],b,G,I);else S(q,b,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(w,z,P,I){if(D(w,z,P,I)===!0){const b=w.__offset,U=w.value;if(Array.isArray(U)){let q=0;for(let G=0;G<U.length;G++){const $=U[G],pe=x($);A($,w.__data,q),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(q+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(U,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,w.__data)}}function A(w,z,P){typeof w=="number"||typeof w=="boolean"?z[0]=w:w.isMatrix3?(z[0]=w.elements[0],z[1]=w.elements[1],z[2]=w.elements[2],z[3]=0,z[4]=w.elements[3],z[5]=w.elements[4],z[6]=w.elements[5],z[7]=0,z[8]=w.elements[6],z[9]=w.elements[7],z[10]=w.elements[8],z[11]=0):ArrayBuffer.isView(w)?z.set(new w.constructor(w.buffer,w.byteOffset,z.length)):w.toArray(z,P)}function D(w,z,P,I){const b=w.value,U=z+"_"+P;if(I[U]===void 0)return typeof b=="number"||typeof b=="boolean"?I[U]=b:ArrayBuffer.isView(b)?I[U]=b.slice():I[U]=b.clone(),!0;{const q=I[U];if(typeof b=="number"||typeof b=="boolean"){if(q!==b)return I[U]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(q.equals(b)===!1)return q.copy(b),!0}}return!1}function y(w){const z=w.uniforms;let P=0;const I=16;for(let U=0,q=z.length;U<q;U++){const G=Array.isArray(z[U])?z[U]:[z[U]];for(let $=0,pe=G.length;$<pe;$++){const Y=G[$],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,H=J.length;F<H;F++){const te=J[F],ge=x(te),Ae=P%I,N=Ae%ge.boundary,K=Ae+N;P+=N,K!==0&&I-K<ge.storage&&(P+=I-K),Y.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=ge.storage}}}const b=P%I;return b>0&&(P+=I-b),w.__size=P,w.__cache={},this}function x(w){const z={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(z.boundary=4,z.storage=4):w.isVector2?(z.boundary=8,z.storage=8):w.isVector3||w.isColor?(z.boundary=16,z.storage=12):w.isVector4?(z.boundary=16,z.storage=16):w.isMatrix3?(z.boundary=48,z.storage=48):w.isMatrix4?(z.boundary=64,z.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(z.boundary=16,z.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),z}function O(w){const z=w.target;z.removeEventListener("dispose",O);const P=h.indexOf(z.__bindingPointIndex);h.splice(P,1),s.deleteBuffer(o[z.id]),delete o[z.id],delete c[z.id]}function B(){for(const w in o)s.deleteBuffer(o[w]);h=[],o={},c={}}return{bind:m,update:d,dispose:B}}const BA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function HA(){return Vi===null&&(Vi=new _S(BA,16,16,Br,ba),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=Sa,Vi.wrapT=Sa,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class VA{constructor(e={}){const{canvas:i=UM(),context:r=null,depth:o=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:g=!1,outputBufferType:S=hi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const D=S,y=new Set([$d,jd,Jd]),x=new Set([hi,Yi,jl,$l,Kd,Qd]),O=new Uint32Array(4),B=new Int32Array(4),w=new ee;let z=null,P=null;const I=[],b=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,$=null,pe=null,Y=null,J=null;this._outputColorSpace=Jn;let F=0,H=0,te=null,ge=-1,Ae=null;const N=new sn,K=new sn;let ye=null;const Te=new Lt(0);let Oe=0,se=i.width,Me=i.height,Ee=1,Be=null,nt=null;const Qe=new sn(0,0,se,Me),Wt=new sn(0,0,se,Me);let ot=!1;const xt=new r0;let vt=!1,gt=!1;const Jt=new en,qe=new ee,lt=new sn,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ct(){return te===null?Ee:1}let W=r;function Mt(T,Z){return i.getContext(T,Z)}try{const T={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",tn,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",jn,!1),W===null){const Z="webgl2";if(W=Mt(Z,T),W===null)throw Mt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ut("WebGLRenderer: "+T.message),T}let pt,L,E,Q,le,fe,Re,Le,he,de,we,He,Pe,Ue,je,$e,st,k,Ce,_e,De,ze,be;function Ye(){pt=new HE(W),pt.init(),De=new LA(W,pt),L=new UE(W,pt,e,De),E=new wA(W,pt),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),pe=W.createFramebuffer(),Y=W.createFramebuffer(),J=W.createFramebuffer(),Q=new XE(W),le=new mA,fe=new DA(W,pt,E,le,L,De,Q),Re=new BE(q),Le=new qS(W),ze=new DE(W,Le),he=new VE(W,Le,Q,ze),de=new WE(W,he,Le,ze,Q),k=new kE(W,L,fe),je=new NE(le),we=new pA(q,Re,pt,L,ze,je),He=new IA(q,le),Pe=new _A,Ue=new EA(pt),st=new wE(q,Re,E,de,A,m),$e=new CA(q,de,L),be=new zA(W,Q,L,E),Ce=new LE(W,pt,Q),_e=new GE(W,pt,Q),Q.programs=we.programs,q.capabilities=L,q.extensions=pt,q.properties=le,q.renderLists=Pe,q.shadowMap=$e,q.state=E,q.info=Q}Ye(),D!==hi&&(U=new qE(D,i.width,i.height,p,o,c));const Xe=new PA(q,W);this.xr=Xe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(T){T!==void 0&&(Ee=T,this.setSize(se,Me,!1))},this.getSize=function(T){return T.set(se,Me)},this.setSize=function(T,Z,oe=!0){if(Xe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,Me=Z,i.width=Math.floor(T*Ee),i.height=Math.floor(Z*Ee),oe===!0&&(i.style.width=T+"px",i.style.height=Z+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set(se*Ee,Me*Ee).floor()},this.setDrawingBufferSize=function(T,Z,oe){se=T,Me=Z,Ee=oe,i.width=Math.floor(T*oe),i.height=Math.floor(Z*oe),this.setViewport(0,0,T,Z)},this.setEffects=function(T){if(D===hi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Z=0;Z<T.length;Z++)if(T[Z].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Qe)},this.setViewport=function(T,Z,oe,ae){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,Z,oe,ae),E.viewport(N.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,Z,oe,ae){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,Z,oe,ae),E.scissor(K.copy(Wt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){E.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Be=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,Z=!0,oe=!0){let ae=0;if(T){let re=!1;if(te!==null){const Fe=te.texture.format;re=y.has(Fe)}if(re){const Fe=te.texture.type,Ge=x.has(Fe),Ne=st.getClearColor(),We=st.getClearAlpha(),ke=Ne.r,et=Ne.g,ht=Ne.b;Ge?(O[0]=ke,O[1]=et,O[2]=ht,O[3]=We,W.clearBufferuiv(W.COLOR,0,O)):(B[0]=ke,B[1]=et,B[2]=ht,B[3]=We,W.clearBufferiv(W.COLOR,0,B))}else ae|=W.COLOR_BUFFER_BIT}Z&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),$=T},this.dispose=function(){i.removeEventListener("webglcontextlost",tn,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),st.dispose(),Pe.dispose(),Ue.dispose(),le.dispose(),Re.dispose(),de.dispose(),ze.dispose(),be.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",fn),Xe.removeEventListener("sessionend",bn),kn.stop()};function tn(T){T.preventDefault(),fg("WebGLRenderer: Context Lost."),G=!0}function zt(){fg("WebGLRenderer: Context Restored."),G=!1;const T=Q.autoReset,Z=$e.enabled,oe=$e.autoUpdate,ae=$e.needsUpdate,re=$e.type;Ye(),Q.autoReset=T,$e.enabled=Z,$e.autoUpdate=oe,$e.needsUpdate=ae,$e.type=re}function jn(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $n(T){const Z=T.target;Z.removeEventListener("dispose",$n),Ys(Z)}function Ys(T){Ks(T),le.remove(T)}function Ks(T){const Z=le.get(T).programs;Z!==void 0&&(Z.forEach(function(oe){we.releaseProgram(oe)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,oe,ae,re,Fe){Z===null&&(Z=it);const Ge=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ne=Ca(T,Z,oe,ae,re);E.setMaterial(ae,Ge);let We=oe.index,ke=1;if(ae.wireframe===!0){if(We=he.getWireframeAttribute(oe),We===void 0)return;ke=2}const et=oe.drawRange,ht=oe.attributes.position;let Je=et.start*ke,Nt=(et.start+et.count)*ke;Fe!==null&&(Je=Math.max(Je,Fe.start*ke),Nt=Math.min(Nt,(Fe.start+Fe.count)*ke)),We!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,We.count)):ht!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,ht.count));const nn=Nt-Je;if(nn<0||nn===1/0)return;ze.setup(re,ae,Ne,oe,We);let Kt,Bt=Ce;if(We!==null&&(Kt=Le.get(We),Bt=_e,Bt.setIndex(Kt)),re.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*Ct()),Bt.setMode(W.LINES)):Bt.setMode(W.TRIANGLES);else if(re.isLine){let Ht=ae.linewidth;Ht===void 0&&(Ht=1),E.setLineWidth(Ht*Ct()),re.isLineSegments?Bt.setMode(W.LINES):re.isLineLoop?Bt.setMode(W.LINE_LOOP):Bt.setMode(W.LINE_STRIP)}else re.isPoints?Bt.setMode(W.POINTS):re.isSprite&&Bt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ht=re._multiDrawStarts,Ve=re._multiDrawCounts,Dn=re._multiDrawCount,St=We?Le.get(We).bytesPerElement:1,vn=le.get(ae).currentProgram.getUniforms();for(let ei=0;ei<Dn;ei++)vn.setValue(W,"_gl_DrawID",ei),Bt.render(Ht[ei]/St,Ve[ei])}else if(re.isInstancedMesh)Bt.renderInstances(Je,nn,re.count);else if(oe.isInstancedBufferGeometry){const Ht=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,Ht);Bt.renderInstances(Je,nn,Ve)}else Bt.render(Je,nn)};function Qs(T,Z,oe){T.transparent===!0&&T.side===Xi&&T.forceSinglePass===!1?(T.side=Gn,T.needsUpdate=!0,Ra(T,Z,oe),T.side=lr,T.needsUpdate=!0,Ra(T,Z,oe),T.side=Xi):Ra(T,Z,oe)}this.compile=function(T,Z,oe=null){oe===null&&(oe=T),P=Ue.get(oe),P.init(Z),b.push(P),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),T!==oe&&T.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),P.setupLights();const ae=new Set;return T.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ne=Fe[Ge];Qs(Ne,oe,re),ae.add(Ne)}else Qs(Fe,oe,re),ae.add(Fe)}),P=b.pop(),ae},this.compileAsync=function(T,Z,oe=null){const ae=this.compile(T,Z,oe);return new Promise(re=>{function Fe(){if(ae.forEach(function(Ge){le.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){re(T);return}setTimeout(Fe,10)}pt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Gr=null;function Oi(T){Gr&&Gr(T)}function fn(){kn.stop()}function bn(){kn.start()}const kn=new n2;kn.setAnimationLoop(Oi),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){Gr=T,Xe.setAnimationLoop(T),T===null?kn.stop():kn.start()},Xe.addEventListener("sessionstart",fn),Xe.addEventListener("sessionend",bn),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(T,Z);const oe=Xe.enabled===!0&&Xe.isPresenting===!0,ae=U!==null&&(te===null||oe)&&U.begin(q,te);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Z),Z=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(q,T,Z,te),P=Ue.get(T,b.length),P.init(Z),P.state.textureUnits=fe.getTextureUnits(),b.push(P),Jt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),xt.setFromProjectionMatrix(Jt,Wi,Z.reversedDepth),gt=this.localClippingEnabled,vt=je.init(this.clippingPlanes,gt),z=Pe.get(T,I.length),z.init(),I.push(z),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&cr(Ge,Z,-1/0,q.sortObjects)}cr(T,Z,0,q.sortObjects),z.finish(),q.sortObjects===!0&&z.sort(Be,nt,Z.reversedDepth),ft=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,ft&&st.addToRenderList(z,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&je.beginShadows();const re=P.state.shadowsArray;if($e.render(re,T,Z),vt===!0&&je.endShadows(),(ae&&U.hasRenderPass())===!1){const Ge=z.opaque,Ne=z.transmissive;if(P.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Ne.length>0)for(let ke=0,et=We.length;ke<et;ke++){const ht=We[ke];lo(Ge,Ne,T,ht)}ft&&st.render(T);for(let ke=0,et=We.length;ke<et;ke++){const ht=We[ke];so(z,T,ht,ht.viewport)}}else Ne.length>0&&lo(Ge,Ne,T,Z),ft&&st.render(T),so(z,T,Z)}te!==null&&H===0&&(fe.updateMultisampleRenderTarget(te),fe.updateRenderTargetMipmap(te)),ae&&U.end(q),T.isScene===!0&&T.onAfterRender(q,T,Z),ze.resetDefaultState(),ge=-1,Ae=null,b.pop(),b.length>0?(P=b[b.length-1],fe.setTextureUnits(P.state.textureUnits),vt===!0&&je.setGlobalState(q.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?z=I[I.length-1]:z=null,$!==null&&$.renderEnd()};function cr(T,Z,oe,ae){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||xt.intersectsSprite(T)){ae&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Jt);const Ge=de.update(T),Ne=T.material;Ne.visible&&z.push(T,Ge,Ne,oe,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||xt.intersectsObject(T))){const Ge=de.update(T),Ne=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),lt.copy(Ge.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(Jt)),Array.isArray(Ne)){const We=Ge.groups;for(let ke=0,et=We.length;ke<et;ke++){const ht=We[ke],Je=Ne[ht.materialIndex];Je&&Je.visible&&z.push(T,Ge,Je,oe,lt.z,ht)}}else Ne.visible&&z.push(T,Ge,Ne,oe,lt.z,null)}}const Fe=T.children;for(let Ge=0,Ne=Fe.length;Ge<Ne;Ge++)cr(Fe[Ge],Z,oe,ae)}function so(T,Z,oe,ae){const{opaque:re,transmissive:Fe,transparent:Ge}=T;P.setupLightsView(oe),vt===!0&&je.setGlobalState(q.clippingPlanes,oe),ae&&E.viewport(N.copy(ae)),re.length>0&&ur(re,Z,oe),Fe.length>0&&ur(Fe,Z,oe),Ge.length>0&&ur(Ge,Z,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function lo(T,Z,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const Je=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new qi(1,1,{generateMipmaps:!0,type:Je?ba:hi,minFilter:Fr,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Fe=P.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||N;Fe.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Ne=q.getRenderTarget(),We=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(Te),Oe=q.getClearAlpha(),Oe<1&&q.setClearColor(16777215,.5),q.clear(),ft&&st.render(oe);const et=q.toneMapping;q.toneMapping=Zi;const ht=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),vt===!0&&je.setGlobalState(q.clippingPlanes,ae),ur(T,oe,ae),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,nn=Z.length;Nt<nn;Nt++){const Kt=Z[Nt],{object:Bt,geometry:Ht,material:Ve,group:Dn}=Kt;if(Ve.side===Xi&&Bt.layers.test(ae.layers)){const St=Ve.side;Ve.side=Gn,Ve.needsUpdate=!0,Ta(Bt,oe,ae,Ht,Ve,Dn),Ve.side=St,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Ne,We,ke),q.setClearColor(Te,Oe),ht!==void 0&&(ae.viewport=ht),q.toneMapping=et}function ur(T,Z,oe){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,Fe=T.length;re<Fe;re++){const Ge=T[re],{object:Ne,geometry:We,group:ke}=Ge;let et=Ge.material;et.allowOverride===!0&&ae!==null&&(et=ae),Ne.layers.test(oe.layers)&&Ta(Ne,Z,oe,We,et,ke)}}function Ta(T,Z,oe,ae,re,Fe){T.onBeforeRender(q,Z,oe,ae,re,Fe),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(q,Z,oe,ae,T,Fe),re.transparent===!0&&re.side===Xi&&re.forceSinglePass===!1?(re.side=Gn,re.needsUpdate=!0,q.renderBufferDirect(oe,Z,ae,re,T,Fe),re.side=lr,re.needsUpdate=!0,q.renderBufferDirect(oe,Z,ae,re,T,Fe),re.side=Xi):q.renderBufferDirect(oe,Z,ae,re,T,Fe),T.onAfterRender(q,Z,oe,ae,re,Fe)}function Ra(T,Z,oe){Z.isScene!==!0&&(Z=it);const ae=le.get(T),re=P.state.lights,Fe=P.state.shadowsArray,Ge=re.state.version,Ne=we.getParameters(T,re.state,Fe,Z,oe,P.state.lightProbeGridArray),We=we.getProgramCacheKey(Ne);let ke=ae.programs;ae.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ae.envMap=Re.get(T.envMap||ae.environment,et),ae.envMapRotation=ae.environment!==null&&T.envMap===null?Z.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",$n),ke=new Map,ae.programs=ke);let ht=ke.get(We);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Ge)return Ji(T,Ne),ht}else Ne.uniforms=we.getUniforms(T),$!==null&&T.isNodeMaterial&&$.build(T,oe,Ne),T.onBeforeCompile(Ne,q),ht=we.acquireProgram(Ne,We),ke.set(We,ht),ae.uniforms=Ne.uniforms;const Je=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=je.uniform),Ji(T,Ne),ae.needsLights=oo(T),ae.lightsStateVersion=Ge,ae.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=P.state.lightProbeGridArray.length>0,ae.currentProgram=ht,ae.uniformsList=null,ht}function Qi(T){if(T.uniformsList===null){const Z=T.currentProgram.getUniforms();T.uniformsList=Kc.seqWithValue(Z.seq,T.uniforms)}return T.uniformsList}function Ji(T,Z){const oe=le.get(T);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function fr(T,Z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;w.setFromMatrixPosition(Z.matrixWorld);for(let oe=0,ae=T.length;oe<ae;oe++){const re=T[oe];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Ca(T,Z,oe,ae,re){Z.isScene!==!0&&(Z=it),fe.resetTextureUnits();const Fe=Z.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Ne=te===null?q.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,ke=Re.get(ae.envMap||Ge,We),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ht=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!oe.morphAttributes.position,Nt=!!oe.morphAttributes.normal,nn=!!oe.morphAttributes.color;let Kt=Zi;ae.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ht=Bt!==void 0?Bt.length:0,Ve=le.get(ae),Dn=P.state.lights;if(vt===!0&&(gt===!0||T!==Ae)){const It=T===Ae&&ae.id===ge;je.setState(ae,T,It)}let St=!1;ae.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||re.isBatchedMesh&&Ve.batching===!1||!re.isBatchedMesh&&Ve.batching===!0||re.isBatchedMesh&&Ve.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ve.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ve.instancing===!1||!re.isInstancedMesh&&Ve.instancing===!0||re.isSkinnedMesh&&Ve.skinning===!1||!re.isSkinnedMesh&&Ve.skinning===!0||re.isInstancedMesh&&Ve.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ve.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ve.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ve.instancingMorph===!1&&re.morphTexture!==null||Ve.envMap!==ke||ae.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==je.numPlanes||Ve.numIntersection!==je.numIntersection)||Ve.vertexAlphas!==et||Ve.vertexTangents!==ht||Ve.morphTargets!==Je||Ve.morphNormals!==Nt||Ve.morphColors!==nn||Ve.toneMapping!==Kt||Ve.morphTargetsCount!==Ht||!!Ve.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ve.__version=ae.version);let vn=Ve.currentProgram;St===!0&&(vn=Ra(ae,Z,re),$&&ae.isNodeMaterial&&$.onUpdateProgram(ae,vn,Ve));let ei=!1,Ei=!1,ti=!1;const Vt=vn.getUniforms(),an=Ve.uniforms;if(E.useProgram(vn.program)&&(ei=!0,Ei=!0,ti=!0),ae.id!==ge&&(ge=ae.id,Ei=!0),Ve.needsLights){const It=fr(P.state.lightProbeGridArray,re);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,Ei=!0)}if(ei||Ae!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Vt.setValue(W,"projectionMatrix",T.projectionMatrix),Vt.setValue(W,"viewMatrix",T.matrixWorldInverse);const Pi=Vt.map.cameraPosition;Pi!==void 0&&Pi.setValue(W,qe.setFromMatrixPosition(T.matrixWorld)),L.logarithmicDepthBuffer&&Vt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),Ae!==T&&(Ae=T,Ei=!0,ti=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&Vt.setValue(W,"directionalShadowMap",Dn.state.directionalShadowMap,fe),Dn.state.spotShadowMap.length>0&&Vt.setValue(W,"spotShadowMap",Dn.state.spotShadowMap,fe),Dn.state.pointShadowMap.length>0&&Vt.setValue(W,"pointShadowMap",Dn.state.pointShadowMap,fe)),re.isSkinnedMesh){Vt.setOptional(W,re,"bindMatrix"),Vt.setOptional(W,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Vt.setValue(W,"boneTexture",It.boneTexture,fe))}re.isBatchedMesh&&(Vt.setOptional(W,re,"batchingTexture"),Vt.setValue(W,"batchingTexture",re._matricesTexture,fe),Vt.setOptional(W,re,"batchingIdTexture"),Vt.setValue(W,"batchingIdTexture",re._indirectTexture,fe),Vt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Vt.setValue(W,"batchingColorTexture",re._colorsTexture,fe));const bi=oe.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(re,oe,vn),(Ei||Ve.receiveShadow!==re.receiveShadow)&&(Ve.receiveShadow=re.receiveShadow,Vt.setValue(W,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(an.envMapIntensity.value=Z.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=HA()),Ei){if(Vt.setValue(W,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&hn(an,ti),Fe&&ae.fog===!0&&He.refreshFogUniforms(an,Fe),He.refreshMaterialUniforms(an,ae,Ee,Me,P.state.transmissionRenderTarget[T.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;an.probesSH.value=It.texture,an.probesMin.value.copy(It.boundingBox.min),an.probesMax.value.copy(It.boundingBox.max),an.probesResolution.value.copy(It.resolution)}Kc.upload(W,Qi(Ve),an,fe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Kc.upload(W,Qi(Ve),an,fe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(W,"center",re.center),Vt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(W,"normalMatrix",re.normalMatrix),Vt.setValue(W,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let Pi=0,wa=It.length;Pi<wa;Pi++){const hr=It[Pi];be.update(hr,vn),be.bind(hr,vn)}}return vn}function hn(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function oo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(T,Z,oe){const ae=le.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=Z,le.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Z){const oe=le.get(T);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(T,Z=0,oe=0){te=T,F=Z,H=oe;let ae=null,re=!1,Fe=!1;if(T){const Ne=le.get(T);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),N.copy(T.viewport),K.copy(T.scissor),ye=T.scissorTest,E.viewport(N),E.scissor(K),E.setScissorTest(ye),ge=-1;return}else if(Ne.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(Ne.__hasExternalTextures)fe.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const et=T.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&le.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const ke=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[Z])?ae=ke[Z][oe]:ae=ke[Z],re=!0):T.samples>0&&fe.useMultisampledRTT(T)===!1?ae=le.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?ae=ke[oe]:ae=ke,N.copy(T.viewport),K.copy(T.scissor),ye=T.scissorTest}else N.copy(Qe).multiplyScalar(Ee).floor(),K.copy(Wt).multiplyScalar(Ee).floor(),ye=ot;if(oe!==0&&(ae=pe),E.bindFramebuffer(W.FRAMEBUFFER,ae)&&E.drawBuffers(T,ae),E.viewport(N),E.scissor(K),E.setScissorTest(ye),re){const Ne=le.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,oe)}else if(Fe){const Ne=Z;for(let We=0;We<T.textures.length;We++){const ke=le.get(T.textures[We]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+We,ke.__webglTexture,oe,Ne)}}else if(T!==null&&oe!==0){const Ne=le.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(T,Z,oe,ae,re,Fe,Ge,Ne=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){E.bindFramebuffer(W.FRAMEBUFFER,We);try{const ke=T.textures[Ne],et=ke.format,ht=ke.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),!L.textureFormatReadable(et)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ht)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-ae&&oe>=0&&oe<=T.height-re&&W.readPixels(Z,oe,ae,re,De.convert(et),De.convert(ht),Fe)}finally{const ke=te!==null?le.get(te).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,Z,oe,ae,re,Fe,Ge,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(Z>=0&&Z<=T.width-ae&&oe>=0&&oe<=T.height-re){E.bindFramebuffer(W.FRAMEBUFFER,We);const ke=T.textures[Ne],et=ke.format,ht=ke.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),!L.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(Z,oe,ae,re,De.convert(et),De.convert(ht),0);const Nt=te!==null?le.get(te).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Nt);const nn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await NM(W,nn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.deleteBuffer(Je),W.deleteSync(nn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Z=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(T.image.width*ae),Fe=Math.floor(T.image.height*ae),Ge=Z!==null?Z.x:0,Ne=Z!==null?Z.y:0;fe.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Ge,Ne,re,Fe),E.unbindTexture()},this.copyTextureToTexture=function(T,Z,oe=null,ae=null,re=0,Fe=0){let Ge,Ne,We,ke,et,ht,Je,Nt,nn;const Kt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,et=oe.min.y,ht=oe.isBox3?oe.min.z:0;else{const an=Math.pow(2,-re);Ge=Math.floor(Kt.width*an),Ne=Math.floor(Kt.height*an),T.isDataArrayTexture?We=Kt.depth:T.isData3DTexture?We=Math.floor(Kt.depth*an):We=1,ke=0,et=0,ht=0}ae!==null?(Je=ae.x,Nt=ae.y,nn=ae.z):(Je=0,Nt=0,nn=0);const Bt=De.convert(Z.format),Ht=De.convert(Z.type);let Ve;Z.isData3DTexture?(fe.setTexture3D(Z,0),Ve=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(fe.setTexture2DArray(Z,0),Ve=W.TEXTURE_2D_ARRAY):(fe.setTexture2D(Z,0),Ve=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const Dn=E.getParameter(W.UNPACK_ROW_LENGTH),St=E.getParameter(W.UNPACK_IMAGE_HEIGHT),vn=E.getParameter(W.UNPACK_SKIP_PIXELS),ei=E.getParameter(W.UNPACK_SKIP_ROWS),Ei=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(W.UNPACK_SKIP_ROWS,et),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ht);const ti=T.isDataArrayTexture||T.isData3DTexture,Vt=Z.isDataArrayTexture||Z.isData3DTexture;if(T.isDepthTexture){const an=le.get(T),bi=le.get(Z),It=le.get(an.__renderTarget),Pi=le.get(bi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,It.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let wa=0;wa<We;wa++)ti&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(T).__webglTexture,re,ht+wa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(Z).__webglTexture,Fe,nn+wa)),W.blitFramebuffer(ke,et,Ge,Ne,Je,Nt,Ge,Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||T.isRenderTargetTexture||le.has(T)){const an=le.get(T),bi=le.get(Z);E.bindFramebuffer(W.READ_FRAMEBUFFER,Y),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,J);for(let It=0;It<We;It++)ti?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,an.__webglTexture,re,ht+It):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,an.__webglTexture,re),Vt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,bi.__webglTexture,Fe,nn+It):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,bi.__webglTexture,Fe),re!==0?W.blitFramebuffer(ke,et,Ge,Ne,Je,Nt,Ge,Ne,W.COLOR_BUFFER_BIT,W.NEAREST):Vt?W.copyTexSubImage3D(Ve,Fe,Je,Nt,nn+It,ke,et,Ge,Ne):W.copyTexSubImage2D(Ve,Fe,Je,Nt,ke,et,Ge,Ne);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Vt?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,Bt,Ht,Kt.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,Bt,Kt.data):W.texSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,Bt,Ht,Kt):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Ge,Ne,Bt,Ht,Kt.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Kt.width,Kt.height,Bt,Kt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Ge,Ne,Bt,Ht,Kt);E.pixelStorei(W.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,St),E.pixelStorei(W.UNPACK_SKIP_PIXELS,vn),E.pixelStorei(W.UNPACK_SKIP_ROWS,ei),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Ei),Fe===0&&Z.generateMipmaps&&W.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){F=0,H=0,te=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const GA=s=>`./assets/textures/${s}.jpg`,u_={sun:{orbit:0,radius:.78,angle:0},mercury:{orbit:1.18,radius:.12,angle:2.72},venus:{orbit:1.56,radius:.19,angle:.24},earth:{orbit:1.98,radius:.21,angle:1.06},mars:{orbit:2.42,radius:.16,angle:2.26},jupiter:{orbit:3.28,radius:.58,angle:3.48},saturn:{orbit:4.22,radius:.5,angle:-.28},uranus:{orbit:4.82,radius:.33,angle:.48},neptune:{orbit:5.12,radius:.34,angle:2.42}};function XA(){const e=new Float32Array(4500);for(let o=0;o<1500;o+=1){const c=h=>{const p=Math.sin((o+h)*127.41)*43758.5453;return p-Math.floor(p)};e[o*3]=(c(2)-.5)*34,e[o*3+1]=(c(7)-.5)*18,e[o*3+2]=(c(13)-.5)*34}const i=new Xn;i.setAttribute("position",new Ni(e,3));const r=new K_({color:9419752,size:.035,transparent:!0,opacity:.72,sizeAttenuation:!0});return new ES(i,r)}function kA(s,e){const i=[];for(let c=0;c<180;c+=1){const h=c/180*Math.PI*2;i.push(new ee(Math.cos(h)*s,0,Math.sin(h)*s))}const r=new Xn().setFromPoints(i),o=new Y_({color:e<4?3959965:2644097,transparent:!0,opacity:e<4?.52:.34});return new yS(r,o)}function f_(s){s.traverse(e=>{var r;(r=e.geometry)==null||r.dispose(),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(o=>o.dispose())})}const WA=R.forwardRef(function({worlds:e,activeId:i,onSelect:r,showOrbits:o,showLabels:c,distanceMode:h,reducedMotion:p},m){const d=R.useRef(null),v=R.useRef({}),M=R.useRef(i),g=R.useRef(r),S=R.useRef({showOrbits:o,showLabels:c,distanceMode:h,reducedMotion:p}),[A,D]=R.useState(!1),y=R.useRef({zoomIn:()=>{},zoomOut:()=>{},reset:()=>{}});return R.useImperativeHandle(m,()=>({zoomIn:()=>y.current.zoomIn(),zoomOut:()=>y.current.zoomOut(),reset:()=>y.current.reset()}),[]),R.useEffect(()=>{M.current=i},[i]),R.useEffect(()=>{g.current=r},[r]),R.useEffect(()=>{S.current={showOrbits:o,showLabels:c,distanceMode:h,reducedMotion:p}},[o,c,h,p]),R.useEffect(()=>{const x=d.current;if(!x)return;let O;try{O=new VA({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}O.setClearColor(133140,0),O.outputColorSpace=Jn,O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),O.domElement.className="overview-canvas",O.domElement.setAttribute("aria-hidden","true"),x.appendChild(O.domElement);const B=new fS,w=new fi(34,1,.1,80),z=new ee(0,0,0);let P=10.8,I=10.8,b=7.6,U=7.6;const q=()=>{w.position.set(0,b,P),w.lookAt(z)};q();const G=new Is;G.rotation.y=-.08,B.add(G);const $=XA();B.add($),B.add(new HS(7902644,1.35));const pe=new BS(16761207,18,30,1.5);pe.position.set(0,.8,0),B.add(pe);const Y=new FS,J=[],F=new Map,H=[],te=[],ge=new Map;let Ae=!1;const N=async(qe,lt)=>{const it=u_[qe.id];let ft;try{ft=await Y.loadAsync(GA(qe.id))}catch{return}if(Ae){ft.dispose();return}ft.colorSpace=Jn,ft.anisotropy=Math.min(8,O.capabilities.getMaxAnisotropy()),J.push(ft);const Ct=new Is;Ct.userData.worldId=qe.id,Ct.userData.baseRadius=it.radius;const W=new nu(it.radius,qe.id==="sun"?64:48,qe.id==="sun"?48:32),Mt=qe.id==="sun"?new Jl({map:ft}):new DS({map:ft,roughness:.82,metalness:0});qe.id==="sun"&&(Mt.onBeforeCompile=L=>{L.fragmentShader=L.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb *= 1.12;`)});const pt=new yi(W,Mt);if(pt.userData.worldId=qe.id,Ct.add(pt),H.push(pt),qe.id==="sun"){const L=new yi(new nu(it.radius*1.12,48,32),new Jl({color:16747821,transparent:!0,opacity:.18,side:Gn,blending:$h}));Ct.add(L)}if(qe.id==="saturn"&&([[1.18,1.48,14072192,.72],[1.55,1.82,10453085,.45]].forEach(([L,E,Q,le])=>{const fe=new yi(new s0(it.radius*L,it.radius*E,112),new Jl({color:Q,transparent:!0,opacity:le,side:Xi,depthWrite:!1}));fe.rotation.x=Math.PI/2,Ct.add(fe)}),Ct.rotation.z=-.23),qe.id==="uranus"&&(Ct.rotation.z=1.28),it.orbit){const L=Math.cos(it.angle)*it.orbit,E=Math.sin(it.angle)*it.orbit;Ct.position.set(L,0,E),ge.set(qe.id,it.angle);const Q=kA(it.orbit,lt);Q.userData.orbit=!0,G.add(Q),te.push(Q)}G.add(Ct),F.set(qe.id,Ct)};Promise.allSettled(e.map((qe,lt)=>N(qe,lt))).then(()=>{Ae||D(!0)});let K=!1,ye=0,Te=0,Oe=0;const se=new WS,Me=new Rt,Ee=qe=>{var lt,it;K=!0,ye=0,Te=qe.clientX,Oe=qe.clientY,(it=(lt=O.domElement).setPointerCapture)==null||it.call(lt,qe.pointerId),O.domElement.classList.add("is-dragging")},Be=qe=>{if(!K)return;const lt=qe.clientX-Te,it=qe.clientY-Oe;ye+=Math.abs(lt)+Math.abs(it),G.rotation.y+=lt*.004,U=JM.clamp(U+it*.02,4.8,10.2),Te=qe.clientX,Oe=qe.clientY},nt=qe=>{var lt;if(K&&ye<8){const it=O.domElement.getBoundingClientRect();Me.x=(qe.clientX-it.left)/it.width*2-1,Me.y=-((qe.clientY-it.top)/it.height)*2+1,se.setFromCamera(Me,w);const ft=se.intersectObjects(H,!1)[0];ft!=null&&ft.object.userData.worldId&&((lt=g.current)==null||lt.call(g,ft.object.userData.worldId))}K=!1,O.domElement.classList.remove("is-dragging")};O.domElement.addEventListener("pointerdown",Ee),O.domElement.addEventListener("pointermove",Be),O.domElement.addEventListener("pointerup",nt),O.domElement.addEventListener("pointercancel",nt),y.current={zoomIn:()=>{I=Math.max(7.6,I-1.2)},zoomOut:()=>{I=Math.min(14.2,I+1.2)},reset:()=>{I=10.8,U=7.6,G.rotation.y=-.08}};const Qe=()=>{const{width:qe,height:lt}=x.getBoundingClientRect();!qe||!lt||(O.setSize(qe,lt,!1),w.aspect=qe/lt,w.updateProjectionMatrix())},Wt=new ResizeObserver(Qe);Wt.observe(x),Qe();const ot=new XS;ot.connect(document);let xt=0;const vt=new ee,gt=new ee,Jt=()=>{ot.update();const qe=Math.min(ot.getDelta(),.05);P+=(I-P)*Math.min(1,qe*5),b+=(U-b)*Math.min(1,qe*5),q(),te.forEach(lt=>{lt.visible=S.current.showOrbits}),F.forEach((lt,it)=>{const ft=it===M.current,Ct=ft?1.18:1;gt.setScalar(Ct),lt.scale.lerp(gt,Math.min(1,qe*6));const W=lt.children.find(L=>L.isMesh);W&&!S.current.reducedMotion&&(W.rotation.y+=qe*(it==="sun"?.12:.2));const Mt=u_[it];if(Mt.orbit&&!S.current.reducedMotion){const L=(ge.get(it)??Mt.angle)+qe*(.014/Math.sqrt(Mt.orbit));ge.set(it,L),lt.position.set(Math.cos(L)*Mt.orbit,0,Math.sin(L)*Mt.orbit)}const pt=v.current[it];pt&&(pt.hidden=!S.current.showLabels,vt.copy(lt.position).applyMatrix4(G.matrixWorld).project(w),pt.style.left=`${(vt.x*.5+.5)*x.clientWidth}px`,pt.style.top=`${(-vt.y*.5+.5)*x.clientHeight}px`,pt.dataset.selected=ft?"true":"false")}),$.rotation.y+=S.current.reducedMotion?0:qe*.003,O.render(B,w),xt=requestAnimationFrame(Jt)};return Jt(),()=>{Ae=!0,cancelAnimationFrame(xt),Wt.disconnect(),ot.disconnect(),O.domElement.removeEventListener("pointerdown",Ee),O.domElement.removeEventListener("pointermove",Be),O.domElement.removeEventListener("pointerup",nt),O.domElement.removeEventListener("pointercancel",nt),F.forEach(f_),te.forEach(f_),$.geometry.dispose(),$.material.dispose(),J.forEach(qe=>qe.dispose()),O.dispose(),O.domElement.remove()}},[e]),Se.jsxs("div",{className:`overview-3d ${A?"is-ready":""}`,ref:d,children:[!A&&Se.jsx("div",{className:"scene-loading",children:"正在校准行星轨道…"}),Se.jsx("div",{className:"scene-labels","aria-label":"太阳系天体标签",children:e.map(x=>Se.jsxs("button",{ref:O=>{v.current[x.id]=O},className:"planet-label",onClick:()=>r(x.id),"aria-pressed":i===x.id,children:[x.name,Se.jsx("small",{children:h&&x.id!=="sun"?x.distance:""})]},x.id))})]})}),u2=s=>`./${s}`,Ma=[{id:"sun",name:"太阳",english:"SUN",category:"恒星",type:"G 型主序星",distance:"太阳系中心",diameter:"1,392,700 公里",temperature:"约 5,500°C",year:"约 25–35 个地球日",age:"约 46 亿年",mass:"1.989 × 10³⁰ kg",moons:"8 颗行星",compare:94,intro:"太阳是太阳系的中心天体，占据了太阳系总质量的 99.86%，其强大的引力将所有天体束缚在轨道上。",fact:"每秒约有 6 亿吨氢在太阳核心聚变成氦。",source:"https://science.nasa.gov/sun/facts/"},{id:"mercury",name:"水星",english:"MERCURY",category:"类地行星",type:"岩石行星",distance:"5,800 万公里",diameter:"4,879 公里",temperature:"430°C 至 −180°C",year:"88 个地球日",age:"约 45 亿年",mass:"3.30 × 10²³ kg",moons:"0 颗卫星",compare:18,intro:"水星离太阳最近，也是一颗昼夜温差极大的岩石行星。它拥有布满撞击坑的古老表面。",fact:"水星的一天比它的一年还长。",source:"https://science.nasa.gov/mercury/facts/"},{id:"venus",name:"金星",english:"VENUS",category:"类地行星",type:"岩石行星",distance:"1.08 亿公里",diameter:"12,104 公里",temperature:"约 464°C",year:"224.7 个地球日",age:"约 45 亿年",mass:"4.87 × 10²⁴ kg",moons:"0 颗卫星",compare:28,intro:"金星大小与地球相近，却拥有浓厚的二氧化碳大气，是太阳系温度最高的行星。",fact:"金星自转方向与多数行星相反。",source:"https://science.nasa.gov/venus/venus-facts/"},{id:"earth",name:"地球",english:"EARTH",category:"类地行星",type:"岩石行星",distance:"1.496 亿公里",diameter:"12,756 公里",temperature:"平均约 15°C",year:"365.25 天",age:"约 45.4 亿年",mass:"5.97 × 10²⁴ kg",moons:"1 颗卫星",compare:30,intro:"液态水、稳定的大气与磁场共同塑造了我们的蓝色家园，也是目前已知唯一拥有生命的世界。",fact:"地球表面约 71% 被海洋覆盖。",source:"https://science.nasa.gov/earth/facts/"},{id:"mars",name:"火星",english:"MARS",category:"类地行星",type:"岩石行星",distance:"2.279 亿公里",diameter:"6,779 公里",temperature:"平均约 −65°C",year:"687 个地球日",age:"约 46 亿年",mass:"6.42 × 10²³ kg",moons:"2 颗卫星",compare:22,intro:"氧化铁让火星呈现红色。干涸河谷与极地冰盖暗示它过去可能拥有更温暖湿润的环境。",fact:"奥林帕斯山约为珠穆朗玛峰高度的三倍。",source:"https://science.nasa.gov/mars/facts/"},{id:"jupiter",name:"木星",english:"JUPITER",category:"气态巨行星",type:"气态巨行星",distance:"7.78 亿公里",diameter:"142,984 公里",temperature:"云顶约 −110°C",year:"11.86 个地球年",age:"约 45.7 亿年",mass:"1.90 × 10²⁷ kg",moons:"95 颗卫星",compare:82,intro:"木星是太阳系最大的行星，拥有汹涌的云带、强大磁场，以及持续数百年的大红斑风暴。",fact:"它的内部大约能容纳 1,000 个地球。",source:"https://science.nasa.gov/jupiter/facts/"},{id:"saturn",name:"土星",english:"SATURN",category:"气态巨行星",type:"气态巨行星",distance:"14 亿公里",diameter:"120,536 公里",temperature:"云顶约 −140°C",year:"29.45 个地球年",age:"约 45 亿年",mass:"5.68 × 10²⁶ kg",moons:"146 颗卫星",compare:72,intro:"土星最醒目的特征是由冰粒、岩石与尘埃组成的复杂行星环，它本身的平均密度比水还低。",fact:"土星北极存在巨大的六边形急流。",source:"https://science.nasa.gov/saturn/facts/"},{id:"uranus",name:"天王星",english:"URANUS",category:"冰巨星",type:"冰巨星",distance:"29 亿公里",diameter:"51,118 公里",temperature:"约 −195°C",year:"84 个地球年",age:"约 45 亿年",mass:"8.68 × 10²⁵ kg",moons:"28 颗卫星",compare:46,intro:"天王星的淡青色来自大气中的甲烷，它的自转轴倾斜到近乎横躺着围绕太阳运行。",fact:"天王星的一个季节可持续约 21 个地球年。",source:"https://science.nasa.gov/uranus/facts/"},{id:"neptune",name:"海王星",english:"NEPTUNE",category:"冰巨星",type:"冰巨星",distance:"45 亿公里",diameter:"49,528 公里",temperature:"约 −200°C",year:"164.8 个地球年",age:"约 45 亿年",mass:"1.02 × 10²⁶ kg",moons:"16 颗卫星",compare:44,intro:"海王星位于八颗行星的最外侧，深蓝云层中活跃着太阳系已知速度最快的行星风。",fact:"自 1846 年被发现后，它只完成过一次公转。",source:"https://science.nasa.gov/neptune/facts/"}].map(s=>({...s,image:u2(`assets/planets/${s.id}.png`)})),ZA=[["46亿年前","太阳系形成"],["45.7亿年前","行星形成"],["40亿年前","地球稳定"],["约3.8亿年前","生命起源"],["今天","探索继续"]];function Ps({icon:s,label:e,value:i}){return Se.jsxs("div",{className:"detail-metric",children:[Se.jsx(s,{"aria-hidden":"true",weight:"light"}),Se.jsx("span",{children:e}),Se.jsx("strong",{children:i})]})}function qA(){const[s,e]=R.useState("sun"),[i,r]=R.useState(""),[o,c]=R.useState(!1),[h,p]=R.useState(!0),[m,d]=R.useState(!0),[v,M]=R.useState(!1),[g,S]=R.useState(!1),[A,D]=R.useState(!1),[y,x]=R.useState(!1),[O,B]=R.useState(!1),[w,z]=R.useState("overview"),[P,I]=R.useState(4),b=R.useRef(null),U=R.useMemo(()=>Ma.find(Y=>Y.id===s)??Ma[0],[s]),q=R.useMemo(()=>Ma.filter(Y=>`${Y.name}${Y.english}${Y.category}`.toLowerCase().includes(i.trim().toLowerCase())),[i]);R.useEffect(()=>{if(!A)return;const Y=window.setInterval(()=>{e(J=>Ma[(Ma.findIndex(F=>F.id===J)+1)%Ma.length].id)},2800);return()=>window.clearInterval(Y)},[A]);const G=Y=>{e(Y),D(!1),z("overview")},$=Y=>{var J,F;z(Y),Y==="overview"&&(D(!1),x(!1)),Y==="explore"&&D(H=>!H),Y==="knowledge"&&((J=document.querySelector("#knowledge"))==null||J.scrollIntoView({behavior:"smooth",block:"center"})),Y==="timeline"&&((F=document.querySelector("#timeline"))==null||F.scrollIntoView({behavior:"smooth",block:"center"})),Y==="3d"&&x(H=>!H)},pe=[["overview","总览"],["explore",A?"暂停":"探索"],["knowledge","知识库"],["timeline","时间线"],["3d",y?"退出 3D":"3D 模式"]];return Se.jsxs("div",{className:`dashboard-shell ${y?"is-full-3d":""}`,children:[Se.jsxs("header",{className:"topbar",children:[Se.jsxs("button",{className:"logo-lockup",onClick:()=>$("overview"),children:[Se.jsx("img",{src:u2("assets/planets/saturn.png"),alt:""}),Se.jsxs("span",{children:[Se.jsx("strong",{children:"太阳系之旅"}),Se.jsx("small",{children:"Solar System Journey"})]})]}),Se.jsx("nav",{className:"top-tabs","aria-label":"主要导航",children:pe.map(([Y,J])=>Se.jsx("button",{className:w===Y?"active":"",onClick:()=>$(Y),children:J},Y))}),Se.jsxs("div",{className:"top-tools",children:[Se.jsxs("label",{className:"search-box",children:[Se.jsx(Zx,{"aria-hidden":"true"}),Se.jsx("input",{value:i,onChange:Y=>r(Y.target.value),onKeyDown:Y=>{Y.key==="Enter"&&q[0]&&G(q[0].id)},placeholder:"搜索行星、卫星、小行星…"})]}),Se.jsxs("button",{className:"settings-button",onClick:()=>c(Y=>!Y),"aria-expanded":o,children:[Se.jsx(Wx,{weight:"light"})," 设置"]}),o&&Se.jsxs("div",{className:"settings-popover",children:[Se.jsxs("label",{children:[Se.jsx("input",{type:"checkbox",checked:h,onChange:Y=>p(Y.target.checked)})," 显示天体标签"]}),Se.jsxs("label",{children:[Se.jsx("input",{type:"checkbox",checked:m,onChange:Y=>d(Y.target.checked)})," 显示行星轨道"]}),Se.jsxs("label",{children:[Se.jsx("input",{type:"checkbox",checked:g,onChange:Y=>S(Y.target.checked)})," 减少动态效果"]})]})]})]}),Se.jsxs("aside",{className:"member-panel","aria-label":"太阳系成员",children:[Se.jsx("h2",{children:"太阳系成员"}),Se.jsxs("div",{className:"member-list",children:[q.map(Y=>Se.jsxs("button",{className:s===Y.id?"active":"",onClick:()=>G(Y.id),"aria-pressed":s===Y.id,children:[Se.jsx("img",{src:Y.image,alt:""}),Se.jsxs("span",{children:[Se.jsx("strong",{children:Y.name}),Se.jsx("small",{children:Y.category})]})]},Y.id)),!q.length&&Se.jsx("p",{className:"no-results",children:"没有找到匹配天体"})]}),Se.jsxs("button",{className:`compare-button ${O?"active":""}`,onClick:()=>B(Y=>!Y),children:[Se.jsx(Jx,{weight:"light"})," ",O?"退出比较":"比较模式"]})]}),Se.jsxs("main",{className:"workspace",children:[Se.jsxs("section",{className:"scene-panel",id:"overview",children:[Se.jsxs("div",{className:"scene-heading",children:[Se.jsx("h1",{children:"太阳系全景总览"}),Se.jsx("p",{children:"点击任意天体了解更多信息 · 拖动改变观察角度"})]}),Se.jsx(WA,{ref:b,worlds:Ma,activeId:s,onSelect:G,showOrbits:m,showLabels:h,distanceMode:v,reducedMotion:g}),Se.jsxs("div",{className:"scene-stats","aria-label":"太阳系统计",children:[Se.jsxs("div",{children:[Se.jsx(ig,{weight:"light"}),Se.jsx("strong",{children:"8"}),Se.jsx("span",{children:"大行星"})]}),Se.jsxs("div",{children:[Se.jsx(tg,{weight:"light"}),Se.jsx("strong",{children:"5"}),Se.jsx("span",{children:"矮行星"})]}),Se.jsxs("div",{children:[Se.jsx(ng,{weight:"light"}),Se.jsx("strong",{children:"290+"}),Se.jsx("span",{children:"已知卫星"})]}),Se.jsxs("div",{children:[Se.jsx(kx,{weight:"light"}),Se.jsx("strong",{children:"1.3M+"}),Se.jsx("span",{children:"小行星"})]})]}),Se.jsxs("div",{className:"scene-controls","aria-label":"3D 视图控制",children:[Se.jsx("span",{children:"视角"}),Se.jsx("button",{onClick:()=>{var Y;return(Y=b.current)==null?void 0:Y.zoomIn()},"aria-label":"放大",children:Se.jsx(Kx,{})}),Se.jsx("button",{onClick:()=>{var Y;return(Y=b.current)==null?void 0:Y.zoomOut()},"aria-label":"缩小",children:Se.jsx(qx,{})}),Se.jsx("button",{onClick:()=>{var Y;return(Y=b.current)==null?void 0:Y.reset()},"aria-label":"重置视角",children:Se.jsx(Vx,{})})]}),Se.jsxs("div",{className:"view-toggle","aria-label":"显示模式",children:[Se.jsx("button",{className:v?"":"active",onClick:()=>{M(!1),d(!0)},children:"轨道"}),Se.jsx("button",{className:v?"active":"",onClick:()=>M(!0),children:"距离"})]})]}),Se.jsxs("section",{className:`detail-panel ${O?"compare-active":""}`,id:"knowledge",children:[Se.jsx("div",{className:"selected-visual",children:Se.jsx("img",{src:U.image,alt:`${U.name}天体图像`})}),Se.jsxs("div",{className:"selected-copy",children:[Se.jsxs("div",{className:"selected-title",children:[Se.jsx("h2",{children:U.name}),Se.jsx("span",{children:U.category})]}),Se.jsx("p",{children:U.intro}),Se.jsxs("a",{href:U.source,target:"_blank",rel:"noreferrer",children:["了解更多 ",Se.jsx(Gx,{})]})]}),Se.jsxs("div",{className:"metric-grid",children:[Se.jsx(Ps,{icon:ig,label:"类型",value:U.type}),Se.jsx(Ps,{icon:jx,label:"表面温度",value:U.temperature}),Se.jsx(Ps,{icon:Qx,label:"直径",value:U.diameter}),Se.jsx(Ps,{icon:Xx,label:"公转 / 自转",value:U.year}),Se.jsx(Ps,{icon:tg,label:"质量",value:U.mass}),Se.jsx(Ps,{icon:ng,label:"卫星 / 行星",value:U.moons})]}),Se.jsxs("div",{className:"size-comparison",children:[Se.jsx("h3",{children:O?`${U.name}与地球尺寸对比`:"太阳系大小对比"}),Se.jsx("div",{className:"comparison-row",children:(O?[Ma[3],U]:Ma).filter((Y,J,F)=>F.findIndex(H=>H.id===Y.id)===J).map(Y=>Se.jsx("button",{onClick:()=>G(Y.id),title:Y.name,children:Se.jsx("img",{src:Y.image,alt:Y.name,style:{width:`${Y.compare}px`,height:`${Y.compare}px`}})},Y.id))}),Se.jsx("p",{children:U.fact})]})]}),Se.jsxs("section",{className:"timeline-panel",id:"timeline",children:[Se.jsxs("div",{className:"timeline-title",children:[Se.jsx("strong",{children:"太阳系形成时间线"}),Se.jsx("button",{onClick:()=>D(Y=>!Y),"aria-label":A?"暂停自动探索":"开始自动探索",children:Se.jsx(Yx,{weight:"fill"})})]}),Se.jsx("div",{className:"timeline-track",children:ZA.map(([Y,J],F)=>Se.jsxs("button",{className:P===F?"active":"",onClick:()=>I(F),children:[Se.jsx("i",{}),Se.jsxs("span",{children:[Se.jsx("strong",{children:Y}),Se.jsx("small",{children:J})]})]},Y))})]})]})]})}bx.createRoot(document.getElementById("root")).render(Se.jsx(_x.StrictMode,{children:Se.jsx(qA,{})}));
