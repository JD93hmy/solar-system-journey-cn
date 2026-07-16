(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ex(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function bx(){if(ig)return Go;ig=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var ag;function Ax(){return ag||(ag=1,xh.exports=bx()),xh.exports}var Te=Ax(),Mh={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Tx(){if(rg)return lt;rg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function M(F,Y,ye){this.props=F,this.context=Y,this.refs=S,this.updater=ye||A}M.prototype.isReactComponent={},M.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},M.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function L(){}L.prototype=M.prototype;function D(F,Y,ye){this.props=F,this.context=Y,this.refs=S,this.updater=ye||A}var R=D.prototype=new L;R.constructor=D,w(R,M.prototype),R.isPureReactComponent=!0;var B=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(F,Y,ye){var Re=ye.ref;return{$$typeof:s,type:F,key:Y,ref:Re!==void 0?Re:null,props:ye}}function k(F,Y){return O(F.type,Y,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function j(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ye){return Y[ye]})}var de=/\/+/g;function ve(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?j(""+F.key):Y.toString(36)}function $(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(N,N):(F.status="pending",F.then(function(Y){F.status==="pending"&&(F.status="fulfilled",F.value=Y)},function(Y){F.status==="pending"&&(F.status="rejected",F.reason=Y)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,Y,ye,Re,Oe){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var Me=!1;if(F===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(F.$$typeof){case s:case e:Me=!0;break;case v:return Me=F._init,z(Me(F._payload),Y,ye,Re,Oe)}}if(Me)return Oe=Oe(F),Me=Re===""?"."+ve(F,0):Re,B(Oe)?(ye="",Me!=null&&(ye=Me.replace(de,"$&/")+"/"),z(Oe,Y,ye,"",function(nt){return nt})):Oe!=null&&(G(Oe)&&(Oe=k(Oe,ye+(Oe.key==null||F&&F.key===Oe.key?"":(""+Oe.key).replace(de,"$&/")+"/")+Me)),Y.push(Oe)),1;Me=0;var Se=Re===""?".":Re+":";if(B(F))for(var ze=0;ze<F.length;ze++)Re=F[ze],se=Se+ve(Re,ze),Me+=z(Re,Y,ye,se,Oe);else if(ze=E(F),typeof ze=="function")for(F=ze.call(F),ze=0;!(Re=F.next()).done;)Re=Re.value,se=Se+ve(Re,ze++),Me+=z(Re,Y,ye,se,Oe);else if(se==="object"){if(typeof F.then=="function")return z($(F),Y,ye,Re,Oe);throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Me}function V(F,Y,ye){if(F==null)return F;var Re=[],Oe=0;return z(F,Re,"","",function(se){return Y.call(ye,se,Oe++)}),Re}function ee(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(ye){(F._status===0||F._status===-1)&&(F._status=1,F._result=ye)},function(ye){(F._status===0||F._status===-1)&&(F._status=2,F._result=ye)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var me=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},be={map:V,forEach:function(F,Y,ye){V(F,function(){Y.apply(this,arguments)},ye)},count:function(F){var Y=0;return V(F,function(){Y++}),Y},toArray:function(F){return V(F,function(Y){return Y})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return lt.Activity=x,lt.Children=be,lt.Component=M,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=D,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,lt.__COMPILER_RUNTIME={__proto__:null,c:function(F){return I.H.useMemoCache(F)}},lt.cache=function(F){return function(){return F.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(F,Y,ye){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Re=w({},F.props),Oe=F.key;if(Y!=null)for(se in Y.key!==void 0&&(Oe=""+Y.key),Y)!b.call(Y,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Y.ref===void 0||(Re[se]=Y[se]);var se=arguments.length-2;if(se===1)Re.children=ye;else if(1<se){for(var Me=Array(se),Se=0;Se<se;Se++)Me[Se]=arguments[Se+2];Re.children=Me}return O(F.type,Oe,Re)},lt.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},lt.createElement=function(F,Y,ye){var Re,Oe={},se=null;if(Y!=null)for(Re in Y.key!==void 0&&(se=""+Y.key),Y)b.call(Y,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Oe[Re]=Y[Re]);var Me=arguments.length-2;if(Me===1)Oe.children=ye;else if(1<Me){for(var Se=Array(Me),ze=0;ze<Me;ze++)Se[ze]=arguments[ze+2];Oe.children=Se}if(F&&F.defaultProps)for(Re in Me=F.defaultProps,Me)Oe[Re]===void 0&&(Oe[Re]=Me[Re]);return O(F,se,Oe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:p,render:F}},lt.isValidElement=G,lt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:ee}},lt.memo=function(F,Y){return{$$typeof:d,type:F,compare:Y===void 0?null:Y}},lt.startTransition=function(F){var Y=I.T,ye={};I.T=ye;try{var Re=F(),Oe=I.S;Oe!==null&&Oe(ye,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(N,me)}catch(se){me(se)}finally{Y!==null&&ye.types!==null&&(Y.types=ye.types),I.T=Y}},lt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},lt.use=function(F){return I.H.use(F)},lt.useActionState=function(F,Y,ye){return I.H.useActionState(F,Y,ye)},lt.useCallback=function(F,Y){return I.H.useCallback(F,Y)},lt.useContext=function(F){return I.H.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F,Y){return I.H.useDeferredValue(F,Y)},lt.useEffect=function(F,Y){return I.H.useEffect(F,Y)},lt.useEffectEvent=function(F){return I.H.useEffectEvent(F)},lt.useId=function(){return I.H.useId()},lt.useImperativeHandle=function(F,Y,ye){return I.H.useImperativeHandle(F,Y,ye)},lt.useInsertionEffect=function(F,Y){return I.H.useInsertionEffect(F,Y)},lt.useLayoutEffect=function(F,Y){return I.H.useLayoutEffect(F,Y)},lt.useMemo=function(F,Y){return I.H.useMemo(F,Y)},lt.useOptimistic=function(F,Y){return I.H.useOptimistic(F,Y)},lt.useReducer=function(F,Y,ye){return I.H.useReducer(F,Y,ye)},lt.useRef=function(F){return I.H.useRef(F)},lt.useState=function(F){return I.H.useState(F)},lt.useSyncExternalStore=function(F,Y,ye){return I.H.useSyncExternalStore(F,Y,ye)},lt.useTransition=function(){return I.H.useTransition()},lt.version="19.2.0",lt}var sg;function Jd(){return sg||(sg=1,Mh.exports=Tx()),Mh.exports}var U=Jd();const Rx=Ex(U);var Sh={exports:{}},ko={},yh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Cx(){return og||(og=1,(function(s){function e(z,V){var ee=z.length;z.push(V);e:for(;0<ee;){var me=ee-1>>>1,be=z[me];if(0<l(be,V))z[me]=V,z[ee]=be,ee=me;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],ee=z.pop();if(ee!==V){z[0]=ee;e:for(var me=0,be=z.length,F=be>>>1;me<F;){var Y=2*(me+1)-1,ye=z[Y],Re=Y+1,Oe=z[Re];if(0>l(ye,ee))Re<be&&0>l(Oe,ye)?(z[me]=Oe,z[Re]=ee,me=Re):(z[me]=ye,z[Y]=ee,me=Y);else if(Re<be&&0>l(Oe,ee))z[me]=Oe,z[Re]=ee,me=Re;else break e}}return V}function l(z,V){var ee=z.sortIndex-V.sortIndex;return ee!==0?ee:z.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,g=3,E=!1,A=!1,w=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var V=i(d);V!==null;){if(V.callback===null)r(d);else if(V.startTime<=z)r(d),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(d)}}function B(z){if(w=!1,R(z),!A)if(i(m)!==null)A=!0,N||(N=!0,j());else{var V=i(d);V!==null&&$(B,V.startTime-z)}}var N=!1,I=-1,b=5,O=-1;function k(){return S?!0:!(s.unstable_now()-O<b)}function G(){if(S=!1,N){var z=s.unstable_now();O=z;var V=!0;try{e:{A=!1,w&&(w=!1,L(I),I=-1),E=!0;var ee=g;try{t:{for(R(z),x=i(m);x!==null&&!(x.expirationTime>z&&k());){var me=x.callback;if(typeof me=="function"){x.callback=null,g=x.priorityLevel;var be=me(x.expirationTime<=z);if(z=s.unstable_now(),typeof be=="function"){x.callback=be,R(z),V=!0;break t}x===i(m)&&r(m),R(z)}else r(m);x=i(m)}if(x!==null)V=!0;else{var F=i(d);F!==null&&$(B,F.startTime-z),V=!1}}break e}finally{x=null,g=ee,E=!1}V=void 0}}finally{V?j():N=!1}}}var j;if(typeof D=="function")j=function(){D(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ve=de.port2;de.port1.onmessage=G,j=function(){ve.postMessage(null)}}else j=function(){M(G,0)};function $(z,V){I=M(function(){z(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var ee=g;g=V;try{return z()}finally{g=ee}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=g;g=z;try{return V()}finally{g=ee}},s.unstable_scheduleCallback=function(z,V,ee){var me=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?me+ee:me):ee=me,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,z={id:v++,callback:V,priorityLevel:z,startTime:ee,expirationTime:be,sortIndex:-1},ee>me?(z.sortIndex=ee,e(d,z),i(m)===null&&z===i(d)&&(w?(L(I),I=-1):w=!0,$(B,ee-me))):(z.sortIndex=be,e(m,z),A||E||(A=!0,N||(N=!0,j()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var V=g;return function(){var ee=g;g=V;try{return z.apply(this,arguments)}finally{g=ee}}}})(Eh)),Eh}var lg;function wx(){return lg||(lg=1,yh.exports=Cx()),yh.exports}var bh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Dx(){if(cg)return Nn;cg=1;var s=Jd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Nn.flushSync=function(m){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=v,r.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var ug;function Ux(){if(ug)return bh.exports;ug=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bh.exports=Dx(),bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Lx(){if(fg)return ko;fg=1;var s=wx(),e=Jd(),i=Ux();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,C=u.child;C;){if(C===a){_=!0,a=u,o=f;break}if(C===o){_=!0,o=u,a=f;break}C=C.sibling}if(!_){for(C=f.child;C;){if(C===a){_=!0,a=f,o=u;break}if(C===o){_=!0,o=f,a=u;break}C=C.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case B:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var $=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},me=[],be=-1;function F(t){return{current:t}}function Y(t){0>be||(t.current=me[be],me[be]=null,be--)}function ye(t,n){be++,me[be]=t.current,t.current=n}var Re=F(null),Oe=F(null),se=F(null),Me=F(null);function Se(t,n){switch(ye(se,n),ye(Oe,t),ye(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?T1(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=T1(n),t=R1(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Re),ye(Re,t)}function ze(){Y(Re),Y(Oe),Y(se)}function nt(t){t.memoizedState!==null&&ye(Me,t);var n=Re.current,a=R1(n,t.type);n!==a&&(ye(Oe,t),ye(Re,a))}function Qe(t){Oe.current===t&&(Y(Re),Y(Oe)),Me.current===t&&(Y(Me),Bo._currentValue=ee)}var Lt,ut;function Mt(t){if(Lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Lt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+t+ut}var ht=!1;function vt(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ue){var le=ue}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ue){le=ue}t.call(xe.prototype)}}else{try{throw Error()}catch(ue){le=ue}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],C=f[1];if(_&&C){var H=_.split(`
`),ie=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var pe=`
`+H[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Mt(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Mt(t.type);case 16:return Mt("Lazy");case 13:return t.child!==n&&n!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return vt(t.type,!1);case 11:return vt(t.type.render,!1);case 1:return vt(t.type,!0);case 31:return Mt("Activity");default:return""}}function Ye(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ot=Object.prototype.hasOwnProperty,ft=s.unstable_scheduleCallback,rt=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,W=s.unstable_requestPaint,mt=s.unstable_now,gt=s.unstable_getCurrentPriorityLevel,P=s.unstable_ImmediatePriority,y=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,te=s.unstable_LowPriority,ce=s.unstable_IdlePriority,Ae=s.log,Ue=s.unstable_setDisableYieldValue,fe=null,he=null;function we(t){if(typeof Ae=="function"&&Ue(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(fe,t)}catch{}}var He=Math.clz32?Math.clz32:je,Pe=Math.log,Le=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Pe(t)/Le|0)|0}var $e=256,st=262144,Z=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ce(o):(_&=C,_!==0?u=Ce(_):a||(a=C&~t,a!==0&&(u=Ce(a))))):(C=o&~f,C!==0?u=Ce(C):_!==0?u=Ce(_):a||(a=o&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Be(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-He(a),xe=1<<pe;C[pe]=0,H[pe]=-1;var le=ie[pe];if(le!==null)for(ie[pe]=null,pe=0;pe<le.length;pe++){var ue=le[pe];ue!==null&&(ue.lane&=-536870913)}a&=~xe}o!==0&&Bt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Bt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function $n(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ei(t,n){var a=n&-n;return a=(a&42)!==0?1:Js(a),(a&(t.suspendedLanes|n))!==0?0:a}function Js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $s(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Q1(t.type))}function Zr(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var Ii=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ii,Tn="__reactProps$"+Ii,Gn="__reactContainer$"+Ii,ur="__reactEvents$"+Ii,fl="__reactListeners$"+Ii,hl="__reactHandles$"+Ii,fr="__reactResources$"+Ii,Ca="__reactMarker$"+Ii;function wa(t){delete t[fn],delete t[Tn],delete t[ur],delete t[fl],delete t[hl]}function ji(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=O1(t);t!==null;){if(a=t[fn])return a;t=O1(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[fn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Da(t){var n=t[fr];return n||(n=t[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ca]=!0}var dl=new Set,T={};function q(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(T[t]=n,t=0;t<n.length;t++)dl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function Ge(t){return ot.call(Fe,t)?!0:ot.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function Ne(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Nt(t){if(!t._valueTracker){var n=dt(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=dt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function Ht(t){return t.replace(zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,f,_,C){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?yt(t,_,et(n)):a!=null?yt(t,_,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+et(C):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,_,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Nt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Nt(t)}function yt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if($(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Nt(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&an(t,f,n[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(t){return Ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qr=null,Yr=null;function A0(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&nn(o)}break e;case"textarea":ti(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var _u=!1;function T0(t,n,a){if(_u)return t(n,a);_u=!0;try{var o=t(n);return o}finally{if(_u=!1,(qr!==null||Yr!==null)&&(ec(),qr&&(n=qr,t=Yr,Yr=qr=null,A0(n),t)))for(n=0;n<t.length;n++)A0(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(ta)try{var to={};Object.defineProperty(to,"passive",{get:function(){vu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{vu=!1}var La=null,xu=null,pl=null;function R0(){if(pl)return pl;var t,n=xu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function C0(){return!1}function kn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:C0,this.isPropagationStopped=C0,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=kn(pr),no=x({},pr,{view:0,detail:0}),Sv=kn(no),Mu,Su,io,vl=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Mu=t.screenX-io.screenX,Su=t.screenY-io.screenY):Su=Mu=0,io=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),w0=kn(vl),yv=x({},vl,{dataTransfer:0}),Ev=kn(yv),bv=x({},no,{relatedTarget:0}),yu=kn(bv),Av=x({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=kn(Av),Rv=x({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=kn(Rv),wv=x({},pr,{data:0}),D0=kn(wv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Lv[t])?!!n[t]:!1}function Eu(){return Nv}var Ov=x({},no,{key:function(t){if(t.key){var n=Dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=kn(Ov),Fv=x({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U0=kn(Fv),Iv=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Bv=kn(Iv),zv=x({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=kn(zv),Vv=x({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=kn(Vv),kv=x({},pr,{newState:0,oldState:0}),Xv=kn(kv),Wv=[9,13,27,32],bu=ta&&"CompositionEvent"in window,ao=null;ta&&"documentMode"in document&&(ao=document.documentMode);var Zv=ta&&"TextEvent"in window&&!ao,L0=ta&&(!bu||ao&&8<ao&&11>=ao),N0=" ",O0=!1;function P0(t,n){switch(t){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function qv(t,n){switch(t){case"compositionend":return F0(n);case"keypress":return n.which!==32?null:(O0=!0,N0);case"textInput":return t=n.data,t===N0&&O0?null:t;default:return null}}function Yv(t,n){if(Kr)return t==="compositionend"||!bu&&P0(t,n)?(t=R0(),pl=xu=La=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return L0&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Kv[t.type]:n==="textarea"}function B0(t,n,a,o){qr?Yr?Yr.push(o):Yr=[o]:qr=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,so=null;function Qv(t){M1(t,0)}function xl(t){var n=hr(t);if(nn(n))return t}function z0(t,n){if(t==="change")return n}var H0=!1;if(ta){var Au;if(ta){var Tu="oninput"in document;if(!Tu){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),Tu=typeof V0.oninput=="function"}Au=Tu}else Au=!1;H0=Au&&(!document.documentMode||9<document.documentMode)}function G0(){ro&&(ro.detachEvent("onpropertychange",k0),so=ro=null)}function k0(t){if(t.propertyName==="value"&&xl(so)){var n=[];B0(n,so,t,gu(t)),T0(Qv,n)}}function Jv(t,n,a){t==="focusin"?(G0(),ro=n,so=a,ro.attachEvent("onpropertychange",k0)):t==="focusout"&&G0()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(so)}function $v(t,n){if(t==="click")return xl(n)}function e2(t,n){if(t==="input"||t==="change")return xl(n)}function t2(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:t2;function oo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ot.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function X0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function W0(t,n){var a=X0(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=X0(a)}}function Z0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Z0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function q0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var n2=ta&&"documentMode"in document&&11>=document.documentMode,Qr=null,Cu=null,lo=null,wu=!1;function Y0(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Qr==null||Qr!==Qt(o)||(o=Qr,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=oc(Cu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Qr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Du={},K0={};ta&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function gr(t){if(Du[t])return Du[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in K0)return Du[t]=n[a];return t}var Q0=gr("animationend"),J0=gr("animationiteration"),j0=gr("animationstart"),i2=gr("transitionrun"),a2=gr("transitionstart"),r2=gr("transitioncancel"),$0=gr("transitionend"),ep=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ri(t,n){ep.set(t,n),q(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],jr=0,Lu=0;function Sl(){for(var t=jr,n=Lu=jr=0;n<t;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&tp(a,u,f)}}function yl(t,n,a,o){gi[jr++]=t,gi[jr++]=n,gi[jr++]=a,gi[jr++]=o,Lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nu(t,n,a,o){return yl(t,n,a,o),El(t)}function _r(t,n){return yl(t,null,null,n),El(t)}function tp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-He(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(t){if(50<Uo)throw Uo=0,kf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $r={};function s2(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,o){return new s2(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Ou(t)&&(_=1);else if(typeof t=="string")_=fx(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ai(31,a,n,u),t.elementType=O,t.lanes=f,t;case w:return vr(a.children,u,f,n);case S:_=8,u|=24;break;case M:return t=ai(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case B:return t=ai(13,a,n,u),t.elementType=B,t.lanes=f,t;case N:return t=ai(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:_=10;break e;case L:_=9;break e;case R:_=11;break e;case I:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ai(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function vr(t,n,a,o){return t=ai(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function ip(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ap=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ye(n)},ap.set(t,n),n)}return{value:t,source:n,stack:Ye(n)}}var es=[],ts=0,Al=null,co=0,vi=[],xi=0,Na=null,zi=1,Hi="";function ia(t,n){es[ts++]=co,es[ts++]=Al,Al=t,co=n}function rp(t,n,a){vi[xi++]=zi,vi[xi++]=Hi,vi[xi++]=Na,Na=t;var o=zi;t=Hi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,zi=1<<32-He(n)+u|a<<u|o,Hi=f+t}else zi=1<<f|a<<u|o,Hi=t}function Iu(t){t.return!==null&&(ia(t,1),rp(t,1,0))}function Bu(t){for(;t===Al;)Al=es[--ts],es[ts]=null,co=es[--ts],es[ts]=null;for(;t===Na;)Na=vi[--xi],vi[xi]=null,Hi=vi[--xi],vi[xi]=null,zi=vi[--xi],vi[xi]=null}function sp(t,n){vi[xi++]=zi,vi[xi++]=Hi,vi[xi++]=Na,zi=n.id,Hi=n.overflow,Na=t}var Rn=null,$t=null,wt=!1,Oa=null,Mi=!1,zu=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(_i(n,t)),zu}function op(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Tn]=o,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)bt(No[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||b1(n.textContent,a)?(o.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),o.onScroll!=null&&bt("scroll",n),o.onScrollEnd!=null&&bt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(t,!0)}function lp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Rn=Rn.return}}function ns(t){if(t!==Rn)return!1;if(!wt)return lp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ah(t.type,t.memoizedProps)),a=!a),a&&$t&&Pa(t),lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=N1(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=N1(t)}else n===27?(n=$t,Ka(t.type)?(t=ch,ch=null,$t=t):$t=n):$t=Rn?yi(t.stateNode.nextSibling):null;return!0}function xr(){$t=Rn=null,wt=!1}function Hu(){var t=Oa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Oa=null),t}function uo(t){Oa===null?Oa=[t]:Oa.push(t)}var Vu=F(null),Mr=null,aa=null;function Fa(t,n,a){ye(Vu,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Vu.current,Y(Vu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Gu(f.return,a,t),o||(_=null);break e}f=C.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Gu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function is(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var C=u.type;ii(u.pendingProps.value,_.value)||(t!==null?t.push(C):t=[C])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){Mr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return cp(Mr,t)}function Rl(t,n){return Mr===null&&Sr(t),cp(t,n)}function cp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var o2=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},l2=s.unstable_scheduleCallback,c2=s.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new o2,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&l2(c2,function(){t.controller.abort()})}var ho=null,Wu=0,as=0,rs=null;function u2(t,n){if(ho===null){var a=ho=[];Wu=0,as=Kf(),rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(up,up),n}function up(){if(--Wu===0&&ho!==null){rs!==null&&(rs.status="fulfilled");var t=ho;ho=null,as=0,rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function f2(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fp=z.S;z.S=function(t,n){Ym=mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&u2(t,n),fp!==null&&fp(t,n)};var yr=F(null);function Zu(){var t=yr.current;return t!==null?t:Jt.pooledCache}function Cl(t,n){n===null?ye(yr,yr.current):ye(yr,n.pool)}function hp(){var t=Zu();return t===null?null:{parent:dn._currentValue,pool:t}}var ss=Error(r(460)),qu=Error(r(474)),wl=Error(r(542)),Dl={then:function(){}};function dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t}throw br=n,ss}}function Er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,ss):a}}var br=null;function mp(){if(br===null)throw Error(r(459));var t=br;return br=null,t}function gp(t){if(t===ss||t===wl)throw Error(r(483))}var os=null,po=0;function Ul(t){var n=po;return po+=1,os===null&&(os=[]),pp(os,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _p(t){function n(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=na(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=67108866,X):ne):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,X,ne,_e){return X===null||X.tag!==6?(X=Pu(ne,Q.mode,_e),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function H(Q,X,ne,_e){var tt=ne.type;return tt===w?pe(Q,X,ne.props.children,_e,ne.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===b&&Er(tt)===X.type)?(X=u(X,ne.props),mo(X,ne),X.return=Q,X):(X=bl(ne.type,ne.key,ne.props,null,Q.mode,_e),mo(X,ne),X.return=Q,X)}function ie(Q,X,ne,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Fu(ne,Q.mode,_e),X.return=Q,X):(X=u(X,ne.children||[]),X.return=Q,X)}function pe(Q,X,ne,_e,tt){return X===null||X.tag!==7?(X=vr(ne,Q.mode,_e,tt),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function xe(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return ne=bl(X.type,X.key,X.props,null,Q.mode,ne),mo(ne,X),ne.return=Q,ne;case A:return X=Fu(X,Q.mode,ne),X.return=Q,X;case b:return X=Er(X),xe(Q,X,ne)}if($(X)||j(X))return X=vr(X,Q.mode,ne,null),X.return=Q,X;if(typeof X.then=="function")return xe(Q,Ul(X),ne);if(X.$$typeof===D)return xe(Q,Rl(Q,X),ne);Ll(Q,X)}return null}function le(Q,X,ne,_e){var tt=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:C(Q,X,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case E:return ne.key===tt?H(Q,X,ne,_e):null;case A:return ne.key===tt?ie(Q,X,ne,_e):null;case b:return ne=Er(ne),le(Q,X,ne,_e)}if($(ne)||j(ne))return tt!==null?null:pe(Q,X,ne,_e,null);if(typeof ne.then=="function")return le(Q,X,Ul(ne),_e);if(ne.$$typeof===D)return le(Q,X,Rl(Q,ne),_e);Ll(Q,ne)}return null}function ue(Q,X,ne,_e,tt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Q=Q.get(ne)||null,C(X,Q,""+_e,tt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case E:return Q=Q.get(_e.key===null?ne:_e.key)||null,H(X,Q,_e,tt);case A:return Q=Q.get(_e.key===null?ne:_e.key)||null,ie(X,Q,_e,tt);case b:return _e=Er(_e),ue(Q,X,ne,_e,tt)}if($(_e)||j(_e))return Q=Q.get(ne)||null,pe(X,Q,_e,tt,null);if(typeof _e.then=="function")return ue(Q,X,ne,Ul(_e),tt);if(_e.$$typeof===D)return ue(Q,X,ne,Rl(X,_e),tt);Ll(X,_e)}return null}function Ze(Q,X,ne,_e){for(var tt=null,Ot=null,Ke=X,_t=X=0,Tt=null;Ke!==null&&_t<ne.length;_t++){Ke.index>_t?(Tt=Ke,Ke=null):Tt=Ke.sibling;var Pt=le(Q,Ke,ne[_t],_e);if(Pt===null){Ke===null&&(Ke=Tt);break}t&&Ke&&Pt.alternate===null&&n(Q,Ke),X=f(Pt,X,_t),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt,Ke=Tt}if(_t===ne.length)return a(Q,Ke),wt&&ia(Q,_t),tt;if(Ke===null){for(;_t<ne.length;_t++)Ke=xe(Q,ne[_t],_e),Ke!==null&&(X=f(Ke,X,_t),Ot===null?tt=Ke:Ot.sibling=Ke,Ot=Ke);return wt&&ia(Q,_t),tt}for(Ke=o(Ke);_t<ne.length;_t++)Tt=ue(Ke,Q,_t,ne[_t],_e),Tt!==null&&(t&&Tt.alternate!==null&&Ke.delete(Tt.key===null?_t:Tt.key),X=f(Tt,X,_t),Ot===null?tt=Tt:Ot.sibling=Tt,Ot=Tt);return t&&Ke.forEach(function(er){return n(Q,er)}),wt&&ia(Q,_t),tt}function it(Q,X,ne,_e){if(ne==null)throw Error(r(151));for(var tt=null,Ot=null,Ke=X,_t=X=0,Tt=null,Pt=ne.next();Ke!==null&&!Pt.done;_t++,Pt=ne.next()){Ke.index>_t?(Tt=Ke,Ke=null):Tt=Ke.sibling;var er=le(Q,Ke,Pt.value,_e);if(er===null){Ke===null&&(Ke=Tt);break}t&&Ke&&er.alternate===null&&n(Q,Ke),X=f(er,X,_t),Ot===null?tt=er:Ot.sibling=er,Ot=er,Ke=Tt}if(Pt.done)return a(Q,Ke),wt&&ia(Q,_t),tt;if(Ke===null){for(;!Pt.done;_t++,Pt=ne.next())Pt=xe(Q,Pt.value,_e),Pt!==null&&(X=f(Pt,X,_t),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return wt&&ia(Q,_t),tt}for(Ke=o(Ke);!Pt.done;_t++,Pt=ne.next())Pt=ue(Ke,Q,_t,Pt.value,_e),Pt!==null&&(t&&Pt.alternate!==null&&Ke.delete(Pt.key===null?_t:Pt.key),X=f(Pt,X,_t),Ot===null?tt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Ke.forEach(function(yx){return n(Q,yx)}),wt&&ia(Q,_t),tt}function Yt(Q,X,ne,_e){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case E:e:{for(var tt=ne.key;X!==null;){if(X.key===tt){if(tt=ne.type,tt===w){if(X.tag===7){a(Q,X.sibling),_e=u(X,ne.props.children),_e.return=Q,Q=_e;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===b&&Er(tt)===X.type){a(Q,X.sibling),_e=u(X,ne.props),mo(_e,ne),_e.return=Q,Q=_e;break e}a(Q,X);break}else n(Q,X);X=X.sibling}ne.type===w?(_e=vr(ne.props.children,Q.mode,_e,ne.key),_e.return=Q,Q=_e):(_e=bl(ne.type,ne.key,ne.props,null,Q.mode,_e),mo(_e,ne),_e.return=Q,Q=_e)}return _(Q);case A:e:{for(tt=ne.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),_e=u(X,ne.children||[]),_e.return=Q,Q=_e;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}_e=Fu(ne,Q.mode,_e),_e.return=Q,Q=_e}return _(Q);case b:return ne=Er(ne),Yt(Q,X,ne,_e)}if($(ne))return Ze(Q,X,ne,_e);if(j(ne)){if(tt=j(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),it(Q,X,ne,_e)}if(typeof ne.then=="function")return Yt(Q,X,Ul(ne),_e);if(ne.$$typeof===D)return Yt(Q,X,Rl(Q,ne),_e);Ll(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),_e=u(X,ne),_e.return=Q,Q=_e):(a(Q,X),_e=Pu(ne,Q.mode,_e),_e.return=Q,Q=_e),_(Q)):a(Q,X)}return function(Q,X,ne,_e){try{po=0;var tt=Yt(Q,X,ne,_e);return os=null,tt}catch(Ke){if(Ke===ss||Ke===wl)throw Ke;var Ot=ai(29,Ke,null,Q.mode);return Ot.lanes=_e,Ot.return=Q,Ot}finally{}}}var Ar=_p(!0),vp=_p(!1),Ia=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),tp(t,null,a),n}return yl(t,o,n,a),El(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,$n(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function _o(){if(Ju){var t=rs;if(t!==null)throw t}}function vo(t,n,a,o){Ju=!1;var u=t.updateQueue;Ia=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ie=H.next;H.next=null,_===null?f=ie:_.next=ie,_=H;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,C=pe.lastBaseUpdate,C!==_&&(C===null?pe.firstBaseUpdate=ie:C.next=ie,pe.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;_=0,pe=ie=H=null,C=f;do{var le=C.lane&-536870913,ue=le!==C.lane;if(ue?(At&le)===le:(o&le)===le){le!==0&&le===as&&(Ju=!0),pe!==null&&(pe=pe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,it=C;le=n;var Yt=a;switch(it.tag){case 1:if(Ze=it.payload,typeof Ze=="function"){xe=Ze.call(Yt,xe,le);break e}xe=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=it.payload,le=typeof Ze=="function"?Ze.call(Yt,xe,le):Ze,le==null)break e;xe=x({},xe,le);break e;case 2:Ia=!0}}le=C.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pe===null?(ie=pe=ue,H=xe):pe=pe.next=ue,_|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ue=C,C=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);pe===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Xa|=_,t.lanes=_,t.memoizedState=xe}}function xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xp(a[t],n)}var ls=F(null),Nl=F(0);function Sp(t,n){t=pa,ye(Nl,t),ye(ls,n),pa=t|n.baseLanes}function ju(){ye(Nl,pa),ye(ls,ls.current)}function $u(){pa=Nl.current,Y(ls),Y(Nl)}var ri=F(null),Si=null;function Ha(t){var n=t.alternate;ye(cn,cn.current&1),ye(ri,t),Si===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(Si=t)}function ef(t){ye(cn,cn.current),ye(ri,t),Si===null&&(Si=t)}function yp(t){t.tag===22?(ye(cn,cn.current),ye(ri,t),Si===null&&(Si=t)):Va()}function Va(){ye(cn,cn.current),ye(ri,ri.current)}function si(t){Y(ri),Si===t&&(Si=null),Y(cn)}var cn=F(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||oh(a)||lh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,pt=null,Zt=null,pn=null,Pl=!1,cs=!1,Tr=!1,Fl=0,xo=0,us=null,h2=0;function on(){throw Error(r(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,f){return sa=f,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?rm:vf,Tr=!1,f=a(o,u),Tr=!1,cs&&(f=bp(n,a,o,u)),Ep(t),f}function Ep(t){z.H=yo;var n=Zt!==null&&Zt.next!==null;if(sa=0,pn=Zt=pt=null,Pl=!1,xo=0,us=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Tl(t)&&(mn=!0))}function bp(t,n,a,o){pt=t;var u=0;do{if(cs&&(us=null),xo=0,cs=!1,25<=u)throw Error(r(301));if(u+=1,pn=Zt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=sm,f=n(a,o)}while(cs);return f}function d2(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function af(){var t=Fl!==0;return Fl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}sa=0,pn=Zt=pt=null,cs=!1,xo=Fl=0,us=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?pt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=pn===null?pt.memoizedState:pn.next;if(n!==null)pn=n,Zt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},pn===null?pt.memoizedState=pn=t:pn=pn.next=t}return pn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=xo;return xo+=1,us===null&&(us=[]),t=pp(us,t,n),n=pt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?rm:vf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===D)return Cn(t)}throw Error(r(438,String(t)))}function of(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=un();return lf(n,Zt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=_=null,H=null,ie=n,pe=!1;do{var xe=ie.lane&-536870913;if(xe!==ie.lane?(At&xe)===xe:(sa&xe)===xe){var le=ie.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),xe===as&&(pe=!0);else if((sa&le)===le){ie=ie.next,le===as&&(pe=!0);continue}else xe={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=xe,_=f):H=H.next=xe,pt.lanes|=le,Xa|=le;xe=ie.action,Tr&&a(f,xe),f=ie.hasEagerState?ie.eagerState:a(f,xe)}else le={lane:xe,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(C=H=le,_=f):H=H.next=le,pt.lanes|=xe,Xa|=xe;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?_=f:H.next=C,!ii(f,t.memoizedState)&&(mn=!0,pe&&(a=rs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ii(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Ap(t,n,a){var o=pt,u=un(),f=wt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ii((Zt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,hf(Cp.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,fs(9,{destroy:void 0},Rp.bind(null,o,u,a,n),null),Jt===null)throw Error(r(349));f||(sa&127)!==0||Tp(o,n,a)}return a}function Tp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=Il(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rp(t,n,a,o){n.value=a,n.getSnapshot=o,wp(n)&&Dp(t)}function Cp(t,n,a){return a(function(){wp(n)&&Dp(t)})}function wp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Dp(t){var n=_r(t,2);n!==null&&Yn(n,t,2)}function uf(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Tr){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function Up(t,n,a,o){return t.baseState=a,lf(t,Zt,typeof o=="function"?o:oa)}function p2(t,n,a,o,u){if(Gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var C=a(u,o),H=z.S;H!==null&&H(_,C),Np(t,n,C)}catch(ie){ff(t,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(u,o),Np(t,n,f)}catch(ie){ff(t,n,ie)}}function Np(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Op(t,n,o)},function(o){return ff(t,n,o)}):Op(t,n,a)}function Op(t,n,a){n.status="fulfilled",n.value=a,Pp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lp(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==o)}t.action=null}function Pp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Ip(t,n){if(wt){var a=Jt.formState;if(a!==null){e:{var o=pt;if(wt){if($t){t:{for(var u=$t,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=yi(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=o,a=nm.bind(null,pt,o),o.dispatch=a,o=uf(!1),f=_f.bind(null,pt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=p2.bind(null,pt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Bp(t){var n=un();return zp(n,Zt,t)}function zp(t,n,a){if(n=lf(t,n,Fp)[0],t=zl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(_){throw _===ss?wl:_}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,fs(9,{destroy:void 0},m2.bind(null,u,a),null)),[o,f,t]}function m2(t,n){t.action=n}function Hp(t){var n=un(),a=Zt;if(a!==null)return zp(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=Il(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Vp(){return un().memoizedState}function Hl(t,n,a,o){var u=zn();pt.flags|=t,u.memoizedState=fs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Zt!==null&&o!==null&&tf(o,Zt.memoizedState.deps)?u.memoizedState=fs(n,f,a,o):(pt.flags|=t,u.memoizedState=fs(1|n,f,a,o))}function Gp(t,n){Hl(8390656,8,t,n)}function hf(t,n){Vl(2048,8,t,n)}function g2(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=Il(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function kp(t){var n=un().memoizedState;return g2({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return Vl(4,2,t,n)}function Wp(t,n){return Vl(4,4,t,n)}function Zp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qp(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Zp.bind(null,n,t),a)}function df(){}function Yp(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Kp(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),Tr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(sa&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Qm(),pt.lanes|=t,Xa|=t,a)}function Qp(t,n,a,o){return ii(a,n)?a:ls.current!==null?(t=pf(t,a,o),ii(t,n)||(mn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(At&261930)===0?(mn=!0,t.memoizedState=a):(t=Qm(),pt.lanes|=t,Xa|=t,n)}function Jp(t,n,a,o,u){var f=V.p;V.p=f!==0&&8>f?f:8;var _=z.T,C={};z.T=C,_f(t,!1,n,a);try{var H=u(),ie=z.S;if(ie!==null&&ie(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=f2(H,o);So(t,n,pe,ci(t))}else So(t,n,o,ci(t))}catch(xe){So(t,n,{then:function(){},status:"rejected",reason:xe},ci())}finally{V.p=f,_!==null&&C.types!==null&&(_.types=C.types),z.T=_}}function _2(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=jp(t).queue;Jp(t,u,n,ee,a===null?_2:function(){return $p(t),a(o)})}function jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $p(t){var n=jp(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},ci())}function gf(){return Cn(Bo)}function em(){return un().memoizedState}function tm(){return un().memoizedState}function v2(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Ba(a);var o=za(n,t,a);o!==null&&(Yn(o,n,a),go(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function x2(t,n,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?im(n,a):(a=Nu(t,n,a,o),a!==null&&(Yn(a,t,o),am(a,n,o)))}function nm(t,n,a){var o=ci();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))im(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,C=f(_,a);if(u.hasEagerState=!0,u.eagerState=C,ii(C,_))return yl(t,n,u,0),Jt===null&&Sl(),!1}catch{}finally{}if(a=Nu(t,n,u,o),a!==null)return Yn(a,t,o),am(a,n,o),!0}return!1}function _f(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(r(479))}else n=Nu(t,a,o,2),n!==null&&Yn(n,t,2)}function Gl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function im(t,n){cs=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function am(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,$n(t,a)}}var yo={readContext:Cn,use:Bl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};yo.useEffectEvent=on;var rm={readContext:Cn,use:Bl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Gp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Zp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Tr){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Tr){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=x2.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=nm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=zn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=Jp.bind(null,pt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=zn();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(At&127)!==0||Tp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gp(Cp.bind(null,o,f,t),[t]),o.flags|=2048,fs(9,{destroy:void 0},Rp.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=Jt.identifierPrefix;if(wt){var a=Hi,o=zi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=h2++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Ip,useActionState:Ip,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return zn().memoizedState=v2.bind(null,pt)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Cn,use:Bl,useCallback:Yp,useContext:Cn,useEffect:hf,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Kp,useReducer:zl,useRef:Vp,useState:function(){return zl(oa)},useDebugValue:df,useDeferredValue:function(t,n){var a=un();return Qp(a,Zt.memoizedState,t,n)},useTransition:function(){var t=zl(oa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Ap,useId:em,useHostTransitionStatus:gf,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=un();return Up(a,Zt,t,n)},useMemoCache:of,useCacheRefresh:tm};vf.useEffectEvent=kp;var sm={readContext:Cn,use:Bl,useCallback:Yp,useContext:Cn,useEffect:hf,useImperativeHandle:qp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Kp,useReducer:cf,useRef:Vp,useState:function(){return cf(oa)},useDebugValue:df,useDeferredValue:function(t,n){var a=un();return Zt===null?pf(a,t,n):Qp(a,Zt.memoizedState,t,n)},useTransition:function(){var t=cf(oa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:Ap,useId:em,useHostTransitionStatus:gf,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=un();return Zt!==null?Up(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:tm};sm.useEffectEvent=kp;function xf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Yn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Yn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Yn(n,t,a),go(n,t,a))}};function om(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function lm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Mf.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function cm(t){Ml(t)}function um(t){console.error(t)}function fm(t){Ml(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function hm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function dm(t){return t=Ba(t),t.tag=3,t}function pm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){hm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){hm(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function M2(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&is(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?tc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(t,o,u)),!1}throw Error(r(435,a.tag))}return Zf(t,o,u),tc(),!1}if(wt)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(t=Error(r(422),{cause:o}),uo(_i(t,a)))):(o!==zu&&(n=Error(r(423),{cause:o}),uo(_i(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=_i(o,a),u=Sf(t.stateNode,o,u),Qu(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=_i(f,a),Do===null?Do=[f]:Do.push(f),ln!==4&&(ln=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=dm(u),pm(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(r(461)),mn=!1;function wn(t,n,a,o){n.child=t===null?vp(n,null,a,o):Ar(n,t.child,a,o)}function mm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var C in o)C!=="ref"&&(_[C]=o[C])}else _=o;return Sr(n),o=nf(t,n,a,_,f,u),C=af(),t!==null&&!mn?(rf(t,n,u),la(t,n,u)):(wt&&C&&Iu(n),n.flags|=1,wn(t,n,o,u),n.child)}function gm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_m(t,n,f,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Df(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(_,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=na(f,o),t.ref=n.ref,t.return=n,n.child=t}function _m(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(oo(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Df(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,la(t,n,u)}return Ef(t,n,a,o,u)}function vm(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return xm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):ju(),yp(n);else return o=n.lanes=536870912,xm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),Sp(n,f),Va(),n.memoizedState=null):(t!==null&&Cl(n,null),ju(),Va());return wn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xm(t,n,a,o,u){var f=Zu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Cl(n,null),ju(),yp(n),t!==null&&is(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=Zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mm(t,n,a){return Ar(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function S2(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,Eo(null,t);if(ef(n),(t=$t)?(t=L1(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return Xl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=Mm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||is(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Jt,o!==null&&(_=ei(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,_r(t,_),Yn(o,t,_),yf;tc(),n=Mm(t,n,a)}else t=f.treeContext,$t=yi(_.nextSibling),Rn=n,wt=!0,Oa=null,Mi=!1,t!==null&&sp(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ef(t,n,a,o,u){return Sr(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!mn?(rf(t,n,u),la(t,n,u)):(wt&&o&&Iu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Sm(t,n,a,o,u,f){return Sr(n),n.updateQueue=null,a=bp(n,o,a,u),Ep(t),o=af(),t!==null&&!mn?(rf(t,n,f),la(t,n,f)):(wt&&o&&Iu(n),n.flags|=1,wn(t,n,a,f),n.child)}function ym(t,n,a,o,u){if(Sr(n),n.stateNode===null){var f=$r,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Yu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):$r,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(xf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Mf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,H=Rr(a,C);f.props=H;var ie=f.context,pe=a.contextType;_=$r,typeof pe=="object"&&pe!==null&&(_=Cn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ie!==_)&&lm(n,f,o,_),Ia=!1;var le=n.memoizedState;f.state=le,vo(n,o,f,u),_o(),ie=n.memoizedState,C||le!==ie||Ia?(typeof xe=="function"&&(xf(n,a,xe,o),ie=n.memoizedState),(H=Ia||om(n,a,H,o,le,ie,_))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=_,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),_=n.memoizedProps,pe=Rr(a,_),f.props=pe,xe=n.pendingProps,le=f.context,ie=a.contextType,H=$r,typeof ie=="object"&&ie!==null&&(H=Cn(ie)),C=a.getDerivedStateFromProps,(ie=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||le!==H)&&lm(n,f,o,H),Ia=!1,le=n.memoizedState,f.state=le,vo(n,o,f,u),_o();var ue=n.memoizedState;_!==xe||le!==ue||Ia||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof C=="function"&&(xf(n,a,C,o),ue=n.memoizedState),(pe=Ia||om(n,a,pe,o,le,ue,H)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=H,o=pe):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ar(n,t.child,null,u),n.child=Ar(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=la(t,n,u),t}function Em(t,n,a,o){return xr(),n.flags|=256,wn(t,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:hp()}}function Tf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function bm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Ha(n):Va(),(t=$t)?(t=L1(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:zi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Pa(n);return lh(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Va(),u=n.mode,C=Zl({mode:"hidden",children:C},u),o=vr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Af(a),o.childLanes=Tf(t,_,a),n.memoizedState=bf,Eo(null,o)):(Ha(n),Rf(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),C=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),C=vr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ar(n,t.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Tf(t,_,a),n.memoizedState=bf,n=Eo(null,o));else if(Ha(n),lh(C)){if(_=C.nextSibling&&C.nextSibling.dataset,_)var ie=_.dgst;_=ie,o=Error(r(419)),o.stack="",o.digest=_,uo({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(mn||is(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=Jt,_!==null&&(o=ei(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,_r(t,o),Yn(_,t,o),yf;oh(C)||tc(),n=Cf(t,n,a)}else oh(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,$t=yi(C.nextSibling),Rn=n,wt=!0,Oa=null,Mi=!1,t!==null&&sp(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Va(),C=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=na(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?C=na(ie,C):(C=vr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Eo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Af(a):(u=C.cachePool,u!==null?(H=dn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=hp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Tf(t,_,a),n.memoizedState=bf,Eo(t.child,o)):(Ha(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Ar(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Am(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function wf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Tm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=cn.current,C=(_&2)!==0;if(C?(_=_&1|2,n.flags|=128):_&=1,ye(cn,_),wn(t,n,o,a),o=wt?co:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,a,n);else if(t.tag===19)Am(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,f,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function y2(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Fa(n,dn,t.memoizedState.cache),xr();break;case 27:case 5:nt(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?bm(t,n,a):(Ha(n),t=la(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(is(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Tm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ye(cn,cn.current),o)break;return null;case 22:return n.lanes=0,vm(t,n,a,n.pendingProps);case 24:Fa(n,dn,t.memoizedState.cache)}return la(t,n,a)}function Rm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return mn=!1,y2(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,wt&&(n.flags&1048576)!==0&&rp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")Ou(t)?(o=Rr(t,o),n.tag=1,n=ym(null,n,t,o,a)):(n.tag=0,n=Ef(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===R){n.tag=11,n=mm(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=gm(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(r(306,n,""))}}return n;case 0:return Ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rr(o,n.pendingProps),ym(t,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),vo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Fa(n,dn,o),o!==f.cache&&ku(n,[dn],a,!0),_o(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Em(t,n,o,a);break e}else if(o!==u){u=_i(Error(r(424)),n),uo(u),n=Em(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=yi(t.firstChild),Rn=n,wt=!0,Oa=null,Mi=!0,a=vp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xr(),o===u){n=la(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=B1(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=lc(se.current).createElement(a),o[fn]=n,o[Tn]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=B1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&wt&&(o=n.stateNode=P1(n.type,n.pendingProps,se.current),Rn=n,Mi=!0,u=$t,Ka(n.type)?(ch=u,$t=yi(o.firstChild)):$t=u),wn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=$t)&&(o=j2(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Rn=n,$t=yi(o.firstChild),Mi=!1,u=!0):u=!1),u||Pa(n)),nt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,ah(u,f)?o=null:_!==null&&ah(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,d2,null,null,a),Bo._currentValue=u),Wl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=$t)&&(a=$2(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Rn=n,$t=null,t=!0):t=!1),t||Pa(n)),null;case 13:return bm(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ar(n,null,o,a):wn(t,n,o,a),n.child;case 11:return mm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Sr(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return gm(t,n,n.type,n.pendingProps,a);case 15:return _m(t,n,n.type,n.pendingProps,a);case 19:return Tm(t,n,a);case 31:return S2(t,n,a);case 22:return vm(t,n,a,n.pendingProps);case 24:return Sr(n),o=Cn(dn),t===null?(u=Zu(),u===null&&(u=Jt,f=Xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Yu(n),Fa(n,dn,u)):((t.lanes&a)!==0&&(Ku(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=f.cache,Fa(n,dn,o),o!==u.cache&&ku(n,[dn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ca(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e1())t.flags|=8192;else throw br=Dl,qu}else t.flags&=-16777217}function Cm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k1(n))if(e1())t.flags|=8192;else throw br=Dl,qu}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,ms|=n)}function bo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function E2(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ns(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ca(n),f!==null?(en(n),Cm(n,f)):(en(n),Uf(n,u,null,o,a))):f?f!==t.memoizedState?(ca(n),en(n),Cm(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),en(n),Uf(n,u,t,o,a)),null;case 27:if(Qe(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=Re.current,ns(n)?op(n):(t=P1(u,o,a),n.stateNode=t,ca(n))}return en(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(f=Re.current,ns(n))op(n);else{var _=lc(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[fn]=n,f[Tn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ca(n)}}return en(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,ns(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||b1(t.nodeValue,a)),t||Pa(n,!0)}else t=lc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ns(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ns(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),en(n),null);case 4:return ze(),t===null&&$f(n.stateNode.containerInfo),en(n),null;case 10:return ra(n.type),en(n),null;case 19:if(Y(cn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ol(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)np(a,t),a=a.sibling;return ye(cn,cn.current&1|2),wt&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&mt()>jl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!wt)return en(n),null}else 2*mt()-o.renderingStartTime>jl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=mt(),t.sibling=null,a=cn.current,ye(cn,u?a&1|2:a&1),wt&&ia(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return si(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(yr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function b2(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(dn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(cn),null;case 4:return ze(),null;case 10:return ra(n.type),null;case 22:case 23:return si(n),$u(),t!==null&&Y(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function wm(t,n){switch(Bu(n),n.tag){case 3:ra(dn),ze();break;case 26:case 27:case 5:Qe(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Y(cn);break;case 10:ra(n.type);break;case 22:case 23:si(n),$u(),t!==null&&Y(yr);break;case 24:ra(dn)}}function Ao(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(C){kt(n,n.return,C)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,C=_.destroy;if(C!==void 0){_.destroy=void 0,u=n;var H=a,ie=C;try{ie()}catch(pe){kt(u,H,pe)}}}o=o.next}while(o!==f)}}catch(pe){kt(n,n.return,pe)}}function Dm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(o){kt(t,t.return,o)}}}function Um(t,n,a){a.props=Rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function Lm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Lf(t,n,a){try{var o=t.stateNode;Z2(o,t.type,a,n),o[Tn]=n}catch(u){kt(t,t.return,u)}}function Nm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function Yl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Yl(t,n,a),t=t.sibling;t!==null;)Yl(t,n,a),t=t.sibling}function Om(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[fn]=t,n[Tn]=a}catch(f){kt(t,t.return,f)}}var ua=!1,gn=!1,Pf=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,En=null;function A2(t,n){if(t=t.containerInfo,nh=mc,t=q0(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,C=-1,H=-1,ie=0,pe=0,xe=t,le=null;t:for(;;){for(var ue;xe!==a||u!==0&&xe.nodeType!==3||(C=_+u),xe!==f||o!==0&&xe.nodeType!==3||(H=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(ue=xe.firstChild)!==null;)le=xe,xe=ue;for(;;){if(xe===t)break t;if(le===a&&++ie===u&&(C=_),le===f&&++pe===o&&(H=_),(ue=xe.nextSibling)!==null)break;xe=le,le=xe.parentNode}xe=ue}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:t,selectionRange:a},mc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=Rr(a.type,u);t=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){kt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function Fm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Ao(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){kt(a,a.return,_)}else{var u=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){kt(a,a.return,_)}}o&64&&Dm(a),o&512&&To(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(_){kt(a,a.return,_)}}break;case 27:n===null&&o&4&&Om(a);case 26:case 5:ha(t,a),n===null&&o&4&&Lm(a),o&512&&To(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&zm(t,a);break;case 13:ha(t,a),o&4&&Hm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=O2.bind(null,a),ex(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||gn,u=ua;var f=gn;ua=o,(gn=n)&&!f?da(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),ua=u,gn=f}break;case 30:break;default:ha(t,a)}}function Im(t){var n=t.alternate;n!==null&&(t.alternate=null,Im(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Xn=!1;function fa(t,n,a){for(a=a.child;a!==null;)Bm(t,n,a),a=a.sibling}function Bm(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:gn||Vi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Vi(a,n);var o=rn,u=Xn;Ka(a.type)&&(rn=a.stateNode,Xn=!1),fa(t,n,a),Po(a.stateNode),rn=o,Xn=u;break;case 5:gn||Vi(a,n);case 6:if(o=rn,u=Xn,rn=null,fa(t,n,a),rn=o,Xn=u,rn!==null)if(Xn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:rn!==null&&(Xn?(t=rn,D1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):D1(rn,a.stateNode));break;case 4:o=rn,u=Xn,rn=a.stateNode.containerInfo,Xn=!0,fa(t,n,a),rn=o,Xn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),gn||Ga(4,a,n),fa(t,n,a);break;case 1:gn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Um(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,fa(t,n,a),gn=o;break;default:fa(t,n,a)}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){kt(n,n.return,a)}}}function Hm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){kt(n,n.return,a)}}function T2(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Pm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Pm),n;default:throw Error(r(435,t.tag))}}function Kl(t,n){var a=T2(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=P2.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,C=_;e:for(;C!==null;){switch(C.tag){case 27:if(Ka(C.type)){rn=C.stateNode,Xn=!1;break e}break;case 5:rn=C.stateNode,Xn=!1;break e;case 3:case 4:rn=C.stateNode.containerInfo,Xn=!0;break e}C=C.return}if(rn===null)throw Error(r(160));Bm(f,_,u),rn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vm(n,t),n=n.sibling}var Ci=null;function Vm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),Zn(t),o&4&&(Ga(3,t,t.return),Ao(3,t),Ga(5,t,t.return));break;case 1:Wn(n,t),Zn(t),o&512&&(gn||a===null||Vi(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Wn(n,t),Zn(t),o&512&&(gn||a===null||Vi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ca]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[fn]=t,hn(f),o=f;break e;case"link":var _=V1("link","href",u).get(o+(a.href||""));if(_){for(var C=0;C<_.length;C++)if(f=_[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=V1("meta","content",u).get(o+(a.content||""))){for(C=0;C<_.length;C++)if(f=_[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(C,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[fn]=t,hn(f),o=f}t.stateNode=o}else G1(u,t.type,t.stateNode);else t.stateNode=H1(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?G1(u,t.type,t.stateNode):H1(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),Zn(t),o&512&&(gn||a===null||Vi(a,a.return)),a!==null&&o&4&&Lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),Zn(t),o&512&&(gn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{ni(u,"")}catch(Ze){kt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Lf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(Wn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){kt(t,t.return,Ze)}}break;case 3:if(fc=null,u=Ci,Ci=cc(n.containerInfo),Wn(n,t),Ci=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(Ze){kt(t,t.return,Ze)}Pf&&(Pf=!1,Gm(t));break;case 4:o=Ci,Ci=cc(t.stateNode.containerInfo),Wn(n,t),Zn(t),Ci=o;break;case 12:Wn(n,t),Zn(t);break;case 31:Wn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:Wn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=mt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=ua,pe=gn;if(ua=ie||u,gn=pe||H,Wn(n,t),gn=pe,ua=ie,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ua||gn||Cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{C=H.stateNode;var xe=H.memoizedProps.style,le=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){kt(H,H.return,Ze)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ze){kt(H,H.return,Ze)}}}else if(n.tag===18){if(a===null){H=n;try{var ue=H.stateNode;u?U1(ue,!0):U1(H.stateNode,!1)}catch(Ze){kt(H,H.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:Wn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Nm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Nf(t);Yl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ni(_,""),a.flags&=-33);var C=Nf(t);Yl(t,C,_);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=Nf(t);Of(t,ie,H);break;default:throw Error(r(161))}}catch(pe){kt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(t,n.alternate,n),n=n.sibling}function Cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Cr(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Um(n,n.return,a),Cr(n);break;case 27:Po(n.stateNode);case 26:case 5:Vi(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),Ao(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){kt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)xp(H[u],C)}catch(ie){kt(o,o.return,ie)}}a&&_&64&&Dm(f),To(f,f.return);break;case 27:Om(f);case 26:case 5:da(u,f,a),a&&o===null&&_&4&&Lm(f),To(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&zm(u,f);break;case 13:da(u,f,a),a&&_&4&&Hm(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),To(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function If(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function wi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(t,n,a,o),n=n.sibling}function km(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(t,n,a,o),u&2048&&Ao(9,n);break;case 1:wi(t,n,a,o);break;case 3:wi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){wi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,C=f.onPostCommit;typeof C=="function"&&C(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){kt(n,n.return,H)}}else wi(t,n,a,o);break;case 31:wi(t,n,a,o);break;case 13:wi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?wi(t,n,a,o):Ro(t,n):f._visibility&2?wi(t,n,a,o):(f._visibility|=2,hs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(_,n);break;case 24:wi(t,n,a,o),u&2048&&If(n.alternate,n);break;default:wi(t,n,a,o)}}function hs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,C=a,H=o,ie=_.flags;switch(_.tag){case 0:case 11:case 15:hs(f,_,C,H,u),Ao(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?hs(f,_,C,H,u):Ro(f,_):(pe._visibility|=2,hs(f,_,C,H,u)),u&&ie&2048&&Ff(_.alternate,_);break;case 24:hs(f,_,C,H,u),u&&ie&2048&&If(_.alternate,_);break;default:hs(f,_,C,H,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Ro(a,o),u&2048&&If(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function ds(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)Xm(t,n,a),t=t.sibling}function Xm(t,n,a){switch(t.tag){case 26:ds(t,n,a),t.flags&Co&&t.memoizedState!==null&&hx(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:ds(t,n,a);break;case 3:case 4:var o=Ci;Ci=cc(t.stateNode.containerInfo),ds(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,ds(t,n,a),Co=o):ds(t,n,a));break;default:ds(t,n,a)}}function Wm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,qm(o,t)}Wm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(t),t=t.sibling}function Zm(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):wo(t);break;default:wo(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,qm(o,t)}Wm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function qm(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(Im(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var R2={getCacheForType:function(t){var n=Cn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(dn).controller.signal}},C2=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Jt=null,Et=null,At=0,Gt=0,oi=null,ka=!1,ps=!1,Bf=!1,pa=0,ln=0,Xa=0,wr=0,zf=0,li=0,ms=0,Do=null,qn=null,Hf=!1,Jl=0,Ym=0,jl=1/0,$l=null,Wa=null,xn=0,Za=null,gs=null,ma=0,Vf=0,Gf=null,Km=null,Uo=0,kf=null;function ci(){return(Ft&2)!==0&&At!==0?At&-At:z.T!==null?Kf():$s()}function Qm(){if(li===0)if((At&536870912)===0||wt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),li=t}else li=536870912;return t=ri.current,t!==null&&(t.flags|=32),li}function Yn(t,n,a){(t===Jt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(_s(t,0),qa(t,At,li,!1)),ke(t,a),((Ft&2)===0||t!==Jt)&&(t===Jt&&((Ft&2)===0&&(wr|=a),ln===4&&qa(t,At,li,!1)),Gi(t))}function Jm(t,n,a){if((Ft&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?U2(t,n):Wf(t,n,!0),f=o;do{if(u===0){ps&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!w2(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var C=t;u=Do;var H=C.current.memoizedState.isDehydrated;if(H&&(_s(C,_).flags|=256),_=Wf(C,_,!1),_!==2){if(Bf&&!H){C.errorRecoveryDisabledLanes|=f,wr|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){_s(t,0),qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,li,!ka);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Jl+300-mt(),10<u)){if(qa(o,n,li,!ka),ge(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=C1(jm.bind(null,o,a,qn,$l,Hf,n,li,wr,ms,ka,f,"Throttled",-0,0),u);break e}jm(o,a,qn,$l,Hf,n,li,wr,ms,ka,f,null,-0,0)}}break}while(!0);Gi(t)}function jm(t,n,a,o,u,f,_,C,H,ie,pe,xe,le,ue){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},Xm(n,f,xe);var Ze=(f&62914560)===f?Jl-mt():(f&4194048)===f?Ym-mt():0;if(Ze=dx(xe,Ze),Ze!==null){ma=f,t.cancelPendingCommit=Ze(s1.bind(null,t,n,f,a,o,u,_,C,H,pe,xe,null,le,ue)),qa(t,f,_,!ie);return}}s1(t,n,f,a,o,u,_,C,H)}function w2(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ii(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~zf,n&=~wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-He(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Bt(t,a,n)}function ec(){return(Ft&6)===0?(Lo(0),!1):!0}function Xf(){if(Et!==null){if(Gt===0)var t=Et.return;else t=Et,aa=Mr=null,sf(t),os=null,po=0,t=Et;for(;t!==null;)wm(t.alternate,t),t=t.return;Et=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,K2(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,Xf(),Jt=t,Et=a=na(t.current,null),At=n,Gt=0,oi=null,ka=!1,ps=De(t,n),Bf=!1,ms=li=zf=wr=Xa=ln=0,qn=Do=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),f=1<<u;n|=t[u],o&=~f}return pa=n,Sl(),a}function $m(t,n){pt=null,z.H=yo,n===ss||n===wl?(n=mp(),Gt=3):n===qu?(n=mp(),Gt=4):Gt=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Et===null&&(ln=1,kl(t,_i(n,t.current)))}function e1(){var t=ri.current;return t===null?!0:(At&4194048)===At?Si===null:(At&62914560)===At||(At&536870912)!==0?t===Si:!1}function t1(){var t=z.H;return z.H=yo,t===null?yo:t}function n1(){var t=z.A;return z.A=R2,t}function tc(){ln=4,ka||(At&4194048)!==At&&ri.current!==null||(ps=!0),(Xa&134217727)===0&&(wr&134217727)===0||Jt===null||qa(Jt,At,li,!1)}function Wf(t,n,a){var o=Ft;Ft|=2;var u=t1(),f=n1();(Jt!==t||At!==n)&&($l=null,_s(t,n)),n=!1;var _=ln;e:do try{if(Gt!==0&&Et!==null){var C=Et,H=oi;switch(Gt){case 8:Xf(),_=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var ie=Gt;if(Gt=0,oi=null,vs(t,C,H,ie),a&&ps){_=0;break e}break;default:ie=Gt,Gt=0,oi=null,vs(t,C,H,ie)}}D2(),_=ln;break}catch(pe){$m(t,pe)}while(!0);return n&&t.shellSuspendCounter++,aa=Mr=null,Ft=o,z.H=u,z.A=f,Et===null&&(Jt=null,At=0,Sl()),_}function D2(){for(;Et!==null;)i1(Et)}function U2(t,n){var a=Ft;Ft|=2;var o=t1(),u=n1();Jt!==t||At!==n?($l=null,jl=mt()+500,_s(t,n)):ps=De(t,n);e:do try{if(Gt!==0&&Et!==null){n=Et;var f=oi;t:switch(Gt){case 1:Gt=0,oi=null,vs(t,n,f,1);break;case 2:case 9:if(dp(f)){Gt=0,oi=null,a1(n);break}n=function(){Gt!==2&&Gt!==9||Jt!==t||(Gt=7),Gi(t)},f.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:dp(f)?(Gt=0,oi=null,a1(n)):(Gt=0,oi=null,vs(t,n,f,7));break;case 5:var _=null;switch(Et.tag){case 26:_=Et.memoizedState;case 5:case 27:var C=Et;if(_?k1(_):C.stateNode.complete){Gt=0,oi=null;var H=C.sibling;if(H!==null)Et=H;else{var ie=C.return;ie!==null?(Et=ie,nc(ie)):Et=null}break t}}Gt=0,oi=null,vs(t,n,f,5);break;case 6:Gt=0,oi=null,vs(t,n,f,6);break;case 8:Xf(),ln=6;break e;default:throw Error(r(462))}}L2();break}catch(pe){$m(t,pe)}while(!0);return aa=Mr=null,z.H=o,z.A=u,Ft=a,Et!==null?0:(Jt=null,At=0,Sl(),ln)}function L2(){for(;Et!==null&&!Kt();)i1(Et)}function i1(t){var n=Rm(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?nc(t):Et=n}function a1(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Sm(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=Sm(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:sf(n);default:wm(a,n),n=Et=np(n,pa),n=Rm(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?nc(t):Et=n}function vs(t,n,a,o){aa=Mr=null,sf(n),os=null,po=0;var u=n.return;try{if(M2(t,u,n,a,At)){ln=1,kl(t,_i(a,t.current)),Et=null;return}}catch(f){if(u!==null)throw Et=u,f;ln=1,kl(t,_i(a,t.current)),Et=null;return}n.flags&32768?(wt||o===1?t=!0:ps||(At&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),r1(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){r1(n,ka);return}t=n.return;var a=E2(n.alternate,n,pa);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);ln===0&&(ln=5)}function r1(t,n){do{var a=b2(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);ln=6,Et=null}function s1(t,n,a,o,u,f,_,C,H){t.cancelPendingCommit=null;do ic();while(xn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Lu,tn(t,a,f,_,C,H),t===Jt&&(Et=Jt=null,At=0),gs=n,Za=t,ma=a,Vf=f,Gf=u,Km=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,F2(K,function(){return f1(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=V.p,V.p=2,_=Ft,Ft|=4;try{A2(t,n,a)}finally{Ft=_,V.p=u,z.T=o}}xn=1,o1(),l1(),c1()}}function o1(){if(xn===1){xn=0;var t=Za,n=gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{Vm(n,t);var f=ih,_=q0(t.containerInfo),C=f.focusedElem,H=f.selectionRange;if(_!==C&&C&&C.ownerDocument&&Z0(C.ownerDocument.documentElement,C)){if(H!==null&&Ru(C)){var ie=H.start,pe=H.end;if(pe===void 0&&(pe=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(pe,C.value.length);else{var xe=C.ownerDocument||document,le=xe&&xe.defaultView||window;if(le.getSelection){var ue=le.getSelection(),Ze=C.textContent.length,it=Math.min(H.start,Ze),Yt=H.end===void 0?it:Math.min(H.end,Ze);!ue.extend&&it>Yt&&(_=Yt,Yt=it,it=_);var Q=W0(C,it),X=W0(C,Yt);if(Q&&X&&(ue.rangeCount!==1||ue.anchorNode!==Q.node||ue.anchorOffset!==Q.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var ne=xe.createRange();ne.setStart(Q.node,Q.offset),ue.removeAllRanges(),it>Yt?(ue.addRange(ne),ue.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),ue.addRange(ne))}}}}for(xe=[],ue=C;ue=ue.parentNode;)ue.nodeType===1&&xe.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xe.length;C++){var _e=xe[C];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}mc=!!nh,ih=nh=null}finally{Ft=u,V.p=o,z.T=a}}t.current=n,xn=2}}function l1(){if(xn===2){xn=0;var t=Za,n=gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{Fm(t,n.alternate,n)}finally{Ft=u,V.p=o,z.T=a}}xn=3}}function c1(){if(xn===4||xn===3){xn=0,W();var t=Za,n=gs,a=ma,o=Km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,gs=Za=null,u1(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Wa=null),js(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=V.p,V.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var C=o[_];f(C.value,{componentStack:C.stack})}}finally{z.T=n,V.p=u}}(ma&3)!==0&&ic(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?Uo++:(Uo=0,kf=t):Uo=0,Lo(0)}}function u1(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function ic(){return o1(),l1(),c1(),f1()}function f1(){if(xn!==5)return!1;var t=Za,n=Vf;Vf=0;var a=js(ma),o=z.T,u=V.p;try{V.p=32>a?32:a,z.T=null,a=Gf,Gf=null;var f=Za,_=ma;if(xn=0,gs=Za=null,ma=0,(Ft&6)!==0)throw Error(r(331));var C=Ft;if(Ft|=4,Zm(f.current),km(f,f.current,_,a),Ft=C,Lo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{V.p=u,z.T=o,u1(t,n)}}function h1(t,n,a){n=_i(a,n),n=Sf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(ke(t,2),Gi(t))}function kt(t,n,a){if(t.tag===3)h1(t,t,a);else for(;n!==null;){if(n.tag===3){h1(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){t=_i(a,t),a=dm(2),o=za(n,a,2),o!==null&&(pm(a,o,n,t),ke(o,2),Gi(o));break}}n=n.return}}function Zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new C2;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=N2.bind(null,t,n,a),n.then(t,t))}function N2(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(At&a)===a&&(ln===4||ln===3&&(At&62914560)===At&&300>mt()-Jl?(Ft&2)===0&&_s(t,0):zf|=a,ms===At&&(ms=0)),Gi(t)}function d1(t,n){n===0&&(n=Ee()),t=_r(t,n),t!==null&&(ke(t,n),Gi(t))}function O2(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),d1(t,a)}function P2(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),d1(t,a)}function F2(t,n){return ft(t,n)}var ac=null,xs=null,qf=!1,rc=!1,Yf=!1,Ya=0;function Gi(t){t!==xs&&t.next===null&&(xs===null?ac=xs=t:xs=xs.next=t),rc=!0,qf||(qf=!0,B2())}function Lo(t,n){if(!Yf&&rc){Yf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-He(42|t)+1)-1,f&=u&~(_&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_1(o,f))}else f=At,f=ge(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,_1(o,f));o=o.next}while(a);Yf=!1}}function I2(){p1()}function p1(){rc=qf=!1;var t=0;Ya!==0&&Y2()&&(t=Ya);for(var n=mt(),a=null,o=ac;o!==null;){var u=o.next,f=m1(o,n);f===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(xs=a)):(a=o,(t!==0||(f&3)!==0)&&(rc=!0)),o=u}xn!==0&&xn!==5||Lo(t),Ya!==0&&(Ya=0)}function m1(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-He(f),C=1<<_,H=u[_];H===-1?((C&a)===0||(C&o)!==0)&&(u[_]=Be(C,n)):H<=n&&(t.expiredLanes|=C),f&=~C}if(n=Jt,a=At,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&rt(o),js(a)){case 2:case 8:a=y;break;case 32:a=K;break;case 268435456:a=ce;break;default:a=K}return o=g1.bind(null,t),a=ft(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&rt(o),t.callbackPriority=2,t.callbackNode=null,2}function g1(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=At;return o=ge(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Jm(t,o,n),m1(t,mt()),t.callbackNode!=null&&t.callbackNode===a?g1.bind(null,t):null)}function _1(t,n){if(ic())return null;Jm(t,n,!0)}function B2(){Q2(function(){(Ft&6)!==0?ft(P,I2):p1()})}function Kf(){if(Ya===0){var t=as;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),Ya=t}return Ya}function v1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dr(""+t)}function x1(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function z2(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v1((u[Tn]||null).action),_=o.submitter;_&&(n=(n=_[Tn]||null)?v1(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var C=new _l("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var H=_?x1(u,_):new FormData(u);mf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(C.preventDefault(),H=_?x1(u,_):new FormData(u),mf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Qf=0;Qf<Uu.length;Qf++){var Jf=Uu[Qf],H2=Jf.toLowerCase(),V2=Jf[0].toUpperCase()+Jf.slice(1);Ri(H2,"on"+V2)}Ri(Q0,"onAnimationEnd"),Ri(J0,"onAnimationIteration"),Ri(j0,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(i2,"onTransitionRun"),Ri(a2,"onTransitionStart"),Ri(r2,"onTransitionCancel"),Ri($0,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function M1(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var C=o[_],H=C.instance,ie=C.currentTarget;if(C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(pe){Ml(pe)}u.currentTarget=null,f=H}else for(_=0;_<o.length;_++){if(C=o[_],H=C.instance,ie=C.currentTarget,C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ie;try{f(u)}catch(pe){Ml(pe)}u.currentTarget=null,f=H}}}}function bt(t,n){var a=n[ur];a===void 0&&(a=n[ur]=new Set);var o=t+"__bubble";a.has(o)||(S1(n,t,2,!1),a.add(o))}function jf(t,n,a){var o=0;n&&(o|=4),S1(a,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[sc]){t[sc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(G2.has(a)||jf(a,!1,t),jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,jf("selectionchange",!1,n))}}function S1(t,n,a,o){switch(Q1(n)){case 2:var u=gx;break;case 8:u=_x;break;default:u=ph}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function eh(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var C=o.stateNode.containerInfo;if(C===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;C!==null;){if(_=ji(C),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=f=_;continue e}C=C.parentNode}}o=o.return}T0(function(){var ie=f,pe=gu(a),xe=[];e:{var le=ep.get(t);if(le!==void 0){var ue=_l,Ze=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":ue=Pv;break;case"focusin":Ze="focus",ue=yu;break;case"focusout":Ze="blur",ue=yu;break;case"beforeblur":case"afterblur":ue=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=w0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Bv;break;case Q0:case J0:case j0:ue=Tv;break;case $0:ue=Hv;break;case"scroll":case"scrollend":ue=Sv;break;case"wheel":ue=Gv;break;case"copy":case"cut":case"paste":ue=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=U0;break;case"toggle":case"beforetoggle":ue=Xv}var it=(n&4)!==0,Yt=!it&&(t==="scroll"||t==="scrollend"),Q=it?le!==null?le+"Capture":null:le;it=[];for(var X=ie,ne;X!==null;){var _e=X;if(ne=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ne===null||Q===null||(_e=eo(X,Q),_e!=null&&it.push(Oo(X,_e,ne))),Yt)break;X=X.return}0<it.length&&(le=new ue(le,Ze,null,a,pe),xe.push({event:le,listeners:it}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==mu&&(Ze=a.relatedTarget||a.fromElement)&&(ji(Ze)||Ze[Gn]))break e;if((ue||le)&&(le=pe.window===pe?pe:(le=pe.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(Ze=a.relatedTarget||a.toElement,ue=ie,Ze=Ze?ji(Ze):null,Ze!==null&&(Yt=c(Ze),it=Ze.tag,Ze!==Yt||it!==5&&it!==27&&it!==6)&&(Ze=null)):(ue=null,Ze=ie),ue!==Ze)){if(it=w0,_e="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(it=U0,_e="onPointerLeave",Q="onPointerEnter",X="pointer"),Yt=ue==null?le:hr(ue),ne=Ze==null?le:hr(Ze),le=new it(_e,X+"leave",ue,a,pe),le.target=Yt,le.relatedTarget=ne,_e=null,ji(pe)===ie&&(it=new it(Q,X+"enter",Ze,a,pe),it.target=ne,it.relatedTarget=Yt,_e=it),Yt=_e,ue&&Ze)t:{for(it=k2,Q=ue,X=Ze,ne=0,_e=Q;_e;_e=it(_e))ne++;_e=0;for(var tt=X;tt;tt=it(tt))_e++;for(;0<ne-_e;)Q=it(Q),ne--;for(;0<_e-ne;)X=it(X),_e--;for(;ne--;){if(Q===X||X!==null&&Q===X.alternate){it=Q;break t}Q=it(Q),X=it(X)}it=null}else it=null;ue!==null&&y1(xe,le,ue,it,!1),Ze!==null&&Yt!==null&&y1(xe,Yt,Ze,it,!0)}}e:{if(le=ie?hr(ie):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Ot=z0;else if(I0(le))if(H0)Ot=e2;else{Ot=jv;var Ke=Jv}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&It(ie.elementType)&&(Ot=z0):Ot=$v;if(Ot&&(Ot=Ot(t,ie))){B0(xe,Ot,a,pe);break e}Ke&&Ke(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&yt(le,"number",le.value)}switch(Ke=ie?hr(ie):window,t){case"focusin":(I0(Ke)||Ke.contentEditable==="true")&&(Qr=Ke,Cu=ie,lo=null);break;case"focusout":lo=Cu=Qr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Y0(xe,a,pe);break;case"selectionchange":if(n2)break;case"keydown":case"keyup":Y0(xe,a,pe)}var _t;if(bu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Kr?P0(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(L0&&a.locale!=="ko"&&(Kr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Kr&&(_t=R0()):(La=pe,xu="value"in La?La.value:La.textContent,Kr=!0)),Ke=oc(ie,Tt),0<Ke.length&&(Tt=new D0(Tt,t,null,a,pe),xe.push({event:Tt,listeners:Ke}),_t?Tt.data=_t:(_t=F0(a),_t!==null&&(Tt.data=_t)))),(_t=Zv?qv(t,a):Yv(t,a))&&(Tt=oc(ie,"onBeforeInput"),0<Tt.length&&(Ke=new D0("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ke,listeners:Tt}),Ke.data=_t)),z2(xe,t,ie,a,pe)}M1(xe,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,f)),u=eo(t,n),u!=null&&o.push(Oo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function k2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y1(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var C=a,H=C.alternate,ie=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ie===null||(H=ie,u?(ie=eo(a,f),ie!=null&&_.unshift(Oo(a,ie,H))):u||(ie=eo(a,f),ie!=null&&_.push(Oo(a,ie,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var X2=/\r\n?/g,W2=/\u0000|\uFFFD/g;function E1(t){return(typeof t=="string"?t:""+t).replace(X2,`
`).replace(W2,"")}function b1(t,n){return n=E1(n),E1(t)===n}function qt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ni(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ti(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Ne(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ne(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Ne(t,a,o))}}function th(t,n,a,o,u,f){switch(a){case"style":Ti(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ni(t,o):(typeof o=="number"||typeof o=="bigint")&&ni(t,""+o);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ne(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,f,_,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":bt("invalid",t);var C=f=_=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":_=pe;break;case"checked":H=pe;break;case"defaultChecked":ie=pe;break;case"value":f=pe;break;case"defaultValue":C=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:qt(t,n,o,pe,a,null)}}Ln(t,f,C,H,ie,_,u,!1);return;case"select":bt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":_=C;break;case"multiple":o=C;default:qt(t,n,u,C,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":bt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(C=a[_],C!=null))switch(_){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:qt(t,n,_,C,a,null)}Ai(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(t,n,H,o,a,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)bt(No[o],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,ie,o,a,null)}return;default:if(It(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&th(t,n,pe,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&qt(t,n,C,o,a,null))}function Z2(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,C=null,H=null,ie=null,pe=null;for(ue in a){var xe=a[ue];if(a.hasOwnProperty(ue)&&xe!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(ue)||qt(t,n,ue,null,o,xe)}}for(var le in o){var ue=o[le];if(xe=a[le],o.hasOwnProperty(le)&&(ue!=null||xe!=null))switch(le){case"type":f=ue;break;case"name":u=ue;break;case"checked":ie=ue;break;case"defaultChecked":pe=ue;break;case"value":_=ue;break;case"defaultValue":C=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==xe&&qt(t,n,le,ue,o,xe)}}Ve(t,_,C,H,ie,pe,f,u);return;case"select":ue=_=C=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ue=H;default:o.hasOwnProperty(f)||qt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":_=f;default:f!==H&&qt(t,n,u,f,o,H)}n=C,a=_,o=ue,le!=null?vn(t,!!a,le,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qt(t,n,C,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&qt(t,n,_,u,o,f)}ti(t,le,ue);return;case"option":for(var Ze in a)if(le=a[Ze],a.hasOwnProperty(Ze)&&le!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:qt(t,n,Ze,null,o,le)}for(H in o)if(le=o[H],ue=a[H],o.hasOwnProperty(H)&&le!==ue&&(le!=null||ue!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:qt(t,n,H,le,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)le=a[it],a.hasOwnProperty(it)&&le!=null&&!o.hasOwnProperty(it)&&qt(t,n,it,null,o,le);for(ie in o)if(le=o[ie],ue=a[ie],o.hasOwnProperty(ie)&&le!==ue&&(le!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:qt(t,n,ie,le,o,ue)}return;default:if(It(n)){for(var Yt in a)le=a[Yt],a.hasOwnProperty(Yt)&&le!==void 0&&!o.hasOwnProperty(Yt)&&th(t,n,Yt,void 0,o,le);for(pe in o)le=o[pe],ue=a[pe],!o.hasOwnProperty(pe)||le===ue||le===void 0&&ue===void 0||th(t,n,pe,le,o,ue);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&qt(t,n,Q,null,o,le);for(xe in o)le=o[xe],ue=a[xe],!o.hasOwnProperty(xe)||le===ue||le==null&&ue==null||qt(t,n,xe,le,o,ue)}function A1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function q2(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,C=u.duration;if(f&&C&&A1(_)){for(_=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>C)break;var pe=H.transferSize,xe=H.initiatorType;pe&&A1(xe)&&(H=H.responseEnd,_+=pe*(H<C?1:(C-ie)/(H-ie)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nh=null,ih=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function T1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R1(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ah(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function Y2(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var C1=typeof setTimeout=="function"?setTimeout:void 0,K2=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,Q2=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(t){return w1.resolve(null).then(t).catch(J2)}:C1;function J2(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function D1(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var _=f.nextSibling,C=f.nodeName;f[Ca]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);Es(n)}function U1(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),wa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function j2(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function $2(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function L1(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function oh(t){return t.data==="$?"||t.data==="$~"}function lh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ex(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ch=null;function N1(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function O1(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function P1(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wa(t)}var Ei=new Map,F1=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=V.d;V.d={f:tx,r:nx,D:ix,C:ax,L:rx,m:sx,X:lx,S:ox,M:cx};function tx(){var t=ga.f(),n=ec();return t||n}function nx(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?$p(n):ga.r(t)}var Ms=typeof document>"u"?null:document;function I1(t,n,a){var o=Ms;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F1.has(u)||(F1.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function ix(t){ga.D(t),I1("dns-prefetch",t,null)}function ax(t,n){ga.C(t,n),I1("preconnect",t,n)}function rx(t,n,a){ga.L(t,n,a);var o=Ms;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=Ss(t);break;case"script":f=ys(t)}Ei.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ei.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function sx(t,n){ga.m(t,n);var a=Ms;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ys(t)}if(!Ei.has(f)&&(t=x({rel:"modulepreload",href:t},n),Ei.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function ox(t,n,a){ga.S(t,n,a);var o=Ms;if(o&&t){var u=Da(o).hoistableStyles,f=Ss(t);n=n||"default";var _=u.get(f);if(!_){var C={loading:0,preload:null};if(_=o.querySelector(Fo(f)))C.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ei.get(f))&&uh(t,a);var H=_=o.createElement("link");hn(H),Dn(H,"link",t),H._p=new Promise(function(ie,pe){H.onload=ie,H.onerror=pe}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,uc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:C},u.set(f,_)}}}function lx(t,n){ga.X(t,n);var a=Ms;if(a&&t){var o=Da(a).hoistableScripts,u=ys(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=x({src:t,async:!0},n),(n=Ei.get(u))&&fh(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function cx(t,n){ga.M(t,n);var a=Ms;if(a&&t){var o=Da(a).hoistableScripts,u=ys(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=Ei.get(u))&&fh(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function B1(t,n,a,o){var u=(u=se.current)?cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ss(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ss(a.href);var f=Da(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Fo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(t,a),f||ux(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ys(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ss(t){return'href="'+Ht(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function z1(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function ux(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function ys(t){return'[src="'+Ht(t)+'"]'}function Io(t){return"script[async]"+t}function H1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),uc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ss(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=z1(a),(u=Ei.get(u))&&uh(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(C,H){_.onload=C,_.onerror=H}),Dn(f,"link",o),n.state.loading|=4,uc(f,a.precedence,t),n.instance=f;case"script":return f=ys(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,hn(u),u):(o=a,(u=Ei.get(f))&&(o=x({},a),fh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,t));return n.instance}function uc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var C=o[_];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function V1(t,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ca]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var C=o.get(_);C?C.push(f):o.set(_,[f])}}return o}function G1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hx(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ss(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=z1(o),(u=Ei.get(u))&&uh(o,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(C,H){_.onload=C,_.onerror=H}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var hh=0;function dx(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&hh===0&&(hh=62500*q2());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>hh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(px,t),dc=null,hc.call(t))}function px(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var o=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Bo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function mx(t,n,a,o,u,f,_,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function X1(t,n,a,o,u,f,_,C,H,ie,pe,xe){return t=new mx(t,n,a,_,H,ie,pe,xe,C),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),t.current=f,f.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Yu(f),t}function W1(t){return t?(t=$r,t):$r}function Z1(t,n,a,o,u,f){u=W1(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Yn(a,t,n),go(a,t,n))}function q1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dh(t,n){q1(t,n),(t=t.alternate)&&q1(t,n)}function Y1(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&Yn(n,t,67108864),dh(t,67108864)}}function K1(t){if(t.tag===13||t.tag===31){var n=ci();n=Js(n);var a=_r(t,n);a!==null&&Yn(a,t,n),dh(t,n)}}var mc=!0;function gx(t,n,a,o){var u=z.T;z.T=null;var f=V.p;try{V.p=2,ph(t,n,a,o)}finally{V.p=f,z.T=u}}function _x(t,n,a,o){var u=z.T;z.T=null;var f=V.p;try{V.p=8,ph(t,n,a,o)}finally{V.p=f,z.T=u}}function ph(t,n,a,o){if(mc){var u=mh(o);if(u===null)eh(t,n,o,gc,a),J1(t,o);else if(xx(u,t,n,a,o))o.stopPropagation();else if(J1(t,o),n&4&&-1<vx.indexOf(t)){for(;u!==null;){var f=$i(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ce(f.pendingLanes);if(_!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;_;){var H=1<<31-He(_);C.entanglements[1]|=H,_&=~H}Gi(f),(Ft&6)===0&&(jl=mt()+500,Lo(0))}}break;case 31:case 13:C=_r(f,2),C!==null&&Yn(C,f,2),ec(),dh(f,2)}if(f=mh(o),f===null&&eh(t,n,o,gc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else eh(t,n,o,null,a)}}function mh(t){return t=gu(t),gh(t)}var gc=null;function gh(t){if(gc=null,t=ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function Q1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case P:return 2;case y:return 8;case K:case te:return 32;case ce:return 268435456;default:return 32}default:return 32}}var _h=!1,Qa=null,Ja=null,ja=null,zo=new Map,Ho=new Map,$a=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J1(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Vo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=$i(n),n!==null&&Y1(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xx(t,n,a,o,u){switch(n){case"focusin":return Qa=Vo(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Vo(Ja,t,n,a,o,u),!0;case"mouseover":return ja=Vo(ja,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Vo(zo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Vo(Ho.get(f)||null,t,n,a,o,u)),!0}return!1}function j1(t){var n=ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Zr(t.priority,function(){K1(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Zr(t.priority,function(){K1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=$i(a),n!==null&&Y1(n),t.blockedOn=a,!1;n.shift()}return!0}function $1(t,n,a){_c(t)&&a.delete(n)}function Mx(){_h=!1,Qa!==null&&_c(Qa)&&(Qa=null),Ja!==null&&_c(Ja)&&(Ja=null),ja!==null&&_c(ja)&&(ja=null),zo.forEach($1),Ho.forEach($1)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,_h||(_h=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Mx)))}var xc=null;function eg(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gh(o||a)===null)continue;break}var f=$i(a);f!==null&&(t.splice(n,3),n-=3,mf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Es(t){function n(H){return vc(H,t)}Qa!==null&&vc(Qa,t),Ja!==null&&vc(Ja,t),ja!==null&&vc(ja,t),zo.forEach(n),Ho.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)j1(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Tn]||null;if(typeof f=="function")_||eg(a);else if(_){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)C=_.formAction;else if(gh(u)!==null)continue}else C=_.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),eg(a)}}}function tg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vh(t){this._internalRoot=t}Mc.prototype.render=vh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ci();Z1(a,o,t,n,null,null)},Mc.prototype.unmount=vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Z1(t.current,2,null,t,null,null),ec(),n[Gn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$s();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&j1(t)}};var ng=e.version;if(ng!=="19.2.0")throw Error(r(527,ng,"19.2.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Sx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{fe=Sc.inject(Sx),he=Sc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=cm,f=um,_=fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=X1(t,1,!1,null,null,a,o,null,u,f,_,tg),t[Gn]=n.current,$f(t),new vh(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=cm,_=um,C=fm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=X1(t,1,!0,n,a??null,o,u,H,f,_,C,tg),n.context=W1(null),a=n.current,o=ci(),o=Js(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,ke(n,a),Gi(n),t[Gn]=n.current,$f(t),new Mc(n)},ko.version="19.2.0",ko}var hg;function Nx(){if(hg)return Sh.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sh.exports=Lx(),Sh.exports}var Ox=Nx();const Px=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),U.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Fx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),U.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M109.66,146.34a8,8,0,0,1,0,11.32L83.31,184l18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l26.34-26.35A8,8,0,0,1,109.66,146.34ZM83.31,72l18.35-18.34A8,8,0,0,0,96,40H48a8,8,0,0,0-8,8V96a8,8,0,0,0,13.66,5.66L72,83.31l26.34,26.35a8,8,0,0,0,11.32-11.32ZM208,40H160a8,8,0,0,0-5.66,13.66L172.69,72,146.34,98.34a8,8,0,0,0,11.32,11.32L184,83.31l18.34,18.35A8,8,0,0,0,216,96V48A8,8,0,0,0,208,40Zm3.06,112.61a8,8,0,0,0-8.72,1.73L184,172.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L172.69,184l-18.35,18.34A8,8,0,0,0,160,216h48a8,8,0,0,0,8-8V160A8,8,0,0,0,211.06,152.61Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M214,48V96a6,6,0,0,1-12,0V62.48l-45.76,45.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM99.76,147.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l45.76-45.76a6,6,0,0,0-8.48-8.48ZM208,154a6,6,0,0,0-6,6v33.52l-45.76-45.76a6,6,0,0,0-8.48,8.48L193.52,202H160a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,208,154ZM62.48,54H96a6,6,0,0,0,0-12H48a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l45.76,45.76a6,6,0,0,0,8.48-8.48Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M212,48V96a4,4,0,0,1-8,0V57.66l-49.17,49.17a4,4,0,0,1-5.66-5.66L198.34,52H160a4,4,0,0,1,0-8h48A4,4,0,0,1,212,48ZM101.17,149.17,52,198.34V160a4,4,0,0,0-8,0v48a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8H57.66l49.17-49.17a4,4,0,0,0-5.66-5.66ZM208,156a4,4,0,0,0-4,4v38.34l-49.17-49.17a4,4,0,0,0-5.66,5.66L198.34,204H160a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,208,156ZM57.66,52H96a4,4,0,0,0,0-8H48a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l49.17,49.17a4,4,0,0,0,5.66-5.66Z"}))]]),Ix=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M241,150.65s0,0,0-.05a51.33,51.33,0,0,0-2.53-5.9L196.93,50.18a12,12,0,0,0-2.5-3.65,36,36,0,0,0-50.92,0A12,12,0,0,0,140,55V76H116V55a12,12,0,0,0-3.51-8.48,36,36,0,0,0-50.92,0,12,12,0,0,0-2.5,3.65L17.53,144.7A51.33,51.33,0,0,0,15,150.6s0,0,0,.05A52,52,0,1,0,116,168V100h24v68a52,52,0,1,0,101-17.35ZM80,62.28a12,12,0,0,1,12-1.22v63.15a51.9,51.9,0,0,0-35.9-7.62ZM64,196a28,28,0,1,1,28-28A28,28,0,0,1,64,196ZM164,61.06a12.06,12.06,0,0,1,12,1.22l23.87,54.31a51.9,51.9,0,0,0-35.9,7.62ZM192,196a28,28,0,1,1,28-28A28,28,0,0,1,192,196Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M104,168a40,40,0,1,1-40-40A40,40,0,0,1,104,168Zm88-40a40,40,0,1,0,40,40A40,40,0,0,0,192,128Z",opacity:"0.2"}),U.createElement("path",{d:"M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M233,147.24,191.43,52.6a6,6,0,0,0-1.25-1.83,30,30,0,0,0-42.42,0A6,6,0,0,0,146,55V82H110V55a6,6,0,0,0-1.76-4.25,30,30,0,0,0-42.42,0,6,6,0,0,0-1.25,1.83L23,147.24A46,46,0,1,0,110,168V94h36v74a46,46,0,1,0,87-20.76ZM64,202a34,34,0,1,1,34-34A34,34,0,0,1,64,202Zm0-80a45.77,45.77,0,0,0-18.55,3.92L75.06,58.54A18,18,0,0,1,98,57.71V137A45.89,45.89,0,0,0,64,122Zm94-64.28a18,18,0,0,1,22.94.83l29.61,67.37A45.9,45.9,0,0,0,158,137ZM192,202a34,34,0,1,1,34-34A34,34,0,0,1,192,202Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"}))]]),Bx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",opacity:"0.2"}),U.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"}))]]),zx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),U.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),Hx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),U.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),Vx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",opacity:"0.2"}),U.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"}))]]),Gx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),U.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),kx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M200,112v64a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V112Z",opacity:"0.2"}),U.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z"}))]]),Xx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),U.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),Wx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.46L92,162.13V93.87l48-37.33ZM212,128a44,44,0,0,1-11,29.11,12,12,0,1,1-18-15.88,20,20,0,0,0,0-26.43,12,12,0,0,1,18-15.86A43.94,43.94,0,0,1,212,128Zm40,0a83.87,83.87,0,0,1-21.39,56,12,12,0,0,1-17.89-16,60,60,0,0,0,0-80,12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z",opacity:"0.2"}),U.createElement("path",{d:"M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M154.64,26.61a6,6,0,0,0-6.32.65L77.94,82H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V32A6,6,0,0,0,154.64,26.61ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l60-46.66Zm50.53-108.85a38,38,0,0,1,0,50.24,6,6,0,1,1-9-7.94,26,26,0,0,0,0-34.37,6,6,0,0,1,9-7.93ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M153.76,28.41a4,4,0,0,0-4.22.43L78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V32A4,4,0,0,0,153.76,28.41ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l64-49.78Zm47-111.61a36,36,0,0,1,0,47.59,4,4,0,1,1-6-5.3,28,28,0,0,0,0-37,4,4,0,0,1,6-5.28ZM244,128a75.88,75.88,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,68,68,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.88,75.88,0,0,1,244,128Z"}))]]),Zx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M56.88,31.93A12,12,0,1,0,39.12,48.07L64.51,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V185.44l35.12,38.63a12,12,0,0,0,17.76-16.14ZM36,100H68v56H36Zm104,99.46L92,162.13V106.24L140,159Zm-31-134a12,12,0,0,1,2.11-16.84l33.51-26.07A12,12,0,0,1,164,32V94.94a12,12,0,0,1-24,0V56.54l-14.15,11A12,12,0,0,1,109,65.44Zm74,49.35a12,12,0,0,1,18-15.85,44,44,0,0,1,5.55,50.21,12,12,0,0,1-21-11.55A19.67,19.67,0,0,0,188,128,20,20,0,0,0,183,114.79ZM252,128a84.18,84.18,0,0,1-19.11,53.35,12,12,0,1,1-18.53-15.25A60,60,0,0,0,212.73,88a12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z",opacity:"0.2"}),U.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M213.92,210.62a8,8,0,1,1-11.84,10.76L160,175.09v48.6a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.55-51A4,4,0,0,1,80,176.18V87.09L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-27.21-55.46a8,8,0,0,0,11.29-.7,40,40,0,0,0,0-52.88,8,8,0,1,0-12,10.57,24,24,0,0,1,0,31.72A8,8,0,0,0,186.71,155.16Zm40.92-80.49a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66ZM153,119.87a4,4,0,0,0,7-2.7V32.25a8.27,8.27,0,0,0-2.88-6.4,8,8,0,0,0-10-.16L103.83,59.33a4,4,0,0,0-.5,5.85ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M52.44,36A6,6,0,0,0,43.56,44L78,81.94l-.08.06H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V169.92L203.56,220a6,6,0,0,0,8.88-8.08ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l.11-.08L146,156.72Zm41.5-66.53a26,26,0,0,0,0-34.37,6,6,0,1,1,9-7.93,38,38,0,0,1,0,50.24,6,6,0,0,1-9-7.94ZM107.41,66.68a6,6,0,0,1,1.06-8.42l39.85-31A6,6,0,0,1,158,32v74.83a6,6,0,0,1-12,0V44.27L115.83,67.73A6,6,0,0,1,107.41,66.68ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M51,37.31A4,4,0,0,0,45,42.69L81,82.19,78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V164.75l49,53.94a4,4,0,1,0,5.92-5.38ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l2.35-1.83L148,156Zm41-69.3a28,28,0,0,0,0-37,4,4,0,1,1,6-5.29,36,36,0,0,1,0,47.59,4,4,0,1,1-6-5.29ZM109,65.45a4,4,0,0,1,.7-5.61l39.85-31A4,4,0,0,1,156,32v74.83a4,4,0,0,1-8,0V40.18l-33.39,26A4,4,0,0,1,109,65.45ZM244,128a75.88,75.88,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,68,68,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.88,75.88,0,0,1,244,128Z"}))]]),qx=new Map([["bold",U.createElement(U.Fragment,null,U.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",U.createElement(U.Fragment,null,U.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),U.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",U.createElement(U.Fragment,null,U.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",U.createElement(U.Fragment,null,U.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",U.createElement(U.Fragment,null,U.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",U.createElement(U.Fragment,null,U.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),Yx=U.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),jn=U.forwardRef((s,e)=>{const{alt:i,color:r,size:l,weight:c,mirrored:h,children:p,weights:m,...d}=s,{color:v="currentColor",size:x,weight:g="regular",mirrored:E=!1,...A}=U.useContext(Yx);return U.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:l??x,height:l??x,fill:r??v,viewBox:"0 0 256 256",transform:h||E?"scale(-1, 1)":void 0,...A,...d},!!i&&U.createElement("title",null,i),p,m.get(c??g))});jn.displayName="IconBase";const T_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Px}));T_.displayName="ArrowRightIcon";const Kx=T_,R_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Fx}));R_.displayName="ArrowsOutIcon";const Qx=R_,C_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Ix}));C_.displayName="BinocularsIcon";const Jx=C_,w_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Bx}));w_.displayName="BookOpenIcon";const dg=w_,D_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:zx}));D_.displayName="CaretDownIcon";const pg=D_,U_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Hx}));U_.displayName="EyeIcon";const jx=U_,L_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Vx}));L_.displayName="HouseIcon";const $x=L_,N_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Gx}));N_.displayName="MagnifyingGlassIcon";const eM=N_,O_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:kx}));O_.displayName="MouseIcon";const mg=O_,P_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Xx}));P_.displayName="PlanetIcon";const tM=P_,F_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Wx}));F_.displayName="SpeakerHighIcon";const nM=F_,I_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:Zx}));I_.displayName="SpeakerSlashIcon";const iM=I_,B_=U.forwardRef((s,e)=>U.createElement(jn,{ref:e,...s,weights:qx}));B_.displayName="XIcon";const aM=B_;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="185",rM=0,gg=1,sM=2,Qc=1,oM=2,el=3,cr=0,Qn=1,Ni=2,Ea=0,Gs=1,_g=2,vg=3,xg=4,lM=5,Pr=100,cM=101,uM=102,fM=103,hM=104,dM=200,pM=201,mM=202,gM=203,rd=204,sd=205,_M=206,vM=207,xM=208,MM=209,SM=210,yM=211,EM=212,bM=213,AM=214,od=0,ld=1,cd=2,Ws=3,ud=4,fd=5,hd=6,dd=7,z_=0,TM=1,RM=2,Yi=0,H_=1,V_=2,G_=3,$d=4,k_=5,X_=6,W_=7,Z_=300,zr=301,Zs=302,Ah=303,Th=304,uu=306,pd=1e3,ya=1001,md=1002,Un=1003,CM=1004,yc=1005,Fn=1006,Rh=1007,Ir=1008,pi=1009,q_=1010,Y_=1011,rl=1012,e0=1013,Qi=1014,Pi=1015,Aa=1016,t0=1017,n0=1018,sl=1020,K_=35902,Q_=35899,J_=1021,j_=1022,Fi=1023,Ta=1026,Br=1027,i0=1028,a0=1029,Hr=1030,r0=1031,s0=1033,Jc=33776,jc=33777,$c=33778,eu=33779,gd=35840,_d=35841,vd=35842,xd=35843,Md=36196,Sd=37492,yd=37496,Ed=37488,bd=37489,nu=37490,Ad=37491,Td=37808,Rd=37809,Cd=37810,wd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,Fd=37818,Id=37819,Bd=37820,zd=37821,Hd=36492,Vd=36494,Gd=36495,kd=36283,Xd=36284,iu=36285,Wd=36286,wM=3200,Zd=0,DM=1,or="",Kn="srgb",au="srgb-linear",ru="linear",Xt="srgb",bs=7680,Mg=519,UM=512,LM=513,NM=514,o0=515,OM=516,PM=517,l0=518,FM=519,Sg=35044,yg="300 es",qi=2e3,ol=2001;function IM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BM(){const s=ll("canvas");return s.style.display="block",s}const Eg={};function bg(...s){const e="THREE."+s.shift();console.log(e,...s)}function $_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=$_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Ut(...s){s=$_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ks(...s){const e=s.join(" ");e in Eg||(Eg[e]=!0,at(...s))}function zM(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const HM={[od]:ld,[cd]:hd,[ud]:dd,[Ws]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:Ws};class Vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ag=1234567;const nl=Math.PI/180,cl=180/Math.PI;function Ks(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Rt(s,e,i){return Math.max(e,Math.min(i,s))}function c0(s,e){return(s%e+e)%e}function VM(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function GM(s,e,i){return s!==e?(i-s)/(e-s):0}function il(s,e,i){return(1-i)*s+i*e}function kM(s,e,i,r){return il(s,e,1-Math.exp(-i*r))}function XM(s,e=1){return e-Math.abs(c0(s,e*2)-e)}function WM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function ZM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function qM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function YM(s,e){return s+Math.random()*(e-s)}function KM(s){return s*(.5-Math.random())}function QM(s){s!==void 0&&(Ag=s);let e=Ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JM(s){return s*nl}function jM(s){return s*cl}function $M(s){return(s&s-1)===0&&s!==0}function eS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nS(s,e,i,r,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+r)/2),v=h((e+r)/2),x=c((e-r)/2),g=h((e-r)/2),E=c((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":s.set(p*v,m*x,m*g,p*d);break;case"YZY":s.set(m*g,p*v,m*x,p*d);break;case"ZXZ":s.set(m*x,m*g,p*v,p*d);break;case"XZX":s.set(p*v,m*A,m*E,p*d);break;case"YXY":s.set(m*E,p*v,m*A,p*d);break;case"ZYZ":s.set(m*A,m*E,p*v,p*d);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Hs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xo={DEG2RAD:nl,RAD2DEG:cl,generateUUID:Ks,clamp:Rt,euclideanModulo:c0,mapLinear:VM,inverseLerp:GM,lerp:il,damp:kM,pingpong:XM,smoothstep:WM,smootherstep:ZM,randInt:qM,randFloat:YM,randFloatSpread:KM,seededRandom:QM,degToRad:JM,radToDeg:jM,isPowerOfTwo:$M,ceilPowerOfTwo:eS,floorPowerOfTwo:tS,setQuaternionFromProperEuler:nS,normalize:Hn,denormalize:Hs},M0=class M0{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};M0.prototype.isVector2=!0;let St=M0;class Gr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,p){let m=r[l+0],d=r[l+1],v=r[l+2],x=r[l+3],g=c[h+0],E=c[h+1],A=c[h+2],w=c[h+3];if(x!==w||m!==g||d!==E||v!==A){let S=m*g+d*E+v*A+x*w;S<0&&(g=-g,E=-E,A=-A,w=-w,S=-S);let M=1-p;if(S<.9995){const L=Math.acos(S),D=Math.sin(L);M=Math.sin(M*L)/D,p=Math.sin(p*L)/D,m=m*M+g*p,d=d*M+E*p,v=v*M+A*p,x=x*M+w*p}else{m=m*M+g*p,d=d*M+E*p,v=v*M+A*p,x=x*M+w*p;const L=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=L,d*=L,v*=L,x*=L}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,h){const p=r[l],m=r[l+1],d=r[l+2],v=r[l+3],x=c[h],g=c[h+1],E=c[h+2],A=c[h+3];return e[i]=p*A+v*x+m*E-d*g,e[i+1]=m*A+v*g+d*x-p*E,e[i+2]=d*A+v*E+p*g-m*x,e[i+3]=v*A-p*x-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),v=p(l/2),x=p(c/2),g=m(r/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=g*v*x+d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x-g*E*A;break;case"YXZ":this._x=g*v*x+d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x+g*E*A;break;case"ZXY":this._x=g*v*x-d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x-g*E*A;break;case"ZYX":this._x=g*v*x-d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x+g*E*A;break;case"YZX":this._x=g*v*x+d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x-g*E*A;break;case"XZY":this._x=g*v*x-d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x+g*E*A;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],x=i[10],g=r+p+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(r>p&&r>x){const E=2*Math.sqrt(1+r-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>x){const E=2*Math.sqrt(1+p-r-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-r-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=r*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-r*d,this._z=c*v+h*d+r*m-l*p,this._w=h*v-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const S0=class S0{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Tg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),v=2*(p*i-c*l),x=2*(c*r-h*i);return this.x=i+m*d+h*x-p*v,this.y=r+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ch.copy(this).projectOnVector(e),this.sub(Ch)}reflect(e){return this.sub(Ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};S0.prototype.isVector3=!0;let J=S0;const Ch=new J,Tg=new Gr,y0=class y0{constructor(e,i,r,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d)}set(e,i,r,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],v=r[4],x=r[7],g=r[2],E=r[5],A=r[8],w=l[0],S=l[3],M=l[6],L=l[1],D=l[4],R=l[7],B=l[2],N=l[5],I=l[8];return c[0]=h*w+p*L+m*B,c[3]=h*S+p*D+m*N,c[6]=h*M+p*R+m*I,c[1]=d*w+v*L+x*B,c[4]=d*S+v*D+x*N,c[7]=d*M+v*R+x*I,c[2]=g*w+E*L+A*B,c[5]=g*S+E*D+A*N,c[8]=g*M+E*R+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-r*c*v+r*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=v*h-p*d,g=p*m-v*c,E=d*c-h*m,A=i*x+r*g+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(l*d-v*r)*w,e[2]=(p*r-l*h)*w,e[3]=g*w,e[4]=(v*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=E*w,e[7]=(r*m-d*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(e,i)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-e)),this}translate(e,i){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};y0.prototype.isMatrix3=!0;let ct=y0;const wh=new ct,Rg=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iS(){const s={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xt&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[au]:{primaries:e,whitePoint:r,transfer:ru,toXYZ:Rg,fromXYZ:Cg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Rg,fromXYZ:Cg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Dt=iS();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class aS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=ll("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ll("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rS=0;class u0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Dh(l[h].image)):c.push(Dh(l[h]))}else c=Dh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Dh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let sS=0;const Uh=new J;class In extends Vr{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=ya,l=ya,c=Fn,h=Ir,p=Fi,m=pi,d=In.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ks(),this.name="",this.source=new u0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Z_;In.DEFAULT_ANISOTROPY=1;const E0=class E0{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,d=m[0],v=m[4],x=m[8],g=m[1],E=m[5],A=m[9],w=m[2],S=m[6],M=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-w)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+w)<.1&&Math.abs(A+S)<.1&&Math.abs(d+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(d+1)/2,R=(E+1)/2,B=(M+1)/2,N=(v+g)/4,I=(x+w)/4,b=(A+S)/4;return D>R&&D>B?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=N/r,c=I/r):R>B?R<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),r=N/l,c=b/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=I/c,l=b/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-A)*(S-A)+(x-w)*(x-w)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(S-A)/L,this.y=(x-w)/L,this.z=(g-v)/L,this.w=Math.acos((d+E+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};E0.prototype.isVector4=!0;let sn=E0;class oS extends Vr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new In(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new u0(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends oS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ev extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,r,l,c,h,p,m,d,v,x,g,E,A,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d,v,x,g,E,A,w,S)}set(e,i,r,l,c,h,p,m,d,v,x,g,E,A,w,S){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=c,M[5]=h,M[9]=p,M[13]=m,M[2]=d,M[6]=v,M[10]=x,M[14]=g,M[3]=E,M[7]=A,M[11]=w,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),h=1/Ts.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*x,A=p*v,w=p*x;i[0]=m*v,i[4]=-m*x,i[8]=d,i[1]=E+A*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=A+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*x,A=d*v,w=d*x;i[0]=g+w*p,i[4]=A*p-E,i[8]=h*d,i[1]=h*x,i[5]=h*v,i[9]=-p,i[2]=E*p-A,i[6]=w+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*x,A=d*v,w=d*x;i[0]=g-w*p,i[4]=-h*x,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*v,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*x,A=p*v,w=p*x;i[0]=m*v,i[4]=A*d-E,i[8]=g*d+w,i[1]=m*x,i[5]=w*d+g,i[9]=E*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,A=p*m,w=p*d;i[0]=m*v,i[4]=w-g*x,i[8]=A*x+E,i[1]=x,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*x+A,i[10]=g-w*x}else if(e.order==="XZY"){const g=h*m,E=h*d,A=p*m,w=p*d;i[0]=m*v,i[4]=-x,i[8]=d*v,i[1]=g*x+w,i[5]=h*v,i[9]=E*x-A,i[2]=A*x-E,i[6]=p*v,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,uS)}lookAt(e,i,r){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),tr.crossVectors(r,ui),tr.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),tr.crossVectors(r,ui)),tr.normalize(),Ec.crossVectors(ui,tr),l[0]=tr.x,l[4]=Ec.x,l[8]=ui.x,l[1]=tr.y,l[5]=Ec.y,l[9]=ui.y,l[2]=tr.z,l[6]=Ec.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],v=r[1],x=r[5],g=r[9],E=r[13],A=r[2],w=r[6],S=r[10],M=r[14],L=r[3],D=r[7],R=r[11],B=r[15],N=l[0],I=l[4],b=l[8],O=l[12],k=l[1],G=l[5],j=l[9],de=l[13],ve=l[2],$=l[6],z=l[10],V=l[14],ee=l[3],me=l[7],be=l[11],F=l[15];return c[0]=h*N+p*k+m*ve+d*ee,c[4]=h*I+p*G+m*$+d*me,c[8]=h*b+p*j+m*z+d*be,c[12]=h*O+p*de+m*V+d*F,c[1]=v*N+x*k+g*ve+E*ee,c[5]=v*I+x*G+g*$+E*me,c[9]=v*b+x*j+g*z+E*be,c[13]=v*O+x*de+g*V+E*F,c[2]=A*N+w*k+S*ve+M*ee,c[6]=A*I+w*G+S*$+M*me,c[10]=A*b+w*j+S*z+M*be,c[14]=A*O+w*de+S*V+M*F,c[3]=L*N+D*k+R*ve+B*ee,c[7]=L*I+D*G+R*$+B*me,c[11]=L*b+D*j+R*z+B*be,c[15]=L*O+D*de+R*V+B*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],x=e[6],g=e[10],E=e[14],A=e[3],w=e[7],S=e[11],M=e[15],L=m*E-d*g,D=p*E-d*x,R=p*g-m*x,B=h*E-d*v,N=h*g-m*v,I=h*x-p*v;return i*(w*L-S*D+M*R)-r*(A*L-S*B+M*N)+l*(A*D-w*B+M*I)-c*(A*R-w*N+S*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-r*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=e[9],g=e[10],E=e[11],A=e[12],w=e[13],S=e[14],M=e[15],L=i*p-r*h,D=i*m-l*h,R=i*d-c*h,B=r*m-l*p,N=r*d-c*p,I=l*d-c*m,b=v*w-x*A,O=v*S-g*A,k=v*M-E*A,G=x*S-g*w,j=x*M-E*w,de=g*M-E*S,ve=L*de-D*j+R*G+B*k-N*O+I*b;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ve;return e[0]=(p*de-m*j+d*G)*$,e[1]=(l*j-r*de-c*G)*$,e[2]=(w*I-S*N+M*B)*$,e[3]=(g*N-x*I-E*B)*$,e[4]=(m*k-h*de-d*O)*$,e[5]=(i*de-l*k+c*O)*$,e[6]=(S*R-A*I-M*D)*$,e[7]=(v*I-g*R+E*D)*$,e[8]=(h*j-p*k+d*b)*$,e[9]=(r*k-i*j-c*b)*$,e[10]=(A*N-w*R+M*L)*$,e[11]=(x*R-v*N-E*L)*$,e[12]=(p*O-h*G-m*b)*$,e[13]=(i*G-r*O+l*b)*$,e[14]=(w*D-A*B-S*L)*$,e[15]=(v*B-x*D+g*L)*$,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+r,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,x=p+p,g=c*d,E=c*v,A=c*x,w=h*v,S=h*x,M=p*x,L=m*d,D=m*v,R=m*x,B=r.x,N=r.y,I=r.z;return l[0]=(1-(w+M))*B,l[1]=(E+R)*B,l[2]=(A-D)*B,l[3]=0,l[4]=(E-R)*N,l[5]=(1-(g+M))*N,l[6]=(S+L)*N,l[7]=0,l[8]=(A+D)*I,l[9]=(S-L)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Ts.set(l[0],l[1],l[2]).length();const p=Ts.set(l[4],l[5],l[6]).length(),m=Ts.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Di.copy(this);const d=1/h,v=1/p,x=1/m;return Di.elements[0]*=d,Di.elements[1]*=d,Di.elements[2]*=d,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=x,Di.elements[9]*=x,Di.elements[10]*=x,i.setFromRotationMatrix(Di),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,h,p=qi,m=!1){const d=this.elements,v=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let A,w;if(m)A=c/(h-c),w=h*c/(h-c);else if(p===qi)A=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===ol)A=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,c,h,p=qi,m=!1){const d=this.elements,v=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,w;if(m)A=1/(h-c),w=h/(h-c);else if(p===qi)A=-2/(h-c),w=-(h+c)/(h-c);else if(p===ol)A=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=A,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};cu.prototype.isMatrix4=!0;let Wt=cu;const Ts=new J,Di=new Wt,cS=new J(0,0,0),uS=new J(1,1,1),tr=new J,Ec=new J,ui=new J,wg=new Wt,Dg=new Gr;class Ra{constructor(e=0,i=0,r=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dg.setFromEuler(this),this.setFromQuaternion(Dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const Ug=new J,Rs=new Gr,_a=new Wt,bc=new J,Wo=new J,hS=new J,dS=new Gr,Lg=new J(1,0,0),Ng=new J(0,1,0),Og=new J(0,0,1),Pg={type:"added"},pS={type:"removed"},Cs={type:"childadded",child:null},Lh={type:"childremoved",child:null};class An extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new J,i=new Ra,r=new Gr,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ct}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Lg,e)}rotateY(e){return this.rotateOnAxis(Ng,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,i){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lg,e)}translateY(e){return this.translateOnAxis(Ng,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?bc.copy(e):bc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Wo,bc,this.up):_a.lookAt(bc,Wo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(_a),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pS),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),x=h(e.shapes),g=h(e.skeletons),E=h(e.animations),A=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new J(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vs extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const w of e.hand.values()){const S=i.getJointPose(w,r),M=this._getHandJoint(d,w);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,A=.005;d.inputState.pinching&&g>E+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Vs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Oh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Dt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Dt.workingColorSpace){if(e=c0(e,1),i=Rt(i,0,1),r=Rt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=tv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Dt.workingToColorSpace(Pn.copy(this),e),Math.round(Rt(Pn.r*255,0,255))*65536+Math.round(Rt(Pn.g*255,0,255))*256+Math.round(Rt(Pn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Dt.workingColorSpace){Dt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Kn){Dt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Ac);const r=il(nr.h,Ac.h,i),l=il(nr.s,Ac.s,i),c=il(nr.l,Ac.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ct;Ct.NAMES=tv;class h0{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=i,this.far=r}clone(){return new h0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new J,va=new J,Ph=new J,xa=new J,ws=new J,Ds=new J,Fg=new J,Fh=new J,Ih=new J,Bh=new J,zh=new sn,Hh=new sn,Vh=new sn;class Oi{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ui.subVectors(l,i),va.subVectors(r,i),Ph.subVectors(e,i);const h=Ui.dot(Ui),p=Ui.dot(va),m=Ui.dot(Ph),d=va.dot(va),v=va.dot(Ph),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,E=(d*m-p*v)*g,A=(h*v-p*m)*g;return c.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,r,l,c,h,p,m){return this.getBarycoord(e,i,r,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return zh.setScalar(0),Hh.setScalar(0),Vh.setScalar(0),zh.fromBufferAttribute(e,i),Hh.fromBufferAttribute(e,r),Vh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(zh,c.x),h.addScaledVector(Hh,c.y),h.addScaledVector(Vh,c.z),h}static isFrontFacing(e,i,r,l){return Ui.subVectors(r,i),va.subVectors(e,i),Ui.cross(va).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ui.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,p;ws.subVectors(l,r),Ds.subVectors(c,r),Fh.subVectors(e,r);const m=ws.dot(Fh),d=Ds.dot(Fh);if(m<=0&&d<=0)return i.copy(r);Ih.subVectors(e,l);const v=ws.dot(Ih),x=Ds.dot(Ih);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(ws,h);Bh.subVectors(e,c);const E=ws.dot(Bh),A=Ds.dot(Bh);if(A>=0&&E<=A)return i.copy(c);const w=E*d-m*A;if(w<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(r).addScaledVector(Ds,p);const S=v*A-E*x;if(S<=0&&x-v>=0&&E-A>=0)return Fg.subVectors(c,l),p=(x-v)/(x-v+(E-A)),i.copy(l).addScaledVector(Fg,p);const M=1/(S+w+g);return h=w*M,p=g*M,i.copy(r).addScaledVector(ws,h).addScaledVector(Ds,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kr{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Rc.subVectors(this.max,Zo),Us.subVectors(e.a,Zo),Ls.subVectors(e.b,Zo),Ns.subVectors(e.c,Zo),ir.subVectors(Ls,Us),ar.subVectors(Ns,Ls),Dr.subVectors(Us,Ns);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Dr.z,Dr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Dr.z,0,-Dr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Dr.y,Dr.x,0];return!Gh(i,Us,Ls,Ns,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,Us,Ls,Ns,Rc))?!1:(Cc.crossVectors(ir,ar),i=[Cc.x,Cc.y,Cc.z],Gh(i,Us,Ls,Ns,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new J,new J,new J,new J,new J,new J,new J,new J],Li=new J,Tc=new kr,Us=new J,Ls=new J,Ns=new J,ir=new J,ar=new J,Dr=new J,Zo=new J,Rc=new J,Cc=new J,Ur=new J;function Gh(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Ur.fromArray(s,c);const p=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),d=i.dot(Ur),v=r.dot(Ur);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const _n=new J,wc=new St;let _S=0;class mi extends Vr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_S++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Sg,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Hs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Hs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Hs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Hs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Hs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nv extends mi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class iv extends mi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Mn extends mi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const vS=new kr,qo=new J,kh=new J;class Xr{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):vS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(kh)),this.expandByPoint(qo.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xS=0;const bi=new Wt,Xh=new An,Os=new J,fi=new kr,Yo=new kr,bn=new J;class Bn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(IM(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,r){return bi.makeTranslation(e,i,r),this.applyMatrix4(bi),this}scale(e,i,r){return bi.makeScale(e,i,r),this.applyMatrix4(bi),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(fi.min,Yo.min),fi.expandByPoint(bn),bn.addVectors(fi.max,Yo.max),fi.expandByPoint(bn)):(fi.expandByPoint(Yo.min),fi.expandByPoint(Yo.max))}fi.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)bn.fromBufferAttribute(p,d),m&&(Os.fromBufferAttribute(e,d),bn.add(Os)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new mi(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new J,m[b]=new J;const d=new J,v=new J,x=new J,g=new St,E=new St,A=new St,w=new J,S=new J;function M(b,O,k){d.fromBufferAttribute(r,b),v.fromBufferAttribute(r,O),x.fromBufferAttribute(r,k),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,O),A.fromBufferAttribute(c,k),v.sub(d),x.sub(d),E.sub(g),A.sub(g);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(w.copy(v).multiplyScalar(A.y).addScaledVector(x,-E.y).multiplyScalar(G),S.copy(x).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(G),p[b].add(w),p[O].add(w),p[k].add(w),m[b].add(S),m[O].add(S),m[k].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let b=0,O=L.length;b<O;++b){const k=L[b],G=k.start,j=k.count;for(let de=G,ve=G+j;de<ve;de+=3)M(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const D=new J,R=new J,B=new J,N=new J;function I(b){B.fromBufferAttribute(l,b),N.copy(B);const O=p[b];D.copy(O),D.sub(B.multiplyScalar(B.dot(O))).normalize(),R.crossVectors(N,O);const G=R.dot(m[b])<0?-1:1;h.setXYZW(b,D.x,D.y,D.z,G)}for(let b=0,O=L.length;b<O;++b){const k=L[b],G=k.start,j=k.count;for(let de=G,ve=G+j;de<ve;de+=3)I(e.getX(de+0)),I(e.getX(de+1)),I(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new J,c=new J,h=new J,p=new J,m=new J,d=new J,v=new J,x=new J;if(e)for(let g=0,E=e.count;g<E;g+=3){const A=e.getX(g+0),w=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),d.fromBufferAttribute(r,S),p.add(v),m.add(v),d.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,x=p.normalized,g=new d.constructor(m.length*v);let E=0,A=0;for(let w=0,S=m.length;w<S;w++){p.isInterleavedBufferAttribute?E=m[w]*p.data.stride+p.offset:E=m[w]*v;for(let M=0;M<v;M++)g[A++]=d[E++]}return new mi(g,v,x)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const g=d[v],E=e(g,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,g=d.length;x<g;x++){const E=d[x];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],x=c[d];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MS=0;class Wr extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Gs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new J,Wh=new J,Dc=new J,rr=new J,Zh=new J,Uc=new J,qh=new J;class fu{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wh.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),rr.copy(this.origin).sub(Wh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Dc),p=rr.dot(this.direction),m=-rr.dot(Dc),d=rr.lengthSq(),v=Math.abs(1-h*h);let x,g,E,A;if(v>0)if(x=h*m-p,g=h*p-m,A=c*v,x>=0)if(g>=-A)if(g<=A){const w=1/v;x*=w,g*=w,E=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g<=-A?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Wh).addScaledVector(Dc,g),E}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,c){Zh.subVectors(i,e),Uc.subVectors(r,e),qh.crossVectors(Zh,Uc);let h=this.direction.dot(qh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;rr.subVectors(this.origin,e);const m=p*this.direction.dot(Uc.crossVectors(rr,Uc));if(m<0)return null;const d=p*this.direction.dot(Zh.cross(rr));if(d<0||m+d>h)return null;const v=-p*rr.dot(qh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class al extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ig=new Wt,Lr=new fu,Lc=new Xr,Bg=new J,Nc=new J,Oc=new J,Pc=new J,Yh=new J,Fc=new J,zg=new J,Ic=new J;class Jn extends An{constructor(e=new Bn,i=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(Yh.fromBufferAttribute(x,e),h?Fc.addScaledVector(Yh,v):Fc.addScaledVector(Yh.sub(i),v))}i.add(Fc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Lc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Lc,Bg)===null||Lr.origin.distanceToSquared(Bg)>(e.far-e.near)**2))&&(Ig.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(Ig),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,w=g.length;A<w;A++){const S=g[A],M=h[S.materialIndex],L=Math.max(S.start,E.start),D=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let R=L,B=D;R<B;R+=3){const N=p.getX(R),I=p.getX(R+1),b=p.getX(R+2);l=Bc(this,M,e,r,d,v,x,N,I,b),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let S=A,M=w;S<M;S+=3){const L=p.getX(S),D=p.getX(S+1),R=p.getX(S+2);l=Bc(this,h,e,r,d,v,x,L,D,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,w=g.length;A<w;A++){const S=g[A],M=h[S.materialIndex],L=Math.max(S.start,E.start),D=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let R=L,B=D;R<B;R+=3){const N=R,I=R+1,b=R+2;l=Bc(this,M,e,r,d,v,x,N,I,b),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let S=A,M=w;S<M;S+=3){const L=S,D=S+1,R=S+2;l=Bc(this,h,e,r,d,v,x,L,D,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function SS(s,e,i,r,l,c,h,p){let m;if(e.side===Qn?m=r.intersectTriangle(h,c,l,!0,p):m=r.intersectTriangle(l,c,h,e.side===cr,p),m===null)return null;Ic.copy(p),Ic.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Ic);return d<i.near||d>i.far?null:{distance:d,point:Ic.clone(),object:s}}function Bc(s,e,i,r,l,c,h,p,m,d){s.getVertexPosition(p,Nc),s.getVertexPosition(m,Oc),s.getVertexPosition(d,Pc);const v=SS(s,e,i,r,Nc,Oc,Pc,zg);if(v){const x=new J;Oi.getBarycoord(zg,Nc,Oc,Pc,x),l&&(v.uv=Oi.getInterpolatedAttribute(l,p,m,d,x,new St)),c&&(v.uv1=Oi.getInterpolatedAttribute(c,p,m,d,x,new St)),h&&(v.normal=Oi.getInterpolatedAttribute(h,p,m,d,x,new J),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new J,materialIndex:0};Oi.getNormal(Nc,Oc,Pc,g.normal),v.face=g,v.barycoord=x}return v}class av extends In{constructor(e=null,i=1,r=1,l,c,h,p,m,d=Un,v=Un,x,g){super(null,h,p,m,d,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hg extends mi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new Wt,Vg=new Wt,zc=[],Gg=new kr,yS=new Wt,Ko=new Jn,Qo=new Xr;class ES extends Jn{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new Hg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,yS)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ps),Gg.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Gg)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ps),Qo.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Qo)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){return i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,h=e*c+1;for(let p=0;p<r.length;p++)r[p]=l[h+p]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ps),Vg.multiplyMatrices(r,Ps),Ko.matrixWorld=Vg,Ko.raycast(e,zc);for(let h=0,p=zc.length;h<p;h++){const m=zc[h];m.instanceId=c,m.object=this,i.push(m)}zc.length=0}}setColorAt(e,i){return this.instanceColor===null&&(this.instanceColor=new Hg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,i){return i.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new av(new Float32Array(l*this.count),l,this.count,i0,Pi));const c=this.morphTexture.source.data.data;let h=0;for(let d=0;d<r.length;d++)h+=r[d];const p=this.geometry.morphTargetsRelative?1:1-h,m=l*e;return c[m]=p,c.set(r,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kh=new J,bS=new J,AS=new ct;class Or{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Kh.subVectors(r,i).cross(bS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Kh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||AS.getNormalMatrix(e),l=this.coplanarPoint(Kh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Xr,TS=new St(.5,.5),Hc=new J;class d0{constructor(e=new Or,i=new Or,r=new Or,l=new Or,c=new Or,h=new Or){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=qi,r=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],g=c[6],E=c[7],A=c[8],w=c[9],S=c[10],M=c[11],L=c[12],D=c[13],R=c[14],B=c[15];if(l[0].setComponents(d-h,E-v,M-A,B-L).normalize(),l[1].setComponents(d+h,E+v,M+A,B+L).normalize(),l[2].setComponents(d+p,E+x,M+w,B+D).normalize(),l[3].setComponents(d-p,E-x,M-w,B-D).normalize(),r)l[4].setComponents(m,g,S,R).normalize(),l[5].setComponents(d-m,E-g,M-S,B-R).normalize();else if(l[4].setComponents(d-m,E-g,M-S,B-R).normalize(),i===qi)l[5].setComponents(d+m,E+g,M+S,B+R).normalize();else if(i===ol)l[5].setComponents(m,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=TS.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rv extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new J,ou=new J,kg=new Wt,Jo=new fu,Vc=new Xr,Qh=new J,Xg=new J;class RS extends An{constructor(e=new Bn,i=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new Mn(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;kg.copy(l).invert(),Jo.copy(e.ray).applyMatrix4(kg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const E=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let w=E,S=A-1;w<S;w+=d){const M=v.getX(w),L=v.getX(w+1),D=Gc(this,e,Jo,m,M,L,w);D&&i.push(D)}if(this.isLineLoop){const w=v.getX(A-1),S=v.getX(E),M=Gc(this,e,Jo,m,w,S,A-1);M&&i.push(M)}}else{const E=Math.max(0,h.start),A=Math.min(g.count,h.start+h.count);for(let w=E,S=A-1;w<S;w+=d){const M=Gc(this,e,Jo,m,w,w+1,w);M&&i.push(M)}if(this.isLineLoop){const w=Gc(this,e,Jo,m,A-1,E,A-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Gc(s,e,i,r,l,c,h){const p=s.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(su,ou,Qh,Xg)>r)return;Qh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Qh);if(!(d<e.near||d>e.far))return{distance:d,point:Xg.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}class sv extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wg=new Wt,qd=new fu,kc=new Xr,Xc=new J;class CS extends An{constructor(e=new Bn,i=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;Wg.copy(l).invert(),qd.copy(e.ray).applyMatrix4(Wg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,x=r.attributes.position;if(d!==null){const g=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let A=g,w=E;A<w;A++){const S=d.getX(A);Xc.fromBufferAttribute(x,S),Zg(Xc,S,m,l,e,i,this)}}else{const g=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=g,w=E;A<w;A++)Xc.fromBufferAttribute(x,A),Zg(Xc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Zg(s,e,i,r,l,c,h){const p=qd.distanceSqToPoint(s);if(p<i){const m=new J;qd.closestPointToPoint(s,m),m.applyMatrix4(r);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class ov extends In{constructor(e=[],i=zr,r,l,c,h,p,m,d,v){super(e,i,r,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends In{constructor(e,i,r=Qi,l,c,h,p=Un,m=Un,d,v=Ta,x=1){if(v!==Ta&&v!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new u0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wS extends qs{constructor(e,i=Qi,r=zr,l,c,h=Un,p=Un,m,d=Ta){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,r,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Bn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let g=0,E=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Mn(d,3)),this.setAttribute("normal",new Mn(v,3)),this.setAttribute("uv",new Mn(x,2));function A(w,S,M,L,D,R,B,N,I,b,O){const k=R/I,G=B/b,j=R/2,de=B/2,ve=N/2,$=I+1,z=b+1;let V=0,ee=0;const me=new J;for(let be=0;be<z;be++){const F=be*G-de;for(let Y=0;Y<$;Y++){const ye=Y*k-j;me[w]=ye*L,me[S]=F*D,me[M]=ve,d.push(me.x,me.y,me.z),me[w]=0,me[S]=0,me[M]=N>0?1:-1,v.push(me.x,me.y,me.z),x.push(Y/I),x.push(1-be/b),V+=1}}for(let be=0;be<b;be++)for(let F=0;F<I;F++){const Y=g+F+$*be,ye=g+F+$*(be+1),Re=g+(F+1)+$*(be+1),Oe=g+(F+1)+$*be;m.push(Y,ye,Oe),m.push(ye,Re,Oe),ee+=6}p.addGroup(E,ee,O),E+=ee,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class p0 extends Bn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];p(l),d(r),v(),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(c.slice(),3)),this.setAttribute("uv",new Mn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(L){const D=new J,R=new J,B=new J;for(let N=0;N<i.length;N+=3)E(i[N+0],D),E(i[N+1],R),E(i[N+2],B),m(D,R,B,L)}function m(L,D,R,B){const N=B+1,I=[];for(let b=0;b<=N;b++){I[b]=[];const O=L.clone().lerp(R,b/N),k=D.clone().lerp(R,b/N),G=N-b;for(let j=0;j<=G;j++)j===0&&b===N?I[b][j]=O:I[b][j]=O.clone().lerp(k,j/G)}for(let b=0;b<N;b++)for(let O=0;O<2*(N-b)-1;O++){const k=Math.floor(O/2);O%2===0?(g(I[b][k+1]),g(I[b+1][k]),g(I[b][k])):(g(I[b][k+1]),g(I[b+1][k+1]),g(I[b+1][k]))}}function d(L){const D=new J;for(let R=0;R<c.length;R+=3)D.x=c[R+0],D.y=c[R+1],D.z=c[R+2],D.normalize().multiplyScalar(L),c[R+0]=D.x,c[R+1]=D.y,c[R+2]=D.z}function v(){const L=new J;for(let D=0;D<c.length;D+=3){L.x=c[D+0],L.y=c[D+1],L.z=c[D+2];const R=S(L)/2/Math.PI+.5,B=M(L)/Math.PI+.5;h.push(R,1-B)}A(),x()}function x(){for(let L=0;L<h.length;L+=6){const D=h[L+0],R=h[L+2],B=h[L+4],N=Math.max(D,R,B),I=Math.min(D,R,B);N>.9&&I<.1&&(D<.2&&(h[L+0]+=1),R<.2&&(h[L+2]+=1),B<.2&&(h[L+4]+=1))}}function g(L){c.push(L.x,L.y,L.z)}function E(L,D){const R=L*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function A(){const L=new J,D=new J,R=new J,B=new J,N=new St,I=new St,b=new St;for(let O=0,k=0;O<c.length;O+=9,k+=6){L.set(c[O+0],c[O+1],c[O+2]),D.set(c[O+3],c[O+4],c[O+5]),R.set(c[O+6],c[O+7],c[O+8]),N.set(h[k+0],h[k+1]),I.set(h[k+2],h[k+3]),b.set(h[k+4],h[k+5]),B.copy(L).add(D).add(R).divideScalar(3);const G=S(B);w(N,k+0,L,G),w(I,k+2,D,G),w(b,k+4,R,G)}}function w(L,D,R,B){B<0&&L.x===1&&(h[D]=L.x-1),R.x===0&&R.z===0&&(h[D]=B/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function M(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new p0(e.vertices,e.indices,e.radius,e.detail)}}class m0 extends p0{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-r,0,-l,r,0,l,-r,0,l,r,-l,-r,0,-l,r,0,l,-r,0,l,r,0,-r,0,-l,r,0,-l,-r,0,l,r,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new m0(e.radius,e.detail)}}class hu extends Bn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,v=m+1,x=e/p,g=i/m,E=[],A=[],w=[],S=[];for(let M=0;M<v;M++){const L=M*g-h;for(let D=0;D<d;D++){const R=D*x-c;A.push(R,-L,0),w.push(0,0,1),S.push(D/p),S.push(1-M/m)}}for(let M=0;M<m;M++)for(let L=0;L<p;L++){const D=L+d*M,R=L+d*(M+1),B=L+1+d*(M+1),N=L+1+d*M;E.push(D,R,N),E.push(R,B,N)}this.setIndex(E),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(w,3)),this.setAttribute("uv",new Mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class lu extends Bn{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],d=[],v=[];let x=e;const g=(i-e)/l,E=new J,A=new St;for(let w=0;w<=l;w++){for(let S=0;S<=r;S++){const M=c+S/r*h;E.x=x*Math.cos(M),E.y=x*Math.sin(M),m.push(E.x,E.y,E.z),d.push(0,0,1),A.x=(E.x/i+1)/2,A.y=(E.y/i+1)/2,v.push(A.x,A.y)}x+=g}for(let w=0;w<l;w++){const S=w*(r+1);for(let M=0;M<r;M++){const L=M+S,D=L,R=L+r+1,B=L+r+2,N=L+1;p.push(D,R,N),p.push(R,B,N)}}this.setIndex(p),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class g0 extends Bn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+p,Math.PI);let d=0;const v=[],x=new J,g=new J,E=[],A=[],w=[],S=[];for(let M=0;M<=r;M++){const L=[],D=M/r,R=h+D*p,B=e*Math.cos(R),N=Math.sqrt(e*e-B*B);let I=0;M===0&&h===0?I=.5/i:M===r&&m===Math.PI&&(I=-.5/i);for(let b=0;b<=i;b++){const O=b/i,k=l+O*c;x.x=-N*Math.cos(k),x.y=B,x.z=N*Math.sin(k),A.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),S.push(O+I,1-D),L.push(d++)}v.push(L)}for(let M=0;M<r;M++)for(let L=0;L<i;L++){const D=v[M][L+1],R=v[M][L],B=v[M+1][L],N=v[M+1][L+1];(M!==0||h>0)&&E.push(D,R,N),(M!==r-1||m<Math.PI)&&E.push(R,B,N)}this.setIndex(E),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(w,3)),this.setAttribute("uv",new Mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new g0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(qg(l))l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(qg(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Vn(s){const e={};for(let i=0;i<s.length;i++){const r=Ys(s[i]);for(const l in r)e[l]=r[l]}return e}function qg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function DS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function cv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const US={clone:Ys,merge:Vn};var LS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(l.value);break;case"v2":this.uniforms[r].value=new St().fromArray(l.value);break;case"v3":this.uniforms[r].value=new J().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OS extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uv extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PS extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Yg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Yg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Yg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class IS{constructor(e,i,r){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){p++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,p),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return d.push(v,x),this},this.removeHandler=function(v){const x=d.indexOf(v);return x!==-1&&d.splice(x,2),this},this.getHandler=function(v){for(let x=0,g=d.length;x<g;x+=2){const E=d[x],A=d[x+1];if(E.global&&(E.lastIndex=0),E.test(v))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const BS=new IS;class _0{constructor(e){this.manager=e!==void 0?e:BS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fs=new WeakMap;class zS extends _0{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Jh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let x=Fs.get(h);x===void 0&&(x=[],Fs.set(h,x)),x.push({onLoad:i,onError:l})}return h}const p=ll("img");function m(){v(),i&&i(this);const x=Fs.get(this)||[];for(let g=0;g<x.length;g++){const E=x[g];E.onLoad&&E.onLoad(this)}Fs.delete(this),c.manager.itemEnd(e)}function d(x){v(),l&&l(x),Jh.remove(`image:${e}`);const g=Fs.get(this)||[];for(let E=0;E<g.length;E++){const A=g[E];A.onError&&A.onError(x)}Fs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Jh.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class HS extends _0{constructor(e){super(e)}load(e,i,r,l){const c=new In,h=new zS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class v0 extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jh=new Wt,Kg=new J,Qg=new J;class fv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new d0,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Kg.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kg),Qg.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Qg),i.updateMatrixWorld(),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ol||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wc=new J,Zc=new Gr,ki=new J;class hv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,Zc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,Zc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Wc,Zc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,Zc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new J,Jg=new St,jg=new St;class di extends hv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,i){return this.getViewBounds(e,Jg,jg),i.subVectors(jg,Jg)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class VS extends fv{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class GS extends v0{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new VS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class x0 extends hv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kS extends fv{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XS extends v0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new kS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class WS extends v0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Bs=1;class ZS extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Is,Bs,e,i);l.layers=this.layers,this.add(l);const c=new di(Is,Bs,e,i);c.layers=this.layers,this.add(c);const h=new di(Is,Bs,e,i);h.layers=this.layers,this.add(h);const p=new di(Is,Bs,e,i);p.layers=this.layers,this.add(p);const m=new di(Is,Bs,e,i);m.layers=this.layers,this.add(m);const d=new di(Is,Bs,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class qS extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class YS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=KS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function KS(){this._document.hidden===!1&&this.reset()}const $g=new Wt;class QS{constructor(e,i,r=0,l=1/0){this.ray=new fu(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new f0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ut("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return $g.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($g),this}intersectObject(e,i=!0,r=[]){return Yd(e,this,r,i),r.sort(e_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Yd(e[l],this,r,i);return r.sort(e_),r}}function e_(s,e){return s.distance-e.distance}function Yd(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,p=c.length;h<p;h++)Yd(c[h],e,i,!0)}}const b0=class b0{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};b0.prototype.isMatrix2=!0;let t_=b0;function n_(s,e,i,r){const l=JS(r);switch(i){case J_:return s*e;case i0:return s*e/l.components*l.byteLength;case a0:return s*e/l.components*l.byteLength;case Hr:return s*e*2/l.components*l.byteLength;case r0:return s*e*2/l.components*l.byteLength;case j_:return s*e*3/l.components*l.byteLength;case Fi:return s*e*4/l.components*l.byteLength;case s0:return s*e*4/l.components*l.byteLength;case Jc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(s,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(s,8)*Math.max(e,8)/2;case Md:case Sd:case Ed:case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yd:case nu:case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hd:case Vd:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case iu:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JS(s){switch(s){case pi:case q_:return{byteLength:1,components:1};case rl:case Y_:case Aa:return{byteLength:2,components:1};case t0:case n0:return{byteLength:2,components:4};case Qi:case e0:case Pi:return{byteLength:4,components:1};case K_:case Q_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function jS(s){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,x=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=s.SHORT;else if(d instanceof Uint32Array)E=s.UNSIGNED_INT;else if(d instanceof Int32Array)E=s.INT;else if(d instanceof Int8Array)E=s.BYTE;else if(d instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,d){const v=m.array,x=m.updateRanges;if(s.bindBuffer(d,p),x.length===0)s.bufferSubData(d,0,v);else{x.sort((E,A)=>E.start-A.start);let g=0;for(let E=1;E<x.length;E++){const A=x[g],w=x[E];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++g,x[g]=w)}x.length=g+1;for(let E=0,A=x.length;E<A;E++){const w=x[E];s.bufferSubData(d,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
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
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
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
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yy=`#define PI 3.141592653589793
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
} // validated`,Ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hy=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
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
#endif`,Jy=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cE=`#if defined( USE_POINTS_UV )
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
#endif`,uE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
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
#endif`,gE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BE=`float getShadowMask() {
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
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e3=`uniform sampler2D t2D;
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
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`#include <common>
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
}`,s3=`#if DEPTH_PACKING == 3200
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
}`,o3=`#define DISTANCE
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
}`,l3=`#define DISTANCE
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
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f3=`uniform float scale;
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
}`,h3=`uniform vec3 diffuse;
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
}`,d3=`#include <common>
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
}`,p3=`uniform vec3 diffuse;
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
}`,m3=`#define LAMBERT
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
}`,g3=`#define LAMBERT
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
}`,_3=`#define MATCAP
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
}`,v3=`#define MATCAP
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
}`,x3=`#define NORMAL
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
}`,M3=`#define NORMAL
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
}`,S3=`#define PHONG
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
}`,y3=`#define PHONG
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
}`,E3=`#define STANDARD
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
}`,b3=`#define STANDARD
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
}`,A3=`#define TOON
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
}`,T3=`#define TOON
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
}`,R3=`uniform float size;
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
}`,C3=`uniform vec3 diffuse;
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
}`,w3=`#include <common>
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
}`,D3=`uniform vec3 color;
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
}`,U3=`uniform float rotation;
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
}`,L3=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:$S,alphahash_pars_fragment:ey,alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:ay,aomap_fragment:ry,aomap_pars_fragment:sy,batching_pars_vertex:oy,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:uy,bsdfs:fy,iridescence_fragment:hy,bumpmap_pars_fragment:dy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:gy,clipping_planes_vertex:_y,color_fragment:vy,color_pars_fragment:xy,color_pars_vertex:My,color_vertex:Sy,common:yy,cube_uv_reflection_fragment:Ey,defaultnormal_vertex:by,displacementmap_pars_vertex:Ay,displacementmap_vertex:Ty,emissivemap_fragment:Ry,emissivemap_pars_fragment:Cy,colorspace_fragment:wy,colorspace_pars_fragment:Dy,envmap_fragment:Uy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Ny,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Wy,envmap_vertex:Py,fog_vertex:Fy,fog_pars_vertex:Iy,fog_fragment:By,fog_pars_fragment:zy,gradientmap_pars_fragment:Hy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:ky,lights_pars_begin:Xy,lights_toon_fragment:Zy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Qy,lights_physical_pars_fragment:Jy,lights_fragment_begin:jy,lights_fragment_maps:$y,lights_fragment_end:eE,lightprobes_pars_fragment:tE,logdepthbuf_fragment:nE,logdepthbuf_pars_fragment:iE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:lE,map_particle_pars_fragment:cE,metalnessmap_fragment:uE,metalnessmap_pars_fragment:fE,morphinstance_vertex:hE,morphcolor_vertex:dE,morphnormal_vertex:pE,morphtarget_pars_vertex:mE,morphtarget_vertex:gE,normal_fragment_begin:_E,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:ME,normal_vertex:SE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:TE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:wE,project_vertex:DE,dithering_fragment:UE,dithering_pars_fragment:LE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:OE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:FE,shadowmap_vertex:IE,shadowmask_pars_fragment:BE,skinbase_vertex:zE,skinning_pars_vertex:HE,skinning_vertex:VE,skinnormal_vertex:GE,specularmap_fragment:kE,specularmap_pars_fragment:XE,tonemapping_fragment:WE,tonemapping_pars_fragment:ZE,transmission_fragment:qE,transmission_pars_fragment:YE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:jE,background_vert:$E,background_frag:e3,backgroundCube_vert:t3,backgroundCube_frag:n3,cube_vert:i3,cube_frag:a3,depth_vert:r3,depth_frag:s3,distance_vert:o3,distance_frag:l3,equirect_vert:c3,equirect_frag:u3,linedashed_vert:f3,linedashed_frag:h3,meshbasic_vert:d3,meshbasic_frag:p3,meshlambert_vert:m3,meshlambert_frag:g3,meshmatcap_vert:_3,meshmatcap_frag:v3,meshnormal_vert:x3,meshnormal_frag:M3,meshphong_vert:S3,meshphong_frag:y3,meshphysical_vert:E3,meshphysical_frag:b3,meshtoon_vert:A3,meshtoon_frag:T3,points_vert:R3,points_frag:C3,shadow_vert:w3,shadow_frag:D3,sprite_vert:U3,sprite_frag:L3},Ie={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Wi={basic:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ct(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Vn([Ie.points,Ie.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Vn([Ie.common,Ie.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Vn([Ie.sprite,Ie.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Vn([Ie.lights,Ie.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Wi.physical={uniforms:Vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const qc={r:0,b:0,g:0},N3=new Wt,pv=new ct;pv.set(-1,0,0,0,1,0,0,0,1);function O3(s,e,i,r,l,c){const h=new Ct(0);let p=l===!0?0:1,m,d,v=null,x=0,g=null;function E(L){let D=L.isScene===!0?L.background:null;if(D&&D.isTexture){const R=L.backgroundBlurriness>0;D=e.get(D,R)}return D}function A(L){let D=!1;const R=E(L);R===null?S(h,p):R&&R.isColor&&(S(R,1),D=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(L,D){const R=E(D);R&&(R.isCubeTexture||R.mapping===uu)?(d===void 0&&(d=new Jn(new ul(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ys(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(N3.makeRotationFromEuler(D.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(pv),d.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Xt,(v!==R||x!==R.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Jn(new hu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ys(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Dt.getTransfer(R.colorSpace)!==Xt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function S(L,D){L.getRGB(qc,cv(s)),i.buffers.color.setClear(qc.r,qc.g,qc.b,D,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),p=D,S(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,S(h,p)},render:A,addToRenderList:w,dispose:M}}function P3(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,h=!1;function p(G,j,de,ve,$){let z=!1;const V=x(G,ve,de,j);c!==V&&(c=V,d(c.object)),z=E(G,ve,de,$),z&&A(G,ve,de,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,R(G,j,de,ve),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function x(G,j,de,ve){const $=ve.wireframe===!0;let z=r[j.id];z===void 0&&(z={},r[j.id]=z);const V=G.isInstancedMesh===!0?G.id:0;let ee=z[V];ee===void 0&&(ee={},z[V]=ee);let me=ee[de.id];me===void 0&&(me={},ee[de.id]=me);let be=me[$];return be===void 0&&(be=g(m()),me[$]=be),be}function g(G){const j=[],de=[],ve=[];for(let $=0;$<i;$++)j[$]=0,de[$]=0,ve[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:de,attributeDivisors:ve,object:G,attributes:{},index:null}}function E(G,j,de,ve){const $=c.attributes,z=j.attributes;let V=0;const ee=de.getAttributes();for(const me in ee)if(ee[me].location>=0){const F=$[me];let Y=z[me];if(Y===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),F===void 0||F.attribute!==Y||Y&&F.data!==Y.data)return!0;V++}return c.attributesNum!==V||c.index!==ve}function A(G,j,de,ve){const $={},z=j.attributes;let V=0;const ee=de.getAttributes();for(const me in ee)if(ee[me].location>=0){let F=z[me];F===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));const Y={};Y.attribute=F,F&&F.data&&(Y.data=F.data),$[me]=Y,V++}c.attributes=$,c.attributesNum=V,c.index=ve}function w(){const G=c.newAttributes;for(let j=0,de=G.length;j<de;j++)G[j]=0}function S(G){M(G,0)}function M(G,j){const de=c.newAttributes,ve=c.enabledAttributes,$=c.attributeDivisors;de[G]=1,ve[G]===0&&(s.enableVertexAttribArray(G),ve[G]=1),$[G]!==j&&(s.vertexAttribDivisor(G,j),$[G]=j)}function L(){const G=c.newAttributes,j=c.enabledAttributes;for(let de=0,ve=j.length;de<ve;de++)j[de]!==G[de]&&(s.disableVertexAttribArray(de),j[de]=0)}function D(G,j,de,ve,$,z,V){V===!0?s.vertexAttribIPointer(G,j,de,$,z):s.vertexAttribPointer(G,j,de,ve,$,z)}function R(G,j,de,ve){w();const $=ve.attributes,z=de.getAttributes(),V=j.defaultAttributeValues;for(const ee in z){const me=z[ee];if(me.location>=0){let be=$[ee];if(be===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const F=be.normalized,Y=be.itemSize,ye=e.get(be);if(ye===void 0)continue;const Re=ye.buffer,Oe=ye.type,se=ye.bytesPerElement,Me=Oe===s.INT||Oe===s.UNSIGNED_INT||be.gpuType===e0;if(be.isInterleavedBufferAttribute){const Se=be.data,ze=Se.stride,nt=be.offset;if(Se.isInstancedInterleavedBuffer){for(let Qe=0;Qe<me.locationSize;Qe++)M(me.location+Qe,Se.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)S(me.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Qe=0;Qe<me.locationSize;Qe++)D(me.location+Qe,Y/me.locationSize,Oe,F,ze*se,(nt+Y/me.locationSize*Qe)*se,Me)}else{if(be.isInstancedBufferAttribute){for(let Se=0;Se<me.locationSize;Se++)M(me.location+Se,be.meshPerAttribute);G.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<me.locationSize;Se++)S(me.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let Se=0;Se<me.locationSize;Se++)D(me.location+Se,Y/me.locationSize,Oe,F,Y*se,Y/me.locationSize*Se*se,Me)}}else if(V!==void 0){const F=V[ee];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(me.location,F);break;case 3:s.vertexAttrib3fv(me.location,F);break;case 4:s.vertexAttrib4fv(me.location,F);break;default:s.vertexAttrib1fv(me.location,F)}}}}L()}function B(){O();for(const G in r){const j=r[G];for(const de in j){const ve=j[de];for(const $ in ve){const z=ve[$];for(const V in z)v(z[V].object),delete z[V];delete ve[$]}}delete r[G]}}function N(G){if(r[G.id]===void 0)return;const j=r[G.id];for(const de in j){const ve=j[de];for(const $ in ve){const z=ve[$];for(const V in z)v(z[V].object),delete z[V];delete ve[$]}}delete r[G.id]}function I(G){for(const j in r){const de=r[j];for(const ve in de){const $=de[ve];if($[G.id]===void 0)continue;const z=$[G.id];for(const V in z)v(z[V].object),delete z[V];delete $[G.id]}}}function b(G){for(const j in r){const de=r[j],ve=G.isInstancedMesh===!0?G.id:0,$=de[ve];if($!==void 0){for(const z in $){const V=$[z];for(const ee in V)v(V[ee].object),delete V[ee];delete $[z]}delete de[ve],Object.keys(de).length===0&&delete r[j]}}}function O(){k(),h=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:k,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:S,disableUnusedAttributes:L}}function F3(s,e,i){let r;function l(m){r=m}function c(m,d){s.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,v){v!==0&&(s.drawArraysInstanced(r,m,d,v),i.update(d,r,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function I3(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Fi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const b=I===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==pi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!b)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(at("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:R,maxSamples:B,samples:N}}function B3(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Or,p=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||r!==0||l;return l=g,r=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,E){const A=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,M=s.get(x);if(!l||A===null||A.length===0||c&&!S)c?v(null):d();else{const L=c?0:r,D=L*4;let R=M.clippingState||null;m.value=R,R=v(A,g,D,E);for(let B=0;B!==D;++B)R[B]=i[B];M.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,E,A){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=m.value,A!==!0||S===null){const M=E+w*4,L=g.matrixWorldInverse;p.getNormalMatrix(L),(S===null||S.length<M)&&(S=new Float32Array(M));for(let D=0,R=E;D!==w;++D,R+=4)h.copy(x[D]).applyMatrix4(L,p),h.normal.toArray(S,R),S[R+3]=h.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const lr=4,i_=[.125,.215,.35,.446,.526,.582],Fr=20,z3=256,jo=new x0,a_=new Ct;let $h=null,ed=0,td=0,nd=!1;const H3=new J;class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:p=H3}=c;$h=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($h,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Aa,format:Fi,colorSpace:au,depthBuffer:!1},l=s_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V3(c)),this._blurMaterial=k3(c,e,i),this._ggxMaterial=G3(c,e,i)}return l}_compileMaterial(e){const i=new Jn(new Bn,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new di(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(a_),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new ul,new al({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let M=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,M=!0):(S.color.copy(a_),M=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):R===1?(m.up.set(0,0,d[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,d[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const B=this._cubeSize;zs(l,R*B,D>2?B:0,B,B),x.setRenderTarget(l),M&&x.render(w,m),x.render(e,m)}x.toneMapping=E,x.autoClear=g,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zr||e.mapping===Zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;zs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),g=0+d*1.25,E=x*g,{_lodMax:A}=this,w=this._sizeLods[r],S=3*w*(r>A-lr?r-A+lr:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,zs(c,S,M,3*w,2*w),l.setRenderTarget(c),l.render(p,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,zs(e,S,M,3*w,2*w),l.setRenderTarget(e),l.render(p,jo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Fr-1),w=c/A,S=isFinite(c)?1+Math.floor(v*w):Fr;S>Fr&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Fr}`);const M=[];let L=0;for(let I=0;I<Fr;++I){const b=I/w,O=Math.exp(-b*b/2);M.push(O),I===0?L+=O:I<S&&(L+=2*O)}for(let I=0;I<M.length;I++)M[I]=M[I]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=M,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=A,g.mipInt.value=D-r;const R=this._sizeLods[l],B=3*R*(l>D-lr?l-D+lr:0),N=4*(this._cubeSize-R);zs(i,B,N,3*R,2*R),m.setRenderTarget(i),m.render(x,jo)}}function V3(s){const e=[],i=[],r=[];let l=s;const c=s-lr+1+i_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>s-lr?m=i_[h-s+lr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,x=1+d,g=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,A=6,w=3,S=2,M=1,L=new Float32Array(w*A*E),D=new Float32Array(S*A*E),R=new Float32Array(M*A*E);for(let N=0;N<E;N++){const I=N%3*2/3-1,b=N>2?0:-1,O=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];L.set(O,w*A*N),D.set(g,S*A*N);const k=[N,N,N,N,N,N];R.set(k,M*A*N)}const B=new Bn;B.setAttribute("position",new mi(L,w)),B.setAttribute("uv",new mi(D,S)),B.setAttribute("faceIndex",new mi(R,M)),r.push(new Jn(B,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function s_(s,e,i){const r=new Ki(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function G3(s,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function k3(s,e,i){const r=new Float32Array(Fr),l=new J(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function o_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function l_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class mv extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ov(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:Ea});c.uniforms.tEquirect.value=i;const h=new Jn(l,c),p=i.minFilter;return i.minFilter===Ir&&(i.minFilter=Fn),new ZS(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function X3(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Ah||E===Th)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const w=new mv(A.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,A=E===Ah||E===Th,w=E===zr||E===Zs;if(A||w){let S=i.get(g);const M=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new r_(s)),S=A?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const L=g.image;return A&&L&&L.height>0||w&&L&&m(L)?(r===null&&(r=new r_(s)),S=A?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,E){return E===Ah?g.mapping=zr:E===Th&&(g.mapping=Zs),g}function m(g){let E=0;const A=6;for(let w=0;w<A;w++)g[w]!==void 0&&E++;return E===A}function d(g){const E=g.target;E.removeEventListener("dispose",d);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function W3(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ks("WebGLRenderer: "+r+" extension not supported."),l}}}function Z3(s,e,i,r){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER)}function d(x){const g=[],E=x.index,A=x.attributes.position;let w=0;if(A===void 0)return;if(E!==null){const L=E.array;w=E.version;for(let D=0,R=L.length;D<R;D+=3){const B=L[D+0],N=L[D+1],I=L[D+2];g.push(B,N,N,I,I,B)}}else{const L=A.array;w=A.version;for(let D=0,R=L.length/3-1;D<R;D+=3){const B=D+0,N=D+1,I=D+2;g.push(B,N,N,I,I,B)}}const S=new(A.count>=65535?iv:nv)(g,1);S.version=w;const M=c.get(x);M&&e.remove(M),c.set(x,S)}function v(x){const g=c.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function q3(s,e,i){let r;function l(x){r=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*h),i.update(g,r,1)}function d(x,g,E){E!==0&&(s.drawElementsInstanced(r,g,c,x*h,E),i.update(g,r,E))}function v(x,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,E);let w=0;for(let S=0;S<E;S++)w+=g[S];i.update(w,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function Y3(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function K3(s,e,i){const r=new WeakMap,l=new sn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let k=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",k)};var E=k;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],L=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let R=0;A===!0&&(R=1),w===!0&&(R=2),S===!0&&(R=3);let B=p.attributes.position.count*R,N=1;B>e.maxTextureSize&&(N=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*N*4*x),b=new ev(I,B,N,x);b.type=Pi,b.needsUpdate=!0;const O=R*4;for(let G=0;G<x;G++){const j=M[G],de=L[G],ve=D[G],$=B*N*4*G;for(let z=0;z<j.count;z++){const V=z*O;A===!0&&(l.fromBufferAttribute(j,z),I[$+V+0]=l.x,I[$+V+1]=l.y,I[$+V+2]=l.z,I[$+V+3]=0),w===!0&&(l.fromBufferAttribute(de,z),I[$+V+4]=l.x,I[$+V+5]=l.y,I[$+V+6]=l.z,I[$+V+7]=0),S===!0&&(l.fromBufferAttribute(ve,z),I[$+V+8]=l.x,I[$+V+9]=l.y,I[$+V+10]=l.z,I[$+V+11]=ve.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new St(B,N)},r.set(p,g),p.addEventListener("dispose",k)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let A=0;for(let S=0;S<d.length;S++)A+=d[S];const w=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function Q3(s,e,i,r,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const J3={[H_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[G_]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[X_]:"AGX_TONE_MAPPING",[W_]:"NEUTRAL_TONE_MAPPING",[k_]:"CUSTOM_TONE_MAPPING"};function j3(s,e,i,r,l,c){const h=new Ki(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new qs(e,i):void 0}),p=new Ki(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),m=new Bn;m.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const d=new OS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Jn(m,d),x=new x0(-1,1,1,-1,0,1);let g=null,E=null,A=!1,w,S=null,M=[],L=!1;this.setSize=function(D,R){h.setSize(D,R),p.setSize(D,R);for(let B=0;B<M.length;B++){const N=M[B];N.setSize&&N.setSize(D,R)}},this.setEffects=function(D){M=D,L=M.length>0&&M[0].isRenderPass===!0;const R=h.width,B=h.height;for(let N=0;N<M.length;N++){const I=M[N];I.setSize&&I.setSize(R,B)}},this.begin=function(D,R){if(A||D.toneMapping===Yi&&M.length===0)return!1;if(S=R,R!==null){const B=R.width,N=R.height;(h.width!==B||h.height!==N)&&this.setSize(B,N)}return L===!1&&D.setRenderTarget(h),w=D.toneMapping,D.toneMapping=Yi,!0},this.hasRenderPass=function(){return L},this.end=function(D,R){D.toneMapping=w,A=!0;let B=h,N=p;for(let I=0;I<M.length;I++){const b=M[I];if(b.enabled!==!1&&(b.render(D,N,B,R),b.needsSwap!==!1)){const O=B;B=N,N=O}}if(g!==D.outputColorSpace||E!==D.toneMapping){g=D.outputColorSpace,E=D.toneMapping,d.defines={},Dt.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const I=J3[E];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=B.texture,D.setRenderTarget(S),D.render(v,x),S=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const gv=new In,Kd=new qs(1,1),_v=new ev,vv=new lS,xv=new ov,c_=[],u_=[],f_=new Float32Array(16),h_=new Float32Array(9),d_=new Float32Array(4);function Qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=c_[l];if(c===void 0&&(c=new Float32Array(l),c_[l]=c),e!==0){r.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,s[h].toArray(c,p)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function pu(s,e){let i=u_[e];i===void 0&&(i=new Int32Array(e),u_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function $3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function eb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function tb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function nb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function ib(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;d_.set(r),s.uniformMatrix2fv(this.addr,!1,d_),yn(i,r)}}function ab(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;h_.set(r),s.uniformMatrix3fv(this.addr,!1,h_),yn(i,r)}}function rb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;f_.set(r),s.uniformMatrix4fv(this.addr,!1,f_),yn(i,r)}}function sb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function ob(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function lb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function cb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function ub(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function fb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function hb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function db(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function pb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Kd.compareFunction=i.isReversedDepthBuffer()?l0:o0,c=Kd):c=gv,i.setTexture2D(e||c,l)}function mb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||vv,l)}function gb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||xv,l)}function _b(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||_v,l)}function vb(s){switch(s){case 5126:return $3;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return ab;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}function xb(s,e){s.uniform1fv(this.addr,e)}function Mb(s,e){const i=Qs(e,this.size,2);s.uniform2fv(this.addr,i)}function Sb(s,e){const i=Qs(e,this.size,3);s.uniform3fv(this.addr,i)}function yb(s,e){const i=Qs(e,this.size,4);s.uniform4fv(this.addr,i)}function Eb(s,e){const i=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function bb(s,e){const i=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Ab(s,e){const i=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Tb(s,e){s.uniform1iv(this.addr,e)}function Rb(s,e){s.uniform2iv(this.addr,e)}function Cb(s,e){s.uniform3iv(this.addr,e)}function wb(s,e){s.uniform4iv(this.addr,e)}function Db(s,e){s.uniform1uiv(this.addr,e)}function Ub(s,e){s.uniform2uiv(this.addr,e)}function Lb(s,e){s.uniform3uiv(this.addr,e)}function Nb(s,e){s.uniform4uiv(this.addr,e)}function Ob(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=Kd:h=gv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function Pb(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||vv,c[h])}function Fb(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||xv,c[h])}function Ib(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||_v,c[h])}function Bb(s){switch(s){case 5126:return xb;case 35664:return Mb;case 35665:return Sb;case 35666:return yb;case 35674:return Eb;case 35675:return bb;case 35676:return Ab;case 5124:case 35670:return Tb;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return wb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ib}}class zb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=vb(i.type)}}class Hb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Bb(i.type)}}class Vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const id=/(\w+)(\])?(\[|\.)?/g;function p_(s,e){s.seq.push(e),s.map[e.id]=e}function Gb(s,e,i){const r=s.name,l=r.length;for(id.lastIndex=0;;){const c=id.exec(r),h=id.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){p_(i,d===void 0?new zb(p,s,e):new Hb(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new Vb(p),p_(i,x)),i=x}}}class tu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);Gb(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function m_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const kb=37297;let Xb=0;function Wb(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const g_=new ct;function Zb(s){Dt._getMatrix(g_,Dt.workingColorSpace,s);const e=`mat3( ${g_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function __(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Wb(s.getShaderSource(e),p)}else return c}function qb(s,e){const i=Zb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Yb={[H_]:"Linear",[V_]:"Reinhard",[G_]:"Cineon",[$d]:"ACESFilmic",[X_]:"AgX",[W_]:"Neutral",[k_]:"Custom"};function Kb(s,e){const i=Yb[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new J;function Qb(){Dt.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function jb(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function $b(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:p}}return i}function tl(s){return s!==""}function v_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(s){return s.replace(eA,nA)}const tA=new Map;function nA(s,e){let i=xt[e];if(i===void 0){const r=tA.get(e);if(r!==void 0)i=xt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qd(i)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(s){return s.replace(iA,aA)}function aA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function S_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const rA={[Qc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function sA(s){return rA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oA={[zr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function lA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":oA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cA={[Zs]:"ENVMAP_MODE_REFRACTION"};function uA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fA={[z_]:"ENVMAP_BLENDING_MULTIPLY",[TM]:"ENVMAP_BLENDING_MIX",[RM]:"ENVMAP_BLENDING_ADD"};function hA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fA[s.combine]||"ENVMAP_BLENDING_NONE"}function dA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function pA(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=sA(i),d=lA(i),v=uA(i),x=hA(i),g=dA(i),E=Jb(i),A=jb(c),w=l.createProgram();let S,M,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),M.length>0&&(M+=`
`)):(S=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),M=[S_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?Kb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,qb("linearToOutputTexel",i.outputColorSpace),Qb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),h=Qd(h),h=v_(h,i),h=x_(h,i),p=Qd(p),p=v_(p,i),p=x_(p,i),h=M_(h),p=M_(p),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",i.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const D=L+S+h,R=L+M+p,B=m_(l,l.VERTEX_SHADER,D),N=m_(l,l.FRAGMENT_SHADER,R);l.attachShader(w,B),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(G){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",de=l.getShaderInfoLog(B)||"",ve=l.getShaderInfoLog(N)||"",$=j.trim(),z=de.trim(),V=ve.trim();let ee=!0,me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,B,N);else{const be=__(l,B,"vertex"),F=__(l,N,"fragment");Ut("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+be+`
`+F)}else $!==""?at("WebGLProgram: Program Info Log:",$):(z===""||V==="")&&(me=!1);me&&(G.diagnostics={runnable:ee,programLog:$,vertexShader:{log:z,prefix:S},fragmentShader:{log:V,prefix:M}})}l.deleteShader(B),l.deleteShader(N),b=new tu(l,w),O=$b(l,w)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(w,kb)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Xb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=N,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new _A(e),i.set(e,r)),r}}class _A{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function vA(s){return s===Hr||s===nu||s===iu}function xA(s,e,i,r,l,c){const h=new f0,p=new gA,m=new Set,d=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,O,k,G,j,de){const ve=G.fog,$=j.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ee=e.get(b.envMap||z,V),me=ee&&ee.mapping===uu?ee.image.height:null,be=E[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&at("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const F=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Y=F!==void 0?F.length:0;let ye=0;$.morphAttributes.position!==void 0&&(ye=1),$.morphAttributes.normal!==void 0&&(ye=2),$.morphAttributes.color!==void 0&&(ye=3);let Re,Oe,se,Me;if(be){const ke=Wi[be];Re=ke.vertexShader,Oe=ke.fragmentShader}else{Re=b.vertexShader,Oe=b.fragmentShader;const ke=p.getVertexShaderStage(b),tn=p.getFragmentShaderStage(b);p.update(b,ke,tn),se=ke.id,Me=tn.id}const Se=s.getRenderTarget(),ze=s.state.buffers.depth.getReversed(),nt=j.isInstancedMesh===!0,Qe=j.isBatchedMesh===!0,Lt=!!b.map,ut=!!b.matcap,Mt=!!ee,ht=!!b.aoMap,vt=!!b.lightMap,jt=!!b.bumpMap&&b.wireframe===!1,Ye=!!b.normalMap,ot=!!b.displacementMap,ft=!!b.emissiveMap,rt=!!b.metalnessMap,Kt=!!b.roughnessMap,W=b.anisotropy>0,mt=b.clearcoat>0,gt=b.dispersion>0,P=b.iridescence>0,y=b.sheen>0,K=b.transmission>0,te=W&&!!b.anisotropyMap,ce=mt&&!!b.clearcoatMap,Ae=mt&&!!b.clearcoatNormalMap,Ue=mt&&!!b.clearcoatRoughnessMap,fe=P&&!!b.iridescenceMap,he=P&&!!b.iridescenceThicknessMap,we=y&&!!b.sheenColorMap,He=y&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Le=!!b.specularColorMap,je=!!b.specularIntensityMap,$e=K&&!!b.transmissionMap,st=K&&!!b.thicknessMap,Z=!!b.gradientMap,Ce=!!b.alphaMap,ge=b.alphaTest>0,De=!!b.alphaHash,Be=!!b.extensions;let Ee=Yi;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const qe={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Oe,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&j._colorsTexture!==null,instancing:nt,instancingColor:nt&&j.instanceColor!==null,instancingMorph:nt&&j.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Lt,matcap:ut,envMap:Mt,envMapMode:Mt&&ee.mapping,envMapCubeUVHeight:me,aoMap:ht,lightMap:vt,bumpMap:jt,normalMap:Ye,displacementMap:ot,emissiveMap:ft,normalMapObjectSpace:Ye&&b.normalMapType===DM,normalMapTangentSpace:Ye&&b.normalMapType===Zd,packedNormalMap:Ye&&b.normalMapType===Zd&&vA(b.normalMap.format),metalnessMap:rt,roughnessMap:Kt,anisotropy:W,anisotropyMap:te,clearcoat:mt,clearcoatMap:ce,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:gt,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:y,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Le,specularIntensityMap:je,transmission:K,transmissionMap:$e,thicknessMap:st,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Gs&&b.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ge,alphaHash:De,combine:b.combine,mapUv:Lt&&A(b.map.channel),aoMapUv:ht&&A(b.aoMap.channel),lightMapUv:vt&&A(b.lightMap.channel),bumpMapUv:jt&&A(b.bumpMap.channel),normalMapUv:Ye&&A(b.normalMap.channel),displacementMapUv:ot&&A(b.displacementMap.channel),emissiveMapUv:ft&&A(b.emissiveMap.channel),metalnessMapUv:rt&&A(b.metalnessMap.channel),roughnessMapUv:Kt&&A(b.roughnessMap.channel),anisotropyMapUv:te&&A(b.anisotropyMap.channel),clearcoatMapUv:ce&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(b.sheenRoughnessMap.channel),specularMapUv:Pe&&A(b.specularMap.channel),specularColorMapUv:Le&&A(b.specularColorMap.channel),specularIntensityMapUv:je&&A(b.specularIntensityMap.channel),transmissionMapUv:$e&&A(b.transmissionMap.channel),thicknessMapUv:st&&A(b.thicknessMap.channel),alphaMapUv:Ce&&A(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ye||W),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!$.attributes.uv&&(Lt||Ce),fog:!!ve,useFog:b.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ze,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ye,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Lt&&b.map.isVideoTexture===!0&&Dt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ni,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)O.push(k),O.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(M(O,b),L(O,b),O.push(s.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function M(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function L(b,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function D(b){const O=E[b.type];let k;if(O){const G=Wi[O];k=US.clone(G.uniforms)}else k=b.uniforms;return k}function R(b,O){let k=v.get(O);return k!==void 0?++k.usedTimes:(k=new pA(s,O,b,l),d.push(k),v.set(O,k)),k}function B(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function N(b){p.remove(b)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:D,acquireProgram:R,releaseProgram:B,releaseShaderCache:N,programs:d,dispose:I}}function MA(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let p=s.get(h);return p===void 0&&(p={},s.set(h,p)),p}function r(h){s.delete(h)}function l(h,p,m){s.get(h)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function SA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function E_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,A,w,S,M){let L=s[e];return L===void 0?(L={id:g.id,object:g,geometry:E,material:A,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:S,group:M},s[e]=L):(L.id=g.id,L.object=g,L.geometry=E,L.material=A,L.materialVariant=h(g),L.groupOrder=w,L.renderOrder=g.renderOrder,L.z=S,L.group=M),e++,L}function m(g,E,A,w,S,M){const L=p(g,E,A,w,S,M);A.transmission>0?r.push(L):A.transparent===!0?l.push(L):i.push(L)}function d(g,E,A,w,S,M){const L=p(g,E,A,w,S,M);A.transmission>0?r.unshift(L):A.transparent===!0?l.unshift(L):i.unshift(L)}function v(g,E,A){i.length>1&&i.sort(g||SA),r.length>1&&r.sort(E||y_),l.length>1&&l.sort(E||y_),A&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,E=s.length;g<E;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function yA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new E_,s.set(r,[h])):l>=c.length?(h=new E_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function EA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Ct};break;case"SpotLight":i={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=i,i}}}function bA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let AA=0;function TA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RA(s){const e=new EA,i=bA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new J);const l=new J,c=new Wt,h=new Wt;function p(d){let v=0,x=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let E=0,A=0,w=0,S=0,M=0,L=0,D=0,R=0,B=0,N=0,I=0;d.sort(TA);for(let O=0,k=d.length;O<k;O++){const G=d[O],j=G.color,de=G.intensity,ve=G.distance;let $=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Hr?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=j.r*de,x+=j.g*de,g+=j.b*de;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],de);I++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,ee=i.get(G);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.directionalShadow[E]=ee,r.directionalShadowMap[E]=$,r.directionalShadowMatrix[E]=G.shadow.matrix,L++}r.directional[E]=z,E++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(j).multiplyScalar(de),z.distance=ve,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[w]=z;const V=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,V.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[w]=V.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.spotShadow[w]=ee,r.spotShadowMap[w]=$,R++}w++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(j).multiplyScalar(de),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=z,S++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const V=G.shadow,ee=i.get(G);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,r.pointShadow[A]=ee,r.pointShadowMap[A]=$,r.pointShadowMatrix[A]=G.shadow.matrix,D++}r.point[A]=z,A++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(de),z.groundColor.copy(G.groundColor).multiplyScalar(de),r.hemi[M]=z,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==E||b.pointLength!==A||b.spotLength!==w||b.rectAreaLength!==S||b.hemiLength!==M||b.numDirectionalShadows!==L||b.numPointShadows!==D||b.numSpotShadows!==R||b.numSpotMaps!==B||b.numLightProbes!==I)&&(r.directional.length=E,r.spot.length=w,r.rectArea.length=S,r.point.length=A,r.hemi.length=M,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+B-N,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=I,b.directionalLength=E,b.pointLength=A,b.spotLength=w,b.rectAreaLength=S,b.hemiLength=M,b.numDirectionalShadows=L,b.numPointShadows=D,b.numSpotShadows=R,b.numSpotMaps=B,b.numLightProbes=I,r.version=AA++)}function m(d,v){let x=0,g=0,E=0,A=0,w=0;const S=v.matrixWorldInverse;for(let M=0,L=d.length;M<L;M++){const D=d[M];if(D.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),x++}else if(D.isSpotLight){const R=r.spot[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const R=r.rectArea[A];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),h.identity(),c.copy(D.matrixWorld),c.premultiply(S),h.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),A++}else if(D.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),w++}}}return{setup:p,setupView:m,state:r}}function b_(s){const e=new RA(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function CA(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new b_(s),e.set(l,[p])):c>=h.length?(p=new b_(s),h.push(p)):p=h[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`,UA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],LA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],A_=new Wt,$o=new J,ad=new J;function NA(s,e,i){let r=new d0;const l=new St,c=new St,h=new sn,p=new PS,m=new FS,d={},v=i.maxTextureSize,x={[cr]:Qn,[Qn]:cr,[Ni]:Ni},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:wA,fragmentShader:DA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const A=new Bn;A.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Jn(A,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let M=this.type;this.render=function(N,I,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===oM&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const O=s.getRenderTarget(),k=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ea),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const de=M!==this.type;de&&I.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach($=>$.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,$=N.length;ve<$;ve++){const z=N[ve],V=z.shadow;if(V===void 0){at("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ee=V.getFrameExtents();l.multiply(ee),c.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,V.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,V.mapSize.y=c.y));const me=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=me,V.map===null||de===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===el){if(z.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ki(l.x,l.y,{format:Hr,type:Aa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new qs(l.x,l.y,Pi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Ta,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else z.isPointLight?(V.map=new mv(l.x),V.map.depthTexture=new wS(l.x,Qi)):(V.map=new Ki(l.x,l.y),V.map.depthTexture=new qs(l.x,l.y,Qi)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Ta,this.type===Qc?(V.map.depthTexture.compareFunction=me?l0:o0,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un);V.camera.updateProjectionMatrix()}const be=V.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<be;F++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,F),s.clear();else{F===0&&(s.setRenderTarget(V.map),s.clear());const Y=V.getViewport(F);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),j.viewport(h)}if(z.isPointLight){const Y=V.camera,ye=V.matrix,Re=z.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),$o.setFromMatrixPosition(z.matrixWorld),Y.position.copy($o),ad.copy(Y.position),ad.add(UA[F]),Y.up.copy(LA[F]),Y.lookAt(ad),Y.updateMatrixWorld(),ye.makeTranslation(-$o.x,-$o.y,-$o.z),A_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(A_,Y.coordinateSystem,Y.reversedDepth)}else V.updateMatrices(z);r=V.getFrustum(),R(I,b,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===el&&L(V,b),V.needsUpdate=!1}M=this.type,S.needsUpdate=!1,s.setRenderTarget(O,k,G)};function L(N,I){const b=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,E.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ki(l.x,l.y,{format:Hr,type:Aa})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(I,null,b,g,w,null),E.uniforms.shadow_pass.value=N.mapPass.texture,E.uniforms.resolution.value=N.mapSize,E.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(I,null,b,E,w,null)}function D(N,I,b,O){let k=null;const G=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)k=G;else if(k=b.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=k.uuid,de=I.uuid;let ve=d[j];ve===void 0&&(ve={},d[j]=ve);let $=ve[de];$===void 0&&($=k.clone(),ve[de]=$,I.addEventListener("dispose",B)),k=$}if(k.visible=I.visible,k.wireframe=I.wireframe,O===el?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:x[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const j=s.properties.get(k);j.light=b}return k}function R(N,I,b,O,k){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===el)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const de=e.update(N),ve=N.material;if(Array.isArray(ve)){const $=de.groups;for(let z=0,V=$.length;z<V;z++){const ee=$[z],me=ve[ee.materialIndex];if(me&&me.visible){const be=D(N,me,O,k);N.onBeforeShadow(s,N,I,b,de,be,ee),s.renderBufferDirect(b,null,de,be,N,ee),N.onAfterShadow(s,N,I,b,de,be,ee)}}}else if(ve.visible){const $=D(N,ve,O,k);N.onBeforeShadow(s,N,I,b,de,$,null),s.renderBufferDirect(b,null,de,$,N,null),N.onAfterShadow(s,N,I,b,de,$,null)}}const j=N.children;for(let de=0,ve=j.length;de<ve;de++)R(j[de],I,b,O,k)}function B(N){N.target.removeEventListener("dispose",B);for(const b in d){const O=d[b],k=N.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}}function OA(s,e){function i(){let Z=!1;const Ce=new sn;let ge=null;const De=new sn(0,0,0,0);return{setMask:function(Be){ge!==Be&&!Z&&(s.colorMask(Be,Be,Be,Be),ge=Be)},setLocked:function(Be){Z=Be},setClear:function(Be,Ee,qe,ke,tn){tn===!0&&(Be*=ke,Ee*=ke,qe*=ke),Ce.set(Be,Ee,qe,ke),De.equals(Ce)===!1&&(s.clearColor(Be,Ee,qe,ke),De.copy(Ce))},reset:function(){Z=!1,ge=null,De.set(-1,0,0,0)}}}function r(){let Z=!1,Ce=!1,ge=null,De=null,Be=null;return{setReversed:function(Ee){if(Ce!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const ke=Be;Be=null,this.setClear(ke)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?Se(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(Ee){ge!==Ee&&!Z&&(s.depthMask(Ee),ge=Ee)},setFunc:function(Ee){if(Ce&&(Ee=HM[Ee]),De!==Ee){switch(Ee){case od:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=Ee}},setLocked:function(Ee){Z=Ee},setClear:function(Ee){Be!==Ee&&(Be=Ee,Ce&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){Z=!1,ge=null,De=null,Be=null,Ce=!1}}}function l(){let Z=!1,Ce=null,ge=null,De=null,Be=null,Ee=null,qe=null,ke=null,tn=null;return{setTest:function(Bt){Z||(Bt?Se(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Bt){Ce!==Bt&&!Z&&(s.stencilMask(Bt),Ce=Bt)},setFunc:function(Bt,$n,ei){(ge!==Bt||De!==$n||Be!==ei)&&(s.stencilFunc(Bt,$n,ei),ge=Bt,De=$n,Be=ei)},setOp:function(Bt,$n,ei){(Ee!==Bt||qe!==$n||ke!==ei)&&(s.stencilOp(Bt,$n,ei),Ee=Bt,qe=$n,ke=ei)},setLocked:function(Bt){Z=Bt},setClear:function(Bt){tn!==Bt&&(s.clearStencil(Bt),tn=Bt)},reset:function(){Z=!1,Ce=null,ge=null,De=null,Be=null,Ee=null,qe=null,ke=null,tn=null}}}const c=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},g={},E=new WeakMap,A=[],w=null,S=!1,M=null,L=null,D=null,R=null,B=null,N=null,I=null,b=new Ct(0,0,0),O=0,k=!1,G=null,j=null,de=null,ve=null,$=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(me)[1]),V=ee>=1):me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),V=ee>=2);let be=null,F={};const Y=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Re=new sn().fromArray(Y),Oe=new sn().fromArray(ye);function se(Z,Ce,ge,De){const Be=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(Z,Ee),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ge;qe++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Ce+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Ee}const Me={};Me[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),h.setFunc(Ws),jt(!1),Ye(gg),Se(s.CULL_FACE),ht(Ea);function Se(Z){v[Z]!==!0&&(s.enable(Z),v[Z]=!0)}function ze(Z){v[Z]!==!1&&(s.disable(Z),v[Z]=!1)}function nt(Z,Ce){return g[Z]!==Ce?(s.bindFramebuffer(Z,Ce),g[Z]=Ce,Z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),Z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(Z,Ce){let ge=A,De=!1;if(Z){ge=E.get(Ce),ge===void 0&&(ge=[],E.set(Ce,ge));const Be=Z.textures;if(ge.length!==Be.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,qe=Be.length;Ee<qe;Ee++)ge[Ee]=s.COLOR_ATTACHMENT0+Ee;ge.length=Be.length,De=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,De=!0);De&&s.drawBuffers(ge)}function Lt(Z){return w!==Z?(s.useProgram(Z),w=Z,!0):!1}const ut={[Pr]:s.FUNC_ADD,[cM]:s.FUNC_SUBTRACT,[uM]:s.FUNC_REVERSE_SUBTRACT};ut[fM]=s.MIN,ut[hM]=s.MAX;const Mt={[dM]:s.ZERO,[pM]:s.ONE,[mM]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[SM]:s.SRC_ALPHA_SATURATE,[xM]:s.DST_COLOR,[_M]:s.DST_ALPHA,[gM]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[MM]:s.ONE_MINUS_DST_COLOR,[vM]:s.ONE_MINUS_DST_ALPHA,[yM]:s.CONSTANT_COLOR,[EM]:s.ONE_MINUS_CONSTANT_COLOR,[bM]:s.CONSTANT_ALPHA,[AM]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(Z,Ce,ge,De,Be,Ee,qe,ke,tn,Bt){if(Z===Ea){S===!0&&(ze(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),Z!==lM){if(Z!==M||Bt!==k){if((L!==Pr||B!==Pr)&&(s.blendEquation(s.FUNC_ADD),L=Pr,B=Pr),Bt)switch(Z){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _g:s.blendFunc(s.ONE,s.ONE);break;case vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _g:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Z);break}D=null,R=null,N=null,I=null,b.set(0,0,0),O=0,M=Z,k=Bt}return}Be=Be||Ce,Ee=Ee||ge,qe=qe||De,(Ce!==L||Be!==B)&&(s.blendEquationSeparate(ut[Ce],ut[Be]),L=Ce,B=Be),(ge!==D||De!==R||Ee!==N||qe!==I)&&(s.blendFuncSeparate(Mt[ge],Mt[De],Mt[Ee],Mt[qe]),D=ge,R=De,N=Ee,I=qe),(ke.equals(b)===!1||tn!==O)&&(s.blendColor(ke.r,ke.g,ke.b,tn),b.copy(ke),O=tn),M=Z,k=!1}function vt(Z,Ce){Z.side===Ni?ze(s.CULL_FACE):Se(s.CULL_FACE);let ge=Z.side===Qn;Ce&&(ge=!ge),jt(ge),Z.blending===Gs&&Z.transparent===!1?ht(Ea):ht(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const De=Z.stencilWrite;p.setTest(De),De&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ft(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Z){G!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),G=Z)}function Ye(Z){Z!==rM?(Se(s.CULL_FACE),Z!==j&&(Z===gg?s.cullFace(s.BACK):Z===sM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),j=Z}function ot(Z){Z!==de&&(V&&s.lineWidth(Z),de=Z)}function ft(Z,Ce,ge){Z?(Se(s.POLYGON_OFFSET_FILL),(ve!==Ce||$!==ge)&&(ve=Ce,$=ge,h.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ge))):ze(s.POLYGON_OFFSET_FILL)}function rt(Z){Z?Se(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Kt(Z){Z===void 0&&(Z=s.TEXTURE0+z-1),be!==Z&&(s.activeTexture(Z),be=Z)}function W(Z,Ce,ge){ge===void 0&&(be===null?ge=s.TEXTURE0+z-1:ge=be);let De=F[ge];De===void 0&&(De={type:void 0,texture:void 0},F[ge]=De),(De.type!==Z||De.texture!==Ce)&&(be!==ge&&(s.activeTexture(ge),be=ge),s.bindTexture(Z,Ce||Me[Z]),De.type=Z,De.texture=Ce)}function mt(){const Z=F[be];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function y(){try{s.texSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function K(){try{s.texSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function ce(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ae(){try{s.texStorage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ue(){try{s.texStorage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function fe(){try{s.texImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function he(){try{s.texImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function we(Z){return x[Z]!==void 0?x[Z]:s.getParameter(Z)}function He(Z,Ce){x[Z]!==Ce&&(s.pixelStorei(Z,Ce),x[Z]=Ce)}function Pe(Z){Re.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function Le(Z){Oe.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Oe.copy(Z))}function je(Z,Ce){let ge=d.get(Ce);ge===void 0&&(ge=new WeakMap,d.set(Ce,ge));let De=ge.get(Z);De===void 0&&(De=s.getUniformBlockIndex(Ce,Z.name),ge.set(Z,De))}function $e(Z,Ce){const De=d.get(Ce).get(Z);m.get(Ce)!==De&&(s.uniformBlockBinding(Ce,De,Z.__bindingPointIndex),m.set(Ce,De))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},be=null,F={},g={},E=new WeakMap,A=[],w=null,S=!1,M=null,L=null,D=null,R=null,B=null,N=null,I=null,b=new Ct(0,0,0),O=0,k=!1,G=null,j=null,de=null,ve=null,$=null,Re.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Se,disable:ze,bindFramebuffer:nt,drawBuffers:Qe,useProgram:Lt,setBlending:ht,setMaterial:vt,setFlipSided:jt,setCullFace:Ye,setLineWidth:ot,setPolygonOffset:ft,setScissorTest:rt,activeTexture:Kt,bindTexture:W,unbindTexture:mt,compressedTexImage2D:gt,compressedTexImage3D:P,texImage2D:fe,texImage3D:he,pixelStorei:He,getParameter:we,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:y,texSubImage3D:K,compressedTexSubImage2D:te,compressedTexSubImage3D:ce,scissor:Pe,viewport:Le,reset:st}}function PA(s,e,i,r,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new St,v=new WeakMap,x=new Set;let g;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,y){return A?new OffscreenCanvas(P,y):ll("canvas")}function S(P,y,K){let te=1;const ce=gt(P);if((ce.width>K||ce.height>K)&&(te=K/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ae=Math.floor(te*ce.width),Ue=Math.floor(te*ce.height);g===void 0&&(g=w(Ae,Ue));const fe=y?w(Ae,Ue):g;return fe.width=Ae,fe.height=Ue,fe.getContext("2d").drawImage(P,0,0,Ae,Ue),at("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ae+"x"+Ue+")."),fe}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function M(P){return P.generateMipmaps}function L(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(P,y,K,te,ce,Ae=!1){if(P!==null){if(s[P]!==void 0)return s[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;te&&(Ue=e.get("EXT_texture_norm16"),Ue||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.R16_EXT),K===s.SHORT&&Ue&&(fe=Ue.R16_SNORM_EXT)),y===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),y===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RG16_EXT),K===s.SHORT&&Ue&&(fe=Ue.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),y===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),y===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),y===s.RGB&&(K===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGB16_EXT),K===s.SHORT&&Ue&&(fe=Ue.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),y===s.RGBA){const he=Ae?ru:Dt.getTransfer(ce);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=he===Xt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ue&&(fe=Ue.RGBA16_EXT),K===s.SHORT&&Ue&&(fe=Ue.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(P,y){let K;return P?y===null||y===Qi||y===sl?K=s.DEPTH24_STENCIL8:y===Pi?K=s.DEPTH32F_STENCIL8:y===rl&&(K=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===sl?K=s.DEPTH_COMPONENT24:y===Pi?K=s.DEPTH_COMPONENT32F:y===rl&&(K=s.DEPTH_COMPONENT16),K}function N(P,y){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==Fn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function I(P){const y=P.target;y.removeEventListener("dispose",I),O(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&x.delete(y)}function b(P){const y=P.target;y.removeEventListener("dispose",b),G(y)}function O(P){const y=r.get(P);if(y.__webglInit===void 0)return;const K=P.source,te=E.get(K);if(te){const ce=te[y.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&k(P),Object.keys(te).length===0&&E.delete(K)}r.remove(P)}function k(P){const y=r.get(P);s.deleteTexture(y.__webglTexture);const K=P.source,te=E.get(K);delete te[y.__cacheKey],h.memory.textures--}function G(P){const y=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ce=0;ce<y.__webglFramebuffer[te].length;ce++)s.deleteFramebuffer(y.__webglFramebuffer[te][ce]);else s.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)s.deleteFramebuffer(y.__webglFramebuffer[te]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const K=P.textures;for(let te=0,ce=K.length;te<ce;te++){const Ae=r.get(K[te]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),h.memory.textures--),r.remove(K[te])}r.remove(P)}let j=0;function de(){j=0}function ve(){return j}function $(P){j=P}function z(){const P=j;return P>=l.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function V(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function ee(P,y){const K=r.get(P);if(P.isVideoTexture&&W(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const te=P.image;if(te===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(K,P,y);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+y)}function me(P,y){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ze(K,P,y);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+y)}function be(P,y){const K=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ze(K,P,y);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+y)}function F(P,y){const K=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){nt(K,P,y);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+y)}const Y={[pd]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},ye={[Un]:s.NEAREST,[CM]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Rh]:s.LINEAR_MIPMAP_NEAREST,[Ir]:s.LINEAR_MIPMAP_LINEAR},Re={[UM]:s.NEVER,[FM]:s.ALWAYS,[LM]:s.LESS,[o0]:s.LEQUAL,[NM]:s.EQUAL,[l0]:s.GEQUAL,[OM]:s.GREATER,[PM]:s.NOTEQUAL};function Oe(P,y){if(y.type===Pi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Fn||y.magFilter===Rh||y.magFilter===yc||y.magFilter===Ir||y.minFilter===Fn||y.minFilter===Rh||y.minFilter===yc||y.minFilter===Ir)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Y[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ye[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==yc&&y.minFilter!==Ir||y.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function se(P,y){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",I));const te=y.source;let ce=E.get(te);ce===void 0&&(ce={},E.set(te,ce));const Ae=V(y);if(Ae!==P.__cacheKey){ce[Ae]===void 0&&(ce[Ae]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,K=!0),ce[Ae].usedTimes++;const Ue=ce[P.__cacheKey];Ue!==void 0&&(ce[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&k(y)),P.__cacheKey=Ae,P.__webglTexture=ce[Ae].texture}return K}function Me(P,y,K){return Math.floor(Math.floor(P/K)/y)}function Se(P,y,K,te){const Ae=P.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,K,te,y.data);else{Ae.sort((He,Pe)=>He.start-Pe.start);let Ue=0;for(let He=1;He<Ae.length;He++){const Pe=Ae[Ue],Le=Ae[He],je=Pe.start+Pe.count,$e=Me(Le.start,y.width,4),st=Me(Pe.start,y.width,4);Le.start<=je+1&&$e===st&&Me(Le.start+Le.count-1,y.width,4)===$e?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Ue,Ae[Ue]=Le)}Ae.length=Ue+1;const fe=i.getParameter(s.UNPACK_ROW_LENGTH),he=i.getParameter(s.UNPACK_SKIP_PIXELS),we=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let He=0,Pe=Ae.length;He<Pe;He++){const Le=Ae[He],je=Math.floor(Le.start/4),$e=Math.ceil(Le.count/4),st=je%y.width,Z=Math.floor(je/y.width),Ce=$e,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,st),i.pixelStorei(s.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(s.TEXTURE_2D,0,st,Z,Ce,ge,K,te,y.data)}P.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,he),i.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function ze(P,y,K){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);const ce=se(P,y),Ae=y.source;i.bindTexture(te,P.__webglTexture,s.TEXTURE0+K);const Ue=r.get(Ae);if(Ae.version!==Ue.__version||ce===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=Dt.getPrimaries(Dt.workingColorSpace),De=y.colorSpace===or?null:Dt.getPrimaries(y.colorSpace),Be=y.colorSpace===or||ge===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let he=S(y.image,!1,l.maxTextureSize);he=mt(y,he);const we=c.convert(y.format,y.colorSpace),He=c.convert(y.type);let Pe=R(y.internalFormat,we,He,y.normalized,y.colorSpace,y.isVideoTexture);Oe(te,y);let Le;const je=y.mipmaps,$e=y.isVideoTexture!==!0,st=Ue.__version===void 0||ce===!0,Z=Ae.dataReady,Ce=N(y,he);if(y.isDepthTexture)Pe=B(y.format===Br,y.type),st&&($e?i.texStorage2D(s.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,we,He,null));else if(y.isDataTexture)if(je.length>0){$e&&st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],$e?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,He,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,we,He,Le.data);y.generateMipmaps=!1}else $e?(st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,he.width,he.height),Z&&Se(y,he,we,He)):i.texImage2D(s.TEXTURE_2D,0,Pe,he.width,he.height,0,we,He,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&st&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,je[0].width,je[0].height,he.depth);for(let ge=0,De=je.length;ge<De;ge++)if(Le=je[ge],y.format!==Fi)if(we!==null)if($e){if(Z)if(y.layerUpdates.size>0){const Be=n_(Le.width,Le.height,y.format,y.type);for(const Ee of y.layerUpdates){const qe=Le.data.subarray(Ee*Be/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Be/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Ee,Le.width,Le.height,1,we,qe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,we,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,he.depth,0,Le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?Z&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,he.depth,we,He,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Pe,Le.width,Le.height,he.depth,0,we,He,Le.data)}else{$e&&st&&i.texStorage2D(s.TEXTURE_2D,Ce,Pe,je[0].width,je[0].height);for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],y.format!==Fi?we!==null?$e?Z&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,Le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,we,He,Le.data):i.texImage2D(s.TEXTURE_2D,ge,Pe,Le.width,Le.height,0,we,He,Le.data)}else if(y.isDataArrayTexture)if($e){if(st&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Pe,he.width,he.height,he.depth),Z)if(y.layerUpdates.size>0){const ge=n_(he.width,he.height,y.format,y.type);for(const De of y.layerUpdates){const Be=he.data.subarray(De*ge/he.data.BYTES_PER_ELEMENT,(De+1)*ge/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,he.width,he.height,1,we,He,Be)}y.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,He,he.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,we,He,he.data);else if(y.isData3DTexture)$e?(st&&i.texStorage3D(s.TEXTURE_3D,Ce,Pe,he.width,he.height,he.depth),Z&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,He,he.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,we,He,he.data);else if(y.isFramebufferTexture){if(st)if($e)i.texStorage2D(s.TEXTURE_2D,Ce,Pe,he.width,he.height);else{let ge=he.width,De=he.height;for(let Be=0;Be<Ce;Be++)i.texImage2D(s.TEXTURE_2D,Be,Pe,ge,De,0,we,He,null),ge>>=1,De>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),he.parentNode!==ge){ge.appendChild(he),x.add(y),ge.onpaint=De=>{const Be=De.changedElements;for(const Ee of x)Be.includes(Ee.image)&&(Ee.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const Be=s.RGBA,Ee=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,Ee,qe,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if($e&&st){const ge=gt(je[0]);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,ge.width,ge.height)}for(let ge=0,De=je.length;ge<De;ge++)Le=je[ge],$e?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,we,He,Le):i.texImage2D(s.TEXTURE_2D,ge,Pe,we,He,Le);y.generateMipmaps=!1}else if($e){if(st){const ge=gt(he);i.texStorage2D(s.TEXTURE_2D,Ce,Pe,ge.width,ge.height)}Z&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,He,he)}else i.texImage2D(s.TEXTURE_2D,0,Pe,we,He,he);M(y)&&L(te),Ue.__version=Ae.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function nt(P,y,K){if(y.image.length!==6)return;const te=se(P,y),ce=y.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+K);const Ae=r.get(ce);if(ce.version!==Ae.__version||te===!0){i.activeTexture(s.TEXTURE0+K);const Ue=Dt.getPrimaries(Dt.workingColorSpace),fe=y.colorSpace===or?null:Dt.getPrimaries(y.colorSpace),he=y.colorSpace===or||Ue===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const we=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let Ee=0;Ee<6;Ee++)!we&&!He?Pe[Ee]=S(y.image[Ee],!0,l.maxCubemapSize):Pe[Ee]=He?y.image[Ee].image:y.image[Ee],Pe[Ee]=mt(y,Pe[Ee]);const Le=Pe[0],je=c.convert(y.format,y.colorSpace),$e=c.convert(y.type),st=R(y.internalFormat,je,$e,y.normalized,y.colorSpace),Z=y.isVideoTexture!==!0,Ce=Ae.__version===void 0||te===!0,ge=ce.dataReady;let De=N(y,Le);Oe(s.TEXTURE_CUBE_MAP,y);let Be;if(we){Z&&Ce&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){Be=Pe[Ee].mipmaps;for(let qe=0;qe<Be.length;qe++){const ke=Be[qe];y.format!==Fi?je!==null?Z?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,je,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,st,ke.width,ke.height,0,ke.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,0,0,ke.width,ke.height,je,$e,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe,st,ke.width,ke.height,0,je,$e,ke.data)}}}else{if(Be=y.mipmaps,Z&&Ce){Be.length>0&&De++;const Ee=gt(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(He){Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe[Ee].width,Pe[Ee].height,je,$e,Pe[Ee].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,st,Pe[Ee].width,Pe[Ee].height,0,je,$e,Pe[Ee].data);for(let qe=0;qe<Be.length;qe++){const tn=Be[qe].image[Ee].image;Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,tn.width,tn.height,je,$e,tn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,st,tn.width,tn.height,0,je,$e,tn.data)}}else{Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,je,$e,Pe[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,st,je,$e,Pe[Ee]);for(let qe=0;qe<Be.length;qe++){const ke=Be[qe];Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,0,0,je,$e,ke.image[Ee]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,qe+1,st,je,$e,ke.image[Ee])}}}M(y)&&L(s.TEXTURE_CUBE_MAP),Ae.__version=ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Qe(P,y,K,te,ce,Ae){const Ue=c.convert(K.format,K.colorSpace),fe=c.convert(K.type),he=R(K.internalFormat,Ue,fe,K.normalized,K.colorSpace),we=r.get(y),He=r.get(K);if(He.__renderTarget=y,!we.__hasExternalTextures){const Pe=Math.max(1,y.width>>Ae),Le=Math.max(1,y.height>>Ae);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?i.texImage3D(ce,Ae,he,Pe,Le,y.depth,0,Ue,fe,null):i.texImage2D(ce,Ae,he,Pe,Le,0,Ue,fe,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,ce,He.__webglTexture,0,rt(y)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,ce,He.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(P,y,K){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){const te=y.depthTexture,ce=te&&te.isDepthTexture?te.type:null,Ae=B(y.stencilBuffer,ce),Ue=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),Ae,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),Ae,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,P)}else{const te=y.textures;for(let ce=0;ce<te.length;ce++){const Ae=te[ce],Ue=c.convert(Ae.format,Ae.colorSpace),fe=c.convert(Ae.type),he=R(Ae.internalFormat,Ue,fe,Ae.normalized,Ae.colorSpace);Kt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),he,y.width,y.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(P,y,K){const te=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=r.get(y.depthTexture);if(ce.__renderTarget=y,(!ce.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),ce.__webglTexture===void 0){ce.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,y.depthTexture);const we=c.convert(y.depthTexture.format),He=c.convert(y.depthTexture.type);let Pe;y.depthTexture.format===Ta?Pe=s.DEPTH_COMPONENT24:y.depthTexture.format===Br&&(Pe=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,y.width,y.height,0,we,He,null)}}else ee(y.depthTexture,0);const Ae=ce.__webglTexture,Ue=rt(y),fe=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,he=y.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ta)Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Ae,0);else if(y.depthTexture.format===Br)Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,fe,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,he,fe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(P){const y=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const ce=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),y.__depthDisposeCallback=ce}y.__boundDepthTexture=te}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(K)for(let te=0;te<6;te++)ut(y.__webglFramebuffer[te],P,te);else{const te=P.texture.mipmaps;te&&te.length>0?ut(y.__webglFramebuffer[0],P,0):ut(y.__webglFramebuffer,P,0)}else if(K){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=s.createRenderbuffer(),Lt(y.__webglDepthbuffer[te],P,!1);else{const ce=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Ae)}}else{const te=P.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Lt(y.__webglDepthbuffer,P,!1);else{const ce=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(P,y,K){const te=r.get(P);y!==void 0&&Qe(te.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Mt(P)}function vt(P){const y=P.texture,K=r.get(P),te=r.get(y);P.addEventListener("dispose",b);const ce=P.textures,Ae=P.isWebGLCubeRenderTarget===!0,Ue=ce.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,h.memory.textures++),Ae){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let he=0;he<y.mipmaps.length;he++)K.__webglFramebuffer[fe][he]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let fe=0,he=ce.length;fe<he;fe++){const we=r.get(ce[fe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),h.memory.textures++)}if(P.samples>0&&Kt(P)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const he=ce[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const we=c.convert(he.format,he.colorSpace),He=c.convert(he.type),Pe=R(he.internalFormat,we,He,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),Le=rt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Pe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(K.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Qe(K.__webglFramebuffer[fe][he],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Qe(K.__webglFramebuffer[fe],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);M(y)&&L(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let fe=0,he=ce.length;fe<he;fe++){const we=ce[fe],He=r.get(we);let Pe=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,He.__webglTexture),Oe(Pe,we),Qe(K.__webglFramebuffer,P,we,s.COLOR_ATTACHMENT0+fe,Pe,0),M(we)&&L(Pe)}i.unbindTexture()}else{let fe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(fe,te.__webglTexture),Oe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Qe(K.__webglFramebuffer[he],P,y,s.COLOR_ATTACHMENT0,fe,he);else Qe(K.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,fe,0);M(y)&&L(fe),i.unbindTexture()}P.depthBuffer&&Mt(P)}function jt(P){const y=P.textures;for(let K=0,te=y.length;K<te;K++){const ce=y[K];if(M(ce)){const Ae=D(P),Ue=r.get(ce).__webglTexture;i.bindTexture(Ae,Ue),L(Ae),i.unbindTexture()}}}const Ye=[],ot=[];function ft(P){if(P.samples>0){if(Kt(P)===!1){const y=P.textures,K=P.width,te=P.height;let ce=s.COLOR_BUFFER_BIT;const Ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(P),fe=y.length>1;if(fe)for(let we=0;we<y.length;we++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const he=P.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let we=0;we<y.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const He=r.get(y[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,K,te,0,0,K,te,ce,s.NEAREST),m===!0&&(Ye.length=0,ot.length=0,Ye.push(s.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ye.push(Ae),ot.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<y.length;we++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[we]);const He=r.get(y[we]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,He,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function rt(P){return Math.min(l.maxSamples,P.samples)}function Kt(P){const y=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function W(P){const y=h.render.frame;v.get(P)!==y&&(v.set(P,y),P.update())}function mt(P,y){const K=P.colorSpace,te=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==au&&K!==or&&(Dt.getTransfer(K)===Xt?(te!==Fi||ce!==pi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",K)),y}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=de,this.getTextureUnits=ve,this.setTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=me,this.setTexture3D=be,this.setTextureCube=F,this.rebindTextures=ht,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function FA(s,e){function i(r,l=or){let c;const h=Dt.getTransfer(l);if(r===pi)return s.UNSIGNED_BYTE;if(r===t0)return s.UNSIGNED_SHORT_4_4_4_4;if(r===n0)return s.UNSIGNED_SHORT_5_5_5_1;if(r===K_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Q_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===q_)return s.BYTE;if(r===Y_)return s.SHORT;if(r===rl)return s.UNSIGNED_SHORT;if(r===e0)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===Aa)return s.HALF_FLOAT;if(r===J_)return s.ALPHA;if(r===j_)return s.RGB;if(r===Fi)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===i0)return s.RED;if(r===a0)return s.RED_INTEGER;if(r===Hr)return s.RG;if(r===r0)return s.RG_INTEGER;if(r===s0)return s.RGBA_INTEGER;if(r===Jc||r===jc||r===$c||r===eu)if(h===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===_d||r===vd||r===xd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===Sd||r===yd||r===Ed||r===bd||r===nu||r===Ad)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===Sd)return h===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ed)return c.COMPRESSED_R11_EAC;if(r===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===nu)return c.COMPRESSED_RG11_EAC;if(r===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Td||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===Fd||r===Id||r===Bd||r===zd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Td)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ud)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Od)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Id)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hd||r===Vd||r===Gd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hd)return h===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===kd||r===Xd||r===iu||r===Wd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===kd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:IA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Jn(new hu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Vr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,g=null,E=null,A=null;const w=typeof XRWebGLBinding<"u",S=new zA,M={},L=i.getContextAttributes();let D=null,R=null;const B=[],N=[],I=new St;let b=null;const O=new di;O.viewport=new sn;const k=new di;k.viewport=new sn;const G=[O,k],j=new qS;let de=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=B[se];return Me===void 0&&(Me=new Nh,B[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=B[se];return Me===void 0&&(Me=new Nh,B[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=B[se];return Me===void 0&&(Me=new Nh,B[se]=Me),Me.getHandSpace()};function $(se){const Me=N.indexOf(se.inputSource);if(Me===-1)return;const Se=B[Me];Se!==void 0&&(Se.update(se.inputSource,se.frame,d||h),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function z(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",V);for(let se=0;se<B.length;se++){const Me=N[se];Me!==null&&(N[se]=null,B[se].disconnect(Me))}de=null,ve=null,S.reset();for(const se in M)delete M[se];e.setRenderTarget(D),E=null,g=null,x=null,l=null,R=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",z),l.addEventListener("inputsourceschange",V),L.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ze=null,nt=null;L.depth&&(nt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=L.stencil?Br:Ta,ze=L.stencil?sl:Qi);const Qe={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ki(g.textureWidth,g.textureHeight,{format:Fi,type:pi,depthTexture:new qs(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new Ki(E.framebufferWidth,E.framebufferHeight,{format:Fi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(se){for(let Me=0;Me<se.removed.length;Me++){const Se=se.removed[Me],ze=N.indexOf(Se);ze>=0&&(N[ze]=null,B[ze].disconnect(Se))}for(let Me=0;Me<se.added.length;Me++){const Se=se.added[Me];let ze=N.indexOf(Se);if(ze===-1){for(let Qe=0;Qe<B.length;Qe++)if(Qe>=N.length){N.push(Se),ze=Qe;break}else if(N[Qe]===null){N[Qe]=Se,ze=Qe;break}if(ze===-1)break}const nt=B[ze];nt&&nt.connect(Se)}}const ee=new J,me=new J;function be(se,Me,Se){ee.setFromMatrixPosition(Me.matrixWorld),me.setFromMatrixPosition(Se.matrixWorld);const ze=ee.distanceTo(me),nt=Me.projectionMatrix.elements,Qe=Se.projectionMatrix.elements,Lt=nt[14]/(nt[10]-1),ut=nt[14]/(nt[10]+1),Mt=(nt[9]+1)/nt[5],ht=(nt[9]-1)/nt[5],vt=(nt[8]-1)/nt[0],jt=(Qe[8]+1)/Qe[0],Ye=Lt*vt,ot=Lt*jt,ft=ze/(-vt+jt),rt=ft*-vt;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(rt),se.translateZ(ft),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),nt[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Kt=Lt+ft,W=ut+ft,mt=Ye-rt,gt=ot+(ze-rt),P=Mt*ut/W*Kt,y=ht*ut/W*Kt;se.projectionMatrix.makePerspective(mt,gt,P,y,Kt,W),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Me=se.near,Se=se.far;S.texture!==null&&(S.depthNear>0&&(Me=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),j.near=k.near=O.near=Me,j.far=k.far=O.far=Se,(de!==j.near||ve!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),de=j.near,ve=j.far),j.layers.mask=se.layers.mask|6,O.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;const ze=se.parent,nt=j.cameras;F(j,ze);for(let Qe=0;Qe<nt.length;Qe++)F(nt[Qe],ze);nt.length===2?be(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),Y(se,j,ze)};function Y(se,Me,Se){Se===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=cl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(se){return M[se]};let ye=null;function Re(se,Me){if(v=Me.getViewerPose(d||h),A=Me,v!==null){const Se=v.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let ze=!1;Se.length!==j.cameras.length&&(j.cameras.length=0,ze=!0);for(let ut=0;ut<Se.length;ut++){const Mt=Se[ut];let ht=null;if(E!==null)ht=E.getViewport(Mt);else{const jt=x.getViewSubImage(g,Mt);ht=jt.viewport,ut===0&&(e.setRenderTargetTextures(R,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(R))}let vt=G[ut];vt===void 0&&(vt=new di,vt.layers.enable(ut),vt.viewport=new sn,G[ut]=vt),vt.matrix.fromArray(Mt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Mt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ht.x,ht.y,ht.width,ht.height),ut===0&&(j.matrix.copy(vt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ze===!0&&j.cameras.push(vt)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const ut=x.getDepthInformation(Se[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(nt&&nt.includes("camera-access")&&w){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<Se.length;ut++){const Mt=Se[ut].camera;if(Mt){let ht=M[Mt];ht||(ht=new lv,M[Mt]=ht);const vt=x.getCameraImage(Mt);ht.sourceTexture=vt}}}}for(let Se=0;Se<B.length;Se++){const ze=N[Se],nt=B[Se];ze!==null&&nt!==void 0&&nt.update(ze,Me,d||h)}ye&&ye(se,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),A=null}const Oe=new dv;Oe.setAnimationLoop(Re),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const VA=new Wt,Mv=new ct;Mv.set(-1,0,0,0,1,0,0,0,1);function GA(s,e){function i(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function r(S,M){M.color.getRGB(S.fogColor.value,cv(s)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function l(S,M,L,D,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),x(S,M)):M.isMeshPhongMaterial?(c(S,M),v(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),g(S,M),M.isMeshPhysicalMaterial&&E(S,M,R)):M.isMeshMatcapMaterial?(c(S,M),A(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),w(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(h(S,M),M.isLineDashedMaterial&&p(S,M)):M.isPointsMaterial?m(S,M,L,D):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,i(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===Qn&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,i(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===Qn&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,i(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,i(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const L=e.get(M),D=L.envMap,R=L.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(R)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Mv),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,S.aoMapTransform))}function h(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform))}function p(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function m(S,M,L,D){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*L,S.scale.value=D*.5,M.map&&(S.map.value=M.map,i(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function v(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function x(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function g(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function E(S,M,L){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Qn&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,M){M.matcap&&(S.matcap.value=M.matcap)}function w(S,M){const L=e.get(M).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kA(s,e,i,r){let l={},c={},h=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,B){const N=B.program;r.uniformBlockBinding(R,N)}function d(R,B){let N=l[R.id];N===void 0&&(S(R),N=v(R),l[R.id]=N,R.addEventListener("dispose",L));const I=B.program;r.updateUBOMapping(R,I);const b=e.render.frame;c[R.id]!==b&&(g(R),c[R.id]=b)}function v(R){const B=x();R.__bindingPointIndex=B;const N=s.createBuffer(),I=R.__size,b=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,I,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,B,N),N}function x(){for(let R=0;R<p;R++)if(h.indexOf(R)===-1)return h.push(R),R;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const B=l[R.id],N=R.uniforms,I=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let b=0,O=N.length;b<O;b++){const k=N[b];if(Array.isArray(k))for(let G=0,j=k.length;G<j;G++)E(k[G],b,G,I);else E(k,b,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(R,B,N,I){if(w(R,B,N,I)===!0){const b=R.__offset,O=R.value;if(Array.isArray(O)){let k=0;for(let G=0;G<O.length;G++){const j=O[G],de=M(j);A(j,R.__data,k),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(k+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,R.__data)}}function A(R,B,N){typeof R=="number"||typeof R=="boolean"?B[0]=R:R.isMatrix3?(B[0]=R.elements[0],B[1]=R.elements[1],B[2]=R.elements[2],B[3]=0,B[4]=R.elements[3],B[5]=R.elements[4],B[6]=R.elements[5],B[7]=0,B[8]=R.elements[6],B[9]=R.elements[7],B[10]=R.elements[8],B[11]=0):ArrayBuffer.isView(R)?B.set(new R.constructor(R.buffer,R.byteOffset,B.length)):R.toArray(B,N)}function w(R,B,N,I){const b=R.value,O=B+"_"+N;if(I[O]===void 0)return typeof b=="number"||typeof b=="boolean"?I[O]=b:ArrayBuffer.isView(b)?I[O]=b.slice():I[O]=b.clone(),!0;{const k=I[O];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return I[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(k.equals(b)===!1)return k.copy(b),!0}}return!1}function S(R){const B=R.uniforms;let N=0;const I=16;for(let O=0,k=B.length;O<k;O++){const G=Array.isArray(B[O])?B[O]:[B[O]];for(let j=0,de=G.length;j<de;j++){const ve=G[j],$=Array.isArray(ve.value)?ve.value:[ve.value];for(let z=0,V=$.length;z<V;z++){const ee=$[z],me=M(ee),be=N%I,F=be%me.boundary,Y=be+F;N+=F,Y!==0&&I-Y<me.storage&&(N+=I-Y),ve.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=N,N+=me.storage}}}const b=N%I;return b>0&&(N+=I-b),R.__size=N,R.__cache={},this}function M(R){const B={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(B.boundary=4,B.storage=4):R.isVector2?(B.boundary=8,B.storage=8):R.isVector3||R.isColor?(B.boundary=16,B.storage=12):R.isVector4?(B.boundary=16,B.storage=16):R.isMatrix3?(B.boundary=48,B.storage=48):R.isMatrix4?(B.boundary=64,B.storage=64):R.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(B.boundary=16,B.storage=R.byteLength):at("WebGLRenderer: Unsupported uniform value type.",R),B}function L(R){const B=R.target;B.removeEventListener("dispose",L);const N=h.indexOf(B.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function D(){for(const R in l)s.deleteBuffer(l[R]);h=[],l={},c={}}return{bind:m,update:d,dispose:D}}const XA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function WA(){return Xi===null&&(Xi=new av(XA,16,16,Hr,Aa),Xi.name="DFG_LUT",Xi.minFilter=Fn,Xi.magFilter=Fn,Xi.wrapS=ya,Xi.wrapT=ya,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class ZA{constructor(e={}){const{canvas:i=BM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=pi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const w=E,S=new Set([s0,r0,a0]),M=new Set([pi,Qi,rl,sl,t0,n0]),L=new Uint32Array(4),D=new Int32Array(4),R=new J;let B=null,N=null;const I=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,j=null,de=null,ve=null,$=null;this._outputColorSpace=Kn;let z=0,V=0,ee=null,me=-1,be=null;const F=new sn,Y=new sn;let ye=null;const Re=new Ct(0);let Oe=0,se=i.width,Me=i.height,Se=1,ze=null,nt=null;const Qe=new sn(0,0,se,Me),Lt=new sn(0,0,se,Me);let ut=!1;const Mt=new d0;let ht=!1,vt=!1;const jt=new Wt,Ye=new J,ot=new sn,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Kt(){return ee===null?Se:1}let W=r;function mt(T,q){return i.getContext(T,q)}try{const T={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jd}`),i.addEventListener("webglcontextlost",tn,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",$n,!1),W===null){const q="webgl2";if(W=mt(q,T),W===null)throw mt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ut("WebGLRenderer: "+T.message),T}let gt,P,y,K,te,ce,Ae,Ue,fe,he,we,He,Pe,Le,je,$e,st,Z,Ce,ge,De,Be,Ee;function qe(){gt=new W3(W),gt.init(),De=new FA(W,gt),P=new I3(W,gt,e,De),y=new OA(W,gt),P.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),de=W.createFramebuffer(),ve=W.createFramebuffer(),$=W.createFramebuffer(),K=new Y3(W),te=new MA,ce=new PA(W,gt,y,te,P,De,K),Ae=new X3(k),Ue=new jS(W),Be=new P3(W,Ue),fe=new Z3(W,Ue,K,Be),he=new Q3(W,fe,Ue,Be,K),Z=new K3(W,P,ce),je=new B3(te),we=new xA(k,Ae,gt,P,Be,je),He=new GA(k,te),Pe=new yA,Le=new CA(gt),st=new O3(k,Ae,y,he,A,m),$e=new NA(k,he,P),Ee=new kA(W,K,P,y),Ce=new F3(W,gt,K),ge=new q3(W,gt,K),K.programs=we.programs,k.capabilities=P,k.extensions=gt,k.properties=te,k.renderLists=Pe,k.shadowMap=$e,k.state=y,k.info=K}qe(),w!==pi&&(O=new j3(w,i.width,i.height,p,l,c));const ke=new HA(k,W);this.xr=ke,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(T){T!==void 0&&(Se=T,this.setSize(se,Me,!1))},this.getSize=function(T){return T.set(se,Me)},this.setSize=function(T,q,oe=!0){if(ke.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,Me=q,i.width=Math.floor(T*Se),i.height=Math.floor(q*Se),oe===!0&&(i.style.width=T+"px",i.style.height=q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(se*Se,Me*Se).floor()},this.setDrawingBufferSize=function(T,q,oe){se=T,Me=q,Se=oe,i.width=Math.floor(T*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(w===pi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(Qe)},this.setViewport=function(T,q,oe,ae){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,q,oe,ae),y.viewport(F.copy(Qe).multiplyScalar(Se).round())},this.getScissor=function(T){return T.copy(Lt)},this.setScissor=function(T,q,oe,ae){T.isVector4?Lt.set(T.x,T.y,T.z,T.w):Lt.set(T,q,oe,ae),y.scissor(Y.copy(Lt).multiplyScalar(Se).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(T){y.setScissorTest(ut=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,oe=!0){let ae=0;if(T){let re=!1;if(ee!==null){const Fe=ee.texture.format;re=S.has(Fe)}if(re){const Fe=ee.texture.type,Ge=M.has(Fe),Ne=st.getClearColor(),We=st.getClearAlpha(),Xe=Ne.r,et=Ne.g,dt=Ne.b;Ge?(L[0]=Xe,L[1]=et,L[2]=dt,L[3]=We,W.clearBufferuiv(W.COLOR,0,L)):(D[0]=Xe,D[1]=et,D[2]=dt,D[3]=We,W.clearBufferiv(W.COLOR,0,D))}else ae|=W.COLOR_BUFFER_BIT}q&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),j=T},this.dispose=function(){i.removeEventListener("webglcontextlost",tn,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",$n,!1),st.dispose(),Pe.dispose(),Le.dispose(),te.dispose(),Ae.dispose(),he.dispose(),Be.dispose(),Ee.dispose(),we.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",fn),ke.removeEventListener("sessionend",Tn),Gn.stop()};function tn(T){T.preventDefault(),bg("WebGLRenderer: Context Lost."),G=!0}function Bt(){bg("WebGLRenderer: Context Restored."),G=!1;const T=K.autoReset,q=$e.enabled,oe=$e.autoUpdate,ae=$e.needsUpdate,re=$e.type;qe(),K.autoReset=T,$e.enabled=q,$e.autoUpdate=oe,$e.needsUpdate=ae,$e.type=re}function $n(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){const q=T.target;q.removeEventListener("dispose",ei),Js(q)}function Js(T){js(T),te.remove(T)}function js(T){const q=te.get(T).programs;q!==void 0&&(q.forEach(function(oe){we.releaseProgram(oe)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,oe,ae,re,Fe){q===null&&(q=ft);const Ge=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ne=Da(T,q,oe,ae,re);y.setMaterial(ae,Ge);let We=oe.index,Xe=1;if(ae.wireframe===!0){if(We=fe.getWireframeAttribute(oe),We===void 0)return;Xe=2}const et=oe.drawRange,dt=oe.attributes.position;let Je=et.start*Xe,Nt=(et.start+et.count)*Xe;Fe!==null&&(Je=Math.max(Je,Fe.start*Xe),Nt=Math.min(Nt,(Fe.start+Fe.count)*Xe)),We!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,We.count)):dt!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,dt.count));const nn=Nt-Je;if(nn<0||nn===1/0)return;Be.setup(re,ae,Ne,oe,We);let Qt,zt=Ce;if(We!==null&&(Qt=Ue.get(We),zt=ge,zt.setIndex(Qt)),re.isMesh)ae.wireframe===!0?(y.setLineWidth(ae.wireframeLinewidth*Kt()),zt.setMode(W.LINES)):zt.setMode(W.TRIANGLES);else if(re.isLine){let Ht=ae.linewidth;Ht===void 0&&(Ht=1),y.setLineWidth(Ht*Kt()),re.isLineSegments?zt.setMode(W.LINES):re.isLineLoop?zt.setMode(W.LINE_LOOP):zt.setMode(W.LINE_STRIP)}else re.isPoints?zt.setMode(W.POINTS):re.isSprite&&zt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Ht=re._multiDrawStarts,Ve=re._multiDrawCounts,Ln=re._multiDrawCount,yt=We?Ue.get(We).bytesPerElement:1,vn=te.get(ae).currentProgram.getUniforms();for(let ti=0;ti<Ln;ti++)vn.setValue(W,"_gl_DrawID",ti),zt.render(Ht[ti]/yt,Ve[ti])}else if(re.isInstancedMesh)zt.renderInstances(Je,nn,re.count);else if(oe.isInstancedBufferGeometry){const Ht=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,Ht);zt.renderInstances(Je,nn,Ve)}else zt.render(Je,nn)};function $s(T,q,oe){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=Qn,T.needsUpdate=!0,wa(T,q,oe),T.side=cr,T.needsUpdate=!0,wa(T,q,oe),T.side=Ni):wa(T,q,oe)}this.compile=function(T,q,oe=null){oe===null&&(oe=T),N=Le.get(oe),N.init(q),b.push(N),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),T!==oe&&T.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights();const ae=new Set;return T.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Ne=Fe[Ge];$s(Ne,oe,re),ae.add(Ne)}else $s(Fe,oe,re),ae.add(Fe)}),N=b.pop(),ae},this.compileAsync=function(T,q,oe=null){const ae=this.compile(T,q,oe);return new Promise(re=>{function Fe(){if(ae.forEach(function(Ge){te.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){re(T);return}setTimeout(Fe,10)}gt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Zr=null;function Ii(T){Zr&&Zr(T)}function fn(){Gn.stop()}function Tn(){Gn.start()}const Gn=new dv;Gn.setAnimationLoop(Ii),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(T){Zr=T,ke.setAnimationLoop(T),T===null?Gn.stop():Gn.start()},ke.addEventListener("sessionstart",fn),ke.addEventListener("sessionend",Tn),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(T,q);const oe=ke.enabled===!0&&ke.isPresenting===!0,ae=O!==null&&(ee===null||oe)&&O.begin(k,ee);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(q),q=ke.getCamera()),T.isScene===!0&&T.onBeforeRender(k,T,q,ee),N=Le.get(T,b.length),N.init(q),N.state.textureUnits=ce.getTextureUnits(),b.push(N),jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Mt.setFromProjectionMatrix(jt,qi,q.reversedDepth),vt=this.localClippingEnabled,ht=je.init(this.clippingPlanes,vt),B=Pe.get(T,I.length),B.init(),I.push(B),ke.enabled===!0&&ke.isPresenting===!0){const Ge=k.xr.getDepthSensingMesh();Ge!==null&&ur(Ge,q,-1/0,k.sortObjects)}ur(T,q,0,k.sortObjects),B.finish(),k.sortObjects===!0&&B.sort(ze,nt,q.reversedDepth),rt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,rt&&st.addToRenderList(B,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&je.beginShadows();const re=N.state.shadowsArray;if($e.render(re,T,q),ht===!0&&je.endShadows(),(ae&&O.hasRenderPass())===!1){const Ge=B.opaque,Ne=B.transmissive;if(N.setupLights(),q.isArrayCamera){const We=q.cameras;if(Ne.length>0)for(let Xe=0,et=We.length;Xe<et;Xe++){const dt=We[Xe];hl(Ge,Ne,T,dt)}rt&&st.render(T);for(let Xe=0,et=We.length;Xe<et;Xe++){const dt=We[Xe];fl(B,T,dt,dt.viewport)}}else Ne.length>0&&hl(Ge,Ne,T,q),rt&&st.render(T),fl(B,T,q)}ee!==null&&V===0&&(ce.updateMultisampleRenderTarget(ee),ce.updateRenderTargetMipmap(ee)),ae&&O.end(k),T.isScene===!0&&T.onAfterRender(k,T,q),Be.resetDefaultState(),me=-1,be=null,b.pop(),b.length>0?(N=b[b.length-1],ce.setTextureUnits(N.state.textureUnits),ht===!0&&je.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?B=I[I.length-1]:B=null,j!==null&&j.renderEnd()};function ur(T,q,oe,ae){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)N.pushLightProbeGrid(T);else if(T.isLight)N.pushLight(T),T.castShadow&&N.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Mt.intersectsSprite(T)){ae&&ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(jt);const Ge=he.update(T),Ne=T.material;Ne.visible&&B.push(T,Ge,Ne,oe,ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Mt.intersectsObject(T))){const Ge=he.update(T),Ne=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ot.copy(T.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ot.copy(Ge.boundingSphere.center)),ot.applyMatrix4(T.matrixWorld).applyMatrix4(jt)),Array.isArray(Ne)){const We=Ge.groups;for(let Xe=0,et=We.length;Xe<et;Xe++){const dt=We[Xe],Je=Ne[dt.materialIndex];Je&&Je.visible&&B.push(T,Ge,Je,oe,ot.z,dt)}}else Ne.visible&&B.push(T,Ge,Ne,oe,ot.z,null)}}const Fe=T.children;for(let Ge=0,Ne=Fe.length;Ge<Ne;Ge++)ur(Fe[Ge],q,oe,ae)}function fl(T,q,oe,ae){const{opaque:re,transmissive:Fe,transparent:Ge}=T;N.setupLightsView(oe),ht===!0&&je.setGlobalState(k.clippingPlanes,oe),ae&&y.viewport(F.copy(ae)),re.length>0&&fr(re,q,oe),Fe.length>0&&fr(Fe,q,oe),Ge.length>0&&fr(Ge,q,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function hl(T,q,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const Je=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Ki(1,1,{generateMipmaps:!0,type:Je?Aa:pi,minFilter:Ir,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Fe=N.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||F;Fe.setSize(Ge.z*k.transmissionResolutionScale,Ge.w*k.transmissionResolutionScale);const Ne=k.getRenderTarget(),We=k.getActiveCubeFace(),Xe=k.getActiveMipmapLevel();k.setRenderTarget(Fe),k.getClearColor(Re),Oe=k.getClearAlpha(),Oe<1&&k.setClearColor(16777215,.5),k.clear(),rt&&st.render(oe);const et=k.toneMapping;k.toneMapping=Yi;const dt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),ht===!0&&je.setGlobalState(k.clippingPlanes,ae),fr(T,oe,ae),ce.updateMultisampleRenderTarget(Fe),ce.updateRenderTargetMipmap(Fe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,nn=q.length;Nt<nn;Nt++){const Qt=q[Nt],{object:zt,geometry:Ht,material:Ve,group:Ln}=Qt;if(Ve.side===Ni&&zt.layers.test(ae.layers)){const yt=Ve.side;Ve.side=Qn,Ve.needsUpdate=!0,Ca(zt,oe,ae,Ht,Ve,Ln),Ve.side=yt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(ce.updateMultisampleRenderTarget(Fe),ce.updateRenderTargetMipmap(Fe))}k.setRenderTarget(Ne,We,Xe),k.setClearColor(Re,Oe),dt!==void 0&&(ae.viewport=dt),k.toneMapping=et}function fr(T,q,oe){const ae=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Fe=T.length;re<Fe;re++){const Ge=T[re],{object:Ne,geometry:We,group:Xe}=Ge;let et=Ge.material;et.allowOverride===!0&&ae!==null&&(et=ae),Ne.layers.test(oe.layers)&&Ca(Ne,q,oe,We,et,Xe)}}function Ca(T,q,oe,ae,re,Fe){T.onBeforeRender(k,q,oe,ae,re,Fe),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(k,q,oe,ae,T,Fe),re.transparent===!0&&re.side===Ni&&re.forceSinglePass===!1?(re.side=Qn,re.needsUpdate=!0,k.renderBufferDirect(oe,q,ae,re,T,Fe),re.side=cr,re.needsUpdate=!0,k.renderBufferDirect(oe,q,ae,re,T,Fe),re.side=Ni):k.renderBufferDirect(oe,q,ae,re,T,Fe),T.onAfterRender(k,q,oe,ae,re,Fe)}function wa(T,q,oe){q.isScene!==!0&&(q=ft);const ae=te.get(T),re=N.state.lights,Fe=N.state.shadowsArray,Ge=re.state.version,Ne=we.getParameters(T,re.state,Fe,q,oe,N.state.lightProbeGridArray),We=we.getProgramCacheKey(Ne);let Xe=ae.programs;ae.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ae.envMap=Ae.get(T.envMap||ae.environment,et),ae.envMapRotation=ae.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",ei),Xe=new Map,ae.programs=Xe);let dt=Xe.get(We);if(dt!==void 0){if(ae.currentProgram===dt&&ae.lightsStateVersion===Ge)return $i(T,Ne),dt}else Ne.uniforms=we.getUniforms(T),j!==null&&T.isNodeMaterial&&j.build(T,oe,Ne),T.onBeforeCompile(Ne,k),dt=we.acquireProgram(Ne,We),Xe.set(We,dt),ae.uniforms=Ne.uniforms;const Je=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=je.uniform),$i(T,Ne),ae.needsLights=dl(T),ae.lightsStateVersion=Ge,ae.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=dt,ae.uniformsList=null,dt}function ji(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=tu.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function $i(T,q){const oe=te.get(T);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function hr(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ae=T.length;oe<ae;oe++){const re=T[oe];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function Da(T,q,oe,ae,re){q.isScene!==!0&&(q=ft),ce.resetTextureUnits();const Fe=q.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,Ne=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Dt.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=Ae.get(ae.envMap||Ge,We),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!oe.morphAttributes.position,Nt=!!oe.morphAttributes.normal,nn=!!oe.morphAttributes.color;let Qt=Yi;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const zt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ht=zt!==void 0?zt.length:0,Ve=te.get(ae),Ln=N.state.lights;if(ht===!0&&(vt===!0||T!==be)){const It=T===be&&ae.id===me;je.setState(ae,T,It)}let yt=!1;ae.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ln.state.version||Ve.outputColorSpace!==Ne||re.isBatchedMesh&&Ve.batching===!1||!re.isBatchedMesh&&Ve.batching===!0||re.isBatchedMesh&&Ve.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ve.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ve.instancing===!1||!re.isInstancedMesh&&Ve.instancing===!0||re.isSkinnedMesh&&Ve.skinning===!1||!re.isSkinnedMesh&&Ve.skinning===!0||re.isInstancedMesh&&Ve.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ve.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ve.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ve.instancingMorph===!1&&re.morphTexture!==null||Ve.envMap!==Xe||ae.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==je.numPlanes||Ve.numIntersection!==je.numIntersection)||Ve.vertexAlphas!==et||Ve.vertexTangents!==dt||Ve.morphTargets!==Je||Ve.morphNormals!==Nt||Ve.morphColors!==nn||Ve.toneMapping!==Qt||Ve.morphTargetsCount!==Ht||!!Ve.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ve.__version=ae.version);let vn=Ve.currentProgram;yt===!0&&(vn=wa(ae,q,re),j&&ae.isNodeMaterial&&j.onUpdateProgram(ae,vn,Ve));let ti=!1,Ai=!1,ni=!1;const Vt=vn.getUniforms(),an=Ve.uniforms;if(y.useProgram(vn.program)&&(ti=!0,Ai=!0,ni=!0),ae.id!==me&&(me=ae.id,Ai=!0),Ve.needsLights){const It=hr(N.state.lightProbeGridArray,re);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,Ai=!0)}if(ti||be!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Vt.setValue(W,"projectionMatrix",T.projectionMatrix),Vt.setValue(W,"viewMatrix",T.matrixWorldInverse);const Bi=Vt.map.cameraPosition;Bi!==void 0&&Bi.setValue(W,Ye.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Vt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),be!==T&&(be=T,Ai=!0,ni=!0)}if(Ve.needsLights&&(Ln.state.directionalShadowMap.length>0&&Vt.setValue(W,"directionalShadowMap",Ln.state.directionalShadowMap,ce),Ln.state.spotShadowMap.length>0&&Vt.setValue(W,"spotShadowMap",Ln.state.spotShadowMap,ce),Ln.state.pointShadowMap.length>0&&Vt.setValue(W,"pointShadowMap",Ln.state.pointShadowMap,ce)),re.isSkinnedMesh){Vt.setOptional(W,re,"bindMatrix"),Vt.setOptional(W,re,"bindMatrixInverse");const It=re.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Vt.setValue(W,"boneTexture",It.boneTexture,ce))}re.isBatchedMesh&&(Vt.setOptional(W,re,"batchingTexture"),Vt.setValue(W,"batchingTexture",re._matricesTexture,ce),Vt.setOptional(W,re,"batchingIdTexture"),Vt.setValue(W,"batchingIdTexture",re._indirectTexture,ce),Vt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Vt.setValue(W,"batchingColorTexture",re._colorsTexture,ce));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Z.update(re,oe,vn),(Ai||Ve.receiveShadow!==re.receiveShadow)&&(Ve.receiveShadow=re.receiveShadow,Vt.setValue(W,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(an.envMapIntensity.value=q.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=WA()),Ai){if(Vt.setValue(W,"toneMappingExposure",k.toneMappingExposure),Ve.needsLights&&hn(an,ni),Fe&&ae.fog===!0&&He.refreshFogUniforms(an,Fe),He.refreshMaterialUniforms(an,ae,Se,Me,N.state.transmissionRenderTarget[T.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;an.probesSH.value=It.texture,an.probesMin.value.copy(It.boundingBox.min),an.probesMax.value.copy(It.boundingBox.max),an.probesResolution.value.copy(It.resolution)}tu.upload(W,ji(Ve),an,ce)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(tu.upload(W,ji(Ve),an,ce),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(W,"center",re.center),Vt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(W,"normalMatrix",re.normalMatrix),Vt.setValue(W,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let Bi=0,Ua=It.length;Bi<Ua;Bi++){const dr=It[Bi];Ee.update(dr,vn),Ee.bind(dr,vn)}}return vn}function hn(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function dl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(T,q,oe){const ae=te.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),te.get(T.texture).__webglTexture=q,te.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const oe=te.get(T);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,oe=0){ee=T,z=q,V=oe;let ae=null,re=!1,Fe=!1;if(T){const Ne=te.get(T);if(Ne.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(W.FRAMEBUFFER,Ne.__webglFramebuffer),F.copy(T.viewport),Y.copy(T.scissor),ye=T.scissorTest,y.viewport(F),y.scissor(Y),y.setScissorTest(ye),me=-1;return}else if(Ne.__webglFramebuffer===void 0)ce.setupRenderTarget(T);else if(Ne.__hasExternalTextures)ce.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const et=T.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&te.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Xe=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?ae=Xe[q][oe]:ae=Xe[q],re=!0):T.samples>0&&ce.useMultisampledRTT(T)===!1?ae=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[oe]:ae=Xe,F.copy(T.viewport),Y.copy(T.scissor),ye=T.scissorTest}else F.copy(Qe).multiplyScalar(Se).floor(),Y.copy(Lt).multiplyScalar(Se).floor(),ye=ut;if(oe!==0&&(ae=de),y.bindFramebuffer(W.FRAMEBUFFER,ae)&&y.drawBuffers(T,ae),y.viewport(F),y.scissor(Y),y.setScissorTest(ye),re){const Ne=te.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(Fe){const Ne=q;for(let We=0;We<T.textures.length;We++){const Xe=te.get(T.textures[We]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Ne)}}else if(T!==null&&oe!==0){const Ne=te.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ne.__webglTexture,oe)}me=-1},this.readRenderTargetPixels=function(T,q,oe,ae,re,Fe,Ge,Ne=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){y.bindFramebuffer(W.FRAMEBUFFER,We);try{const Xe=T.textures[Ne],et=Xe.format,dt=Xe.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),!P.textureFormatReadable(et)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(dt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ae&&oe>=0&&oe<=T.height-re&&W.readPixels(q,oe,ae,re,De.convert(et),De.convert(dt),Fe)}finally{const Xe=ee!==null?te.get(ee).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,q,oe,ae,re,Fe,Ge,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(q>=0&&q<=T.width-ae&&oe>=0&&oe<=T.height-re){y.bindFramebuffer(W.FRAMEBUFFER,We);const Xe=T.textures[Ne],et=Xe.format,dt=Xe.type;if(T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ne),!P.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.bufferData(W.PIXEL_PACK_BUFFER,Fe.byteLength,W.STREAM_READ),W.readPixels(q,oe,ae,re,De.convert(et),De.convert(dt),0);const Nt=ee!==null?te.get(ee).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,Nt);const nn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await zM(W,nn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Je),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Fe),W.deleteBuffer(Je),W.deleteSync(nn),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(T.image.width*ae),Fe=Math.floor(T.image.height*ae),Ge=q!==null?q.x:0,Ne=q!==null?q.y:0;ce.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,Ge,Ne,re,Fe),y.unbindTexture()},this.copyTextureToTexture=function(T,q,oe=null,ae=null,re=0,Fe=0){let Ge,Ne,We,Xe,et,dt,Je,Nt,nn;const Qt=T.isCompressedTexture?T.mipmaps[Fe]:T.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,et=oe.min.y,dt=oe.isBox3?oe.min.z:0;else{const an=Math.pow(2,-re);Ge=Math.floor(Qt.width*an),Ne=Math.floor(Qt.height*an),T.isDataArrayTexture?We=Qt.depth:T.isData3DTexture?We=Math.floor(Qt.depth*an):We=1,Xe=0,et=0,dt=0}ae!==null?(Je=ae.x,Nt=ae.y,nn=ae.z):(Je=0,Nt=0,nn=0);const zt=De.convert(q.format),Ht=De.convert(q.type);let Ve;q.isData3DTexture?(ce.setTexture3D(q,0),Ve=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),Ve=W.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),Ve=W.TEXTURE_2D),y.activeTexture(W.TEXTURE0),y.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),y.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),y.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=y.getParameter(W.UNPACK_ROW_LENGTH),yt=y.getParameter(W.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(W.UNPACK_SKIP_PIXELS),ti=y.getParameter(W.UNPACK_SKIP_ROWS),Ai=y.getParameter(W.UNPACK_SKIP_IMAGES);y.pixelStorei(W.UNPACK_ROW_LENGTH,Qt.width),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Qt.height),y.pixelStorei(W.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(W.UNPACK_SKIP_ROWS,et),y.pixelStorei(W.UNPACK_SKIP_IMAGES,dt);const ni=T.isDataArrayTexture||T.isData3DTexture,Vt=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const an=te.get(T),Ti=te.get(q),It=te.get(an.__renderTarget),Bi=te.get(Ti.__renderTarget);y.bindFramebuffer(W.READ_FRAMEBUFFER,It.__webglFramebuffer),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ua=0;Ua<We;Ua++)ni&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,te.get(T).__webglTexture,re,dt+Ua),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,te.get(q).__webglTexture,Fe,nn+Ua)),W.blitFramebuffer(Xe,et,Ge,Ne,Je,Nt,Ge,Ne,W.DEPTH_BUFFER_BIT,W.NEAREST);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||T.isRenderTargetTexture||te.has(T)){const an=te.get(T),Ti=te.get(q);y.bindFramebuffer(W.READ_FRAMEBUFFER,ve),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,$);for(let It=0;It<We;It++)ni?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,an.__webglTexture,re,dt+It):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,an.__webglTexture,re),Vt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ti.__webglTexture,Fe,nn+It):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ti.__webglTexture,Fe),re!==0?W.blitFramebuffer(Xe,et,Ge,Ne,Je,Nt,Ge,Ne,W.COLOR_BUFFER_BIT,W.NEAREST):Vt?W.copyTexSubImage3D(Ve,Fe,Je,Nt,nn+It,Xe,et,Ge,Ne):W.copyTexSubImage2D(Ve,Fe,Je,Nt,Xe,et,Ge,Ne);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Vt?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,zt,Ht,Qt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,zt,Qt.data):W.texSubImage3D(Ve,Fe,Je,Nt,nn,Ge,Ne,We,zt,Ht,Qt):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Ge,Ne,zt,Ht,Qt.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Qt.width,Qt.height,zt,Qt.data):W.texSubImage2D(W.TEXTURE_2D,Fe,Je,Nt,Ge,Ne,zt,Ht,Qt);y.pixelStorei(W.UNPACK_ROW_LENGTH,Ln),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),y.pixelStorei(W.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(W.UNPACK_SKIP_ROWS,ti),y.pixelStorei(W.UNPACK_SKIP_IMAGES,Ai),Fe===0&&q.generateMipmaps&&W.generateMipmap(Ve),y.unbindTexture()},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ce.setTextureCube(T,0):T.isData3DTexture?ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ce.setTexture2DArray(T,0):ce.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){z=0,V=0,ee=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const qA=s=>`./assets/textures/${s}.jpg`,Kc=52,YA={sun:{radius:5,z:0},mercury:{radius:.36,z:.12},venus:{radius:.58,z:-.18},earth:{radius:.61,z:.12},mars:{radius:.48,z:-.12},jupiter:{radius:2.15,z:.1},saturn:{radius:1.78,z:-.08},uranus:{radius:1.12,z:.1},neptune:{radius:1.08,z:-.06}};function Zi(s,e=0){const i=Math.sin((s+e)*127.41)*43758.5453;return i-Math.floor(i)}function KA(){const e=new Float32Array(7800),i=new Float32Array(2600*3);for(let c=0;c<2600;c+=1){e[c*3]=(Zi(c,2)-.12)*110,e[c*3+1]=(Zi(c,7)-.5)*42,e[c*3+2]=(Zi(c,13)-.5)*58;const h=Zi(c,17)>.82;i[c*3]=h?.46:.82,i[c*3+1]=h?.7:.88,i[c*3+2]=1}const r=new Bn;r.setAttribute("position",new mi(e,3)),r.setAttribute("color",new mi(i,3));const l=new sv({size:.055,vertexColors:!0,transparent:!0,opacity:.82,sizeAttenuation:!0});return new CS(r,l)}function QA(){const e=new m0(.045,0),i=new uv({color:9204316,roughness:1,metalness:0}),r=new ES(e,i,520),l=new Wt,c=new Gr,h=new J,p=new J;for(let m=0;m<520;m+=1){const d=19.6+Zi(m,1)*3.1,v=(Zi(m,3)-.5)*2.7,x=(Zi(m,5)-.5)*3.8,g=.45+Zi(m,9)*2.2;p.set(d,v,x),c.setFromEuler(new Ra(Zi(m,11)*Math.PI,Zi(m,14)*Math.PI,0)),h.setScalar(g),l.compose(p,c,h),r.setMatrixAt(m,l)}return r.instanceMatrix.needsUpdate=!0,r}function JA(s){s.traverse(e=>{var r;(r=e.geometry)==null||r.dispose(),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(l=>l.dispose())})}function jA({worlds:s,progress:e,activeId:i,topDown:r,onSelect:l,onReady:c}){const h=U.useRef(null),p=U.useRef({}),m=U.useRef(e),d=U.useRef(i),v=U.useRef(r),x=U.useRef(l),g=U.useRef(c),[E,A]=U.useState(!1);return U.useEffect(()=>{m.current=e},[e]),U.useEffect(()=>{d.current=i},[i]),U.useEffect(()=>{v.current=r},[r]),U.useEffect(()=>{x.current=l},[l]),U.useEffect(()=>{g.current=c},[c]),U.useEffect(()=>{const w=h.current;if(!w)return;let S=!1;const M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,L=new ZA({antialias:!0,alpha:!1,powerPreference:"high-performance"});L.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),L.setClearColor(132363,1),L.outputColorSpace=Kn,L.toneMapping=$d,L.toneMappingExposure=1.08,L.domElement.className="journey-canvas",L.domElement.setAttribute("aria-hidden","true"),w.appendChild(L.domElement);const D=new gS;D.fog=new h0(132363,23,60);const R=new di(42,1,.08,150);R.position.set(3.2,2.1,10.6);const B=new J(2.7,0,0),N=new Vs;D.add(N);const I=KA();D.add(I),D.add(new WS(10138831,.82));const b=new XS(11061224,.72);b.position.set(12,8,16),D.add(b);const O=new GS(16753483,68,82,1.28);O.position.set(0,.4,.4),D.add(O);const k=new Bn().setFromPoints([new J(0,0,0),new J(Kc+5,0,0)]),G=new RS(k,new rv({color:6914459,transparent:!0,opacity:.22}));N.add(G);const j=QA();N.add(j);const de=new HS,ve=[],$=new Map,z=[],V=async Ye=>{const ot=YA[Ye.id];let ft;try{ft=await de.loadAsync(qA(Ye.id))}catch{return}if(S){ft.dispose();return}ft.colorSpace=Kn,ft.anisotropy=Math.min(8,L.capabilities.getMaxAnisotropy()),ve.push(ft);const rt=new Vs;rt.position.set(Ye.progress*Kc,0,ot.z),rt.userData.worldId=Ye.id,rt.userData.baseX=Ye.progress*Kc,rt.userData.materials=[];const Kt=new g0(ot.radius,Ye.id==="sun"?96:64,Ye.id==="sun"?64:48),W=Ye.id==="sun"?new al({map:ft,transparent:!0}):new uv({map:ft,roughness:.86,metalness:0,transparent:!0}),mt=new Jn(Kt,W);if(mt.userData.worldId=Ye.id,rt.userData.materials.push(W),rt.add(mt),z.push(mt),Ye.id==="saturn"&&[[1.18,1.65,14204817,.82],[1.7,2.05,9270876,.52]].forEach(([gt,P,y,K])=>{const te=new al({color:y,transparent:!0,opacity:K,side:Ni,depthWrite:!1}),ce=new Jn(new lu(ot.radius*gt,ot.radius*P,160),te);ce.rotation.x=1.18,ce.rotation.z=-.16,rt.add(ce),rt.userData.materials.push(te)}),Ye.id==="uranus"){const gt=new al({color:8169912,transparent:!0,opacity:.28,side:Ni,depthWrite:!1}),P=new Jn(new lu(ot.radius*1.18,ot.radius*1.58,120),gt);P.rotation.x=1.52,P.rotation.z=.22,rt.add(P),rt.userData.materials.push(gt)}N.add(rt),$.set(Ye.id,rt)};Promise.allSettled(s.map(V)).then(()=>{var Ye;S||(A(!0),(Ye=g.current)==null||Ye.call(g))});let ee=!1,me=0,be=0,F=0,Y=0,ye=0;const Re=new QS,Oe=new St,se=Ye=>{var ot,ft;ee=!0,me=0,be=Ye.clientX,F=Ye.clientY,(ft=(ot=L.domElement).setPointerCapture)==null||ft.call(ot,Ye.pointerId)},Me=Ye=>{if(!ee||Ye.pointerType==="touch")return;const ot=Ye.clientX-be,ft=Ye.clientY-F;me+=Math.abs(ot)+Math.abs(ft),Y=Xo.clamp(Y-ot*.006,-1.25,1.25),ye=Xo.clamp(ye+ft*.01,-1.4,2.8),be=Ye.clientX,F=Ye.clientY},Se=Ye=>{var ot;if(ee&&me<7){const ft=L.domElement.getBoundingClientRect();Oe.x=(Ye.clientX-ft.left)/ft.width*2-1,Oe.y=-((Ye.clientY-ft.top)/ft.height)*2+1,Re.setFromCamera(Oe,R);const rt=Re.intersectObjects(z,!1)[0];rt!=null&&rt.object.userData.worldId&&((ot=x.current)==null||ot.call(x,rt.object.userData.worldId))}ee=!1};L.domElement.addEventListener("pointerdown",se),L.domElement.addEventListener("pointermove",Me),L.domElement.addEventListener("pointerup",Se),L.domElement.addEventListener("pointercancel",Se);const ze=()=>{const{width:Ye,height:ot}=w.getBoundingClientRect();!Ye||!ot||(L.setSize(Ye,ot,!1),R.aspect=Ye/ot,R.updateProjectionMatrix())},nt=new ResizeObserver(ze);nt.observe(w),ze();const Qe=new YS;Qe.connect(document);const Lt=new J,ut=new J,Mt=new J;let ht=0,vt=0;const jt=()=>{var rt,Kt;Qe.update();const Ye=Math.min(Qe.getDelta(),.05),ot=M?1:Math.min(1,Ye*4.2);ht+=(m.current*Kc-ht)*ot,v.current?(ut.set(ht+3.2,25+ye,.01),Mt.set(ht+3.2,0,0),R.up.set(0,0,-1)):(ut.set(ht+3.2+Math.sin(Y)*4.5,2.3+ye,10.7+Math.abs(Math.sin(Y))*1.6),Mt.set(ht+3.05,0,0),R.up.set(0,1,0)),R.position.lerp(ut,ot),B.lerp(Mt,ot),R.lookAt(B),$.forEach((W,mt)=>{const gt=s.find(ce=>ce.id===mt),P=mt==="sun"?1:Xo.smoothstep(m.current,Math.max(0,gt.progress-.17),Math.max(.02,gt.progress-.035)),y=Math.max(0,Math.min(1,P));W.visible=y>.015||mt==="sun",W.userData.materials.forEach(ce=>{const Ae=ce.userData.baseOpacity??ce.opacity;ce.userData.baseOpacity=Ae,ce.opacity=Ae*y});const K=W.children.find(ce=>{var Ae;return ce.isMesh&&((Ae=ce.geometry)==null?void 0:Ae.type)==="SphereGeometry"});K&&!M&&(K.rotation.y+=Ye*(mt==="sun"?.035:.075));const te=p.current[mt];te&&(Lt.copy(W.position).project(R),te.style.left=`${(Lt.x*.5+.5)*w.clientWidth}px`,te.style.top=`${(-Lt.y*.5+.5)*w.clientHeight}px`,te.classList.toggle("is-visible",y>.38&&Lt.z<1),te.classList.toggle("active",mt===d.current))});const ft=$.get(d.current);if(ft){Lt.copy(ft.position).project(R);const W=(Lt.x*.5+.5)*w.clientWidth,mt=(-Lt.y*.5+.5)*w.clientHeight,gt=d.current==="sun"?22:Xo.clamp(W+70,22,w.clientWidth-310),P=d.current==="sun"?w.clientHeight*.64:Xo.clamp(mt+92,250,w.clientHeight-275);(rt=w.parentElement)==null||rt.style.setProperty("--anchor-x",`${gt}px`),(Kt=w.parentElement)==null||Kt.style.setProperty("--anchor-y",`${P}px`)}M||(I.rotation.y+=Ye*.002),L.render(D,R),vt=requestAnimationFrame(jt)};return jt(),()=>{S=!0,cancelAnimationFrame(vt),Qe.disconnect(),nt.disconnect(),L.domElement.removeEventListener("pointerdown",se),L.domElement.removeEventListener("pointermove",Me),L.domElement.removeEventListener("pointerup",Se),L.domElement.removeEventListener("pointercancel",Se),JA(N),I.geometry.dispose(),I.material.dispose(),ve.forEach(Ye=>Ye.dispose()),L.dispose(),L.domElement.remove()}},[s]),Te.jsx("div",{className:`journey-3d ${E?"is-ready":""}`,ref:h,children:Te.jsx("div",{className:"journey-label-layer","aria-label":"太阳系天体",children:s.map(w=>Te.jsx("button",{ref:S=>{p.current[w.id]=S},className:"journey-label",onClick:()=>l(w.id),"aria-pressed":i===w.id,children:w.name},w.id))})})}const $A=s=>`./${s}`,hi=[{id:"sun",name:"太阳",english:"Sun",kind:"恒星",distance:"0 AU",progress:0,diameter:"1,392,700 km",temperature:"5,500 °C",mass:"1.989 × 10³⁰ kg",year:"约 25–35 天",intro:"太阳是太阳系的中心天体，占据太阳系总质量的 99.86%。它的引力维系着八颗行星与无数小天体的轨道。",fact:"光从太阳抵达地球约需 8 分 20 秒。"},{id:"mercury",name:"水星",english:"Mercury",kind:"类地行星",distance:"0.39 AU",progress:.115,diameter:"4,879 km",temperature:"−180 至 430 °C",mass:"3.30 × 10²³ kg",year:"88 天",intro:"离太阳最近、也是最小的行星。稀薄外逸层无法留住热量，因此昼夜温差极端。",fact:"水星的一天比它的一年更长。"},{id:"venus",name:"金星",english:"Venus",kind:"类地行星",distance:"0.72 AU",progress:.185,diameter:"12,104 km",temperature:"约 464 °C",mass:"4.87 × 10²⁴ kg",year:"224.7 天",intro:"与地球大小相近，却被浓密的二氧化碳大气包裹，是太阳系表面最热的行星。",fact:"金星的自转方向与多数行星相反。"},{id:"earth",name:"地球",english:"Earth",kind:"类地行星",distance:"1.00 AU",progress:.255,diameter:"12,756 km",temperature:"平均 15 °C",mass:"5.97 × 10²⁴ kg",year:"365.25 天",intro:"液态水、稳定的大气和磁场共同塑造了这颗蓝色星球，也是目前已知唯一拥有生命的世界。",fact:"地球表面约 71% 被海洋覆盖。"},{id:"mars",name:"火星",english:"Mars",kind:"类地行星",distance:"1.52 AU",progress:.34,diameter:"6,779 km",temperature:"平均 −65 °C",mass:"6.42 × 10²³ kg",year:"687 天",intro:"氧化铁让火星呈现红色。古老河谷与极地冰盖记录着它曾经更温暖湿润的历史。",fact:"奥林帕斯山约为珠穆朗玛峰高度的三倍。"},{id:"jupiter",name:"木星",english:"Jupiter",kind:"气态巨行星",distance:"5.20 AU",progress:.52,diameter:"142,984 km",temperature:"云顶 −110 °C",mass:"1.90 × 10²⁷ kg",year:"11.86 年",intro:"太阳系最大的行星。明暗云带、大红斑和强磁场共同构成一颗充满风暴的巨型世界。",fact:"木星内部大约能容纳 1,000 个地球。"},{id:"saturn",name:"土星",english:"Saturn",kind:"气态巨行星",distance:"9.58 AU",progress:.66,diameter:"120,536 km",temperature:"云顶 −140 °C",mass:"5.68 × 10²⁶ kg",year:"29.45 年",intro:"由冰粒、岩石与尘埃组成的巨大行星环，让土星成为太阳系中最醒目的世界。",fact:"土星的平均密度比水还低。"},{id:"uranus",name:"天王星",english:"Uranus",kind:"冰巨星",distance:"19.2 AU",progress:.82,diameter:"51,118 km",temperature:"约 −195 °C",mass:"8.68 × 10²⁵ kg",year:"84 年",intro:"淡青色来自大气中的甲烷。它近乎横躺着绕太阳运行，拥有太阳系最独特的自转姿态。",fact:"天王星的一个季节约持续 21 个地球年。"},{id:"neptune",name:"海王星",english:"Neptune",kind:"冰巨星",distance:"30.1 AU",progress:1,diameter:"49,528 km",temperature:"约 −200 °C",mass:"1.02 × 10²⁶ kg",year:"164.8 年",intro:"八大行星中距离太阳最远的世界，深蓝云层里活跃着太阳系已知速度最快的行星风。",fact:"自 1846 年被发现后，它只完成过一次公转。"}].map(s=>({...s,image:$A(`assets/planets/${s.id}.png`)}));function eT(s){return hi.reduce((e,i)=>Math.abs(i.progress-s)<Math.abs(e.progress-s)?i:e,hi[0])}function tT(){const[s,e]=U.useState(0),[i,r]=U.useState("sun"),[l,c]=U.useState(!1),[h,p]=U.useState(!0),[m,d]=U.useState(!1),[v,x]=U.useState(!0),[g,E]=U.useState(!1),A=U.useRef(null),w=U.useRef(null),S=U.useMemo(()=>hi.find(D=>D.id===i)??hi[0],[i]),M=D=>{e(D.progress),r(D.id),d(!1),x(!0)};U.useEffect(()=>{r(eT(s).id)},[s]),U.useEffect(()=>{const D=b=>{e(O=>Math.min(1,Math.max(0,O+b)))},R=b=>{m||(b.preventDefault(),D(Math.sign(b.deltaY)*Math.min(.055,Math.abs(b.deltaY)/2200)))},B=b=>{if(b.key==="Escape"){d(!1);return}m||(["ArrowDown","ArrowRight","PageDown"].includes(b.key)&&D(.045),["ArrowUp","ArrowLeft","PageUp"].includes(b.key)&&D(-.045))},N=b=>{var O;m||(w.current=((O=b.touches[0])==null?void 0:O.clientY)??null)},I=b=>{var G;if(m||w.current==null)return;const O=((G=b.touches[0])==null?void 0:G.clientY)??w.current,k=(w.current-O)/900;Math.abs(k)>.002&&(b.preventDefault(),D(k),w.current=O)};return window.addEventListener("wheel",R,{passive:!1}),window.addEventListener("keydown",B),window.addEventListener("touchstart",N,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),()=>{window.removeEventListener("wheel",R),window.removeEventListener("keydown",B),window.removeEventListener("touchstart",N),window.removeEventListener("touchmove",I)}},[m]);const L=async()=>{var D,R,B;document.fullscreenElement?await((B=document.exitFullscreen)==null?void 0:B.call(document)):await((R=(D=document.documentElement).requestFullscreen)==null?void 0:R.call(D))};return Te.jsxs("div",{className:`journey-shell ${l?"is-top-down":""}`,ref:A,children:[Te.jsx(jA,{worlds:hi,progress:s,activeId:i,topDown:l,onSelect:D=>M(hi.find(R=>R.id===D)),onReady:()=>E(!0)}),Te.jsxs("header",{className:"journey-header",children:[Te.jsxs("button",{className:"brand",onClick:()=>M(hi[0]),"aria-label":"返回太阳",children:[Te.jsx(tM,{weight:"thin","aria-hidden":"true"}),Te.jsxs("span",{children:[Te.jsx("strong",{children:"太阳系之旅"}),Te.jsx("small",{children:"Solar System Journey"})]})]}),Te.jsxs("nav",{className:"journey-nav","aria-label":"主要导航",children:[Te.jsx("button",{className:"active",onClick:()=>M(hi[0]),children:"总览"}),Te.jsx("button",{onClick:()=>M(hi[5]),children:"探索"}),Te.jsx("button",{onClick:()=>x(!0),children:"知识库"}),Te.jsx("button",{onClick:()=>M(hi[8]),children:"时间线"}),Te.jsx("button",{onClick:()=>c(D=>!D),children:"3D 模式"})]}),Te.jsxs("div",{className:"header-tools",children:[Te.jsx("button",{onClick:()=>d(!0),"aria-label":"搜索行星",children:Te.jsx(eM,{})}),Te.jsx("button",{onClick:()=>p(D=>!D),"aria-label":h?"开启环境音":"关闭环境音",children:h?Te.jsx(iM,{}):Te.jsx(nM,{})}),Te.jsx("button",{onClick:L,"aria-label":"全屏",children:Te.jsx(Qx,{})})]})]}),Te.jsxs("div",{className:`scene-instruction ${s>.08?"is-quiet":""}`,children:[Te.jsx("span",{children:"滚动鼠标滚轮或拖动，探索太阳系"}),Te.jsx(mg,{weight:"light"}),Te.jsx(Kx,{className:"instruction-arrow"})]}),Te.jsxs("button",{className:"view-mode",onClick:()=>c(D=>!D),children:[Te.jsx(jx,{})," ",l?"返回平视":"俯视视角"]}),Te.jsxs("aside",{className:`world-card ${v?"is-open":""}`,"aria-live":"polite",children:[Te.jsx("div",{className:"world-card-anchor"}),Te.jsxs("div",{className:"world-card-heading",children:[Te.jsxs("div",{children:[Te.jsx("small",{children:S.english}),Te.jsx("h1",{children:S.name}),Te.jsx("span",{children:S.kind})]}),Te.jsx("button",{onClick:()=>x(D=>!D),"aria-label":v?"收起详情":"展开详情",children:Te.jsx(pg,{})})]}),v&&Te.jsxs("div",{className:"world-card-body",children:[Te.jsx("p",{children:S.intro}),Te.jsxs("dl",{children:[Te.jsxs("div",{children:[Te.jsx("dt",{children:"直径"}),Te.jsx("dd",{children:S.diameter})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"温度"}),Te.jsx("dd",{children:S.temperature})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"质量"}),Te.jsx("dd",{children:S.mass})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"公转"}),Te.jsx("dd",{children:S.year})]})]}),Te.jsxs("button",{className:"fact-button",children:[Te.jsx(dg,{})," ",S.fact]})]})]}),Te.jsxs("div",{className:"side-rail","aria-label":"快捷导航",children:[Te.jsx("button",{className:"active",onClick:()=>M(hi[0]),"aria-label":"返回太阳",children:Te.jsx($x,{})}),Te.jsx("button",{onClick:()=>c(D=>!D),"aria-label":"切换视角",children:Te.jsx(Jx,{})}),Te.jsx("button",{onClick:()=>x(D=>!D),"aria-label":"查看知识",children:Te.jsx(dg,{})})]}),Te.jsxs("section",{className:"distance-console","aria-label":"太阳系距离进度",children:[Te.jsxs("div",{className:"distance-readout",children:[Te.jsx("span",{children:"距离太阳"}),Te.jsx("strong",{children:S.distance})]}),Te.jsxs("div",{className:"distance-track",children:[Te.jsx("div",{className:"distance-fill",style:{width:`${s*100}%`}}),hi.map(D=>Te.jsx("button",{className:D.id===i?"active":"",style:{left:`${D.progress*100}%`},onClick:()=>M(D),"aria-label":`前往${D.name}`,title:`${D.name} · ${D.distance}`,children:Te.jsx("img",{src:D.image,alt:""})},D.id))]}),Te.jsx("span",{className:"distance-unit",children:"30 AU"})]}),Te.jsxs("div",{className:"scroll-cue",children:[Te.jsx(mg,{weight:"light"}),Te.jsx("span",{children:"向下滚动，拉近距离"}),Te.jsx(pg,{})]}),m&&Te.jsxs("div",{className:"search-overlay",role:"dialog","aria-modal":"true","aria-label":"选择天体",children:[Te.jsx("button",{className:"search-close",onClick:()=>d(!1),"aria-label":"关闭",children:Te.jsx(aM,{})}),Te.jsx("p",{children:"选择一颗天体，立即跃迁"}),Te.jsx("div",{className:"search-worlds",children:hi.map(D=>Te.jsxs("button",{onClick:()=>M(D),children:[Te.jsx("img",{src:D.image,alt:""}),Te.jsxs("span",{children:[Te.jsx("strong",{children:D.name}),Te.jsx("small",{children:D.distance})]})]},D.id))})]}),!g&&Te.jsx("div",{className:"journey-loading",children:"正在点亮太阳系"})]})}Ox.createRoot(document.getElementById("root")).render(Te.jsx(Rx.StrictMode,{children:Te.jsx(tT,{})}));
