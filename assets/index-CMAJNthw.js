(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function X1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var oh={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function k1(){if(Ig)return Io;Ig=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var zg;function W1(){return zg||(zg=1,oh.exports=k1()),oh.exports}var qe=W1(),lh={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function q1(){if(Bg)return rt;Bg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function S(U,Z,Ee){this.props=U,this.context=Z,this.refs=E,this.updater=Ee||T}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function I(){}I.prototype=S.prototype;function H(U,Z,Ee){this.props=U,this.context=Z,this.refs=E,this.updater=Ee||T}var C=H.prototype=new I;C.constructor=H,w(C,S.prototype),C.isPureReactComponent=!0;var F=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(U,Z,Ee){var Te=Ee.ref;return{$$typeof:s,type:U,key:Z,ref:Te!==void 0?Te:null,props:Ee}}function Y(U,Z){return N(U.type,Z,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function J(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return Z[Ee]})}var pe=/\/+/g;function xe(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):Z.toString(36)}function j(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,Z,Ee,Te,Ne){var W=typeof U;(W==="undefined"||W==="boolean")&&(U=null);var fe=!1;if(U===null)fe=!0;else switch(W){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(U.$$typeof){case s:case e:fe=!0;break;case x:return fe=U._init,P(fe(U._payload),Z,Ee,Te,Ne)}}if(fe)return Ne=Ne(U),fe=Te===""?"."+xe(U,0):Te,F(Ne)?(Ee="",fe!=null&&(Ee=fe.replace(pe,"$&/")+"/"),P(Ne,Z,Ee,"",function(nt){return nt})):Ne!=null&&(G(Ne)&&(Ne=Y(Ne,Ee+(Ne.key==null||U&&U.key===Ne.key?"":(""+Ne.key).replace(pe,"$&/")+"/")+fe)),Z.push(Ne)),1;fe=0;var ge=Te===""?".":Te+":";if(F(U))for(var Pe=0;Pe<U.length;Pe++)Te=U[Pe],W=ge+xe(Te,Pe),fe+=P(Te,Z,Ee,W,Ne);else if(Pe=y(U),typeof Pe=="function")for(U=Pe.call(U),Pe=0;!(Te=U.next()).done;)Te=Te.value,W=ge+xe(Te,Pe++),fe+=P(Te,Z,Ee,W,Ne);else if(W==="object"){if(typeof U.then=="function")return P(j(U),Z,Ee,Te,Ne);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return fe}function B(U,Z,Ee){if(U==null)return U;var Te=[],Ne=0;return P(U,Te,"","",function(W){return Z.call(Ee,W,Ne++)}),Te}function $(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var _e=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:B,forEach:function(U,Z,Ee){B(U,function(){Z.apply(this,arguments)},Ee)},count:function(U){var Z=0;return B(U,function(){Z++}),Z},toArray:function(U){return B(U,function(Z){return Z})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=_,rt.Children=be,rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=H,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,Z,Ee){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Te=w({},U.props),Ne=U.key;if(Z!=null)for(W in Z.key!==void 0&&(Ne=""+Z.key),Z)!b.call(Z,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&Z.ref===void 0||(Te[W]=Z[W]);var W=arguments.length-2;if(W===1)Te.children=Ee;else if(1<W){for(var fe=Array(W),ge=0;ge<W;ge++)fe[ge]=arguments[ge+2];Te.children=fe}return N(U.type,Ne,Te)},rt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},rt.createElement=function(U,Z,Ee){var Te,Ne={},W=null;if(Z!=null)for(Te in Z.key!==void 0&&(W=""+Z.key),Z)b.call(Z,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ne[Te]=Z[Te]);var fe=arguments.length-2;if(fe===1)Ne.children=Ee;else if(1<fe){for(var ge=Array(fe),Pe=0;Pe<fe;Pe++)ge[Pe]=arguments[Pe+2];Ne.children=ge}if(U&&U.defaultProps)for(Te in fe=U.defaultProps,fe)Ne[Te]===void 0&&(Ne[Te]=fe[Te]);return N(U,W,Ne)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:p,render:U}},rt.isValidElement=G,rt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:$}},rt.memo=function(U,Z){return{$$typeof:d,type:U,compare:Z===void 0?null:Z}},rt.startTransition=function(U){var Z=O.T,Ee={};O.T=Ee;try{var Te=U(),Ne=O.S;Ne!==null&&Ne(Ee,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,_e)}catch(W){_e(W)}finally{Z!==null&&Ee.types!==null&&(Z.types=Ee.types),O.T=Z}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(U){return O.H.use(U)},rt.useActionState=function(U,Z,Ee){return O.H.useActionState(U,Z,Ee)},rt.useCallback=function(U,Z){return O.H.useCallback(U,Z)},rt.useContext=function(U){return O.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,Z){return O.H.useDeferredValue(U,Z)},rt.useEffect=function(U,Z){return O.H.useEffect(U,Z)},rt.useEffectEvent=function(U){return O.H.useEffectEvent(U)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(U,Z,Ee){return O.H.useImperativeHandle(U,Z,Ee)},rt.useInsertionEffect=function(U,Z){return O.H.useInsertionEffect(U,Z)},rt.useLayoutEffect=function(U,Z){return O.H.useLayoutEffect(U,Z)},rt.useMemo=function(U,Z){return O.H.useMemo(U,Z)},rt.useOptimistic=function(U,Z){return O.H.useOptimistic(U,Z)},rt.useReducer=function(U,Z,Ee){return O.H.useReducer(U,Z,Ee)},rt.useRef=function(U){return O.H.useRef(U)},rt.useState=function(U){return O.H.useState(U)},rt.useSyncExternalStore=function(U,Z,Ee){return O.H.useSyncExternalStore(U,Z,Ee)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.0",rt}var Hg;function zd(){return Hg||(Hg=1,lh.exports=q1()),lh.exports}var le=zd();const Y1=X1(le);var ch={exports:{}},zo={},uh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Z1(){return Gg||(Gg=1,(function(s){function e(P,B){var $=P.length;P.push(B);e:for(;0<$;){var _e=$-1>>>1,be=P[_e];if(0<l(be,B))P[_e]=B,P[$]=be,$=_e;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],$=P.pop();if($!==B){P[0]=$;e:for(var _e=0,be=P.length,U=be>>>1;_e<U;){var Z=2*(_e+1)-1,Ee=P[Z],Te=Z+1,Ne=P[Te];if(0>l(Ee,$))Te<be&&0>l(Ne,Ee)?(P[_e]=Ne,P[Te]=$,_e=Te):(P[_e]=Ee,P[Z]=$,_e=Z);else if(Te<be&&0>l(Ne,$))P[_e]=Ne,P[Te]=$,_e=Te;else break e}}return B}function l(P,B){var $=P.sortIndex-B.sortIndex;return $!==0?$:P.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],d=[],x=1,_=null,g=3,y=!1,T=!1,w=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var B=i(d);B!==null;){if(B.callback===null)r(d);else if(B.startTime<=P)r(d),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(d)}}function F(P){if(w=!1,C(P),!T)if(i(m)!==null)T=!0,L||(L=!0,J());else{var B=i(d);B!==null&&j(F,B.startTime-P)}}var L=!1,O=-1,b=5,N=-1;function Y(){return E?!0:!(s.unstable_now()-N<b)}function G(){if(E=!1,L){var P=s.unstable_now();N=P;var B=!0;try{e:{T=!1,w&&(w=!1,I(O),O=-1),y=!0;var $=g;try{t:{for(C(P),_=i(m);_!==null&&!(_.expirationTime>P&&Y());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,g=_.priorityLevel;var be=_e(_.expirationTime<=P);if(P=s.unstable_now(),typeof be=="function"){_.callback=be,C(P),B=!0;break t}_===i(m)&&r(m),C(P)}else r(m);_=i(m)}if(_!==null)B=!0;else{var U=i(d);U!==null&&j(F,U.startTime-P),B=!1}}break e}finally{_=null,g=$,y=!1}B=void 0}}finally{B?J():L=!1}}}var J;if(typeof H=="function")J=function(){H(G)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,xe=pe.port2;pe.port1.onmessage=G,J=function(){xe.postMessage(null)}}else J=function(){S(G,0)};function j(P,B){O=S(function(){P(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var $=g;g=B;try{return P()}finally{g=$}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=g;g=P;try{return B()}finally{g=$}},s.unstable_scheduleCallback=function(P,B,$){var _e=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_e+$:_e):$=_e,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=$+be,P={id:x++,callback:B,priorityLevel:P,startTime:$,expirationTime:be,sortIndex:-1},$>_e?(P.sortIndex=$,e(d,P),i(m)===null&&P===i(d)&&(w?(I(O),O=-1):w=!0,j(F,$-_e))):(P.sortIndex=be,e(m,P),T||y||(T=!0,L||(L=!0,J()))),P},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(P){var B=g;return function(){var $=g;g=B;try{return P.apply(this,arguments)}finally{g=$}}}})(fh)),fh}var Vg;function K1(){return Vg||(Vg=1,uh.exports=Z1()),uh.exports}var hh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Q1(){if(Xg)return Ln;Xg=1;var s=zd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:d,implementation:x}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,x)},Ln.flushSync=function(m){var d=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=x,r.d.f()}},Ln.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var x=d.as,_=p(x,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ln.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Ln.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,_=p(x,d.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ln.preloadModule=function(m,d){if(typeof m=="string")if(d){var x=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,d){return m(d)},Ln.useFormState=function(m,d,x){return h.H.useFormState(m,d,x)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var kg;function J1(){if(kg)return hh.exports;kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hh.exports=Q1(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function j1(){if(Wg)return zo;Wg=1;var s=K1(),e=zd(),i=J1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),H=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var j=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function U(t){return{current:t}}function Z(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Te=U(null),Ne=U(null),W=U(null),fe=U(null);function ge(t,n){switch(Ee(W,n),Ee(Ne,t),Ee(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sg(n),t=og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Te),Ee(Te,t)}function Pe(){Z(Te),Z(Ne),Z(W)}function nt(t){t.memoizedState!==null&&Ee(fe,t);var n=Te.current,a=og(n,t.type);n!==a&&(Ee(Ne,t),Ee(Te,a))}function Je(t){Ne.current===t&&(Z(Te),Z(Ne)),fe.current===t&&(Z(fe),No._currentValue=$)}var qt,ft;function xt(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+ft}var St=!1;function ht(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(ce){var oe=ce}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(ce){oe=ce}t.call(Me.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var z=v.split(`
`),te=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===te.length)for(o=z.length-1,u=te.length-1;1<=o&&0<=u&&z[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==te[u]){var me=`
`+z[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return xt("Activity");default:return""}}function nn(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,ln=s.unstable_scheduleCallback,Wt=s.unstable_cancelCallback,rn=s.unstable_shouldYield,q=s.unstable_requestPaint,Bt=s.unstable_now,wt=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,Q=s.unstable_NormalPriority,re=s.unstable_LowPriority,he=s.unstable_IdlePriority,Ae=s.log,De=s.unstable_setDisableYieldValue,ue=null,de=null;function Ce(t){if(typeof Ae=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,t)}catch{}}var Be=Math.clz32?Math.clz32:Qe,Oe=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Oe(t)/Ue|0)|0}var je=256,at=262144,X=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(v&=R,v!==0?u=Re(v):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):v!==0?u=Re(v):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Be(a),Me=1<<me;R[me]=0,z[me]=-1;var oe=te[me];if(oe!==null)for(te[me]=null,me=0;me<oe.length;me++){var ce=oe[me];ce!==null&&(ce.lane&=-536870913)}a&=~Me}o!==0&&Lt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Lt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:Dg(t.type))}function Hr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Ni=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ni,bn="__reactProps$"+Ni,Vn="__reactContainer$"+Ni,or="__reactEvents$"+Ni,al="__reactListeners$"+Ni,rl="__reactHandles$"+Ni,lr="__reactResources$"+Ni,ba="__reactMarker$"+Ni;function Ta(t){delete t[fn],delete t[bn],delete t[or],delete t[al],delete t[rl]}function Ki(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pg(t);t!==null;){if(a=t[fn])return a;t=pg(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[fn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Aa(t){var n=t[lr];return n||(n=t[lr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[ba]=!0}var sl=new Set,A={};function k(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(A[t]=n,t=0;t<n.length;t++)sl.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Fe={};function Ge(t){return an.call(Fe,t)?!0:an.call(ie,t)?!1:ne.test(t)?Fe[t]=!0:(ie[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function Ot(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(t,n,a,o,u,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?dt(t,v,$e(n)):a!=null?dt(t,v,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Un(t,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),At(t)}function dt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function jn(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(j(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function $n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Jt(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ra=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ur(t){return Ra.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var iu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,Vr=null;function rp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(He(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(r(90));He(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var ru=!1;function sp(t,n,a){if(ru)return t(n,a);ru=!0;try{var o=t(n);return o}finally{if(ru=!1,(Gr!==null||Vr!==null)&&(Yl(),Gr&&(n=Gr,t=Vr,Vr=Gr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(ji)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){su=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{su=!1}var Ca=null,ou=null,ol=null;function op(){if(ol)return ol;var t,n=ou,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function lp(){return!1}function Xn(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:lp,this.isPropagationStopped=lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Xn(fr),Js=_({},fr,{view:0,detail:0}),Gv=Xn(Js),lu,cu,js,fl=_({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(lu=t.screenX-js.screenX,cu=t.screenY-js.screenY):cu=lu=0,js=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),cp=Xn(fl),Vv=_({},fl,{dataTransfer:0}),Xv=Xn(Vv),kv=_({},Js,{relatedTarget:0}),uu=Xn(kv),Wv=_({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Xn(Wv),Yv=_({},fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Xn(Yv),Kv=_({},fr,{data:0}),up=Xn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=jv[t])?!!n[t]:!1}function fu(){return $v}var ex=_({},Js,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tx=Xn(ex),nx=_({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Xn(nx),ix=_({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),ax=Xn(ix),rx=_({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Xn(rx),ox=_({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Xn(ox),cx=_({},fr,{newState:0,oldState:0}),ux=Xn(cx),fx=[9,13,27,32],hu=ji&&"CompositionEvent"in window,$s=null;ji&&"documentMode"in document&&($s=document.documentMode);var hx=ji&&"TextEvent"in window&&!$s,hp=ji&&(!hu||$s&&8<$s&&11>=$s),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function dx(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function px(t,n){if(Xr)return t==="compositionend"||!hu&&mp(t,n)?(t=op(),ol=ou=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mx[t.type]:n==="textarea"}function vp(t,n,a,o){Gr?Vr?Vr.push(o):Vr=[o]:Gr=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var eo=null,to=null;function gx(t){eg(t,0)}function hl(t){var n=cr(t);if(Qt(n))return t}function xp(t,n){if(t==="change")return n}var Sp=!1;if(ji){var du;if(ji){var pu="oninput"in document;if(!pu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),pu=typeof Mp.oninput=="function"}du=pu}else du=!1;Sp=du&&(!document.documentMode||9<document.documentMode)}function yp(){eo&&(eo.detachEvent("onpropertychange",Ep),to=eo=null)}function Ep(t){if(t.propertyName==="value"&&hl(to)){var n=[];vp(n,to,t,au(t)),sp(gx,n)}}function _x(t,n,a){t==="focusin"?(yp(),eo=n,to=a,eo.attachEvent("onpropertychange",Ep)):t==="focusout"&&yp()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(to)}function xx(t,n){if(t==="click")return hl(n)}function Sx(t,n){if(t==="input"||t==="change")return hl(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Mx;function no(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!an.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,n){var a=bp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=ji&&"documentMode"in document&&11>=document.documentMode,kr=null,gu=null,io=null,_u=!1;function Cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||kr==null||kr!==Xt(o)||(o=kr,"selectionStart"in o&&mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=ec(gu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=kr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Wr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},vu={},wp={};ji&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function dr(t){if(vu[t])return vu[t];if(!Wr[t])return t;var n=Wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return vu[t]=n[a];return t}var Dp=dr("animationend"),Up=dr("animationiteration"),Lp=dr("animationstart"),Ex=dr("transitionrun"),bx=dr("transitionstart"),Tx=dr("transitioncancel"),Np=dr("transitionend"),Op=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function bi(t,n){Op.set(t,n),k(n,[t])}var dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],qr=0,Su=0;function pl(){for(var t=qr,n=Su=qr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Pp(a,u,f)}}function ml(t,n,a,o){fi[qr++]=t,fi[qr++]=n,fi[qr++]=a,fi[qr++]=o,Su|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Mu(t,n,a,o){return ml(t,n,a,o),gl(t)}function pr(t,n){return ml(t,null,null,n),gl(t)}function Pp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Be(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<Ao)throw Ao=0,Uf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function Ax(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new Ax(t,n,a,o)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")yu(t)&&(v=1);else if(typeof t=="string")v=U1(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ti(31,a,n,u),t.elementType=N,t.lanes=f,t;case w:return mr(a.children,u,f,n);case E:v=8,u|=24;break;case S:return t=ti(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case F:return t=ti(13,a,n,u),t.elementType=F,t.lanes=f,t;case L:return t=ti(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:v=10;break e;case I:v=9;break e;case C:v=11;break e;case O:v=14;break e;case b:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ti(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function mr(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function Eu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Ip(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var zp=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nn(n)},zp.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var Zr=[],Kr=0,vl=null,ao=0,di=[],pi=0,wa=null,Pi=1,Fi="";function ea(t,n){Zr[Kr++]=ao,Zr[Kr++]=vl,vl=t,ao=n}function Bp(t,n,a){di[pi++]=Pi,di[pi++]=Fi,di[pi++]=wa,wa=t;var o=Pi;t=Fi;var u=32-Be(o)-1;o&=~(1<<u),a+=1;var f=32-Be(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Pi=1<<32-Be(n)+u|a<<u|o,Fi=f+t}else Pi=1<<f|a<<u|o,Fi=t}function Tu(t){t.return!==null&&(ea(t,1),Bp(t,1,0))}function Au(t){for(;t===vl;)vl=Zr[--Kr],Zr[Kr]=null,ao=Zr[--Kr],Zr[Kr]=null;for(;t===wa;)wa=di[--pi],di[pi]=null,Fi=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function Hp(t,n){di[pi++]=Pi,di[pi++]=Fi,di[pi++]=wa,Pi=n.id,Fi=n.overflow,wa=t}var Tn=null,Yt=null,Mt=!1,Da=null,mi=!1,Ru=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(hi(n,t)),Ru}function Gp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[bn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)mt(Co[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ag(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ua(t,!0)}function Vp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!Mt)return Vp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ua(t),Vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=dg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Yt=dg(t)}else n===27?(n=Yt,Wa(t.type)?(t=Jf,Jf=null,Yt=t):Yt=n):Yt=Tn?_i(t.stateNode.nextSibling):null;return!0}function gr(){Yt=Tn=null,Mt=!1}function Cu(){var t=Da;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Da=null),t}function ro(t){Da===null?Da=[t]:Da.push(t)}var wu=U(null),_r=null,ta=null;function La(t,n,a){Ee(wu,n._currentValue),n._currentValue=a}function na(t){t._currentValue=wu.current,Z(wu)}function Du(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Du(f.return,a,t),o||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Du(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Jr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var R=u.type;ei(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===fe.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Uu(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){_r=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Xp(_r,t)}function Sl(t,n){return _r===null&&vr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(r(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=s.unstable_scheduleCallback,wx=s.unstable_NormalPriority,dn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Rx,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&Cx(wx,function(){t.controller.abort()})}var oo=null,Nu=0,jr=0,$r=null;function Dx(t,n){if(oo===null){var a=oo=[];Nu=0,jr=If(),$r={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nu++,n.then(kp,kp),n}function kp(){if(--Nu===0&&oo!==null){$r!==null&&($r.status="fulfilled");var t=oo;oo=null,jr=0,$r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ux(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Wp=P.S;P.S=function(t,n){C0=Bt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(t,n),Wp!==null&&Wp(t,n)};var xr=U(null);function Ou(){var t=xr.current;return t!==null?t:kt.pooledCache}function Ml(t,n){n===null?Ee(xr,xr.current):Ee(xr,n.pool)}function qp(){var t=Ou();return t===null?null:{parent:dn._currentValue,pool:t}}var es=Error(r(460)),Pu=Error(r(474)),yl=Error(r(542)),El={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw Mr=n,es}}function Sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,es):a}}var Mr=null;function Kp(){if(Mr===null)throw Error(r(459));var t=Mr;return Mr=null,t}function Qp(t){if(t===es||t===yl)throw Error(r(483))}var ts=null,lo=0;function bl(t){var n=lo;return lo+=1,ts===null&&(ts=[]),Zp(ts,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jp(t){function n(K,V){if(t){var ee=K.deletions;ee===null?(K.deletions=[V],K.flags|=16):ee.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=$i(K,V),K.index=0,K.sibling=null,K}function f(K,V,ee){return K.index=ee,t?(ee=K.alternate,ee!==null?(ee=ee.index,ee<V?(K.flags|=67108866,V):ee):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function v(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ee,Se){return V===null||V.tag!==6?(V=Eu(ee,K.mode,Se),V.return=K,V):(V=u(V,ee),V.return=K,V)}function z(K,V,ee,Se){var et=ee.type;return et===w?me(K,V,ee.props.children,Se,ee.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Sr(et)===V.type)?(V=u(V,ee.props),co(V,ee),V.return=K,V):(V=_l(ee.type,ee.key,ee.props,null,K.mode,Se),co(V,ee),V.return=K,V)}function te(K,V,ee,Se){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=bu(ee,K.mode,Se),V.return=K,V):(V=u(V,ee.children||[]),V.return=K,V)}function me(K,V,ee,Se,et){return V===null||V.tag!==7?(V=mr(ee,K.mode,Se,et),V.return=K,V):(V=u(V,ee),V.return=K,V)}function Me(K,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Eu(""+V,K.mode,ee),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return ee=_l(V.type,V.key,V.props,null,K.mode,ee),co(ee,V),ee.return=K,ee;case T:return V=bu(V,K.mode,ee),V.return=K,V;case b:return V=Sr(V),Me(K,V,ee)}if(j(V)||J(V))return V=mr(V,K.mode,ee,null),V.return=K,V;if(typeof V.then=="function")return Me(K,bl(V),ee);if(V.$$typeof===H)return Me(K,Sl(K,V),ee);Tl(K,V)}return null}function oe(K,V,ee,Se){var et=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return et!==null?null:R(K,V,""+ee,Se);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===et?z(K,V,ee,Se):null;case T:return ee.key===et?te(K,V,ee,Se):null;case b:return ee=Sr(ee),oe(K,V,ee,Se)}if(j(ee)||J(ee))return et!==null?null:me(K,V,ee,Se,null);if(typeof ee.then=="function")return oe(K,V,bl(ee),Se);if(ee.$$typeof===H)return oe(K,V,Sl(K,ee),Se);Tl(K,ee)}return null}function ce(K,V,ee,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return K=K.get(ee)||null,R(V,K,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case y:return K=K.get(Se.key===null?ee:Se.key)||null,z(V,K,Se,et);case T:return K=K.get(Se.key===null?ee:Se.key)||null,te(V,K,Se,et);case b:return Se=Sr(Se),ce(K,V,ee,Se,et)}if(j(Se)||J(Se))return K=K.get(ee)||null,me(V,K,Se,et,null);if(typeof Se.then=="function")return ce(K,V,ee,bl(Se),et);if(Se.$$typeof===H)return ce(K,V,ee,Sl(V,Se),et);Tl(V,Se)}return null}function We(K,V,ee,Se){for(var et=null,Rt=null,Ze=V,ct=V=0,_t=null;Ze!==null&&ct<ee.length;ct++){Ze.index>ct?(_t=Ze,Ze=null):_t=Ze.sibling;var Ct=oe(K,Ze,ee[ct],Se);if(Ct===null){Ze===null&&(Ze=_t);break}t&&Ze&&Ct.alternate===null&&n(K,Ze),V=f(Ct,V,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,Ze=_t}if(ct===ee.length)return a(K,Ze),Mt&&ea(K,ct),et;if(Ze===null){for(;ct<ee.length;ct++)Ze=Me(K,ee[ct],Se),Ze!==null&&(V=f(Ze,V,ct),Rt===null?et=Ze:Rt.sibling=Ze,Rt=Ze);return Mt&&ea(K,ct),et}for(Ze=o(Ze);ct<ee.length;ct++)_t=ce(Ze,K,ct,ee[ct],Se),_t!==null&&(t&&_t.alternate!==null&&Ze.delete(_t.key===null?ct:_t.key),V=f(_t,V,ct),Rt===null?et=_t:Rt.sibling=_t,Rt=_t);return t&&Ze.forEach(function(Qa){return n(K,Qa)}),Mt&&ea(K,ct),et}function tt(K,V,ee,Se){if(ee==null)throw Error(r(151));for(var et=null,Rt=null,Ze=V,ct=V=0,_t=null,Ct=ee.next();Ze!==null&&!Ct.done;ct++,Ct=ee.next()){Ze.index>ct?(_t=Ze,Ze=null):_t=Ze.sibling;var Qa=oe(K,Ze,Ct.value,Se);if(Qa===null){Ze===null&&(Ze=_t);break}t&&Ze&&Qa.alternate===null&&n(K,Ze),V=f(Qa,V,ct),Rt===null?et=Qa:Rt.sibling=Qa,Rt=Qa,Ze=_t}if(Ct.done)return a(K,Ze),Mt&&ea(K,ct),et;if(Ze===null){for(;!Ct.done;ct++,Ct=ee.next())Ct=Me(K,Ct.value,Se),Ct!==null&&(V=f(Ct,V,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return Mt&&ea(K,ct),et}for(Ze=o(Ze);!Ct.done;ct++,Ct=ee.next())Ct=ce(Ze,K,ct,Ct.value,Se),Ct!==null&&(t&&Ct.alternate!==null&&Ze.delete(Ct.key===null?ct:Ct.key),V=f(Ct,V,ct),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ze.forEach(function(V1){return n(K,V1)}),Mt&&ea(K,ct),et}function Vt(K,V,ee,Se){if(typeof ee=="object"&&ee!==null&&ee.type===w&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var et=ee.key;V!==null;){if(V.key===et){if(et=ee.type,et===w){if(V.tag===7){a(K,V.sibling),Se=u(V,ee.props.children),Se.return=K,K=Se;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Sr(et)===V.type){a(K,V.sibling),Se=u(V,ee.props),co(Se,ee),Se.return=K,K=Se;break e}a(K,V);break}else n(K,V);V=V.sibling}ee.type===w?(Se=mr(ee.props.children,K.mode,Se,ee.key),Se.return=K,K=Se):(Se=_l(ee.type,ee.key,ee.props,null,K.mode,Se),co(Se,ee),Se.return=K,K=Se)}return v(K);case T:e:{for(et=ee.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(K,V.sibling),Se=u(V,ee.children||[]),Se.return=K,K=Se;break e}else{a(K,V);break}else n(K,V);V=V.sibling}Se=bu(ee,K.mode,Se),Se.return=K,K=Se}return v(K);case b:return ee=Sr(ee),Vt(K,V,ee,Se)}if(j(ee))return We(K,V,ee,Se);if(J(ee)){if(et=J(ee),typeof et!="function")throw Error(r(150));return ee=et.call(ee),tt(K,V,ee,Se)}if(typeof ee.then=="function")return Vt(K,V,bl(ee),Se);if(ee.$$typeof===H)return Vt(K,V,Sl(K,ee),Se);Tl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(a(K,V.sibling),Se=u(V,ee),Se.return=K,K=Se):(a(K,V),Se=Eu(ee,K.mode,Se),Se.return=K,K=Se),v(K)):a(K,V)}return function(K,V,ee,Se){try{lo=0;var et=Vt(K,V,ee,Se);return ts=null,et}catch(Ze){if(Ze===es||Ze===yl)throw Ze;var Rt=ti(29,Ze,null,K.mode);return Rt.lanes=Se,Rt.return=K,Rt}finally{}}}var yr=Jp(!0),jp=Jp(!1),Na=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=gl(t),Pp(t,null,a),n}return ml(t,o,n,a),gl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}function zu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bu=!1;function fo(){if(Bu){var t=$r;if(t!==null)throw t}}function ho(t,n,a,o){Bu=!1;var u=t.updateQueue;Na=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,te=z.next;z.next=null,v===null?f=te:v.next=te,v=z;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==v&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=z))}if(f!==null){var Me=u.baseState;v=0,me=te=z=null,R=f;do{var oe=R.lane&-536870913,ce=oe!==R.lane;if(ce?(gt&oe)===oe:(o&oe)===oe){oe!==0&&oe===jr&&(Bu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,tt=R;oe=n;var Vt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){Me=We.call(Vt,Me,oe);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,oe=typeof We=="function"?We.call(Vt,Me,oe):We,oe==null)break e;Me=_({},Me,oe);break e;case 2:Na=!0}}oe=R.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ce,z=Me):me=me.next=ce,v|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(z=Me),u.baseState=z,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ha|=v,t.lanes=v,t.memoizedState=Me}}function $p(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function em(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var ns=U(null),Al=U(0);function tm(t,n){t=fa,Ee(Al,t),Ee(ns,n),fa=t|n.baseLanes}function Hu(){Ee(Al,fa),Ee(ns,ns.current)}function Gu(){fa=Al.current,Z(ns),Z(Al)}var ni=U(null),gi=null;function Fa(t){var n=t.alternate;Ee(cn,cn.current&1),Ee(ni,t),gi===null&&(n===null||ns.current!==null||n.memoizedState!==null)&&(gi=t)}function Vu(t){Ee(cn,cn.current),Ee(ni,t),gi===null&&(gi=t)}function nm(t){t.tag===22?(Ee(cn,cn.current),Ee(ni,t),gi===null&&(gi=t)):Ia()}function Ia(){Ee(cn,cn.current),Ee(ni,ni.current)}function ii(t){Z(ni),gi===t&&(gi=null),Z(cn)}var cn=U(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,lt=null,Ht=null,pn=null,Cl=!1,is=!1,Er=!1,wl=0,po=0,as=null,Lx=0;function sn(){throw Error(r(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function ku(t,n,a,o,u,f){return ia=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Bm:sf,Er=!1,f=a(o,u),Er=!1,is&&(f=am(n,a,o,u)),im(t),f}function im(t){P.H=_o;var n=Ht!==null&&Ht.next!==null;if(ia=0,pn=Ht=lt=null,Cl=!1,po=0,as=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&xl(t)&&(mn=!0))}function am(t,n,a,o){lt=t;var u=0;do{if(is&&(as=null),po=0,is=!1,25<=u)throw Error(r(301));if(u+=1,pn=Ht=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Hm,f=n(a,o)}while(is);return f}function Nx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(lt.flags|=1024),n}function Wu(){var t=wl!==0;return wl=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}ia=0,pn=Ht=lt=null,is=!1,po=wl=0,as=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?lt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Ht===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=pn===null?lt.memoizedState:pn.next;if(n!==null)pn=n,Ht=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},pn===null?lt.memoizedState=pn=t:pn=pn.next=t}return pn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,as===null&&(as=[]),t=Zp(as,t,n),n=lt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Bm:sf),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===H)return An(t)}throw Error(r(438,String(t)))}function Zu(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=un();return Ku(n,Ht,t)}function Ku(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=v=null,z=null,te=n,me=!1;do{var Me=te.lane&-536870913;if(Me!==te.lane?(gt&Me)===Me:(ia&Me)===Me){var oe=te.revertLane;if(oe===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Me===jr&&(me=!0);else if((ia&oe)===oe){te=te.next,oe===jr&&(me=!0);continue}else Me={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=Me,v=f):z=z.next=Me,lt.lanes|=oe,Ha|=oe;Me=te.action,Er&&a(f,Me),f=te.hasEagerState?te.eagerState:a(f,Me)}else oe={lane:Me,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(R=z=oe,v=f):z=z.next=oe,lt.lanes|=Me,Ha|=Me;te=te.next}while(te!==null&&te!==n);if(z===null?v=f:z.next=R,!ei(f,t.memoizedState)&&(mn=!0,me&&(a=$r,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Qu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ei(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function rm(t,n,a){var o=lt,u=un(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ei((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,$u(lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,rs(9,{destroy:void 0},om.bind(null,o,u,a,n),null),kt===null)throw Error(r(349));f||(ia&127)!==0||sm(o,n,a)}return a}function sm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Dl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function om(t,n,a,o){n.value=a,n.getSnapshot=o,cm(n)&&um(t)}function lm(t,n,a){return a(function(){cm(n)&&um(t)})}function cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function um(t){var n=pr(t,2);n!==null&&Zn(n,t,2)}function Ju(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Er){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function fm(t,n,a,o){return t.baseState=a,Ku(t,Ht,typeof o=="function"?o:aa)}function Ox(t,n,a,o,u){if(Pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var R=a(u,o),z=P.S;z!==null&&z(v,R),dm(t,n,R)}catch(te){ju(t,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,o),dm(t,n,f)}catch(te){ju(t,n,te)}}function dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){pm(t,n,o)},function(o){return ju(t,n,o)}):pm(t,n,a)}function pm(t,n,a){n.status="fulfilled",n.value=a,mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function ju(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==o)}t.action=null}function mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gm(t,n){return n}function _m(t,n){if(Mt){var a=kt.formState;if(a!==null){e:{var o=lt;if(Mt){if(Yt){t:{for(var u=Yt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=_i(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=o,a=Fm.bind(null,lt,o),o.dispatch=a,o=Ju(!1),f=rf.bind(null,lt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ox.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function vm(t){var n=un();return xm(n,Ht,t)}function xm(t,n,a){if(n=Ku(t,n,gm)[0],t=Ll(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(v){throw v===es?yl:v}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,rs(9,{destroy:void 0},Px.bind(null,u,a),null)),[o,f,t]}function Px(t,n){t.action=n}function Sm(t){var n=un(),a=Ht;if(a!==null)return xm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function rs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Dl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return un().memoizedState}function Nl(t,n,a,o){var u=In();lt.flags|=t,u.memoizedState=rs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&Xu(o,Ht.memoizedState.deps)?u.memoizedState=rs(n,f,a,o):(lt.flags|=t,u.memoizedState=rs(1|n,f,a,o))}function ym(t,n){Nl(8390656,8,t,n)}function $u(t,n){Ol(2048,8,t,n)}function Fx(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Dl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=un().memoizedState;return Fx({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function bm(t,n){return Ol(4,2,t,n)}function Tm(t,n){return Ol(4,4,t,n)}function Am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rm(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,Am.bind(null,n,t),a)}function ef(){}function Cm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function wm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=t(),Er){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function tf(t,n,a){return a===void 0||(ia&1073741824)!==0&&(gt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=D0(),lt.lanes|=t,Ha|=t,a)}function Dm(t,n,a,o){return ei(a,n)?a:ns.current!==null?(t=tf(t,a,o),ei(t,n)||(mn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(gt&261930)===0?(mn=!0,t.memoizedState=a):(t=D0(),lt.lanes|=t,Ha|=t,n)}function Um(t,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var v=P.T,R={};P.T=R,rf(t,!1,n,a);try{var z=u(),te=P.S;if(te!==null&&te(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var me=Ux(z,o);go(t,n,me,si(t))}else go(t,n,o,si(t))}catch(Me){go(t,n,{then:function(){},status:"rejected",reason:Me},si())}finally{B.p=f,v!==null&&R.types!==null&&(v.types=R.types),P.T=v}}function Ix(){}function nf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Lm(t).queue;Um(t,u,n,$,a===null?Ix:function(){return Nm(t),a(o)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},si())}function af(){return An(No)}function Om(){return un().memoizedState}function Pm(){return un().memoizedState}function zx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Zn(o,n,a),uo(o,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function Bx(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Im(n,a):(a=Mu(t,n,a,o),a!==null&&(Zn(a,t,o),zm(a,n,o)))}function Fm(t,n,a){var o=si();go(t,n,a,o)}function go(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Im(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ei(R,v))return ml(t,n,u,0),kt===null&&pl(),!1}catch{}finally{}if(a=Mu(t,n,u,o),a!==null)return Zn(a,t,o),zm(a,n,o),!0}return!1}function rf(t,n,a,o){if(o={lane:2,revertLane:If(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(r(479))}else n=Mu(t,a,o,2),n!==null&&Zn(n,t,2)}function Pl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Im(t,n){is=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}var _o={readContext:An,use:Ul,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};_o.useEffectEvent=sn;var Bm={readContext:An,use:Ul,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,Am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Er){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Er){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Bx.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=Fm.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=In();return tf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Um.bind(null,lt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=In();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(gt&127)!==0||sm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(lm.bind(null,o,f,t),[t]),o.flags|=2048,rs(9,{destroy:void 0},om.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=kt.identifierPrefix;if(Mt){var a=Fi,o=Pi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return In().memoizedState=zx.bind(null,lt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:An,use:Ul,useCallback:Cm,useContext:An,useEffect:$u,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Tm,useMemo:wm,useReducer:Ll,useRef:Mm,useState:function(){return Ll(aa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Dm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Ll(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:af,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=un();return fm(a,Ht,t,n)},useMemoCache:Zu,useCacheRefresh:Pm};sf.useEffectEvent=Em;var Hm={readContext:An,use:Ul,useCallback:Cm,useContext:An,useEffect:$u,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Tm,useMemo:wm,useReducer:Qu,useRef:Mm,useState:function(){return Qu(aa)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Ht===null?tf(a,t,n):Dm(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Qu(aa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:af,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=un();return Ht!==null?fm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:Pm};Hm.useEffectEvent=Em;function of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Zn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Zn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Zn(n,t,a),uo(n,t,a))}};function Gm(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(u,f):!0}function Vm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function br(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){dl(t)}function km(t){console.error(t)}function Wm(t){dl(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function qm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function Ym(t){return t=Oa(t),t.tag=3,t}function Zm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){qm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Hx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Zl():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Of(t,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Of(t,o,u)),!1}throw Error(r(435,a.tag))}return Of(t,o,u),Zl(),!1}if(Mt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(t=Error(r(422),{cause:o}),ro(hi(t,a)))):(o!==Ru&&(n=Error(r(423),{cause:o}),ro(hi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=hi(o,a),u=cf(t.stateNode,o,u),zu(t,u),on!==4&&(on=2)),!1;var f=Error(r(520),{cause:o});if(f=hi(f,a),To===null?To=[f]:To.push(f),on!==4&&(on=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,o,t),zu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),Zm(u,t,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(r(461)),mn=!1;function Rn(t,n,a,o){n.child=t===null?jp(n,null,a,o):yr(n,t.child,a,o)}function Km(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return vr(n),o=ku(t,n,a,v,f,u),R=Wu(),t!==null&&!mn?(qu(t,n,u),ra(t,n,u)):(Mt&&R&&Tu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Qm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Jm(t,n,f,o,u)):(t=_l(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(v,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function Jm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(no(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,vf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return ff(t,n,a,o,u)}function jm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return $m(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?tm(n,f):Hu(),nm(n);else return o=n.lanes=536870912,$m(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ml(n,f.cachePool),tm(n,f),Ia(),n.memoizedState=null):(t!==null&&Ml(n,null),Hu(),Ia());return Rn(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(t,n,a,o,u){var f=Ou();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ml(n,null),Hu(),nm(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Il(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function e0(t,n,a){return yr(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function Gx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Il(n,o),n.lanes=536870912,vo(null,t);if(Vu(n),(t=Yt)?(t=hg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Il(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=e0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||Jr(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=kt,o!==null&&(v=Jn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,pr(t,v),Zn(o,t,v),uf;Zl(),n=e0(t,n,a)}else t=f.treeContext,Yt=_i(v.nextSibling),Tn=n,Mt=!0,Da=null,mi=!1,t!==null&&Hp(n,t),n=Il(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,o,u){return vr(n),a=ku(t,n,a,o,void 0,u),o=Wu(),t!==null&&!mn?(qu(t,n,u),ra(t,n,u)):(Mt&&o&&Tu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function t0(t,n,a,o,u,f){return vr(n),n.updateQueue=null,a=am(n,o,a,u),im(t),o=Wu(),t!==null&&!mn?(qu(t,n,f),ra(t,n,f)):(Mt&&o&&Tu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function n0(t,n,a,o,u){if(vr(n),n.stateNode===null){var f=Yr,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Yr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(of(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&lf.enqueueReplaceState(f,f.state,null),ho(n,o,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,z=br(a,R);f.props=z;var te=f.context,me=a.contextType;v=Yr,typeof me=="object"&&me!==null&&(v=An(me));var Me=a.getDerivedStateFromProps;me=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==v)&&Vm(n,f,o,v),Na=!1;var oe=n.memoizedState;f.state=oe,ho(n,o,f,u),fo(),te=n.memoizedState,R||oe!==te||Na?(typeof Me=="function"&&(of(n,a,Me,o),te=n.memoizedState),(z=Na||Gm(n,a,z,o,oe,te,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=v,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Iu(t,n),v=n.memoizedProps,me=br(a,v),f.props=me,Me=n.pendingProps,oe=f.context,te=a.contextType,z=Yr,typeof te=="object"&&te!==null&&(z=An(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==Me||oe!==z)&&Vm(n,f,o,z),Na=!1,oe=n.memoizedState,f.state=oe,ho(n,o,f,u),fo();var ce=n.memoizedState;v!==Me||oe!==ce||Na||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof R=="function"&&(of(n,a,R,o),ce=n.memoizedState),(me=Na||Gm(n,a,me,o,oe,ce,z)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=z,o=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=yr(n,t.child,null,u),n.child=yr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function i0(t,n,a,o){return gr(),n.flags|=256,Rn(t,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:qp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function a0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Fa(n):Ia(),(t=Yt)?(t=hg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Ua(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ia(),u=n.mode,R=Bl({mode:"hidden",children:R},u),o=mr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=df(a),o.childLanes=pf(t,v,a),n.memoizedState=hf,vo(null,o)):(Fa(n),mf(n,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),R=o.fallback,u=n.mode,o=Bl({mode:"visible",children:o.children},u),R=mr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,yr(n,t.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(t,v,a),n.memoizedState=hf,n=vo(null,o));else if(Fa(n),Qf(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var te=v.dgst;v=te,o=Error(r(419)),o.stack="",o.digest=v,ro({value:o,source:null,stack:null}),n=gf(t,n,a)}else if(mn||Jr(t,n,a,!1),v=(a&t.childLanes)!==0,mn||v){if(v=kt,v!==null&&(o=Jn(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,pr(t,o),Zn(v,t,o),uf;Kf(R)||Zl(),n=gf(t,n,a)}else Kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Yt=_i(R.nextSibling),Tn=n,Mt=!0,Da=null,mi=!1,t!==null&&Hp(n,t),n=mf(n,o.children),n.flags|=4096);return n}return u?(Ia(),R=o.fallback,u=n.mode,z=t.child,te=z.sibling,o=$i(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,te!==null?R=$i(te,R):(R=mr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,vo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=df(a):(u=R.cachePool,u!==null?(z=dn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=qp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=pf(t,v,a),n.memoizedState=hf,vo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function gf(t,n,a){return yr(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function r0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Du(t.return,n,a)}function _f(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function s0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=cn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Ee(cn,v),Rn(t,n,o,a),o=Mt?ao:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,a,n);else if(t.tag===19)r0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,o);break;case"together":_f(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Vx(t,n,a){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),La(n,dn,t.memoizedState.cache),gr();break;case 27:case 5:nt(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?a0(t,n,a):(Fa(n),t=ra(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return s0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(cn,cn.current),o)break;return null;case 22:return n.lanes=0,jm(t,n,a,n.pendingProps);case 24:La(n,dn,t.memoizedState.cache)}return ra(t,n,a)}function o0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return mn=!1,Vx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Mt&&(n.flags&1048576)!==0&&Bp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Sr(n.elementType),n.type=t,typeof t=="function")yu(t)?(o=br(t,o),n.tag=1,n=n0(null,n,t,o,a)):(n.tag=0,n=ff(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Km(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=Qm(null,n,t,o,a);break e}}throw n=xe(t)||t,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=br(o,n.pendingProps),n0(t,n,o,u,a);case 3:e:{if(ge(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(t,n),ho(n,o,null,a);var v=n.memoizedState;if(o=v.cache,La(n,dn,o),o!==f.cache&&Uu(n,[dn],a,!0),fo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=i0(t,n,o,a);break e}else if(o!==u){u=hi(Error(r(424)),n),ro(u),n=i0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=_i(t.firstChild),Tn=n,Mt=!0,Da=null,mi=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gr(),o===u){n=ra(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=tc(W.current).createElement(a),o[fn]=n,o[bn]=t,Cn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&Mt&&(o=n.stateNode=mg(n.type,n.pendingProps,W.current),Tn=n,mi=!0,u=Yt,Wa(n.type)?(Jf=u,Yt=_i(o.firstChild)):Yt=u),Rn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Yt)&&(o=v1(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Tn=n,Yt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Ua(n)),nt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,qf(u,f)?o=null:v!==null&&qf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(t,n,Nx,null,null,a),No._currentValue=u),zl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Yt)&&(a=x1(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return a0(t,n,a);case 4:return ge(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=yr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Qm(t,n,n.type,n.pendingProps,a);case 15:return Jm(t,n,n.type,n.pendingProps,a);case 19:return s0(t,n,a);case 31:return Gx(t,n,a);case 22:return jm(t,n,a,n.pendingProps);case 24:return vr(n),o=An(dn),t===null?(u=Ou(),u===null&&(u=kt,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fu(n),La(n,dn,u)):((t.lanes&a)!==0&&(Iu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,dn,o)):(o=f.cache,La(n,dn,o),o!==u.cache&&Uu(n,[dn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function xf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(O0())t.flags|=8192;else throw Mr=El,Pu}else t.flags&=-16777217}function l0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Eg(n))if(O0())t.flags|=8192;else throw Mr=El,Pu}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,cs|=n)}function xo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Xx(t,n,a){var o=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(dn),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Zt(n),l0(n,f)):(Zt(n),xf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Zt(n),l0(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Zt(n),xf(n,u,t,o,a)),null;case 27:if(Je(n),a=W.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}t=Te.current,Qr(n)?Gp(n):(t=mg(u,o,a),n.stateNode=t,sa(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(f=Te.current,Qr(n))Gp(n);else{var v=tc(W.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[fn]=n,f[bn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Zt(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=W.current,Qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ag(t.nodeValue,a)),t||Ua(n,!0)}else t=tc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Zt(n),null);case 4:return Pe(),t===null&&Gf(n.stateNode.containerInfo),Zt(n),null;case 10:return na(n.type),Zt(n),null;case 19:if(Z(cn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,xo(o,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return Ee(cn,cn.current&1|2),Mt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Bt()>Wl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Rl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Zt(n),null}else 2*Bt()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Bt(),t.sibling=null,a=cn.current,Ee(cn,u?a&1|2:a&1),Mt&&ea(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return ii(n),Gu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(xr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(dn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function kx(t,n){switch(Au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(dn),Pe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));gr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(cn),null;case 4:return Pe(),null;case 10:return na(n.type),null;case 22:case 23:return ii(n),Gu(),t!==null&&Z(xr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(dn),null;case 25:return null;default:return null}}function c0(t,n){switch(Au(n),n.tag){case 3:na(dn),Pe();break;case 26:case 27:case 5:Je(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Z(cn);break;case 10:na(n.type);break;case 22:case 23:ii(n),Gu(),t!==null&&Z(xr);break;case 24:na(dn)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){It(n,n.return,R)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var z=a,te=R;try{te()}catch(me){It(u,z,me)}}}o=o.next}while(o!==f)}}catch(me){It(n,n.return,me)}}function u0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{em(n,a)}catch(o){It(t,t.return,o)}}}function f0(t,n,a){a.props=br(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){It(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){It(t,n,u)}}function Ii(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){It(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){It(t,n,u)}else a.current=null}function h0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){It(t,t.return,u)}}function Sf(t,n,a){try{var o=t.stateNode;h1(o,t.type,a,n),o[bn]=n}catch(u){It(t,t.return,u)}}function d0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function p0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[fn]=t,n[bn]=a}catch(f){It(t,t.return,f)}}var oa=!1,gn=!1,Ef=!1,m0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Wx(t,n){if(t=t.containerInfo,kf=lc,t=Rp(t),mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,z=-1,te=0,me=0,Me=t,oe=null;t:for(;;){for(var ce;Me!==a||u!==0&&Me.nodeType!==3||(R=v+u),Me!==f||o!==0&&Me.nodeType!==3||(z=v+o),Me.nodeType===3&&(v+=Me.nodeValue.length),(ce=Me.firstChild)!==null;)oe=Me,Me=ce;for(;;){if(Me===t)break t;if(oe===a&&++te===u&&(R=v),oe===f&&++me===o&&(z=v),(ce=Me.nextSibling)!==null)break;Me=oe,oe=Me.parentNode}Me=ce}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},lc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=br(a.type,u);t=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){It(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function g0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&So(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){It(a,a.return,v)}else{var u=br(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){It(a,a.return,v)}}o&64&&u0(a),o&512&&Mo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(t,n)}catch(v){It(a,a.return,v)}}break;case 27:n===null&&o&4&&p0(a);case 26:case 5:ca(t,a),n===null&&o&4&&h0(a),o&512&&Mo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&x0(t,a);break;case 13:ca(t,a),o&4&&S0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=e1.bind(null,a),S1(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||gn,u=oa;var f=gn;oa=o,(gn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,gn=f}break;case 30:break;default:ca(t,a)}}function _0(t){var n=t.alternate;n!==null&&(t.alternate=null,_0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ta(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,kn=!1;function la(t,n,a){for(a=a.child;a!==null;)v0(t,n,a),a=a.sibling}function v0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:gn||Ii(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Ii(a,n);var o=jt,u=kn;Wa(a.type)&&(jt=a.stateNode,kn=!1),la(t,n,a),Do(a.stateNode),jt=o,kn=u;break;case 5:gn||Ii(a,n);case 6:if(o=jt,u=kn,jt=null,la(t,n,a),jt=o,kn=u,jt!==null)if(kn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:jt!==null&&(kn?(t=jt,ug(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_s(t)):ug(jt,a.stateNode));break;case 4:o=jt,u=kn,jt=a.stateNode.containerInfo,kn=!0,la(t,n,a),jt=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),gn||za(4,a,n),la(t,n,a);break;case 1:gn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&f0(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,la(t,n,a),gn=o;break;default:la(t,n,a)}}function x0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(a){It(n,n.return,a)}}}function S0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(a){It(n,n.return,a)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new m0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new m0),n;default:throw Error(r(435,t.tag))}}function Vl(t,n){var a=qx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=t1.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Wa(R.type)){jt=R.stateNode,kn=!1;break e}break;case 5:jt=R.stateNode,kn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));v0(f,v,u),jt=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M0(n,t),n=n.sibling}var Ti=null;function M0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(za(3,t,t.return),So(3,t),za(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(gn||a===null||Ii(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Wn(n,t),qn(t),o&512&&(gn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[fn]=t,hn(f),o=f;break e;case"link":var v=Mg("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Mg("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[fn]=t,hn(f),o=f}t.stateNode=o}else yg(u,t.type,t.stateNode);else t.stateNode=Sg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?yg(u,t.type,t.stateNode):Sg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(gn||a===null||Ii(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(gn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{$n(u,"")}catch(We){It(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ef=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){It(t,t.return,We)}}break;case 3:if(ac=null,u=Ti,Ti=nc(n.containerInfo),Wn(n,t),Ti=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(We){It(t,t.return,We)}Ef&&(Ef=!1,y0(t));break;case 4:o=Ti,Ti=nc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ti=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=Bt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,te=oa,me=gn;if(oa=te||u,gn=me||z,Wn(n,t),gn=me,oa=te,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||oa||gn||Tr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=z.stateNode;var Me=z.memoizedProps.style,oe=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){It(z,z.return,We)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(We){It(z,z.return,We)}}}else if(n.tag===18){if(a===null){z=n;try{var ce=z.stateNode;u?fg(ce,!0):fg(z.stateNode,!1)}catch(We){It(z,z.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(d0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Gl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&($n(v,""),a.flags&=-33);var R=Mf(t);Gl(t,R,v);break;case 3:case 4:var z=a.stateNode.containerInfo,te=Mf(t);yf(t,te,z);break;default:throw Error(r(161))}}catch(me){It(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function y0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;y0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)g0(t,n.alternate,n),n=n.sibling}function Tr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Tr(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&f0(n,n.return,a),Tr(n);break;case 27:Do(n.stateNode);case 26:case 5:Ii(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),So(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){It(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)$p(z[u],R)}catch(te){It(o,o.return,te)}}a&&v&64&&u0(f),Mo(f,f.return);break;case 27:p0(f);case 26:case 5:ua(u,f,a),a&&o===null&&v&4&&h0(f),Mo(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&v&4&&x0(u,f);break;case 13:ua(u,f,a),a&&v&4&&S0(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Mo(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)E0(t,n,a,o),n=n.sibling}function E0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&So(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){It(n,n.return,z)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):yo(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,ss(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(v,n);break;case 24:Ai(t,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Ai(t,n,a,o)}}function ss(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,z=o,te=v.flags;switch(v.tag){case 0:case 11:case 15:ss(f,v,R,z,u),So(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?ss(f,v,R,z,u):yo(f,v):(me._visibility|=2,ss(f,v,R,z,u)),u&&te&2048&&bf(v.alternate,v);break;case 24:ss(f,v,R,z,u),u&&te&2048&&Tf(v.alternate,v);break;default:ss(f,v,R,z,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&bf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Tf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var Eo=8192;function os(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)b0(t,n,a),t=t.sibling}function b0(t,n,a){switch(t.tag){case 26:os(t,n,a),t.flags&Eo&&t.memoizedState!==null&&L1(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:os(t,n,a);break;case 3:case 4:var o=Ti;Ti=nc(t.stateNode.containerInfo),os(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,os(t,n,a),Eo=o):os(t,n,a));break;default:os(t,n,a)}}function T0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,R0(o,t)}T0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)A0(t),t=t.sibling}function A0(t){switch(t.tag){case 0:case 11:case 15:bo(t),t.flags&2048&&za(9,t,t.return);break;case 3:bo(t);break;case 12:bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):bo(t);break;default:bo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,R0(o,t)}T0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function R0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(_0(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Yx={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,kt=null,pt=null,gt=0,Ft=0,ai=null,Ba=!1,ls=!1,Af=!1,fa=0,on=0,Ha=0,Ar=0,Rf=0,ri=0,cs=0,To=null,Yn=null,Cf=!1,kl=0,C0=0,Wl=1/0,ql=null,Ga=null,xn=0,Va=null,us=null,ha=0,wf=0,Df=null,w0=null,Ao=0,Uf=null;function si(){return(Dt&2)!==0&&gt!==0?gt&-gt:P.T!==null?If():Zs()}function D0(){if(ri===0)if((gt&536870912)===0||Mt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Zn(t,n,a){(t===kt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(fs(t,0),Xa(t,gt,ri,!1)),Ve(t,a),((Dt&2)===0||t!==kt)&&(t===kt&&((Dt&2)===0&&(Ar|=a),on===4&&Xa(t,gt,ri,!1)),zi(t))}function U0(t,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Jx(t,n):Nf(t,n,!0),f=o;do{if(u===0){ls&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kx(a)){u=Nf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;u=To;var z=R.current.memoizedState.isDehydrated;if(z&&(fs(R,v).flags|=256),v=Nf(R,v,!1),v!==2){if(Af&&!z){R.errorRecoveryDisabledLanes|=f,Ar|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fs(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ri,!Ba);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=kl+300-Bt(),10<u)){if(Xa(o,n,ri,!Ba),ve(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=lg(L0.bind(null,o,a,Yn,ql,Cf,n,ri,Ar,cs,Ba,f,"Throttled",-0,0),u);break e}L0(o,a,Yn,ql,Cf,n,ri,Ar,cs,Ba,f,null,-0,0)}}break}while(!0);zi(t)}function L0(t,n,a,o,u,f,v,R,z,te,me,Me,oe,ce){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},b0(n,f,Me);var We=(f&62914560)===f?kl-Bt():(f&4194048)===f?C0-Bt():0;if(We=N1(Me,We),We!==null){ha=f,t.cancelPendingCommit=We(H0.bind(null,t,n,f,a,o,u,v,R,z,me,Me,null,oe,ce)),Xa(t,f,v,!te);return}}H0(t,n,f,a,o,u,v,R,z)}function Kx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Rf,n&=~Ar,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Be(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Lt(t,a,n)}function Yl(){return(Dt&6)===0?(Ro(0),!1):!0}function Lf(){if(pt!==null){if(Ft===0)var t=pt.return;else t=pt,ta=_r=null,Yu(t),ts=null,lo=0,t=pt;for(;t!==null;)c0(t.alternate,t),t=t.return;pt=null}}function fs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,m1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,Lf(),kt=t,pt=a=$i(t.current,null),gt=n,Ft=0,ai=null,Ba=!1,ls=we(t,n),Af=!1,cs=ri=Rf=Ar=Ha=on=0,Yn=To=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Be(o),f=1<<u;n|=t[u],o&=~f}return fa=n,pl(),a}function N0(t,n){lt=null,P.H=_o,n===es||n===yl?(n=Kp(),Ft=3):n===Pu?(n=Kp(),Ft=4):Ft=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,pt===null&&(on=1,Fl(t,hi(n,t.current)))}function O0(){var t=ni.current;return t===null?!0:(gt&4194048)===gt?gi===null:(gt&62914560)===gt||(gt&536870912)!==0?t===gi:!1}function P0(){var t=P.H;return P.H=_o,t===null?_o:t}function F0(){var t=P.A;return P.A=Yx,t}function Zl(){on=4,Ba||(gt&4194048)!==gt&&ni.current!==null||(ls=!0),(Ha&134217727)===0&&(Ar&134217727)===0||kt===null||Xa(kt,gt,ri,!1)}function Nf(t,n,a){var o=Dt;Dt|=2;var u=P0(),f=F0();(kt!==t||gt!==n)&&(ql=null,fs(t,n)),n=!1;var v=on;e:do try{if(Ft!==0&&pt!==null){var R=pt,z=ai;switch(Ft){case 8:Lf(),v=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var te=Ft;if(Ft=0,ai=null,hs(t,R,z,te),a&&ls){v=0;break e}break;default:te=Ft,Ft=0,ai=null,hs(t,R,z,te)}}Qx(),v=on;break}catch(me){N0(t,me)}while(!0);return n&&t.shellSuspendCounter++,ta=_r=null,Dt=o,P.H=u,P.A=f,pt===null&&(kt=null,gt=0,pl()),v}function Qx(){for(;pt!==null;)I0(pt)}function Jx(t,n){var a=Dt;Dt|=2;var o=P0(),u=F0();kt!==t||gt!==n?(ql=null,Wl=Bt()+500,fs(t,n)):ls=we(t,n);e:do try{if(Ft!==0&&pt!==null){n=pt;var f=ai;t:switch(Ft){case 1:Ft=0,ai=null,hs(t,n,f,1);break;case 2:case 9:if(Yp(f)){Ft=0,ai=null,z0(n);break}n=function(){Ft!==2&&Ft!==9||kt!==t||(Ft=7),zi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Yp(f)?(Ft=0,ai=null,z0(n)):(Ft=0,ai=null,hs(t,n,f,7));break;case 5:var v=null;switch(pt.tag){case 26:v=pt.memoizedState;case 5:case 27:var R=pt;if(v?Eg(v):R.stateNode.complete){Ft=0,ai=null;var z=R.sibling;if(z!==null)pt=z;else{var te=R.return;te!==null?(pt=te,Kl(te)):pt=null}break t}}Ft=0,ai=null,hs(t,n,f,5);break;case 6:Ft=0,ai=null,hs(t,n,f,6);break;case 8:Lf(),on=6;break e;default:throw Error(r(462))}}jx();break}catch(me){N0(t,me)}while(!0);return ta=_r=null,P.H=o,P.A=u,Dt=a,pt!==null?0:(kt=null,gt=0,pl(),on)}function jx(){for(;pt!==null&&!rn();)I0(pt)}function I0(t){var n=o0(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?Kl(t):pt=n}function z0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=t0(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=t0(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:Yu(n);default:c0(a,n),n=pt=Fp(n,fa),n=o0(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?Kl(t):pt=n}function hs(t,n,a,o){ta=_r=null,Yu(n),ts=null,lo=0;var u=n.return;try{if(Hx(t,u,n,a,gt)){on=1,Fl(t,hi(a,t.current)),pt=null;return}}catch(f){if(u!==null)throw pt=u,f;on=1,Fl(t,hi(a,t.current)),pt=null;return}n.flags&32768?(Mt||o===1?t=!0:ls||(gt&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),B0(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){B0(n,Ba);return}t=n.return;var a=Xx(n.alternate,n,fa);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);on===0&&(on=5)}function B0(t,n){do{var a=kx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);on=6,pt=null}function H0(t,n,a,o,u,f,v,R,z){t.cancelPendingCommit=null;do Ql();while(xn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,Kt(t,a,f,v,R,z),t===kt&&(pt=kt=null,gt=0),us=n,Va=t,ha=a,wf=f,Df=u,w0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,n1(Q,function(){return W0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=B.p,B.p=2,v=Dt,Dt|=4;try{Wx(t,n,a)}finally{Dt=v,B.p=u,P.T=o}}xn=1,G0(),V0(),X0()}}function G0(){if(xn===1){xn=0;var t=Va,n=us,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Dt;Dt|=4;try{M0(n,t);var f=Wf,v=Rp(t.containerInfo),R=f.focusedElem,z=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Ap(R.ownerDocument.documentElement,R)){if(z!==null&&mu(R)){var te=z.start,me=z.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var Me=R.ownerDocument||document,oe=Me&&Me.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),We=R.textContent.length,tt=Math.min(z.start,We),Vt=z.end===void 0?tt:Math.min(z.end,We);!ce.extend&&tt>Vt&&(v=Vt,Vt=tt,tt=v);var K=Tp(R,tt),V=Tp(R,Vt);if(K&&V&&(ce.rangeCount!==1||ce.anchorNode!==K.node||ce.anchorOffset!==K.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var ee=Me.createRange();ee.setStart(K.node,K.offset),ce.removeAllRanges(),tt>Vt?(ce.addRange(ee),ce.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ce.addRange(ee))}}}}for(Me=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Me.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}lc=!!kf,Wf=kf=null}finally{Dt=u,B.p=o,P.T=a}}t.current=n,xn=2}}function V0(){if(xn===2){xn=0;var t=Va,n=us,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Dt;Dt|=4;try{g0(t,n.alternate,n)}finally{Dt=u,B.p=o,P.T=a}}xn=3}}function X0(){if(xn===4||xn===3){xn=0,q();var t=Va,n=us,a=ha,o=w0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,us=Va=null,k0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Ys(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{P.T=n,B.p=u}}(ha&3)!==0&&Ql(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Uf?Ao++:(Ao=0,Uf=t):Ao=0,Ro(0)}}function k0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function Ql(){return G0(),V0(),X0(),W0()}function W0(){if(xn!==5)return!1;var t=Va,n=wf;wf=0;var a=Ys(ha),o=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=Df,Df=null;var f=Va,v=ha;if(xn=0,us=Va=null,ha=0,(Dt&6)!==0)throw Error(r(331));var R=Dt;if(Dt|=4,A0(f.current),E0(f,f.current,v,a),Dt=R,Ro(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{B.p=u,P.T=o,k0(t,n)}}function q0(t,n,a){n=hi(a,n),n=cf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Ve(t,2),zi(t))}function It(t,n,a){if(t.tag===3)q0(t,t,a);else for(;n!==null;){if(n.tag===3){q0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=hi(a,t),a=Ym(2),o=Pa(n,a,2),o!==null&&(Zm(a,o,n,t),Ve(o,2),zi(o));break}}n=n.return}}function Of(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),t=$x.bind(null,t,n,a),n.then(t,t))}function $x(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(gt&a)===a&&(on===4||on===3&&(gt&62914560)===gt&&300>Bt()-kl?(Dt&2)===0&&fs(t,0):Rf|=a,cs===gt&&(cs=0)),zi(t)}function Y0(t,n){n===0&&(n=ye()),t=pr(t,n),t!==null&&(Ve(t,n),zi(t))}function e1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Y0(t,a)}function t1(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Y0(t,a)}function n1(t,n){return ln(t,n)}var Jl=null,ds=null,Pf=!1,jl=!1,Ff=!1,ka=0;function zi(t){t!==ds&&t.next===null&&(ds===null?Jl=ds=t:ds=ds.next=t),jl=!0,Pf||(Pf=!0,a1())}function Ro(t,n){if(!Ff&&jl){Ff=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Be(42|t)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,J0(o,f))}else f=gt,f=ve(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||we(o,f)||(a=!0,J0(o,f));o=o.next}while(a);Ff=!1}}function i1(){Z0()}function Z0(){jl=Pf=!1;var t=0;ka!==0&&p1()&&(t=ka);for(var n=Bt(),a=null,o=Jl;o!==null;){var u=o.next,f=K0(o,n);f===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(ds=a)):(a=o,(t!==0||(f&3)!==0)&&(jl=!0)),o=u}xn!==0&&xn!==5||Ro(t),ka!==0&&(ka=0)}function K0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Be(f),R=1<<v,z=u[v];z===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ze(R,n)):z<=n&&(t.expiredLanes|=R),f&=~R}if(n=kt,a=gt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Wt(o),Ys(a)){case 2:case 8:a=M;break;case 32:a=Q;break;case 268435456:a=he;break;default:a=Q}return o=Q0.bind(null,t),a=ln(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Wt(o),t.callbackPriority=2,t.callbackNode=null,2}function Q0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var o=gt;return o=ve(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(U0(t,o,n),K0(t,Bt()),t.callbackNode!=null&&t.callbackNode===a?Q0.bind(null,t):null)}function J0(t,n){if(Ql())return null;U0(t,n,!0)}function a1(){g1(function(){(Dt&6)!==0?ln(D,i1):Z0()})}function If(){if(ka===0){var t=jr;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),ka=t}return ka}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ur(""+t)}function $0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function r1(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=j0((u[bn]||null).action),v=o.submitter;v&&(n=(n=v[bn]||null)?j0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var z=v?$0(u,v):new FormData(u);nf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(R.preventDefault(),z=v?$0(u,v):new FormData(u),nf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var zf=0;zf<xu.length;zf++){var Bf=xu[zf],s1=Bf.toLowerCase(),o1=Bf[0].toUpperCase()+Bf.slice(1);bi(s1,"on"+o1)}bi(Dp,"onAnimationEnd"),bi(Up,"onAnimationIteration"),bi(Lp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Ex,"onTransitionRun"),bi(bx,"onTransitionStart"),bi(Tx,"onTransitionCancel"),bi(Np,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],z=R.instance,te=R.currentTarget;if(R=R.listener,z!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){dl(me)}u.currentTarget=null,f=z}else for(v=0;v<o.length;v++){if(R=o[v],z=R.instance,te=R.currentTarget,R=R.listener,z!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){dl(me)}u.currentTarget=null,f=z}}}}function mt(t,n){var a=n[or];a===void 0&&(a=n[or]=new Set);var o=t+"__bubble";a.has(o)||(tg(n,t,2,!1),a.add(o))}function Hf(t,n,a){var o=0;n&&(o|=4),tg(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[$l]){t[$l]=!0,sl.forEach(function(a){a!=="selectionchange"&&(l1.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Hf("selectionchange",!1,n))}}function tg(t,n,a,o){switch(Dg(n)){case 2:var u=F1;break;case 8:u=I1;break;default:u=nh}a=u.bind(null,n,a,t),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ki(R),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=f=v;continue e}R=R.parentNode}}o=o.return}sp(function(){var te=f,me=au(a),Me=[];e:{var oe=Op.get(t);if(oe!==void 0){var ce=ul,We=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ce=tx;break;case"focusin":We="focus",ce=uu;break;case"focusout":We="blur",ce=uu;break;case"beforeblur":case"afterblur":ce=uu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ax;break;case Dp:case Up:case Lp:ce=qv;break;case Np:ce=sx;break;case"scroll":case"scrollend":ce=Gv;break;case"wheel":ce=lx;break;case"copy":case"cut":case"paste":ce=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=fp;break;case"toggle":case"beforetoggle":ce=ux}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var V=te,ee;V!==null;){var Se=V;if(ee=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ee===null||K===null||(Se=Ks(V,K),Se!=null&&tt.push(wo(V,Se,ee))),Vt)break;V=V.return}0<tt.length&&(oe=new ce(oe,We,null,a,me),Me.push({event:oe,listeners:tt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==iu&&(We=a.relatedTarget||a.fromElement)&&(Ki(We)||We[Vn]))break e;if((ce||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(We=a.relatedTarget||a.toElement,ce=te,We=We?Ki(We):null,We!==null&&(Vt=c(We),tt=We.tag,We!==Vt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(ce=null,We=te),ce!==We)){if(tt=cp,Se="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=fp,Se="onPointerLeave",K="onPointerEnter",V="pointer"),Vt=ce==null?oe:cr(ce),ee=We==null?oe:cr(We),oe=new tt(Se,V+"leave",ce,a,me),oe.target=Vt,oe.relatedTarget=ee,Se=null,Ki(me)===te&&(tt=new tt(K,V+"enter",We,a,me),tt.target=ee,tt.relatedTarget=Vt,Se=tt),Vt=Se,ce&&We)t:{for(tt=c1,K=ce,V=We,ee=0,Se=K;Se;Se=tt(Se))ee++;Se=0;for(var et=V;et;et=tt(et))Se++;for(;0<ee-Se;)K=tt(K),ee--;for(;0<Se-ee;)V=tt(V),Se--;for(;ee--;){if(K===V||V!==null&&K===V.alternate){tt=K;break t}K=tt(K),V=tt(V)}tt=null}else tt=null;ce!==null&&ng(Me,oe,ce,tt,!1),We!==null&&Vt!==null&&ng(Me,Vt,We,tt,!0)}}e:{if(oe=te?cr(te):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var Rt=xp;else if(_p(oe))if(Sp)Rt=Sx;else{Rt=vx;var Ze=_x}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?te&&Ut(te.elementType)&&(Rt=xp):Rt=xx;if(Rt&&(Rt=Rt(t,te))){vp(Me,Rt,a,me);break e}Ze&&Ze(t,oe,te),t==="focusout"&&te&&oe.type==="number"&&te.memoizedProps.value!=null&&dt(oe,"number",oe.value)}switch(Ze=te?cr(te):window,t){case"focusin":(_p(Ze)||Ze.contentEditable==="true")&&(kr=Ze,gu=te,io=null);break;case"focusout":io=gu=kr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Cp(Me,a,me);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Cp(Me,a,me)}var ct;if(hu)e:{switch(t){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Xr?mp(t,a)&&(_t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(hp&&a.locale!=="ko"&&(Xr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Xr&&(ct=op()):(Ca=me,ou="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),Ze=ec(te,_t),0<Ze.length&&(_t=new up(_t,t,null,a,me),Me.push({event:_t,listeners:Ze}),ct?_t.data=ct:(ct=gp(a),ct!==null&&(_t.data=ct)))),(ct=hx?dx(t,a):px(t,a))&&(_t=ec(te,"onBeforeInput"),0<_t.length&&(Ze=new up("onBeforeInput","beforeinput",null,a,me),Me.push({event:Ze,listeners:_t}),Ze.data=ct)),r1(Me,t,te,a,me)}eg(Me,n)})}function wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ks(t,a),u!=null&&o.unshift(wo(t,u,f)),u=Ks(t,n),u!=null&&o.push(wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function c1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ng(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,z=R.alternate,te=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||te===null||(z=te,u?(te=Ks(a,f),te!=null&&v.unshift(wo(a,te,z))):u||(te=Ks(a,f),te!=null&&v.push(wo(a,te,z)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var u1=/\r\n?/g,f1=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(u1,`
`).replace(f1,"")}function ag(t,n){return n=ig(n),ig(t)===n}function Gt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(t,""+o);break;case"className":ke(t,"class",o);break;case"tabIndex":ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ur(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(t,n,"name",u.name,u,null),Gt(t,n,"formEncType",u.formEncType,u,null),Gt(t,n,"formMethod",u.formMethod,u,null),Gt(t,n,"formTarget",u.formTarget,u,null)):(Gt(t,n,"encType",u.encType,u,null),Gt(t,n,"method",u.method,u,null),Gt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ur(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ur(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,Le(t,a,o))}}function Xf(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?$n(t,o):(typeof o=="number"||typeof o=="bigint")&&$n(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,f,v,a,null)}}u&&Gt(t,n,"srcSet",a.srcSet,a,null),o&&Gt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var R=f=v=u=null,z=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":v=me;break;case"checked":z=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Gt(t,n,o,me,a,null)}}Un(t,f,R,z,te,v,u,!1);return;case"select":mt("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Gt(t,n,u,R,a,null)}n=f,a=v,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Gt(t,n,v,R,a,null)}yi(t,o,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,z,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)mt(Co[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(t,n,te,o,a,null)}return;default:if(Ut(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Xf(t,n,me,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Gt(t,n,R,o,a,null))}function h1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,z=null,te=null,me=null;for(ce in a){var Me=a[ce];if(a.hasOwnProperty(ce)&&Me!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=Me;default:o.hasOwnProperty(ce)||Gt(t,n,ce,null,o,Me)}}for(var oe in o){var ce=o[oe];if(Me=a[oe],o.hasOwnProperty(oe)&&(ce!=null||Me!=null))switch(oe){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":v=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==Me&&Gt(t,n,oe,ce,o,Me)}}He(t,v,R,z,te,me,f,u);return;case"select":ce=v=R=oe=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ce=z;default:o.hasOwnProperty(f)||Gt(t,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==z&&Gt(t,n,u,f,o,z)}n=R,a=v,o=ce,oe!=null?vn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Gt(t,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Gt(t,n,v,u,o,f)}jn(t,oe,ce);return;case"option":for(var We in a)if(oe=a[We],a.hasOwnProperty(We)&&oe!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Gt(t,n,We,null,o,oe)}for(z in o)if(oe=o[z],ce=a[z],o.hasOwnProperty(z)&&oe!==ce&&(oe!=null||ce!=null))switch(z){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Gt(t,n,z,oe,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)oe=a[tt],a.hasOwnProperty(tt)&&oe!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,oe);for(te in o)if(oe=o[te],ce=a[te],o.hasOwnProperty(te)&&oe!==ce&&(oe!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Gt(t,n,te,oe,o,ce)}return;default:if(Ut(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&Xf(t,n,Vt,void 0,o,oe);for(me in o)oe=o[me],ce=a[me],!o.hasOwnProperty(me)||oe===ce||oe===void 0&&ce===void 0||Xf(t,n,me,oe,o,ce);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&Gt(t,n,K,null,o,oe);for(Me in o)oe=o[Me],ce=a[Me],!o.hasOwnProperty(Me)||oe===ce||oe==null&&ce==null||Gt(t,n,Me,oe,o,ce)}function rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function d1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&rg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],te=z.startTime;if(te>R)break;var me=z.transferSize,Me=z.initiatorType;me&&rg(Me)&&(z=z.responseEnd,v+=me*(z<R?1:(R-te)/(z-te)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kf=null,Wf=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function p1(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var lg=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(t){return cg.resolve(null).then(t).catch(_1)}:lg;function _1(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function ug(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);_s(n)}function fg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),Ta(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function v1(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function x1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function S1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function dg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function mg(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ta(t)}var vi=new Map,gg=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=B.d;B.d={f:M1,r:y1,D:E1,C:b1,L:T1,m:A1,X:C1,S:R1,M:w1};function M1(){var t=da.f(),n=Yl();return t||n}function y1(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):da.r(t)}var ps=typeof document>"u"?null:document;function _g(t,n,a){var o=ps;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),gg.has(u)||(gg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),hn(n),o.head.appendChild(n)))}}function E1(t){da.D(t),_g("dns-prefetch",t,null)}function b1(t,n){da.C(t,n),_g("preconnect",t,n)}function T1(t,n,a){da.L(t,n,a);var o=ps;if(o&&t&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(t)+'"]';var f=u;switch(n){case"style":f=ms(t);break;case"script":f=gs(t)}vi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(f))||n==="script"&&o.querySelector(Lo(f))||(n=o.createElement("link"),Cn(n,"link",t),hn(n),o.head.appendChild(n)))}}function A1(t,n){da.m(t,n);var a=ps;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gs(t)}if(!vi.has(f)&&(t=_({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}o=a.createElement("link"),Cn(o,"link",t),hn(o),a.head.appendChild(o)}}}function R1(t,n,a){da.S(t,n,a);var o=ps;if(o&&t){var u=Aa(o).hoistableStyles,f=ms(t);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Uo(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&jf(t,a);var z=v=o.createElement("link");hn(z),Cn(z,"link",t),z._p=new Promise(function(te,me){z.onload=te,z.onerror=me}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function C1(t,n){da.X(t,n);var a=ps;if(a&&t){var o=Aa(a).hoistableScripts,u=gs(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=_({src:t,async:!0},n),(n=vi.get(u))&&$f(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function w1(t,n){da.M(t,n);var a=ps;if(a&&t){var o=Aa(a).hoistableScripts,u=gs(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&$f(t,n),f=a.createElement("script"),hn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vg(t,n,a,o){var u=(u=W.current)?nc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ms(a.href),a=Aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ms(a.href);var f=Aa(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Uo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||D1(u,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(a),a=Aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ms(t){return'href="'+Ot(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function xg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function D1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),hn(n),t.head.appendChild(n))}function gs(t){return'[src="'+Ot(t)+'"]'}function Lo(t){return"script[async]"+t}function Sg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Cn(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=ms(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=xg(a),(u=vi.get(u))&&jf(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var v=f;return v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Cn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,t),n.instance=f;case"script":return f=gs(a.src),(u=t.querySelector(Lo(f)))?(n.instance=u,hn(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),$f(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function Mg(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function yg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function U1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function L1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ms(o.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=xg(o),(u=vi.get(u))&&jf(o,u),f=f.createElement("link"),hn(f);var v=f;v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var eh=0;function N1(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*d1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,n.forEach(O1,t),sc=null,rc.call(t))}function O1(t,n){if(!(n.state.loading&4)){var a=sc.get(t);if(a)var o=a.get(null);else{a=new Map,sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function P1(t,n,a,o,u,f,v,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function bg(t,n,a,o,u,f,v,R,z,te,me,Me){return t=new P1(t,n,a,v,z,te,me,Me,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),t}function Tg(t){return t?(t=Yr,t):Yr}function Ag(t,n,a,o,u,f){u=Tg(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(t,o,n),a!==null&&(Zn(a,t,n),uo(a,t,n))}function Rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function th(t,n){Rg(t,n),(t=t.alternate)&&Rg(t,n)}function Cg(t){if(t.tag===13||t.tag===31){var n=pr(t,67108864);n!==null&&Zn(n,t,67108864),th(t,67108864)}}function wg(t){if(t.tag===13||t.tag===31){var n=si();n=qs(n);var a=pr(t,n);a!==null&&Zn(a,t,n),th(t,n)}}var lc=!0;function F1(t,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=2,nh(t,n,a,o)}finally{B.p=f,P.T=u}}function I1(t,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=8,nh(t,n,a,o)}finally{B.p=f,P.T=u}}function nh(t,n,a,o){if(lc){var u=ih(o);if(u===null)Vf(t,n,o,cc,a),Ug(t,o);else if(B1(u,t,n,a,o))o.stopPropagation();else if(Ug(t,o),n&4&&-1<z1.indexOf(t)){for(;u!==null;){var f=Qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Re(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var z=1<<31-Be(v);R.entanglements[1]|=z,v&=~z}zi(f),(Dt&6)===0&&(Wl=Bt()+500,Ro(0))}}break;case 31:case 13:R=pr(f,2),R!==null&&Zn(R,f,2),Yl(),th(f,2)}if(f=ih(o),f===null&&Vf(t,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Vf(t,n,o,null,a)}}function ih(t){return t=au(t),ah(t)}var cc=null;function ah(t){if(cc=null,t=Ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function Dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case D:return 2;case M:return 8;case Q:case re:return 32;case he:return 268435456;default:return 32}default:return 32}}var rh=!1,qa=null,Ya=null,Za=null,Oo=new Map,Po=new Map,Ka=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Fo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qi(n),n!==null&&Cg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function B1(t,n,a,o,u){switch(n){case"focusin":return qa=Fo(qa,t,n,a,o,u),!0;case"dragenter":return Ya=Fo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=Fo(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,Fo(Oo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,Fo(Po.get(f)||null,t,n,a,o,u)),!0}return!1}function Lg(t){var n=Ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hr(t.priority,function(){wg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Hr(t.priority,function(){wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ih(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);iu=o,a.target.dispatchEvent(o),iu=null}else return n=Qi(a),n!==null&&Cg(n),t.blockedOn=a,!1;n.shift()}return!0}function Ng(t,n,a){uc(t)&&a.delete(n)}function H1(){rh=!1,qa!==null&&uc(qa)&&(qa=null),Ya!==null&&uc(Ya)&&(Ya=null),Za!==null&&uc(Za)&&(Za=null),Oo.forEach(Ng),Po.forEach(Ng)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,rh||(rh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,H1)))}var hc=null;function Og(t){hc!==t&&(hc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ah(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _s(t){function n(z){return fc(z,t)}qa!==null&&fc(qa,t),Ya!==null&&fc(Ya,t),Za!==null&&fc(Za,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Lg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[bn]||null;if(typeof f=="function")v||Og(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[bn]||null)R=v.formAction;else if(ah(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Og(a)}}}function Pg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(t){this._internalRoot=t}dc.prototype.render=sh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=si();Ag(a,o,t,n,null,null)},dc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ag(t.current,2,null,t,null,null),Yl(),n[Vn]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Lg(t)}};var Fg=e.version;if(Fg!=="19.2.0")throw Error(r(527,Fg,"19.2.0"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var G1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ue=pc.inject(G1),de=pc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Xm,f=km,v=Wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=bg(t,1,!1,null,null,a,o,null,u,f,v,Pg),t[Vn]=n.current,Gf(t),new sh(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Xm,v=km,R=Wm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=bg(t,1,!0,n,a??null,o,u,z,f,v,R,Pg),n.context=Tg(null),a=n.current,o=si(),o=qs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Ve(n,a),zi(n),t[Vn]=n.current,Gf(t),new dc(n)},zo.version="19.2.0",zo}var qg;function $1(){if(qg)return ch.exports;qg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ch.exports=j1(),ch.exports}var eS=$1();const tS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M200,144l-72,72L56,144Z",opacity:"0.2"}),le.createElement("path",{d:"M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z"}))]]),nS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),le.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),iS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),le.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z"}))]]),aS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),le.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),rS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),le.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),sS=new Map([["bold",le.createElement(le.Fragment,null,le.createElement("path",{d:"M212,52a32,32,0,1,0,32,32A32,32,0,0,0,212,52Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,212,92ZM160,56A52,52,0,0,0,56,56v94.69a64,64,0,1,0,104,0ZM108,228a40,40,0,0,1-30.91-65.39A12,12,0,0,0,80,154.78V56a28,28,0,0,1,56,0v98.77a12,12,0,0,0,2.77,7.68A40,40,0,0,1,108,228Zm24-40a24,24,0,1,1-36-20.78V92a12,12,0,0,1,24,0v75.22A24,24,0,0,1,132,188Z"}))],["duotone",le.createElement(le.Fragment,null,le.createElement("path",{d:"M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z",opacity:"0.2"}),le.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"}))],["fill",le.createElement(le.Fragment,null,le.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,104H104V40a16,16,0,0,1,32,0Z"}))],["light",le.createElement(le.Fragment,null,le.createElement("path",{d:"M212,58a26,26,0,1,0,26,26A26,26,0,0,0,212,58Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,212,98Zm-86,56.6V88a6,6,0,0,0-12,0v66.6a30,30,0,1,0,12,0ZM120,202a18,18,0,1,1,18-18A18,18,0,0,1,120,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,94,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,120,234Z"}))],["regular",le.createElement(le.Fragment,null,le.createElement("path",{d:"M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"}))],["thin",le.createElement(le.Fragment,null,le.createElement("path",{d:"M212,60a24,24,0,1,0,24,24A24,24,0,0,0,212,60Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,212,100Zm-88,56.29V88a4,4,0,0,0-8,0v68.29a28,28,0,1,0,8,0ZM120,204a20,20,0,1,1,20-20A20,20,0,0,1,120,204Zm36-68V48a36,36,0,0,0-72,0v88a60,60,0,1,0,72,0ZM120,236a52,52,0,0,1-29.71-94.68A4,4,0,0,0,92,138V48a28,28,0,0,1,56,0v90a4,4,0,0,0,1.71,3.28A52,52,0,0,1,120,236Z"}))]]),oS=le.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),zr=le.forwardRef((s,e)=>{const{alt:i,color:r,size:l,weight:c,mirrored:h,children:p,weights:m,...d}=s,{color:x="currentColor",size:_,weight:g="regular",mirrored:y=!1,...T}=le.useContext(oS);return le.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:l??_,height:l??_,fill:r??x,viewBox:"0 0 256 256",transform:h||y?"scale(-1, 1)":void 0,...T,...d},!!i&&le.createElement("title",null,i),p,m.get(c??g))});zr.displayName="IconBase";const j_=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:tS}));j_.displayName="ArrowDownIcon";const lS=j_,$_=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:nS}));$_.displayName="ArrowRightIcon";const Yg=$_,ev=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:iS}));ev.displayName="CircleIcon";const cS=ev,tv=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:aS}));tv.displayName="ClockIcon";const uS=tv,nv=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:rS}));nv.displayName="PlanetIcon";const fS=nv,iv=le.forwardRef((s,e)=>le.createElement(zr,{ref:e,...s,weights:sS}));iv.displayName="ThermometerIcon";const hS=iv;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="185",dS=0,Zg=1,pS=2,Hc=1,mS=2,Wo=3,rr=0,Hn=1,Vi=2,Sa=0,Ps=1,qh=2,Kg=3,Qg=4,gS=5,Lr=100,_S=101,vS=102,xS=103,SS=104,MS=200,yS=201,ES=202,bS=203,Yh=204,Zh=205,TS=206,AS=207,RS=208,CS=209,wS=210,DS=211,US=212,LS=213,NS=214,Kh=0,Qh=1,Jh=2,zs=3,jh=4,$h=5,ed=6,td=7,av=0,OS=1,PS=2,Wi=0,rv=1,sv=2,ov=3,lv=4,cv=5,uv=6,fv=7,hv=300,Fr=301,Bs=302,dh=303,ph=304,jc=306,nd=1e3,xa=1001,id=1002,wn=1003,FS=1004,mc=1005,Pn=1006,mh=1007,Or=1008,ci=1009,dv=1010,pv=1011,Jo=1012,Hd=1013,Yi=1014,Xi=1015,ya=1016,Gd=1017,Vd=1018,jo=1020,mv=35902,gv=35899,_v=1021,vv=1022,Ui=1023,Ea=1026,Pr=1027,xv=1028,Xd=1029,Ir=1030,kd=1031,Wd=1033,Gc=33776,Vc=33777,Xc=33778,kc=33779,ad=35840,rd=35841,sd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37488,hd=37489,qc=37490,dd=37491,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,Sd=37814,Md=37815,yd=37816,Ed=37817,bd=37818,Td=37819,Ad=37820,Rd=37821,Cd=36492,wd=36494,Dd=36495,Ud=36283,Ld=36284,Yc=36285,Nd=36286,IS=3200,Od=0,zS=1,ir="",Kn="srgb",Zc="srgb-linear",Kc="linear",zt="srgb",vs=7680,Jg=519,BS=512,HS=513,GS=514,qd=515,VS=516,XS=517,Yd=518,kS=519,jg=35044,$g="300 es",ki=2e3,$o=2001;function WS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function el(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qS(){const s=el("canvas");return s.style.display="block",s}const e_={};function t_(...s){const e="THREE."+s.shift();console.log(e,...s)}function Sv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Sv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=Sv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Fs(...s){const e=s.join(" ");e in e_||(e_[e]=!0,it(...s))}function YS(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const ZS={[Kh]:Qh,[Jh]:ed,[jh]:td,[zs]:$h,[Qh]:Kh,[ed]:Jh,[td]:jh,[$h]:zs};class Br{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n_=1234567;const Zo=Math.PI/180,tl=180/Math.PI;function Vs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function vt(s,e,i){return Math.max(e,Math.min(i,s))}function Zd(s,e){return(s%e+e)%e}function KS(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function QS(s,e,i){return s!==e?(i-s)/(e-s):0}function Ko(s,e,i){return(1-i)*s+i*e}function JS(s,e,i,r){return Ko(s,e,1-Math.exp(-i*r))}function jS(s,e=1){return e-Math.abs(Zd(s,e*2)-e)}function $S(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function eM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function tM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nM(s,e){return s+Math.random()*(e-s)}function iM(s){return s*(.5-Math.random())}function aM(s){s!==void 0&&(n_=s);let e=n_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rM(s){return s*Zo}function sM(s){return s*tl}function oM(s){return(s&s-1)===0&&s!==0}function lM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uM(s,e,i,r,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+r)/2),x=h((e+r)/2),_=c((e-r)/2),g=h((e-r)/2),y=c((r-e)/2),T=h((r-e)/2);switch(l){case"XYX":s.set(p*x,m*_,m*g,p*d);break;case"YZY":s.set(m*g,p*x,m*_,p*d);break;case"ZXZ":s.set(m*_,m*g,p*x,p*d);break;case"XZX":s.set(p*x,m*T,m*y,p*d);break;case"YXY":s.set(m*y,p*x,m*T,p*d);break;case"ZYZ":s.set(m*T,m*y,p*x,p*d);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ns(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fM={DEG2RAD:Zo,RAD2DEG:tl,generateUUID:Vs,clamp:vt,euclideanModulo:Zd,mapLinear:KS,inverseLerp:QS,lerp:Ko,damp:JS,pingpong:jS,smoothstep:$S,smootherstep:eM,randInt:tM,randFloat:nM,randFloatSpread:iM,seededRandom:aM,degToRad:rM,radToDeg:sM,isPowerOfTwo:oM,ceilPowerOfTwo:lM,floorPowerOfTwo:cM,setQuaternionFromProperEuler:uM,normalize:zn,denormalize:Ns},ep=class ep{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let Et=ep;class Xs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,p){let m=r[l+0],d=r[l+1],x=r[l+2],_=r[l+3],g=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(_!==w||m!==g||d!==y||x!==T){let E=m*g+d*y+x*T+_*w;E<0&&(g=-g,y=-y,T=-T,w=-w,E=-E);let S=1-p;if(E<.9995){const I=Math.acos(E),H=Math.sin(I);S=Math.sin(S*I)/H,p=Math.sin(p*I)/H,m=m*S+g*p,d=d*S+y*p,x=x*S+T*p,_=_*S+w*p}else{m=m*S+g*p,d=d*S+y*p,x=x*S+T*p,_=_*S+w*p;const I=1/Math.sqrt(m*m+d*d+x*x+_*_);m*=I,d*=I,x*=I,_*=I}}e[i]=m,e[i+1]=d,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,h){const p=r[l],m=r[l+1],d=r[l+2],x=r[l+3],_=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return e[i]=p*T+x*_+m*y-d*g,e[i+1]=m*T+x*g+d*_-p*y,e[i+2]=d*T+x*y+p*g-m*_,e[i+3]=x*T-p*_-m*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),x=p(l/2),_=p(c/2),g=m(r/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*x*_+d*y*T,this._y=d*y*_-g*x*T,this._z=d*x*T+g*y*_,this._w=d*x*_-g*y*T;break;case"YXZ":this._x=g*x*_+d*y*T,this._y=d*y*_-g*x*T,this._z=d*x*T-g*y*_,this._w=d*x*_+g*y*T;break;case"ZXY":this._x=g*x*_-d*y*T,this._y=d*y*_+g*x*T,this._z=d*x*T+g*y*_,this._w=d*x*_-g*y*T;break;case"ZYX":this._x=g*x*_-d*y*T,this._y=d*y*_+g*x*T,this._z=d*x*T-g*y*_,this._w=d*x*_+g*y*T;break;case"YZX":this._x=g*x*_+d*y*T,this._y=d*y*_+g*x*T,this._z=d*x*T-g*y*_,this._w=d*x*_-g*y*T;break;case"XZY":this._x=g*x*_-d*y*T,this._y=d*y*_-g*x*T,this._z=d*x*T+g*y*_,this._w=d*x*_+g*y*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],x=i[6],_=i[10],g=r+p+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(r>p&&r>_){const y=2*Math.sqrt(1+r-p-_);this._w=(x-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>_){const y=2*Math.sqrt(1+p-r-_);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+_-r-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,x=i._w;return this._x=r*x+h*p+l*d-c*m,this._y=l*x+h*m+c*p-r*d,this._z=c*x+h*d+r*m-l*p,this._w=h*x-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),x=Math.sin(d);m=Math.sin(m*d)/x,i=Math.sin(i*d)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(i_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),x=2*(p*i-c*l),_=2*(c*r-h*i);return this.x=i+m*d+h*_-p*x,this.y=r+m*x+p*d-c*_,this.z=l+m*_+c*x-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let ae=tp;const gh=new ae,i_=new Xs,np=class np{constructor(e,i,r,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d)}set(e,i,r,l,c,h,p,m,d){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],x=r[4],_=r[7],g=r[2],y=r[5],T=r[8],w=l[0],E=l[3],S=l[6],I=l[1],H=l[4],C=l[7],F=l[2],L=l[5],O=l[8];return c[0]=h*w+p*I+m*F,c[3]=h*E+p*H+m*L,c[6]=h*S+p*C+m*O,c[1]=d*w+x*I+_*F,c[4]=d*E+x*H+_*L,c[7]=d*S+x*C+_*O,c[2]=g*w+y*I+T*F,c[5]=g*E+y*H+T*L,c[8]=g*S+y*C+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8];return i*h*x-i*p*d-r*c*x+r*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8],_=x*h-p*d,g=p*m-x*c,y=d*c-h*m,T=i*_+r*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(l*d-x*r)*w,e[2]=(p*r-l*h)*w,e[3]=g*w,e[4]=(x*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=y*w,e[7]=(r*m-d*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(e,i)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let st=np;const _h=new st,a_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hM(){const s={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===zt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===zt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zc]:{primaries:e,whitePoint:r,transfer:Kc,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:a_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const yt=hM();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class dM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xs===void 0&&(xs=el("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=el("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pM=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let mM=0;const xh=new ae;class Fn extends Br{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=xa,l=xa,c=Pn,h=Or,p=Ui,m=ci,d=Fn.DEFAULT_ANISOTROPY,x=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Vs(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=hv;Fn.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,d=m[0],x=m[4],_=m[8],g=m[1],y=m[5],T=m[9],w=m[2],E=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(_-w)<.01&&Math.abs(T-E)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+w)<.1&&Math.abs(T+E)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,C=(y+1)/2,F=(S+1)/2,L=(x+g)/4,O=(_+w)/4,b=(T+E)/4;return H>C&&H>F?H<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(H),l=L/r,c=O/r):C>F?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=L/l,c=b/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=O/c,l=b/c),this.set(r,l,c,i),this}let I=Math.sqrt((E-T)*(E-T)+(_-w)*(_-w)+(g-x)*(g-x));return Math.abs(I)<.001&&(I=1),this.x=(E-T)/I,this.y=(_-w)/I,this.z=(g-x)/I,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=vt(this.x,e.x,i.x),this.y=vt(this.y,e.y,i.y),this.z=vt(this.z,e.z,i.z),this.w=vt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=vt(this.x,e,i),this.y=vt(this.y,e,i),this.z=vt(this.z,e,i),this.w=vt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let $t=ip;class gM extends Br{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new $t(0,0,e,i),this.scissorTest=!1,this.viewport=new $t(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Fn(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends gM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _M extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,i,r,l,c,h,p,m,d,x,_,g,y,T,w,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d,x,_,g,y,T,w,E)}set(e,i,r,l,c,h,p,m,d,x,_,g,y,T,w,E){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=x,S[10]=_,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ss.setFromMatrixColumn(e,0).length(),c=1/Ss.setFromMatrixColumn(e,1).length(),h=1/Ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=h*x,y=h*_,T=p*x,w=p*_;i[0]=m*x,i[4]=-m*_,i[8]=d,i[1]=y+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+y*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*x,y=m*_,T=d*x,w=d*_;i[0]=g+w*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*_,i[5]=h*x,i[9]=-p,i[2]=y*p-T,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*x,y=m*_,T=d*x,w=d*_;i[0]=g-w*p,i[4]=-h*_,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*x,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*x,y=h*_,T=p*x,w=p*_;i[0]=m*x,i[4]=T*d-y,i[8]=g*d+w,i[1]=m*_,i[5]=w*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*x,i[4]=w-g*_,i[8]=T*_+y,i[1]=_,i[5]=h*x,i[9]=-p*x,i[2]=-d*x,i[6]=y*_+T,i[10]=g-w*_}else if(e.order==="XZY"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*x,i[4]=-_,i[8]=d*x,i[1]=g*_+w,i[5]=h*x,i[9]=y*_-T,i[2]=T*_-y,i[6]=p*x,i[10]=w*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,xM)}lookAt(e,i,r){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ja.crossVectors(r,oi),Ja.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ja.crossVectors(r,oi)),Ja.normalize(),gc.crossVectors(oi,Ja),l[0]=Ja.x,l[4]=gc.x,l[8]=oi.x,l[1]=Ja.y,l[5]=gc.y,l[9]=oi.y,l[2]=Ja.z,l[6]=gc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],x=r[1],_=r[5],g=r[9],y=r[13],T=r[2],w=r[6],E=r[10],S=r[14],I=r[3],H=r[7],C=r[11],F=r[15],L=l[0],O=l[4],b=l[8],N=l[12],Y=l[1],G=l[5],J=l[9],pe=l[13],xe=l[2],j=l[6],P=l[10],B=l[14],$=l[3],_e=l[7],be=l[11],U=l[15];return c[0]=h*L+p*Y+m*xe+d*$,c[4]=h*O+p*G+m*j+d*_e,c[8]=h*b+p*J+m*P+d*be,c[12]=h*N+p*pe+m*B+d*U,c[1]=x*L+_*Y+g*xe+y*$,c[5]=x*O+_*G+g*j+y*_e,c[9]=x*b+_*J+g*P+y*be,c[13]=x*N+_*pe+g*B+y*U,c[2]=T*L+w*Y+E*xe+S*$,c[6]=T*O+w*G+E*j+S*_e,c[10]=T*b+w*J+E*P+S*be,c[14]=T*N+w*pe+E*B+S*U,c[3]=I*L+H*Y+C*xe+F*$,c[7]=I*O+H*G+C*j+F*_e,c[11]=I*b+H*J+C*P+F*be,c[15]=I*N+H*pe+C*B+F*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],x=e[2],_=e[6],g=e[10],y=e[14],T=e[3],w=e[7],E=e[11],S=e[15],I=m*y-d*g,H=p*y-d*_,C=p*g-m*_,F=h*y-d*x,L=h*g-m*x,O=h*_-p*x;return i*(w*I-E*H+S*C)-r*(T*I-E*F+S*L)+l*(T*H-w*F+S*O)-c*(T*C-w*L+E*O)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],x=e[10];return i*(h*x-p*d)-r*(c*x-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],x=e[8],_=e[9],g=e[10],y=e[11],T=e[12],w=e[13],E=e[14],S=e[15],I=i*p-r*h,H=i*m-l*h,C=i*d-c*h,F=r*m-l*p,L=r*d-c*p,O=l*d-c*m,b=x*w-_*T,N=x*E-g*T,Y=x*S-y*T,G=_*E-g*w,J=_*S-y*w,pe=g*S-y*E,xe=I*pe-H*J+C*G+F*Y-L*N+O*b;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/xe;return e[0]=(p*pe-m*J+d*G)*j,e[1]=(l*J-r*pe-c*G)*j,e[2]=(w*O-E*L+S*F)*j,e[3]=(g*L-_*O-y*F)*j,e[4]=(m*Y-h*pe-d*N)*j,e[5]=(i*pe-l*Y+c*N)*j,e[6]=(E*C-T*O-S*H)*j,e[7]=(x*O-g*C+y*H)*j,e[8]=(h*J-p*Y+d*b)*j,e[9]=(r*Y-i*J-c*b)*j,e[10]=(T*L-w*C+S*I)*j,e[11]=(_*C-x*L-y*I)*j,e[12]=(p*N-h*G-m*b)*j,e[13]=(i*G-r*N+l*b)*j,e[14]=(w*H-T*F-E*I)*j,e[15]=(x*F-_*H+g*I)*j,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,p=e.y,m=e.z,d=c*h,x=c*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,x*p+r,x*m-l*h,0,d*m-l*p,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,x=h+h,_=p+p,g=c*d,y=c*x,T=c*_,w=h*x,E=h*_,S=p*_,I=m*d,H=m*x,C=m*_,F=r.x,L=r.y,O=r.z;return l[0]=(1-(w+S))*F,l[1]=(y+C)*F,l[2]=(T-H)*F,l[3]=0,l[4]=(y-C)*L,l[5]=(1-(g+S))*L,l[6]=(E+I)*L,l[7]=0,l[8]=(T+H)*O,l[9]=(E-I)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Ss.set(l[0],l[1],l[2]).length();const p=Ss.set(l[4],l[5],l[6]).length(),m=Ss.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ri.copy(this);const d=1/h,x=1/p,_=1/m;return Ri.elements[0]*=d,Ri.elements[1]*=d,Ri.elements[2]*=d,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,h,p=ki,m=!1){const d=this.elements,x=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),y=(r+l)/(r-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===ki)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===$o)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,c,h,p=ki,m=!1){const d=this.elements,x=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),y=-(r+l)/(r-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===ki)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===$o)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Jc.prototype.isMatrix4=!0;let en=Jc;const Ss=new ae,Ri=new en,vM=new ae(0,0,0),xM=new ae(1,1,1),Ja=new ae,gc=new ae,oi=new ae,s_=new en,o_=new Xs;class sr{constructor(e=0,i=0,r=0,l=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],x=l[9],_=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SM=0;const l_=new ae,Ms=new Xs,pa=new en,_c=new ae,Bo=new ae,MM=new ae,yM=new Xs,c_=new ae(1,0,0),u_=new ae(0,1,0),f_=new ae(0,0,1),h_={type:"added"},EM={type:"removed"},ys={type:"childadded",child:null},Sh={type:"childremoved",child:null};class Dn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ae,i=new sr,r=new Xs,l=new ae(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new st}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,i){return Ms.setFromAxisAngle(e,i),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(f_,e)}translateOnAxis(e,i){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(f_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_c.copy(e):_c.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Bo,_c,this.up):pa.lookAt(_c,Bo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ms.setFromRotationMatrix(pa),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h_),ys.child=e,this.dispatchEvent(ys),ys.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(EM),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h_),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,MM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,yM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,x=m.length;d<x;d++){const _=m[d];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),x=h(e.images),_=h(e.shapes),g=h(e.skeletons),y=h(e.animations),T=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(p){const m=[];for(const d in p){const x=p[d];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new ae(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const E=i.getJointPose(w,r),S=this._getHandJoint(d,w);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const x=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=x.position.distanceTo(_.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new qo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function yh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class bt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=yt.workingColorSpace){return this.r=e,this.g=i,this.b=r,yt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=yt.workingColorSpace){if(e=Zd(e,1),i=vt(i,0,1),r=vt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=yh(h,c,e+1/3),this.g=yh(h,c,e),this.b=yh(h,c,e-1/3)}return yt.colorSpaceToWorking(this,l),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return yt.workingToColorSpace(On.copy(this),e),Math.round(vt(On.r*255,0,255))*65536+Math.round(vt(On.g*255,0,255))*256+Math.round(vt(On.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,h=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const x=(p+h)/2;if(p===h)m=0,d=0;else{const _=h-p;switch(d=x<=.5?_/(h+p):_/(2-h-p),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=x,e}getRGB(e,i=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Kn){yt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(vc);const r=Ko(ja.h,vc.h,i),l=Ko(ja.s,vc.s,i),c=Ko(ja.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new bt;bt.NAMES=Ev;class TM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new ae,ma=new ae,Eh=new ae,ga=new ae,Es=new ae,bs=new ae,d_=new ae,bh=new ae,Th=new ae,Ah=new ae,Rh=new $t,Ch=new $t,wh=new $t;class Di{constructor(e=new ae,i=new ae,r=new ae){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),ma.subVectors(r,i),Eh.subVectors(e,i);const h=Ci.dot(Ci),p=Ci.dot(ma),m=Ci.dot(Eh),d=ma.dot(ma),x=ma.dot(Eh),_=h*d-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,y=(d*m-p*x)*g,T=(h*x-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,r,l,c,h,p,m){return this.getBarycoord(e,i,r,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(h,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Rh,c.x),h.addScaledVector(Ch,c.y),h.addScaledVector(wh,c.z),h}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),ma.subVectors(e,i),Ci.cross(ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ci.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,p;Es.subVectors(l,r),bs.subVectors(c,r),bh.subVectors(e,r);const m=Es.dot(bh),d=bs.dot(bh);if(m<=0&&d<=0)return i.copy(r);Th.subVectors(e,l);const x=Es.dot(Th),_=bs.dot(Th);if(x>=0&&_<=x)return i.copy(l);const g=m*_-x*d;if(g<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(Es,h);Ah.subVectors(e,c);const y=Es.dot(Ah),T=bs.dot(Ah);if(T>=0&&y<=T)return i.copy(c);const w=y*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(r).addScaledVector(bs,p);const E=x*T-y*_;if(E<=0&&_-x>=0&&y-T>=0)return d_.subVectors(c,l),p=(_-x)/(_-x+(y-T)),i.copy(l).addScaledVector(d_,p);const S=1/(E+w+g);return h=w*S,p=g*S,i.copy(r).addScaledVector(Es,h).addScaledVector(bs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Sc.subVectors(this.max,Ho),Ts.subVectors(e.a,Ho),As.subVectors(e.b,Ho),Rs.subVectors(e.c,Ho),$a.subVectors(As,Ts),er.subVectors(Rs,As),Rr.subVectors(Ts,Rs);let i=[0,-$a.z,$a.y,0,-er.z,er.y,0,-Rr.z,Rr.y,$a.z,0,-$a.x,er.z,0,-er.x,Rr.z,0,-Rr.x,-$a.y,$a.x,0,-er.y,er.x,0,-Rr.y,Rr.x,0];return!Dh(i,Ts,As,Rs,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,Ts,As,Rs,Sc))?!1:(Mc.crossVectors($a,er),i=[Mc.x,Mc.y,Mc.z],Dh(i,Ts,As,Rs,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],wi=new ae,xc=new nl,Ts=new ae,As=new ae,Rs=new ae,$a=new ae,er=new ae,Rr=new ae,Ho=new ae,Sc=new ae,Mc=new ae,Cr=new ae;function Dh(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Cr.fromArray(s,c);const p=l.x*Math.abs(Cr.x)+l.y*Math.abs(Cr.y)+l.z*Math.abs(Cr.z),m=e.dot(Cr),d=i.dot(Cr),x=r.dot(Cr);if(Math.max(-Math.max(m,d,x),Math.min(m,d,x))>p)return!1}return!0}const _n=new ae,yc=new Et;let AM=0;class Li extends Br{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=jg,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ns(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ns(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ns(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ns(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ns(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bv extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Tv extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Gn extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}const RM=new nl,Go=new ae,Uh=new ae;class $c{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):RM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Uh)),this.expandByPoint(Go.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let CM=0;const xi=new en,Lh=new Dn,Cs=new ae,li=new nl,Vo=new nl,En=new ae;class ui extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WS(e)?Tv:bv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Vo.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(li.min,Vo.min),li.expandByPoint(En),En.addVectors(li.max,Vo.max),li.expandByPoint(En)):(li.expandByPoint(Vo.min),li.expandByPoint(Vo.max))}li.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,x=p.count;d<x;d++)En.fromBufferAttribute(p,d),m&&(Cs.fromBufferAttribute(e,d),En.add(Cs)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new Li(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new ae,m[b]=new ae;const d=new ae,x=new ae,_=new ae,g=new Et,y=new Et,T=new Et,w=new ae,E=new ae;function S(b,N,Y){d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,N),_.fromBufferAttribute(r,Y),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,N),T.fromBufferAttribute(c,Y),x.sub(d),_.sub(d),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(_,-y.y).multiplyScalar(G),E.copy(_).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(G),p[b].add(w),p[N].add(w),p[Y].add(w),m[b].add(E),m[N].add(E),m[Y].add(E))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let b=0,N=I.length;b<N;++b){const Y=I[b],G=Y.start,J=Y.count;for(let pe=G,xe=G+J;pe<xe;pe+=3)S(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const H=new ae,C=new ae,F=new ae,L=new ae;function O(b){F.fromBufferAttribute(l,b),L.copy(F);const N=p[b];H.copy(N),H.sub(F.multiplyScalar(F.dot(N))).normalize(),C.crossVectors(L,N);const G=C.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,G)}for(let b=0,N=I.length;b<N;++b){const Y=I[b],G=Y.start,J=Y.count;for(let pe=G,xe=G+J;pe<xe;pe+=3)O(e.getX(pe+0)),O(e.getX(pe+1)),O(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const l=new ae,c=new ae,h=new ae,p=new ae,m=new ae,d=new ae,x=new ae,_=new ae;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),w=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,E),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,E),p.add(x),m.add(x),d.add(x),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(E,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),x.subVectors(h,c),_.subVectors(l,c),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const d=p.array,x=p.itemSize,_=p.normalized,g=new d.constructor(m.length*x);let y=0,T=0;for(let w=0,E=m.length;w<E;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*x;for(let S=0;S<x;S++)g[T++]=d[y++]}return new Li(g,x,_)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let x=0,_=d.length;x<_;x++){const g=d[x],y=e(g,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],x=[];for(let _=0,g=d.length;_<g;_++){const y=d[_];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const x=l[d];this.setAttribute(d,x.clone(i))}const c=e.morphAttributes;for(const d in c){const x=[],_=c[d];for(let g=0,y=_.length;g<y;g++)x.push(_[g].clone(i));this.morphAttributes[d]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,x=h.length;d<x;d++){const _=h[d];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wM=0;class ks extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Ps,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Zh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==Zh&&(r.blendDst=this.blendDst),this.blendEquation!==Lr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const va=new ae,Nh=new ae,Ec=new ae,tr=new ae,Oh=new ae,bc=new ae,Ph=new ae;class Av{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nh.copy(e).add(i).multiplyScalar(.5),Ec.copy(i).sub(e).normalize(),tr.copy(this.origin).sub(Nh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Ec),p=tr.dot(this.direction),m=-tr.dot(Ec),d=tr.lengthSq(),x=Math.abs(1-h*h);let _,g,y,T;if(x>0)if(_=h*m-p,g=h*p-m,T=c*x,_>=0)if(g>=-T)if(g<=T){const w=1/x;_*=w,g*=w,y=_*(_+h*g+2*p)+g*(h*_+g+2*m)+d}else g=c,_=Math.max(0,-(h*g+p)),y=-_*_+g*(g+2*m)+d;else g=-c,_=Math.max(0,-(h*g+p)),y=-_*_+g*(g+2*m)+d;else g<=-T?(_=Math.max(0,-(-h*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+d):g<=T?(_=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(_=Math.max(0,-(h*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+d);else g=h>0?-c:c,_=Math.max(0,-(h*g+p)),y=-_*_+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Nh).addScaledVector(Ec,g),y}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,p,m;const d=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),x>=0?(c=(e.min.y-g.y)*x,h=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,h=(e.min.y-g.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,l,c){Oh.subVectors(i,e),bc.subVectors(r,e),Ph.crossVectors(Oh,bc);let h=this.direction.dot(Ph),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;tr.subVectors(this.origin,e);const m=p*this.direction.dot(bc.crossVectors(tr,bc));if(m<0)return null;const d=p*this.direction.dot(Oh.cross(tr));if(d<0||m+d>h)return null;const x=-p*tr.dot(Ph);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qo extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p_=new en,wr=new Av,Tc=new $c,m_=new ae,Ac=new ae,Rc=new ae,Cc=new ae,Fh=new ae,wc=new ae,g_=new ae,Dc=new ae;class Mi extends Dn{constructor(e=new ui,i=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){wc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const x=p[m],_=c[m];x!==0&&(Fh.fromBufferAttribute(_,e),h?wc.addScaledVector(Fh,x):wc.addScaledVector(Fh.sub(i),x))}i.add(wc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),wr.copy(e.ray).recast(e.near),!(Tc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Tc,m_)===null||wr.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(c).invert(),wr.copy(e.ray).applyMatrix4(p_),!(r.boundingBox!==null&&wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,wr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const E=g[T],S=h[E.materialIndex],I=Math.max(E.start,y.start),H=Math.min(p.count,Math.min(E.start+E.count,y.start+y.count));for(let C=I,F=H;C<F;C+=3){const L=p.getX(C),O=p.getX(C+1),b=p.getX(C+2);l=Uc(this,S,e,r,d,x,_,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let E=T,S=w;E<S;E+=3){const I=p.getX(E),H=p.getX(E+1),C=p.getX(E+2);l=Uc(this,h,e,r,d,x,_,I,H,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const E=g[T],S=h[E.materialIndex],I=Math.max(E.start,y.start),H=Math.min(m.count,Math.min(E.start+E.count,y.start+y.count));for(let C=I,F=H;C<F;C+=3){const L=C,O=C+1,b=C+2;l=Uc(this,S,e,r,d,x,_,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let E=T,S=w;E<S;E+=3){const I=E,H=E+1,C=E+2;l=Uc(this,h,e,r,d,x,_,I,H,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function DM(s,e,i,r,l,c,h,p){let m;if(e.side===Hn?m=r.intersectTriangle(h,c,l,!0,p):m=r.intersectTriangle(l,c,h,e.side===rr,p),m===null)return null;Dc.copy(p),Dc.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Dc);return d<i.near||d>i.far?null:{distance:d,point:Dc.clone(),object:s}}function Uc(s,e,i,r,l,c,h,p,m,d){s.getVertexPosition(p,Ac),s.getVertexPosition(m,Rc),s.getVertexPosition(d,Cc);const x=DM(s,e,i,r,Ac,Rc,Cc,g_);if(x){const _=new ae;Di.getBarycoord(g_,Ac,Rc,Cc,_),l&&(x.uv=Di.getInterpolatedAttribute(l,p,m,d,_,new Et)),c&&(x.uv1=Di.getInterpolatedAttribute(c,p,m,d,_,new Et)),h&&(x.normal=Di.getInterpolatedAttribute(h,p,m,d,_,new ae),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new ae,materialIndex:0};Di.getNormal(Ac,Rc,Cc,g.normal),x.face=g,x.barycoord=_}return x}class UM extends Fn{constructor(e=null,i=1,r=1,l,c,h,p,m,d=wn,x=wn,_,g){super(null,h,p,m,d,x,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new ae,LM=new ae,NM=new st;class Ur{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ih.subVectors(r,i).cross(LM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Ih),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||NM.getNormalMatrix(e),l=this.coplanarPoint(Ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new $c,OM=new Et(.5,.5),Lc=new ae;class Qd{constructor(e=new Ur,i=new Ur,r=new Ur,l=new Ur,c=new Ur,h=new Ur){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],x=c[4],_=c[5],g=c[6],y=c[7],T=c[8],w=c[9],E=c[10],S=c[11],I=c[12],H=c[13],C=c[14],F=c[15];if(l[0].setComponents(d-h,y-x,S-T,F-I).normalize(),l[1].setComponents(d+h,y+x,S+T,F+I).normalize(),l[2].setComponents(d+p,y+_,S+w,F+H).normalize(),l[3].setComponents(d-p,y-_,S-w,F-H).normalize(),r)l[4].setComponents(m,g,E,C).normalize(),l[5].setComponents(d-m,y-g,S-E,F-C).normalize();else if(l[4].setComponents(d-m,y-g,S-E,F-C).normalize(),i===ki)l[5].setComponents(d+m,y+g,S+E,F+C).normalize();else if(i===$o)l[5].setComponents(m,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const i=OM.distanceTo(e.center);return Dr.radius=.7071067811865476+i,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?e.max.x:e.min.x,Lc.y=l.normal.y>0?e.max.y:e.min.y,Lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rv extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const __=new en,Pd=new Av,Nc=new $c,Oc=new ae;class PM extends Dn{constructor(e=new ui,i=new Rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,e.ray.intersectsSphere(Nc)===!1)return;__.copy(l).invert(),Pd.copy(e.ray).applyMatrix4(__);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,_=r.attributes.position;if(d!==null){const g=Math.max(0,h.start),y=Math.min(d.count,h.start+h.count);for(let T=g,w=y;T<w;T++){const E=d.getX(T);Oc.fromBufferAttribute(_,E),v_(Oc,E,m,l,e,i,this)}}else{const g=Math.max(0,h.start),y=Math.min(_.count,h.start+h.count);for(let T=g,w=y;T<w;T++)Oc.fromBufferAttribute(_,T),v_(Oc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function v_(s,e,i,r,l,c,h){const p=Pd.distanceSqToPoint(s);if(p<i){const m=new ae;Pd.closestPointToPoint(s,m),m.applyMatrix4(r);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Cv extends Fn{constructor(e=[],i=Fr,r,l,c,h,p,m,d,x){super(e,i,r,l,c,h,p,m,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hs extends Fn{constructor(e,i,r=Yi,l,c,h,p=wn,m=wn,d,x=Ea,_=1){if(x!==Ea&&x!==Pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,h,p,m,x,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class FM extends Hs{constructor(e,i=Yi,r=Fr,l,c,h=wn,p=wn,m,d=Ea){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,c,h,p,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends ui{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],x=[],_=[];let g=0,y=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Gn(d,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(_,2));function T(w,E,S,I,H,C,F,L,O,b,N){const Y=C/O,G=F/b,J=C/2,pe=F/2,xe=L/2,j=O+1,P=b+1;let B=0,$=0;const _e=new ae;for(let be=0;be<P;be++){const U=be*G-pe;for(let Z=0;Z<j;Z++){const Ee=Z*Y-J;_e[w]=Ee*I,_e[E]=U*H,_e[S]=xe,d.push(_e.x,_e.y,_e.z),_e[w]=0,_e[E]=0,_e[S]=L>0?1:-1,x.push(_e.x,_e.y,_e.z),_.push(Z/O),_.push(1-be/b),B+=1}}for(let be=0;be<b;be++)for(let U=0;U<O;U++){const Z=g+U+j*be,Ee=g+U+j*(be+1),Te=g+(U+1)+j*(be+1),Ne=g+(U+1)+j*be;m.push(Z,Ee,Ne),m.push(Ee,Te,Ne),$+=6}p.addGroup(y,$,N),y+=$,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eu extends ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,x=m+1,_=e/p,g=i/m,y=[],T=[],w=[],E=[];for(let S=0;S<x;S++){const I=S*g-h;for(let H=0;H<d;H++){const C=H*_-c;T.push(C,-I,0),w.push(0,0,1),E.push(H/p),E.push(1-S/m)}}for(let S=0;S<m;S++)for(let I=0;I<p;I++){const H=I+d*S,C=I+d*(S+1),F=I+1+d*(S+1),L=I+1+d*S;y.push(H,C,L),y.push(C,F,L)}this.setIndex(y),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends ui{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],d=[],x=[];let _=e;const g=(i-e)/l,y=new ae,T=new Et;for(let w=0;w<=l;w++){for(let E=0;E<=r;E++){const S=c+E/r*h;y.x=_*Math.cos(S),y.y=_*Math.sin(S),m.push(y.x,y.y,y.z),d.push(0,0,1),T.x=(y.x/i+1)/2,T.y=(y.y/i+1)/2,x.push(T.x,T.y)}_+=g}for(let w=0;w<l;w++){const E=w*(r+1);for(let S=0;S<r;S++){const I=S+E,H=I,C=I+r+1,F=I+r+2,L=I+1;p.push(H,C,L),p.push(C,F,L)}}this.setIndex(p),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(d,3)),this.setAttribute("uv",new Gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qc extends ui{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+p,Math.PI);let d=0;const x=[],_=new ae,g=new ae,y=[],T=[],w=[],E=[];for(let S=0;S<=r;S++){const I=[],H=S/r,C=h+H*p,F=e*Math.cos(C),L=Math.sqrt(e*e-F*F);let O=0;S===0&&h===0?O=.5/i:S===r&&m===Math.PI&&(O=-.5/i);for(let b=0;b<=i;b++){const N=b/i,Y=l+N*c;_.x=-L*Math.cos(Y),_.y=F,_.z=L*Math.sin(Y),T.push(_.x,_.y,_.z),g.copy(_).normalize(),w.push(g.x,g.y,g.z),E.push(N+O,1-H),I.push(d++)}x.push(I)}for(let S=0;S<r;S++)for(let I=0;I<i;I++){const H=x[S][I+1],C=x[S][I],F=x[S+1][I],L=x[S+1][I+1];(S!==0||h>0)&&y.push(H,C,L),(S!==r-1||m<Math.PI)&&y.push(C,F,L)}this.setIndex(y),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Gs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(x_(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(x_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)e[l]=r[l]}return e}function x_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function IM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Dv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const zM={clone:Gs,merge:Bn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=IM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(l.value);break;case"v4":this.uniforms[r].value=new $t().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new en().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class GM extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class VM extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(S_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!S_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function S_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class WM{constructor(e,i,r){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){p++,c===!1&&l.onStart!==void 0&&l.onStart(x,h,p),c=!0},this.itemEnd=function(x){h++,l.onProgress!==void 0&&l.onProgress(x,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,_){return d.push(x,_),this},this.removeHandler=function(x){const _=d.indexOf(x);return _!==-1&&d.splice(_,2),this},this.getHandler=function(x){for(let _=0,g=d.length;_<g;_+=2){const y=d[_],T=d[_+1];if(y.global&&(y.lastIndex=0),y.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qM=new WM;class jd{constructor(e){this.manager=e!==void 0?e:qM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class YM extends jd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=zh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let _=ws.get(h);_===void 0&&(_=[],ws.set(h,_)),_.push({onLoad:i,onError:l})}return h}const p=el("img");function m(){x(),i&&i(this);const _=ws.get(this)||[];for(let g=0;g<_.length;g++){const y=_[g];y.onLoad&&y.onLoad(this)}ws.delete(this),c.manager.itemEnd(e)}function d(_){x(),l&&l(_),zh.remove(`image:${e}`);const g=ws.get(this)||[];for(let y=0;y<g.length;y++){const T=g[y];T.onError&&T.onError(_)}ws.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),zh.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class ZM extends jd{constructor(e){super(e)}load(e,i,r,l){const c=new Fn,h=new YM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Uv extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Bh=new en,M_=new ae,y_=new ae;class KM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;M_.setFromMatrixPosition(e.matrixWorld),i.position.copy(M_),y_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(y_),i.updateMatrixWorld(),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===$o||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pc=new ae,Fc=new Xs,Bi=new ae;class Lv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,Fc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Fc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Pc,Fc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Fc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ae,E_=new Et,b_=new Et;class Si extends Lv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,E_,b_),i.subVectors(b_,E_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $d extends Lv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class QM extends KM{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T_ extends Uv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new QM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class JM extends Uv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ds=-90,Us=1;class jM extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Ds,Us,e,i);l.layers=this.layers,this.add(l);const c=new Si(Ds,Us,e,i);c.layers=this.layers,this.add(c);const h=new Si(Ds,Us,e,i);h.layers=this.layers,this.add(h);const p=new Si(Ds,Us,e,i);p.layers=this.layers,this.add(p);const m=new Si(Ds,Us,e,i);m.layers=this.layers,this.add(m);const d=new Si(Ds,Us,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$o)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,g,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class $M extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ey{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const ap=class ap{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};ap.prototype.isMatrix2=!0;let A_=ap;function R_(s,e,i,r){const l=ty(r);switch(i){case _v:return s*e;case xv:return s*e/l.components*l.byteLength;case Xd:return s*e/l.components*l.byteLength;case Ir:return s*e*2/l.components*l.byteLength;case kd:return s*e*2/l.components*l.byteLength;case vv:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case Wd:return s*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(s,16)*Math.max(e,8)/4;case ad:case sd:return Math.max(s,8)*Math.max(e,8)/2;case ld:case cd:case fd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ud:case qc:case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cd:case wd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ud:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yc:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ty(s){switch(s){case ci:case dv:return{byteLength:1,components:1};case Jo:case pv:case ya:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Yi:case Hd:case Xi:return{byteLength:4,components:1};case mv:case gv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ny(s){const e=new WeakMap;function i(p,m){const d=p.array,x=p.usage,_=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,x),p.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,d){const x=m.array,_=m.updateRanges;if(s.bindBuffer(d,p),_.length===0)s.bufferSubData(d,0,x);else{_.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<_.length;y++){const T=_[g],w=_[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,_[g]=w)}_.length=g+1;for(let y=0,T=_.length;y<T;y++){const w=_[y];s.bufferSubData(d,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
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
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
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
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gy=`#ifdef USE_IRIDESCENCE
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ay=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
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
#endif`,tE=`uniform sampler2D dfgLUT;
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
}`,nE=`
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_E=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,RE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VE=`float getShadowMask() {
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
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,YE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a2=`uniform sampler2D t2D;
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`#include <common>
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
}`,u2=`#if DEPTH_PACKING == 3200
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
}`,f2=`#define DISTANCE
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
}`,h2=`#define DISTANCE
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
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
}`,g2=`uniform vec3 diffuse;
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
}`,_2=`#include <common>
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
}`,v2=`uniform vec3 diffuse;
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
}`,x2=`#define LAMBERT
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
}`,S2=`#define LAMBERT
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
}`,M2=`#define MATCAP
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
}`,y2=`#define MATCAP
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
}`,E2=`#define NORMAL
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
}`,b2=`#define NORMAL
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
}`,T2=`#define PHONG
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
}`,A2=`#define PHONG
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
}`,R2=`#define STANDARD
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
}`,C2=`#define STANDARD
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
}`,w2=`#define TOON
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
}`,D2=`#define TOON
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
}`,U2=`uniform float size;
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
}`,L2=`uniform vec3 diffuse;
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
}`,N2=`#include <common>
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
}`,O2=`uniform vec3 color;
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
}`,P2=`uniform float rotation;
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
}`,F2=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:iy,alphahash_pars_fragment:ay,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:hy,begin_vertex:dy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:yy,color_pars_fragment:Ey,color_pars_vertex:by,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:wy,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ly,colorspace_fragment:Ny,colorspace_pars_fragment:Oy,envmap_fragment:Py,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Iy,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Ky,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:Xy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Wy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Yy,lights_pars_begin:Zy,lights_toon_fragment:Qy,lights_toon_pars_fragment:Jy,lights_phong_fragment:jy,lights_phong_pars_fragment:$y,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,lightprobes_pars_fragment:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:hE,map_particle_pars_fragment:dE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:_E,morphnormal_vertex:vE,morphtarget_pars_vertex:xE,morphtarget_vertex:SE,normal_fragment_begin:ME,normal_fragment_maps:yE,normal_pars_fragment:EE,normal_pars_vertex:bE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:RE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:LE,premultiplied_alpha_fragment:NE,project_vertex:OE,dithering_fragment:PE,dithering_pars_fragment:FE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:zE,shadowmap_pars_fragment:BE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:XE,skinning_pars_vertex:kE,skinning_vertex:WE,skinnormal_vertex:qE,specularmap_fragment:YE,specularmap_pars_fragment:ZE,tonemapping_fragment:KE,tonemapping_pars_fragment:QE,transmission_fragment:JE,transmission_pars_fragment:jE,uv_pars_fragment:$E,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:a2,backgroundCube_vert:r2,backgroundCube_frag:s2,cube_vert:o2,cube_frag:l2,depth_vert:c2,depth_frag:u2,distance_vert:f2,distance_frag:h2,equirect_vert:d2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:_2,meshbasic_frag:v2,meshlambert_vert:x2,meshlambert_frag:S2,meshmatcap_vert:M2,meshmatcap_frag:y2,meshnormal_vert:E2,meshnormal_frag:b2,meshphong_vert:T2,meshphong_frag:A2,meshphysical_vert:R2,meshphysical_frag:C2,meshtoon_vert:w2,meshtoon_frag:D2,points_vert:U2,points_frag:L2,shadow_vert:N2,shadow_frag:O2,sprite_vert:P2,sprite_frag:F2},Ie={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Gi={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Gi.physical={uniforms:Bn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ic={r:0,b:0,g:0},I2=new en,Ov=new st;Ov.set(-1,0,0,0,1,0,0,0,1);function z2(s,e,i,r,l,c){const h=new bt(0);let p=l===!0?0:1,m,d,x=null,_=0,g=null;function y(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const C=I.backgroundBlurriness>0;H=e.get(H,C)}return H}function T(I){let H=!1;const C=y(I);C===null?E(h,p):C&&C.isColor&&(E(C,1),H=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(I,H){const C=y(H);C&&(C.isCubeTexture||C.mapping===jc)?(d===void 0&&(d=new Mi(new il(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Gs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(I2.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ov),d.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,(x!==C||_!==C.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,x=C,_=C.version,g=s.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Mi(new eu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Gs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=yt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||_!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=C,_=C.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function E(I,H){I.getRGB(Ic,Dv(s)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,H,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,H=1){h.set(I),p=H,E(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,E(h,p)},render:T,addToRenderList:w,dispose:S}}function B2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,h=!1;function p(G,J,pe,xe,j){let P=!1;const B=_(G,xe,pe,J);c!==B&&(c=B,d(c.object)),P=y(G,xe,pe,j),P&&T(G,xe,pe,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(P||h)&&(h=!1,C(G,J,pe,xe),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function x(G){return s.deleteVertexArray(G)}function _(G,J,pe,xe){const j=xe.wireframe===!0;let P=r[J.id];P===void 0&&(P={},r[J.id]=P);const B=G.isInstancedMesh===!0?G.id:0;let $=P[B];$===void 0&&($={},P[B]=$);let _e=$[pe.id];_e===void 0&&(_e={},$[pe.id]=_e);let be=_e[j];return be===void 0&&(be=g(m()),_e[j]=be),be}function g(G){const J=[],pe=[],xe=[];for(let j=0;j<i;j++)J[j]=0,pe[j]=0,xe[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:pe,attributeDivisors:xe,object:G,attributes:{},index:null}}function y(G,J,pe,xe){const j=c.attributes,P=J.attributes;let B=0;const $=pe.getAttributes();for(const _e in $)if($[_e].location>=0){const U=j[_e];let Z=P[_e];if(Z===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;B++}return c.attributesNum!==B||c.index!==xe}function T(G,J,pe,xe){const j={},P=J.attributes;let B=0;const $=pe.getAttributes();for(const _e in $)if($[_e].location>=0){let U=P[_e];U===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),j[_e]=Z,B++}c.attributes=j,c.attributesNum=B,c.index=xe}function w(){const G=c.newAttributes;for(let J=0,pe=G.length;J<pe;J++)G[J]=0}function E(G){S(G,0)}function S(G,J){const pe=c.newAttributes,xe=c.enabledAttributes,j=c.attributeDivisors;pe[G]=1,xe[G]===0&&(s.enableVertexAttribArray(G),xe[G]=1),j[G]!==J&&(s.vertexAttribDivisor(G,J),j[G]=J)}function I(){const G=c.newAttributes,J=c.enabledAttributes;for(let pe=0,xe=J.length;pe<xe;pe++)J[pe]!==G[pe]&&(s.disableVertexAttribArray(pe),J[pe]=0)}function H(G,J,pe,xe,j,P,B){B===!0?s.vertexAttribIPointer(G,J,pe,j,P):s.vertexAttribPointer(G,J,pe,xe,j,P)}function C(G,J,pe,xe){w();const j=xe.attributes,P=pe.getAttributes(),B=J.defaultAttributeValues;for(const $ in P){const _e=P[$];if(_e.location>=0){let be=j[$];if(be===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const U=be.normalized,Z=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Te=Ee.buffer,Ne=Ee.type,W=Ee.bytesPerElement,fe=Ne===s.INT||Ne===s.UNSIGNED_INT||be.gpuType===Hd;if(be.isInterleavedBufferAttribute){const ge=be.data,Pe=ge.stride,nt=be.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<_e.locationSize;Je++)S(_e.location+Je,ge.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<_e.locationSize;Je++)E(_e.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Je=0;Je<_e.locationSize;Je++)H(_e.location+Je,Z/_e.locationSize,Ne,U,Pe*W,(nt+Z/_e.locationSize*Je)*W,fe)}else{if(be.isInstancedBufferAttribute){for(let ge=0;ge<_e.locationSize;ge++)S(_e.location+ge,be.meshPerAttribute);G.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ge=0;ge<_e.locationSize;ge++)E(_e.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ge=0;ge<_e.locationSize;ge++)H(_e.location+ge,Z/_e.locationSize,Ne,U,Z*W,Z/_e.locationSize*ge*W,fe)}}else if(B!==void 0){const U=B[$];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(_e.location,U);break;case 3:s.vertexAttrib3fv(_e.location,U);break;case 4:s.vertexAttrib4fv(_e.location,U);break;default:s.vertexAttrib1fv(_e.location,U)}}}}I()}function F(){N();for(const G in r){const J=r[G];for(const pe in J){const xe=J[pe];for(const j in xe){const P=xe[j];for(const B in P)x(P[B].object),delete P[B];delete xe[j]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const J=r[G.id];for(const pe in J){const xe=J[pe];for(const j in xe){const P=xe[j];for(const B in P)x(P[B].object),delete P[B];delete xe[j]}}delete r[G.id]}function O(G){for(const J in r){const pe=r[J];for(const xe in pe){const j=pe[xe];if(j[G.id]===void 0)continue;const P=j[G.id];for(const B in P)x(P[B].object),delete P[B];delete j[G.id]}}}function b(G){for(const J in r){const pe=r[J],xe=G.isInstancedMesh===!0?G.id:0,j=pe[xe];if(j!==void 0){for(const P in j){const B=j[P];for(const $ in B)x(B[$].object),delete B[$];delete j[P]}delete pe[xe],Object.keys(pe).length===0&&delete r[J]}}}function N(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:Y,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:E,disableUnusedAttributes:I}}function H2(s,e,i){let r;function l(m){r=m}function c(m,d){s.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,x){x!==0&&(s.drawArraysInstanced(r,m,d,x),i.update(d,r,x))}function p(m,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,x);let g=0;for(let y=0;y<x;y++)g+=d[y];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function G2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ui&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ci&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!b)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const x=m(d);x!==d&&(it("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:C,maxSamples:F,samples:L}}function V2(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Ur,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||l;return l=g,r=_.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,y){const T=_.clippingPlanes,w=_.clipIntersection,E=_.clipShadows,S=s.get(_);if(!l||T===null||T.length===0||c&&!E)c?x(null):d();else{const I=c?0:r,H=I*4;let C=S.clippingState||null;m.value=C,C=x(T,g,H,y);for(let F=0;F!==H;++F)C[F]=i[F];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,g,y,T){const w=_!==null?_.length:0;let E=null;if(w!==0){if(E=m.value,T!==!0||E===null){const S=y+w*4,I=g.matrixWorldInverse;p.getNormalMatrix(I),(E===null||E.length<S)&&(E=new Float32Array(S));for(let H=0,C=y;H!==w;++H,C+=4)h.copy(_[H]).applyMatrix4(I,p),h.normal.toArray(E,C),E[C+3]=h.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,E}}const ar=4,C_=[.125,.215,.35,.446,.526,.582],Nr=20,X2=256,Xo=new $d,w_=new bt;let Hh=null,Gh=0,Vh=0,Xh=!1;const k2=new ae;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:p=k2}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ya,format:Ui,colorSpace:Zc,depthBuffer:!1},l=U_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W2(c)),this._blurMaterial=Y2(c,e,i),this._ggxMaterial=q2(c,e,i)}return l}_compileMaterial(e){const i=new Mi(new ui,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new Si(90,1,i,r),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(w_),_.toneMapping=Wi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new il,new Qo({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,E=w.material;let S=!1;const I=e.background;I?I.isColor&&(E.color.copy(I),e.background=null,S=!0):(E.color.copy(w_),S=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[H],c.y,c.z)):C===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[H]));const F=this._cubeSize;Ls(l,C*F,H>2?F:0,F,F),_.setRenderTarget(l),S&&_.render(w,m),_.render(e,m)}_.toneMapping=y,_.autoClear=g,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Fr||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(d*d-x*x),g=0+d*1.25,y=_*g,{_lodMax:T}=this,w=this._sizeLods[r],E=3*w*(r>T-ar?r-T+ar:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Ls(c,E,S,3*w,2*w),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Ls(e,E,S,3*w,2*w),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=d;const g=d.uniforms,y=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Nr-1),w=c/T,E=isFinite(c)?1+Math.floor(x*w):Nr;E>Nr&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Nr}`);const S=[];let I=0;for(let O=0;O<Nr;++O){const b=O/w,N=Math.exp(-b*b/2);S.push(N),O===0?I+=N:O<E&&(I+=2*N)}for(let O=0;O<S.length;O++)S[O]=S[O]/I;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-r;const C=this._sizeLods[l],F=3*C*(l>H-ar?l-H+ar:0),L=4*(this._cubeSize-C);Ls(i,F,L,3*C,2*C),m.setRenderTarget(i),m.render(_,Xo)}}function W2(s){const e=[],i=[],r=[];let l=s;const c=s-ar+1+C_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>s-ar?m=C_[h-s+ar-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),x=-d,_=1+d,g=[x,x,_,x,_,_,x,x,_,_,x,_],y=6,T=6,w=3,E=2,S=1,I=new Float32Array(w*T*y),H=new Float32Array(E*T*y),C=new Float32Array(S*T*y);for(let L=0;L<y;L++){const O=L%3*2/3-1,b=L>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];I.set(N,w*T*L),H.set(g,E*T*L);const Y=[L,L,L,L,L,L];C.set(Y,S*T*L)}const F=new ui;F.setAttribute("position",new Li(I,w)),F.setAttribute("uv",new Li(H,E)),F.setAttribute("faceIndex",new Li(C,S)),r.push(new Mi(F,null)),l>ar&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function U_(s,e,i){const r=new qi(s,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function q2(s,e,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Y2(s,e,i){const r=new Float32Array(Nr),l=new ae(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function L_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function N_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class Pv extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new Mi(l,c),p=i.minFilter;return i.minFilter===Or&&(i.minFilter=Pn),new jM(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function Z2(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===dh||y===ph)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Pv(T.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===dh||y===ph,w=y===Fr||y===Bs;if(T||w){let E=i.get(g);const S=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new D_(s)),E=T?r.fromEquirectangular(g,E):r.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const I=g.image;return T&&I&&I.height>0||w&&I&&m(I)?(r===null&&(r=new D_(s)),E=T?r.fromEquirectangular(g):r.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",x),E.texture):null}}}return g}function p(g,y){return y===dh?g.mapping=Fr:y===ph&&(g.mapping=Bs),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function K2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fs("WebGLRenderer: "+r+" extension not supported."),l}}}function Q2(s,e,i,r){const l={},c=new WeakMap;function h(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function d(_){const g=[],y=_.index,T=_.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const I=y.array;w=y.version;for(let H=0,C=I.length;H<C;H+=3){const F=I[H+0],L=I[H+1],O=I[H+2];g.push(F,L,L,O,O,F)}}else{const I=T.array;w=T.version;for(let H=0,C=I.length/3-1;H<C;H+=3){const F=H+0,L=H+1,O=H+2;g.push(F,L,L,O,O,F)}}const E=new(T.count>=65535?Tv:bv)(g,1);E.version=w;const S=c.get(_);S&&e.remove(S),c.set(_,E)}function x(_){const g=c.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&d(_)}else d(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:x}}function J2(s,e,i){let r;function l(_){r=_}let c,h;function p(_){c=_.type,h=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*h),i.update(g,r,1)}function d(_,g,y){y!==0&&(s.drawElementsInstanced(r,g,c,_*h,y),i.update(g,r,y))}function x(_,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,y);let w=0;for(let E=0;E<y;E++)w+=g[E];i.update(w,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=x}function j2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function $2(s,e,i){const r=new WeakMap,l=new $t;function c(h,p,m){const d=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let Y=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",Y)};var y=Y;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),E===!0&&(C=3);let F=p.attributes.position.count*C,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*L*4*_),b=new Mv(O,F,L,_);b.type=Xi,b.needsUpdate=!0;const N=C*4;for(let G=0;G<_;G++){const J=S[G],pe=I[G],xe=H[G],j=F*L*4*G;for(let P=0;P<J.count;P++){const B=P*N;T===!0&&(l.fromBufferAttribute(J,P),O[j+B+0]=l.x,O[j+B+1]=l.y,O[j+B+2]=l.z,O[j+B+3]=0),w===!0&&(l.fromBufferAttribute(pe,P),O[j+B+4]=l.x,O[j+B+5]=l.y,O[j+B+6]=l.z,O[j+B+7]=0),E===!0&&(l.fromBufferAttribute(xe,P),O[j+B+8]=l.x,O[j+B+9]=l.y,O[j+B+10]=l.z,O[j+B+11]=xe.itemSize===4?l.w:1)}}g={count:_,texture:b,size:new Et(F,L)},r.set(p,g),p.addEventListener("dispose",Y)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let E=0;E<d.length;E++)T+=d[E];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function eb(s,e,i,r,l){let c=new WeakMap;function h(d){const x=l.render.frame,_=d.geometry,g=e.get(d,_);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==x&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,x))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return g}function p(){c=new WeakMap}function m(d){const x=d.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:p}}const tb={[rv]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[ov]:"CINEON_TONE_MAPPING",[lv]:"ACES_FILMIC_TONE_MAPPING",[uv]:"AGX_TONE_MAPPING",[fv]:"NEUTRAL_TONE_MAPPING",[cv]:"CUSTOM_TONE_MAPPING"};function nb(s,e,i,r,l,c){const h=new qi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Hs(e,i):void 0}),p=new qi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),m=new ui;m.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const d=new GM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Mi(m,d),_=new $d(-1,1,1,-1,0,1);let g=null,y=null,T=!1,w,E=null,S=[],I=!1;this.setSize=function(H,C){h.setSize(H,C),p.setSize(H,C);for(let F=0;F<S.length;F++){const L=S[F];L.setSize&&L.setSize(H,C)}},this.setEffects=function(H){S=H,I=S.length>0&&S[0].isRenderPass===!0;const C=h.width,F=h.height;for(let L=0;L<S.length;L++){const O=S[L];O.setSize&&O.setSize(C,F)}},this.begin=function(H,C){if(T||H.toneMapping===Wi&&S.length===0)return!1;if(E=C,C!==null){const F=C.width,L=C.height;(h.width!==F||h.height!==L)&&this.setSize(F,L)}return I===!1&&H.setRenderTarget(h),w=H.toneMapping,H.toneMapping=Wi,!0},this.hasRenderPass=function(){return I},this.end=function(H,C){H.toneMapping=w,T=!0;let F=h,L=p;for(let O=0;O<S.length;O++){const b=S[O];if(b.enabled!==!1&&(b.render(H,L,F,C),b.needsSwap!==!1)){const N=F;F=L,L=N}}if(g!==H.outputColorSpace||y!==H.toneMapping){g=H.outputColorSpace,y=H.toneMapping,d.defines={},yt.getTransfer(g)===zt&&(d.defines.SRGB_TRANSFER="");const O=tb[y];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,H.setRenderTarget(E),H.render(x,_),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Fv=new Fn,Fd=new Hs(1,1),Iv=new Mv,zv=new _M,Bv=new Cv,O_=[],P_=[],F_=new Float32Array(16),I_=new Float32Array(9),z_=new Float32Array(4);function Ws(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=O_[l];if(c===void 0&&(c=new Float32Array(l),O_[l]=c),e!==0){r.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,s[h].toArray(c,p)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function nu(s,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function ib(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function ab(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function rb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function ob(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;z_.set(r),s.uniformMatrix2fv(this.addr,!1,z_),Mn(i,r)}}function lb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;I_.set(r),s.uniformMatrix3fv(this.addr,!1,I_),Mn(i,r)}}function cb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,r))return;F_.set(r),s.uniformMatrix4fv(this.addr,!1,F_),Mn(i,r)}}function ub(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function fb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function hb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function db(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function pb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function mb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function gb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function _b(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function vb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Fd.compareFunction=i.isReversedDepthBuffer()?Yd:qd,c=Fd):c=Fv,i.setTexture2D(e||c,l)}function xb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||zv,l)}function Sb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Bv,l)}function Mb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Iv,l)}function yb(s){switch(s){case 5126:return ib;case 35664:return ab;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Eb(s,e){s.uniform1fv(this.addr,e)}function bb(s,e){const i=Ws(e,this.size,2);s.uniform2fv(this.addr,i)}function Tb(s,e){const i=Ws(e,this.size,3);s.uniform3fv(this.addr,i)}function Ab(s,e){const i=Ws(e,this.size,4);s.uniform4fv(this.addr,i)}function Rb(s,e){const i=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Cb(s,e){const i=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function wb(s,e){const i=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Db(s,e){s.uniform1iv(this.addr,e)}function Ub(s,e){s.uniform2iv(this.addr,e)}function Lb(s,e){s.uniform3iv(this.addr,e)}function Nb(s,e){s.uniform4iv(this.addr,e)}function Ob(s,e){s.uniform1uiv(this.addr,e)}function Pb(s,e){s.uniform2uiv(this.addr,e)}function Fb(s,e){s.uniform3uiv(this.addr,e)}function Ib(s,e){s.uniform4uiv(this.addr,e)}function zb(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=Fd:h=Fv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function Bb(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||zv,c[h])}function Hb(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Bv,c[h])}function Gb(s,e,i){const r=this.cache,l=e.length,c=nu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Iv,c[h])}function Vb(s){switch(s){case 5126:return Eb;case 35664:return bb;case 35665:return Tb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return wb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Ob;case 36294:return Pb;case 36295:return Fb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Xb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=yb(i.type)}}class kb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Vb(i.type)}}class Wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function B_(s,e){s.seq.push(e),s.map[e.id]=e}function qb(s,e,i){const r=s.name,l=r.length;for(kh.lastIndex=0;;){const c=kh.exec(r),h=kh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){B_(i,d===void 0?new Xb(p,s,e):new kb(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new Wb(p),B_(i,_)),i=_}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);qb(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function H_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Yb=37297;let Zb=0;function Kb(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const G_=new st;function Qb(s){yt._getMatrix(G_,yt.workingColorSpace,s);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(s)){case Kc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function V_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Kb(s.getShaderSource(e),p)}else return c}function Jb(s,e){const i=Qb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jb={[rv]:"Linear",[sv]:"Reinhard",[ov]:"Cineon",[lv]:"ACESFilmic",[uv]:"AgX",[fv]:"Neutral",[cv]:"Custom"};function $b(s,e){const i=jb[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new ae;function eT(){yt.getLuminanceCoefficients(zc);const s=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function nT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function iT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:p}}return i}function Yo(s){return s!==""}function X_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(aT,sT)}const rT=new Map;function sT(s,e){let i=ut[e];if(i===void 0){const r=rT.get(e);if(r!==void 0)i=ut[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Id(i)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(s){return s.replace(oT,lT)}function lT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const cT={[Hc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function uT(s){return cT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fT={[Fr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function hT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dT={[Bs]:"ENVMAP_MODE_REFRACTION"};function pT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mT={[av]:"ENVMAP_BLENDING_MULTIPLY",[OS]:"ENVMAP_BLENDING_MIX",[PS]:"ENVMAP_BLENDING_ADD"};function gT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mT[s.combine]||"ENVMAP_BLENDING_NONE"}function _T(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function vT(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=uT(i),d=hT(i),x=pT(i),_=gT(i),g=_T(i),y=tT(i),T=nT(c),w=l.createProgram();let E,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Yo).join(`
`),S.length>0&&(S+=`
`)):(E=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),S=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ut.tonemapping_pars_fragment:"",i.toneMapping!==Wi?$b("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Jb("linearToOutputTexel",i.outputColorSpace),eT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),h=Id(h),h=X_(h,i),h=k_(h,i),p=Id(p),p=X_(p,i),p=k_(p,i),h=W_(h),p=W_(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const H=I+E+h,C=I+S+p,F=H_(l,l.VERTEX_SHADER,H),L=H_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,F),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(G){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",pe=l.getShaderInfoLog(F)||"",xe=l.getShaderInfoLog(L)||"",j=J.trim(),P=pe.trim(),B=xe.trim();let $=!0,_e=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,F,L);else{const be=V_(l,F,"vertex"),U=V_(l,L,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+be+`
`+U)}else j!==""?it("WebGLProgram: Program Info Log:",j):(P===""||B==="")&&(_e=!1);_e&&(G.diagnostics={runnable:$,programLog:j,vertexShader:{log:P,prefix:E},fragmentShader:{log:B,prefix:S}})}l.deleteShader(F),l.deleteShader(L),b=new Wc(l,w),N=iT(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,Yb)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=L,this}let xT=0;class ST{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new MT(e),i.set(e,r)),r}}class MT{constructor(e){this.id=xT++,this.code=e,this.usedTimes=0}}function yT(s){return s===Ir||s===qc||s===Yc}function ET(s,e,i,r,l,c){const h=new yv,p=new ST,m=new Set,d=[],x=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,N,Y,G,J,pe){const xe=G.fog,j=J.geometry,P=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||P,B),_e=$&&$.mapping===jc?$.image.height:null,be=y[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&it("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Z=U!==void 0?U.length:0;let Ee=0;j.morphAttributes.position!==void 0&&(Ee=1),j.morphAttributes.normal!==void 0&&(Ee=2),j.morphAttributes.color!==void 0&&(Ee=3);let Te,Ne,W,fe;if(be){const Ve=Gi[be];Te=Ve.vertexShader,Ne=Ve.fragmentShader}else{Te=b.vertexShader,Ne=b.fragmentShader;const Ve=p.getVertexShaderStage(b),Kt=p.getFragmentShaderStage(b);p.update(b,Ve,Kt),W=Ve.id,fe=Kt.id}const ge=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),nt=J.isInstancedMesh===!0,Je=J.isBatchedMesh===!0,qt=!!b.map,ft=!!b.matcap,xt=!!$,St=!!b.aoMap,ht=!!b.lightMap,tn=!!b.bumpMap&&b.wireframe===!1,nn=!!b.normalMap,an=!!b.displacementMap,ln=!!b.emissiveMap,Wt=!!b.metalnessMap,rn=!!b.roughnessMap,q=b.anisotropy>0,Bt=b.clearcoat>0,wt=b.dispersion>0,D=b.iridescence>0,M=b.sheen>0,Q=b.transmission>0,re=q&&!!b.anisotropyMap,he=Bt&&!!b.clearcoatMap,Ae=Bt&&!!b.clearcoatNormalMap,De=Bt&&!!b.clearcoatRoughnessMap,ue=D&&!!b.iridescenceMap,de=D&&!!b.iridescenceThicknessMap,Ce=M&&!!b.sheenColorMap,Be=M&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Ue=!!b.specularColorMap,Qe=!!b.specularIntensityMap,je=Q&&!!b.transmissionMap,at=Q&&!!b.thicknessMap,X=!!b.gradientMap,Re=!!b.alphaMap,ve=b.alphaTest>0,we=!!b.alphaHash,ze=!!b.extensions;let ye=Wi;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ye={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Te,fragmentShader:Ne,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Je,batchingColor:Je&&J._colorsTexture!==null,instancing:nt,instancingColor:nt&&J.instanceColor!==null,instancingMorph:nt&&J.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:ft,envMap:xt,envMapMode:xt&&$.mapping,envMapCubeUVHeight:_e,aoMap:St,lightMap:ht,bumpMap:tn,normalMap:nn,displacementMap:an,emissiveMap:ln,normalMapObjectSpace:nn&&b.normalMapType===zS,normalMapTangentSpace:nn&&b.normalMapType===Od,packedNormalMap:nn&&b.normalMapType===Od&&yT(b.normalMap.format),metalnessMap:Wt,roughnessMap:rn,anisotropy:q,anisotropyMap:re,clearcoat:Bt,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:wt,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:Qe,transmission:Q,transmissionMap:je,thicknessMap:at,gradientMap:X,opaque:b.transparent===!1&&b.blending===Ps&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:we,combine:b.combine,mapUv:qt&&T(b.map.channel),aoMapUv:St&&T(b.aoMap.channel),lightMapUv:ht&&T(b.lightMap.channel),bumpMapUv:tn&&T(b.bumpMap.channel),normalMapUv:nn&&T(b.normalMap.channel),displacementMapUv:an&&T(b.displacementMap.channel),emissiveMapUv:ln&&T(b.emissiveMap.channel),metalnessMapUv:Wt&&T(b.metalnessMap.channel),roughnessMapUv:rn&&T(b.roughnessMap.channel),anisotropyMapUv:re&&T(b.anisotropyMap.channel),clearcoatMapUv:he&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:Oe&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:Qe&&T(b.specularIntensityMap.channel),transmissionMapUv:je&&T(b.transmissionMap.channel),thicknessMapUv:at&&T(b.thicknessMap.channel),alphaMapUv:Re&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(nn||q),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&(qt||Re),fog:!!xe,useFog:b.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&nn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&yt.getTransfer(b.map.colorSpace)===zt,decodeVideoTextureEmissive:ln&&b.emissiveMap.isVideoTexture===!0&&yt.getTransfer(b.emissiveMap.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function E(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)N.push(Y),N.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(S(N,b),I(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function S(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function I(b,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const N=y[b.type];let Y;if(N){const G=Gi[N];Y=zM.clone(G.uniforms)}else Y=b.uniforms;return Y}function C(b,N){let Y=x.get(N);return Y!==void 0?++Y.usedTimes:(Y=new vT(s,N,b,l),d.push(Y),x.set(N,Y)),Y}function F(b){if(--b.usedTimes===0){const N=d.indexOf(b);d[N]=d[d.length-1],d.pop(),x.delete(b.cacheKey),b.destroy()}}function L(b){p.remove(b)}function O(){p.dispose()}return{getParameters:w,getProgramCacheKey:E,getUniforms:H,acquireProgram:C,releaseProgram:F,releaseShaderCache:L,programs:d,dispose:O}}function bT(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let p=s.get(h);return p===void 0&&(p={},s.set(h,p)),p}function r(h){s.delete(h)}function l(h,p,m){s.get(h)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function TT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Z_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,w,E,S){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:E,group:S},s[e]=I):(I.id=g.id,I.object=g,I.geometry=y,I.material=T,I.materialVariant=h(g),I.groupOrder=w,I.renderOrder=g.renderOrder,I.z=E,I.group=S),e++,I}function m(g,y,T,w,E,S){const I=p(g,y,T,w,E,S);T.transmission>0?r.push(I):T.transparent===!0?l.push(I):i.push(I)}function d(g,y,T,w,E,S){const I=p(g,y,T,w,E,S);T.transmission>0?r.unshift(I):T.transparent===!0?l.unshift(I):i.unshift(I)}function x(g,y,T){i.length>1&&i.sort(g||TT),r.length>1&&r.sort(y||Y_),l.length>1&&l.sort(y||Y_),T&&(i.reverse(),r.reverse(),l.reverse())}function _(){for(let g=e,y=s.length;g<y;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:_,sort:x}}function AT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new Z_,s.set(r,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function RT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new bt};break;case"SpotLight":i={position:new ae,direction:new ae,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=i,i}}}function CT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let wT=0;function DT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UT(s){const e=new RT,i=CT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ae);const l=new ae,c=new en,h=new en;function p(d){let x=0,_=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,T=0,w=0,E=0,S=0,I=0,H=0,C=0,F=0,L=0,O=0;d.sort(DT);for(let N=0,Y=d.length;N<Y;N++){const G=d[N],J=G.color,pe=G.intensity,xe=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ir?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=J.r*pe,_+=J.g*pe,g+=J.b*pe;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],pe);O++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,$=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=G.shadow.matrix,I++}r.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(J).multiplyScalar(pe),P.distance=xe,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[w]=P;const B=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,B.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[w]=B.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,r.spotShadow[w]=$,r.spotShadowMap[w]=j,C++}w++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(J).multiplyScalar(pe),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[E]=P,E++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const B=G.shadow,$=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=G.shadow.matrix,H++}r.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(pe),P.groundColor.copy(G.groundColor).multiplyScalar(pe),r.hemi[S]=P,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==E||b.hemiLength!==S||b.numDirectionalShadows!==I||b.numPointShadows!==H||b.numSpotShadows!==C||b.numSpotMaps!==F||b.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=E,r.point.length=T,r.hemi.length=S,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=C+F-L,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=E,b.hemiLength=S,b.numDirectionalShadows=I,b.numPointShadows=H,b.numSpotShadows=C,b.numSpotMaps=F,b.numLightProbes=O,r.version=wT++)}function m(d,x){let _=0,g=0,y=0,T=0,w=0;const E=x.matrixWorldInverse;for(let S=0,I=d.length;S<I;S++){const H=d[S];if(H.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),_++}else if(H.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),y++}else if(H.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(E),h.identity(),c.copy(H.matrixWorld),c.premultiply(E),h.extractRotation(c),C.halfWidth.set(H.width*.5,0,0),C.halfHeight.set(0,H.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(H.matrixWorld),C.position.applyMatrix4(E),g++}else if(H.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(H.matrixWorld),C.direction.transformDirection(E),w++}}}return{setup:p,setupView:m,state:r}}function K_(s){const e=new UT(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function x(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:x,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function LT(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new K_(s),e.set(l,[p])):c>=h.length?(p=new K_(s),h.push(p)):p=h[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`,PT=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],FT=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Q_=new en,ko=new ae,Wh=new ae;function IT(s,e,i){let r=new Qd;const l=new Et,c=new Et,h=new $t,p=new XM,m=new kM,d={},x=i.maxTextureSize,_={[rr]:Hn,[Hn]:rr,[Vi]:Vi},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:NT,fragmentShader:OT}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new ui;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Mi(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let S=this.type;this.render=function(L,O,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||L.length===0)return;this.type===mS&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const N=s.getRenderTarget(),Y=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Sa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const pe=S!==this.type;pe&&O.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(j=>j.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,j=L.length;xe<j;xe++){const P=L[xe],B=P.shadow;if(B===void 0){it("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();l.multiply($),c.copy(B.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/$.x),l.x=c.x*$.x,B.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/$.y),l.y=c.y*$.y,B.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=_e,B.map===null||pe===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wo){if(P.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new qi(l.x,l.y,{format:Ir,type:ya,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new Hs(l.x,l.y,Xi),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=Ea,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn}else P.isPointLight?(B.map=new Pv(l.x),B.map.depthTexture=new FM(l.x,Yi)):(B.map=new qi(l.x,l.y),B.map.depthTexture=new Hs(l.x,l.y,Yi)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=Ea,this.type===Hc?(B.map.depthTexture.compareFunction=_e?Yd:qd,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn);B.camera.updateProjectionMatrix()}const be=B.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<be;U++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,U),s.clear();else{U===0&&(s.setRenderTarget(B.map),s.clear());const Z=B.getViewport(U);h.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),J.viewport(h)}if(P.isPointLight){const Z=B.camera,Ee=B.matrix,Te=P.distance||Z.far;Te!==Z.far&&(Z.far=Te,Z.updateProjectionMatrix()),ko.setFromMatrixPosition(P.matrixWorld),Z.position.copy(ko),Wh.copy(Z.position),Wh.add(PT[U]),Z.up.copy(FT[U]),Z.lookAt(Wh),Z.updateMatrixWorld(),Ee.makeTranslation(-ko.x,-ko.y,-ko.z),Q_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Q_,Z.coordinateSystem,Z.reversedDepth)}else B.updateMatrices(P);r=B.getFrustum(),C(O,b,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===Wo&&I(B,b),B.needsUpdate=!1}S=this.type,E.needsUpdate=!1,s.setRenderTarget(N,Y,G)};function I(L,O){const b=e.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(l.x,l.y,{format:Ir,type:ya})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,b,g,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,b,y,w,null)}function H(L,O,b,N){let Y=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=b.isPointLight===!0?m:p,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=Y.uuid,pe=O.uuid;let xe=d[J];xe===void 0&&(xe={},d[J]=xe);let j=xe[pe];j===void 0&&(j=Y.clone(),xe[pe]=j,O.addEventListener("dispose",F)),Y=j}if(Y.visible=O.visible,Y.wireframe=O.wireframe,N===Wo?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:_[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,b.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const J=s.properties.get(Y);J.light=b}return Y}function C(L,O,b,N,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Wo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const pe=e.update(L),xe=L.material;if(Array.isArray(xe)){const j=pe.groups;for(let P=0,B=j.length;P<B;P++){const $=j[P],_e=xe[$.materialIndex];if(_e&&_e.visible){const be=H(L,_e,N,Y);L.onBeforeShadow(s,L,O,b,pe,be,$),s.renderBufferDirect(b,null,pe,be,L,$),L.onAfterShadow(s,L,O,b,pe,be,$)}}}else if(xe.visible){const j=H(L,xe,N,Y);L.onBeforeShadow(s,L,O,b,pe,j,null),s.renderBufferDirect(b,null,pe,j,L,null),L.onAfterShadow(s,L,O,b,pe,j,null)}}const J=L.children;for(let pe=0,xe=J.length;pe<xe;pe++)C(J[pe],O,b,N,Y)}function F(L){L.target.removeEventListener("dispose",F);for(const b in d){const N=d[b],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function zT(s,e){function i(){let X=!1;const Re=new $t;let ve=null;const we=new $t(0,0,0,0);return{setMask:function(ze){ve!==ze&&!X&&(s.colorMask(ze,ze,ze,ze),ve=ze)},setLocked:function(ze){X=ze},setClear:function(ze,ye,Ye,Ve,Kt){Kt===!0&&(ze*=Ve,ye*=Ve,Ye*=Ve),Re.set(ze,ye,Ye,Ve),we.equals(Re)===!1&&(s.clearColor(ze,ye,Ye,Ve),we.copy(Re))},reset:function(){X=!1,ve=null,we.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,ve=null,we=null,ze=null;return{setReversed:function(ye){if(Re!==ye){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Re=ye;const Ve=ze;ze=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(ye){ye?ge(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(ye){ve!==ye&&!X&&(s.depthMask(ye),ve=ye)},setFunc:function(ye){if(Re&&(ye=ZS[ye]),we!==ye){switch(ye){case Kh:s.depthFunc(s.NEVER);break;case Qh:s.depthFunc(s.ALWAYS);break;case Jh:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case jh:s.depthFunc(s.EQUAL);break;case $h:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=ye}},setLocked:function(ye){X=ye},setClear:function(ye){ze!==ye&&(ze=ye,Re&&(ye=1-ye),s.clearDepth(ye))},reset:function(){X=!1,ve=null,we=null,ze=null,Re=!1}}}function l(){let X=!1,Re=null,ve=null,we=null,ze=null,ye=null,Ye=null,Ve=null,Kt=null;return{setTest:function(Lt){X||(Lt?ge(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Lt){Re!==Lt&&!X&&(s.stencilMask(Lt),Re=Lt)},setFunc:function(Lt,Qn,Jn){(ve!==Lt||we!==Qn||ze!==Jn)&&(s.stencilFunc(Lt,Qn,Jn),ve=Lt,we=Qn,ze=Jn)},setOp:function(Lt,Qn,Jn){(ye!==Lt||Ye!==Qn||Ve!==Jn)&&(s.stencilOp(Lt,Qn,Jn),ye=Lt,Ye=Qn,Ve=Jn)},setLocked:function(Lt){X=Lt},setClear:function(Lt){Kt!==Lt&&(s.clearStencil(Lt),Kt=Lt)},reset:function(){X=!1,Re=null,ve=null,we=null,ze=null,ye=null,Ye=null,Ve=null,Kt=null}}}const c=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let x={},_={},g={},y=new WeakMap,T=[],w=null,E=!1,S=null,I=null,H=null,C=null,F=null,L=null,O=null,b=new bt(0,0,0),N=0,Y=!1,G=null,J=null,pe=null,xe=null,j=null;const P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(_e)[1]),B=$>=1):_e.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),B=$>=2);let be=null,U={};const Z=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Te=new $t().fromArray(Z),Ne=new $t().fromArray(Ee);function W(X,Re,ve,we){const ze=new Uint8Array(4),ye=s.createTexture();s.bindTexture(X,ye),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ve;Ye++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Re+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return ye}const fe={};fe[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),ge(s.DEPTH_TEST),h.setFunc(zs),tn(!1),nn(Zg),ge(s.CULL_FACE),St(Sa);function ge(X){x[X]!==!0&&(s.enable(X),x[X]=!0)}function Pe(X){x[X]!==!1&&(s.disable(X),x[X]=!1)}function nt(X,Re){return g[X]!==Re?(s.bindFramebuffer(X,Re),g[X]=Re,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(X,Re){let ve=T,we=!1;if(X){ve=y.get(Re),ve===void 0&&(ve=[],y.set(Re,ve));const ze=X.textures;if(ve.length!==ze.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ye=ze.length;ye<Ye;ye++)ve[ye]=s.COLOR_ATTACHMENT0+ye;ve.length=ze.length,we=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,we=!0);we&&s.drawBuffers(ve)}function qt(X){return w!==X?(s.useProgram(X),w=X,!0):!1}const ft={[Lr]:s.FUNC_ADD,[_S]:s.FUNC_SUBTRACT,[vS]:s.FUNC_REVERSE_SUBTRACT};ft[xS]=s.MIN,ft[SS]=s.MAX;const xt={[MS]:s.ZERO,[yS]:s.ONE,[ES]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[wS]:s.SRC_ALPHA_SATURATE,[RS]:s.DST_COLOR,[TS]:s.DST_ALPHA,[bS]:s.ONE_MINUS_SRC_COLOR,[Zh]:s.ONE_MINUS_SRC_ALPHA,[CS]:s.ONE_MINUS_DST_COLOR,[AS]:s.ONE_MINUS_DST_ALPHA,[DS]:s.CONSTANT_COLOR,[US]:s.ONE_MINUS_CONSTANT_COLOR,[LS]:s.CONSTANT_ALPHA,[NS]:s.ONE_MINUS_CONSTANT_ALPHA};function St(X,Re,ve,we,ze,ye,Ye,Ve,Kt,Lt){if(X===Sa){E===!0&&(Pe(s.BLEND),E=!1);return}if(E===!1&&(ge(s.BLEND),E=!0),X!==gS){if(X!==S||Lt!==Y){if((I!==Lr||F!==Lr)&&(s.blendEquation(s.FUNC_ADD),I=Lr,F=Lr),Lt)switch(X){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.ONE,s.ONE);break;case Kg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",X);break}else switch(X){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kg:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qg:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",X);break}H=null,C=null,L=null,O=null,b.set(0,0,0),N=0,S=X,Y=Lt}return}ze=ze||Re,ye=ye||ve,Ye=Ye||we,(Re!==I||ze!==F)&&(s.blendEquationSeparate(ft[Re],ft[ze]),I=Re,F=ze),(ve!==H||we!==C||ye!==L||Ye!==O)&&(s.blendFuncSeparate(xt[ve],xt[we],xt[ye],xt[Ye]),H=ve,C=we,L=ye,O=Ye),(Ve.equals(b)===!1||Kt!==N)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Kt),b.copy(Ve),N=Kt),S=X,Y=!1}function ht(X,Re){X.side===Vi?Pe(s.CULL_FACE):ge(s.CULL_FACE);let ve=X.side===Hn;Re&&(ve=!ve),tn(ve),X.blending===Ps&&X.transparent===!1?St(Sa):St(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const we=X.stencilWrite;p.setTest(we),we&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ln(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function tn(X){G!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),G=X)}function nn(X){X!==dS?(ge(s.CULL_FACE),X!==J&&(X===Zg?s.cullFace(s.BACK):X===pS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),J=X}function an(X){X!==pe&&(B&&s.lineWidth(X),pe=X)}function ln(X,Re,ve){X?(ge(s.POLYGON_OFFSET_FILL),(xe!==Re||j!==ve)&&(xe=Re,j=ve,h.getReversed()&&(Re=-Re),s.polygonOffset(Re,ve))):Pe(s.POLYGON_OFFSET_FILL)}function Wt(X){X?ge(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function rn(X){X===void 0&&(X=s.TEXTURE0+P-1),be!==X&&(s.activeTexture(X),be=X)}function q(X,Re,ve){ve===void 0&&(be===null?ve=s.TEXTURE0+P-1:ve=be);let we=U[ve];we===void 0&&(we={type:void 0,texture:void 0},U[ve]=we),(we.type!==X||we.texture!==Re)&&(be!==ve&&(s.activeTexture(ve),be=ve),s.bindTexture(X,Re||fe[X]),we.type=X,we.texture=Re)}function Bt(){const X=U[be];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function M(){try{s.texSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Q(){try{s.texSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ae(){try{s.texStorage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function De(){try{s.texStorage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function ue(){try{s.texImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function de(){try{s.texImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Ce(X){return _[X]!==void 0?_[X]:s.getParameter(X)}function Be(X,Re){_[X]!==Re&&(s.pixelStorei(X,Re),_[X]=Re)}function Oe(X){Te.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Te.copy(X))}function Ue(X){Ne.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function Qe(X,Re){let ve=d.get(Re);ve===void 0&&(ve=new WeakMap,d.set(Re,ve));let we=ve.get(X);we===void 0&&(we=s.getUniformBlockIndex(Re,X.name),ve.set(X,we))}function je(X,Re){const we=d.get(Re).get(X);m.get(Re)!==we&&(s.uniformBlockBinding(Re,we,X.__bindingPointIndex),m.set(Re,we))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},_={},be=null,U={},g={},y=new WeakMap,T=[],w=null,E=!1,S=null,I=null,H=null,C=null,F=null,L=null,O=null,b=new bt(0,0,0),N=0,Y=!1,G=null,J=null,pe=null,xe=null,j=null,Te.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:ge,disable:Pe,bindFramebuffer:nt,drawBuffers:Je,useProgram:qt,setBlending:St,setMaterial:ht,setFlipSided:tn,setCullFace:nn,setLineWidth:an,setPolygonOffset:ln,setScissorTest:Wt,activeTexture:rn,bindTexture:q,unbindTexture:Bt,compressedTexImage2D:wt,compressedTexImage3D:D,texImage2D:ue,texImage3D:de,pixelStorei:Be,getParameter:Ce,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Oe,viewport:Ue,reset:at}}function BT(s,e,i,r,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Et,x=new WeakMap,_=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,M){return T?new OffscreenCanvas(D,M):el("canvas")}function E(D,M,Q){let re=1;const he=wt(D);if((he.width>Q||he.height>Q)&&(re=Q/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ae=Math.floor(re*he.width),De=Math.floor(re*he.height);g===void 0&&(g=w(Ae,De));const ue=M?w(Ae,De):g;return ue.width=Ae,ue.height=De,ue.getContext("2d").drawImage(D,0,0,Ae,De),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+De+")."),ue}else return"data"in D&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function S(D){return D.generateMipmaps}function I(D){s.generateMipmap(D)}function H(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,M,Q,re,he,Ae=!1){if(D!==null){if(s[D]!==void 0)return s[D];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(Q===s.FLOAT&&(ue=s.R32F),Q===s.HALF_FLOAT&&(ue=s.R16F),Q===s.UNSIGNED_BYTE&&(ue=s.R8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.R16_EXT),Q===s.SHORT&&De&&(ue=De.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.R8UI),Q===s.UNSIGNED_SHORT&&(ue=s.R16UI),Q===s.UNSIGNED_INT&&(ue=s.R32UI),Q===s.BYTE&&(ue=s.R8I),Q===s.SHORT&&(ue=s.R16I),Q===s.INT&&(ue=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(ue=s.RG32F),Q===s.HALF_FLOAT&&(ue=s.RG16F),Q===s.UNSIGNED_BYTE&&(ue=s.RG8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.RG16_EXT),Q===s.SHORT&&De&&(ue=De.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),Q===s.UNSIGNED_INT&&(ue=s.RG32UI),Q===s.BYTE&&(ue=s.RG8I),Q===s.SHORT&&(ue=s.RG16I),Q===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),Q===s.UNSIGNED_INT&&(ue=s.RGB32UI),Q===s.BYTE&&(ue=s.RGB8I),Q===s.SHORT&&(ue=s.RGB16I),Q===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),Q===s.BYTE&&(ue=s.RGBA8I),Q===s.SHORT&&(ue=s.RGBA16I),Q===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_SHORT&&De&&(ue=De.RGB16_EXT),Q===s.SHORT&&De&&(ue=De.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const de=Ae?Kc:yt.getTransfer(he);Q===s.FLOAT&&(ue=s.RGBA32F),Q===s.HALF_FLOAT&&(ue=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ue=de===zt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&De&&(ue=De.RGBA16_EXT),Q===s.SHORT&&De&&(ue=De.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function F(D,M){let Q;return D?M===null||M===Yi||M===jo?Q=s.DEPTH24_STENCIL8:M===Xi?Q=s.DEPTH32F_STENCIL8:M===Jo&&(Q=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===jo?Q=s.DEPTH_COMPONENT24:M===Xi?Q=s.DEPTH_COMPONENT32F:M===Jo&&(Q=s.DEPTH_COMPONENT16),Q}function L(D,M){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function O(D){const M=D.target;M.removeEventListener("dispose",O),N(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&_.delete(M)}function b(D){const M=D.target;M.removeEventListener("dispose",b),G(M)}function N(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Q=D.source,re=y.get(Q);if(re){const he=re[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&Y(D),Object.keys(re).length===0&&y.delete(Q)}r.remove(D)}function Y(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const Q=D.source,re=y.get(Q);delete re[M.__cacheKey],h.memory.textures--}function G(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let he=0;he<M.__webglFramebuffer[re].length;he++)s.deleteFramebuffer(M.__webglFramebuffer[re][he]);else s.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)s.deleteFramebuffer(M.__webglFramebuffer[re]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=D.textures;for(let re=0,he=Q.length;re<he;re++){const Ae=r.get(Q[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),h.memory.textures--),r.remove(Q[re])}r.remove(D)}let J=0;function pe(){J=0}function xe(){return J}function j(D){J=D}function P(){const D=J;return D>=l.maxTextures&&it("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),J+=1,D}function B(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function $(D,M){const Q=r.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const re=D.image;if(re===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Q,D,M);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function _e(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Pe(Q,D,M);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function be(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Pe(Q,D,M);return}i.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function U(D,M){const Q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){nt(Q,D,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const Z={[nd]:s.REPEAT,[xa]:s.CLAMP_TO_EDGE,[id]:s.MIRRORED_REPEAT},Ee={[wn]:s.NEAREST,[FS]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},Te={[BS]:s.NEVER,[kS]:s.ALWAYS,[HS]:s.LESS,[qd]:s.LEQUAL,[GS]:s.EQUAL,[Yd]:s.GEQUAL,[VS]:s.GREATER,[XS]:s.NOTEQUAL};function Ne(D,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===mh||M.magFilter===mc||M.magFilter===Or||M.minFilter===Pn||M.minFilter===mh||M.minFilter===mc||M.minFilter===Or)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Z[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Z[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Z[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ee[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==mc&&M.minFilter!==Or||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function W(D,M){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",O));const re=M.source;let he=y.get(re);he===void 0&&(he={},y.set(re,he));const Ae=B(M);if(Ae!==D.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),he[Ae].usedTimes++;const De=he[D.__cacheKey];De!==void 0&&(he[D.__cacheKey].usedTimes--,De.usedTimes===0&&Y(M)),D.__cacheKey=Ae,D.__webglTexture=he[Ae].texture}return Q}function fe(D,M,Q){return Math.floor(Math.floor(D/Q)/M)}function ge(D,M,Q,re){const Ae=D.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,re,M.data);else{Ae.sort((Be,Oe)=>Be.start-Oe.start);let De=0;for(let Be=1;Be<Ae.length;Be++){const Oe=Ae[De],Ue=Ae[Be],Qe=Oe.start+Oe.count,je=fe(Ue.start,M.width,4),at=fe(Oe.start,M.width,4);Ue.start<=Qe+1&&je===at&&fe(Ue.start+Ue.count-1,M.width,4)===je?Oe.count=Math.max(Oe.count,Ue.start+Ue.count-Oe.start):(++De,Ae[De]=Ue)}Ae.length=De+1;const ue=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Be=0,Oe=Ae.length;Be<Oe;Be++){const Ue=Ae[Be],Qe=Math.floor(Ue.start/4),je=Math.ceil(Ue.count/4),at=Qe%M.width,X=Math.floor(Qe/M.width),Re=je,ve=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,at,X,Re,ve,Q,re,M.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ue),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function Pe(D,M,Q){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);const he=W(D,M),Ae=M.source;i.bindTexture(re,D.__webglTexture,s.TEXTURE0+Q);const De=r.get(Ae);if(Ae.version!==De.__version||he===!0){if(i.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=yt.getPrimaries(yt.workingColorSpace),we=M.colorSpace===ir?null:yt.getPrimaries(M.colorSpace),ze=M.colorSpace===ir||ve===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let de=E(M.image,!1,l.maxTextureSize);de=Bt(M,de);const Ce=c.convert(M.format,M.colorSpace),Be=c.convert(M.type);let Oe=C(M.internalFormat,Ce,Be,M.normalized,M.colorSpace,M.isVideoTexture);Ne(re,M);let Ue;const Qe=M.mipmaps,je=M.isVideoTexture!==!0,at=De.__version===void 0||he===!0,X=Ae.dataReady,Re=L(M,de);if(M.isDepthTexture)Oe=F(M.format===Pr,M.type),at&&(je?i.texStorage2D(s.TEXTURE_2D,1,Oe,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Oe,de.width,de.height,0,Ce,Be,null));else if(M.isDataTexture)if(Qe.length>0){je&&at&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,Qe[0].width,Qe[0].height);for(let ve=0,we=Qe.length;ve<we;ve++)Ue=Qe[ve],je?X&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,Be,Ue.data);M.generateMipmaps=!1}else je?(at&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,de.width,de.height),X&&ge(M,de,Ce,Be)):i.texImage2D(s.TEXTURE_2D,0,Oe,de.width,de.height,0,Ce,Be,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,Qe[0].width,Qe[0].height,de.depth);for(let ve=0,we=Qe.length;ve<we;ve++)if(Ue=Qe[ve],M.format!==Ui)if(Ce!==null)if(je){if(X)if(M.layerUpdates.size>0){const ze=R_(Ue.width,Ue.height,M.format,M.type);for(const ye of M.layerUpdates){const Ye=Ue.data.subarray(ye*ze/Ue.data.BYTES_PER_ELEMENT,(ye+1)*ze/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,ye,Ue.width,Ue.height,1,Ce,Ye)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,de.depth,Ce,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,de.depth,Ce,Be,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ve,Oe,Ue.width,Ue.height,de.depth,0,Ce,Be,Ue.data)}else{je&&at&&i.texStorage2D(s.TEXTURE_2D,Re,Oe,Qe[0].width,Qe[0].height);for(let ve=0,we=Qe.length;ve<we;ve++)Ue=Qe[ve],M.format!==Ui?Ce!==null?je?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?X&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Ce,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ue.width,Ue.height,0,Ce,Be,Ue.data)}else if(M.isDataArrayTexture)if(je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Oe,de.width,de.height,de.depth),X)if(M.layerUpdates.size>0){const ve=R_(de.width,de.height,M.format,M.type);for(const we of M.layerUpdates){const ze=de.data.subarray(we*ve/de.data.BYTES_PER_ELEMENT,(we+1)*ve/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Ce,Be,ze)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,Be,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Ce,Be,de.data);else if(M.isData3DTexture)je?(at&&i.texStorage3D(s.TEXTURE_3D,Re,Oe,de.width,de.height,de.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,Be,de.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Ce,Be,de.data);else if(M.isFramebufferTexture){if(at)if(je)i.texStorage2D(s.TEXTURE_2D,Re,Oe,de.width,de.height);else{let ve=de.width,we=de.height;for(let ze=0;ze<Re;ze++)i.texImage2D(s.TEXTURE_2D,ze,Oe,ve,we,0,Ce,Be,null),ve>>=1,we>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),de.parentNode!==ve){ve.appendChild(de),_.add(M),ve.onpaint=we=>{const ze=we.changedElements;for(const ye of _)ze.includes(ye.image)&&(ye.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const ze=s.RGBA,ye=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,ye,Ye,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&at){const ve=wt(Qe[0]);i.texStorage2D(s.TEXTURE_2D,Re,Oe,ve.width,ve.height)}for(let ve=0,we=Qe.length;ve<we;ve++)Ue=Qe[ve],je?X&&i.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce,Be,Ue):i.texImage2D(s.TEXTURE_2D,ve,Oe,Ce,Be,Ue);M.generateMipmaps=!1}else if(je){if(at){const ve=wt(de);i.texStorage2D(s.TEXTURE_2D,Re,Oe,ve.width,ve.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Be,de)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Ce,Be,de);S(M)&&I(re),De.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function nt(D,M,Q){if(M.image.length!==6)return;const re=W(D,M),he=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const Ae=r.get(he);if(he.version!==Ae.__version||re===!0){i.activeTexture(s.TEXTURE0+Q);const De=yt.getPrimaries(yt.workingColorSpace),ue=M.colorSpace===ir?null:yt.getPrimaries(M.colorSpace),de=M.colorSpace===ir||De===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ye=0;ye<6;ye++)!Ce&&!Be?Oe[ye]=E(M.image[ye],!0,l.maxCubemapSize):Oe[ye]=Be?M.image[ye].image:M.image[ye],Oe[ye]=Bt(M,Oe[ye]);const Ue=Oe[0],Qe=c.convert(M.format,M.colorSpace),je=c.convert(M.type),at=C(M.internalFormat,Qe,je,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Re=Ae.__version===void 0||re===!0,ve=he.dataReady;let we=L(M,Ue);Ne(s.TEXTURE_CUBE_MAP,M);let ze;if(Ce){X&&Re&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,Ue.width,Ue.height);for(let ye=0;ye<6;ye++){ze=Oe[ye].mipmaps;for(let Ye=0;Ye<ze.length;Ye++){const Ve=ze[Ye];M.format!==Ui?Qe!==null?X?ve&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ve.width,Ve.height,Qe,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,at,Ve.width,Ve.height,0,Ve.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ve.width,Ve.height,Qe,je,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,at,Ve.width,Ve.height,0,Qe,je,Ve.data)}}}else{if(ze=M.mipmaps,X&&Re){ze.length>0&&we++;const ye=wt(Oe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){X?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe[ye].width,Oe[ye].height,Qe,je,Oe[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Oe[ye].width,Oe[ye].height,0,Qe,je,Oe[ye].data);for(let Ye=0;Ye<ze.length;Ye++){const Kt=ze[Ye].image[ye].image;X?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Kt.width,Kt.height,Qe,je,Kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,at,Kt.width,Kt.height,0,Qe,je,Kt.data)}}else{X?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Qe,je,Oe[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Qe,je,Oe[ye]);for(let Ye=0;Ye<ze.length;Ye++){const Ve=ze[Ye];X?ve&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Qe,je,Ve.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,at,Qe,je,Ve.image[ye])}}}S(M)&&I(s.TEXTURE_CUBE_MAP),Ae.__version=he.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Je(D,M,Q,re,he,Ae){const De=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),de=C(Q.internalFormat,De,ue,Q.normalized,Q.colorSpace),Ce=r.get(M),Be=r.get(Q);if(Be.__renderTarget=M,!Ce.__hasExternalTextures){const Oe=Math.max(1,M.width>>Ae),Ue=Math.max(1,M.height>>Ae);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,Ae,de,Oe,Ue,M.depth,0,De,ue,null):i.texImage2D(he,Ae,de,Oe,Ue,0,De,ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),rn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,he,Be.__webglTexture,0,Wt(M)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,he,Be.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(D,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const re=M.depthTexture,he=re&&re.isDepthTexture?re.type:null,Ae=F(M.stencilBuffer,he),De=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rn(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),Ae,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),Ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,D)}else{const re=M.textures;for(let he=0;he<re.length;he++){const Ae=re[he],De=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),de=C(Ae.internalFormat,De,ue,Ae.normalized,Ae.colorSpace);rn(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),de,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(D,M,Q){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=c.convert(M.depthTexture.format),Be=c.convert(M.depthTexture.type);let Oe;M.depthTexture.format===Ea?Oe=s.DEPTH_COMPONENT24:M.depthTexture.format===Pr&&(Oe=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Oe,M.width,M.height,0,Ce,Be,null)}}else $(M.depthTexture,0);const Ae=he.__webglTexture,De=Wt(M),ue=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,de=M.depthTexture.format===Pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ea)rn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Ae,0);else if(M.depthTexture.format===Pr)rn(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(D){const M=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=re}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let re=0;re<6;re++)ft(M.__webglFramebuffer[re],D,re);else{const re=D.texture.mipmaps;re&&re.length>0?ft(M.__webglFramebuffer[0],D,0):ft(M.__webglFramebuffer,D,0)}else if(Q){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),qt(M.__webglDepthbuffer[re],D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}}else{const re=D.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),qt(M.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function St(D,M,Q){const re=r.get(D);M!==void 0&&Je(re.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&xt(D)}function ht(D){const M=D.texture,Q=r.get(D),re=r.get(M);D.addEventListener("dispose",b);const he=D.textures,Ae=D.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,h.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let de=0;de<M.mipmaps.length;de++)Q.__webglFramebuffer[ue][de]=s.createFramebuffer()}else Q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(De)for(let ue=0,de=he.length;ue<de;ue++){const Ce=r.get(he[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&rn(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<he.length;ue++){const de=he[ue];Q.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Ce=c.convert(de.format,de.colorSpace),Be=c.convert(de.type),Oe=C(de.internalFormat,Ce,Be,de.normalized,de.colorSpace,D.isXRRenderTarget===!0),Ue=Wt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Je(Q.__webglFramebuffer[ue][de],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Je(Q.__webglFramebuffer[ue],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M)&&I(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ue=0,de=he.length;ue<de;ue++){const Ce=he[ue],Be=r.get(Ce);let Oe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Oe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Be.__webglTexture),Ne(Oe,Ce),Je(Q.__webglFramebuffer,D,Ce,s.COLOR_ATTACHMENT0+ue,Oe,0),S(Ce)&&I(Oe)}i.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ue,re.__webglTexture),Ne(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Je(Q.__webglFramebuffer[de],D,M,s.COLOR_ATTACHMENT0,ue,de);else Je(Q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,ue,0);S(M)&&I(ue),i.unbindTexture()}D.depthBuffer&&xt(D)}function tn(D){const M=D.textures;for(let Q=0,re=M.length;Q<re;Q++){const he=M[Q];if(S(he)){const Ae=H(D),De=r.get(he).__webglTexture;i.bindTexture(Ae,De),I(Ae),i.unbindTexture()}}}const nn=[],an=[];function ln(D){if(D.samples>0){if(rn(D)===!1){const M=D.textures,Q=D.width,re=D.height;let he=s.COLOR_BUFFER_BIT;const Ae=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(D),ue=M.length>1;if(ue)for(let Ce=0;Ce<M.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=D.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const Be=r.get(M[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,Q,re,0,0,Q,re,he,s.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(s.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nn.push(Ae),an.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,an)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<M.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);const Be=r.get(M[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(D){return Math.min(l.maxSamples,D.samples)}function rn(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(D){const M=h.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function Bt(D,M){const Q=D.colorSpace,re=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Zc&&Q!==ir&&(yt.getTransfer(Q)===zt?(re!==Ui||he!==ci)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Q)),M}function wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=P,this.resetTextureUnits=pe,this.getTextureUnits=xe,this.setTextureUnits=j,this.setTexture2D=$,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=U,this.rebindTextures=St,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function HT(s,e){function i(r,l=ir){let c;const h=yt.getTransfer(l);if(r===ci)return s.UNSIGNED_BYTE;if(r===Gd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===mv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===dv)return s.BYTE;if(r===pv)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===Hd)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===ya)return s.HALF_FLOAT;if(r===_v)return s.ALPHA;if(r===vv)return s.RGB;if(r===Ui)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Pr)return s.DEPTH_STENCIL;if(r===xv)return s.RED;if(r===Xd)return s.RED_INTEGER;if(r===Ir)return s.RG;if(r===kd)return s.RG_INTEGER;if(r===Wd)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===Xc||r===kc)if(h===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ad||r===rd||r===sd||r===od)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ld||r===cd||r===ud||r===fd||r===hd||r===qc||r===dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ld||r===cd)return h===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ud)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===fd)return c.COMPRESSED_R11_EAC;if(r===hd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return c.COMPRESSED_RG11_EAC;if(r===dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===Md||r===yd||r===Ed||r===bd||r===Td||r===Ad||r===Rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return h===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cd||r===wd||r===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cd)return h===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ud||r===Ld||r===Yc||r===Nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ud)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new wv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Zi({vertexShader:GT,fragmentShader:VT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends Br{constructor(e,i){super();const r=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,x=null,_=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",E=new XT,S={},I=i.getContextAttributes();let H=null,C=null;const F=[],L=[],O=new Et;let b=null;const N=new Si;N.viewport=new $t;const Y=new Si;Y.viewport=new $t;const G=[N,Y],J=new $M;let pe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let fe=F[W];return fe===void 0&&(fe=new Mh,F[W]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(W){let fe=F[W];return fe===void 0&&(fe=new Mh,F[W]=fe),fe.getGripSpace()},this.getHand=function(W){let fe=F[W];return fe===void 0&&(fe=new Mh,F[W]=fe),fe.getHandSpace()};function j(W){const fe=L.indexOf(W.inputSource);if(fe===-1)return;const ge=F[fe];ge!==void 0&&(ge.update(W.inputSource,W.frame,d||h),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let W=0;W<F.length;W++){const fe=L[W];fe!==null&&(L[W]=null,F[W].disconnect(fe))}pe=null,xe=null,E.reset();for(const W in S)delete S[W];e.setRenderTarget(H),y=null,g=null,_=null,l=null,C=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){p=W,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),I.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Pe=null,nt=null;I.depth&&(nt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=I.stencil?Pr:Ea,Pe=I.stencil?jo:Yi);const Je={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new qi(g.textureWidth,g.textureHeight,{format:Ui,type:ci,depthTexture:new Hs(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ge),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new qi(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ne.setContext(l),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function B(W){for(let fe=0;fe<W.removed.length;fe++){const ge=W.removed[fe],Pe=L.indexOf(ge);Pe>=0&&(L[Pe]=null,F[Pe].disconnect(ge))}for(let fe=0;fe<W.added.length;fe++){const ge=W.added[fe];let Pe=L.indexOf(ge);if(Pe===-1){for(let Je=0;Je<F.length;Je++)if(Je>=L.length){L.push(ge),Pe=Je;break}else if(L[Je]===null){L[Je]=ge,Pe=Je;break}if(Pe===-1)break}const nt=F[Pe];nt&&nt.connect(ge)}}const $=new ae,_e=new ae;function be(W,fe,ge){$.setFromMatrixPosition(fe.matrixWorld),_e.setFromMatrixPosition(ge.matrixWorld);const Pe=$.distanceTo(_e),nt=fe.projectionMatrix.elements,Je=ge.projectionMatrix.elements,qt=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),xt=(nt[9]+1)/nt[5],St=(nt[9]-1)/nt[5],ht=(nt[8]-1)/nt[0],tn=(Je[8]+1)/Je[0],nn=qt*ht,an=qt*tn,ln=Pe/(-ht+tn),Wt=ln*-ht;if(fe.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Wt),W.translateZ(ln),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),nt[10]===-1)W.projectionMatrix.copy(fe.projectionMatrix),W.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const rn=qt+ln,q=ft+ln,Bt=nn-Wt,wt=an+(Pe-Wt),D=xt*ft/q*rn,M=St*ft/q*rn;W.projectionMatrix.makePerspective(Bt,wt,D,M,rn,q),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function U(W,fe){fe===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(fe.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let fe=W.near,ge=W.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),J.near=Y.near=N.near=fe,J.far=Y.far=N.far=ge,(pe!==J.near||xe!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),pe=J.near,xe=J.far),J.layers.mask=W.layers.mask|6,N.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;const Pe=W.parent,nt=J.cameras;U(J,Pe);for(let Je=0;Je<nt.length;Je++)U(nt[Je],Pe);nt.length===2?be(J,N,Y):J.projectionMatrix.copy(N.projectionMatrix),Z(W,J,Pe)};function Z(W,fe,ge){ge===null?W.matrix.copy(fe.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(fe.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(fe.projectionMatrix),W.projectionMatrixInverse.copy(fe.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=tl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(W){m=W,g!==null&&(g.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(J)},this.getCameraTexture=function(W){return S[W]};let Ee=null;function Te(W,fe){if(x=fe.getViewerPose(d||h),T=fe,x!==null){const ge=x.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Pe=!1;ge.length!==J.cameras.length&&(J.cameras.length=0,Pe=!0);for(let ft=0;ft<ge.length;ft++){const xt=ge[ft];let St=null;if(y!==null)St=y.getViewport(xt);else{const tn=_.getViewSubImage(g,xt);St=tn.viewport,ft===0&&(e.setRenderTargetTextures(C,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(C))}let ht=G[ft];ht===void 0&&(ht=new Si,ht.layers.enable(ft),ht.viewport=new $t,G[ft]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(St.x,St.y,St.width,St.height),ft===0&&(J.matrix.copy(ht.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Pe===!0&&J.cameras.push(ht)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const ft=_.getDepthInformation(ge[0]);ft&&ft.isValid&&ft.texture&&E.init(ft,l.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let ft=0;ft<ge.length;ft++){const xt=ge[ft].camera;if(xt){let St=S[xt];St||(St=new wv,S[xt]=St);const ht=_.getCameraImage(xt);St.sourceTexture=ht}}}}for(let ge=0;ge<F.length;ge++){const Pe=L[ge],nt=F[ge];Pe!==null&&nt!==void 0&&nt.update(Pe,fe,d||h)}Ee&&Ee(W,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const Ne=new Nv;Ne.setAnimationLoop(Te),this.setAnimationLoop=function(W){Ee=W},this.dispose=function(){}}}const WT=new en,Hv=new st;Hv.set(-1,0,0,0,1,0,0,0,1);function qT(s,e){function i(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function r(E,S){S.color.getRGB(E.fogColor.value,Dv(s)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function l(E,S,I,H,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(E,S):S.isMeshLambertMaterial?(c(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(E,S),_(E,S)):S.isMeshPhongMaterial?(c(E,S),x(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(E,S),g(E,S),S.isMeshPhysicalMaterial&&y(E,S,C)):S.isMeshMatcapMaterial?(c(E,S),T(E,S)):S.isMeshDepthMaterial?c(E,S):S.isMeshDistanceMaterial?(c(E,S),w(E,S)):S.isMeshNormalMaterial?c(E,S):S.isLineBasicMaterial?(h(E,S),S.isLineDashedMaterial&&p(E,S)):S.isPointsMaterial?m(E,S,I,H):S.isSpriteMaterial?d(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,i(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===Hn&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,i(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===Hn&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,i(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,i(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const I=e.get(S),H=I.envMap,C=I.envMapRotation;H&&(E.envMap.value=H,E.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(Hv),E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,E.aoMapTransform))}function h(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform))}function p(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function m(E,S,I,H){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*I,E.scale.value=H*.5,S.map&&(E.map.value=S.map,i(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function d(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,i(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,i(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function x(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function _(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function g(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function y(E,S,I){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Hn&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=I.texture,E.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,S){S.matcap&&(E.matcap.value=S.matcap)}function w(E,S){const I=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(I.matrixWorld),E.nearDistance.value=I.shadow.camera.near,E.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function YT(s,e,i,r){let l={},c={},h=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,F){const L=F.program;r.uniformBlockBinding(C,L)}function d(C,F){let L=l[C.id];L===void 0&&(E(C),L=x(C),l[C.id]=L,C.addEventListener("dispose",I));const O=F.program;r.updateUBOMapping(C,O);const b=e.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function x(C){const F=_();C.__bindingPointIndex=F;const L=s.createBuffer(),O=C.__size,b=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,O,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,L),L}function _(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const F=l[C.id],L=C.uniforms,O=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let b=0,N=L.length;b<N;b++){const Y=L[b];if(Array.isArray(Y))for(let G=0,J=Y.length;G<J;G++)y(Y[G],b,G,O);else y(Y,b,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,F,L,O){if(w(C,F,L,O)===!0){const b=C.__offset,N=C.value;if(Array.isArray(N)){let Y=0;for(let G=0;G<N.length;G++){const J=N[G],pe=S(J);T(J,C.__data,Y),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(Y+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,C.__data)}}function T(C,F,L){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,L)}function w(C,F,L,O){const b=C.value,N=F+"_"+L;if(O[N]===void 0)return typeof b=="number"||typeof b=="boolean"?O[N]=b:ArrayBuffer.isView(b)?O[N]=b.slice():O[N]=b.clone(),!0;{const Y=O[N];if(typeof b=="number"||typeof b=="boolean"){if(Y!==b)return O[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(Y.equals(b)===!1)return Y.copy(b),!0}}return!1}function E(C){const F=C.uniforms;let L=0;const O=16;for(let N=0,Y=F.length;N<Y;N++){const G=Array.isArray(F[N])?F[N]:[F[N]];for(let J=0,pe=G.length;J<pe;J++){const xe=G[J],j=Array.isArray(xe.value)?xe.value:[xe.value];for(let P=0,B=j.length;P<B;P++){const $=j[P],_e=S($),be=L%O,U=be%_e.boundary,Z=be+U;L+=U,Z!==0&&O-Z<_e.storage&&(L+=O-Z),xe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),xe.__offset=L,L+=_e.storage}}}const b=L%O;return b>0&&(L+=O-b),C.__size=L,C.__cache={},this}function S(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),F}function I(C){const F=C.target;F.removeEventListener("dispose",I);const L=h.indexOf(F.__bindingPointIndex);h.splice(L,1),s.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function H(){for(const C in l)s.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const ZT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function KT(){return Hi===null&&(Hi=new UM(ZT,16,16,Ir,ya),Hi.name="DFG_LUT",Hi.minFilter=Pn,Hi.magFilter=Pn,Hi.wrapS=xa,Hi.wrapT=xa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class QT{constructor(e={}){const{canvas:i=qS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ci}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const w=y,E=new Set([Wd,kd,Xd]),S=new Set([ci,Yi,Jo,jo,Gd,Vd]),I=new Uint32Array(4),H=new Int32Array(4),C=new ae;let F=null,L=null;const O=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,J=null,pe=null,xe=null,j=null;this._outputColorSpace=Kn;let P=0,B=0,$=null,_e=-1,be=null;const U=new $t,Z=new $t;let Ee=null;const Te=new bt(0);let Ne=0,W=i.width,fe=i.height,ge=1,Pe=null,nt=null;const Je=new $t(0,0,W,fe),qt=new $t(0,0,W,fe);let ft=!1;const xt=new Qd;let St=!1,ht=!1;const tn=new en,nn=new ae,an=new $t,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function rn(){return $===null?ge:1}let q=r;function Bt(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),q===null){const k="webgl2";if(q=Bt(k,A),q===null)throw Bt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let wt,D,M,Q,re,he,Ae,De,ue,de,Ce,Be,Oe,Ue,Qe,je,at,X,Re,ve,we,ze,ye;function Ye(){wt=new K2(q),wt.init(),we=new HT(q,wt),D=new G2(q,wt,e,we),M=new zT(q,wt),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),pe=q.createFramebuffer(),xe=q.createFramebuffer(),j=q.createFramebuffer(),Q=new j2(q),re=new bT,he=new BT(q,wt,M,re,D,we,Q),Ae=new Z2(Y),De=new ny(q),ze=new B2(q,De),ue=new Q2(q,De,Q,ze),de=new eb(q,ue,De,ze,Q),X=new $2(q,D,he),Qe=new V2(re),Ce=new ET(Y,Ae,wt,D,ze,Qe),Be=new qT(Y,re),Oe=new AT,Ue=new LT(wt),at=new z2(Y,Ae,M,de,T,m),je=new IT(Y,de,D),ye=new YT(q,Q,D,M),Re=new H2(q,wt,Q),ve=new J2(q,wt,Q),Q.programs=Ce.programs,Y.capabilities=D,Y.extensions=wt,Y.properties=re,Y.renderLists=Oe,Y.shadowMap=je,Y.state=M,Y.info=Q}Ye(),w!==ci&&(N=new nb(w,i.width,i.height,p,l,c));const Ve=new kT(Y,q);this.xr=Ve,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(A){A!==void 0&&(ge=A,this.setSize(W,fe,!1))},this.getSize=function(A){return A.set(W,fe)},this.setSize=function(A,k,se=!0){if(Ve.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,fe=k,i.width=Math.floor(A*ge),i.height=Math.floor(k*ge),se===!0&&(i.style.width=A+"px",i.style.height=k+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(W*ge,fe*ge).floor()},this.setDrawingBufferSize=function(A,k,se){W=A,fe=k,ge=se,i.width=Math.floor(A*se),i.height=Math.floor(k*se),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===ci){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,k,se,ne){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,k,se,ne),M.viewport(U.copy(Je).multiplyScalar(ge).round())},this.getScissor=function(A){return A.copy(qt)},this.setScissor=function(A,k,se,ne){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,k,se,ne),M.scissor(Z.copy(qt).multiplyScalar(ge).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){M.setScissorTest(ft=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,se=!0){let ne=0;if(A){let ie=!1;if($!==null){const Fe=$.texture.format;ie=E.has(Fe)}if(ie){const Fe=$.texture.type,Ge=S.has(Fe),Le=at.getClearColor(),ke=at.getClearAlpha(),Xe=Le.r,$e=Le.g,ot=Le.b;Ge?(I[0]=Xe,I[1]=$e,I[2]=ot,I[3]=ke,q.clearBufferuiv(q.COLOR,0,I)):(H[0]=Xe,H[1]=$e,H[2]=ot,H[3]=ke,q.clearBufferiv(q.COLOR,0,H))}else ne|=q.COLOR_BUFFER_BIT}k&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),at.dispose(),Oe.dispose(),Ue.dispose(),re.dispose(),Ae.dispose(),de.dispose(),ze.dispose(),ye.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",fn),Ve.removeEventListener("sessionend",bn),Vn.stop()};function Kt(A){A.preventDefault(),t_("WebGLRenderer: Context Lost."),G=!0}function Lt(){t_("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,k=je.enabled,se=je.autoUpdate,ne=je.needsUpdate,ie=je.type;Ye(),Q.autoReset=A,je.enabled=k,je.autoUpdate=se,je.needsUpdate=ne,je.type=ie}function Qn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const k=A.target;k.removeEventListener("dispose",Jn),qs(k)}function qs(A){Ys(A),re.remove(A)}function Ys(A){const k=re.get(A).programs;k!==void 0&&(k.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,se,ne,ie,Fe){k===null&&(k=ln);const Ge=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Le=Aa(A,k,se,ne,ie);M.setMaterial(ne,Ge);let ke=se.index,Xe=1;if(ne.wireframe===!0){if(ke=ue.getWireframeAttribute(se),ke===void 0)return;Xe=2}const $e=se.drawRange,ot=se.attributes.position;let Ke=$e.start*Xe,At=($e.start+$e.count)*Xe;Fe!==null&&(Ke=Math.max(Ke,Fe.start*Xe),At=Math.min(At,(Fe.start+Fe.count)*Xe)),ke!==null?(Ke=Math.max(Ke,0),At=Math.min(At,ke.count)):ot!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,ot.count));const Qt=At-Ke;if(Qt<0||Qt===1/0)return;ze.setup(ie,ne,Le,se,ke);let Xt,Nt=Re;if(ke!==null&&(Xt=De.get(ke),Nt=ve,Nt.setIndex(Xt)),ie.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*rn()),Nt.setMode(q.LINES)):Nt.setMode(q.TRIANGLES);else if(ie.isLine){let Ot=ne.linewidth;Ot===void 0&&(Ot=1),M.setLineWidth(Ot*rn()),ie.isLineSegments?Nt.setMode(q.LINES):ie.isLineLoop?Nt.setMode(q.LINE_LOOP):Nt.setMode(q.LINE_STRIP)}else ie.isPoints?Nt.setMode(q.POINTS):ie.isSprite&&Nt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ot=ie._multiDrawStarts,He=ie._multiDrawCounts,Un=ie._multiDrawCount,dt=ke?De.get(ke).bytesPerElement:1,vn=re.get(ne).currentProgram.getUniforms();for(let jn=0;jn<Un;jn++)vn.setValue(q,"_gl_DrawID",jn),Nt.render(Ot[jn]/dt,He[jn])}else if(ie.isInstancedMesh)Nt.renderInstances(Ke,Qt,ie.count);else if(se.isInstancedBufferGeometry){const Ot=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,Ot);Nt.renderInstances(Ke,Qt,He)}else Nt.render(Ke,Qt)};function Zs(A,k,se){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ta(A,k,se),A.side=rr,A.needsUpdate=!0,Ta(A,k,se),A.side=Vi):Ta(A,k,se)}this.compile=function(A,k,se=null){se===null&&(se=A),L=Ue.get(se),L.init(k),b.push(L),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(k.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==se&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(k.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Fe=ie.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Le=Fe[Ge];Zs(Le,se,ie),ne.add(Le)}else Zs(Fe,se,ie),ne.add(Fe)}),L=b.pop(),ne},this.compileAsync=function(A,k,se=null){const ne=this.compile(A,k,se);return new Promise(ie=>{function Fe(){if(ne.forEach(function(Ge){re.get(Ge).currentProgram.isReady()&&ne.delete(Ge)}),ne.size===0){ie(A);return}setTimeout(Fe,10)}wt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Hr=null;function Ni(A){Hr&&Hr(A)}function fn(){Vn.stop()}function bn(){Vn.start()}const Vn=new Nv;Vn.setAnimationLoop(Ni),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Hr=A,Ve.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},Ve.addEventListener("sessionstart",fn),Ve.addEventListener("sessionend",bn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(A,k);const se=Ve.enabled===!0&&Ve.isPresenting===!0,ne=N!==null&&($===null||se)&&N.begin(Y,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(k),k=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,k,$),L=Ue.get(A,b.length),L.init(k),L.state.textureUnits=he.getTextureUnits(),b.push(L),tn.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),xt.setFromProjectionMatrix(tn,ki,k.reversedDepth),ht=this.localClippingEnabled,St=Qe.init(this.clippingPlanes,ht),F=Oe.get(A,O.length),F.init(),O.push(F),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=Y.xr.getDepthSensingMesh();Ge!==null&&or(Ge,k,-1/0,Y.sortObjects)}or(A,k,0,Y.sortObjects),F.finish(),Y.sortObjects===!0&&F.sort(Pe,nt,k.reversedDepth),Wt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Wt&&at.addToRenderList(F,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&Qe.beginShadows();const ie=L.state.shadowsArray;if(je.render(ie,A,k),St===!0&&Qe.endShadows(),(ne&&N.hasRenderPass())===!1){const Ge=F.opaque,Le=F.transmissive;if(L.setupLights(),k.isArrayCamera){const ke=k.cameras;if(Le.length>0)for(let Xe=0,$e=ke.length;Xe<$e;Xe++){const ot=ke[Xe];rl(Ge,Le,A,ot)}Wt&&at.render(A);for(let Xe=0,$e=ke.length;Xe<$e;Xe++){const ot=ke[Xe];al(F,A,ot,ot.viewport)}}else Le.length>0&&rl(Ge,Le,A,k),Wt&&at.render(A),al(F,A,k)}$!==null&&B===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),ne&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,k),ze.resetDefaultState(),_e=-1,be=null,b.pop(),b.length>0?(L=b[b.length-1],he.setTextureUnits(L.state.textureUnits),St===!0&&Qe.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,J!==null&&J.renderEnd()};function or(A,k,se,ne){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){ne&&an.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tn);const Ge=de.update(A),Le=A.material;Le.visible&&F.push(A,Ge,Le,se,an.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ge=de.update(A),Le=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),an.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),an.copy(Ge.boundingSphere.center)),an.applyMatrix4(A.matrixWorld).applyMatrix4(tn)),Array.isArray(Le)){const ke=Ge.groups;for(let Xe=0,$e=ke.length;Xe<$e;Xe++){const ot=ke[Xe],Ke=Le[ot.materialIndex];Ke&&Ke.visible&&F.push(A,Ge,Ke,se,an.z,ot)}}else Le.visible&&F.push(A,Ge,Le,se,an.z,null)}}const Fe=A.children;for(let Ge=0,Le=Fe.length;Ge<Le;Ge++)or(Fe[Ge],k,se,ne)}function al(A,k,se,ne){const{opaque:ie,transmissive:Fe,transparent:Ge}=A;L.setupLightsView(se),St===!0&&Qe.setGlobalState(Y.clippingPlanes,se),ne&&M.viewport(U.copy(ne)),ie.length>0&&lr(ie,k,se),Fe.length>0&&lr(Fe,k,se),Ge.length>0&&lr(Ge,k,se),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function rl(A,k,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const Ke=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new qi(1,1,{generateMipmaps:!0,type:Ke?ya:ci,minFilter:Or,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ne.id],Ge=ne.viewport||U;Fe.setSize(Ge.z*Y.transmissionResolutionScale,Ge.w*Y.transmissionResolutionScale);const Le=Y.getRenderTarget(),ke=Y.getActiveCubeFace(),Xe=Y.getActiveMipmapLevel();Y.setRenderTarget(Fe),Y.getClearColor(Te),Ne=Y.getClearAlpha(),Ne<1&&Y.setClearColor(16777215,.5),Y.clear(),Wt&&at.render(se);const $e=Y.toneMapping;Y.toneMapping=Wi;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),St===!0&&Qe.setGlobalState(Y.clippingPlanes,ne),lr(A,se,ne),he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,Qt=k.length;At<Qt;At++){const Xt=k[At],{object:Nt,geometry:Ot,material:He,group:Un}=Xt;if(He.side===Vi&&Nt.layers.test(ne.layers)){const dt=He.side;He.side=Hn,He.needsUpdate=!0,ba(Nt,se,ne,Ot,He,Un),He.side=dt,He.needsUpdate=!0,Ke=!0}}Ke===!0&&(he.updateMultisampleRenderTarget(Fe),he.updateRenderTargetMipmap(Fe))}Y.setRenderTarget(Le,ke,Xe),Y.setClearColor(Te,Ne),ot!==void 0&&(ne.viewport=ot),Y.toneMapping=$e}function lr(A,k,se){const ne=k.isScene===!0?k.overrideMaterial:null;for(let ie=0,Fe=A.length;ie<Fe;ie++){const Ge=A[ie],{object:Le,geometry:ke,group:Xe}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Le.layers.test(se.layers)&&ba(Le,k,se,ke,$e,Xe)}}function ba(A,k,se,ne,ie,Fe){A.onBeforeRender(Y,k,se,ne,ie,Fe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(Y,k,se,ne,A,Fe),ie.transparent===!0&&ie.side===Vi&&ie.forceSinglePass===!1?(ie.side=Hn,ie.needsUpdate=!0,Y.renderBufferDirect(se,k,ne,ie,A,Fe),ie.side=rr,ie.needsUpdate=!0,Y.renderBufferDirect(se,k,ne,ie,A,Fe),ie.side=Vi):Y.renderBufferDirect(se,k,ne,ie,A,Fe),A.onAfterRender(Y,k,se,ne,ie,Fe)}function Ta(A,k,se){k.isScene!==!0&&(k=ln);const ne=re.get(A),ie=L.state.lights,Fe=L.state.shadowsArray,Ge=ie.state.version,Le=Ce.getParameters(A,ie.state,Fe,k,se,L.state.lightProbeGridArray),ke=Ce.getProgramCacheKey(Le);let Xe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ne.fog=k.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,$e),ne.envMapRotation=ne.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Jn),Xe=new Map,ne.programs=Xe);let ot=Xe.get(ke);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Ge)return Qi(A,Le),ot}else Le.uniforms=Ce.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,se,Le),A.onBeforeCompile(Le,Y),ot=Ce.acquireProgram(Le,ke),Xe.set(ke,ot),ne.uniforms=Le.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),Qi(A,Le),ne.needsLights=sl(A),ne.lightsStateVersion=Ge,ne.needsLights&&(Ke.ambientLightColor.value=ie.state.ambient,Ke.lightProbe.value=ie.state.probe,Ke.directionalLights.value=ie.state.directional,Ke.directionalLightShadows.value=ie.state.directionalShadow,Ke.spotLights.value=ie.state.spot,Ke.spotLightShadows.value=ie.state.spotShadow,Ke.rectAreaLights.value=ie.state.rectArea,Ke.ltc_1.value=ie.state.rectAreaLTC1,Ke.ltc_2.value=ie.state.rectAreaLTC2,Ke.pointLights.value=ie.state.point,Ke.pointLightShadows.value=ie.state.pointShadow,Ke.hemisphereLights.value=ie.state.hemi,Ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ie.state.spotLightMatrix,Ke.spotLightMap.value=ie.state.spotLightMap,Ke.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=ot,ne.uniformsList=null,ot}function Ki(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Qi(A,k){const se=re.get(A);se.outputColorSpace=k.outputColorSpace,se.batching=k.batching,se.batchingColor=k.batchingColor,se.instancing=k.instancing,se.instancingColor=k.instancingColor,se.instancingMorph=k.instancingMorph,se.skinning=k.skinning,se.morphTargets=k.morphTargets,se.morphNormals=k.morphNormals,se.morphColors=k.morphColors,se.morphTargetsCount=k.morphTargetsCount,se.numClippingPlanes=k.numClippingPlanes,se.numIntersection=k.numClipIntersection,se.vertexAlphas=k.vertexAlphas,se.vertexTangents=k.vertexTangents,se.toneMapping=k.toneMapping}function cr(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let se=0,ne=A.length;se<ne;se++){const ie=A[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function Aa(A,k,se,ne,ie){k.isScene!==!0&&(k=ln),he.resetTextureUnits();const Fe=k.fog,Ge=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?k.environment:null,Le=$===null?Y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:yt.workingColorSpace,ke=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=Ae.get(ne.envMap||Ge,ke),$e=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,Qt=!!se.morphAttributes.color;let Xt=Wi;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=Y.toneMapping);const Nt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=Nt!==void 0?Nt.length:0,He=re.get(ne),Un=L.state.lights;if(St===!0&&(ht===!0||A!==be)){const Ut=A===be&&ne.id===_e;Qe.setState(ne,A,Ut)}let dt=!1;ne.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Un.state.version||He.outputColorSpace!==Le||ie.isBatchedMesh&&He.batching===!1||!ie.isBatchedMesh&&He.batching===!0||ie.isBatchedMesh&&He.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&He.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||ie.isInstancedMesh&&He.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&He.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&He.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&He.instancingMorph===!1&&ie.morphTexture!==null||He.envMap!==Xe||ne.fog===!0&&He.fog!==Fe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Qe.numPlanes||He.numIntersection!==Qe.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==ot||He.morphTargets!==Ke||He.morphNormals!==At||He.morphColors!==Qt||He.toneMapping!==Xt||He.morphTargetsCount!==Ot||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,He.__version=ne.version);let vn=He.currentProgram;dt===!0&&(vn=Ta(ne,k,ie),J&&ne.isNodeMaterial&&J.onUpdateProgram(ne,vn,He));let jn=!1,yi=!1,$n=!1;const Pt=vn.getUniforms(),Jt=He.uniforms;if(M.useProgram(vn.program)&&(jn=!0,yi=!0,$n=!0),ne.id!==_e&&(_e=ne.id,yi=!0),He.needsLights){const Ut=cr(L.state.lightProbeGridArray,ie);He.lightProbeGrid!==Ut&&(He.lightProbeGrid=Ut,yi=!0)}if(jn||be!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(q,"projectionMatrix",A.projectionMatrix),Pt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Oi=Pt.map.cameraPosition;Oi!==void 0&&Oi.setValue(q,nn.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,yi=!0,$n=!0)}if(He.needsLights&&(Un.state.directionalShadowMap.length>0&&Pt.setValue(q,"directionalShadowMap",Un.state.directionalShadowMap,he),Un.state.spotShadowMap.length>0&&Pt.setValue(q,"spotShadowMap",Un.state.spotShadowMap,he),Un.state.pointShadowMap.length>0&&Pt.setValue(q,"pointShadowMap",Un.state.pointShadowMap,he)),ie.isSkinnedMesh){Pt.setOptional(q,ie,"bindMatrix"),Pt.setOptional(q,ie,"bindMatrixInverse");const Ut=ie.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(q,"boneTexture",Ut.boneTexture,he))}ie.isBatchedMesh&&(Pt.setOptional(q,ie,"batchingTexture"),Pt.setValue(q,"batchingTexture",ie._matricesTexture,he),Pt.setOptional(q,ie,"batchingIdTexture"),Pt.setValue(q,"batchingIdTexture",ie._indirectTexture,he),Pt.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Pt.setValue(q,"batchingColorTexture",ie._colorsTexture,he));const Ei=se.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&X.update(ie,se,vn),(yi||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,Pt.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=KT()),yi){if(Pt.setValue(q,"toneMappingExposure",Y.toneMappingExposure),He.needsLights&&hn(Jt,$n),Fe&&ne.fog===!0&&Be.refreshFogUniforms(Jt,Fe),Be.refreshMaterialUniforms(Jt,ne,ge,fe,L.state.transmissionRenderTarget[A.id]),He.needsLights&&He.lightProbeGrid){const Ut=He.lightProbeGrid;Jt.probesSH.value=Ut.texture,Jt.probesMin.value.copy(Ut.boundingBox.min),Jt.probesMax.value.copy(Ut.boundingBox.max),Jt.probesResolution.value.copy(Ut.resolution)}Wc.upload(q,Ki(He),Jt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Wc.upload(q,Ki(He),Jt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(q,"center",ie.center),Pt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(q,"normalMatrix",ie.normalMatrix),Pt.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Ut=ne.uniformsGroups;for(let Oi=0,Ra=Ut.length;Oi<Ra;Oi++){const ur=Ut[Oi];ye.update(ur,vn),ye.bind(ur,vn)}}return vn}function hn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,k,se){const ne=re.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=k,re.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const se=re.get(A);se.__webglFramebuffer=k,se.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,se=0){$=A,P=k,B=se;let ne=null,ie=!1,Fe=!1;if(A){const Le=re.get(A);if(Le.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(q.FRAMEBUFFER,Le.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest,M.viewport(U),M.scissor(Z),M.setScissorTest(Ee),_e=-1;return}else if(Le.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Le.__hasExternalTextures)he.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&re.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Fe=!0);const Xe=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?ne=Xe[k][se]:ne=Xe[k],ie=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?ne=Xe[se]:ne=Xe,U.copy(A.viewport),Z.copy(A.scissor),Ee=A.scissorTest}else U.copy(Je).multiplyScalar(ge).floor(),Z.copy(qt).multiplyScalar(ge).floor(),Ee=ft;if(se!==0&&(ne=pe),M.bindFramebuffer(q.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(U),M.scissor(Z),M.setScissorTest(Ee),ie){const Le=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le.__webglTexture,se)}else if(Fe){const Le=k;for(let ke=0;ke<A.textures.length;ke++){const Xe=re.get(A.textures[ke]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ke,Xe.__webglTexture,se,Le)}}else if(A!==null&&se!==0){const Le=re.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Le.__webglTexture,se)}_e=-1},this.readRenderTargetPixels=function(A,k,se,ne,ie,Fe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke){M.bindFramebuffer(q.FRAMEBUFFER,ke);try{const Xe=A.textures[Le],$e=Xe.format,ot=Xe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable($e)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ot)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-ne&&se>=0&&se<=A.height-ie&&q.readPixels(k,se,ne,ie,we.convert($e),we.convert(ot),Fe)}finally{const Xe=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,k,se,ne,ie,Fe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke)if(k>=0&&k<=A.width-ne&&se>=0&&se<=A.height-ie){M.bindFramebuffer(q.FRAMEBUFFER,ke);const Xe=A.textures[Le],$e=Xe.format,ot=Xe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!D.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ke),q.bufferData(q.PIXEL_PACK_BUFFER,Fe.byteLength,q.STREAM_READ),q.readPixels(k,se,ne,ie,we.convert($e),we.convert(ot),0);const At=$!==null?re.get($).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,At);const Qt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await YS(q,Qt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ke),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Fe),q.deleteBuffer(Ke),q.deleteSync(Qt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,se=0){const ne=Math.pow(2,-se),ie=Math.floor(A.image.width*ne),Fe=Math.floor(A.image.height*ne),Ge=k!==null?k.x:0,Le=k!==null?k.y:0;he.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,Ge,Le,ie,Fe),M.unbindTexture()},this.copyTextureToTexture=function(A,k,se=null,ne=null,ie=0,Fe=0){let Ge,Le,ke,Xe,$e,ot,Ke,At,Qt;const Xt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(se!==null)Ge=se.max.x-se.min.x,Le=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,$e=se.min.y,ot=se.isBox3?se.min.z:0;else{const Jt=Math.pow(2,-ie);Ge=Math.floor(Xt.width*Jt),Le=Math.floor(Xt.height*Jt),A.isDataArrayTexture?ke=Xt.depth:A.isData3DTexture?ke=Math.floor(Xt.depth*Jt):ke=1,Xe=0,$e=0,ot=0}ne!==null?(Ke=ne.x,At=ne.y,Qt=ne.z):(Ke=0,At=0,Qt=0);const Nt=we.convert(k.format),Ot=we.convert(k.type);let He;k.isData3DTexture?(he.setTexture3D(k,0),He=q.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(he.setTexture2DArray(k,0),He=q.TEXTURE_2D_ARRAY):(he.setTexture2D(k,0),He=q.TEXTURE_2D),M.activeTexture(q.TEXTURE0),M.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(q.UNPACK_ALIGNMENT,k.unpackAlignment);const Un=M.getParameter(q.UNPACK_ROW_LENGTH),dt=M.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=M.getParameter(q.UNPACK_SKIP_PIXELS),jn=M.getParameter(q.UNPACK_SKIP_ROWS),yi=M.getParameter(q.UNPACK_SKIP_IMAGES);M.pixelStorei(q.UNPACK_ROW_LENGTH,Xt.width),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt.height),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(q.UNPACK_SKIP_ROWS,$e),M.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const $n=A.isDataArrayTexture||A.isData3DTexture,Pt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Jt=re.get(A),Ei=re.get(k),Ut=re.get(Jt.__renderTarget),Oi=re.get(Ei.__renderTarget);M.bindFramebuffer(q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ra=0;Ra<ke;Ra++)$n&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ie,ot+Ra),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(k).__webglTexture,Fe,Qt+Ra)),q.blitFramebuffer(Xe,$e,Ge,Le,Ke,At,Ge,Le,q.DEPTH_BUFFER_BIT,q.NEAREST);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||re.has(A)){const Jt=re.get(A),Ei=re.get(k);M.bindFramebuffer(q.READ_FRAMEBUFFER,xe),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,j);for(let Ut=0;Ut<ke;Ut++)$n?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,ie,ot+Ut):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Jt.__webglTexture,ie),Pt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ei.__webglTexture,Fe,Qt+Ut):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ei.__webglTexture,Fe),ie!==0?q.blitFramebuffer(Xe,$e,Ge,Le,Ke,At,Ge,Le,q.COLOR_BUFFER_BIT,q.NEAREST):Pt?q.copyTexSubImage3D(He,Fe,Ke,At,Qt+Ut,Xe,$e,Ge,Le):q.copyTexSubImage2D(He,Fe,Ke,At,Xe,$e,Ge,Le);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(He,Fe,Ke,At,Qt,Ge,Le,ke,Nt,Ot,Xt.data):k.isCompressedArrayTexture?q.compressedTexSubImage3D(He,Fe,Ke,At,Qt,Ge,Le,ke,Nt,Xt.data):q.texSubImage3D(He,Fe,Ke,At,Qt,Ge,Le,ke,Nt,Ot,Xt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Fe,Ke,At,Ge,Le,Nt,Ot,Xt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Fe,Ke,At,Xt.width,Xt.height,Nt,Xt.data):q.texSubImage2D(q.TEXTURE_2D,Fe,Ke,At,Ge,Le,Nt,Ot,Xt);M.pixelStorei(q.UNPACK_ROW_LENGTH,Un),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,dt),M.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),M.pixelStorei(q.UNPACK_SKIP_ROWS,jn),M.pixelStorei(q.UNPACK_SKIP_IMAGES,yi),Fe===0&&k.generateMipmaps&&q.generateMipmap(He),M.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){P=0,B=0,$=null,M.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),i.unpackColorSpace=yt._getUnpackColorSpace()}}const JT=s=>`./assets/textures/${s}.jpg`;function jT(){const e=new Float32Array(2700),i=c=>{const h=Math.sin(c*91.173)*43758.5453;return h-Math.floor(h)};for(let c=0;c<900;c+=1){const h=18+i(c+1)*32,p=i(c+11)*Math.PI*2,m=Math.acos(2*i(c+29)-1);e[c*3]=h*Math.sin(m)*Math.cos(p),e[c*3+1]=h*Math.cos(m),e[c*3+2]=h*Math.sin(m)*Math.sin(p)-12}const r=new ui;r.setAttribute("position",new Li(e,3));const l=new Rv({color:12175828,size:.045,transparent:!0,opacity:.68,sizeAttenuation:!0});return new PM(r,l)}function $T(s,e){const i=new qo,r=s.id==="saturn"?.55:s.id==="sun"?.78:.82;i.rotation.set(.18,-.35,s.id==="uranus"?1.35:s.id==="saturn"?-.18:.03);const l=new Qc(2.55,96,64),c=s.id==="sun"?new Qo({map:e,transparent:!0,opacity:0}):new VM({map:e,roughness:.86,metalness:0,transparent:!0,opacity:0});s.id==="sun"&&(c.onBeforeCompile=p=>{p.fragmentShader=p.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb = diffuseColor.rgb * 1.15 + vec3(0.012, 0.004, 0.0);`)});const h=new Mi(l,c);if(i.add(h),s.id==="sun"){const p=new Mi(new Qc(2.72,64,48),new Qo({color:16228667,transparent:!0,opacity:0,side:Hn,blending:qh}));p.userData.transitionMaterial=!0,i.add(p)}return s.id==="saturn"&&[[2.92,3.18,13350285,.34],[3.24,3.72,14863265,.62],[3.79,4.35,11112302,.42]].forEach(([m,d,x,_])=>{const g=new Mi(new Jd(m,d,160),new Qo({color:x,transparent:!0,opacity:0,side:Vi,depthWrite:!1}));g.rotation.x=Math.PI/2,g.userData.targetOpacity=_,g.userData.transitionMaterial=!0,i.add(g)}),i.userData.sphere=h,i.userData.transition=0,i.userData.displayScale=r,i.scale.setScalar(r*.74),i}function J_(s){s.traverse(e=>{var r;(r=e.geometry)==null||r.dispose(),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(l=>l.dispose())})}function eA({world:s,index:e,total:i}){const r=le.useRef(null),l=le.useRef(s),[c,h]=le.useState(!1),[p,m]=le.useState(!1);le.useEffect(()=>{l.current=s},[s]),le.useEffect(()=>{const x=r.current;if(!x)return;let _;try{_=new QT({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{m(!0);return}_.setClearColor(198152,0),_.outputColorSpace=Kn,_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.domElement.className="planet-canvas",_.domElement.setAttribute("aria-hidden","true"),x.appendChild(_.domElement);const g=new TM,y=new Si(38,1,.1,120);y.position.set(0,0,8.5);const T=new JM(9676725,.82),w=new T_(16768944,3.5);w.position.set(-4.5,3.8,6);const E=new T_(4948405,2.1);E.position.set(5,-2,-3),g.add(T,w,E);const S=jT();g.add(S);const I=new ZM,H=new Map;let C=null,F=null,L=null,O=!1,b=0,N=!1,Y=0,G=0,J=0,pe=0,xe=0;const j=(W,fe)=>{W.traverse(ge=>{if(!ge.material)return;const Pe=ge.userData.transitionMaterial?ge.userData.targetOpacity??.18:1;ge.material.opacity=Pe*fe})},P=async W=>{if(!W||W.id===F||W.id===L)return;L=W.id;const fe=++b;let ge=H.get(W.id);try{ge||(ge=await I.loadAsync(JT(W.id)),ge.colorSpace=Kn,ge.anisotropy=Math.min(8,_.capabilities.getMaxAnisotropy()),H.set(W.id,ge))}catch{!O&&fe===b&&(L=null,F=W.id,m(!0));return}if(O||fe!==b)return;const Pe=C;C=$T(W,ge),F=W.id,L=null,J=0,pe=0,xe=0,g.add(C),Pe&&(g.remove(Pe),J_(Pe)),m(!1),h(!0)},B=()=>{const{width:W,height:fe}=x.getBoundingClientRect();!W||!fe||(_.setSize(W,fe,!1),y.aspect=W/fe,y.updateProjectionMatrix())},$=new ResizeObserver(B);$.observe(x),B();const _e=W=>{var fe,ge;N=!0,Y=W.clientX,G=W.clientY,(ge=(fe=_.domElement).setPointerCapture)==null||ge.call(fe,W.pointerId),_.domElement.classList.add("is-dragging")},be=W=>{N&&(J+=(W.clientX-Y)*.006,pe=fM.clamp(pe+(W.clientY-G)*.003,-.55,.55),Y=W.clientX,G=W.clientY)},U=()=>{N=!1,_.domElement.classList.remove("is-dragging")};_.domElement.addEventListener("pointerdown",_e),_.domElement.addEventListener("pointermove",be),_.domElement.addEventListener("pointerup",U),_.domElement.addEventListener("pointercancel",U),_.domElement.addEventListener("webglcontextlost",()=>m(!0),{once:!0});const Z=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ee=new ey;let Te=0;const Ne=()=>{const W=Math.min(Ee.getDelta(),.05),fe=l.current;if((fe==null?void 0:fe.id)!==F&&P(fe),C){C.userData.transition=Z?1:Math.min(1,C.userData.transition+W*1.65);const ge=1-(1-C.userData.transition)**3,Pe=C.userData.displayScale;C.scale.setScalar(Pe*(.74+ge*.26)),j(C,ge),!Z&&!N&&(xe+=W*((fe==null?void 0:fe.id)==="sun"?.075:.11));const nt=((fe==null?void 0:fe.id)==="uranus"?0:-.35)+xe+J;C.rotation.y+=(nt-C.rotation.y)*Math.min(1,W*7),C.rotation.x+=(.18+pe-C.rotation.x)*Math.min(1,W*7)}S.rotation.y+=Z?0:W*.004,_.render(g,y),Te=requestAnimationFrame(Ne)};return P(l.current),Ne(),()=>{O=!0,cancelAnimationFrame(Te),$.disconnect(),_.domElement.removeEventListener("pointerdown",_e),_.domElement.removeEventListener("pointermove",be),_.domElement.removeEventListener("pointerup",U),_.domElement.removeEventListener("pointercancel",U),C&&J_(C),S.geometry.dispose(),S.material.dispose(),H.forEach(W=>W.dispose()),_.dispose(),_.domElement.remove()}},[]);const d=Math.max(4,(e+1)/i*100);return qe.jsxs("div",{className:`shared-stage ${c?"is-ready":""}`,"aria-label":`${s.name} 3D 模型，可拖动旋转`,children:[qe.jsx("div",{className:"stage-visual",ref:r}),qe.jsx("img",{className:`stage-fallback ${p?"is-visible":""}`,src:s.image,alt:`${s.name}天体图像`}),qe.jsxs("div",{className:"stage-orbit-label","aria-hidden":"true",children:[qe.jsx("span",{children:String(e+1).padStart(2,"0")}),qe.jsx("i",{})," ",qe.jsx("b",{children:"09"})]}),qe.jsxs("div",{className:"stage-caption",children:[qe.jsx("span",{children:s.composition}),qe.jsx("strong",{children:s.light}),qe.jsx("a",{href:"https://www.solarsystemscope.com/textures/",target:"_blank",rel:"noreferrer",children:"3D 纹理来源"})]}),qe.jsxs("div",{className:"drag-hint",children:[qe.jsx("i",{})," 拖动行星 · 滚动探索"]}),qe.jsxs("div",{className:"distance-scale","aria-label":"与太阳的距离示意",children:[qe.jsx("span",{children:"与太阳的距离"}),qe.jsx("b",{children:s.distance}),qe.jsx("div",{className:"scale-line",children:qe.jsx("i",{style:{width:`${d}%`}})})]})]})}const Os=[["sun","太阳","SUN","恒星","太阳系中心","1,392,700 公里","约 25–35 个地球日","约 5,500°C","约 73% 氢、25% 氦","光到地球约 8 分 20 秒","太阳集中了太阳系约 99.8% 的质量。它释放的光与热塑造了每颗行星的环境，也维系着地球上的生命。","太阳每秒把约 6 亿吨氢聚变成氦。","https://science.nasa.gov/sun/facts/"],["mercury","水星","MERCURY","第一颗行星","5,800 万公里","4,879 公里","88 个地球日","昼夜约 430°C 至 −180°C","岩石外壳与巨大的金属核心","阳光抵达约需 3.2 分钟","水星是离太阳最近、也是最小的行星。它几乎没有大气保存热量，因此白昼炽热、黑夜严寒。","水星的一天比它的一年还长。","https://science.nasa.gov/mercury/facts/"],["venus","金星","VENUS","第二颗行星","1.08 亿公里","12,104 公里","224.7 个地球日","约 464°C","浓厚二氧化碳与硫酸云","太阳系最强烈的温室效应","金星大小与地球相近，却拥有炙热、厚重而腐蚀性的环境。浓密大气让它成为太阳系最热的行星。","金星自转方向与多数行星相反。","https://science.nasa.gov/venus/venus-facts/"],["earth","地球","EARTH","第三颗行星","1.496 亿公里","12,756 公里","365.25 天","全球平均约 15°C","岩石行星，表面约 71% 为海洋","已知唯一孕育生命的世界","液态水、稳定的大气与磁场共同塑造了我们的蓝色家园。地球是目前已知唯一拥有生命的天体。","地球并不是完美球体，赤道略微隆起。","https://science.nasa.gov/earth/facts/"],["mars","火星","MARS","第四颗行星","2.279 亿公里","6,779 公里","687 个地球日","平均约 −65°C","岩石表面与稀薄二氧化碳大气","拥有太阳系最大的火山","氧化铁让火星呈现红色。干涸河谷与极地冰盖提示我们：这颗行星过去可能拥有更温暖湿润的环境。","奥林帕斯山高度约为珠穆朗玛峰的三倍。","https://science.nasa.gov/mars/facts/"],["jupiter","木星","JUPITER","第五颗行星","7.78 亿公里","142,984 公里","11.86 个地球年","云顶约 −110°C","以氢和氦为主的气态巨行星","太阳系最大的行星","木星拥有汹涌的云带、强大的磁场和众多卫星。大红斑是一场延续了数百年的巨型风暴。","若木星是空心的，内部大约能容纳 1,000 个地球。","https://science.nasa.gov/jupiter/facts/"],["saturn","土星","SATURN","第六颗行星","14 亿公里","120,536 公里","29.45 个地球年","云顶约 −140°C","氢、氦与冰尘组成的环","拥有最壮观复杂的行星环","土星的环由无数冰粒、岩石与尘埃组成。它本身密度极低，若有足够大的海洋，理论上甚至可以漂浮。","土星北极有一条巨大的六边形急流。","https://science.nasa.gov/saturn/facts/"],["uranus","天王星","URANUS","第七颗行星","29 亿公里","51,118 公里","84 个地球年","约 −195°C","水、甲烷与氨构成的冰巨星","几乎横躺着绕太阳运行","天王星淡青色来自大气中的甲烷。一次远古碰撞可能让它的自转轴倾斜到近乎躺倒。","它的一个季节可持续约 21 个地球年。","https://science.nasa.gov/uranus/facts/"],["neptune","海王星","NEPTUNE","第八颗行星","45 亿公里","49,528 公里","164.8 个地球年","约 −200°C","富含水、甲烷与氨的冰巨星","太阳系风速最快的世界","在太阳系已知行星的最外侧，海王星依然拥有活跃而猛烈的天气。深蓝云层中，风速可超过每小时 2,000 公里。","自 1846 年被发现后，海王星只完成过一次公转。","https://science.nasa.gov/neptune/facts/"]].map(([s,e,i,r,l,c,h,p,m,d,x,_,g])=>({id:s,name:e,english:i,order:r,distance:l,diameter:c,year:h,temperature:p,composition:m,light:d,intro:x,fact:_,source:g,image:`assets/planets/${s}.png`}));function Bc({icon:s,label:e,value:i}){return qe.jsxs("div",{className:"fact-row",children:[qe.jsx(s,{"aria-hidden":"true",weight:"light"}),qe.jsx("span",{children:e}),qe.jsx("strong",{children:i})]})}function tA({world:s,index:e}){const i=Os[e+1];return qe.jsxs("section",{className:`world-section world-${s.id}`,id:s.id,"data-world":s.id,children:[qe.jsxs("div",{className:"world-copy",children:[qe.jsxs("p",{className:"eyebrow",children:[s.order," · ",s.english]}),qe.jsx("h1",{children:e===0?qe.jsxs(qe.Fragment,{children:["从太阳出发，",qe.jsx("br",{}),"穿越八颗行星"]}):s.name}),qe.jsx("p",{className:"intro",children:s.intro}),e===0&&qe.jsxs("button",{className:"primary-action",onClick:()=>{var r;return(r=document.querySelector("#mercury"))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:["开始太阳系之旅 ",qe.jsx(Yg,{weight:"light"})]}),qe.jsxs("div",{className:"facts","aria-label":`${s.name}关键数据`,children:[qe.jsx(Bc,{icon:fS,label:"距太阳",value:s.distance}),qe.jsx(Bc,{icon:cS,label:"直径",value:s.diameter}),qe.jsx(Bc,{icon:uS,label:s.id==="sun"?"自转":"公转周期",value:s.year}),qe.jsx(Bc,{icon:hS,label:"温度",value:s.temperature})]}),qe.jsxs("div",{className:"memory-fact",children:[qe.jsx("span",{children:"值得记住"}),qe.jsx("p",{children:s.fact})]}),qe.jsxs("a",{className:"source-link",href:s.source,target:"_blank",rel:"noreferrer",children:["查看 NASA 科学资料 ",qe.jsx(Yg,{weight:"light"})]})]}),qe.jsx("div",{className:"world-stage-slot","aria-hidden":"true"}),i&&qe.jsxs("button",{className:"next-world",onClick:()=>{var r;return(r=document.querySelector(`#${i.id}`))==null?void 0:r.scrollIntoView({behavior:"smooth"})},children:[qe.jsx("span",{children:"下一站"}),qe.jsx("strong",{children:i.name}),qe.jsx(lS,{weight:"light"})]})]})}function nA(){const[s,e]=le.useState("sun"),[i,r]=le.useState(0),l=le.useMemo(()=>Os.findIndex(p=>p.id===s),[s]),c=le.useRef(null);le.useEffect(()=>{const p=[...document.querySelectorAll("[data-world]")];c.current=new IntersectionObserver(d=>{const x=d.filter(_=>_.isIntersecting).sort((_,g)=>g.intersectionRatio-_.intersectionRatio)[0];x&&e(x.target.dataset.world)},{threshold:[.35,.55,.75]}),p.forEach(d=>c.current.observe(d));const m=()=>{const d=document.documentElement.scrollHeight-window.innerHeight;r(d>0?window.scrollY/d:0)};return m(),window.addEventListener("scroll",m,{passive:!0}),()=>{var d;(d=c.current)==null||d.disconnect(),window.removeEventListener("scroll",m)}},[]);const h=p=>{var m;return(m=document.querySelector(`#${p}`))==null?void 0:m.scrollIntoView({behavior:"smooth"})};return qe.jsxs("div",{className:"app-shell",children:[qe.jsxs("aside",{className:"journey-rail","aria-label":"太阳系旅程导航",children:[qe.jsx("button",{className:"brand",onClick:()=>h("sun"),children:"太阳系"}),qe.jsx("div",{className:"rail-progress","aria-hidden":"true",children:qe.jsx("i",{style:{height:`${i*100}%`}})}),qe.jsx("nav",{children:Os.map(p=>qe.jsxs("button",{className:s===p.id?"active":"",onClick:()=>h(p.id),"aria-current":s===p.id?"step":void 0,children:[qe.jsx("img",{src:p.image,alt:""}),qe.jsx("span",{children:p.name})]},p.id))}),qe.jsxs("div",{className:"rail-count",children:[qe.jsx("b",{children:String(l+1).padStart(2,"0")}),qe.jsx("span",{children:"/ 09"})]})]}),qe.jsx(eA,{world:Os[l],index:l,total:Os.length}),qe.jsx("main",{children:Os.map((p,m)=>qe.jsx(tA,{world:p,index:m},p.id))})]})}eS.createRoot(document.getElementById("root")).render(qe.jsx(Y1.StrictMode,{children:qe.jsx(nA,{})}));
