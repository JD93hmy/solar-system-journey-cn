(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Lx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Nx(){if(og)return Go;og=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var lg;function Ox(){return lg||(lg=1,Mh.exports=Nx()),Mh.exports}var Te=Ox(),Sh={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Px(){if(cg)return st;cg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,b={};function M(F,J,Ee){this.props=F,this.context=J,this.refs=b,this.updater=Ee||A}M.prototype.isReactComponent={},M.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},M.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function P(){}P.prototype=M.prototype;function O(F,J,Ee){this.props=F,this.context=J,this.refs=b,this.updater=Ee||A}var C=O.prototype=new P;C.constructor=O,D(C,M.prototype),C.isPureReactComponent=!0;var B=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function N(F,J,Ee){var Ce=Ee.ref;return{$$typeof:s,type:F,key:J,ref:Ce!==void 0?Ce:null,props:Ee}}function k(F,J){return N(F.type,J,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function Q(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ee){return J[Ee]})}var fe=/\/+/g;function pe(F,J){return typeof F=="object"&&F!==null&&F.key!=null?Q(""+F.key):J.toString(36)}function $(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,J,Ee,Ce,Pe){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var Me=!1;if(F===null)Me=!0;else switch(re){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(F.$$typeof){case s:case e:Me=!0;break;case v:return Me=F._init,z(Me(F._payload),J,Ee,Ce,Pe)}}if(Me)return Pe=Pe(F),Me=Ce===""?"."+pe(F,0):Ce,B(Pe)?(Ee="",Me!=null&&(Ee=Me.replace(fe,"$&/")+"/"),z(Pe,J,Ee,"",function(it){return it})):Pe!=null&&(G(Pe)&&(Pe=k(Pe,Ee+(Pe.key==null||F&&F.key===Pe.key?"":(""+Pe.key).replace(fe,"$&/")+"/")+Me)),J.push(Pe)),1;Me=0;var Se=Ce===""?".":Ce+":";if(B(F))for(var ze=0;ze<F.length;ze++)Ce=F[ze],re=Se+pe(Ce,ze),Me+=z(Ce,J,Ee,re,Pe);else if(ze=E(F),typeof ze=="function")for(F=ze.call(F),ze=0;!(Ce=F.next()).done;)Ce=Ce.value,re=Se+pe(Ce,ze++),Me+=z(Ce,J,Ee,re,Pe);else if(re==="object"){if(typeof F.then=="function")return z($(F),J,Ee,Ce,Pe);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(F,J,Ee){if(F==null)return F;var Ce=[],Pe=0;return z(F,Ce,"","",function(re){return J.call(Ee,re,Pe++)}),Ce}function te(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(Ee){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ee)},function(Ee){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ee)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var _e=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},be={map:H,forEach:function(F,J,Ee){H(F,function(){J.apply(this,arguments)},Ee)},count:function(F){var J=0;return H(F,function(){J++}),J},toArray:function(F){return H(F,function(J){return J})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return st.Activity=x,st.Children=be,st.Component=M,st.Fragment=i,st.Profiler=l,st.PureComponent=O,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(F){return I.H.useMemoCache(F)}},st.cache=function(F){return function(){return F.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(F,J,Ee){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ce=D({},F.props),Pe=F.key;if(J!=null)for(re in J.key!==void 0&&(Pe=""+J.key),J)!S.call(J,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&J.ref===void 0||(Ce[re]=J[re]);var re=arguments.length-2;if(re===1)Ce.children=Ee;else if(1<re){for(var Me=Array(re),Se=0;Se<re;Se++)Me[Se]=arguments[Se+2];Ce.children=Me}return N(F.type,Pe,Ce)},st.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},st.createElement=function(F,J,Ee){var Ce,Pe={},re=null;if(J!=null)for(Ce in J.key!==void 0&&(re=""+J.key),J)S.call(J,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Pe[Ce]=J[Ce]);var Me=arguments.length-2;if(Me===1)Pe.children=Ee;else if(1<Me){for(var Se=Array(Me),ze=0;ze<Me;ze++)Se[ze]=arguments[ze+2];Pe.children=Se}if(F&&F.defaultProps)for(Ce in Me=F.defaultProps,Me)Pe[Ce]===void 0&&(Pe[Ce]=Me[Ce]);return N(F,re,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(F){return{$$typeof:p,render:F}},st.isValidElement=G,st.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:te}},st.memo=function(F,J){return{$$typeof:d,type:F,compare:J===void 0?null:J}},st.startTransition=function(F){var J=I.T,Ee={};I.T=Ee;try{var Ce=F(),Pe=I.S;Pe!==null&&Pe(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(U,_e)}catch(re){_e(re)}finally{J!==null&&Ee.types!==null&&(J.types=Ee.types),I.T=J}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(F){return I.H.use(F)},st.useActionState=function(F,J,Ee){return I.H.useActionState(F,J,Ee)},st.useCallback=function(F,J){return I.H.useCallback(F,J)},st.useContext=function(F){return I.H.useContext(F)},st.useDebugValue=function(){},st.useDeferredValue=function(F,J){return I.H.useDeferredValue(F,J)},st.useEffect=function(F,J){return I.H.useEffect(F,J)},st.useEffectEvent=function(F){return I.H.useEffectEvent(F)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(F,J,Ee){return I.H.useImperativeHandle(F,J,Ee)},st.useInsertionEffect=function(F,J){return I.H.useInsertionEffect(F,J)},st.useLayoutEffect=function(F,J){return I.H.useLayoutEffect(F,J)},st.useMemo=function(F,J){return I.H.useMemo(F,J)},st.useOptimistic=function(F,J){return I.H.useOptimistic(F,J)},st.useReducer=function(F,J,Ee){return I.H.useReducer(F,J,Ee)},st.useRef=function(F){return I.H.useRef(F)},st.useState=function(F){return I.H.useState(F)},st.useSyncExternalStore=function(F,J,Ee){return I.H.useSyncExternalStore(F,J,Ee)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.0",st}var ug;function e0(){return ug||(ug=1,Sh.exports=Px()),Sh.exports}var T=e0();const Fx=Lx(T);var yh={exports:{}},ko={},Eh={exports:{}},bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Ix(){return fg||(fg=1,(function(s){function e(z,H){var te=z.length;z.push(H);e:for(;0<te;){var _e=te-1>>>1,be=z[_e];if(0<l(be,H))z[_e]=H,z[te]=be,te=_e;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],te=z.pop();if(te!==H){z[0]=te;e:for(var _e=0,be=z.length,F=be>>>1;_e<F;){var J=2*(_e+1)-1,Ee=z[J],Ce=J+1,Pe=z[Ce];if(0>l(Ee,te))Ce<be&&0>l(Pe,Ee)?(z[_e]=Pe,z[Ce]=te,_e=Ce):(z[_e]=Ee,z[J]=te,_e=J);else if(Ce<be&&0>l(Pe,te))z[_e]=Pe,z[Ce]=te,_e=Ce;else break e}}return H}function l(z,H){var te=z.sortIndex-H.sortIndex;return te!==0?te:z.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,x=null,g=3,E=!1,A=!1,D=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var H=i(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=z)r(d),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(d)}}function B(z){if(D=!1,C(z),!A)if(i(m)!==null)A=!0,U||(U=!0,Q());else{var H=i(d);H!==null&&$(B,H.startTime-z)}}var U=!1,I=-1,S=5,N=-1;function k(){return b?!0:!(s.unstable_now()-N<S)}function G(){if(b=!1,U){var z=s.unstable_now();N=z;var H=!0;try{e:{A=!1,D&&(D=!1,P(I),I=-1),E=!0;var te=g;try{t:{for(C(z),x=i(m);x!==null&&!(x.expirationTime>z&&k());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,g=x.priorityLevel;var be=_e(x.expirationTime<=z);if(z=s.unstable_now(),typeof be=="function"){x.callback=be,C(z),H=!0;break t}x===i(m)&&r(m),C(z)}else r(m);x=i(m)}if(x!==null)H=!0;else{var F=i(d);F!==null&&$(B,F.startTime-z),H=!1}}break e}finally{x=null,g=te,E=!1}H=void 0}}finally{H?Q():U=!1}}}var Q;if(typeof O=="function")Q=function(){O(G)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=G,Q=function(){pe.postMessage(null)}}else Q=function(){M(G,0)};function $(z,H){I=M(function(){z(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var te=g;g=H;try{return z()}finally{g=te}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=g;g=z;try{return H()}finally{g=te}},s.unstable_scheduleCallback=function(z,H,te){var _e=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,z){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=te+be,z={id:v++,callback:H,priorityLevel:z,startTime:te,expirationTime:be,sortIndex:-1},te>_e?(z.sortIndex=te,e(d,z),i(m)===null&&z===i(d)&&(D?(P(I),I=-1):D=!0,$(B,te-_e))):(z.sortIndex=be,e(m,z),A||E||(A=!0,U||(U=!0,Q()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var H=g;return function(){var te=g;g=H;try{return z.apply(this,arguments)}finally{g=te}}}})(bh)),bh}var hg;function Bx(){return hg||(hg=1,Eh.exports=Ix()),Eh.exports}var Ah={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function zx(){if(dg)return Pn;dg=1;var s=e0();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Pn.flushSync=function(m){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=v,r.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=p(v,d.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Pn.requestFormReset=function(m){r.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.0",Pn}var pg;function Hx(){if(pg)return Ah.exports;pg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ah.exports=zx(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Vx(){if(mg)return ko;mg=1;var s=Bx(),e=e0(),i=Hx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,w=u.child;w;){if(w===a){_=!0,a=u,o=f;break}if(w===o){_=!0,o=u,a=f;break}w=w.sibling}if(!_){for(w=f.child;w;){if(w===a){_=!0,a=f,o=u;break}if(w===o){_=!0,o=f,a=u;break}w=w.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),O=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case B:return"Suspense";case U:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case O:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case S:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var $=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function F(t){return{current:t}}function J(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Ce=F(null),Pe=F(null),re=F(null),Me=F(null);function Se(t,n){switch(Ee(re,n),Ee(Pe,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?D1(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=D1(n),t=U1(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ce),Ee(Ce,t)}function ze(){J(Ce),J(Pe),J(re)}function it(t){t.memoizedState!==null&&Ee(Me,t);var n=Ce.current,a=U1(n,t.type);n!==a&&(Ee(Pe,t),Ee(Ce,a))}function Je(t){Pe.current===t&&(J(Ce),J(Pe)),Me.current===t&&(J(Me),Bo._currentValue=te)}var kt,lt;function ht(t){if(kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);kt=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+t+lt}var gt=!1;function dt(t,n){if(!t||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(he){var ce=he}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(he){ce=he}t.call(xe.prototype)}}else{try{throw Error()}catch(he){ce=he}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(he){if(he&&ce&&typeof he.stack=="string")return[he.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],w=f[1];if(_&&w){var V=_.split(`
`),ae=w.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ae.length)for(o=V.length-1,u=ae.length-1;1<=o&&0<=u&&V[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ae[u]){var me=`
`+V[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return ht("Activity");default:return""}}function Lt(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Yt=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,Pt=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,q=s.unstable_requestPaint,Dt=s.unstable_now,He=s.unstable_getCurrentPriorityLevel,L=s.unstable_ImmediatePriority,y=s.unstable_UserBlockingPriority,X=s.unstable_NormalPriority,ee=s.unstable_LowPriority,de=s.unstable_IdlePriority,Re=s.log,we=s.unstable_setDisableYieldValue,ne=null,ue=null;function Ae(t){if(typeof Re=="function"&&we(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ne,t)}catch{}}var Fe=Math.clz32?Math.clz32:Qe,Ue=Math.log,Ne=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ue(t)/Ne|0)|0}var je=256,et=262144,Z=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=De(o):(_&=w,_!==0?u=De(_):a||(a=w&~t,a!==0&&(u=De(a))))):(w=o&~f,w!==0?u=De(w):_!==0?u=De(_):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ve(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(a=_&~a;0<a;){var me=31-Fe(a),xe=1<<me;w[me]=0,V[me]=-1;var ce=ae[me];if(ce!==null)for(ae[me]=null,me=0;me<ce.length;me++){var he=ce[me];he!==null&&(he.lane&=-536870913)}a&=~xe}o!==0&&Ft(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ft(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ti(t,n){var a=n&-n;return a=(a&42)!==0?1:Js(a),(a&(t.suspendedLanes|n))!==0?0:a}function Js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $s(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:eg(t.type))}function qr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Bi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Bi,Tn="__reactProps$"+Bi,Xn="__reactContainer$"+Bi,fr="__reactEvents$"+Bi,hl="__reactListeners$"+Bi,dl="__reactHandles$"+Bi,hr="__reactResources$"+Bi,Ca="__reactMarker$"+Bi;function wa(t){delete t[fn],delete t[Tn],delete t[fr],delete t[hl],delete t[dl]}function $i(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=B1(t);t!==null;){if(a=t[fn])return a;t=B1(t)}return n}t=a,a=t.parentNode}return null}function ea(t){if(t=t[fn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Da(t){var n=t[hr];return n||(n=t[hr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ca]=!0}var pl=new Set,R={};function Y(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(R[t]=n,t=0;t<n.length;t++)pl.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},Ie={};function ke(t){return Yt.call(Ie,t)?!0:Yt.call(oe,t)?!1:se.test(t)?Ie[t]=!0:(oe[t]=!0,!1)}function Oe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rt(t){if(!t._valueTracker){var n=ct(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ct(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function Bt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,_,w){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_t(t,_,tt(n)):a!=null?_t(t,_,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+tt(w):t.removeAttribute("name")}function On(t,n,a,o,u,f,_,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Rt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Rt(t)}function _t(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ni(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if($(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Rt(t)}function ii(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function an(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ri(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&an(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&an(t,f,n[f])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(t){return Ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,Kr=null;function w0(t){var n=ea(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&nn(o)}break e;case"textarea":ni(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var vu=!1;function D0(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(Yr!==null||Kr!==null)&&(tc(),Yr&&(n=Yr,t=Kr,Kr=Yr=null,w0(n),t)))for(n=0;n<t.length;n++)w0(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(na)try{var to={};Object.defineProperty(to,"passive",{get:function(){xu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{xu=!1}var La=null,Mu=null,ml=null;function U0(){if(ml)return ml;var t,n=Mu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function L0(){return!1}function Zn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_l:L0,this.isPropagationStopped=L0,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Zn(mr),no=x({},mr,{view:0,detail:0}),Dv=Zn(no),Su,yu,io,xl=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Su=t.screenX-io.screenX,yu=t.screenY-io.screenY):yu=Su=0,io=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),N0=Zn(xl),Uv=x({},xl,{dataTransfer:0}),Lv=Zn(Uv),Nv=x({},no,{relatedTarget:0}),Eu=Zn(Nv),Ov=x({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Zn(Ov),Fv=x({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iv=Zn(Fv),Bv=x({},mr,{data:0}),O0=Zn(Bv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vv[t])?!!n[t]:!1}function bu(){return Gv}var kv=x({},no,{key:function(t){if(t.key){var n=zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xv=Zn(kv),Zv=x({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P0=Zn(Zv),Wv=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),qv=Zn(Wv),Yv=x({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Zn(Yv),Qv=x({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Zn(Qv),jv=x({},mr,{newState:0,oldState:0}),$v=Zn(jv),e2=[9,13,27,32],Au=na&&"CompositionEvent"in window,ao=null;na&&"documentMode"in document&&(ao=document.documentMode);var t2=na&&"TextEvent"in window&&!ao,F0=na&&(!Au||ao&&8<ao&&11>=ao),I0=" ",B0=!1;function z0(t,n){switch(t){case"keyup":return e2.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function n2(t,n){switch(t){case"compositionend":return H0(n);case"keypress":return n.which!==32?null:(B0=!0,I0);case"textInput":return t=n.data,t===I0&&B0?null:t;default:return null}}function i2(t,n){if(Qr)return t==="compositionend"||!Au&&z0(t,n)?(t=U0(),ml=Mu=La=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return F0&&n.locale!=="ko"?null:n.data;default:return null}}var a2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!a2[t.type]:n==="textarea"}function G0(t,n,a,o){Yr?Kr?Kr.push(o):Kr=[o]:Yr=o,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ro=null,so=null;function r2(t){b1(t,0)}function Ml(t){var n=dr(t);if(nn(n))return t}function k0(t,n){if(t==="change")return n}var X0=!1;if(na){var Tu;if(na){var Ru="oninput"in document;if(!Ru){var Z0=document.createElement("div");Z0.setAttribute("oninput","return;"),Ru=typeof Z0.oninput=="function"}Tu=Ru}else Tu=!1;X0=Tu&&(!document.documentMode||9<document.documentMode)}function W0(){ro&&(ro.detachEvent("onpropertychange",q0),so=ro=null)}function q0(t){if(t.propertyName==="value"&&Ml(so)){var n=[];G0(n,so,t,_u(t)),D0(r2,n)}}function s2(t,n,a){t==="focusin"?(W0(),ro=n,so=a,ro.attachEvent("onpropertychange",q0)):t==="focusout"&&W0()}function o2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(so)}function l2(t,n){if(t==="click")return Ml(n)}function c2(t,n){if(t==="input"||t==="change")return Ml(n)}function u2(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:u2;function oo(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Yt.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function Y0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function K0(t,n){var a=Y0(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Y0(a)}}function Q0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Q0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function J0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var f2=na&&"documentMode"in document&&11>=document.documentMode,Jr=null,wu=null,lo=null,Du=!1;function j0(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Jr==null||Jr!==Qt(o)||(o=Jr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=lc(wu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Jr)))}function gr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var jr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Uu={},$0={};na&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function _r(t){if(Uu[t])return Uu[t];if(!jr[t])return t;var n=jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $0)return Uu[t]=n[a];return t}var ep=_r("animationend"),tp=_r("animationiteration"),np=_r("animationstart"),h2=_r("transitionrun"),d2=_r("transitionstart"),p2=_r("transitioncancel"),ip=_r("transitionend"),ap=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ci(t,n){ap.set(t,n),Y(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],$r=0,Nu=0;function yl(){for(var t=$r,n=Nu=$r=0;n<t;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&rp(a,u,f)}}function El(t,n,a,o){_i[$r++]=t,_i[$r++]=n,_i[$r++]=a,_i[$r++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return El(t,n,a,o),bl(t)}function vr(t,n){return El(t,null,null,n),bl(t)}function rp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(t){if(50<Uo)throw Uo=0,Xf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function m2(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new m2(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Pu(t)&&(_=1);else if(typeof t=="string")_=Mx(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ri(31,a,n,u),t.elementType=N,t.lanes=f,t;case D:return xr(a.children,u,f,n);case b:_=8,u|=24;break;case M:return t=ri(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case B:return t=ri(13,a,n,u),t.elementType=B,t.lanes=f,t;case U:return t=ri(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:_=10;break e;case P:_=9;break e;case C:_=11;break e;case I:_=14;break e;case S:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ri(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xr(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function op(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lp=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=lp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Lt(n)},lp.set(t,n),n)}return{value:t,source:n,stack:Lt(n)}}var ts=[],ns=0,Tl=null,co=0,xi=[],Mi=0,Na=null,Hi=1,Vi="";function aa(t,n){ts[ns++]=co,ts[ns++]=Tl,Tl=t,co=n}function cp(t,n,a){xi[Mi++]=Hi,xi[Mi++]=Vi,xi[Mi++]=Na,Na=t;var o=Hi;t=Vi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Hi=1<<32-Fe(n)+u|a<<u|o,Vi=f+t}else Hi=1<<f|a<<u|o,Vi=t}function Bu(t){t.return!==null&&(aa(t,1),cp(t,1,0))}function zu(t){for(;t===Tl;)Tl=ts[--ns],ts[ns]=null,co=ts[--ns],ts[ns]=null;for(;t===Na;)Na=xi[--Mi],xi[Mi]=null,Vi=xi[--Mi],xi[Mi]=null,Hi=xi[--Mi],xi[Mi]=null}function up(t,n){xi[Mi++]=Hi,xi[Mi++]=Vi,xi[Mi++]=Na,Hi=n.id,Vi=n.overflow,Na=t}var Rn=null,$t=null,bt=!1,Oa=null,Si=!1,Hu=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(vi(n,t)),Hu}function fp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Tn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)xt(No[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C1(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Pa(t,!0)}function hp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Rn=Rn.return}}function is(t){if(t!==Rn)return!1;if(!bt)return hp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&$t&&Pa(t),hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=I1(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=I1(t)}else n===27?(n=$t,Ka(t.type)?(t=uh,uh=null,$t=t):$t=n):$t=Rn?Ei(t.stateNode.nextSibling):null;return!0}function Mr(){$t=Rn=null,bt=!1}function Vu(){var t=Oa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Oa=null),t}function uo(t){Oa===null?Oa=[t]:Oa.push(t)}var Gu=F(null),Sr=null,ra=null;function Fa(t,n,a){Ee(Gu,n._currentValue),n._currentValue=a}function sa(t){t._currentValue=Gu.current,J(Gu)}function ku(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Xu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var V=0;V<n.length;V++)if(w.context===n[V]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),ku(f.return,a,t),o||(_=null);break e}f=w.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ku(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function as(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var w=u.type;ai(u.pendingProps.value,_.value)||(t!==null?t.push(w):t=[w])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Bo):t=[Bo])}u=u.return}t!==null&&Xu(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){Sr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return dp(Sr,t)}function Cl(t,n){return Sr===null&&yr(t),dp(t,n)}function dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(t===null)throw Error(r(308));ra=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ra=ra.next=n;return a}var g2=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_2=s.unstable_scheduleCallback,v2=s.unstable_NormalPriority,dn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new g2,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&_2(v2,function(){t.controller.abort()})}var ho=null,Wu=0,rs=0,ss=null;function x2(t,n){if(ho===null){var a=ho=[];Wu=0,rs=Qf(),ss={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(pp,pp),n}function pp(){if(--Wu===0&&ho!==null){ss!==null&&(ss.status="fulfilled");var t=ho;ho=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function M2(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mp=z.S;z.S=function(t,n){jm=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&x2(t,n),mp!==null&&mp(t,n)};var Er=F(null);function qu(){var t=Er.current;return t!==null?t:Jt.pooledCache}function wl(t,n){n===null?Ee(Er,Er.current):Ee(Er,n.pool)}function gp(){var t=qu();return t===null?null:{parent:dn._currentValue,pool:t}}var os=Error(r(460)),Yu=Error(r(474)),Dl=Error(r(542)),Ul={then:function(){}};function _p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mp(t),t}throw Ar=n,os}}function br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,os):a}}var Ar=null;function xp(){if(Ar===null)throw Error(r(459));var t=Ar;return Ar=null,t}function Mp(t){if(t===os||t===Dl)throw Error(r(483))}var ls=null,po=0;function Ll(t){var n=po;return po+=1,ls===null&&(ls=[]),vp(ls,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sp(t){function n(j,W){if(t){var ie=j.deletions;ie===null?(j.deletions=[W],j.flags|=16):ie.push(W)}}function a(j,W){if(!t)return null;for(;W!==null;)n(j,W),W=W.sibling;return null}function o(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function u(j,W){return j=ia(j,W),j.index=0,j.sibling=null,j}function f(j,W,ie){return j.index=ie,t?(ie=j.alternate,ie!==null?(ie=ie.index,ie<W?(j.flags|=67108866,W):ie):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function w(j,W,ie,ve){return W===null||W.tag!==6?(W=Fu(ie,j.mode,ve),W.return=j,W):(W=u(W,ie),W.return=j,W)}function V(j,W,ie,ve){var nt=ie.type;return nt===D?me(j,W,ie.props.children,ve,ie.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===S&&br(nt)===W.type)?(W=u(W,ie.props),mo(W,ie),W.return=j,W):(W=Al(ie.type,ie.key,ie.props,null,j.mode,ve),mo(W,ie),W.return=j,W)}function ae(j,W,ie,ve){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Iu(ie,j.mode,ve),W.return=j,W):(W=u(W,ie.children||[]),W.return=j,W)}function me(j,W,ie,ve,nt){return W===null||W.tag!==7?(W=xr(ie,j.mode,ve,nt),W.return=j,W):(W=u(W,ie),W.return=j,W)}function xe(j,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Fu(""+W,j.mode,ie),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case E:return ie=Al(W.type,W.key,W.props,null,j.mode,ie),mo(ie,W),ie.return=j,ie;case A:return W=Iu(W,j.mode,ie),W.return=j,W;case S:return W=br(W),xe(j,W,ie)}if($(W)||Q(W))return W=xr(W,j.mode,ie,null),W.return=j,W;if(typeof W.then=="function")return xe(j,Ll(W),ie);if(W.$$typeof===O)return xe(j,Cl(j,W),ie);Nl(j,W)}return null}function ce(j,W,ie,ve){var nt=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return nt!==null?null:w(j,W,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case E:return ie.key===nt?V(j,W,ie,ve):null;case A:return ie.key===nt?ae(j,W,ie,ve):null;case S:return ie=br(ie),ce(j,W,ie,ve)}if($(ie)||Q(ie))return nt!==null?null:me(j,W,ie,ve,null);if(typeof ie.then=="function")return ce(j,W,Ll(ie),ve);if(ie.$$typeof===O)return ce(j,W,Cl(j,ie),ve);Nl(j,ie)}return null}function he(j,W,ie,ve,nt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return j=j.get(ie)||null,w(W,j,""+ve,nt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return j=j.get(ve.key===null?ie:ve.key)||null,V(W,j,ve,nt);case A:return j=j.get(ve.key===null?ie:ve.key)||null,ae(W,j,ve,nt);case S:return ve=br(ve),he(j,W,ie,ve,nt)}if($(ve)||Q(ve))return j=j.get(ie)||null,me(W,j,ve,nt,null);if(typeof ve.then=="function")return he(j,W,ie,Ll(ve),nt);if(ve.$$typeof===O)return he(j,W,ie,Cl(W,ve),nt);Nl(W,ve)}return null}function qe(j,W,ie,ve){for(var nt=null,Ct=null,Ke=W,ft=W=0,St=null;Ke!==null&&ft<ie.length;ft++){Ke.index>ft?(St=Ke,Ke=null):St=Ke.sibling;var wt=ce(j,Ke,ie[ft],ve);if(wt===null){Ke===null&&(Ke=St);break}t&&Ke&&wt.alternate===null&&n(j,Ke),W=f(wt,W,ft),Ct===null?nt=wt:Ct.sibling=wt,Ct=wt,Ke=St}if(ft===ie.length)return a(j,Ke),bt&&aa(j,ft),nt;if(Ke===null){for(;ft<ie.length;ft++)Ke=xe(j,ie[ft],ve),Ke!==null&&(W=f(Ke,W,ft),Ct===null?nt=Ke:Ct.sibling=Ke,Ct=Ke);return bt&&aa(j,ft),nt}for(Ke=o(Ke);ft<ie.length;ft++)St=he(Ke,j,ft,ie[ft],ve),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?ft:St.key),W=f(St,W,ft),Ct===null?nt=St:Ct.sibling=St,Ct=St);return t&&Ke.forEach(function(er){return n(j,er)}),bt&&aa(j,ft),nt}function at(j,W,ie,ve){if(ie==null)throw Error(r(151));for(var nt=null,Ct=null,Ke=W,ft=W=0,St=null,wt=ie.next();Ke!==null&&!wt.done;ft++,wt=ie.next()){Ke.index>ft?(St=Ke,Ke=null):St=Ke.sibling;var er=ce(j,Ke,wt.value,ve);if(er===null){Ke===null&&(Ke=St);break}t&&Ke&&er.alternate===null&&n(j,Ke),W=f(er,W,ft),Ct===null?nt=er:Ct.sibling=er,Ct=er,Ke=St}if(wt.done)return a(j,Ke),bt&&aa(j,ft),nt;if(Ke===null){for(;!wt.done;ft++,wt=ie.next())wt=xe(j,wt.value,ve),wt!==null&&(W=f(wt,W,ft),Ct===null?nt=wt:Ct.sibling=wt,Ct=wt);return bt&&aa(j,ft),nt}for(Ke=o(Ke);!wt.done;ft++,wt=ie.next())wt=he(Ke,j,ft,wt.value,ve),wt!==null&&(t&&wt.alternate!==null&&Ke.delete(wt.key===null?ft:wt.key),W=f(wt,W,ft),Ct===null?nt=wt:Ct.sibling=wt,Ct=wt);return t&&Ke.forEach(function(Ux){return n(j,Ux)}),bt&&aa(j,ft),nt}function Wt(j,W,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===D&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case E:e:{for(var nt=ie.key;W!==null;){if(W.key===nt){if(nt=ie.type,nt===D){if(W.tag===7){a(j,W.sibling),ve=u(W,ie.props.children),ve.return=j,j=ve;break e}}else if(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===S&&br(nt)===W.type){a(j,W.sibling),ve=u(W,ie.props),mo(ve,ie),ve.return=j,j=ve;break e}a(j,W);break}else n(j,W);W=W.sibling}ie.type===D?(ve=xr(ie.props.children,j.mode,ve,ie.key),ve.return=j,j=ve):(ve=Al(ie.type,ie.key,ie.props,null,j.mode,ve),mo(ve,ie),ve.return=j,j=ve)}return _(j);case A:e:{for(nt=ie.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(j,W.sibling),ve=u(W,ie.children||[]),ve.return=j,j=ve;break e}else{a(j,W);break}else n(j,W);W=W.sibling}ve=Iu(ie,j.mode,ve),ve.return=j,j=ve}return _(j);case S:return ie=br(ie),Wt(j,W,ie,ve)}if($(ie))return qe(j,W,ie,ve);if(Q(ie)){if(nt=Q(ie),typeof nt!="function")throw Error(r(150));return ie=nt.call(ie),at(j,W,ie,ve)}if(typeof ie.then=="function")return Wt(j,W,Ll(ie),ve);if(ie.$$typeof===O)return Wt(j,W,Cl(j,ie),ve);Nl(j,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(a(j,W.sibling),ve=u(W,ie),ve.return=j,j=ve):(a(j,W),ve=Fu(ie,j.mode,ve),ve.return=j,j=ve),_(j)):a(j,W)}return function(j,W,ie,ve){try{po=0;var nt=Wt(j,W,ie,ve);return ls=null,nt}catch(Ke){if(Ke===os||Ke===Dl)throw Ke;var Ct=ri(29,Ke,null,j.mode);return Ct.lanes=ve,Ct.return=j,Ct}finally{}}}var Tr=Sp(!0),yp=Sp(!1),Ia=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(t),rp(t,null,a),n}return El(t,o,n,a),bl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ei(t,a)}}function Ju(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ju=!1;function _o(){if(ju){var t=ss;if(t!==null)throw t}}function vo(t,n,a,o){ju=!1;var u=t.updateQueue;Ia=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var V=w,ae=V.next;V.next=null,_===null?f=ae:_.next=ae,_=V;var me=t.alternate;me!==null&&(me=me.updateQueue,w=me.lastBaseUpdate,w!==_&&(w===null?me.firstBaseUpdate=ae:w.next=ae,me.lastBaseUpdate=V))}if(f!==null){var xe=u.baseState;_=0,me=ae=V=null,w=f;do{var ce=w.lane&-536870913,he=ce!==w.lane;if(he?(Mt&ce)===ce:(o&ce)===ce){ce!==0&&ce===rs&&(ju=!0),me!==null&&(me=me.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var qe=t,at=w;ce=n;var Wt=a;switch(at.tag){case 1:if(qe=at.payload,typeof qe=="function"){xe=qe.call(Wt,xe,ce);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=at.payload,ce=typeof qe=="function"?qe.call(Wt,xe,ce):qe,ce==null)break e;xe=x({},xe,ce);break e;case 2:Ia=!0}}ce=w.callback,ce!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[ce]:he.push(ce))}else he={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},me===null?(ae=me=he,V=xe):me=me.next=he,_|=ce;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);me===null&&(V=xe),u.baseState=V,u.firstBaseUpdate=ae,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Xa|=_,t.lanes=_,t.memoizedState=xe}}function Ep(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function bp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ep(a[t],n)}var cs=F(null),Ol=F(0);function Ap(t,n){t=ma,Ee(Ol,t),Ee(cs,n),ma=t|n.baseLanes}function $u(){Ee(Ol,ma),Ee(cs,cs.current)}function ef(){ma=Ol.current,J(cs),J(Ol)}var si=F(null),yi=null;function Ha(t){var n=t.alternate;Ee(cn,cn.current&1),Ee(si,t),yi===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(yi=t)}function tf(t){Ee(cn,cn.current),Ee(si,t),yi===null&&(yi=t)}function Tp(t){t.tag===22?(Ee(cn,cn.current),Ee(si,t),yi===null&&(yi=t)):Va()}function Va(){Ee(cn,cn.current),Ee(si,si.current)}function oi(t){J(si),yi===t&&(yi=null),J(cn)}var cn=F(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,ut=null,Xt=null,pn=null,Fl=!1,us=!1,Rr=!1,Il=0,xo=0,fs=null,S2=0;function on(){throw Error(r(321))}function nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function af(t,n,a,o,u,f){return oa=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?cm:xf,Rr=!1,f=a(o,u),Rr=!1,us&&(f=Cp(n,a,o,u)),Rp(t),f}function Rp(t){z.H=yo;var n=Xt!==null&&Xt.next!==null;if(oa=0,pn=Xt=ut=null,Fl=!1,xo=0,fs=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Rl(t)&&(mn=!0))}function Cp(t,n,a,o){ut=t;var u=0;do{if(us&&(fs=null),xo=0,us=!1,25<=u)throw Error(r(301));if(u+=1,pn=Xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=um,f=n(a,o)}while(us);return f}function y2(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ut.flags|=1024),n}function rf(){var t=Il!==0;return Il=0,t}function sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function of(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}oa=0,pn=Xt=ut=null,us=!1,xo=Il=0,fs=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ut.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=pn===null?ut.memoizedState:pn.next;if(n!==null)pn=n,Xt=t;else{if(t===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},pn===null?ut.memoizedState=pn=t:pn=pn.next=t}return pn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=xo;return xo+=1,fs===null&&(fs=[]),t=vp(fs,t,n),n=ut,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?cm:xf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===O)return Cn(t)}throw Error(r(438,String(t)))}function lf(t){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=un();return cf(n,Xt,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var w=_=null,V=null,ae=n,me=!1;do{var xe=ae.lane&-536870913;if(xe!==ae.lane?(Mt&xe)===xe:(oa&xe)===xe){var ce=ae.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),xe===rs&&(me=!0);else if((oa&ce)===ce){ae=ae.next,ce===rs&&(me=!0);continue}else xe={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(w=V=xe,_=f):V=V.next=xe,ut.lanes|=ce,Xa|=ce;xe=ae.action,Rr&&a(f,xe),f=ae.hasEagerState?ae.eagerState:a(f,xe)}else ce={lane:xe,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(w=V=ce,_=f):V=V.next=ce,ut.lanes|=xe,Xa|=xe;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?_=f:V.next=w,!ai(f,t.memoizedState)&&(mn=!0,me&&(a=ss,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ai(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function wp(t,n,a){var o=ut,u=un(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ai((Xt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,df(Lp.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,hs(9,{destroy:void 0},Up.bind(null,o,u,a,n),null),Jt===null)throw Error(r(349));f||(oa&127)!==0||Dp(o,n,a)}return a}function Dp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Bl(),ut.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Up(t,n,a,o){n.value=a,n.getSnapshot=o,Np(n)&&Op(t)}function Lp(t,n,a){return a(function(){Np(n)&&Op(t)})}function Np(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function Op(t){var n=vr(t,2);n!==null&&Qn(n,t,2)}function ff(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Rr){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function Pp(t,n,a,o){return t.baseState=a,cf(t,Xt,typeof o=="function"?o:la)}function E2(t,n,a,o,u){if(kl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Fp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fp(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var w=a(u,o),V=z.S;V!==null&&V(_,w),Ip(t,n,w)}catch(ae){hf(t,n,ae)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(u,o),Ip(t,n,f)}catch(ae){hf(t,n,ae)}}function Ip(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Bp(t,n,o)},function(o){return hf(t,n,o)}):Bp(t,n,a)}function Bp(t,n,a){n.status="fulfilled",n.value=a,zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Fp(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==o)}t.action=null}function zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hp(t,n){return n}function Vp(t,n){if(bt){var a=Jt.formState;if(a!==null){e:{var o=ut;if(bt){if($t){t:{for(var u=$t,f=Si;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=Ei(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hp,lastRenderedState:n},a.queue=o,a=sm.bind(null,ut,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,ut,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=E2.bind(null,ut,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Gp(t){var n=un();return kp(n,Xt,t)}function kp(t,n,a){if(n=cf(t,n,Hp)[0],t=Hl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(_){throw _===os?Dl:_}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,hs(9,{destroy:void 0},b2.bind(null,u,a),null)),[o,f,t]}function b2(t,n){t.action=n}function Xp(t){var n=un(),a=Xt;if(a!==null)return kp(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Bl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Zp(){return un().memoizedState}function Vl(t,n,a,o){var u=Vn();ut.flags|=t,u.memoizedState=hs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Xt!==null&&o!==null&&nf(o,Xt.memoizedState.deps)?u.memoizedState=hs(n,f,a,o):(ut.flags|=t,u.memoizedState=hs(1|n,f,a,o))}function Wp(t,n){Vl(8390656,8,t,n)}function df(t,n){Gl(2048,8,t,n)}function A2(t){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Bl(),ut.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function qp(t){var n=un().memoizedState;return A2({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Yp(t,n){return Gl(4,2,t,n)}function Kp(t,n){return Gl(4,4,t,n)}function Qp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jp(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Qp.bind(null,n,t),a)}function pf(){}function jp(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $p(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),Rr){Ae(!0);try{t()}finally{Ae(!1)}}return a.memoizedState=[o,n],o}function mf(t,n,a){return a===void 0||(oa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=e1(),ut.lanes|=t,Xa|=t,a)}function em(t,n,a,o){return ai(a,n)?a:cs.current!==null?(t=mf(t,a,o),ai(t,n)||(mn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(Mt&261930)===0?(mn=!0,t.memoizedState=a):(t=e1(),ut.lanes|=t,Xa|=t,n)}function tm(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=z.T,w={};z.T=w,vf(t,!1,n,a);try{var V=u(),ae=z.S;if(ae!==null&&ae(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=M2(V,o);So(t,n,me,ui(t))}else So(t,n,o,ui(t))}catch(xe){So(t,n,{then:function(){},status:"rejected",reason:xe},ui())}finally{H.p=f,_!==null&&w.types!==null&&(_.types=w.types),z.T=_}}function T2(){}function gf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=nm(t).queue;tm(t,u,n,te,a===null?T2:function(){return im(t),a(o)})}function nm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function im(t){var n=nm(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},ui())}function _f(){return Cn(Bo)}function am(){return un().memoizedState}function rm(){return un().memoizedState}function R2(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Ba(a);var o=za(n,t,a);o!==null&&(Qn(o,n,a),go(o,n,a)),n={cache:Zu()},t.payload=n;return}n=n.return}}function C2(t,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?om(n,a):(a=Ou(t,n,a,o),a!==null&&(Qn(a,t,o),lm(a,n,o)))}function sm(t,n,a){var o=ui();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))om(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,w=f(_,a);if(u.hasEagerState=!0,u.eagerState=w,ai(w,_))return El(t,n,u,0),Jt===null&&yl(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return Qn(a,t,o),lm(a,n,o),!0}return!1}function vf(t,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(r(479))}else n=Ou(t,a,o,2),n!==null&&Qn(n,t,2)}function kl(t){var n=t.alternate;return t===ut||n!==null&&n===ut}function om(t,n){us=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function lm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ei(t,a)}}var yo={readContext:Cn,use:zl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};yo.useEffectEvent=on;var cm={readContext:Cn,use:zl,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Wp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Qp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var o=t();if(Rr){Ae(!0);try{t()}finally{Ae(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Rr){Ae(!0);try{a(n)}finally{Ae(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=C2.bind(null,ut,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=sm.bind(null,ut,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(t,n){var a=Vn();return mf(a,t,n)},useTransition:function(){var t=ff(!1);return t=tm.bind(null,ut,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ut,u=Vn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(Mt&127)!==0||Dp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Wp(Lp.bind(null,o,f,t),[t]),o.flags|=2048,hs(9,{destroy:void 0},Up.bind(null,o,f,a,n),null),a},useId:function(){var t=Vn(),n=Jt.identifierPrefix;if(bt){var a=Vi,o=Hi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=S2++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:_f,useFormState:Vp,useActionState:Vp,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,ut,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return Vn().memoizedState=R2.bind(null,ut)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Cn,use:zl,useCallback:jp,useContext:Cn,useEffect:df,useImperativeHandle:Jp,useInsertionEffect:Yp,useLayoutEffect:Kp,useMemo:$p,useReducer:Hl,useRef:Zp,useState:function(){return Hl(la)},useDebugValue:pf,useDeferredValue:function(t,n){var a=un();return em(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Hl(la)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:wp,useId:am,useHostTransitionStatus:_f,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=un();return Pp(a,Xt,t,n)},useMemoCache:lf,useCacheRefresh:rm};xf.useEffectEvent=qp;var um={readContext:Cn,use:zl,useCallback:jp,useContext:Cn,useEffect:df,useImperativeHandle:Jp,useInsertionEffect:Yp,useLayoutEffect:Kp,useMemo:$p,useReducer:uf,useRef:Zp,useState:function(){return uf(la)},useDebugValue:pf,useDeferredValue:function(t,n){var a=un();return Xt===null?mf(a,t,n):em(a,Xt.memoizedState,t,n)},useTransition:function(){var t=uf(la)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:wp,useId:am,useHostTransitionStatus:_f,useFormState:Xp,useActionState:Xp,useOptimistic:function(t,n){var a=un();return Xt!==null?Pp(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:rm};um.useEffectEvent=qp;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ui(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Qn(n,t,a),go(n,t,a))}};function fm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function hm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function dm(t){Sl(t)}function pm(t){console.error(t)}function mm(t){Sl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function _m(t){return t=Ba(t),t.tag=3,t}function vm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){gm(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){gm(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function w2(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?nc():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(t,o,u)),!1}throw Error(r(435,a.tag))}return qf(t,o,u),nc(),!1}if(bt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(r(422),{cause:o}),uo(vi(t,a)))):(o!==Hu&&(n=Error(r(423),{cause:o}),uo(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=vi(o,a),u=yf(t.stateNode,o,u),Ju(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=vi(f,a),Do===null?Do=[f]:Do.push(f),ln!==4&&(ln=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yf(a.stateNode,o,t),Ju(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_m(u),vm(u,t,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(r(461)),mn=!1;function wn(t,n,a,o){n.child=t===null?yp(n,null,a,o):Tr(n,t.child,a,o)}function xm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var w in o)w!=="ref"&&(_[w]=o[w])}else _=o;return yr(n),o=af(t,n,a,_,f,u),w=rf(),t!==null&&!mn?(sf(t,n,u),ca(t,n,u)):(bt&&w&&Bu(n),n.flags|=1,wn(t,n,o,u),n.child)}function Mm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sm(t,n,f,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Uf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(_,o)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(f,o),t.ref=n.ref,t.return=n,n.child=t}function Sm(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(oo(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Uf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return bf(t,n,a,o,u)}function ym(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Em(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,f!==null?f.cachePool:null),f!==null?Ap(n,f):$u(),Tp(n);else return o=n.lanes=536870912,Em(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(wl(n,f.cachePool),Ap(n,f),Va(),n.memoizedState=null):(t!==null&&wl(n,null),$u(),Va());return wn(t,n,u,a),n.child}function Eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Em(t,n,a,o,u){var f=qu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&wl(n,null),$u(),Tp(n),t!==null&&as(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bm(t,n,a){return Tr(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function D2(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Eo(null,t);if(tf(n),(t=$t)?(t=F1(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=op(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return Zl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=bm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||as(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Jt,o!==null&&(_=ti(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,vr(t,_),Qn(o,t,_),Ef;nc(),n=bm(t,n,a)}else t=f.treeContext,$t=Ei(_.nextSibling),Rn=n,bt=!0,Oa=null,Si=!1,t!==null&&up(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=ia(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return yr(n),a=af(t,n,a,o,void 0,u),o=rf(),t!==null&&!mn?(sf(t,n,u),ca(t,n,u)):(bt&&o&&Bu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Am(t,n,a,o,u,f){return yr(n),n.updateQueue=null,a=Cp(n,o,a,u),Rp(t),o=rf(),t!==null&&!mn?(sf(t,n,f),ca(t,n,f)):(bt&&o&&Bu(n),n.flags|=1,wn(t,n,a,f),n.child)}function Tm(t,n,a,o,u){if(yr(n),n.stateNode===null){var f=es,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ku(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):es,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Mf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Sf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,V=Cr(a,w);f.props=V;var ae=f.context,me=a.contextType;_=es,typeof me=="object"&&me!==null&&(_=Cn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ae!==_)&&hm(n,f,o,_),Ia=!1;var ce=n.memoizedState;f.state=ce,vo(n,o,f,u),_o(),ae=n.memoizedState,w||ce!==ae||Ia?(typeof xe=="function"&&(Mf(n,a,xe,o),ae=n.memoizedState),(V=Ia||fm(n,a,V,o,ce,ae,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=_,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(t,n),_=n.memoizedProps,me=Cr(a,_),f.props=me,xe=n.pendingProps,ce=f.context,ae=a.contextType,V=es,typeof ae=="object"&&ae!==null&&(V=Cn(ae)),w=a.getDerivedStateFromProps,(ae=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||ce!==V)&&hm(n,f,o,V),Ia=!1,ce=n.memoizedState,f.state=ce,vo(n,o,f,u),_o();var he=n.memoizedState;_!==xe||ce!==he||Ia||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof w=="function"&&(Mf(n,a,w,o),he=n.memoizedState),(me=Ia||fm(n,a,me,o,ce,he,V)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,he,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,he,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),f.props=o,f.state=he,f.context=V,o=me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ca(t,n,u),t}function Rm(t,n,a,o){return Mr(),n.flags|=256,wn(t,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:gp()}}function Rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function Cm(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ha(n):Va(),(t=$t)?(t=F1(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=op(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Pa(n);return ch(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Va(),u=n.mode,w=ql({mode:"hidden",children:w},u),o=xr(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Tf(a),o.childLanes=Rf(t,_,a),n.memoizedState=Af,Eo(null,o)):(Ha(n),Cf(n,w))}var V=t.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=wf(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),w=o.fallback,u=n.mode,o=ql({mode:"visible",children:o.children},u),w=xr(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Tr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Rf(t,_,a),n.memoizedState=Af,n=Eo(null,o));else if(Ha(n),ch(w)){if(_=w.nextSibling&&w.nextSibling.dataset,_)var ae=_.dgst;_=ae,o=Error(r(419)),o.stack="",o.digest=_,uo({value:o,source:null,stack:null}),n=wf(t,n,a)}else if(mn||as(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=Jt,_!==null&&(o=ti(_,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,vr(t,o),Qn(_,t,o),Ef;lh(w)||nc(),n=wf(t,n,a)}else lh(w)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,$t=Ei(w.nextSibling),Rn=n,bt=!0,Oa=null,Si=!1,t!==null&&up(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Va(),w=o.fallback,u=n.mode,V=t.child,ae=V.sibling,o=ia(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ae!==null?w=ia(ae,w):(w=xr(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Eo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Tf(a):(u=w.cachePool,u!==null?(V=dn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=gp(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Rf(t,_,a),n.memoizedState=Af,Eo(t.child,o)):(Ha(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function wf(t,n,a){return Tr(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,a)}function Df(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Dm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=cn.current,w=(_&2)!==0;if(w?(_=_&1|2,n.flags|=128):_&=1,Ee(cn,_),wn(t,n,o,a),o=bt?co:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,a,n);else if(t.tag===19)wm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function U2(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Fa(n,dn,t.memoizedState.cache),Mr();break;case 27:case 5:it(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cm(t,n,a):(Ha(n),t=ca(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(as(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(cn,cn.current),o)break;return null;case 22:return n.lanes=0,ym(t,n,a,n.pendingProps);case 24:Fa(n,dn,t.memoizedState.cache)}return ca(t,n,a)}function Um(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Uf(t,a)&&(n.flags&128)===0)return mn=!1,U2(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,bt&&(n.flags&1048576)!==0&&cp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=br(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=Cr(t,o),n.tag=1,n=Tm(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=xm(null,n,t,o,a);break e}else if(u===I){n.tag=14,n=Mm(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cr(o,n.pendingProps),Tm(t,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Qu(t,n),vo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Fa(n,dn,o),o!==f.cache&&Xu(n,[dn],a,!0),_o(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rm(t,n,o,a);break e}else if(o!==u){u=vi(Error(r(424)),n),uo(u),n=Rm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Ei(t.firstChild),Rn=n,bt=!0,Oa=null,Si=!0,a=yp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mr(),o===u){n=ca(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=G1(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=cc(re.current).createElement(a),o[fn]=n,o[Tn]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=G1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&bt&&(o=n.stateNode=z1(n.type,n.pendingProps,re.current),Rn=n,Si=!0,u=$t,Ka(n.type)?(uh=u,$t=Ei(o.firstChild)):$t=u),wn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=$t)&&(o=ox(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Rn=n,$t=Ei(o.firstChild),Si=!1,u=!0):u=!1),u||Pa(n)),it(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,rh(u,f)?o=null:_!==null&&rh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=af(t,n,y2,null,null,a),Bo._currentValue=u),Wl(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=$t)&&(a=lx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Rn=n,$t=null,t=!0):t=!1),t||Pa(n)),null;case 13:return Cm(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Tr(n,null,o,a):wn(t,n,o,a),n.child;case 11:return xm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,yr(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return Mm(t,n,n.type,n.pendingProps,a);case 15:return Sm(t,n,n.type,n.pendingProps,a);case 19:return Dm(t,n,a);case 31:return D2(t,n,a);case 22:return ym(t,n,a,n.pendingProps);case 24:return yr(n),o=Cn(dn),t===null?(u=qu(),u===null&&(u=Jt,f=Zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ku(n),Fa(n,dn,u)):((t.lanes&a)!==0&&(Qu(t,n),vo(n,null,null,a),_o()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=f.cache,Fa(n,dn,o),o!==u.cache&&Xu(n,[dn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function Lf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(a1())t.flags|=8192;else throw Ar=Ul,Yu}else t.flags&=-16777217}function Lm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!q1(n))if(a1())t.flags|=8192;else throw Ar=Ul,Yu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,gs|=n)}function bo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function L2(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(dn),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ua(n),f!==null?(en(n),Lm(n,f)):(en(n),Lf(n,u,null,o,a))):f?f!==t.memoizedState?(ua(n),en(n),Lm(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),en(n),Lf(n,u,t,o,a)),null;case 27:if(Je(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=Ce.current,is(n)?fp(n):(t=z1(u,o,a),n.stateNode=t,ua(n))}return en(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(f=Ce.current,is(n))fp(n);else{var _=cc(re.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[fn]=n,f[Tn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return en(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=re.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C1(t.nodeValue,a)),t||Pa(n,!0)}else t=cc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=is(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),en(n),null);case 4:return ze(),t===null&&eh(n.stateNode.containerInfo),en(n),null;case 10:return sa(n.type),en(n),null;case 19:if(J(cn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sp(a,t),a=a.sibling;return Ee(cn,cn.current&1|2),bt&&aa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Dt()>$l&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return en(n),null}else 2*Dt()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Dt(),t.sibling=null,a=cn.current,Ee(cn,u?a&1|2:a&1),bt&&aa(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return oi(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(Er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(dn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function N2(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return sa(dn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(cn),null;case 4:return ze(),null;case 10:return sa(n.type),null;case 22:case 23:return oi(n),ef(),t!==null&&J(Er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return sa(dn),null;case 25:return null;default:return null}}function Nm(t,n){switch(zu(n),n.tag){case 3:sa(dn),ze();break;case 26:case 27:case 5:Je(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:J(cn);break;case 10:sa(n.type);break;case 22:case 23:oi(n),ef(),t!==null&&J(Er);break;case 24:sa(dn)}}function Ao(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(w){Vt(n,n.return,w)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,w=_.destroy;if(w!==void 0){_.destroy=void 0,u=n;var V=a,ae=w;try{ae()}catch(me){Vt(u,V,me)}}}o=o.next}while(o!==f)}}catch(me){Vt(n,n.return,me)}}function Om(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bp(n,a)}catch(o){Vt(t,t.return,o)}}}function Pm(t,n,a){a.props=Cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Gi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function Fm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;tx(o,t.type,a,n),o[Tn]=n}catch(u){Vt(t,t.return,u)}}function Im(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,a),t=t.sibling;t!==null;)Pf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function Bm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[fn]=t,n[Tn]=a}catch(f){Vt(t,t.return,f)}}var fa=!1,gn=!1,Ff=!1,zm=typeof WeakSet=="function"?WeakSet:Set,En=null;function O2(t,n){if(t=t.containerInfo,ih=gc,t=J0(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,w=-1,V=-1,ae=0,me=0,xe=t,ce=null;t:for(;;){for(var he;xe!==a||u!==0&&xe.nodeType!==3||(w=_+u),xe!==f||o!==0&&xe.nodeType!==3||(V=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(he=xe.firstChild)!==null;)ce=xe,xe=he;for(;;){if(xe===t)break t;if(ce===a&&++ae===u&&(w=_),ce===f&&++me===o&&(V=_),(he=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=he}a=w===-1||V===-1?null:{start:w,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:t,selectionRange:a},gc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Cr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Vt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)oh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":oh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function Hm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&Ao(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Vt(a,a.return,_)}else{var u=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Vt(a,a.return,_)}}o&64&&Om(a),o&512&&To(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bp(t,n)}catch(_){Vt(a,a.return,_)}}break;case 27:n===null&&o&4&&Bm(a);case 26:case 5:da(t,a),n===null&&o&4&&Fm(a),o&512&&To(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&km(t,a);break;case 13:da(t,a),o&4&&Xm(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=k2.bind(null,a),cx(t,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||gn,u=fa;var f=gn;fa=o,(gn=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):da(t,a),fa=u,gn=f}break;case 30:break;default:da(t,a)}}function Vm(t){var n=t.alternate;n!==null&&(t.alternate=null,Vm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&wa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Wn=!1;function ha(t,n,a){for(a=a.child;a!==null;)Gm(t,n,a),a=a.sibling}function Gm(t,n,a){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:gn||Gi(a,n),ha(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Gi(a,n);var o=rn,u=Wn;Ka(a.type)&&(rn=a.stateNode,Wn=!1),ha(t,n,a),Po(a.stateNode),rn=o,Wn=u;break;case 5:gn||Gi(a,n);case 6:if(o=rn,u=Wn,rn=null,ha(t,n,a),rn=o,Wn=u,rn!==null)if(Wn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Vt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Vt(a,n,f)}break;case 18:rn!==null&&(Wn?(t=rn,O1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):O1(rn,a.stateNode));break;case 4:o=rn,u=Wn,rn=a.stateNode.containerInfo,Wn=!0,ha(t,n,a),rn=o,Wn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),gn||Ga(4,a,n),ha(t,n,a);break;case 1:gn||(Gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pm(a,n,o)),ha(t,n,a);break;case 21:ha(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ha(t,n,a),gn=o;break;default:ha(t,n,a)}}function km(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){Vt(n,n.return,a)}}}function Xm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){Vt(n,n.return,a)}}function P2(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new zm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new zm),n;default:throw Error(r(435,t.tag))}}function Ql(t,n){var a=P2(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=X2.bind(null,t,o);o.then(u,u)}})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,w=_;e:for(;w!==null;){switch(w.tag){case 27:if(Ka(w.type)){rn=w.stateNode,Wn=!1;break e}break;case 5:rn=w.stateNode,Wn=!1;break e;case 3:case 4:rn=w.stateNode.containerInfo,Wn=!0;break e}w=w.return}if(rn===null)throw Error(r(160));Gm(f,_,u),rn=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zm(n,t),n=n.sibling}var wi=null;function Zm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ga(3,t,t.return),Ao(3,t),Ga(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&(gn||a===null||Gi(a,a.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(qn(n,t),Yn(t),o&512&&(gn||a===null||Gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ca]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[fn]=t,hn(f),o=f;break e;case"link":var _=Z1("link","href",u).get(o+(a.href||""));if(_){for(var w=0;w<_.length;w++)if(f=_[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(w,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Z1("meta","content",u).get(o+(a.content||""))){for(w=0;w<_.length;w++)if(f=_[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(w,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[fn]=t,hn(f),o=f}t.stateNode=o}else W1(u,t.type,t.stateNode);else t.stateNode=X1(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?W1(u,t.type,t.stateNode):X1(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&(gn||a===null||Gi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&(gn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{ii(u,"")}catch(qe){Vt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(hc=null,u=wi,wi=uc(n.containerInfo),qn(n,t),wi=u,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(qe){Vt(t,t.return,qe)}Ff&&(Ff=!1,Wm(t));break;case 4:o=wi,wi=uc(t.stateNode.containerInfo),qn(n,t),Yn(t),wi=o;break;case 12:qn(n,t),Yn(t);break;case 31:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=Dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ae=fa,me=gn;if(fa=ae||u,gn=me||V,qn(n,t),gn=me,fa=ae,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||fa||gn||wr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{w=V.stateNode;var xe=V.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(qe){Vt(V,V.return,qe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qe){Vt(V,V.return,qe)}}}else if(n.tag===18){if(a===null){V=n;try{var he=V.stateNode;u?P1(he,!0):P1(V.stateNode,!1)}catch(qe){Vt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Im(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(t);Kl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ii(_,""),a.flags&=-33);var w=Of(t);Kl(t,w,_);break;case 3:case 4:var V=a.stateNode.containerInfo,ae=Of(t);Pf(t,ae,V);break;default:throw Error(r(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hm(t,n.alternate,n),n=n.sibling}function wr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),wr(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pm(n,n.return,a),wr(n);break;case 27:Po(n.stateNode);case 26:case 5:Gi(n,n.return),wr(n);break;case 22:n.memoizedState===null&&wr(n);break;case 30:wr(n);break;default:wr(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),Ao(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Vt(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Ep(V[u],w)}catch(ae){Vt(o,o.return,ae)}}a&&_&64&&Om(f),To(f,f.return);break;case 27:Bm(f);case 26:case 5:pa(u,f,a),a&&o===null&&_&4&&Fm(f),To(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&_&4&&km(u,f);break;case 13:pa(u,f,a),a&&_&4&&Xm(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),To(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(t,n,a,o),n=n.sibling}function qm(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&Ao(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,w=f.onPostCommit;typeof w=="function"&&w(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Vt(n,n.return,V)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Di(t,n,a,o):Ro(t,n):f._visibility&2?Di(t,n,a,o):(f._visibility|=2,ds(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(_,n);break;case 24:Di(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Di(t,n,a,o)}}function ds(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,w=a,V=o,ae=_.flags;switch(_.tag){case 0:case 11:case 15:ds(f,_,w,V,u),Ao(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?ds(f,_,w,V,u):Ro(f,_):(me._visibility|=2,ds(f,_,w,V,u)),u&&ae&2048&&If(_.alternate,_);break;case 24:ds(f,_,w,V,u),u&&ae&2048&&Bf(_.alternate,_);break;default:ds(f,_,w,V,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&If(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Bf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function ps(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)Ym(t,n,a),t=t.sibling}function Ym(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&Co&&t.memoizedState!==null&&Sx(a,wi,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var o=wi;wi=uc(t.stateNode.containerInfo),ps(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,ps(t,n,a),Co=o):ps(t,n,a));break;default:ps(t,n,a)}}function Km(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Jm(o,t)}Km(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qm(t),t=t.sibling}function Qm(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):wo(t);break;default:wo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Jm(o,t)}Km(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Jm(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(Vm(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var F2={getCacheForType:function(t){var n=Cn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(dn).controller.signal}},I2=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Jt=null,vt=null,Mt=0,Ht=0,li=null,ka=!1,ms=!1,zf=!1,ma=0,ln=0,Xa=0,Dr=0,Hf=0,ci=0,gs=0,Do=null,Kn=null,Vf=!1,jl=0,jm=0,$l=1/0,ec=null,Za=null,xn=0,Wa=null,_s=null,ga=0,Gf=0,kf=null,$m=null,Uo=0,Xf=null;function ui(){return(Ut&2)!==0&&Mt!==0?Mt&-Mt:z.T!==null?Qf():$s()}function e1(){if(ci===0)if((Mt&536870912)===0||bt){var t=et;et<<=1,(et&3932160)===0&&(et=262144),ci=t}else ci=536870912;return t=si.current,t!==null&&(t.flags|=32),ci}function Qn(t,n,a){(t===Jt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(vs(t,0),qa(t,Mt,ci,!1)),Xe(t,a),((Ut&2)===0||t!==Jt)&&(t===Jt&&((Ut&2)===0&&(Dr|=a),ln===4&&qa(t,Mt,ci,!1)),ki(t))}function t1(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?H2(t,n):Wf(t,n,!0),f=o;do{if(u===0){ms&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!B2(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var w=t;u=Do;var V=w.current.memoizedState.isDehydrated;if(V&&(vs(w,_).flags|=256),_=Wf(w,_,!1),_!==2){if(zf&&!V){w.errorRecoveryDisabledLanes|=f,Dr|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vs(t,0),qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ci,!ka);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jl+300-Dt(),10<u)){if(qa(o,n,ci,!ka),ge(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=L1(n1.bind(null,o,a,Kn,ec,Vf,n,ci,Dr,gs,ka,f,"Throttled",-0,0),u);break e}n1(o,a,Kn,ec,Vf,n,ci,Dr,gs,ka,f,null,-0,0)}}break}while(!0);ki(t)}function n1(t,n,a,o,u,f,_,w,V,ae,me,xe,ce,he){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Ym(n,f,xe);var qe=(f&62914560)===f?jl-Dt():(f&4194048)===f?jm-Dt():0;if(qe=yx(xe,qe),qe!==null){ga=f,t.cancelPendingCommit=qe(u1.bind(null,t,n,f,a,o,u,_,w,V,me,xe,null,ce,he)),qa(t,f,_,!ae);return}}u1(t,n,f,a,o,u,_,w,V)}function B2(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ai(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Hf,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ft(t,a,n)}function tc(){return(Ut&6)===0?(Lo(0),!1):!0}function Zf(){if(vt!==null){if(Ht===0)var t=vt.return;else t=vt,ra=Sr=null,of(t),ls=null,po=0,t=vt;for(;t!==null;)Nm(t.alternate,t),t=t.return;vt=null}}function vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ax(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,Zf(),Jt=t,vt=a=ia(t.current,null),Mt=n,Ht=0,li=null,ka=!1,ms=Le(t,n),zf=!1,gs=ci=Hf=Dr=Xa=ln=0,Kn=Do=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return ma=n,yl(),a}function i1(t,n){ut=null,z.H=yo,n===os||n===Dl?(n=xp(),Ht=3):n===Yu?(n=xp(),Ht=4):Ht=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,vt===null&&(ln=1,Xl(t,vi(n,t.current)))}function a1(){var t=si.current;return t===null?!0:(Mt&4194048)===Mt?yi===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===yi:!1}function r1(){var t=z.H;return z.H=yo,t===null?yo:t}function s1(){var t=z.A;return z.A=F2,t}function nc(){ln=4,ka||(Mt&4194048)!==Mt&&si.current!==null||(ms=!0),(Xa&134217727)===0&&(Dr&134217727)===0||Jt===null||qa(Jt,Mt,ci,!1)}function Wf(t,n,a){var o=Ut;Ut|=2;var u=r1(),f=s1();(Jt!==t||Mt!==n)&&(ec=null,vs(t,n)),n=!1;var _=ln;e:do try{if(Ht!==0&&vt!==null){var w=vt,V=li;switch(Ht){case 8:Zf(),_=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var ae=Ht;if(Ht=0,li=null,xs(t,w,V,ae),a&&ms){_=0;break e}break;default:ae=Ht,Ht=0,li=null,xs(t,w,V,ae)}}z2(),_=ln;break}catch(me){i1(t,me)}while(!0);return n&&t.shellSuspendCounter++,ra=Sr=null,Ut=o,z.H=u,z.A=f,vt===null&&(Jt=null,Mt=0,yl()),_}function z2(){for(;vt!==null;)o1(vt)}function H2(t,n){var a=Ut;Ut|=2;var o=r1(),u=s1();Jt!==t||Mt!==n?(ec=null,$l=Dt()+500,vs(t,n)):ms=Le(t,n);e:do try{if(Ht!==0&&vt!==null){n=vt;var f=li;t:switch(Ht){case 1:Ht=0,li=null,xs(t,n,f,1);break;case 2:case 9:if(_p(f)){Ht=0,li=null,l1(n);break}n=function(){Ht!==2&&Ht!==9||Jt!==t||(Ht=7),ki(t)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:_p(f)?(Ht=0,li=null,l1(n)):(Ht=0,li=null,xs(t,n,f,7));break;case 5:var _=null;switch(vt.tag){case 26:_=vt.memoizedState;case 5:case 27:var w=vt;if(_?q1(_):w.stateNode.complete){Ht=0,li=null;var V=w.sibling;if(V!==null)vt=V;else{var ae=w.return;ae!==null?(vt=ae,ic(ae)):vt=null}break t}}Ht=0,li=null,xs(t,n,f,5);break;case 6:Ht=0,li=null,xs(t,n,f,6);break;case 8:Zf(),ln=6;break e;default:throw Error(r(462))}}V2();break}catch(me){i1(t,me)}while(!0);return ra=Sr=null,z.H=o,z.A=u,Ut=a,vt!==null?0:(Jt=null,Mt=0,yl(),ln)}function V2(){for(;vt!==null&&!Kt();)o1(vt)}function o1(t){var n=Um(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?ic(t):vt=n}function l1(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Am(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Am(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:of(n);default:Nm(a,n),n=vt=sp(n,ma),n=Um(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?ic(t):vt=n}function xs(t,n,a,o){ra=Sr=null,of(n),ls=null,po=0;var u=n.return;try{if(w2(t,u,n,a,Mt)){ln=1,Xl(t,vi(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;ln=1,Xl(t,vi(a,t.current)),vt=null;return}n.flags&32768?(bt||o===1?t=!0:ms||(Mt&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),c1(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){c1(n,ka);return}t=n.return;var a=L2(n.alternate,n,ma);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);ln===0&&(ln=5)}function c1(t,n){do{var a=N2(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);ln=6,vt=null}function u1(t,n,a,o,u,f,_,w,V){t.cancelPendingCommit=null;do ac();while(xn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Nu,tn(t,a,f,_,w,V),t===Jt&&(vt=Jt=null,Mt=0),_s=n,Wa=t,ga=a,Gf=f,kf=u,$m=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Z2(X,function(){return m1(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=H.p,H.p=2,_=Ut,Ut|=4;try{O2(t,n,a)}finally{Ut=_,H.p=u,z.T=o}}xn=1,f1(),h1(),d1()}}function f1(){if(xn===1){xn=0;var t=Wa,n=_s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var u=Ut;Ut|=4;try{Zm(n,t);var f=ah,_=J0(t.containerInfo),w=f.focusedElem,V=f.selectionRange;if(_!==w&&w&&w.ownerDocument&&Q0(w.ownerDocument.documentElement,w)){if(V!==null&&Cu(w)){var ae=V.start,me=V.end;if(me===void 0&&(me=ae),"selectionStart"in w)w.selectionStart=ae,w.selectionEnd=Math.min(me,w.value.length);else{var xe=w.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var he=ce.getSelection(),qe=w.textContent.length,at=Math.min(V.start,qe),Wt=V.end===void 0?at:Math.min(V.end,qe);!he.extend&&at>Wt&&(_=Wt,Wt=at,at=_);var j=K0(w,at),W=K0(w,Wt);if(j&&W&&(he.rangeCount!==1||he.anchorNode!==j.node||he.anchorOffset!==j.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var ie=xe.createRange();ie.setStart(j.node,j.offset),he.removeAllRanges(),at>Wt?(he.addRange(ie),he.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),he.addRange(ie))}}}}for(xe=[],he=w;he=he.parentNode;)he.nodeType===1&&xe.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xe.length;w++){var ve=xe[w];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}gc=!!ih,ah=ih=null}finally{Ut=u,H.p=o,z.T=a}}t.current=n,xn=2}}function h1(){if(xn===2){xn=0;var t=Wa,n=_s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=H.p;H.p=2;var u=Ut;Ut|=4;try{Hm(t,n.alternate,n)}finally{Ut=u,H.p=o,z.T=a}}xn=3}}function d1(){if(xn===4||xn===3){xn=0,q();var t=Wa,n=_s,a=ga,o=$m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,_s=Wa=null,p1(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),js(a),n=n.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=H.p,H.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var w=o[_];f(w.value,{componentStack:w.stack})}}finally{z.T=n,H.p=u}}(ga&3)!==0&&ac(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Xf?Uo++:(Uo=0,Xf=t):Uo=0,Lo(0)}}function p1(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function ac(){return f1(),h1(),d1(),m1()}function m1(){if(xn!==5)return!1;var t=Wa,n=Gf;Gf=0;var a=js(ga),o=z.T,u=H.p;try{H.p=32>a?32:a,z.T=null,a=kf,kf=null;var f=Wa,_=ga;if(xn=0,_s=Wa=null,ga=0,(Ut&6)!==0)throw Error(r(331));var w=Ut;if(Ut|=4,Qm(f.current),qm(f,f.current,_,a),Ut=w,Lo(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ne,f)}catch{}return!0}finally{H.p=u,z.T=o,p1(t,n)}}function g1(t,n,a){n=vi(a,n),n=yf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Xe(t,2),ki(t))}function Vt(t,n,a){if(t.tag===3)g1(t,t,a);else for(;n!==null;){if(n.tag===3){g1(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=vi(a,t),a=_m(2),o=za(n,a,2),o!==null&&(vm(a,o,n,t),Xe(o,2),ki(o));break}}n=n.return}}function qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new I2;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=G2.bind(null,t,n,a),n.then(t,t))}function G2(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(Mt&a)===a&&(ln===4||ln===3&&(Mt&62914560)===Mt&&300>Dt()-jl?(Ut&2)===0&&vs(t,0):Hf|=a,gs===Mt&&(gs=0)),ki(t)}function _1(t,n){n===0&&(n=ye()),t=vr(t,n),t!==null&&(Xe(t,n),ki(t))}function k2(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_1(t,a)}function X2(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),_1(t,a)}function Z2(t,n){return jt(t,n)}var rc=null,Ms=null,Yf=!1,sc=!1,Kf=!1,Ya=0;function ki(t){t!==Ms&&t.next===null&&(Ms===null?rc=Ms=t:Ms=Ms.next=t),sc=!0,Yf||(Yf=!0,q2())}function Lo(t,n){if(!Kf&&sc){Kf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,S1(o,f))}else f=Mt,f=ge(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Le(o,f)||(a=!0,S1(o,f));o=o.next}while(a);Kf=!1}}function W2(){v1()}function v1(){sc=Yf=!1;var t=0;Ya!==0&&ix()&&(t=Ya);for(var n=Dt(),a=null,o=rc;o!==null;){var u=o.next,f=x1(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(Ms=a)):(a=o,(t!==0||(f&3)!==0)&&(sc=!0)),o=u}xn!==0&&xn!==5||Lo(t),Ya!==0&&(Ya=0)}function x1(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),w=1<<_,V=u[_];V===-1?((w&a)===0||(w&o)!==0)&&(u[_]=Ve(w,n)):V<=n&&(t.expiredLanes|=w),f&=~w}if(n=Jt,a=Mt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Pt(o),js(a)){case 2:case 8:a=y;break;case 32:a=X;break;case 268435456:a=de;break;default:a=X}return o=M1.bind(null,t),a=jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Pt(o),t.callbackPriority=2,t.callbackNode=null,2}function M1(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=Mt;return o=ge(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(t1(t,o,n),x1(t,Dt()),t.callbackNode!=null&&t.callbackNode===a?M1.bind(null,t):null)}function S1(t,n){if(ac())return null;t1(t,n,!0)}function q2(){rx(function(){(Ut&6)!==0?jt(L,W2):v1()})}function Qf(){if(Ya===0){var t=rs;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),Ya=t}return Ya}function y1(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pr(""+t)}function E1(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Y2(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=y1((u[Tn]||null).action),_=o.submitter;_&&(n=(n=_[Tn]||null)?y1(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var w=new vl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var V=_?E1(u,_):new FormData(u);gf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(w.preventDefault(),V=_?E1(u,_):new FormData(u),gf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Jf=0;Jf<Lu.length;Jf++){var jf=Lu[Jf],K2=jf.toLowerCase(),Q2=jf[0].toUpperCase()+jf.slice(1);Ci(K2,"on"+Q2)}Ci(ep,"onAnimationEnd"),Ci(tp,"onAnimationIteration"),Ci(np,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(h2,"onTransitionRun"),Ci(d2,"onTransitionStart"),Ci(p2,"onTransitionCancel"),Ci(ip,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function b1(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var w=o[_],V=w.instance,ae=w.currentTarget;if(w=w.listener,V!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ae;try{f(u)}catch(me){Sl(me)}u.currentTarget=null,f=V}else for(_=0;_<o.length;_++){if(w=o[_],V=w.instance,ae=w.currentTarget,w=w.listener,V!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=ae;try{f(u)}catch(me){Sl(me)}u.currentTarget=null,f=V}}}}function xt(t,n){var a=n[fr];a===void 0&&(a=n[fr]=new Set);var o=t+"__bubble";a.has(o)||(A1(n,t,2,!1),a.add(o))}function $f(t,n,a){var o=0;n&&(o|=4),A1(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[oc]){t[oc]=!0,pl.forEach(function(a){a!=="selectionchange"&&(J2.has(a)||$f(a,!1,t),$f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,$f("selectionchange",!1,n))}}function A1(t,n,a,o){switch(eg(n)){case 2:var u=Ax;break;case 8:u=Tx;break;default:u=mh}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function th(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var w=o.stateNode.containerInfo;if(w===u)break;if(_===4)for(_=o.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;w!==null;){if(_=$i(w),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){o=f=_;continue e}w=w.parentNode}}o=o.return}D0(function(){var ae=f,me=_u(a),xe=[];e:{var ce=ap.get(t);if(ce!==void 0){var he=vl,qe=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":he=Xv;break;case"focusin":qe="focus",he=Eu;break;case"focusout":qe="blur",he=Eu;break;case"beforeblur":case"afterblur":he=Eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=qv;break;case ep:case tp:case np:he=Pv;break;case ip:he=Kv;break;case"scroll":case"scrollend":he=Dv;break;case"wheel":he=Jv;break;case"copy":case"cut":case"paste":he=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=P0;break;case"toggle":case"beforetoggle":he=$v}var at=(n&4)!==0,Wt=!at&&(t==="scroll"||t==="scrollend"),j=at?ce!==null?ce+"Capture":null:ce;at=[];for(var W=ae,ie;W!==null;){var ve=W;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||j===null||(ve=eo(W,j),ve!=null&&at.push(Oo(W,ve,ie))),Wt)break;W=W.return}0<at.length&&(ce=new he(ce,qe,null,a,me),xe.push({event:ce,listeners:at}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",ce&&a!==gu&&(qe=a.relatedTarget||a.fromElement)&&($i(qe)||qe[Xn]))break e;if((he||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,he?(qe=a.relatedTarget||a.toElement,he=ae,qe=qe?$i(qe):null,qe!==null&&(Wt=c(qe),at=qe.tag,qe!==Wt||at!==5&&at!==27&&at!==6)&&(qe=null)):(he=null,qe=ae),he!==qe)){if(at=N0,ve="onMouseLeave",j="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=P0,ve="onPointerLeave",j="onPointerEnter",W="pointer"),Wt=he==null?ce:dr(he),ie=qe==null?ce:dr(qe),ce=new at(ve,W+"leave",he,a,me),ce.target=Wt,ce.relatedTarget=ie,ve=null,$i(me)===ae&&(at=new at(j,W+"enter",qe,a,me),at.target=ie,at.relatedTarget=Wt,ve=at),Wt=ve,he&&qe)t:{for(at=j2,j=he,W=qe,ie=0,ve=j;ve;ve=at(ve))ie++;ve=0;for(var nt=W;nt;nt=at(nt))ve++;for(;0<ie-ve;)j=at(j),ie--;for(;0<ve-ie;)W=at(W),ve--;for(;ie--;){if(j===W||W!==null&&j===W.alternate){at=j;break t}j=at(j),W=at(W)}at=null}else at=null;he!==null&&T1(xe,ce,he,at,!1),qe!==null&&Wt!==null&&T1(xe,Wt,qe,at,!0)}}e:{if(ce=ae?dr(ae):window,he=ce.nodeName&&ce.nodeName.toLowerCase(),he==="select"||he==="input"&&ce.type==="file")var Ct=k0;else if(V0(ce))if(X0)Ct=c2;else{Ct=o2;var Ke=s2}else he=ce.nodeName,!he||he.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ae&&Nt(ae.elementType)&&(Ct=k0):Ct=l2;if(Ct&&(Ct=Ct(t,ae))){G0(xe,Ct,a,me);break e}Ke&&Ke(t,ce,ae),t==="focusout"&&ae&&ce.type==="number"&&ae.memoizedProps.value!=null&&_t(ce,"number",ce.value)}switch(Ke=ae?dr(ae):window,t){case"focusin":(V0(Ke)||Ke.contentEditable==="true")&&(Jr=Ke,wu=ae,lo=null);break;case"focusout":lo=wu=Jr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,j0(xe,a,me);break;case"selectionchange":if(f2)break;case"keydown":case"keyup":j0(xe,a,me)}var ft;if(Au)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Qr?z0(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(F0&&a.locale!=="ko"&&(Qr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Qr&&(ft=U0()):(La=me,Mu="value"in La?La.value:La.textContent,Qr=!0)),Ke=lc(ae,St),0<Ke.length&&(St=new O0(St,t,null,a,me),xe.push({event:St,listeners:Ke}),ft?St.data=ft:(ft=H0(a),ft!==null&&(St.data=ft)))),(ft=t2?n2(t,a):i2(t,a))&&(St=lc(ae,"onBeforeInput"),0<St.length&&(Ke=new O0("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:St}),Ke.data=ft)),Y2(xe,t,ae,a,me)}b1(xe,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,f)),u=eo(t,n),u!=null&&o.push(Oo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function j2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T1(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var w=a,V=w.alternate,ae=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||ae===null||(V=ae,u?(ae=eo(a,f),ae!=null&&_.unshift(Oo(a,ae,V))):u||(ae=eo(a,f),ae!=null&&_.push(Oo(a,ae,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var $2=/\r\n?/g,ex=/\u0000|\uFFFD/g;function R1(t){return(typeof t=="string"?t:""+t).replace($2,`
`).replace(ex,"")}function C1(t,n){return n=R1(n),R1(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ri(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ta);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,Oe(t,a,o))}}function nh(t,n,a,o,u,f){switch(a){case"style":Ri(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ii(t,o):(typeof o=="number"||typeof o=="bigint")&&ii(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,f,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var w=f=_=u=null,V=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":_=me;break;case"checked":V=me;break;case"defaultChecked":ae=me;break;case"value":f=me;break;case"defaultValue":w=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Zt(t,n,o,me,a,null)}}On(t,f,w,V,ae,_,u,!1);return;case"select":xt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":_=w;break;case"multiple":o=w;default:Zt(t,n,u,w,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":xt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(w=a[_],w!=null))switch(_){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Zt(t,n,_,w,a,null)}Ti(t,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,V,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)xt(No[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Zt(t,n,ae,o,a,null)}return;default:if(Nt(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&nh(t,n,me,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Zt(t,n,w,o,a,null))}function tx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,w=null,V=null,ae=null,me=null;for(he in a){var xe=a[he];if(a.hasOwnProperty(he)&&xe!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":V=xe;default:o.hasOwnProperty(he)||Zt(t,n,he,null,o,xe)}}for(var ce in o){var he=o[ce];if(xe=a[ce],o.hasOwnProperty(ce)&&(he!=null||xe!=null))switch(ce){case"type":f=he;break;case"name":u=he;break;case"checked":ae=he;break;case"defaultChecked":me=he;break;case"value":_=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:he!==xe&&Zt(t,n,ce,he,o,xe)}}Ge(t,_,w,V,ae,me,f,u);return;case"select":he=_=w=ce=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":he=V;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ce=f;break;case"defaultValue":w=f;break;case"multiple":_=f;default:f!==V&&Zt(t,n,u,f,o,V)}n=w,a=_,o=he,ce!=null?vn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":he=ce=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Zt(t,n,w,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Zt(t,n,_,u,o,f)}ni(t,ce,he);return;case"option":for(var qe in a)if(ce=a[qe],a.hasOwnProperty(qe)&&ce!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Zt(t,n,qe,null,o,ce)}for(V in o)if(ce=o[V],he=a[V],o.hasOwnProperty(V)&&ce!==he&&(ce!=null||he!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,n,V,ce,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)ce=a[at],a.hasOwnProperty(at)&&ce!=null&&!o.hasOwnProperty(at)&&Zt(t,n,at,null,o,ce);for(ae in o)if(ce=o[ae],he=a[ae],o.hasOwnProperty(ae)&&ce!==he&&(ce!=null||he!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Zt(t,n,ae,ce,o,he)}return;default:if(Nt(n)){for(var Wt in a)ce=a[Wt],a.hasOwnProperty(Wt)&&ce!==void 0&&!o.hasOwnProperty(Wt)&&nh(t,n,Wt,void 0,o,ce);for(me in o)ce=o[me],he=a[me],!o.hasOwnProperty(me)||ce===he||ce===void 0&&he===void 0||nh(t,n,me,ce,o,he);return}}for(var j in a)ce=a[j],a.hasOwnProperty(j)&&ce!=null&&!o.hasOwnProperty(j)&&Zt(t,n,j,null,o,ce);for(xe in o)ce=o[xe],he=a[xe],!o.hasOwnProperty(xe)||ce===he||ce==null&&he==null||Zt(t,n,xe,ce,o,he)}function w1(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,w=u.duration;if(f&&w&&w1(_)){for(_=0,w=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ae=V.startTime;if(ae>w)break;var me=V.transferSize,xe=V.initiatorType;me&&w1(xe)&&(V=V.responseEnd,_+=me*(V<w?1:(w-ae)/(V-ae)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function D1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U1(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function ix(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var L1=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,N1=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof N1<"u"?function(t){return N1.resolve(null).then(t).catch(sx)}:L1;function sx(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function O1(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var _=f.nextSibling,w=f.nodeName;f[Ca]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);bs(n)}function P1(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function oh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),wa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ox(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function lx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function F1(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function lh(t){return t.data==="$?"||t.data==="$~"}function ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var uh=null;function I1(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function B1(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function z1(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);wa(t)}var bi=new Map,H1=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=H.d;H.d={f:ux,r:fx,D:hx,C:dx,L:px,m:mx,X:_x,S:gx,M:vx};function ux(){var t=_a.f(),n=tc();return t||n}function fx(t){var n=ea(t);n!==null&&n.tag===5&&n.type==="form"?im(n):_a.r(t)}var Ss=typeof document>"u"?null:document;function V1(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=Bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H1.has(u)||(H1.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function hx(t){_a.D(t),V1("dns-prefetch",t,null)}function dx(t,n){_a.C(t,n),V1("preconnect",t,n)}function px(t,n,a){_a.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+Bt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Bt(a.imageSizes)+'"]')):u+='[href="'+Bt(t)+'"]';var f=u;switch(n){case"style":f=ys(t);break;case"script":f=Es(t)}bi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function mx(t,n){_a.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Bt(o)+'"][href="'+Bt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Es(t)}if(!bi.has(f)&&(t=x({rel:"modulepreload",href:t},n),bi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function gx(t,n,a){_a.S(t,n,a);var o=Ss;if(o&&t){var u=Da(o).hoistableStyles,f=ys(t);n=n||"default";var _=u.get(f);if(!_){var w={loading:0,preload:null};if(_=o.querySelector(Fo(f)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(f))&&fh(t,a);var V=_=o.createElement("link");hn(V),Dn(V,"link",t),V._p=new Promise(function(ae,me){V.onload=ae,V.onerror=me}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,fc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:w},u.set(f,_)}}}function _x(t,n){_a.X(t,n);var a=Ss;if(a&&t){var o=Da(a).hoistableScripts,u=Es(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=x({src:t,async:!0},n),(n=bi.get(u))&&hh(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function vx(t,n){_a.M(t,n);var a=Ss;if(a&&t){var o=Da(a).hoistableScripts,u=Es(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&hh(t,n),f=a.createElement("script"),hn(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function G1(t,n,a,o){var u=(u=re.current)?uc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ys(a.href);var f=Da(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Fo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),f||xx(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Es(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ys(t){return'href="'+Bt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function k1(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function xx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function Es(t){return'[src="'+Bt(t)+'"]'}function Io(t){return"script[async]"+t}function X1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ys(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=k1(a),(u=bi.get(u))&&fh(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var _=f;return _._p=new Promise(function(w,V){_.onload=w,_.onerror=V}),Dn(f,"link",o),n.state.loading|=4,fc(f,a.precedence,t),n.instance=f;case"script":return f=Es(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,hn(u),u):(o=a,(u=bi.get(f))&&(o=x({},a),hh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var w=o[_];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function fh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function hh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function Z1(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ca]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var w=o.get(_);w?w.push(f):o.set(_,[f])}}return o}function W1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Mx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Sx(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=k1(o),(u=bi.get(u))&&fh(o,u),f=f.createElement("link"),hn(f);var _=f;_._p=new Promise(function(w,V){_.onload=w,_.onerror=V}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function yx(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&dh===0&&(dh=62500*nx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(Ex,t),pc=null,dc.call(t))}function Ex(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Bo={$$typeof:O,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function bx(t,n,a,o,u,f,_,w,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Y1(t,n,a,o,u,f,_,w,V,ae,me,xe){return t=new bx(t,n,a,_,V,ae,me,xe,w),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),t.current=f,f.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ku(f),t}function K1(t){return t?(t=es,t):es}function Q1(t,n,a,o,u,f){u=K1(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Qn(a,t,n),go(a,t,n))}function J1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ph(t,n){J1(t,n),(t=t.alternate)&&J1(t,n)}function j1(t){if(t.tag===13||t.tag===31){var n=vr(t,67108864);n!==null&&Qn(n,t,67108864),ph(t,67108864)}}function $1(t){if(t.tag===13||t.tag===31){var n=ui();n=Js(n);var a=vr(t,n);a!==null&&Qn(a,t,n),ph(t,n)}}var gc=!0;function Ax(t,n,a,o){var u=z.T;z.T=null;var f=H.p;try{H.p=2,mh(t,n,a,o)}finally{H.p=f,z.T=u}}function Tx(t,n,a,o){var u=z.T;z.T=null;var f=H.p;try{H.p=8,mh(t,n,a,o)}finally{H.p=f,z.T=u}}function mh(t,n,a,o){if(gc){var u=gh(o);if(u===null)th(t,n,o,_c,a),tg(t,o);else if(Cx(u,t,n,a,o))o.stopPropagation();else if(tg(t,o),n&4&&-1<Rx.indexOf(t)){for(;u!==null;){var f=ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=De(f.pendingLanes);if(_!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;_;){var V=1<<31-Fe(_);w.entanglements[1]|=V,_&=~V}ki(f),(Ut&6)===0&&($l=Dt()+500,Lo(0))}}break;case 31:case 13:w=vr(f,2),w!==null&&Qn(w,f,2),tc(),ph(f,2)}if(f=gh(o),f===null&&th(t,n,o,_c,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else th(t,n,o,null,a)}}function gh(t){return t=_u(t),_h(t)}var _c=null;function _h(t){if(_c=null,t=$i(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function eg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case L:return 2;case y:return 8;case X:case ee:return 32;case de:return 268435456;default:return 32}default:return 32}}var vh=!1,Qa=null,Ja=null,ja=null,zo=new Map,Ho=new Map,$a=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tg(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Vo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ea(n),n!==null&&j1(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Cx(t,n,a,o,u){switch(n){case"focusin":return Qa=Vo(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Vo(Ja,t,n,a,o,u),!0;case"mouseover":return ja=Vo(ja,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Vo(zo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Vo(Ho.get(f)||null,t,n,a,o,u)),!0}return!1}function ng(t){var n=$i(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,qr(t.priority,function(){$1(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,qr(t.priority,function(){$1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=gh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=ea(a),n!==null&&j1(n),t.blockedOn=a,!1;n.shift()}return!0}function ig(t,n,a){vc(t)&&a.delete(n)}function wx(){vh=!1,Qa!==null&&vc(Qa)&&(Qa=null),Ja!==null&&vc(Ja)&&(Ja=null),ja!==null&&vc(ja)&&(ja=null),zo.forEach(ig),Ho.forEach(ig)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,vh||(vh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wx)))}var Mc=null;function ag(t){Mc!==t&&(Mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Mc===t&&(Mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=ea(a);f!==null&&(t.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function bs(t){function n(V){return xc(V,t)}Qa!==null&&xc(Qa,t),Ja!==null&&xc(Ja,t),ja!==null&&xc(ja,t),zo.forEach(n),Ho.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)ng(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Tn]||null;if(typeof f=="function")_||ag(a);else if(_){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Tn]||null)w=_.formAction;else if(_h(u)!==null)continue}else w=_.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),ag(a)}}}function rg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(t){this._internalRoot=t}Sc.prototype.render=xh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ui();Q1(a,o,t,n,null,null)},Sc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q1(t.current,2,null,t,null,null),tc(),n[Xn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=$s();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&ng(t)}};var sg=e.version;if(sg!=="19.2.0")throw Error(r(527,sg,"19.2.0"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Dx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{ne=yc.inject(Dx),ue=yc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=dm,f=pm,_=mm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Y1(t,1,!1,null,null,a,o,null,u,f,_,rg),t[Xn]=n.current,eh(t),new xh(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=dm,_=pm,w=mm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Y1(t,1,!0,n,a??null,o,u,V,f,_,w,rg),n.context=K1(null),a=n.current,o=ui(),o=Js(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Xe(n,a),ki(n),t[Xn]=n.current,eh(t),new Sc(n)},ko.version="19.2.0",ko}var gg;function Gx(){if(gg)return yh.exports;gg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yh.exports=Vx(),yh.exports}var kx=Gx();const Xx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),T.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),Zx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M220,48V96a12,12,0,0,1-24,0V77l-35.51,35.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM95.51,143.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l35.52-35.51a12,12,0,0,0-17-17ZM208,148a12,12,0,0,0-12,12v19l-35.51-35.52a12,12,0,0,0-17,17L179,196H160a12,12,0,0,0,0,24h48a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM77,60H96a12,12,0,0,0,0-24H48A12,12,0,0,0,36,48V96a12,12,0,0,0,24,0V77l35.51,35.52a12,12,0,0,0,17-17Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),T.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M109.66,146.34a8,8,0,0,1,0,11.32L83.31,184l18.35,18.34A8,8,0,0,1,96,216H48a8,8,0,0,1-8-8V160a8,8,0,0,1,13.66-5.66L72,172.69l26.34-26.35A8,8,0,0,1,109.66,146.34ZM83.31,72l18.35-18.34A8,8,0,0,0,96,40H48a8,8,0,0,0-8,8V96a8,8,0,0,0,13.66,5.66L72,83.31l26.34,26.35a8,8,0,0,0,11.32-11.32ZM208,40H160a8,8,0,0,0-5.66,13.66L172.69,72,146.34,98.34a8,8,0,0,0,11.32,11.32L184,83.31l18.34,18.35A8,8,0,0,0,216,96V48A8,8,0,0,0,208,40Zm3.06,112.61a8,8,0,0,0-8.72,1.73L184,172.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L172.69,184l-18.35,18.34A8,8,0,0,0,160,216h48a8,8,0,0,0,8-8V160A8,8,0,0,0,211.06,152.61Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M214,48V96a6,6,0,0,1-12,0V62.48l-45.76,45.76a6,6,0,0,1-8.48-8.48L193.52,54H160a6,6,0,0,1,0-12h48A6,6,0,0,1,214,48ZM99.76,147.76,54,193.52V160a6,6,0,0,0-12,0v48a6,6,0,0,0,6,6H96a6,6,0,0,0,0-12H62.48l45.76-45.76a6,6,0,0,0-8.48-8.48ZM208,154a6,6,0,0,0-6,6v33.52l-45.76-45.76a6,6,0,0,0-8.48,8.48L193.52,202H160a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,208,154ZM62.48,54H96a6,6,0,0,0,0-12H48a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l45.76,45.76a6,6,0,0,0,8.48-8.48Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,48V96a8,8,0,0,1-16,0V67.31l-42.34,42.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM98.34,146.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l42.35-42.34a8,8,0,0,0-11.32-11.32ZM208,152a8,8,0,0,0-8,8v28.69l-42.34-42.35a8,8,0,0,0-11.32,11.32L188.69,200H160a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152ZM67.31,56H96a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31l42.34,42.35a8,8,0,0,0,11.32-11.32Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M212,48V96a4,4,0,0,1-8,0V57.66l-49.17,49.17a4,4,0,0,1-5.66-5.66L198.34,52H160a4,4,0,0,1,0-8h48A4,4,0,0,1,212,48ZM101.17,149.17,52,198.34V160a4,4,0,0,0-8,0v48a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8H57.66l49.17-49.17a4,4,0,0,0-5.66-5.66ZM208,156a4,4,0,0,0-4,4v38.34l-49.17-49.17a4,4,0,0,0-5.66,5.66L198.34,204H160a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,208,156ZM57.66,52H96a4,4,0,0,0,0-8H48a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l49.17,49.17a4,4,0,0,0,5.66-5.66Z"}))]]),Wx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M241,150.65s0,0,0-.05a51.33,51.33,0,0,0-2.53-5.9L196.93,50.18a12,12,0,0,0-2.5-3.65,36,36,0,0,0-50.92,0A12,12,0,0,0,140,55V76H116V55a12,12,0,0,0-3.51-8.48,36,36,0,0,0-50.92,0,12,12,0,0,0-2.5,3.65L17.53,144.7A51.33,51.33,0,0,0,15,150.6s0,0,0,.05A52,52,0,1,0,116,168V100h24v68a52,52,0,1,0,101-17.35ZM80,62.28a12,12,0,0,1,12-1.22v63.15a51.9,51.9,0,0,0-35.9-7.62ZM64,196a28,28,0,1,1,28-28A28,28,0,0,1,64,196ZM164,61.06a12.06,12.06,0,0,1,12,1.22l23.87,54.31a51.9,51.9,0,0,0-35.9,7.62ZM192,196a28,28,0,1,1,28-28A28,28,0,0,1,192,196Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M104,168a40,40,0,1,1-40-40A40,40,0,0,1,104,168Zm88-40a40,40,0,1,0,40,40A40,40,0,0,0,192,128Z",opacity:"0.2"}),T.createElement("path",{d:"M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M237.22,151.9l0-.1a1.42,1.42,0,0,0-.07-.22,48.46,48.46,0,0,0-2.31-5.3L193.27,51.8a8,8,0,0,0-1.67-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,8,8,0,0,0-1.67,2.44L21.2,146.28a48.46,48.46,0,0,0-2.31,5.3,1.72,1.72,0,0,0-.07.21s0,.08,0,.11a48,48,0,0,0,90.32,32.51,47.49,47.49,0,0,0,2.9-16.59V96h32v71.83a47.49,47.49,0,0,0,2.9,16.59,48,48,0,0,0,90.32-32.51Zm-143.15,27a32,32,0,0,1-60.2-21.71l1.81-4.13A32,32,0,0,1,96,167.88V168h0A32,32,0,0,1,94.07,178.94ZM203,198.07A32,32,0,0,1,160,168h0v-.11a32,32,0,0,1,60.32-14.78l1.81,4.13A32,32,0,0,1,203,198.07Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M233,147.24,191.43,52.6a6,6,0,0,0-1.25-1.83,30,30,0,0,0-42.42,0A6,6,0,0,0,146,55V82H110V55a6,6,0,0,0-1.76-4.25,30,30,0,0,0-42.42,0,6,6,0,0,0-1.25,1.83L23,147.24A46,46,0,1,0,110,168V94h36v74a46,46,0,1,0,87-20.76ZM64,202a34,34,0,1,1,34-34A34,34,0,0,1,64,202Zm0-80a45.77,45.77,0,0,0-18.55,3.92L75.06,58.54A18,18,0,0,1,98,57.71V137A45.89,45.89,0,0,0,64,122Zm94-64.28a18,18,0,0,1,22.94.83l29.61,67.37A45.9,45.9,0,0,0,158,137ZM192,202a34,34,0,1,1,34-34A34,34,0,0,1,192,202Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M237.2,151.87v0a47.1,47.1,0,0,0-2.35-5.45L193.26,51.8a7.82,7.82,0,0,0-1.66-2.44,32,32,0,0,0-45.26,0A8,8,0,0,0,144,55V80H112V55a8,8,0,0,0-2.34-5.66,32,32,0,0,0-45.26,0,7.82,7.82,0,0,0-1.66,2.44L21.15,146.4a47.1,47.1,0,0,0-2.35,5.45v0A48,48,0,1,0,112,168V96h32v72a48,48,0,1,0,93.2-16.13ZM76.71,59.75a16,16,0,0,1,19.29-1v73.51a47.9,47.9,0,0,0-46.79-9.92ZM64,200a32,32,0,1,1,32-32A32,32,0,0,1,64,200ZM160,58.74a16,16,0,0,1,19.29,1l27.5,62.58A47.9,47.9,0,0,0,160,132.25ZM192,200a32,32,0,1,1,32-32A32,32,0,0,1,192,200Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M231.22,148.09,189.6,53.41a3.94,3.94,0,0,0-.83-1.22,28,28,0,0,0-39.6,0A4,4,0,0,0,148,55V84H108V55a4,4,0,0,0-1.17-2.83,28,28,0,0,0-39.6,0,3.94,3.94,0,0,0-.83,1.22L24.78,148.09A44,44,0,1,0,108,168V92h40v76a44,44,0,1,0,83.22-19.91ZM64,204a36,36,0,1,1,36-36A36,36,0,0,1,64,204Zm0-80a43.78,43.78,0,0,0-22.66,6.3L73.4,57.35a20,20,0,0,1,26.6-.59v86A44,44,0,0,0,64,124Zm92-67.23a20,20,0,0,1,26.6.59l32.06,72.94A43.92,43.92,0,0,0,156,142.74ZM192,204a36,36,0,1,1,36-36A36,36,0,0,1,192,204Z"}))]]),qx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232,56V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V56H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z",opacity:"0.2"}),T.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M240,56V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v87.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V80a32,32,0,0,1,32-32h64A8,8,0,0,1,240,56Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232,50H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,50H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V56A6,6,0,0,0,232,50ZM96,194H30V62H96a26,26,0,0,1,26,26V204.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.87,37.87,0,0,0-26,10.32V88a26,26,0,0,1,26-26h66Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"}))]]),Yx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),T.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),Kx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),T.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),Qx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",opacity:"0.2"}),T.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"}))]]),Jx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),T.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),jx=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M156,112a12,12,0,0,1-12,12H124v20a12,12,0,0,1-24,0V124H80a12,12,0,0,1,0-24h20V80a12,12,0,0,1,24,0v20h20A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),T.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM144,120H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M150,112a6,6,0,0,1-6,6H118v26a6,6,0,0,1-12,0V118H80a6,6,0,0,1,0-12h26V80a6,6,0,0,1,12,0v26h26A6,6,0,0,1,150,112Zm78.24,116.24a6,6,0,0,1-8.48,0l-51.38-51.38a86.15,86.15,0,1,1,8.48-8.48l51.38,51.38A6,6,0,0,1,228.24,228.24ZM112,186a74,74,0,1,0-74-74A74.09,74.09,0,0,0,112,186Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M152,112a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Zm77.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88.11,88.11,0,1,1,11.31-11.31l50.07,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M148,112a4,4,0,0,1-4,4H116v28a4,4,0,0,1-8,0V116H80a4,4,0,0,1,0-8h28V80a4,4,0,0,1,8,0v28h28A4,4,0,0,1,148,112Zm78.83,114.83a4,4,0,0,1-5.66,0l-52.7-52.7a84.1,84.1,0,1,1,5.66-5.66l52.7,52.7A4,4,0,0,1,226.83,226.83ZM112,188a76,76,0,1,0-76-76A76.08,76.08,0,0,0,112,188Z"}))]]),$x=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),T.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"}))]]),eM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H140V36h4A44.05,44.05,0,0,1,188,80ZM112,36h4v64H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H188v52A44.05,44.05,0,0,1,144,220Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M200,112v64a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V112Z",opacity:"0.2"}),T.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,62v26H134V30h10A50.06,50.06,0,0,1,194,80ZM112,30h10v76H62V80A50.06,50.06,0,0,1,112,30Zm32,196H112a50.06,50.06,0,0,1-50-50V118H194v58A50.06,50.06,0,0,1,144,226Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120H192v56A48.05,48.05,0,0,1,144,224Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,60v28H132V28h12A52.06,52.06,0,0,1,196,80ZM112,28h12v80H60V80A52.06,52.06,0,0,1,112,28Zm32,200H112a52.06,52.06,0,0,1-52-52V116H196v60A52.06,52.06,0,0,1,144,228Z"}))]]),tM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),T.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),nM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),T.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),iM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.46L92,162.13V93.87l48-37.33ZM212,128a44,44,0,0,1-11,29.11,12,12,0,1,1-18-15.88,20,20,0,0,0,0-26.43,12,12,0,0,1,18-15.86A43.94,43.94,0,0,1,212,128Zm40,0a83.87,83.87,0,0,1-21.39,56,12,12,0,0,1-17.89-16,60,60,0,0,0,0-80,12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z",opacity:"0.2"}),T.createElement("path",{d:"M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Zm126.77,20.84a8,8,0,0,0-.72,11.3,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88A8,8,0,0,0,186.74,100.84Zm40.89-26.17a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M154.64,26.61a6,6,0,0,0-6.32.65L77.94,82H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V32A6,6,0,0,0,154.64,26.61ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l60-46.66Zm50.53-108.85a38,38,0,0,1,0,50.24,6,6,0,1,1-9-7.94,26,26,0,0,0,0-34.37,6,6,0,0,1,9-7.93ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M153.76,28.41a4,4,0,0,0-4.22.43L78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V32A4,4,0,0,0,153.76,28.41ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l64-49.78Zm47-111.61a36,36,0,0,1,0,47.59,4,4,0,1,1-6-5.3,28,28,0,0,0,0-37,4,4,0,0,1,6-5.28ZM244,128a75.88,75.88,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,68,68,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.88,75.88,0,0,1,244,128Z"}))]]),aM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M56.88,31.93A12,12,0,1,0,39.12,48.07L64.51,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V185.44l35.12,38.63a12,12,0,0,0,17.76-16.14ZM36,100H68v56H36Zm104,99.46L92,162.13V106.24L140,159Zm-31-134a12,12,0,0,1,2.11-16.84l33.51-26.07A12,12,0,0,1,164,32V94.94a12,12,0,0,1-24,0V56.54l-14.15,11A12,12,0,0,1,109,65.44Zm74,49.35a12,12,0,0,1,18-15.85,44,44,0,0,1,5.55,50.21,12,12,0,0,1-21-11.55A19.67,19.67,0,0,0,188,128,20,20,0,0,0,183,114.79ZM252,128a84.18,84.18,0,0,1-19.11,53.35,12,12,0,1,1-18.53-15.25A60,60,0,0,0,212.73,88a12,12,0,1,1,17.88-16A83.87,83.87,0,0,1,252,128Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M80,88v80H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8Z",opacity:"0.2"}),T.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M213.92,210.62a8,8,0,1,1-11.84,10.76L160,175.09v48.6a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.55-51A4,4,0,0,1,80,176.18V87.09L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-27.21-55.46a8,8,0,0,0,11.29-.7,40,40,0,0,0,0-52.88,8,8,0,1,0-12,10.57,24,24,0,0,1,0,31.72A8,8,0,0,0,186.71,155.16Zm40.92-80.49a8,8,0,1,0-11.92,10.66,64,64,0,0,1,0,85.34,8,8,0,1,0,11.92,10.66,80,80,0,0,0,0-106.66ZM153,119.87a4,4,0,0,0,7-2.7V32.25a8.27,8.27,0,0,0-2.88-6.4,8,8,0,0,0-10-.16L103.83,59.33a4,4,0,0,0-.5,5.85ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M52.44,36A6,6,0,0,0,43.56,44L78,81.94l-.08.06H32A14,14,0,0,0,18,96v64a14,14,0,0,0,14,14H77.94l70.38,54.74A6,6,0,0,0,158,224V169.92L203.56,220a6,6,0,0,0,8.88-8.08ZM30,160V96a2,2,0,0,1,2-2H74v68H32A2,2,0,0,1,30,160Zm116,51.73L86,165.07V90.93l.11-.08L146,156.72Zm41.5-66.53a26,26,0,0,0,0-34.37,6,6,0,1,1,9-7.93,38,38,0,0,1,0,50.24,6,6,0,0,1-9-7.94ZM107.41,66.68a6,6,0,0,1,1.06-8.42l39.85-31A6,6,0,0,1,158,32v74.83a6,6,0,0,1-12,0V44.27L115.83,67.73A6,6,0,0,1,107.41,66.68ZM246,128a77.86,77.86,0,0,1-19.86,52,6,6,0,1,1-8.94-8,66,66,0,0,0,0-88,6,6,0,1,1,8.94-8A77.86,77.86,0,0,1,246,128Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M53.92,34.62A8,8,0,1,0,42.08,45.38L73.55,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V175.09l42.08,46.29a8,8,0,1,0,11.84-10.76ZM32,96H72v64H32ZM144,207.64,88,164.09V95.89l56,61.6Zm42-63.77a24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.57,40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.59Zm-80.16-76a8,8,0,0,1,1.4-11.23l39.85-31A8,8,0,0,1,160,32v74.83a8,8,0,0,1-16,0V48.36l-26.94,21A8,8,0,0,1,105.84,67.91ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M51,37.31A4,4,0,0,0,45,42.69L81,82.19,78.63,84H32A12,12,0,0,0,20,96v64a12,12,0,0,0,12,12H78.63l70.91,55.16A4.07,4.07,0,0,0,152,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,156,224V164.75l49,53.94a4,4,0,1,0,5.92-5.38ZM28,160V96a4,4,0,0,1,4-4H76v72H32A4,4,0,0,1,28,160Zm120,55.82L84,166V90l2.35-1.83L148,156Zm41-69.3a28,28,0,0,0,0-37,4,4,0,1,1,6-5.29,36,36,0,0,1,0,47.59,4,4,0,1,1-6-5.29ZM109,65.45a4,4,0,0,1,.7-5.61l39.85-31A4,4,0,0,1,156,32v74.83a4,4,0,0,1-8,0V40.18l-33.39,26A4,4,0,0,1,109,65.45ZM244,128a75.88,75.88,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,68,68,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.88,75.88,0,0,1,244,128Z"}))]]),rM=new Map([["bold",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",T.createElement(T.Fragment,null,T.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),T.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",T.createElement(T.Fragment,null,T.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",T.createElement(T.Fragment,null,T.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",T.createElement(T.Fragment,null,T.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",T.createElement(T.Fragment,null,T.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),sM=T.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ln=T.forwardRef((s,e)=>{const{alt:i,color:r,size:l,weight:c,mirrored:h,children:p,weights:m,...d}=s,{color:v="currentColor",size:x,weight:g="regular",mirrored:E=!1,...A}=T.useContext(sM);return T.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:l??x,height:l??x,fill:r??v,viewBox:"0 0 256 256",transform:h||E?"scale(-1, 1)":void 0,...A,...d},!!i&&T.createElement("title",null,i),p,m.get(c??g))});Ln.displayName="IconBase";const L_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Xx}));L_.displayName="ArrowRightIcon";const oM=L_,N_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Zx}));N_.displayName="ArrowsOutIcon";const lM=N_,O_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Wx}));O_.displayName="BinocularsIcon";const cM=O_,P_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:qx}));P_.displayName="BookOpenIcon";const _g=P_,F_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Yx}));F_.displayName="CaretDownIcon";const vg=F_,I_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Kx}));I_.displayName="EyeIcon";const uM=I_,B_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Qx}));B_.displayName="HouseIcon";const fM=B_,z_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:Jx}));z_.displayName="MagnifyingGlassIcon";const hM=z_,H_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:jx}));H_.displayName="MagnifyingGlassPlusIcon";const xg=H_,V_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:$x}));V_.displayName="MinusIcon";const dM=V_,G_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:eM}));G_.displayName="MouseIcon";const Mg=G_,k_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:tM}));k_.displayName="PlanetIcon";const pM=k_,X_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:nM}));X_.displayName="PlusIcon";const mM=X_,Z_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:iM}));Z_.displayName="SpeakerHighIcon";const gM=Z_,W_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:aM}));W_.displayName="SpeakerSlashIcon";const _M=W_,q_=T.forwardRef((s,e)=>T.createElement(Ln,{ref:e,...s,weights:rM}));q_.displayName="XIcon";const Sg=q_;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const t0="185",vM=0,yg=1,xM=2,Qc=1,MM=2,tl=3,cr=0,jn=1,Oi=2,ba=0,Gs=1,Eg=2,bg=3,Ag=4,SM=5,Fr=100,yM=101,EM=102,bM=103,AM=104,TM=200,RM=201,CM=202,wM=203,od=204,ld=205,DM=206,UM=207,LM=208,NM=209,OM=210,PM=211,FM=212,IM=213,BM=214,cd=0,ud=1,fd=2,Zs=3,hd=4,dd=5,pd=6,md=7,Y_=0,zM=1,HM=2,Yi=0,K_=1,Q_=2,J_=3,n0=4,j_=5,$_=6,ev=7,tv=300,Vr=301,Ws=302,Th=303,Rh=304,uu=306,gd=1e3,Ea=1001,_d=1002,Un=1003,VM=1004,Ec=1005,zn=1006,Ch=1007,Br=1008,mi=1009,nv=1010,iv=1011,sl=1012,i0=1013,Qi=1014,Fi=1015,Ta=1016,a0=1017,r0=1018,ol=1020,av=35902,rv=35899,sv=1021,ov=1022,Ii=1023,Ra=1026,zr=1027,s0=1028,o0=1029,Gr=1030,l0=1031,c0=1033,Jc=33776,jc=33777,$c=33778,eu=33779,vd=35840,xd=35841,Md=35842,Sd=35843,yd=36196,Ed=37492,bd=37496,Ad=37488,Td=37489,nu=37490,Rd=37491,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,Fd=37816,Id=37817,Bd=37818,zd=37819,Hd=37820,Vd=37821,Gd=36492,kd=36494,Xd=36495,Zd=36283,Wd=36284,iu=36285,qd=36286,GM=3200,Yd=0,kM=1,or="",Jn="srgb",au="srgb-linear",ru="linear",Gt="srgb",As=7680,Tg=519,XM=512,ZM=513,WM=514,u0=515,qM=516,YM=517,f0=518,KM=519,Rg=35044,Cg="300 es",qi=2e3,ll=2001;function QM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JM(){const s=cl("canvas");return s.style.display="block",s}const wg={};function Dg(...s){const e="THREE."+s.shift();console.log(e,...s)}function lv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=lv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=lv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ks(...s){const e=s.join(" ");e in wg||(wg[e]=!0,rt(...s))}function jM(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const $M={[cd]:ud,[fd]:pd,[hd]:md,[Zs]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:Zs};class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ug=1234567;const il=Math.PI/180,ul=180/Math.PI;function Ks(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function h0(s,e){return(s%e+e)%e}function eS(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function tS(s,e,i){return s!==e?(i-s)/(e-s):0}function al(s,e,i){return(1-i)*s+i*e}function nS(s,e,i,r){return al(s,e,1-Math.exp(-i*r))}function iS(s,e=1){return e-Math.abs(h0(s,e*2)-e)}function aS(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function rS(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function sS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function oS(s,e){return s+Math.random()*(e-s)}function lS(s){return s*(.5-Math.random())}function cS(s){s!==void 0&&(Ug=s);let e=Ug+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uS(s){return s*il}function fS(s){return s*ul}function hS(s){return(s&s-1)===0&&s!==0}function dS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mS(s,e,i,r,l){const c=Math.cos,h=Math.sin,p=c(i/2),m=h(i/2),d=c((e+r)/2),v=h((e+r)/2),x=c((e-r)/2),g=h((e-r)/2),E=c((r-e)/2),A=h((r-e)/2);switch(l){case"XYX":s.set(p*v,m*x,m*g,p*d);break;case"YZY":s.set(m*g,p*v,m*x,p*d);break;case"ZXZ":s.set(m*x,m*g,p*v,p*d);break;case"XZX":s.set(p*v,m*A,m*E,p*d);break;case"YXY":s.set(m*E,p*v,m*A,p*d);break;case"ZYZ":s.set(m*A,m*E,p*v,p*d);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Vs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xo={DEG2RAD:il,RAD2DEG:ul,generateUUID:Ks,clamp:yt,euclideanModulo:h0,mapLinear:eS,inverseLerp:tS,lerp:al,damp:nS,pingpong:iS,smoothstep:aS,smootherstep:rS,randInt:sS,randFloat:oS,randFloatSpread:lS,seededRandom:cS,degToRad:uS,radToDeg:fS,isPowerOfTwo:hS,ceilPowerOfTwo:dS,floorPowerOfTwo:pS,setQuaternionFromProperEuler:mS,normalize:Gn,denormalize:Vs},b0=class b0{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};b0.prototype.isVector2=!0;let mt=b0;class ur{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,p){let m=r[l+0],d=r[l+1],v=r[l+2],x=r[l+3],g=c[h+0],E=c[h+1],A=c[h+2],D=c[h+3];if(x!==D||m!==g||d!==E||v!==A){let b=m*g+d*E+v*A+x*D;b<0&&(g=-g,E=-E,A=-A,D=-D,b=-b);let M=1-p;if(b<.9995){const P=Math.acos(b),O=Math.sin(P);M=Math.sin(M*P)/O,p=Math.sin(p*P)/O,m=m*M+g*p,d=d*M+E*p,v=v*M+A*p,x=x*M+D*p}else{m=m*M+g*p,d=d*M+E*p,v=v*M+A*p,x=x*M+D*p;const P=1/Math.sqrt(m*m+d*d+v*v+x*x);m*=P,d*=P,v*=P,x*=P}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,h){const p=r[l],m=r[l+1],d=r[l+2],v=r[l+3],x=c[h],g=c[h+1],E=c[h+2],A=c[h+3];return e[i]=p*A+v*x+m*E-d*g,e[i+1]=m*A+v*g+d*x-p*E,e[i+2]=d*A+v*E+p*g-m*x,e[i+3]=v*A-p*x-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(r/2),v=p(l/2),x=p(c/2),g=m(r/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=g*v*x+d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x-g*E*A;break;case"YXZ":this._x=g*v*x+d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x+g*E*A;break;case"ZXY":this._x=g*v*x-d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x-g*E*A;break;case"ZYX":this._x=g*v*x-d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x+g*E*A;break;case"YZX":this._x=g*v*x+d*E*A,this._y=d*E*x+g*v*A,this._z=d*v*A-g*E*x,this._w=d*v*x-g*E*A;break;case"XZY":this._x=g*v*x-d*E*A,this._y=d*E*x-g*v*A,this._z=d*v*A+g*E*x,this._w=d*v*x+g*E*A;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],x=i[10],g=r+p+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(r>p&&r>x){const E=2*Math.sqrt(1+r-p-x);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>x){const E=2*Math.sqrt(1+p-r-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+x-r-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=r*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-r*d,this._z=c*v+h*d+r*m-l*p,this._w=h*v-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const A0=class A0{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Lg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*r),v=2*(p*i-c*l),x=2*(c*r-h*i);return this.x=i+m*d+h*x-p*v,this.y=r+m*v+p*d-c*x,this.z=l+m*x+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-r*m,this.z=r*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};A0.prototype.isVector3=!0;let K=A0;const wh=new K,Lg=new ur,T0=class T0{constructor(e,i,r,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d)}set(e,i,r,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],v=r[4],x=r[7],g=r[2],E=r[5],A=r[8],D=l[0],b=l[3],M=l[6],P=l[1],O=l[4],C=l[7],B=l[2],U=l[5],I=l[8];return c[0]=h*D+p*P+m*B,c[3]=h*b+p*O+m*U,c[6]=h*M+p*C+m*I,c[1]=d*D+v*P+x*B,c[4]=d*b+v*O+x*U,c[7]=d*M+v*C+x*I,c[2]=g*D+E*P+A*B,c[5]=g*b+E*O+A*U,c[8]=g*M+E*C+A*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-r*c*v+r*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=v*h-p*d,g=p*m-v*c,E=d*c-h*m,A=i*x+r*g+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=x*D,e[1]=(l*d-v*r)*D,e[2]=(p*r-l*h)*D,e[3]=g*D,e[4]=(v*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=E*D,e[7]=(r*m-d*i)*D,e[8]=(h*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,i)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,i){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};T0.prototype.isMatrix3=!0;let ot=T0;const Dh=new ot,Ng=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Og=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gS(){const s={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Gt&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[au]:{primaries:e,whitePoint:r,transfer:ru,toXYZ:Ng,fromXYZ:Og,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:Ng,fromXYZ:Og,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const At=gS();function Aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class _S{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=cl("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Aa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class d0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Uh(l[h].image)):c.push(Uh(l[h]))}else c=Uh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_S.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let xS=0;const Lh=new K;class Hn extends kr{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Ea,l=Ea,c=zn,h=Br,p=Ii,m=mi,d=Hn.DEFAULT_ANISOTROPY,v=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Ks(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=tv;Hn.DEFAULT_ANISOTROPY=1;const R0=class R0{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,d=m[0],v=m[4],x=m[8],g=m[1],E=m[5],A=m[9],D=m[2],b=m[6],M=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-D)<.01&&Math.abs(A-b)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+D)<.1&&Math.abs(A+b)<.1&&Math.abs(d+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(d+1)/2,C=(E+1)/2,B=(M+1)/2,U=(v+g)/4,I=(x+D)/4,S=(A+b)/4;return O>C&&O>B?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=U/r,c=I/r):C>B?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=U/l,c=S/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=I/c,l=S/c),this.set(r,l,c,i),this}let P=Math.sqrt((b-A)*(b-A)+(x-D)*(x-D)+(g-v)*(g-v));return Math.abs(P)<.001&&(P=1),this.x=(b-A)/P,this.y=(x-D)/P,this.z=(g-v)/P,this.w=Math.acos((d+E+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};R0.prototype.isVector4=!0;let sn=R0;class MS extends kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Hn(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new d0(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends MS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class cv extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,r,l,c,h,p,m,d,v,x,g,E,A,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,p,m,d,v,x,g,E,A,D,b)}set(e,i,r,l,c,h,p,m,d,v,x,g,E,A,D,b){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=c,M[5]=h,M[9]=p,M[13]=m,M[2]=d,M[6]=v,M[10]=x,M[14]=g,M[3]=E,M[7]=A,M[11]=D,M[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),h=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*x,A=p*v,D=p*x;i[0]=m*v,i[4]=-m*x,i[8]=d,i[1]=E+A*d,i[5]=g-D*d,i[9]=-p*m,i[2]=D-g*d,i[6]=A+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*x,A=d*v,D=d*x;i[0]=g+D*p,i[4]=A*p-E,i[8]=h*d,i[1]=h*x,i[5]=h*v,i[9]=-p,i[2]=E*p-A,i[6]=D+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*x,A=d*v,D=d*x;i[0]=g-D*p,i[4]=-h*x,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*v,i[9]=D-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*x,A=p*v,D=p*x;i[0]=m*v,i[4]=A*d-E,i[8]=g*d+D,i[1]=m*x,i[5]=D*d+g,i[9]=E*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=D-g*x,i[8]=A*x+E,i[1]=x,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*x+A,i[10]=g-D*x}else if(e.order==="XZY"){const g=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*v,i[4]=-x,i[8]=d*v,i[1]=g*x+D,i[5]=h*v,i[9]=E*x-A,i[2]=A*x-E,i[6]=p*v,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,ES)}lookAt(e,i,r){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),tr.crossVectors(r,fi),tr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),tr.crossVectors(r,fi)),tr.normalize(),bc.crossVectors(fi,tr),l[0]=tr.x,l[4]=bc.x,l[8]=fi.x,l[1]=tr.y,l[5]=bc.y,l[9]=fi.y,l[2]=tr.z,l[6]=bc.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],v=r[1],x=r[5],g=r[9],E=r[13],A=r[2],D=r[6],b=r[10],M=r[14],P=r[3],O=r[7],C=r[11],B=r[15],U=l[0],I=l[4],S=l[8],N=l[12],k=l[1],G=l[5],Q=l[9],fe=l[13],pe=l[2],$=l[6],z=l[10],H=l[14],te=l[3],_e=l[7],be=l[11],F=l[15];return c[0]=h*U+p*k+m*pe+d*te,c[4]=h*I+p*G+m*$+d*_e,c[8]=h*S+p*Q+m*z+d*be,c[12]=h*N+p*fe+m*H+d*F,c[1]=v*U+x*k+g*pe+E*te,c[5]=v*I+x*G+g*$+E*_e,c[9]=v*S+x*Q+g*z+E*be,c[13]=v*N+x*fe+g*H+E*F,c[2]=A*U+D*k+b*pe+M*te,c[6]=A*I+D*G+b*$+M*_e,c[10]=A*S+D*Q+b*z+M*be,c[14]=A*N+D*fe+b*H+M*F,c[3]=P*U+O*k+C*pe+B*te,c[7]=P*I+O*G+C*$+B*_e,c[11]=P*S+O*Q+C*z+B*be,c[15]=P*N+O*fe+C*H+B*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],x=e[6],g=e[10],E=e[14],A=e[3],D=e[7],b=e[11],M=e[15],P=m*E-d*g,O=p*E-d*x,C=p*g-m*x,B=h*E-d*v,U=h*g-m*v,I=h*x-p*v;return i*(D*P-b*O+M*C)-r*(A*P-b*B+M*U)+l*(A*O-D*B+M*I)-c*(A*C-D*U+b*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-r*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],x=e[9],g=e[10],E=e[11],A=e[12],D=e[13],b=e[14],M=e[15],P=i*p-r*h,O=i*m-l*h,C=i*d-c*h,B=r*m-l*p,U=r*d-c*p,I=l*d-c*m,S=v*D-x*A,N=v*b-g*A,k=v*M-E*A,G=x*b-g*D,Q=x*M-E*D,fe=g*M-E*b,pe=P*fe-O*Q+C*G+B*k-U*N+I*S;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/pe;return e[0]=(p*fe-m*Q+d*G)*$,e[1]=(l*Q-r*fe-c*G)*$,e[2]=(D*I-b*U+M*B)*$,e[3]=(g*U-x*I-E*B)*$,e[4]=(m*k-h*fe-d*N)*$,e[5]=(i*fe-l*k+c*N)*$,e[6]=(b*C-A*I-M*O)*$,e[7]=(v*I-g*C+E*O)*$,e[8]=(h*Q-p*k+d*S)*$,e[9]=(r*k-i*Q-c*S)*$,e[10]=(A*U-D*C+M*P)*$,e[11]=(x*C-v*U-E*P)*$,e[12]=(p*N-h*G-m*S)*$,e[13]=(i*G-r*N+l*S)*$,e[14]=(D*O-A*B-b*P)*$,e[15]=(v*B-x*O+g*P)*$,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+r,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,x=p+p,g=c*d,E=c*v,A=c*x,D=h*v,b=h*x,M=p*x,P=m*d,O=m*v,C=m*x,B=r.x,U=r.y,I=r.z;return l[0]=(1-(D+M))*B,l[1]=(E+C)*B,l[2]=(A-O)*B,l[3]=0,l[4]=(E-C)*U,l[5]=(1-(g+M))*U,l[6]=(b+P)*U,l[7]=0,l[8]=(A+O)*I,l[9]=(b-P)*I,l[10]=(1-(g+D))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Rs.set(l[0],l[1],l[2]).length();const p=Rs.set(l[4],l[5],l[6]).length(),m=Rs.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ui.copy(this);const d=1/h,v=1/p,x=1/m;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,i.setFromRotationMatrix(Ui),r.x=h,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,h,p=qi,m=!1){const d=this.elements,v=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let A,D;if(m)A=c/(h-c),D=h*c/(h-c);else if(p===qi)A=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(p===ll)A=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,c,h,p=qi,m=!1){const d=this.elements,v=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,D;if(m)A=1/(h-c),D=h/(h-c);else if(p===qi)A=-2/(h-c),D=-(h+c)/(h-c);else if(p===ll)A=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};cu.prototype.isMatrix4=!0;let Ot=cu;const Rs=new K,Ui=new Ot,yS=new K(0,0,0),ES=new K(1,1,1),tr=new K,bc=new K,fi=new K,Pg=new Ot,Fg=new ur;class Ji{constructor(e=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],x=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Pg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class p0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bS=0;const Ig=new K,Cs=new ur,va=new Ot,Ac=new K,Zo=new K,AS=new K,TS=new ur,Bg=new K(1,0,0),zg=new K(0,1,0),Hg=new K(0,0,1),Vg={type:"added"},RS={type:"removed"},ws={type:"childadded",child:null},Nh={type:"childremoved",child:null};class An extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new K,i=new Ji,r=new ur,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,i){return Cs.setFromAxisAngle(e,i),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,i){return Ig.copy(e).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Zo,Ac,this.up):va.lookAt(Ac,Zo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Cs.setFromRotationMatrix(va),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vg),ws.child=e,this.dispatchEvent(ws),ws.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RS),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vg),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),x=h(e.shapes),g=h(e.skeletons),E=h(e.animations),A=h(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new K(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hr extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CS={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const D of e.hand.values()){const b=i.getJointPose(D,r),M=this._getHandJoint(d,D);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,A=.005;d.inputState.pinching&&g>E+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Hr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Ph(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=h0(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Ph(h,c,e+1/3),this.g=Ph(h,c,e),this.b=Ph(h,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const r=uv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return At.workingToColorSpace(In.copy(this),e),Math.round(yt(In.r*255,0,255))*65536+Math.round(yt(In.g*255,0,255))*256+Math.round(yt(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,c=In.b,h=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=v<=.5?x/(h+p):x/(2-h-p),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){At.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(Tc);const r=al(nr.h,Tc.h,i),l=al(nr.s,Tc.s,i),c=al(nr.l,Tc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Et;Et.NAMES=uv;class m0{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=i,this.far=r}clone(){return new m0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wS extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new K,xa=new K,Fh=new K,Ma=new K,Ds=new K,Us=new K,Gg=new K,Ih=new K,Bh=new K,zh=new K,Hh=new sn,Vh=new sn,Gh=new sn;class Pi{constructor(e=new K,i=new K,r=new K){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Li.subVectors(l,i),xa.subVectors(r,i),Fh.subVectors(e,i);const h=Li.dot(Li),p=Li.dot(xa),m=Li.dot(Fh),d=xa.dot(xa),v=xa.dot(Fh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,E=(d*m-p*v)*g,A=(h*v-p*m)*g;return c.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,c,h,p,m){return this.getBarycoord(e,i,r,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(p,Ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Hh.setScalar(0),Vh.setScalar(0),Gh.setScalar(0),Hh.fromBufferAttribute(e,i),Vh.fromBufferAttribute(e,r),Gh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Hh,c.x),h.addScaledVector(Vh,c.y),h.addScaledVector(Gh,c.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),xa.subVectors(e,i),Li.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,p;Ds.subVectors(l,r),Us.subVectors(c,r),Ih.subVectors(e,r);const m=Ds.dot(Ih),d=Us.dot(Ih);if(m<=0&&d<=0)return i.copy(r);Bh.subVectors(e,l);const v=Ds.dot(Bh),x=Us.dot(Bh);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Ds,h);zh.subVectors(e,c);const E=Ds.dot(zh),A=Us.dot(zh);if(A>=0&&E<=A)return i.copy(c);const D=E*d-m*A;if(D<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(r).addScaledVector(Us,p);const b=v*A-E*x;if(b<=0&&x-v>=0&&E-A>=0)return Gg.subVectors(c,l),p=(x-v)/(x-v+(E-A)),i.copy(l).addScaledVector(Gg,p);const M=1/(b+D+g);return h=D*M,p=g*M,i.copy(r).addScaledVector(Ds,h).addScaledVector(Us,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xr{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(c,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rc.copy(r.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Cc.subVectors(this.max,Wo),Ls.subVectors(e.a,Wo),Ns.subVectors(e.b,Wo),Os.subVectors(e.c,Wo),ir.subVectors(Ns,Ls),ar.subVectors(Os,Ns),Ur.subVectors(Ls,Os);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Ur.z,Ur.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Ur.z,0,-Ur.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Ur.y,Ur.x,0];return!kh(i,Ls,Ns,Os,Cc)||(i=[1,0,0,0,1,0,0,0,1],!kh(i,Ls,Ns,Os,Cc))?!1:(wc.crossVectors(ir,ar),i=[wc.x,wc.y,wc.z],kh(i,Ls,Ns,Os,Cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new K,new K,new K,new K,new K,new K,new K,new K],Ni=new K,Rc=new Xr,Ls=new K,Ns=new K,Os=new K,ir=new K,ar=new K,Ur=new K,Wo=new K,Cc=new K,wc=new K,Lr=new K;function kh(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Lr.fromArray(s,c);const p=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=e.dot(Lr),d=i.dot(Lr),v=r.dot(Lr);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const _n=new K,Dc=new mt;let DS=0;class gi extends kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Rg,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Vs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hv extends gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Mn extends gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const US=new Xr,qo=new K,Xh=new K;class Zr{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):US.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Xh)),this.expandByPoint(qo.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LS=0;const Ai=new Ot,Zh=new An,Ps=new K,hi=new Xr,Yo=new Xr,bn=new K;class Nn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QM(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(hi.min,Yo.min),hi.expandByPoint(bn),bn.addVectors(hi.max,Yo.max),hi.expandByPoint(bn)):(hi.expandByPoint(Yo.min),hi.expandByPoint(Yo.max))}hi.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)bn.fromBufferAttribute(p,d),m&&(Ps.fromBufferAttribute(e,d),bn.add(Ps)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let S=0;S<r.count;S++)p[S]=new K,m[S]=new K;const d=new K,v=new K,x=new K,g=new mt,E=new mt,A=new mt,D=new K,b=new K;function M(S,N,k){d.fromBufferAttribute(r,S),v.fromBufferAttribute(r,N),x.fromBufferAttribute(r,k),g.fromBufferAttribute(c,S),E.fromBufferAttribute(c,N),A.fromBufferAttribute(c,k),v.sub(d),x.sub(d),E.sub(g),A.sub(g);const G=1/(E.x*A.y-A.x*E.y);isFinite(G)&&(D.copy(v).multiplyScalar(A.y).addScaledVector(x,-E.y).multiplyScalar(G),b.copy(x).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(G),p[S].add(D),p[N].add(D),p[k].add(D),m[S].add(b),m[N].add(b),m[k].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let S=0,N=P.length;S<N;++S){const k=P[S],G=k.start,Q=k.count;for(let fe=G,pe=G+Q;fe<pe;fe+=3)M(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const O=new K,C=new K,B=new K,U=new K;function I(S){B.fromBufferAttribute(l,S),U.copy(B);const N=p[S];O.copy(N),O.sub(B.multiplyScalar(B.dot(N))).normalize(),C.crossVectors(U,N);const G=C.dot(m[S])<0?-1:1;h.setXYZW(S,O.x,O.y,O.z,G)}for(let S=0,N=P.length;S<N;++S){const k=P[S],G=k.start,Q=k.count;for(let fe=G,pe=G+Q;fe<pe;fe+=3)I(e.getX(fe+0)),I(e.getX(fe+1)),I(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,p=new K,m=new K,d=new K,v=new K,x=new K;if(e)for(let g=0,E=e.count;g<E;g+=3){const A=e.getX(g+0),D=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,b),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),d.fromBufferAttribute(r,b),p.add(v),m.add(v),d.add(v),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(b,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,x=p.normalized,g=new d.constructor(m.length*v);let E=0,A=0;for(let D=0,b=m.length;D<b;D++){p.isInterleavedBufferAttribute?E=m[D]*p.data.stride+p.offset:E=m[D]*v;for(let M=0;M<v;M++)g[A++]=d[E++]}return new gi(g,v,x)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,x=d.length;v<x;v++){const g=d[v],E=e(g,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let x=0,g=d.length;x<g;x++){const E=d[x];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],x=c[d];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NS=0;class Wr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Gs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==od&&(r.blendSrc=this.blendSrc),this.blendDst!==ld&&(r.blendDst=this.blendDst),this.blendEquation!==Fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new mt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new K,Wh=new K,Uc=new K,rr=new K,qh=new K,Lc=new K,Yh=new K;class fu{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wh.copy(e).add(i).multiplyScalar(.5),Uc.copy(i).sub(e).normalize(),rr.copy(this.origin).sub(Wh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Uc),p=rr.dot(this.direction),m=-rr.dot(Uc),d=rr.lengthSq(),v=Math.abs(1-h*h);let x,g,E,A;if(v>0)if(x=h*m-p,g=h*p-m,A=c*v,x>=0)if(g>=-A)if(g<=A){const D=1/v;x*=D,g*=D,E=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;else g<=-A?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),E=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),E=-x*x+g*(g+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Wh).addScaledVector(Uc,g),E}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,r,l,c){qh.subVectors(i,e),Lc.subVectors(r,e),Yh.crossVectors(qh,Lc);let h=this.direction.dot(Yh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;rr.subVectors(this.origin,e);const m=p*this.direction.dot(Lc.crossVectors(rr,Lc));if(m<0)return null;const d=p*this.direction.dot(qh.cross(rr));if(d<0||m+d>h)return null;const v=-p*rr.dot(Yh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rl extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kg=new Ot,Nr=new fu,Nc=new Zr,Xg=new K,Oc=new K,Pc=new K,Fc=new K,Kh=new K,Ic=new K,Zg=new K,Bc=new K;class $n extends An{constructor(e=new Nn,i=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],x=c[m];v!==0&&(Kh.fromBufferAttribute(x,e),h?Ic.addScaledVector(Kh,v):Ic.addScaledVector(Kh.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Nc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Nc,Xg)===null||Nr.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(kg.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(kg),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,D=g.length;A<D;A++){const b=g[A],M=h[b.materialIndex],P=Math.max(b.start,E.start),O=Math.min(p.count,Math.min(b.start+b.count,E.start+E.count));for(let C=P,B=O;C<B;C+=3){const U=p.getX(C),I=p.getX(C+1),S=p.getX(C+2);l=zc(this,M,e,r,d,v,x,U,I,S),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let b=A,M=D;b<M;b+=3){const P=p.getX(b),O=p.getX(b+1),C=p.getX(b+2);l=zc(this,h,e,r,d,v,x,P,O,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,D=g.length;A<D;A++){const b=g[A],M=h[b.materialIndex],P=Math.max(b.start,E.start),O=Math.min(m.count,Math.min(b.start+b.count,E.start+E.count));for(let C=P,B=O;C<B;C+=3){const U=C,I=C+1,S=C+2;l=zc(this,M,e,r,d,v,x,U,I,S),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let b=A,M=D;b<M;b+=3){const P=b,O=b+1,C=b+2;l=zc(this,h,e,r,d,v,x,P,O,C),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function OS(s,e,i,r,l,c,h,p){let m;if(e.side===jn?m=r.intersectTriangle(h,c,l,!0,p):m=r.intersectTriangle(l,c,h,e.side===cr,p),m===null)return null;Bc.copy(p),Bc.applyMatrix4(s.matrixWorld);const d=i.ray.origin.distanceTo(Bc);return d<i.near||d>i.far?null:{distance:d,point:Bc.clone(),object:s}}function zc(s,e,i,r,l,c,h,p,m,d){s.getVertexPosition(p,Oc),s.getVertexPosition(m,Pc),s.getVertexPosition(d,Fc);const v=OS(s,e,i,r,Oc,Pc,Fc,Zg);if(v){const x=new K;Pi.getBarycoord(Zg,Oc,Pc,Fc,x),l&&(v.uv=Pi.getInterpolatedAttribute(l,p,m,d,x,new mt)),c&&(v.uv1=Pi.getInterpolatedAttribute(c,p,m,d,x,new mt)),h&&(v.normal=Pi.getInterpolatedAttribute(h,p,m,d,x,new K),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new K,materialIndex:0};Pi.getNormal(Oc,Pc,Fc,g.normal),v.face=g,v.barycoord=x}return v}class dv extends Hn{constructor(e=null,i=1,r=1,l,c,h,p,m,d=Un,v=Un,x,g){super(null,h,p,m,d,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wg extends gi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new Ot,qg=new Ot,Hc=[],Yg=new Xr,PS=new Ot,Ko=new $n,Qo=new Zr;class pv extends $n{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new Wg(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,PS)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Fs),Yg.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Yg)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Fs),Qo.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Qo)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){return i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,h=e*c+1;for(let p=0;p<r.length;p++)r[p]=l[h+p]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Fs),qg.multiplyMatrices(r,Fs),Ko.matrixWorld=qg,Ko.raycast(e,Hc);for(let h=0,p=Hc.length;h<p;h++){const m=Hc[h];m.instanceId=c,m.object=this,i.push(m)}Hc.length=0}}setColorAt(e,i){return this.instanceColor===null&&(this.instanceColor=new Wg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,i){return i.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new dv(new Float32Array(l*this.count),l,this.count,s0,Fi));const c=this.morphTexture.source.data.data;let h=0;for(let d=0;d<r.length;d++)h+=r[d];const p=this.geometry.morphTargetsRelative?1:1-h,m=l*e;return c[m]=p,c.set(r,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qh=new K,FS=new K,IS=new ot;class Pr{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qh.subVectors(r,i).cross(FS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||IS.getNormalMatrix(e),l=this.coplanarPoint(Qh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Zr,BS=new mt(.5,.5),Vc=new K;class g0{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,h=new Pr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=qi,r=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],x=c[5],g=c[6],E=c[7],A=c[8],D=c[9],b=c[10],M=c[11],P=c[12],O=c[13],C=c[14],B=c[15];if(l[0].setComponents(d-h,E-v,M-A,B-P).normalize(),l[1].setComponents(d+h,E+v,M+A,B+P).normalize(),l[2].setComponents(d+p,E+x,M+D,B+O).normalize(),l[3].setComponents(d-p,E-x,M-D,B-O).normalize(),r)l[4].setComponents(m,g,b,C).normalize(),l[5].setComponents(d-m,E-g,M-b,B-C).normalize();else if(l[4].setComponents(d-m,E-g,M-b,B-C).normalize(),i===qi)l[5].setComponents(d+m,E+g,M+b,B+C).normalize();else if(i===ll)l[5].setComponents(m,g,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const i=BS.distanceTo(e.center);return Or.radius=.7071067811865476+i,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _0 extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new K,ou=new K,Kg=new Ot,Jo=new fu,Gc=new Zr,Jh=new K,Qg=new K;class mv extends An{constructor(e=new Nn,i=new _0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new Mn(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;Kg.copy(l).invert(),Jo.copy(e.ray).applyMatrix4(Kg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const E=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let D=E,b=A-1;D<b;D+=d){const M=v.getX(D),P=v.getX(D+1),O=kc(this,e,Jo,m,M,P,D);O&&i.push(O)}if(this.isLineLoop){const D=v.getX(A-1),b=v.getX(E),M=kc(this,e,Jo,m,D,b,A-1);M&&i.push(M)}}else{const E=Math.max(0,h.start),A=Math.min(g.count,h.start+h.count);for(let D=E,b=A-1;D<b;D+=d){const M=kc(this,e,Jo,m,D,D+1,D);M&&i.push(M)}if(this.isLineLoop){const D=kc(this,e,Jo,m,A-1,E,A-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function kc(s,e,i,r,l,c,h){const p=s.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(su,ou,Jh,Qg)>r)return;Jh.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Jh);if(!(d<e.near||d>e.far))return{distance:d,point:Qg.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}class zS extends mv{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class gv extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jg=new Ot,Kd=new fu,Xc=new Zr,Zc=new K;class HS extends An{constructor(e=new Nn,i=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,e.ray.intersectsSphere(Xc)===!1)return;Jg.copy(l).invert(),Kd.copy(e.ray).applyMatrix4(Jg);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=r.index,x=r.attributes.position;if(d!==null){const g=Math.max(0,h.start),E=Math.min(d.count,h.start+h.count);for(let A=g,D=E;A<D;A++){const b=d.getX(A);Zc.fromBufferAttribute(x,b),jg(Zc,b,m,l,e,i,this)}}else{const g=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=g,D=E;A<D;A++)Zc.fromBufferAttribute(x,A),jg(Zc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function jg(s,e,i,r,l,c,h){const p=Kd.distanceSqToPoint(s);if(p<i){const m=new K;Kd.closestPointToPoint(s,m),m.applyMatrix4(r);const d=l.ray.origin.distanceTo(m);if(d<l.near||d>l.far)return;c.push({distance:d,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class _v extends Hn{constructor(e=[],i=Vr,r,l,c,h,p,m,d,v){super(e,i,r,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends Hn{constructor(e,i,r=Qi,l,c,h,p=Un,m=Un,d,v=Ra,x=1){if(v!==Ra&&v!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,p,m,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new d0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VS extends qs{constructor(e,i=Qi,r=Vr,l,c,h=Un,p=Un,m,d=Ra){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,r,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fl extends Nn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],x=[];let g=0,E=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Mn(d,3)),this.setAttribute("normal",new Mn(v,3)),this.setAttribute("uv",new Mn(x,2));function A(D,b,M,P,O,C,B,U,I,S,N){const k=C/I,G=B/S,Q=C/2,fe=B/2,pe=U/2,$=I+1,z=S+1;let H=0,te=0;const _e=new K;for(let be=0;be<z;be++){const F=be*G-fe;for(let J=0;J<$;J++){const Ee=J*k-Q;_e[D]=Ee*P,_e[b]=F*O,_e[M]=pe,d.push(_e.x,_e.y,_e.z),_e[D]=0,_e[b]=0,_e[M]=U>0?1:-1,v.push(_e.x,_e.y,_e.z),x.push(J/I),x.push(1-be/S),H+=1}}for(let be=0;be<S;be++)for(let F=0;F<I;F++){const J=g+F+$*be,Ee=g+F+$*(be+1),Ce=g+(F+1)+$*(be+1),Pe=g+(F+1)+$*be;m.push(J,Ee,Pe),m.push(Ee,Ce,Pe),te+=6}p.addGroup(E,te,N),E+=te,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class v0 extends Nn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];p(l),d(r),v(),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(c.slice(),3)),this.setAttribute("uv",new Mn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(P){const O=new K,C=new K,B=new K;for(let U=0;U<i.length;U+=3)E(i[U+0],O),E(i[U+1],C),E(i[U+2],B),m(O,C,B,P)}function m(P,O,C,B){const U=B+1,I=[];for(let S=0;S<=U;S++){I[S]=[];const N=P.clone().lerp(C,S/U),k=O.clone().lerp(C,S/U),G=U-S;for(let Q=0;Q<=G;Q++)Q===0&&S===U?I[S][Q]=N:I[S][Q]=N.clone().lerp(k,Q/G)}for(let S=0;S<U;S++)for(let N=0;N<2*(U-S)-1;N++){const k=Math.floor(N/2);N%2===0?(g(I[S][k+1]),g(I[S+1][k]),g(I[S][k])):(g(I[S][k+1]),g(I[S+1][k+1]),g(I[S+1][k]))}}function d(P){const O=new K;for(let C=0;C<c.length;C+=3)O.x=c[C+0],O.y=c[C+1],O.z=c[C+2],O.normalize().multiplyScalar(P),c[C+0]=O.x,c[C+1]=O.y,c[C+2]=O.z}function v(){const P=new K;for(let O=0;O<c.length;O+=3){P.x=c[O+0],P.y=c[O+1],P.z=c[O+2];const C=b(P)/2/Math.PI+.5,B=M(P)/Math.PI+.5;h.push(C,1-B)}A(),x()}function x(){for(let P=0;P<h.length;P+=6){const O=h[P+0],C=h[P+2],B=h[P+4],U=Math.max(O,C,B),I=Math.min(O,C,B);U>.9&&I<.1&&(O<.2&&(h[P+0]+=1),C<.2&&(h[P+2]+=1),B<.2&&(h[P+4]+=1))}}function g(P){c.push(P.x,P.y,P.z)}function E(P,O){const C=P*3;O.x=e[C+0],O.y=e[C+1],O.z=e[C+2]}function A(){const P=new K,O=new K,C=new K,B=new K,U=new mt,I=new mt,S=new mt;for(let N=0,k=0;N<c.length;N+=9,k+=6){P.set(c[N+0],c[N+1],c[N+2]),O.set(c[N+3],c[N+4],c[N+5]),C.set(c[N+6],c[N+7],c[N+8]),U.set(h[k+0],h[k+1]),I.set(h[k+2],h[k+3]),S.set(h[k+4],h[k+5]),B.copy(P).add(O).add(C).divideScalar(3);const G=b(B);D(U,k+0,P,G),D(I,k+2,O,G),D(S,k+4,C,G)}}function D(P,O,C,B){B<0&&P.x===1&&(h[O]=P.x-1),C.x===0&&C.z===0&&(h[O]=B/2/Math.PI+.5)}function b(P){return Math.atan2(P.z,-P.x)}function M(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new v0(e.vertices,e.indices,e.radius,e.detail)}}class hu extends v0{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-r,0,-l,r,0,l,-r,0,l,r,-l,-r,0,-l,r,0,l,-r,0,l,r,0,-r,0,-l,r,0,-l,-r,0,l,r,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,h,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new hu(e.radius,e.detail)}}class du extends Nn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,v=m+1,x=e/p,g=i/m,E=[],A=[],D=[],b=[];for(let M=0;M<v;M++){const P=M*g-h;for(let O=0;O<d;O++){const C=O*x-c;A.push(C,-P,0),D.push(0,0,1),b.push(O/p),b.push(1-M/m)}}for(let M=0;M<m;M++)for(let P=0;P<p;P++){const O=P+d*M,C=P+d*(M+1),B=P+1+d*(M+1),U=P+1+d*M;E.push(O,C,U),E.push(C,B,U)}this.setIndex(E),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(D,3)),this.setAttribute("uv",new Mn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}class lu extends Nn{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],d=[],v=[];let x=e;const g=(i-e)/l,E=new K,A=new mt;for(let D=0;D<=l;D++){for(let b=0;b<=r;b++){const M=c+b/r*h;E.x=x*Math.cos(M),E.y=x*Math.sin(M),m.push(E.x,E.y,E.z),d.push(0,0,1),A.x=(E.x/i+1)/2,A.y=(E.y/i+1)/2,v.push(A.x,A.y)}x+=g}for(let D=0;D<l;D++){const b=D*(r+1);for(let M=0;M<r;M++){const P=M+b,O=P,C=P+r+1,B=P+r+2,U=P+1;p.push(O,C,U),p.push(C,B,U)}}this.setIndex(p),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class x0 extends Nn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+p,Math.PI);let d=0;const v=[],x=new K,g=new K,E=[],A=[],D=[],b=[];for(let M=0;M<=r;M++){const P=[],O=M/r,C=h+O*p,B=e*Math.cos(C),U=Math.sqrt(e*e-B*B);let I=0;M===0&&h===0?I=.5/i:M===r&&m===Math.PI&&(I=-.5/i);for(let S=0;S<=i;S++){const N=S/i,k=l+N*c;x.x=-U*Math.cos(k),x.y=B,x.z=U*Math.sin(k),A.push(x.x,x.y,x.z),g.copy(x).normalize(),D.push(g.x,g.y,g.z),b.push(N+I,1-O),P.push(d++)}v.push(P)}for(let M=0;M<r;M++)for(let P=0;P<i;P++){const O=v[M][P+1],C=v[M][P],B=v[M+1][P],U=v[M+1][P+1];(M!==0||h>0)&&E.push(O,C,U),(M!==r-1||m<Math.PI)&&E.push(C,B,U)}this.setIndex(E),this.setAttribute("position",new Mn(A,3)),this.setAttribute("normal",new Mn(D,3)),this.setAttribute("uv",new Mn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new x0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ys(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if($g(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if($g(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function kn(s){const e={};for(let i=0;i<s.length;i++){const r=Ys(s[i]);for(const l in r)e[l]=r[l]}return e}function $g(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function GS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function xv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const kS={clone:Ys,merge:kn};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=ZS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(l.value);break;case"v2":this.uniforms[r].value=new mt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new K().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ot().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Ot().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class WS extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class M0 extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(e_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!e_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function e_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class KS{constructor(e,i,r){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){p++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,p),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return d.push(v,x),this},this.removeHandler=function(v){const x=d.indexOf(v);return x!==-1&&d.splice(x,2),this},this.getHandler=function(v){for(let x=0,g=d.length;x<g;x+=2){const E=d[x],A=d[x+1];if(E.global&&(E.lastIndex=0),E.test(v))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const QS=new KS;class S0{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}S0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class JS extends S0{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=jh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let x=Is.get(h);x===void 0&&(x=[],Is.set(h,x)),x.push({onLoad:i,onError:l})}return h}const p=cl("img");function m(){v(),i&&i(this);const x=Is.get(this)||[];for(let g=0;g<x.length;g++){const E=x[g];E.onLoad&&E.onLoad(this)}Is.delete(this),c.manager.itemEnd(e)}function d(x){v(),l&&l(x),jh.remove(`image:${e}`);const g=Is.get(this)||[];for(let E=0;E<g.length;E++){const A=g[E];A.onError&&A.onError(x)}Is.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){p.removeEventListener("load",m,!1),p.removeEventListener("error",d,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),jh.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class jS extends S0{constructor(e){super(e)}load(e,i,r,l){const c=new Hn,h=new JS(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class y0 extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $h=new Ot,t_=new K,n_=new K;class Mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new g0,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),i.position.copy(t_),n_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(n_),i.updateMatrixWorld(),$h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ll||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wc=new K,qc=new ur,Xi=new K;class Sv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,qc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Wc,qc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new K,i_=new mt,a_=new mt;class pi extends Sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ul*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ul*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,i){return this.getViewBounds(e,i_,a_),i.subVectors(a_,i_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(il*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $S extends Mv{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class ey extends y0{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new $S}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class E0 extends Sv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ty extends Mv{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ny extends y0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new ty}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class iy extends y0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bs=-90,zs=1;class ay extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Bs,zs,e,i);l.layers=this.layers,this.add(l);const c=new pi(Bs,zs,e,i);c.layers=this.layers,this.add(c);const h=new pi(Bs,zs,e,i);h.layers=this.layers,this.add(h);const p=new pi(Bs,zs,e,i);p.layers=this.layers,this.add(p);const m=new pi(Bs,zs,e,i);m.layers=this.layers,this.add(m);const d=new pi(Bs,zs,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class ry extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=oy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function oy(){this._document.hidden===!1&&this.reset()}const r_=new Ot;class ly{constructor(e,i,r=0,l=1/0){this.ray=new fu(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new p0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Tt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return r_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(r_),this}intersectObject(e,i=!0,r=[]){return Qd(e,this,r,i),r.sort(s_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Qd(e[l],this,r,i);return r.sort(s_),r}}function s_(s,e){return s.distance-e.distance}function Qd(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,p=c.length;h<p;h++)Qd(c[h],e,i,!0)}}const C0=class C0{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};C0.prototype.isMatrix2=!0;let o_=C0;function l_(s,e,i,r){const l=cy(r);switch(i){case sv:return s*e;case s0:return s*e/l.components*l.byteLength;case o0:return s*e/l.components*l.byteLength;case Gr:return s*e*2/l.components*l.byteLength;case l0:return s*e*2/l.components*l.byteLength;case ov:return s*e*3/l.components*l.byteLength;case Ii:return s*e*4/l.components*l.byteLength;case c0:return s*e*4/l.components*l.byteLength;case Jc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case Md:return Math.max(s,8)*Math.max(e,8)/2;case yd:case Ed:case Ad:case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bd:case nu:case Rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gd:case kd:case Xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case iu:case qd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cy(s){switch(s){case mi:case nv:return{byteLength:1,components:1};case sl:case iv:case Ta:return{byteLength:2,components:1};case a0:case r0:return{byteLength:2,components:4};case Qi:case i0:case Fi:return{byteLength:4,components:1};case av:case rv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:t0}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=t0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function uy(s){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,x=d.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=s.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=s.SHORT;else if(d instanceof Uint32Array)E=s.UNSIGNED_INT;else if(d instanceof Int32Array)E=s.INT;else if(d instanceof Int8Array)E=s.BYTE;else if(d instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,d){const v=m.array,x=m.updateRanges;if(s.bindBuffer(d,p),x.length===0)s.bufferSubData(d,0,v);else{x.sort((E,A)=>E.start-A.start);let g=0;for(let E=1;E<x.length;E++){const A=x[g],D=x[E];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++g,x[g]=D)}x.length=g+1;for(let E=0,A=x.length;E<A;E++){const D=x[E];s.bufferSubData(d,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
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
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,by=`#ifdef USE_IRIDESCENCE
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
#endif`,Ay=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Oy=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n3=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i3=`#ifdef USE_ENVMAP
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
#endif`,a3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l3=`PhysicalMaterial material;
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
#endif`,c3=`uniform sampler2D dfgLUT;
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
}`,u3=`
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
#endif`,f3=`#if defined( RE_IndirectDiffuse )
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
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S3=`#if defined( USE_POINTS_UV )
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
#endif`,y3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R3=`#ifdef USE_MORPHTARGETS
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
#endif`,C3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O3=`#ifdef USE_NORMALMAP
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
#endif`,P3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q3=`float getShadowMask() {
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
}`,J3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j3=`#ifdef USE_SKINNING
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
#endif`,$3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hE=`uniform sampler2D t2D;
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
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
}`,vE=`#if DEPTH_PACKING == 3200
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
}`,xE=`#define DISTANCE
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
}`,ME=`#define DISTANCE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,bE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,CE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,UE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,NE=`#define PHONG
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
}`,OE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,IE=`#define TOON
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
}`,BE=`#define TOON
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
}`,zE=`uniform float size;
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
}`,HE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:xy,batching_vertex:My,begin_vertex:Sy,beginnormal_vertex:yy,bsdfs:Ey,iridescence_fragment:by,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:wy,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Ly,color_vertex:Ny,common:Oy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Iy,displacementmap_vertex:By,emissivemap_fragment:zy,emissivemap_pars_fragment:Hy,colorspace_fragment:Vy,colorspace_pars_fragment:Gy,envmap_fragment:ky,envmap_common_pars_fragment:Xy,envmap_pars_fragment:Zy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:i3,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Ky,fog_fragment:Qy,fog_pars_fragment:Jy,gradientmap_pars_fragment:jy,lightmap_pars_fragment:$y,lights_lambert_fragment:e3,lights_lambert_pars_fragment:t3,lights_pars_begin:n3,lights_toon_fragment:a3,lights_toon_pars_fragment:r3,lights_phong_fragment:s3,lights_phong_pars_fragment:o3,lights_physical_fragment:l3,lights_physical_pars_fragment:c3,lights_fragment_begin:u3,lights_fragment_maps:f3,lights_fragment_end:h3,lightprobes_pars_fragment:d3,logdepthbuf_fragment:p3,logdepthbuf_pars_fragment:m3,logdepthbuf_pars_vertex:g3,logdepthbuf_vertex:_3,map_fragment:v3,map_pars_fragment:x3,map_particle_fragment:M3,map_particle_pars_fragment:S3,metalnessmap_fragment:y3,metalnessmap_pars_fragment:E3,morphinstance_vertex:b3,morphcolor_vertex:A3,morphnormal_vertex:T3,morphtarget_pars_vertex:R3,morphtarget_vertex:C3,normal_fragment_begin:w3,normal_fragment_maps:D3,normal_pars_fragment:U3,normal_pars_vertex:L3,normal_vertex:N3,normalmap_pars_fragment:O3,clearcoat_normal_fragment_begin:P3,clearcoat_normal_fragment_maps:F3,clearcoat_pars_fragment:I3,iridescence_pars_fragment:B3,opaque_fragment:z3,packing:H3,premultiplied_alpha_fragment:V3,project_vertex:G3,dithering_fragment:k3,dithering_pars_fragment:X3,roughnessmap_fragment:Z3,roughnessmap_pars_fragment:W3,shadowmap_pars_fragment:q3,shadowmap_pars_vertex:Y3,shadowmap_vertex:K3,shadowmask_pars_fragment:Q3,skinbase_vertex:J3,skinning_pars_vertex:j3,skinning_vertex:$3,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:aE,transmission_fragment:rE,transmission_pars_fragment:sE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:hE,backgroundCube_vert:dE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:_E,depth_frag:vE,distance_vert:xE,distance_frag:ME,equirect_vert:SE,equirect_frag:yE,linedashed_vert:EE,linedashed_frag:bE,meshbasic_vert:AE,meshbasic_frag:TE,meshlambert_vert:RE,meshlambert_frag:CE,meshmatcap_vert:wE,meshmatcap_frag:DE,meshnormal_vert:UE,meshnormal_frag:LE,meshphong_vert:NE,meshphong_frag:OE,meshphysical_vert:PE,meshphysical_frag:FE,meshtoon_vert:IE,meshtoon_frag:BE,points_vert:zE,points_frag:HE,shadow_vert:VE,shadow_frag:GE,sprite_vert:kE,sprite_frag:XE},Be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Wi={basic:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:kn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:kn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:kn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:kn([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:kn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:kn([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:kn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:kn([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:kn([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:kn([Be.lights,Be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wi.physical={uniforms:kn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Yc={r:0,b:0,g:0},ZE=new Ot,Ev=new ot;Ev.set(-1,0,0,0,1,0,0,0,1);function WE(s,e,i,r,l,c){const h=new Et(0);let p=l===!0?0:1,m,d,v=null,x=0,g=null;function E(P){let O=P.isScene===!0?P.background:null;if(O&&O.isTexture){const C=P.backgroundBlurriness>0;O=e.get(O,C)}return O}function A(P){let O=!1;const C=E(P);C===null?b(h,p):C&&C.isColor&&(b(C,1),O=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function D(P,O){const C=E(O);C&&(C.isCubeTexture||C.mapping===uu)?(d===void 0&&(d=new $n(new fl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Ys(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(O.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Ev),d.material.toneMapped=At.getTransfer(C.colorSpace)!==Gt,(v!==C||x!==C.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,v=C,x=C.version,g=s.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new $n(new du(2,2),new ji({name:"BackgroundMaterial",uniforms:Ys(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=At.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,g=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,O){P.getRGB(Yc,xv(s)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,O,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,O=1){h.set(P),p=O,b(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,b(h,p)},render:A,addToRenderList:D,dispose:M}}function qE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,h=!1;function p(G,Q,fe,pe,$){let z=!1;const H=x(G,pe,fe,Q);c!==H&&(c=H,d(c.object)),z=E(G,pe,fe,$),z&&A(G,pe,fe,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,C(G,Q,fe,pe),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function x(G,Q,fe,pe){const $=pe.wireframe===!0;let z=r[Q.id];z===void 0&&(z={},r[Q.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let te=z[H];te===void 0&&(te={},z[H]=te);let _e=te[fe.id];_e===void 0&&(_e={},te[fe.id]=_e);let be=_e[$];return be===void 0&&(be=g(m()),_e[$]=be),be}function g(G){const Q=[],fe=[],pe=[];for(let $=0;$<i;$++)Q[$]=0,fe[$]=0,pe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:fe,attributeDivisors:pe,object:G,attributes:{},index:null}}function E(G,Q,fe,pe){const $=c.attributes,z=Q.attributes;let H=0;const te=fe.getAttributes();for(const _e in te)if(te[_e].location>=0){const F=$[_e];let J=z[_e];if(J===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;H++}return c.attributesNum!==H||c.index!==pe}function A(G,Q,fe,pe){const $={},z=Q.attributes;let H=0;const te=fe.getAttributes();for(const _e in te)if(te[_e].location>=0){let F=z[_e];F===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),$[_e]=J,H++}c.attributes=$,c.attributesNum=H,c.index=pe}function D(){const G=c.newAttributes;for(let Q=0,fe=G.length;Q<fe;Q++)G[Q]=0}function b(G){M(G,0)}function M(G,Q){const fe=c.newAttributes,pe=c.enabledAttributes,$=c.attributeDivisors;fe[G]=1,pe[G]===0&&(s.enableVertexAttribArray(G),pe[G]=1),$[G]!==Q&&(s.vertexAttribDivisor(G,Q),$[G]=Q)}function P(){const G=c.newAttributes,Q=c.enabledAttributes;for(let fe=0,pe=Q.length;fe<pe;fe++)Q[fe]!==G[fe]&&(s.disableVertexAttribArray(fe),Q[fe]=0)}function O(G,Q,fe,pe,$,z,H){H===!0?s.vertexAttribIPointer(G,Q,fe,$,z):s.vertexAttribPointer(G,Q,fe,pe,$,z)}function C(G,Q,fe,pe){D();const $=pe.attributes,z=fe.getAttributes(),H=Q.defaultAttributeValues;for(const te in z){const _e=z[te];if(_e.location>=0){let be=$[te];if(be===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const F=be.normalized,J=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,Pe=Ee.type,re=Ee.bytesPerElement,Me=Pe===s.INT||Pe===s.UNSIGNED_INT||be.gpuType===i0;if(be.isInterleavedBufferAttribute){const Se=be.data,ze=Se.stride,it=be.offset;if(Se.isInstancedInterleavedBuffer){for(let Je=0;Je<_e.locationSize;Je++)M(_e.location+Je,Se.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Je=0;Je<_e.locationSize;Je++)b(_e.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Je=0;Je<_e.locationSize;Je++)O(_e.location+Je,J/_e.locationSize,Pe,F,ze*re,(it+J/_e.locationSize*Je)*re,Me)}else{if(be.isInstancedBufferAttribute){for(let Se=0;Se<_e.locationSize;Se++)M(_e.location+Se,be.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Se=0;Se<_e.locationSize;Se++)b(_e.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Se=0;Se<_e.locationSize;Se++)O(_e.location+Se,J/_e.locationSize,Pe,F,J*re,J/_e.locationSize*Se*re,Me)}}else if(H!==void 0){const F=H[te];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(_e.location,F);break;case 3:s.vertexAttrib3fv(_e.location,F);break;case 4:s.vertexAttrib4fv(_e.location,F);break;default:s.vertexAttrib1fv(_e.location,F)}}}}P()}function B(){N();for(const G in r){const Q=r[G];for(const fe in Q){const pe=Q[fe];for(const $ in pe){const z=pe[$];for(const H in z)v(z[H].object),delete z[H];delete pe[$]}}delete r[G]}}function U(G){if(r[G.id]===void 0)return;const Q=r[G.id];for(const fe in Q){const pe=Q[fe];for(const $ in pe){const z=pe[$];for(const H in z)v(z[H].object),delete z[H];delete pe[$]}}delete r[G.id]}function I(G){for(const Q in r){const fe=r[Q];for(const pe in fe){const $=fe[pe];if($[G.id]===void 0)continue;const z=$[G.id];for(const H in z)v(z[H].object),delete z[H];delete $[G.id]}}}function S(G){for(const Q in r){const fe=r[Q],pe=G.isInstancedMesh===!0?G.id:0,$=fe[pe];if($!==void 0){for(const z in $){const H=$[z];for(const te in H)v(H[te].object),delete H[te];delete $[z]}delete fe[pe],Object.keys(fe).length===0&&delete r[Q]}}}function N(){k(),h=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:k,dispose:B,releaseStatesOfGeometry:U,releaseStatesOfObject:S,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:b,disableUnusedAttributes:P}}function YE(s,e,i){let r;function l(m){r=m}function c(m,d){s.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,v){v!==0&&(s.drawArraysInstanced(r,m,d,v),i.update(d,r,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function KE(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ii&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const S=I===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==mi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fi&&!S)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(rt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:C,maxSamples:B,samples:U}}function QE(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Pr,p=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||r!==0||l;return l=g,r=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,E){const A=x.clippingPlanes,D=x.clipIntersection,b=x.clipShadows,M=s.get(x);if(!l||A===null||A.length===0||c&&!b)c?v(null):d();else{const P=c?0:r,O=P*4;let C=M.clippingState||null;m.value=C,C=v(A,g,O,E);for(let B=0;B!==O;++B)C[B]=i[B];M.clippingState=C,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=P}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,E,A){const D=x!==null?x.length:0;let b=null;if(D!==0){if(b=m.value,A!==!0||b===null){const M=E+D*4,P=g.matrixWorldInverse;p.getNormalMatrix(P),(b===null||b.length<M)&&(b=new Float32Array(M));for(let O=0,C=E;O!==D;++O,C+=4)h.copy(x[O]).applyMatrix4(P,p),h.normal.toArray(b,C),b[C+3]=h.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,b}}const lr=4,c_=[.125,.215,.35,.446,.526,.582],Ir=20,JE=256,jo=new E0,u_=new Et;let ed=null,td=0,nd=0,id=!1;const jE=new K;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:p=jE}=c;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ta,format:Ii,colorSpace:au,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$E(c)),this._blurMaterial=tb(c,e,i),this._ggxMaterial=eb(c,e,i)}return l}_compileMaterial(e){const i=new $n(new Nn,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new pi(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(u_),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $n(new fl,new rl({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let M=!1;const P=e.background;P?P.isColor&&(b.color.copy(P),e.background=null,M=!0):(b.color.copy(u_),M=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[O],c.y,c.z)):C===1?(m.up.set(0,0,d[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[O],c.z)):(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[O]));const B=this._cubeSize;Hs(l,C*B,O>2?B:0,B,B),x.setRenderTarget(l),M&&x.render(D,m),x.render(e,m)}x.toneMapping=E,x.autoClear=g,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===Ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Hs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),g=0+d*1.25,E=x*g,{_lodMax:A}=this,D=this._sizeLods[r],b=3*D*(r>A-lr?r-A+lr:0),M=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,Hs(c,b,M,3*D,2*D),l.setRenderTarget(c),l.render(p,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Hs(e,b,M,3*D,2*D),l.setRenderTarget(e),l.render(p,jo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ir-1),D=c/A,b=isFinite(c)?1+Math.floor(v*D):Ir;b>Ir&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ir}`);const M=[];let P=0;for(let I=0;I<Ir;++I){const S=I/D,N=Math.exp(-S*S/2);M.push(N),I===0?P+=N:I<b&&(P+=2*N)}for(let I=0;I<M.length;I++)M[I]=M[I]/P;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=M,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=A,g.mipInt.value=O-r;const C=this._sizeLods[l],B=3*C*(l>O-lr?l-O+lr:0),U=4*(this._cubeSize-C);Hs(i,B,U,3*C,2*C),m.setRenderTarget(i),m.render(x,jo)}}function $E(s){const e=[],i=[],r=[];let l=s;const c=s-lr+1+c_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>s-lr?m=c_[h-s+lr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,x=1+d,g=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,A=6,D=3,b=2,M=1,P=new Float32Array(D*A*E),O=new Float32Array(b*A*E),C=new Float32Array(M*A*E);for(let U=0;U<E;U++){const I=U%3*2/3-1,S=U>2?0:-1,N=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];P.set(N,D*A*U),O.set(g,b*A*U);const k=[U,U,U,U,U,U];C.set(k,M*A*U)}const B=new Nn;B.setAttribute("position",new gi(P,D)),B.setAttribute("uv",new gi(O,b)),B.setAttribute("faceIndex",new gi(C,M)),r.push(new $n(B,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function h_(s,e,i){const r=new Ki(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function eb(s,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function tb(s,e,i){const r=new Float32Array(Ir),l=new K(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function d_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function p_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}class bv extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new _v(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ba});c.uniforms.tEquirect.value=i;const h=new $n(l,c),p=i.minFilter;return i.minFilter===Br&&(i.minFilter=zn),new ay(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function nb(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===Th||E===Rh)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const D=new bv(A.height);return D.fromEquirectangularTexture(s,g),e.set(g,D),g.addEventListener("dispose",d),p(D.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,A=E===Th||E===Rh,D=E===Vr||E===Ws;if(A||D){let b=i.get(g);const M=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new f_(s)),b=A?r.fromEquirectangular(g,b):r.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const P=g.image;return A&&P&&P.height>0||D&&P&&m(P)?(r===null&&(r=new f_(s)),b=A?r.fromEquirectangular(g):r.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",v),b.texture):null}}}return g}function p(g,E){return E===Th?g.mapping=Vr:E===Rh&&(g.mapping=Ws),g}function m(g){let E=0;const A=6;for(let D=0;D<A;D++)g[D]!==void 0&&E++;return E===A}function d(g){const E=g.target;E.removeEventListener("dispose",d);const A=e.get(E);A!==void 0&&(e.delete(E),A.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function ib(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ks("WebGLRenderer: "+r+" extension not supported."),l}}}function ab(s,e,i,r){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const E in g)e.update(g[E],s.ARRAY_BUFFER)}function d(x){const g=[],E=x.index,A=x.attributes.position;let D=0;if(A===void 0)return;if(E!==null){const P=E.array;D=E.version;for(let O=0,C=P.length;O<C;O+=3){const B=P[O+0],U=P[O+1],I=P[O+2];g.push(B,U,U,I,I,B)}}else{const P=A.array;D=A.version;for(let O=0,C=P.length/3-1;O<C;O+=3){const B=O+0,U=O+1,I=O+2;g.push(B,U,U,I,I,B)}}const b=new(A.count>=65535?hv:fv)(g,1);b.version=D;const M=c.get(x);M&&e.remove(M),c.set(x,b)}function v(x){const g=c.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:v}}function rb(s,e,i){let r;function l(x){r=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*h),i.update(g,r,1)}function d(x,g,E){E!==0&&(s.drawElementsInstanced(r,g,c,x*h,E),i.update(g,r,E))}function v(x,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,E);let D=0;for(let b=0;b<E;b++)D+=g[b];i.update(D,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function sb(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ob(s,e,i){const r=new WeakMap,l=new sn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let k=function(){S.dispose(),r.delete(p),p.removeEventListener("dispose",k)};var E=k;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let C=0;A===!0&&(C=1),D===!0&&(C=2),b===!0&&(C=3);let B=p.attributes.position.count*C,U=1;B>e.maxTextureSize&&(U=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*U*4*x),S=new cv(I,B,U,x);S.type=Fi,S.needsUpdate=!0;const N=C*4;for(let G=0;G<x;G++){const Q=M[G],fe=P[G],pe=O[G],$=B*U*4*G;for(let z=0;z<Q.count;z++){const H=z*N;A===!0&&(l.fromBufferAttribute(Q,z),I[$+H+0]=l.x,I[$+H+1]=l.y,I[$+H+2]=l.z,I[$+H+3]=0),D===!0&&(l.fromBufferAttribute(fe,z),I[$+H+4]=l.x,I[$+H+5]=l.y,I[$+H+6]=l.z,I[$+H+7]=0),b===!0&&(l.fromBufferAttribute(pe,z),I[$+H+8]=l.x,I[$+H+9]=l.y,I[$+H+10]=l.z,I[$+H+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:S,size:new mt(B,U)},r.set(p,g),p.addEventListener("dispose",k)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let A=0;for(let b=0;b<d.length;b++)A+=d[b];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(s,"morphTargetBaseInfluence",D),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function lb(s,e,i,r,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const cb={[K_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[J_]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[$_]:"AGX_TONE_MAPPING",[ev]:"NEUTRAL_TONE_MAPPING",[j_]:"CUSTOM_TONE_MAPPING"};function ub(s,e,i,r,l,c){const h=new Ki(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new qs(e,i):void 0}),p=new Ki(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),m=new Nn;m.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const d=new WS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new $n(m,d),x=new E0(-1,1,1,-1,0,1);let g=null,E=null,A=!1,D,b=null,M=[],P=!1;this.setSize=function(O,C){h.setSize(O,C),p.setSize(O,C);for(let B=0;B<M.length;B++){const U=M[B];U.setSize&&U.setSize(O,C)}},this.setEffects=function(O){M=O,P=M.length>0&&M[0].isRenderPass===!0;const C=h.width,B=h.height;for(let U=0;U<M.length;U++){const I=M[U];I.setSize&&I.setSize(C,B)}},this.begin=function(O,C){if(A||O.toneMapping===Yi&&M.length===0)return!1;if(b=C,C!==null){const B=C.width,U=C.height;(h.width!==B||h.height!==U)&&this.setSize(B,U)}return P===!1&&O.setRenderTarget(h),D=O.toneMapping,O.toneMapping=Yi,!0},this.hasRenderPass=function(){return P},this.end=function(O,C){O.toneMapping=D,A=!0;let B=h,U=p;for(let I=0;I<M.length;I++){const S=M[I];if(S.enabled!==!1&&(S.render(O,U,B,C),S.needsSwap!==!1)){const N=B;B=U,U=N}}if(g!==O.outputColorSpace||E!==O.toneMapping){g=O.outputColorSpace,E=O.toneMapping,d.defines={},At.getTransfer(g)===Gt&&(d.defines.SRGB_TRANSFER="");const I=cb[E];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=B.texture,O.setRenderTarget(b),O.render(v,x),b=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Av=new Hn,Jd=new qs(1,1),Tv=new cv,Rv=new SS,Cv=new _v,m_=[],g_=[],__=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function Qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=m_[l];if(c===void 0&&(c=new Float32Array(l),m_[l]=c),e!==0){r.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,s[h].toArray(c,p)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function mu(s,e){let i=g_[e];i===void 0&&(i=new Int32Array(e),g_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function fb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function hb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function db(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function pb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function mb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;x_.set(r),s.uniformMatrix2fv(this.addr,!1,x_),yn(i,r)}}function gb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;v_.set(r),s.uniformMatrix3fv(this.addr,!1,v_),yn(i,r)}}function _b(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;__.set(r),s.uniformMatrix4fv(this.addr,!1,__),yn(i,r)}}function vb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function xb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function Mb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function Sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function yb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Eb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function bb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function Ab(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function Tb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Jd.compareFunction=i.isReversedDepthBuffer()?f0:u0,c=Jd):c=Av,i.setTexture2D(e||c,l)}function Rb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Rv,l)}function Cb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Cv,l)}function wb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Tv,l)}function Db(s){switch(s){case 5126:return fb;case 35664:return hb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return xb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return yb;case 36294:return Eb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return wb}}function Ub(s,e){s.uniform1fv(this.addr,e)}function Lb(s,e){const i=Qs(e,this.size,2);s.uniform2fv(this.addr,i)}function Nb(s,e){const i=Qs(e,this.size,3);s.uniform3fv(this.addr,i)}function Ob(s,e){const i=Qs(e,this.size,4);s.uniform4fv(this.addr,i)}function Pb(s,e){const i=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Fb(s,e){const i=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Ib(s,e){const i=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Bb(s,e){s.uniform1iv(this.addr,e)}function zb(s,e){s.uniform2iv(this.addr,e)}function Hb(s,e){s.uniform3iv(this.addr,e)}function Vb(s,e){s.uniform4iv(this.addr,e)}function Gb(s,e){s.uniform1uiv(this.addr,e)}function kb(s,e){s.uniform2uiv(this.addr,e)}function Xb(s,e){s.uniform3uiv(this.addr,e)}function Zb(s,e){s.uniform4uiv(this.addr,e)}function Wb(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=Jd:h=Av;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function qb(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Rv,c[h])}function Yb(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Cv,c[h])}function Kb(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Tv,c[h])}function Qb(s){switch(s){case 5126:return Ub;case 35664:return Lb;case 35665:return Nb;case 35666:return Ob;case 35674:return Pb;case 35675:return Fb;case 35676:return Ib;case 5124:case 35670:return Bb;case 35667:case 35671:return zb;case 35668:case 35672:return Hb;case 35669:case 35673:return Vb;case 5125:return Gb;case 36294:return kb;case 36295:return Xb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return Kb}}class Jb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Db(i.type)}}class jb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Qb(i.type)}}class $b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function M_(s,e){s.seq.push(e),s.map[e.id]=e}function eA(s,e,i){const r=s.name,l=r.length;for(ad.lastIndex=0;;){const c=ad.exec(r),h=ad.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){M_(i,d===void 0?new Jb(p,s,e):new jb(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new $b(p),M_(i,x)),i=x}}}class tu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);eA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function S_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const tA=37297;let nA=0;function iA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;r.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const y_=new ot;function aA(s){At._getMatrix(y_,At.workingColorSpace,s);const e=`mat3( ${y_.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+iA(s.getShaderSource(e),p)}else return c}function rA(s,e){const i=aA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[K_]:"Linear",[Q_]:"Reinhard",[J_]:"Cineon",[n0]:"ACESFilmic",[$_]:"AgX",[ev]:"Neutral",[j_]:"Custom"};function oA(s,e){const i=sA[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new K;function lA(){At.getLuminanceCoefficients(Kc);const s=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function uA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function fA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:p}}return i}function nl(s){return s!==""}function b_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(hA,pA)}const dA=new Map;function pA(s,e){let i=pt[e];if(i===void 0){const r=dA.get(e);if(r!==void 0)i=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jd(i)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(s){return s.replace(mA,gA)}function gA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _A={[Qc]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function vA(s){return _A[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xA={[Vr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function MA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[Ws]:"ENVMAP_MODE_REFRACTION"};function yA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EA={[Y_]:"ENVMAP_BLENDING_MULTIPLY",[zM]:"ENVMAP_BLENDING_MIX",[HM]:"ENVMAP_BLENDING_ADD"};function bA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":EA[s.combine]||"ENVMAP_BLENDING_NONE"}function AA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function TA(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=vA(i),d=MA(i),v=yA(i),x=bA(i),g=AA(i),E=cA(i),A=uA(c),D=l.createProgram();let b,M,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),b.length>0&&(b+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(nl).join(`
`),M.length>0&&(M+=`
`)):(b=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),M=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),lA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=jd(h),h=b_(h,i),h=A_(h,i),p=jd(p),p=b_(p,i),p=A_(p,i),h=T_(h),p=T_(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,M=["#define varying in",i.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const O=P+b+h,C=P+M+p,B=S_(l,l.VERTEX_SHADER,O),U=S_(l,l.FRAGMENT_SHADER,C);l.attachShader(D,B),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function I(G){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(D)||"",fe=l.getShaderInfoLog(B)||"",pe=l.getShaderInfoLog(U)||"",$=Q.trim(),z=fe.trim(),H=pe.trim();let te=!0,_e=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,B,U);else{const be=E_(l,B,"vertex"),F=E_(l,U,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+be+`
`+F)}else $!==""?rt("WebGLProgram: Program Info Log:",$):(z===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:te,programLog:$,vertexShader:{log:z,prefix:b},fragmentShader:{log:H,prefix:M}})}l.deleteShader(B),l.deleteShader(U),S=new tu(l,D),N=fA(l,D)}let S;this.getUniforms=function(){return S===void 0&&I(this),S};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(D,tA)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=U,this}let RA=0;class CA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new wA(e),i.set(e,r)),r}}class wA{constructor(e){this.id=RA++,this.code=e,this.usedTimes=0}}function DA(s){return s===Gr||s===nu||s===iu}function UA(s,e,i,r,l,c){const h=new p0,p=new CA,m=new Set,d=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(S){return m.add(S),S===0?"uv":`uv${S}`}function D(S,N,k,G,Q,fe){const pe=G.fog,$=Q.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,te=e.get(S.envMap||z,H),_e=te&&te.mapping===uu?te.image.height:null,be=E[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&rt("WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const F=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,J=F!==void 0?F.length:0;let Ee=0;$.morphAttributes.position!==void 0&&(Ee=1),$.morphAttributes.normal!==void 0&&(Ee=2),$.morphAttributes.color!==void 0&&(Ee=3);let Ce,Pe,re,Me;if(be){const Xe=Wi[be];Ce=Xe.vertexShader,Pe=Xe.fragmentShader}else{Ce=S.vertexShader,Pe=S.fragmentShader;const Xe=p.getVertexShaderStage(S),tn=p.getFragmentShaderStage(S);p.update(S,Xe,tn),re=Xe.id,Me=tn.id}const Se=s.getRenderTarget(),ze=s.state.buffers.depth.getReversed(),it=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,kt=!!S.map,lt=!!S.matcap,ht=!!te,gt=!!S.aoMap,dt=!!S.lightMap,qt=!!S.bumpMap&&S.wireframe===!1,Lt=!!S.normalMap,Yt=!!S.displacementMap,jt=!!S.emissiveMap,Pt=!!S.metalnessMap,Kt=!!S.roughnessMap,q=S.anisotropy>0,Dt=S.clearcoat>0,He=S.dispersion>0,L=S.iridescence>0,y=S.sheen>0,X=S.transmission>0,ee=q&&!!S.anisotropyMap,de=Dt&&!!S.clearcoatMap,Re=Dt&&!!S.clearcoatNormalMap,we=Dt&&!!S.clearcoatRoughnessMap,ne=L&&!!S.iridescenceMap,ue=L&&!!S.iridescenceThicknessMap,Ae=y&&!!S.sheenColorMap,Fe=y&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,Ne=!!S.specularColorMap,Qe=!!S.specularIntensityMap,je=X&&!!S.transmissionMap,et=X&&!!S.thicknessMap,Z=!!S.gradientMap,De=!!S.alphaMap,ge=S.alphaTest>0,Le=!!S.alphaHash,Ve=!!S.extensions;let ye=Yi;S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ye={shaderID:be,shaderType:S.type,shaderName:S.name,vertexShader:Ce,fragmentShader:Pe,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:it,instancingColor:it&&Q.instanceColor!==null,instancingMorph:it&&Q.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:lt,envMap:ht,envMapMode:ht&&te.mapping,envMapCubeUVHeight:_e,aoMap:gt,lightMap:dt,bumpMap:qt,normalMap:Lt,displacementMap:Yt,emissiveMap:jt,normalMapObjectSpace:Lt&&S.normalMapType===kM,normalMapTangentSpace:Lt&&S.normalMapType===Yd,packedNormalMap:Lt&&S.normalMapType===Yd&&DA(S.normalMap.format),metalnessMap:Pt,roughnessMap:Kt,anisotropy:q,anisotropyMap:ee,clearcoat:Dt,clearcoatMap:de,clearcoatNormalMap:Re,clearcoatRoughnessMap:we,dispersion:He,iridescence:L,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:y,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:Qe,transmission:X,transmissionMap:je,thicknessMap:et,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:Le,combine:S.combine,mapUv:kt&&A(S.map.channel),aoMapUv:gt&&A(S.aoMap.channel),lightMapUv:dt&&A(S.lightMap.channel),bumpMapUv:qt&&A(S.bumpMap.channel),normalMapUv:Lt&&A(S.normalMap.channel),displacementMapUv:Yt&&A(S.displacementMap.channel),emissiveMapUv:jt&&A(S.emissiveMap.channel),metalnessMapUv:Pt&&A(S.metalnessMap.channel),roughnessMapUv:Kt&&A(S.roughnessMap.channel),anisotropyMapUv:ee&&A(S.anisotropyMap.channel),clearcoatMapUv:de&&A(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&A(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&A(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&A(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&A(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(S.sheenRoughnessMap.channel),specularMapUv:Ue&&A(S.specularMap.channel),specularColorMapUv:Ne&&A(S.specularColorMap.channel),specularIntensityMapUv:Qe&&A(S.specularIntensityMap.channel),transmissionMapUv:je&&A(S.transmissionMap.channel),thicknessMapUv:et&&A(S.thicknessMap.channel),alphaMapUv:De&&A(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Lt||q),vertexNormals:!!$.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!$.attributes.uv&&(kt||De),fog:!!pe,useFog:S.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||$.attributes.normal===void 0&&Lt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ze,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Gt,decodeVideoTextureEmissive:jt&&S.emissiveMap.isVideoTexture===!0&&At.getTransfer(S.emissiveMap.colorSpace)===Gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oi,flipSided:S.side===jn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function b(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)N.push(k),N.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(M(N,S),P(N,S),N.push(s.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function M(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function P(S,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),S.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),S.push(h.mask)}function O(S){const N=E[S.type];let k;if(N){const G=Wi[N];k=kS.clone(G.uniforms)}else k=S.uniforms;return k}function C(S,N){let k=v.get(N);return k!==void 0?++k.usedTimes:(k=new TA(s,N,S,l),d.push(k),v.set(N,k)),k}function B(S){if(--S.usedTimes===0){const N=d.indexOf(S);d[N]=d[d.length-1],d.pop(),v.delete(S.cacheKey),S.destroy()}}function U(S){p.remove(S)}function I(){p.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:O,acquireProgram:C,releaseProgram:B,releaseShaderCache:U,programs:d,dispose:I}}function LA(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let p=s.get(h);return p===void 0&&(p={},s.set(h,p)),p}function r(h){s.delete(h)}function l(h,p,m){s.get(h)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function NA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function C_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function w_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,A,D,b,M){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:E,material:A,materialVariant:h(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:M},s[e]=P):(P.id=g.id,P.object=g,P.geometry=E,P.material=A,P.materialVariant=h(g),P.groupOrder=D,P.renderOrder=g.renderOrder,P.z=b,P.group=M),e++,P}function m(g,E,A,D,b,M){const P=p(g,E,A,D,b,M);A.transmission>0?r.push(P):A.transparent===!0?l.push(P):i.push(P)}function d(g,E,A,D,b,M){const P=p(g,E,A,D,b,M);A.transmission>0?r.unshift(P):A.transparent===!0?l.unshift(P):i.unshift(P)}function v(g,E,A){i.length>1&&i.sort(g||NA),r.length>1&&r.sort(E||C_),l.length>1&&l.sort(E||C_),A&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,E=s.length;g<E;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:x,sort:v}}function OA(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new w_,s.set(r,[h])):l>=c.length?(h=new w_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function PA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Et};break;case"SpotLight":i={position:new K,direction:new K,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=i,i}}}function FA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let IA=0;function BA(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zA(s){const e=new PA,i=FA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new K);const l=new K,c=new Ot,h=new Ot;function p(d){let v=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,A=0,D=0,b=0,M=0,P=0,O=0,C=0,B=0,U=0,I=0;d.sort(BA);for(let N=0,k=d.length;N<k;N++){const G=d[N],Q=G.color,fe=G.intensity,pe=G.distance;let $=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Gr?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*fe,x+=Q.g*fe,g+=Q.b*fe;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],fe);I++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.directionalShadow[E]=te,r.directionalShadowMap[E]=$,r.directionalShadowMatrix[E]=G.shadow.matrix,P++}r.directional[E]=z,E++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(Q).multiplyScalar(fe),z.distance=pe,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[D]=z;const H=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,H.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[D]=H.matrix,G.castShadow){const te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,r.spotShadow[D]=te,r.spotShadowMap[D]=$,C++}D++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(Q).multiplyScalar(fe),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[b]=z,b++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,te=i.get(G);te.shadowIntensity=H.intensity,te.shadowBias=H.bias,te.shadowNormalBias=H.normalBias,te.shadowRadius=H.radius,te.shadowMapSize=H.mapSize,te.shadowCameraNear=H.camera.near,te.shadowCameraFar=H.camera.far,r.pointShadow[A]=te,r.pointShadowMap[A]=$,r.pointShadowMatrix[A]=G.shadow.matrix,O++}r.point[A]=z,A++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(fe),z.groundColor.copy(G.groundColor).multiplyScalar(fe),r.hemi[M]=z,M++}}b>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const S=r.hash;(S.directionalLength!==E||S.pointLength!==A||S.spotLength!==D||S.rectAreaLength!==b||S.hemiLength!==M||S.numDirectionalShadows!==P||S.numPointShadows!==O||S.numSpotShadows!==C||S.numSpotMaps!==B||S.numLightProbes!==I)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=b,r.point.length=A,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=C+B-U,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,S.directionalLength=E,S.pointLength=A,S.spotLength=D,S.rectAreaLength=b,S.hemiLength=M,S.numDirectionalShadows=P,S.numPointShadows=O,S.numSpotShadows=C,S.numSpotMaps=B,S.numLightProbes=I,r.version=IA++)}function m(d,v){let x=0,g=0,E=0,A=0,D=0;const b=v.matrixWorldInverse;for(let M=0,P=d.length;M<P;M++){const O=d[M];if(O.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(b),x++}else if(O.isSpotLight){const C=r.spot[E];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(b),C.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(b),E++}else if(O.isRectAreaLight){const C=r.rectArea[A];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(b),h.identity(),c.copy(O.matrixWorld),c.premultiply(b),h.extractRotation(c),C.halfWidth.set(O.width*.5,0,0),C.halfHeight.set(0,O.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),A++}else if(O.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(O.matrixWorld),C.position.applyMatrix4(b),g++}else if(O.isHemisphereLight){const C=r.hemi[D];C.direction.setFromMatrixPosition(O.matrixWorld),C.direction.transformDirection(b),D++}}}return{setup:p,setupView:m,state:r}}function D_(s){const e=new zA(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function HA(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new D_(s),e.set(l,[p])):c>=h.length?(p=new D_(s),h.push(p)):p=h[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`,kA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],XA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],U_=new Ot,$o=new K,rd=new K;function ZA(s,e,i){let r=new g0;const l=new mt,c=new mt,h=new sn,p=new qS,m=new YS,d={},v=i.maxTextureSize,x={[cr]:jn,[jn]:cr,[Oi]:Oi},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:VA,fragmentShader:GA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const A=new Nn;A.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new $n(A,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let M=this.type;this.render=function(U,I,S){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||U.length===0)return;this.type===MM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qc);const N=s.getRenderTarget(),k=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const fe=M!==this.type;fe&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach($=>$.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,$=U.length;pe<$;pe++){const z=U[pe],H=z.shadow;if(H===void 0){rt("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const te=H.getFrameExtents();l.multiply(te),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/te.x),l.x=c.x*te.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/te.y),l.y=c.y*te.y,H.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||fe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===tl){if(z.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ki(l.x,l.y,{format:Gr,type:Ta,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new qs(l.x,l.y,Fi),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else z.isPointLight?(H.map=new bv(l.x),H.map.depthTexture=new VS(l.x,Qi)):(H.map=new Ki(l.x,l.y),H.map.depthTexture=new qs(l.x,l.y,Qi)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ra,this.type===Qc?(H.map.depthTexture.compareFunction=_e?f0:u0,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<be;F++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,F),s.clear();else{F===0&&(s.setRenderTarget(H.map),s.clear());const J=H.getViewport(F);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Q.viewport(h)}if(z.isPointLight){const J=H.camera,Ee=H.matrix,Ce=z.distance||J.far;Ce!==J.far&&(J.far=Ce,J.updateProjectionMatrix()),$o.setFromMatrixPosition(z.matrixWorld),J.position.copy($o),rd.copy(J.position),rd.add(kA[F]),J.up.copy(XA[F]),J.lookAt(rd),J.updateMatrixWorld(),Ee.makeTranslation(-$o.x,-$o.y,-$o.z),U_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(U_,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),C(I,S,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===tl&&P(H,S),H.needsUpdate=!1}M=this.type,b.needsUpdate=!1,s.setRenderTarget(N,k,G)};function P(U,I){const S=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ki(l.x,l.y,{format:Gr,type:Ta})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,S,g,D,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value=U.mapSize,E.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,S,E,D,null)}function O(U,I,S,N){let k=null;const G=S.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)k=G;else if(k=S.isPointLight===!0?m:p,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=k.uuid,fe=I.uuid;let pe=d[Q];pe===void 0&&(pe={},d[Q]=pe);let $=pe[fe];$===void 0&&($=k.clone(),pe[fe]=$,I.addEventListener("dispose",B)),k=$}if(k.visible=I.visible,k.wireframe=I.wireframe,N===tl?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:x[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Q=s.properties.get(k);Q.light=S}return k}function C(U,I,S,N,k){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&k===tl)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,U.matrixWorld);const fe=e.update(U),pe=U.material;if(Array.isArray(pe)){const $=fe.groups;for(let z=0,H=$.length;z<H;z++){const te=$[z],_e=pe[te.materialIndex];if(_e&&_e.visible){const be=O(U,_e,N,k);U.onBeforeShadow(s,U,I,S,fe,be,te),s.renderBufferDirect(S,null,fe,be,U,te),U.onAfterShadow(s,U,I,S,fe,be,te)}}}else if(pe.visible){const $=O(U,pe,N,k);U.onBeforeShadow(s,U,I,S,fe,$,null),s.renderBufferDirect(S,null,fe,$,U,null),U.onAfterShadow(s,U,I,S,fe,$,null)}}const Q=U.children;for(let fe=0,pe=Q.length;fe<pe;fe++)C(Q[fe],I,S,N,k)}function B(U){U.target.removeEventListener("dispose",B);for(const S in d){const N=d[S],k=U.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function WA(s,e){function i(){let Z=!1;const De=new sn;let ge=null;const Le=new sn(0,0,0,0);return{setMask:function(Ve){ge!==Ve&&!Z&&(s.colorMask(Ve,Ve,Ve,Ve),ge=Ve)},setLocked:function(Ve){Z=Ve},setClear:function(Ve,ye,Ye,Xe,tn){tn===!0&&(Ve*=Xe,ye*=Xe,Ye*=Xe),De.set(Ve,ye,Ye,Xe),Le.equals(De)===!1&&(s.clearColor(Ve,ye,Ye,Xe),Le.copy(De))},reset:function(){Z=!1,ge=null,Le.set(-1,0,0,0)}}}function r(){let Z=!1,De=!1,ge=null,Le=null,Ve=null;return{setReversed:function(ye){if(De!==ye){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),De=ye;const Xe=Ve;Ve=null,this.setClear(Xe)}},getReversed:function(){return De},setTest:function(ye){ye?Se(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!Z&&(s.depthMask(ye),ge=ye)},setFunc:function(ye){if(De&&(ye=$M[ye]),Le!==ye){switch(ye){case cd:s.depthFunc(s.NEVER);break;case ud:s.depthFunc(s.ALWAYS);break;case fd:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case hd:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case pd:s.depthFunc(s.GREATER);break;case md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=ye}},setLocked:function(ye){Z=ye},setClear:function(ye){Ve!==ye&&(Ve=ye,De&&(ye=1-ye),s.clearDepth(ye))},reset:function(){Z=!1,ge=null,Le=null,Ve=null,De=!1}}}function l(){let Z=!1,De=null,ge=null,Le=null,Ve=null,ye=null,Ye=null,Xe=null,tn=null;return{setTest:function(Ft){Z||(Ft?Se(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Ft){De!==Ft&&!Z&&(s.stencilMask(Ft),De=Ft)},setFunc:function(Ft,ei,ti){(ge!==Ft||Le!==ei||Ve!==ti)&&(s.stencilFunc(Ft,ei,ti),ge=Ft,Le=ei,Ve=ti)},setOp:function(Ft,ei,ti){(ye!==Ft||Ye!==ei||Xe!==ti)&&(s.stencilOp(Ft,ei,ti),ye=Ft,Ye=ei,Xe=ti)},setLocked:function(Ft){Z=Ft},setClear:function(Ft){tn!==Ft&&(s.clearStencil(Ft),tn=Ft)},reset:function(){Z=!1,De=null,ge=null,Le=null,Ve=null,ye=null,Ye=null,Xe=null,tn=null}}}const c=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let v={},x={},g={},E=new WeakMap,A=[],D=null,b=!1,M=null,P=null,O=null,C=null,B=null,U=null,I=null,S=new Et(0,0,0),N=0,k=!1,G=null,Q=null,fe=null,pe=null,$=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=te>=1):_e.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=te>=2);let be=null,F={};const J=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Ce=new sn().fromArray(J),Pe=new sn().fromArray(Ee);function re(Z,De,ge,Le){const Ve=new Uint8Array(4),ye=s.createTexture();s.bindTexture(Z,ye),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ge;Ye++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(De+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return ye}const Me={};Me[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),h.setFunc(Zs),qt(!1),Lt(yg),Se(s.CULL_FACE),gt(ba);function Se(Z){v[Z]!==!0&&(s.enable(Z),v[Z]=!0)}function ze(Z){v[Z]!==!1&&(s.disable(Z),v[Z]=!1)}function it(Z,De){return g[Z]!==De?(s.bindFramebuffer(Z,De),g[Z]=De,Z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),Z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Je(Z,De){let ge=A,Le=!1;if(Z){ge=E.get(De),ge===void 0&&(ge=[],E.set(De,ge));const Ve=Z.textures;if(ge.length!==Ve.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ye=Ve.length;ye<Ye;ye++)ge[ye]=s.COLOR_ATTACHMENT0+ye;ge.length=Ve.length,Le=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ge)}function kt(Z){return D!==Z?(s.useProgram(Z),D=Z,!0):!1}const lt={[Fr]:s.FUNC_ADD,[yM]:s.FUNC_SUBTRACT,[EM]:s.FUNC_REVERSE_SUBTRACT};lt[bM]=s.MIN,lt[AM]=s.MAX;const ht={[TM]:s.ZERO,[RM]:s.ONE,[CM]:s.SRC_COLOR,[od]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[LM]:s.DST_COLOR,[DM]:s.DST_ALPHA,[wM]:s.ONE_MINUS_SRC_COLOR,[ld]:s.ONE_MINUS_SRC_ALPHA,[NM]:s.ONE_MINUS_DST_COLOR,[UM]:s.ONE_MINUS_DST_ALPHA,[PM]:s.CONSTANT_COLOR,[FM]:s.ONE_MINUS_CONSTANT_COLOR,[IM]:s.CONSTANT_ALPHA,[BM]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(Z,De,ge,Le,Ve,ye,Ye,Xe,tn,Ft){if(Z===ba){b===!0&&(ze(s.BLEND),b=!1);return}if(b===!1&&(Se(s.BLEND),b=!0),Z!==SM){if(Z!==M||Ft!==k){if((P!==Fr||B!==Fr)&&(s.blendEquation(s.FUNC_ADD),P=Fr,B=Fr),Ft)switch(Z){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eg:s.blendFunc(s.ONE,s.ONE);break;case bg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ag:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bg:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",Z);break}O=null,C=null,U=null,I=null,S.set(0,0,0),N=0,M=Z,k=Ft}return}Ve=Ve||De,ye=ye||ge,Ye=Ye||Le,(De!==P||Ve!==B)&&(s.blendEquationSeparate(lt[De],lt[Ve]),P=De,B=Ve),(ge!==O||Le!==C||ye!==U||Ye!==I)&&(s.blendFuncSeparate(ht[ge],ht[Le],ht[ye],ht[Ye]),O=ge,C=Le,U=ye,I=Ye),(Xe.equals(S)===!1||tn!==N)&&(s.blendColor(Xe.r,Xe.g,Xe.b,tn),S.copy(Xe),N=tn),M=Z,k=!1}function dt(Z,De){Z.side===Oi?ze(s.CULL_FACE):Se(s.CULL_FACE);let ge=Z.side===jn;De&&(ge=!ge),qt(ge),Z.blending===Gs&&Z.transparent===!1?gt(ba):gt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Le=Z.stencilWrite;p.setTest(Le),Le&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),jt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(Z){G!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),G=Z)}function Lt(Z){Z!==vM?(Se(s.CULL_FACE),Z!==Q&&(Z===yg?s.cullFace(s.BACK):Z===xM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),Q=Z}function Yt(Z){Z!==fe&&(H&&s.lineWidth(Z),fe=Z)}function jt(Z,De,ge){Z?(Se(s.POLYGON_OFFSET_FILL),(pe!==De||$!==ge)&&(pe=De,$=ge,h.getReversed()&&(De=-De),s.polygonOffset(De,ge))):ze(s.POLYGON_OFFSET_FILL)}function Pt(Z){Z?Se(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Kt(Z){Z===void 0&&(Z=s.TEXTURE0+z-1),be!==Z&&(s.activeTexture(Z),be=Z)}function q(Z,De,ge){ge===void 0&&(be===null?ge=s.TEXTURE0+z-1:ge=be);let Le=F[ge];Le===void 0&&(Le={type:void 0,texture:void 0},F[ge]=Le),(Le.type!==Z||Le.texture!==De)&&(be!==ge&&(s.activeTexture(ge),be=ge),s.bindTexture(Z,De||Me[Z]),Le.type=Z,Le.texture=De)}function Dt(){const Z=F[be];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function He(){try{s.compressedTexImage2D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function y(){try{s.texSubImage2D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function X(){try{s.texSubImage3D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function Re(){try{s.texStorage2D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function we(){try{s.texStorage3D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function ne(){try{s.texImage2D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function ue(){try{s.texImage3D(...arguments)}catch(Z){Tt("WebGLState:",Z)}}function Ae(Z){return x[Z]!==void 0?x[Z]:s.getParameter(Z)}function Fe(Z,De){x[Z]!==De&&(s.pixelStorei(Z,De),x[Z]=De)}function Ue(Z){Ce.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Ce.copy(Z))}function Ne(Z){Pe.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Pe.copy(Z))}function Qe(Z,De){let ge=d.get(De);ge===void 0&&(ge=new WeakMap,d.set(De,ge));let Le=ge.get(Z);Le===void 0&&(Le=s.getUniformBlockIndex(De,Z.name),ge.set(Z,Le))}function je(Z,De){const Le=d.get(De).get(Z);m.get(De)!==Le&&(s.uniformBlockBinding(De,Le,Z.__bindingPointIndex),m.set(De,Le))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},be=null,F={},g={},E=new WeakMap,A=[],D=null,b=!1,M=null,P=null,O=null,C=null,B=null,U=null,I=null,S=new Et(0,0,0),N=0,k=!1,G=null,Q=null,fe=null,pe=null,$=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Se,disable:ze,bindFramebuffer:it,drawBuffers:Je,useProgram:kt,setBlending:gt,setMaterial:dt,setFlipSided:qt,setCullFace:Lt,setLineWidth:Yt,setPolygonOffset:jt,setScissorTest:Pt,activeTexture:Kt,bindTexture:q,unbindTexture:Dt,compressedTexImage2D:He,compressedTexImage3D:L,texImage2D:ne,texImage3D:ue,pixelStorei:Fe,getParameter:Ae,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Re,texStorage3D:we,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:ee,compressedTexSubImage3D:de,scissor:Ue,viewport:Ne,reset:et}}function qA(s,e,i,r,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new mt,v=new WeakMap,x=new Set;let g;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(L,y){return A?new OffscreenCanvas(L,y):cl("canvas")}function b(L,y,X){let ee=1;const de=He(L);if((de.width>X||de.height>X)&&(ee=X/Math.max(de.width,de.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(ee*de.width),we=Math.floor(ee*de.height);g===void 0&&(g=D(Re,we));const ne=y?D(Re,we):g;return ne.width=Re,ne.height=we,ne.getContext("2d").drawImage(L,0,0,Re,we),rt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Re+"x"+we+")."),ne}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function M(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(L,y,X,ee,de,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let we;ee&&(we=e.get("EXT_texture_norm16"),we||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===s.RED&&(X===s.FLOAT&&(ne=s.R32F),X===s.HALF_FLOAT&&(ne=s.R16F),X===s.UNSIGNED_BYTE&&(ne=s.R8),X===s.UNSIGNED_SHORT&&we&&(ne=we.R16_EXT),X===s.SHORT&&we&&(ne=we.R16_SNORM_EXT)),y===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ne=s.R8UI),X===s.UNSIGNED_SHORT&&(ne=s.R16UI),X===s.UNSIGNED_INT&&(ne=s.R32UI),X===s.BYTE&&(ne=s.R8I),X===s.SHORT&&(ne=s.R16I),X===s.INT&&(ne=s.R32I)),y===s.RG&&(X===s.FLOAT&&(ne=s.RG32F),X===s.HALF_FLOAT&&(ne=s.RG16F),X===s.UNSIGNED_BYTE&&(ne=s.RG8),X===s.UNSIGNED_SHORT&&we&&(ne=we.RG16_EXT),X===s.SHORT&&we&&(ne=we.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ne=s.RG8UI),X===s.UNSIGNED_SHORT&&(ne=s.RG16UI),X===s.UNSIGNED_INT&&(ne=s.RG32UI),X===s.BYTE&&(ne=s.RG8I),X===s.SHORT&&(ne=s.RG16I),X===s.INT&&(ne=s.RG32I)),y===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),X===s.UNSIGNED_INT&&(ne=s.RGB32UI),X===s.BYTE&&(ne=s.RGB8I),X===s.SHORT&&(ne=s.RGB16I),X===s.INT&&(ne=s.RGB32I)),y===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),X===s.UNSIGNED_INT&&(ne=s.RGBA32UI),X===s.BYTE&&(ne=s.RGBA8I),X===s.SHORT&&(ne=s.RGBA16I),X===s.INT&&(ne=s.RGBA32I)),y===s.RGB&&(X===s.UNSIGNED_SHORT&&we&&(ne=we.RGB16_EXT),X===s.SHORT&&we&&(ne=we.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),y===s.RGBA){const ue=Re?ru:At.getTransfer(de);X===s.FLOAT&&(ne=s.RGBA32F),X===s.HALF_FLOAT&&(ne=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ne=ue===Gt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&we&&(ne=we.RGBA16_EXT),X===s.SHORT&&we&&(ne=we.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function B(L,y){let X;return L?y===null||y===Qi||y===ol?X=s.DEPTH24_STENCIL8:y===Fi?X=s.DEPTH32F_STENCIL8:y===sl&&(X=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===ol?X=s.DEPTH_COMPONENT24:y===Fi?X=s.DEPTH_COMPONENT32F:y===sl&&(X=s.DEPTH_COMPONENT16),X}function U(L,y){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function I(L){const y=L.target;y.removeEventListener("dispose",I),N(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&x.delete(y)}function S(L){const y=L.target;y.removeEventListener("dispose",S),G(y)}function N(L){const y=r.get(L);if(y.__webglInit===void 0)return;const X=L.source,ee=E.get(X);if(ee){const de=ee[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(L),Object.keys(ee).length===0&&E.delete(X)}r.remove(L)}function k(L){const y=r.get(L);s.deleteTexture(y.__webglTexture);const X=L.source,ee=E.get(X);delete ee[y.__cacheKey],h.memory.textures--}function G(L){const y=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let de=0;de<y.__webglFramebuffer[ee].length;de++)s.deleteFramebuffer(y.__webglFramebuffer[ee][de]);else s.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)s.deleteFramebuffer(y.__webglFramebuffer[ee]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=L.textures;for(let ee=0,de=X.length;ee<de;ee++){const Re=r.get(X[ee]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),h.memory.textures--),r.remove(X[ee])}r.remove(L)}let Q=0;function fe(){Q=0}function pe(){return Q}function $(L){Q=L}function z(){const L=Q;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Q+=1,L}function H(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function te(L,y){const X=r.get(L);if(L.isVideoTexture&&q(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const ee=L.image;if(ee===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(X,L,y);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+y)}function _e(L,y){const X=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ze(X,L,y);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+y)}function be(L,y){const X=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ze(X,L,y);return}i.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+y)}function F(L,y){const X=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){it(X,L,y);return}i.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+y)}const J={[gd]:s.REPEAT,[Ea]:s.CLAMP_TO_EDGE,[_d]:s.MIRRORED_REPEAT},Ee={[Un]:s.NEAREST,[VM]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Ch]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Ce={[XM]:s.NEVER,[KM]:s.ALWAYS,[ZM]:s.LESS,[u0]:s.LEQUAL,[WM]:s.EQUAL,[f0]:s.GEQUAL,[qM]:s.GREATER,[YM]:s.NOTEQUAL};function Pe(L,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zn||y.magFilter===Ch||y.magFilter===Ec||y.magFilter===Br||y.minFilter===zn||y.minFilter===Ch||y.minFilter===Ec||y.minFilter===Br)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,J[y.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ee[y.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Un||y.minFilter!==Ec&&y.minFilter!==Br||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function re(L,y){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",I));const ee=y.source;let de=E.get(ee);de===void 0&&(de={},E.set(ee,de));const Re=H(y);if(Re!==L.__cacheKey){de[Re]===void 0&&(de[Re]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,X=!0),de[Re].usedTimes++;const we=de[L.__cacheKey];we!==void 0&&(de[L.__cacheKey].usedTimes--,we.usedTimes===0&&k(y)),L.__cacheKey=Re,L.__webglTexture=de[Re].texture}return X}function Me(L,y,X){return Math.floor(Math.floor(L/X)/y)}function Se(L,y,X,ee){const Re=L.updateRanges;if(Re.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,X,ee,y.data);else{Re.sort((Fe,Ue)=>Fe.start-Ue.start);let we=0;for(let Fe=1;Fe<Re.length;Fe++){const Ue=Re[we],Ne=Re[Fe],Qe=Ue.start+Ue.count,je=Me(Ne.start,y.width,4),et=Me(Ue.start,y.width,4);Ne.start<=Qe+1&&je===et&&Me(Ne.start+Ne.count-1,y.width,4)===je?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++we,Re[we]=Ne)}Re.length=we+1;const ne=i.getParameter(s.UNPACK_ROW_LENGTH),ue=i.getParameter(s.UNPACK_SKIP_PIXELS),Ae=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,Ue=Re.length;Fe<Ue;Fe++){const Ne=Re[Fe],Qe=Math.floor(Ne.start/4),je=Math.ceil(Ne.count/4),et=Qe%y.width,Z=Math.floor(Qe/y.width),De=je,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,et),i.pixelStorei(s.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(s.TEXTURE_2D,0,et,Z,De,ge,X,ee,y.data)}L.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ne),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function ze(L,y,X){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);const de=re(L,y),Re=y.source;i.bindTexture(ee,L.__webglTexture,s.TEXTURE0+X);const we=r.get(Re);if(Re.version!==we.__version||de===!0){if(i.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=At.getPrimaries(At.workingColorSpace),Le=y.colorSpace===or?null:At.getPrimaries(y.colorSpace),Ve=y.colorSpace===or||ge===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ue=b(y.image,!1,l.maxTextureSize);ue=Dt(y,ue);const Ae=c.convert(y.format,y.colorSpace),Fe=c.convert(y.type);let Ue=C(y.internalFormat,Ae,Fe,y.normalized,y.colorSpace,y.isVideoTexture);Pe(ee,y);let Ne;const Qe=y.mipmaps,je=y.isVideoTexture!==!0,et=we.__version===void 0||de===!0,Z=Re.dataReady,De=U(y,ue);if(y.isDepthTexture)Ue=B(y.format===zr,y.type),et&&(je?i.texStorage2D(s.TEXTURE_2D,1,Ue,ue.width,ue.height):i.texImage2D(s.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ae,Fe,null));else if(y.isDataTexture)if(Qe.length>0){je&&et&&i.texStorage2D(s.TEXTURE_2D,De,Ue,Qe[0].width,Qe[0].height);for(let ge=0,Le=Qe.length;ge<Le;ge++)Ne=Qe[ge],je?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Ae,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,Ae,Fe,Ne.data);y.generateMipmaps=!1}else je?(et&&i.texStorage2D(s.TEXTURE_2D,De,Ue,ue.width,ue.height),Z&&Se(y,ue,Ae,Fe)):i.texImage2D(s.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ae,Fe,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){je&&et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ue,Qe[0].width,Qe[0].height,ue.depth);for(let ge=0,Le=Qe.length;ge<Le;ge++)if(Ne=Qe[ge],y.format!==Ii)if(Ae!==null)if(je){if(Z)if(y.layerUpdates.size>0){const Ve=l_(Ne.width,Ne.height,y.format,y.type);for(const ye of y.layerUpdates){const Ye=Ne.data.subarray(ye*Ve/Ne.data.BYTES_PER_ELEMENT,(ye+1)*Ve/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ye,Ne.width,Ne.height,1,Ae,Ye)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,ue.depth,Ae,Ne.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Ne.width,Ne.height,ue.depth,0,Ne.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?Z&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,ue.depth,Ae,Fe,Ne.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Ne.width,Ne.height,ue.depth,0,Ae,Fe,Ne.data)}else{je&&et&&i.texStorage2D(s.TEXTURE_2D,De,Ue,Qe[0].width,Qe[0].height);for(let ge=0,Le=Qe.length;ge<Le;ge++)Ne=Qe[ge],y.format!==Ii?Ae!==null?je?Z&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Ae,Ne.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,Ne.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Ae,Fe,Ne.data):i.texImage2D(s.TEXTURE_2D,ge,Ue,Ne.width,Ne.height,0,Ae,Fe,Ne.data)}else if(y.isDataArrayTexture)if(je){if(et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ue,ue.width,ue.height,ue.depth),Z)if(y.layerUpdates.size>0){const ge=l_(ue.width,ue.height,y.format,y.type);for(const Le of y.layerUpdates){const Ve=ue.data.subarray(Le*ge/ue.data.BYTES_PER_ELEMENT,(Le+1)*ge/ue.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,ue.width,ue.height,1,Ae,Fe,Ve)}y.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Fe,ue.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,ue.width,ue.height,ue.depth,0,Ae,Fe,ue.data);else if(y.isData3DTexture)je?(et&&i.texStorage3D(s.TEXTURE_3D,De,Ue,ue.width,ue.height,ue.depth),Z&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Fe,ue.data)):i.texImage3D(s.TEXTURE_3D,0,Ue,ue.width,ue.height,ue.depth,0,Ae,Fe,ue.data);else if(y.isFramebufferTexture){if(et)if(je)i.texStorage2D(s.TEXTURE_2D,De,Ue,ue.width,ue.height);else{let ge=ue.width,Le=ue.height;for(let Ve=0;Ve<De;Ve++)i.texImage2D(s.TEXTURE_2D,Ve,Ue,ge,Le,0,Ae,Fe,null),ge>>=1,Le>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ue.parentNode!==ge){ge.appendChild(ue),x.add(y),ge.onpaint=Le=>{const Ve=Le.changedElements;for(const ye of x)Ve.includes(ye.image)&&(ye.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ue);else{const Ve=s.RGBA,ye=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,ye,Ye,ue)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&et){const ge=He(Qe[0]);i.texStorage2D(s.TEXTURE_2D,De,Ue,ge.width,ge.height)}for(let ge=0,Le=Qe.length;ge<Le;ge++)Ne=Qe[ge],je?Z&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ae,Fe,Ne):i.texImage2D(s.TEXTURE_2D,ge,Ue,Ae,Fe,Ne);y.generateMipmaps=!1}else if(je){if(et){const ge=He(ue);i.texStorage2D(s.TEXTURE_2D,De,Ue,ge.width,ge.height)}Z&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Fe,ue)}else i.texImage2D(s.TEXTURE_2D,0,Ue,Ae,Fe,ue);M(y)&&P(ee),we.__version=Re.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function it(L,y,X){if(y.image.length!==6)return;const ee=re(L,y),de=y.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const Re=r.get(de);if(de.version!==Re.__version||ee===!0){i.activeTexture(s.TEXTURE0+X);const we=At.getPrimaries(At.workingColorSpace),ne=y.colorSpace===or?null:At.getPrimaries(y.colorSpace),ue=y.colorSpace===or||we===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!Ae&&!Fe?Ue[ye]=b(y.image[ye],!0,l.maxCubemapSize):Ue[ye]=Fe?y.image[ye].image:y.image[ye],Ue[ye]=Dt(y,Ue[ye]);const Ne=Ue[0],Qe=c.convert(y.format,y.colorSpace),je=c.convert(y.type),et=C(y.internalFormat,Qe,je,y.normalized,y.colorSpace),Z=y.isVideoTexture!==!0,De=Re.__version===void 0||ee===!0,ge=de.dataReady;let Le=U(y,Ne);Pe(s.TEXTURE_CUBE_MAP,y);let Ve;if(Ae){Z&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,et,Ne.width,Ne.height);for(let ye=0;ye<6;ye++){Ve=Ue[ye].mipmaps;for(let Ye=0;Ye<Ve.length;Ye++){const Xe=Ve[Ye];y.format!==Ii?Qe!==null?Z?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Xe.width,Xe.height,Qe,Xe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,et,Xe.width,Xe.height,0,Xe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Xe.width,Xe.height,Qe,je,Xe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,et,Xe.width,Xe.height,0,Qe,je,Xe.data)}}}else{if(Ve=y.mipmaps,Z&&De){Ve.length>0&&Le++;const ye=He(Ue[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,et,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Fe){Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Qe,je,Ue[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,et,Ue[ye].width,Ue[ye].height,0,Qe,je,Ue[ye].data);for(let Ye=0;Ye<Ve.length;Ye++){const tn=Ve[Ye].image[ye].image;Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,tn.width,tn.height,Qe,je,tn.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,et,tn.width,tn.height,0,Qe,je,tn.data)}}else{Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Qe,je,Ue[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,et,Qe,je,Ue[ye]);for(let Ye=0;Ye<Ve.length;Ye++){const Xe=Ve[Ye];Z?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Qe,je,Xe.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,et,Qe,je,Xe.image[ye])}}}M(y)&&P(s.TEXTURE_CUBE_MAP),Re.__version=de.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Je(L,y,X,ee,de,Re){const we=c.convert(X.format,X.colorSpace),ne=c.convert(X.type),ue=C(X.internalFormat,we,ne,X.normalized,X.colorSpace),Ae=r.get(y),Fe=r.get(X);if(Fe.__renderTarget=y,!Ae.__hasExternalTextures){const Ue=Math.max(1,y.width>>Re),Ne=Math.max(1,y.height>>Re);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?i.texImage3D(de,Re,ue,Ue,Ne,y.depth,0,we,ne,null):i.texImage2D(de,Re,ue,Ue,Ne,0,we,ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,de,Fe.__webglTexture,0,Pt(y)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,de,Fe.__webglTexture,Re),i.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(L,y,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),y.depthBuffer){const ee=y.depthTexture,de=ee&&ee.isDepthTexture?ee.type:null,Re=B(y.stencilBuffer,de),we=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(y),Re,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(y),Re,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Re,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,L)}else{const ee=y.textures;for(let de=0;de<ee.length;de++){const Re=ee[de],we=c.convert(Re.format,Re.colorSpace),ne=c.convert(Re.type),ue=C(Re.internalFormat,we,ne,Re.normalized,Re.colorSpace);Kt(y)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(y),ue,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(y),ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(L,y,X){const ee=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ae=c.convert(y.depthTexture.format),Fe=c.convert(y.depthTexture.type);let Ue;y.depthTexture.format===Ra?Ue=s.DEPTH_COMPONENT24:y.depthTexture.format===zr&&(Ue=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,y.width,y.height,0,Ae,Fe,null)}}else te(y.depthTexture,0);const Re=de.__webglTexture,we=Pt(y),ne=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ue=y.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ra)Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ne,Re,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,ue,ne,Re,0);else if(y.depthTexture.format===zr)Kt(y)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ne,Re,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,ue,ne,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(L){const y=r.get(L),X=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const ee=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",de)};ee.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=ee}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let ee=0;ee<6;ee++)lt(y.__webglFramebuffer[ee],L,ee);else{const ee=L.texture.mipmaps;ee&&ee.length>0?lt(y.__webglFramebuffer[0],L,0):lt(y.__webglFramebuffer,L,0)}else if(X){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=s.createRenderbuffer(),kt(y.__webglDepthbuffer[ee],L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=y.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Re)}}else{const ee=L.texture.mipmaps;if(ee&&ee.length>0?i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),kt(y.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Re)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(L,y,X){const ee=r.get(L);y!==void 0&&Je(ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ht(L)}function dt(L){const y=L.texture,X=r.get(L),ee=r.get(y);L.addEventListener("dispose",S);const de=L.textures,Re=L.isWebGLCubeRenderTarget===!0,we=de.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,h.memory.textures++),Re){X.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ne]=[];for(let ue=0;ue<y.mipmaps.length;ue++)X.__webglFramebuffer[ne][ue]=s.createFramebuffer()}else X.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)X.__webglFramebuffer[ne]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(we)for(let ne=0,ue=de.length;ne<ue;ne++){const Ae=r.get(de[ne]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&Kt(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ne=0;ne<de.length;ne++){const ue=de[ne];X.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[ne]);const Ae=c.convert(ue.format,ue.colorSpace),Fe=c.convert(ue.type),Ue=C(ue.internalFormat,Ae,Fe,ue.normalized,ue.colorSpace,L.isXRRenderTarget===!0),Ne=Pt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ue,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,X.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(X.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Je(X.__webglFramebuffer[ne][ue],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ue);else Je(X.__webglFramebuffer[ne],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);M(y)&&P(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let ne=0,ue=de.length;ne<ue;ne++){const Ae=de[ne],Fe=r.get(Ae);let Ue=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Fe.__webglTexture),Pe(Ue,Ae),Je(X.__webglFramebuffer,L,Ae,s.COLOR_ATTACHMENT0+ne,Ue,0),M(Ae)&&P(Ue)}i.unbindTexture()}else{let ne=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ne,ee.__webglTexture),Pe(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)Je(X.__webglFramebuffer[ue],L,y,s.COLOR_ATTACHMENT0,ne,ue);else Je(X.__webglFramebuffer,L,y,s.COLOR_ATTACHMENT0,ne,0);M(y)&&P(ne),i.unbindTexture()}L.depthBuffer&&ht(L)}function qt(L){const y=L.textures;for(let X=0,ee=y.length;X<ee;X++){const de=y[X];if(M(de)){const Re=O(L),we=r.get(de).__webglTexture;i.bindTexture(Re,we),P(Re),i.unbindTexture()}}}const Lt=[],Yt=[];function jt(L){if(L.samples>0){if(Kt(L)===!1){const y=L.textures,X=L.width,ee=L.height;let de=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=r.get(L),ne=y.length>1;if(ne)for(let Ae=0;Ae<y.length;Ae++)i.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ue=L.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Fe=r.get(y[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,X,ee,0,0,X,ee,de,s.NEAREST),m===!0&&(Lt.length=0,Yt.length=0,Lt.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(Re),Yt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let Ae=0;Ae<y.length;Ae++){i.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const Fe=r.get(y[Ae]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Fe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Pt(L){return Math.min(l.maxSamples,L.samples)}function Kt(L){const y=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(L){const y=h.render.frame;v.get(L)!==y&&(v.set(L,y),L.update())}function Dt(L,y){const X=L.colorSpace,ee=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==au&&X!==or&&(At.getTransfer(X)===Gt?(ee!==Ii||de!==mi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",X)),y}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=F,this.rebindTextures=gt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function YA(s,e){function i(r,l=or){let c;const h=At.getTransfer(l);if(r===mi)return s.UNSIGNED_BYTE;if(r===a0)return s.UNSIGNED_SHORT_4_4_4_4;if(r===r0)return s.UNSIGNED_SHORT_5_5_5_1;if(r===av)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===nv)return s.BYTE;if(r===iv)return s.SHORT;if(r===sl)return s.UNSIGNED_SHORT;if(r===i0)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Ta)return s.HALF_FLOAT;if(r===sv)return s.ALPHA;if(r===ov)return s.RGB;if(r===Ii)return s.RGBA;if(r===Ra)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===s0)return s.RED;if(r===o0)return s.RED_INTEGER;if(r===Gr)return s.RG;if(r===l0)return s.RG_INTEGER;if(r===c0)return s.RGBA_INTEGER;if(r===Jc||r===jc||r===$c||r===eu)if(h===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===xd||r===Md||r===Sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yd||r===Ed||r===bd||r===Ad||r===Td||r===nu||r===Rd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===yd||r===Ed)return h===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ad)return c.COMPRESSED_R11_EAC;if(r===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(r===nu)return c.COMPRESSED_RG11_EAC;if(r===Rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===Fd||r===Id||r===Bd||r===zd||r===Hd||r===Vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Cd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ud)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ld)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Od)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gd||r===kd||r===Xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Gd)return h===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zd||r===Wd||r===iu||r===qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ol?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const KA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
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

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new vv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ji({vertexShader:KA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends kr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,x=null,g=null,E=null,A=null;const D=typeof XRWebGLBinding<"u",b=new JA,M={},P=i.getContextAttributes();let O=null,C=null;const B=[],U=[],I=new mt;let S=null;const N=new pi;N.viewport=new sn;const k=new pi;k.viewport=new sn;const G=[N,k],Q=new ry;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=B[re];return Me===void 0&&(Me=new Oh,B[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=B[re];return Me===void 0&&(Me=new Oh,B[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=B[re];return Me===void 0&&(Me=new Oh,B[re]=Me),Me.getHandSpace()};function $(re){const Me=U.indexOf(re.inputSource);if(Me===-1)return;const Se=B[Me];Se!==void 0&&(Se.update(re.inputSource,re.frame,d||h),Se.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let re=0;re<B.length;re++){const Me=U[re];Me!==null&&(U[re]=null,B[re].disconnect(Me))}fe=null,pe=null,b.reset();for(const re in M)delete M[re];e.setRenderTarget(O),E=null,g=null,x=null,l=null,C=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){p=re,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await i.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ze=null,it=null;P.depth&&(it=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=P.stencil?zr:Ra,ze=P.stencil?ol:Qi);const Je={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ki(g.textureWidth,g.textureHeight,{format:Ii,type:mi,depthTexture:new qs(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Ki(E.framebufferWidth,E.framebufferHeight,{format:Ii,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function H(re){for(let Me=0;Me<re.removed.length;Me++){const Se=re.removed[Me],ze=U.indexOf(Se);ze>=0&&(U[ze]=null,B[ze].disconnect(Se))}for(let Me=0;Me<re.added.length;Me++){const Se=re.added[Me];let ze=U.indexOf(Se);if(ze===-1){for(let Je=0;Je<B.length;Je++)if(Je>=U.length){U.push(Se),ze=Je;break}else if(U[Je]===null){U[Je]=Se,ze=Je;break}if(ze===-1)break}const it=B[ze];it&&it.connect(Se)}}const te=new K,_e=new K;function be(re,Me,Se){te.setFromMatrixPosition(Me.matrixWorld),_e.setFromMatrixPosition(Se.matrixWorld);const ze=te.distanceTo(_e),it=Me.projectionMatrix.elements,Je=Se.projectionMatrix.elements,kt=it[14]/(it[10]-1),lt=it[14]/(it[10]+1),ht=(it[9]+1)/it[5],gt=(it[9]-1)/it[5],dt=(it[8]-1)/it[0],qt=(Je[8]+1)/Je[0],Lt=kt*dt,Yt=kt*qt,jt=ze/(-dt+qt),Pt=jt*-dt;if(Me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Pt),re.translateZ(jt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),it[10]===-1)re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Kt=kt+jt,q=lt+jt,Dt=Lt-Pt,He=Yt+(ze-Pt),L=ht*lt/q*Kt,y=gt*lt/q*Kt;re.projectionMatrix.makePerspective(Dt,He,L,y,Kt,q),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let Me=re.near,Se=re.far;b.texture!==null&&(b.depthNear>0&&(Me=b.depthNear),b.depthFar>0&&(Se=b.depthFar)),Q.near=k.near=N.near=Me,Q.far=k.far=N.far=Se,(fe!==Q.near||pe!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),fe=Q.near,pe=Q.far),Q.layers.mask=re.layers.mask|6,N.layers.mask=Q.layers.mask&-5,k.layers.mask=Q.layers.mask&-3;const ze=re.parent,it=Q.cameras;F(Q,ze);for(let Je=0;Je<it.length;Je++)F(it[Je],ze);it.length===2?be(Q,N,k):Q.projectionMatrix.copy(N.projectionMatrix),J(re,Q,ze)};function J(re,Me,Se){Se===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Se.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ul*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(re){m=re,g!==null&&(g.fixedFoveation=re),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=re)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Q)},this.getCameraTexture=function(re){return M[re]};let Ee=null;function Ce(re,Me){if(v=Me.getViewerPose(d||h),A=Me,v!==null){const Se=v.views;E!==null&&(e.setRenderTargetFramebuffer(C,E.framebuffer),e.setRenderTarget(C));let ze=!1;Se.length!==Q.cameras.length&&(Q.cameras.length=0,ze=!0);for(let lt=0;lt<Se.length;lt++){const ht=Se[lt];let gt=null;if(E!==null)gt=E.getViewport(ht);else{const qt=x.getViewSubImage(g,ht);gt=qt.viewport,lt===0&&(e.setRenderTargetTextures(C,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(C))}let dt=G[lt];dt===void 0&&(dt=new pi,dt.layers.enable(lt),dt.viewport=new sn,G[lt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(Q.matrix.copy(dt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ze===!0&&Q.cameras.push(dt)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const lt=x.getDepthInformation(Se[0]);lt&&lt.isValid&&lt.texture&&b.init(lt,l.renderState)}if(it&&it.includes("camera-access")&&D){e.state.unbindTexture(),x=r.getBinding();for(let lt=0;lt<Se.length;lt++){const ht=Se[lt].camera;if(ht){let gt=M[ht];gt||(gt=new vv,M[ht]=gt);const dt=x.getCameraImage(ht);gt.sourceTexture=dt}}}}for(let Se=0;Se<B.length;Se++){const ze=U[Se],it=B[Se];ze!==null&&it!==void 0&&it.update(ze,Me,d||h)}Ee&&Ee(re,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),A=null}const Pe=new yv;Pe.setAnimationLoop(Ce),this.setAnimationLoop=function(re){Ee=re},this.dispose=function(){}}}const $A=new Ot,wv=new ot;wv.set(-1,0,0,0,1,0,0,0,1);function eT(s,e){function i(b,M){b.matrixAutoUpdate===!0&&b.updateMatrix(),M.value.copy(b.matrix)}function r(b,M){M.color.getRGB(b.fogColor.value,xv(s)),M.isFog?(b.fogNear.value=M.near,b.fogFar.value=M.far):M.isFogExp2&&(b.fogDensity.value=M.density)}function l(b,M,P,O,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(b,M):M.isMeshLambertMaterial?(c(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(b,M),x(b,M)):M.isMeshPhongMaterial?(c(b,M),v(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(b,M),g(b,M),M.isMeshPhysicalMaterial&&E(b,M,C)):M.isMeshMatcapMaterial?(c(b,M),A(b,M)):M.isMeshDepthMaterial?c(b,M):M.isMeshDistanceMaterial?(c(b,M),D(b,M)):M.isMeshNormalMaterial?c(b,M):M.isLineBasicMaterial?(h(b,M),M.isLineDashedMaterial&&p(b,M)):M.isPointsMaterial?m(b,M,P,O):M.isSpriteMaterial?d(b,M):M.isShadowMaterial?(b.color.value.copy(M.color),b.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(b,M){b.opacity.value=M.opacity,M.color&&b.diffuse.value.copy(M.color),M.emissive&&b.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.bumpMap&&(b.bumpMap.value=M.bumpMap,i(M.bumpMap,b.bumpMapTransform),b.bumpScale.value=M.bumpScale,M.side===jn&&(b.bumpScale.value*=-1)),M.normalMap&&(b.normalMap.value=M.normalMap,i(M.normalMap,b.normalMapTransform),b.normalScale.value.copy(M.normalScale),M.side===jn&&b.normalScale.value.negate()),M.displacementMap&&(b.displacementMap.value=M.displacementMap,i(M.displacementMap,b.displacementMapTransform),b.displacementScale.value=M.displacementScale,b.displacementBias.value=M.displacementBias),M.emissiveMap&&(b.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,b.emissiveMapTransform)),M.specularMap&&(b.specularMap.value=M.specularMap,i(M.specularMap,b.specularMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest);const P=e.get(M),O=P.envMap,C=P.envMapRotation;O&&(b.envMap.value=O,b.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(C)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(wv),b.reflectivity.value=M.reflectivity,b.ior.value=M.ior,b.refractionRatio.value=M.refractionRatio),M.lightMap&&(b.lightMap.value=M.lightMap,b.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,b.lightMapTransform)),M.aoMap&&(b.aoMap.value=M.aoMap,b.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,b.aoMapTransform))}function h(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform))}function p(b,M){b.dashSize.value=M.dashSize,b.totalSize.value=M.dashSize+M.gapSize,b.scale.value=M.scale}function m(b,M,P,O){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.size.value=M.size*P,b.scale.value=O*.5,M.map&&(b.map.value=M.map,i(M.map,b.uvTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function d(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.rotation.value=M.rotation,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function v(b,M){b.specular.value.copy(M.specular),b.shininess.value=Math.max(M.shininess,1e-4)}function x(b,M){M.gradientMap&&(b.gradientMap.value=M.gradientMap)}function g(b,M){b.metalness.value=M.metalness,M.metalnessMap&&(b.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,b.metalnessMapTransform)),b.roughness.value=M.roughness,M.roughnessMap&&(b.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,b.roughnessMapTransform)),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)}function E(b,M,P){b.ior.value=M.ior,M.sheen>0&&(b.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),b.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(b.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,b.sheenColorMapTransform)),M.sheenRoughnessMap&&(b.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,b.sheenRoughnessMapTransform))),M.clearcoat>0&&(b.clearcoat.value=M.clearcoat,b.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(b.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,b.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(b.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===jn&&b.clearcoatNormalScale.value.negate())),M.dispersion>0&&(b.dispersion.value=M.dispersion),M.iridescence>0&&(b.iridescence.value=M.iridescence,b.iridescenceIOR.value=M.iridescenceIOR,b.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(b.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,b.iridescenceMapTransform)),M.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),M.transmission>0&&(b.transmission.value=M.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(b.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,b.transmissionMapTransform)),b.thickness.value=M.thickness,M.thicknessMap&&(b.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=M.attenuationDistance,b.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(b.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(b.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=M.specularIntensity,b.specularColor.value.copy(M.specularColor),M.specularColorMap&&(b.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,b.specularColorMapTransform)),M.specularIntensityMap&&(b.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,M){M.matcap&&(b.matcap.value=M.matcap)}function D(b,M){const P=e.get(M).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tT(s,e,i,r){let l={},c={},h=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,B){const U=B.program;r.uniformBlockBinding(C,U)}function d(C,B){let U=l[C.id];U===void 0&&(b(C),U=v(C),l[C.id]=U,C.addEventListener("dispose",P));const I=B.program;r.updateUBOMapping(C,I);const S=e.render.frame;c[C.id]!==S&&(g(C),c[C.id]=S)}function v(C){const B=x();C.__bindingPointIndex=B;const U=s.createBuffer(),I=C.__size,S=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,B,U),U}function x(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const B=l[C.id],U=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let S=0,N=U.length;S<N;S++){const k=U[S];if(Array.isArray(k))for(let G=0,Q=k.length;G<Q;G++)E(k[G],S,G,I);else E(k,S,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(C,B,U,I){if(D(C,B,U,I)===!0){const S=C.__offset,N=C.value;if(Array.isArray(N)){let k=0;for(let G=0;G<N.length;G++){const Q=N[G],fe=M(Q);A(Q,C.__data,k),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(k+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(N,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,S,C.__data)}}function A(C,B,U){typeof C=="number"||typeof C=="boolean"?B[0]=C:C.isMatrix3?(B[0]=C.elements[0],B[1]=C.elements[1],B[2]=C.elements[2],B[3]=0,B[4]=C.elements[3],B[5]=C.elements[4],B[6]=C.elements[5],B[7]=0,B[8]=C.elements[6],B[9]=C.elements[7],B[10]=C.elements[8],B[11]=0):ArrayBuffer.isView(C)?B.set(new C.constructor(C.buffer,C.byteOffset,B.length)):C.toArray(B,U)}function D(C,B,U,I){const S=C.value,N=B+"_"+U;if(I[N]===void 0)return typeof S=="number"||typeof S=="boolean"?I[N]=S:ArrayBuffer.isView(S)?I[N]=S.slice():I[N]=S.clone(),!0;{const k=I[N];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return I[N]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function b(C){const B=C.uniforms;let U=0;const I=16;for(let N=0,k=B.length;N<k;N++){const G=Array.isArray(B[N])?B[N]:[B[N]];for(let Q=0,fe=G.length;Q<fe;Q++){const pe=G[Q],$=Array.isArray(pe.value)?pe.value:[pe.value];for(let z=0,H=$.length;z<H;z++){const te=$[z],_e=M(te),be=U%I,F=be%_e.boundary,J=be+F;U+=F,J!==0&&I-J<_e.storage&&(U+=I-J),pe.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=U,U+=_e.storage}}}const S=U%I;return S>0&&(U+=I-S),C.__size=U,C.__cache={},this}function M(C){const B={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(B.boundary=4,B.storage=4):C.isVector2?(B.boundary=8,B.storage=8):C.isVector3||C.isColor?(B.boundary=16,B.storage=12):C.isVector4?(B.boundary=16,B.storage=16):C.isMatrix3?(B.boundary=48,B.storage=48):C.isMatrix4?(B.boundary=64,B.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(B.boundary=16,B.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),B}function P(C){const B=C.target;B.removeEventListener("dispose",P);const U=h.indexOf(B.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function O(){for(const C in l)s.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:O}}const nT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function iT(){return Zi===null&&(Zi=new dv(nT,16,16,Gr,Ta),Zi.name="DFG_LUT",Zi.minFilter=zn,Zi.magFilter=zn,Zi.wrapS=Ea,Zi.wrapT=Ea,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class aT{constructor(e={}){const{canvas:i=JM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=mi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const D=E,b=new Set([c0,l0,o0]),M=new Set([mi,Qi,sl,ol,a0,r0]),P=new Uint32Array(4),O=new Int32Array(4),C=new K;let B=null,U=null;const I=[],S=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,Q=null,fe=null,pe=null,$=null;this._outputColorSpace=Jn;let z=0,H=0,te=null,_e=-1,be=null;const F=new sn,J=new sn;let Ee=null;const Ce=new Et(0);let Pe=0,re=i.width,Me=i.height,Se=1,ze=null,it=null;const Je=new sn(0,0,re,Me),kt=new sn(0,0,re,Me);let lt=!1;const ht=new g0;let gt=!1,dt=!1;const qt=new Ot,Lt=new K,Yt=new sn,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Kt(){return te===null?Se:1}let q=r;function Dt(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${t0}`),i.addEventListener("webglcontextlost",tn,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",ei,!1),q===null){const Y="webgl2";if(q=Dt(Y,R),q===null)throw Dt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Tt("WebGLRenderer: "+R.message),R}let He,L,y,X,ee,de,Re,we,ne,ue,Ae,Fe,Ue,Ne,Qe,je,et,Z,De,ge,Le,Ve,ye;function Ye(){He=new ib(q),He.init(),Le=new YA(q,He),L=new KE(q,He,e,Le),y=new WA(q,He),L.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),fe=q.createFramebuffer(),pe=q.createFramebuffer(),$=q.createFramebuffer(),X=new sb(q),ee=new LA,de=new qA(q,He,y,ee,L,Le,X),Re=new nb(k),we=new uy(q),Ve=new qE(q,we),ne=new ab(q,we,X,Ve),ue=new lb(q,ne,we,Ve,X),Z=new ob(q,L,de),Qe=new QE(ee),Ae=new UA(k,Re,He,L,Ve,Qe),Fe=new eT(k,ee),Ue=new OA,Ne=new HA(He),et=new WE(k,Re,y,ue,A,m),je=new ZA(k,ue,L),ye=new tT(q,X,L,y),De=new YE(q,He,X),ge=new rb(q,He,X),X.programs=Ae.programs,k.capabilities=L,k.extensions=He,k.properties=ee,k.renderLists=Ue,k.shadowMap=je,k.state=y,k.info=X}Ye(),D!==mi&&(N=new ub(D,i.width,i.height,p,l,c));const Xe=new jA(k,q);this.xr=Xe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(re,Me,!1))},this.getSize=function(R){return R.set(re,Me)},this.setSize=function(R,Y,le=!0){if(Xe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,Me=Y,i.width=Math.floor(R*Se),i.height=Math.floor(Y*Se),le===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(re*Se,Me*Se).floor()},this.setDrawingBufferSize=function(R,Y,le){re=R,Me=Y,Se=le,i.width=Math.floor(R*le),i.height=Math.floor(Y*le),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(D===mi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Je)},this.setViewport=function(R,Y,le,se){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,Y,le,se),y.viewport(F.copy(Je).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(kt)},this.setScissor=function(R,Y,le,se){R.isVector4?kt.set(R.x,R.y,R.z,R.w):kt.set(R,Y,le,se),y.scissor(J.copy(kt).multiplyScalar(Se).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(R){y.setScissorTest(lt=R)},this.setOpaqueSort=function(R){ze=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,le=!0){let se=0;if(R){let oe=!1;if(te!==null){const Ie=te.texture.format;oe=b.has(Ie)}if(oe){const Ie=te.texture.type,ke=M.has(Ie),Oe=et.getClearColor(),We=et.getClearAlpha(),Ze=Oe.r,tt=Oe.g,ct=Oe.b;ke?(P[0]=Ze,P[1]=tt,P[2]=ct,P[3]=We,q.clearBufferuiv(q.COLOR,0,P)):(O[0]=Ze,O[1]=tt,O[2]=ct,O[3]=We,q.clearBufferiv(q.COLOR,0,O))}else se|=q.COLOR_BUFFER_BIT}Y&&(se|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Q=R},this.dispose=function(){i.removeEventListener("webglcontextlost",tn,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),et.dispose(),Ue.dispose(),Ne.dispose(),ee.dispose(),Re.dispose(),ue.dispose(),Ve.dispose(),ye.dispose(),Ae.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",fn),Xe.removeEventListener("sessionend",Tn),Xn.stop()};function tn(R){R.preventDefault(),Dg("WebGLRenderer: Context Lost."),G=!0}function Ft(){Dg("WebGLRenderer: Context Restored."),G=!1;const R=X.autoReset,Y=je.enabled,le=je.autoUpdate,se=je.needsUpdate,oe=je.type;Ye(),X.autoReset=R,je.enabled=Y,je.autoUpdate=le,je.needsUpdate=se,je.type=oe}function ei(R){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ti(R){const Y=R.target;Y.removeEventListener("dispose",ti),Js(Y)}function Js(R){js(R),ee.remove(R)}function js(R){const Y=ee.get(R).programs;Y!==void 0&&(Y.forEach(function(le){Ae.releaseProgram(le)}),R.isShaderMaterial&&Ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,le,se,oe,Ie){Y===null&&(Y=jt);const ke=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Oe=Da(R,Y,le,se,oe);y.setMaterial(se,ke);let We=le.index,Ze=1;if(se.wireframe===!0){if(We=ne.getWireframeAttribute(le),We===void 0)return;Ze=2}const tt=le.drawRange,ct=le.attributes.position;let $e=tt.start*Ze,Rt=(tt.start+tt.count)*Ze;Ie!==null&&($e=Math.max($e,Ie.start*Ze),Rt=Math.min(Rt,(Ie.start+Ie.count)*Ze)),We!==null?($e=Math.max($e,0),Rt=Math.min(Rt,We.count)):ct!=null&&($e=Math.max($e,0),Rt=Math.min(Rt,ct.count));const nn=Rt-$e;if(nn<0||nn===1/0)return;Ve.setup(oe,se,Oe,le,We);let Qt,It=De;if(We!==null&&(Qt=we.get(We),It=ge,It.setIndex(Qt)),oe.isMesh)se.wireframe===!0?(y.setLineWidth(se.wireframeLinewidth*Kt()),It.setMode(q.LINES)):It.setMode(q.TRIANGLES);else if(oe.isLine){let Bt=se.linewidth;Bt===void 0&&(Bt=1),y.setLineWidth(Bt*Kt()),oe.isLineSegments?It.setMode(q.LINES):oe.isLineLoop?It.setMode(q.LINE_LOOP):It.setMode(q.LINE_STRIP)}else oe.isPoints?It.setMode(q.POINTS):oe.isSprite&&It.setMode(q.TRIANGLES);if(oe.isBatchedMesh)if(He.get("WEBGL_multi_draw"))It.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Bt=oe._multiDrawStarts,Ge=oe._multiDrawCounts,On=oe._multiDrawCount,_t=We?we.get(We).bytesPerElement:1,vn=ee.get(se).currentProgram.getUniforms();for(let ni=0;ni<On;ni++)vn.setValue(q,"_gl_DrawID",ni),It.render(Bt[ni]/_t,Ge[ni])}else if(oe.isInstancedMesh)It.renderInstances($e,nn,oe.count);else if(le.isInstancedBufferGeometry){const Bt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ge=Math.min(le.instanceCount,Bt);It.renderInstances($e,nn,Ge)}else It.render($e,nn)};function $s(R,Y,le){R.transparent===!0&&R.side===Oi&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,wa(R,Y,le),R.side=cr,R.needsUpdate=!0,wa(R,Y,le),R.side=Oi):wa(R,Y,le)}this.compile=function(R,Y,le=null){le===null&&(le=R),U=Ne.get(le),U.init(Y),S.push(U),le.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(U.pushLight(oe),oe.castShadow&&U.pushShadow(oe))}),R!==le&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(U.pushLight(oe),oe.castShadow&&U.pushShadow(oe))}),U.setupLights();const se=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ie=oe.material;if(Ie)if(Array.isArray(Ie))for(let ke=0;ke<Ie.length;ke++){const Oe=Ie[ke];$s(Oe,le,oe),se.add(Oe)}else $s(Ie,le,oe),se.add(Ie)}),U=S.pop(),se},this.compileAsync=function(R,Y,le=null){const se=this.compile(R,Y,le);return new Promise(oe=>{function Ie(){if(se.forEach(function(ke){ee.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){oe(R);return}setTimeout(Ie,10)}He.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let qr=null;function Bi(R){qr&&qr(R)}function fn(){Xn.stop()}function Tn(){Xn.start()}const Xn=new yv;Xn.setAnimationLoop(Bi),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(R){qr=R,Xe.setAnimationLoop(R),R===null?Xn.stop():Xn.start()},Xe.addEventListener("sessionstart",fn),Xe.addEventListener("sessionend",Tn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(R,Y);const le=Xe.enabled===!0&&Xe.isPresenting===!0,se=N!==null&&(te===null||le)&&N.begin(k,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Y),Y=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Y,te),U=Ne.get(R,S.length),U.init(Y),U.state.textureUnits=de.getTextureUnits(),S.push(U),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ht.setFromProjectionMatrix(qt,qi,Y.reversedDepth),dt=this.localClippingEnabled,gt=Qe.init(this.clippingPlanes,dt),B=Ue.get(R,I.length),B.init(),I.push(B),Xe.enabled===!0&&Xe.isPresenting===!0){const ke=k.xr.getDepthSensingMesh();ke!==null&&fr(ke,Y,-1/0,k.sortObjects)}fr(R,Y,0,k.sortObjects),B.finish(),k.sortObjects===!0&&B.sort(ze,it,Y.reversedDepth),Pt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Pt&&et.addToRenderList(B,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Qe.beginShadows();const oe=U.state.shadowsArray;if(je.render(oe,R,Y),gt===!0&&Qe.endShadows(),(se&&N.hasRenderPass())===!1){const ke=B.opaque,Oe=B.transmissive;if(U.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Oe.length>0)for(let Ze=0,tt=We.length;Ze<tt;Ze++){const ct=We[Ze];dl(ke,Oe,R,ct)}Pt&&et.render(R);for(let Ze=0,tt=We.length;Ze<tt;Ze++){const ct=We[Ze];hl(B,R,ct,ct.viewport)}}else Oe.length>0&&dl(ke,Oe,R,Y),Pt&&et.render(R),hl(B,R,Y)}te!==null&&H===0&&(de.updateMultisampleRenderTarget(te),de.updateRenderTargetMipmap(te)),se&&N.end(k),R.isScene===!0&&R.onAfterRender(k,R,Y),Ve.resetDefaultState(),_e=-1,be=null,S.pop(),S.length>0?(U=S[S.length-1],de.setTextureUnits(U.state.textureUnits),gt===!0&&Qe.setGlobalState(k.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?B=I[I.length-1]:B=null,Q!==null&&Q.renderEnd()};function fr(R,Y,le,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ht.intersectsSprite(R)){se&&Yt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const ke=ue.update(R),Oe=R.material;Oe.visible&&B.push(R,ke,Oe,le,Yt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ht.intersectsObject(R))){const ke=ue.update(R),Oe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Yt.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Yt.copy(ke.boundingSphere.center)),Yt.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(Oe)){const We=ke.groups;for(let Ze=0,tt=We.length;Ze<tt;Ze++){const ct=We[Ze],$e=Oe[ct.materialIndex];$e&&$e.visible&&B.push(R,ke,$e,le,Yt.z,ct)}}else Oe.visible&&B.push(R,ke,Oe,le,Yt.z,null)}}const Ie=R.children;for(let ke=0,Oe=Ie.length;ke<Oe;ke++)fr(Ie[ke],Y,le,se)}function hl(R,Y,le,se){const{opaque:oe,transmissive:Ie,transparent:ke}=R;U.setupLightsView(le),gt===!0&&Qe.setGlobalState(k.clippingPlanes,le),se&&y.viewport(F.copy(se)),oe.length>0&&hr(oe,Y,le),Ie.length>0&&hr(Ie,Y,le),ke.length>0&&hr(ke,Y,le),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function dl(R,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const $e=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new Ki(1,1,{generateMipmaps:!0,type:$e?Ta:mi,minFilter:Br,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ie=U.state.transmissionRenderTarget[se.id],ke=se.viewport||F;Ie.setSize(ke.z*k.transmissionResolutionScale,ke.w*k.transmissionResolutionScale);const Oe=k.getRenderTarget(),We=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Ce),Pe=k.getClearAlpha(),Pe<1&&k.setClearColor(16777215,.5),k.clear(),Pt&&et.render(le);const tt=k.toneMapping;k.toneMapping=Yi;const ct=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),gt===!0&&Qe.setGlobalState(k.clippingPlanes,se),hr(R,le,se),de.updateMultisampleRenderTarget(Ie),de.updateRenderTargetMipmap(Ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Rt=0,nn=Y.length;Rt<nn;Rt++){const Qt=Y[Rt],{object:It,geometry:Bt,material:Ge,group:On}=Qt;if(Ge.side===Oi&&It.layers.test(se.layers)){const _t=Ge.side;Ge.side=jn,Ge.needsUpdate=!0,Ca(It,le,se,Bt,Ge,On),Ge.side=_t,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(de.updateMultisampleRenderTarget(Ie),de.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Oe,We,Ze),k.setClearColor(Ce,Pe),ct!==void 0&&(se.viewport=ct),k.toneMapping=tt}function hr(R,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ie=R.length;oe<Ie;oe++){const ke=R[oe],{object:Oe,geometry:We,group:Ze}=ke;let tt=ke.material;tt.allowOverride===!0&&se!==null&&(tt=se),Oe.layers.test(le.layers)&&Ca(Oe,Y,le,We,tt,Ze)}}function Ca(R,Y,le,se,oe,Ie){R.onBeforeRender(k,Y,le,se,oe,Ie),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(k,Y,le,se,R,Ie),oe.transparent===!0&&oe.side===Oi&&oe.forceSinglePass===!1?(oe.side=jn,oe.needsUpdate=!0,k.renderBufferDirect(le,Y,se,oe,R,Ie),oe.side=cr,oe.needsUpdate=!0,k.renderBufferDirect(le,Y,se,oe,R,Ie),oe.side=Oi):k.renderBufferDirect(le,Y,se,oe,R,Ie),R.onAfterRender(k,Y,le,se,oe,Ie)}function wa(R,Y,le){Y.isScene!==!0&&(Y=jt);const se=ee.get(R),oe=U.state.lights,Ie=U.state.shadowsArray,ke=oe.state.version,Oe=Ae.getParameters(R,oe.state,Ie,Y,le,U.state.lightProbeGridArray),We=Ae.getProgramCacheKey(Oe);let Ze=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,se.fog=Y.fog;const tt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=Re.get(R.envMap||se.environment,tt),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",ti),Ze=new Map,se.programs=Ze);let ct=Ze.get(We);if(ct!==void 0){if(se.currentProgram===ct&&se.lightsStateVersion===ke)return ea(R,Oe),ct}else Oe.uniforms=Ae.getUniforms(R),Q!==null&&R.isNodeMaterial&&Q.build(R,le,Oe),R.onBeforeCompile(Oe,k),ct=Ae.acquireProgram(Oe,We),Ze.set(We,ct),se.uniforms=Oe.uniforms;const $e=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Qe.uniform),ea(R,Oe),se.needsLights=pl(R),se.lightsStateVersion=ke,se.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix),se.lightProbeGrid=U.state.lightProbeGridArray.length>0,se.currentProgram=ct,se.uniformsList=null,ct}function $i(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=tu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ea(R,Y){const le=ee.get(R);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function dr(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let le=0,se=R.length;le<se;le++){const oe=R[le];if(oe.texture!==null&&oe.boundingBox.containsPoint(C))return oe}return null}function Da(R,Y,le,se,oe){Y.isScene!==!0&&(Y=jt),de.resetTextureUnits();const Ie=Y.fog,ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Y.environment:null,Oe=te===null?k.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:At.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ze=Re.get(se.envMap||ke,We),tt=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!le.morphAttributes.position,Rt=!!le.morphAttributes.normal,nn=!!le.morphAttributes.color;let Qt=Yi;se.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Bt=It!==void 0?It.length:0,Ge=ee.get(se),On=U.state.lights;if(gt===!0&&(dt===!0||R!==be)){const Nt=R===be&&se.id===_e;Qe.setState(se,R,Nt)}let _t=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==On.state.version||Ge.outputColorSpace!==Oe||oe.isBatchedMesh&&Ge.batching===!1||!oe.isBatchedMesh&&Ge.batching===!0||oe.isBatchedMesh&&Ge.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ge.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ge.instancing===!1||!oe.isInstancedMesh&&Ge.instancing===!0||oe.isSkinnedMesh&&Ge.skinning===!1||!oe.isSkinnedMesh&&Ge.skinning===!0||oe.isInstancedMesh&&Ge.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ge.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ge.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ge.instancingMorph===!1&&oe.morphTexture!==null||Ge.envMap!==Ze||se.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Qe.numPlanes||Ge.numIntersection!==Qe.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==ct||Ge.morphTargets!==$e||Ge.morphNormals!==Rt||Ge.morphColors!==nn||Ge.toneMapping!==Qt||Ge.morphTargetsCount!==Bt||!!Ge.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ge.__version=se.version);let vn=Ge.currentProgram;_t===!0&&(vn=wa(se,Y,oe),Q&&se.isNodeMaterial&&Q.onUpdateProgram(se,vn,Ge));let ni=!1,Ti=!1,ii=!1;const zt=vn.getUniforms(),an=Ge.uniforms;if(y.useProgram(vn.program)&&(ni=!0,Ti=!0,ii=!0),se.id!==_e&&(_e=se.id,Ti=!0),Ge.needsLights){const Nt=dr(U.state.lightProbeGridArray,oe);Ge.lightProbeGrid!==Nt&&(Ge.lightProbeGrid=Nt,Ti=!0)}if(ni||be!==R){y.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(q,"projectionMatrix",R.projectionMatrix),zt.setValue(q,"viewMatrix",R.matrixWorldInverse);const zi=zt.map.cameraPosition;zi!==void 0&&zi.setValue(q,Lt.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&zt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&zt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),be!==R&&(be=R,Ti=!0,ii=!0)}if(Ge.needsLights&&(On.state.directionalShadowMap.length>0&&zt.setValue(q,"directionalShadowMap",On.state.directionalShadowMap,de),On.state.spotShadowMap.length>0&&zt.setValue(q,"spotShadowMap",On.state.spotShadowMap,de),On.state.pointShadowMap.length>0&&zt.setValue(q,"pointShadowMap",On.state.pointShadowMap,de)),oe.isSkinnedMesh){zt.setOptional(q,oe,"bindMatrix"),zt.setOptional(q,oe,"bindMatrixInverse");const Nt=oe.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),zt.setValue(q,"boneTexture",Nt.boneTexture,de))}oe.isBatchedMesh&&(zt.setOptional(q,oe,"batchingTexture"),zt.setValue(q,"batchingTexture",oe._matricesTexture,de),zt.setOptional(q,oe,"batchingIdTexture"),zt.setValue(q,"batchingIdTexture",oe._indirectTexture,de),zt.setOptional(q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&zt.setValue(q,"batchingColorTexture",oe._colorsTexture,de));const Ri=le.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Z.update(oe,le,vn),(Ti||Ge.receiveShadow!==oe.receiveShadow)&&(Ge.receiveShadow=oe.receiveShadow,zt.setValue(q,"receiveShadow",oe.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Y.environment!==null&&(an.envMapIntensity.value=Y.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=iT()),Ti){if(zt.setValue(q,"toneMappingExposure",k.toneMappingExposure),Ge.needsLights&&hn(an,ii),Ie&&se.fog===!0&&Fe.refreshFogUniforms(an,Ie),Fe.refreshMaterialUniforms(an,se,Se,Me,U.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const Nt=Ge.lightProbeGrid;an.probesSH.value=Nt.texture,an.probesMin.value.copy(Nt.boundingBox.min),an.probesMax.value.copy(Nt.boundingBox.max),an.probesResolution.value.copy(Nt.resolution)}tu.upload(q,$i(Ge),an,de)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(tu.upload(q,$i(Ge),an,de),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&zt.setValue(q,"center",oe.center),zt.setValue(q,"modelViewMatrix",oe.modelViewMatrix),zt.setValue(q,"normalMatrix",oe.normalMatrix),zt.setValue(q,"modelMatrix",oe.matrixWorld),se.uniformsGroups!==void 0){const Nt=se.uniformsGroups;for(let zi=0,Ua=Nt.length;zi<Ua;zi++){const pr=Nt[zi];ye.update(pr,vn),ye.bind(pr,vn)}}return vn}function hn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function pl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,Y,le){const se=ee.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ee.get(R.texture).__webglTexture=Y,ee.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const le=ee.get(R);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,le=0){te=R,z=Y,H=le;let se=null,oe=!1,Ie=!1;if(R){const Oe=ee.get(R);if(Oe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(R.viewport),J.copy(R.scissor),Ee=R.scissorTest,y.viewport(F),y.scissor(J),y.setScissorTest(Ee),_e=-1;return}else if(Oe.__webglFramebuffer===void 0)de.setupRenderTarget(R);else if(Oe.__hasExternalTextures)de.rebindTextures(R,ee.get(R.texture).__webglTexture,ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const tt=R.depthTexture;if(Oe.__boundDepthTexture!==tt){if(tt!==null&&ee.has(tt)&&(R.width!==tt.image.width||R.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ze=ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?se=Ze[Y][le]:se=Ze[Y],oe=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?se=ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[le]:se=Ze,F.copy(R.viewport),J.copy(R.scissor),Ee=R.scissorTest}else F.copy(Je).multiplyScalar(Se).floor(),J.copy(kt).multiplyScalar(Se).floor(),Ee=lt;if(le!==0&&(se=fe),y.bindFramebuffer(q.FRAMEBUFFER,se)&&y.drawBuffers(R,se),y.viewport(F),y.scissor(J),y.setScissorTest(Ee),oe){const Oe=ee.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,le)}else if(Ie){const Oe=Y;for(let We=0;We<R.textures.length;We++){const Ze=ee.get(R.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,Ze.__webglTexture,le,Oe)}}else if(R!==null&&le!==0){const Oe=ee.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,le)}_e=-1},this.readRenderTargetPixels=function(R,Y,le,se,oe,Ie,ke,Oe=0){if(!(R&&R.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){y.bindFramebuffer(q.FRAMEBUFFER,We);try{const Ze=R.textures[Oe],tt=Ze.format,ct=Ze.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(tt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(ct)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&le>=0&&le<=R.height-oe&&q.readPixels(Y,le,se,oe,Le.convert(tt),Le.convert(ct),Ie)}finally{const Ze=te!==null?ee.get(te).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,Y,le,se,oe,Ie,ke,Oe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(Y>=0&&Y<=R.width-se&&le>=0&&le<=R.height-oe){y.bindFramebuffer(q.FRAMEBUFFER,We);const Ze=R.textures[Oe],tt=Ze.format,ct=Ze.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(Y,le,se,oe,Le.convert(tt),Le.convert(ct),0);const Rt=te!==null?ee.get(te).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,Rt);const nn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await jM(q,nn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer($e),q.deleteSync(nn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,le=0){const se=Math.pow(2,-le),oe=Math.floor(R.image.width*se),Ie=Math.floor(R.image.height*se),ke=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;de.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,le,0,0,ke,Oe,oe,Ie),y.unbindTexture()},this.copyTextureToTexture=function(R,Y,le=null,se=null,oe=0,Ie=0){let ke,Oe,We,Ze,tt,ct,$e,Rt,nn;const Qt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(le!==null)ke=le.max.x-le.min.x,Oe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,tt=le.min.y,ct=le.isBox3?le.min.z:0;else{const an=Math.pow(2,-oe);ke=Math.floor(Qt.width*an),Oe=Math.floor(Qt.height*an),R.isDataArrayTexture?We=Qt.depth:R.isData3DTexture?We=Math.floor(Qt.depth*an):We=1,Ze=0,tt=0,ct=0}se!==null?($e=se.x,Rt=se.y,nn=se.z):($e=0,Rt=0,nn=0);const It=Le.convert(Y.format),Bt=Le.convert(Y.type);let Ge;Y.isData3DTexture?(de.setTexture3D(Y,0),Ge=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(de.setTexture2DArray(Y,0),Ge=q.TEXTURE_2D_ARRAY):(de.setTexture2D(Y,0),Ge=q.TEXTURE_2D),y.activeTexture(q.TEXTURE0),y.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const On=y.getParameter(q.UNPACK_ROW_LENGTH),_t=y.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(q.UNPACK_SKIP_PIXELS),ni=y.getParameter(q.UNPACK_SKIP_ROWS),Ti=y.getParameter(q.UNPACK_SKIP_IMAGES);y.pixelStorei(q.UNPACK_ROW_LENGTH,Qt.width),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Qt.height),y.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),y.pixelStorei(q.UNPACK_SKIP_ROWS,tt),y.pixelStorei(q.UNPACK_SKIP_IMAGES,ct);const ii=R.isDataArrayTexture||R.isData3DTexture,zt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const an=ee.get(R),Ri=ee.get(Y),Nt=ee.get(an.__renderTarget),zi=ee.get(Ri.__renderTarget);y.bindFramebuffer(q.READ_FRAMEBUFFER,Nt.__webglFramebuffer),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Ua=0;Ua<We;Ua++)ii&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ee.get(R).__webglTexture,oe,ct+Ua),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ee.get(Y).__webglTexture,Ie,nn+Ua)),q.blitFramebuffer(Ze,tt,ke,Oe,$e,Rt,ke,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||ee.has(R)){const an=ee.get(R),Ri=ee.get(Y);y.bindFramebuffer(q.READ_FRAMEBUFFER,pe),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,$);for(let Nt=0;Nt<We;Nt++)ii?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,an.__webglTexture,oe,ct+Nt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,an.__webglTexture,oe),zt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ri.__webglTexture,Ie,nn+Nt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ri.__webglTexture,Ie),oe!==0?q.blitFramebuffer(Ze,tt,ke,Oe,$e,Rt,ke,Oe,q.COLOR_BUFFER_BIT,q.NEAREST):zt?q.copyTexSubImage3D(Ge,Ie,$e,Rt,nn+Nt,Ze,tt,ke,Oe):q.copyTexSubImage2D(Ge,Ie,$e,Rt,Ze,tt,ke,Oe);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else zt?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Ge,Ie,$e,Rt,nn,ke,Oe,We,It,Bt,Qt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Ie,$e,Rt,nn,ke,Oe,We,It,Qt.data):q.texSubImage3D(Ge,Ie,$e,Rt,nn,ke,Oe,We,It,Bt,Qt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,$e,Rt,ke,Oe,It,Bt,Qt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,$e,Rt,Qt.width,Qt.height,It,Qt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,$e,Rt,ke,Oe,It,Bt,Qt);y.pixelStorei(q.UNPACK_ROW_LENGTH,On),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_t),y.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(q.UNPACK_SKIP_ROWS,ni),y.pixelStorei(q.UNPACK_SKIP_IMAGES,Ti),Ie===0&&Y.generateMipmaps&&q.generateMipmap(Ge),y.unbindTexture()},this.initRenderTarget=function(R){ee.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),y.unbindTexture()},this.resetState=function(){z=0,H=0,te=null,y.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const rT=s=>`./assets/textures/${s}.jpg`,el=52,sd={sun:{radius:5,z:0},mercury:{radius:.36,z:.12},venus:{radius:.58,z:-.18},earth:{radius:.61,z:.12},mars:{radius:.48,z:-.12},jupiter:{radius:2.15,z:.1},saturn:{radius:1.78,z:-.08},uranus:{radius:1.12,z:.1},neptune:{radius:1.08,z:-.06}},$d={sun:{orbit:0,angle:0,radius:1.75},mercury:{orbit:3,angle:2.8,radius:.32},venus:{orbit:4.2,angle:.8,radius:.42},earth:{orbit:5.4,angle:1.75,radius:.46},mars:{orbit:6.6,angle:3.8,radius:.38},jupiter:{orbit:9.2,angle:3,radius:1.15},saturn:{orbit:12,angle:.2,radius:.9},uranus:{orbit:15,angle:.75,radius:.64},neptune:{orbit:18.5,angle:-.75,radius:.62}};function sT(s){const e=$d[s];return new K(Math.cos(e.angle)*e.orbit,0,Math.sin(e.angle)*e.orbit)}function Bn(s,e=0){const i=Math.sin((s+e)*127.41)*43758.5453;return i-Math.floor(i)}function oT(){const e=new Float32Array(7800),i=new Float32Array(2600*3);for(let c=0;c<2600;c+=1){e[c*3]=(Bn(c,2)-.12)*110,e[c*3+1]=(Bn(c,7)-.5)*42,e[c*3+2]=(Bn(c,13)-.5)*58;const h=Bn(c,17)>.82;i[c*3]=h?.46:.82,i[c*3+1]=h?.7:.88,i[c*3+2]=1}const r=new Nn;r.setAttribute("position",new gi(e,3)),r.setAttribute("color",new gi(i,3));const l=new gv({size:.055,vertexColors:!0,transparent:!0,opacity:.82,sizeAttenuation:!0});return new HS(r,l)}function lT(){const e=new hu(.045,0),i=new M0({color:9204316,roughness:1,metalness:0}),r=new pv(e,i,520),l=new Ot,c=new ur,h=new K,p=new K;for(let m=0;m<520;m+=1){const d=19.6+Bn(m,1)*3.1,v=(Bn(m,3)-.5)*2.7,x=(Bn(m,5)-.5)*3.8,g=.45+Bn(m,9)*2.2;p.set(d,v,x),c.setFromEuler(new Ji(Bn(m,11)*Math.PI,Bn(m,14)*Math.PI,0)),h.setScalar(g),l.compose(p,c,h),r.setMatrixAt(m,l)}return r.instanceMatrix.needsUpdate=!0,r}function cT(){const e=new hu(.038,0),i=new M0({color:9402209,roughness:1,metalness:0}),r=new pv(e,i,620),l=new Ot,c=new ur,h=new K,p=new K;for(let m=0;m<620;m+=1){const d=Bn(m,19)*Math.PI*2,v=7.45+Bn(m,21)*.8,x=.45+Bn(m,23)*1.8;p.set(Math.cos(d)*v,(Bn(m,25)-.5)*.32,Math.sin(d)*v),c.setFromEuler(new Ji(Bn(m,27)*Math.PI,Bn(m,29)*Math.PI,0)),h.setScalar(x),l.compose(p,c,h),r.setMatrixAt(m,l)}return r.instanceMatrix.needsUpdate=!0,r}function uT(s){const e=Array.from({length:180},(i,r)=>{const l=r/180*Math.PI*2;return new K(Math.cos(l)*s,0,Math.sin(l)*s)});return new zS(new Nn().setFromPoints(e),new _0({color:6523053,transparent:!0,opacity:.3}))}function fT(s){s.traverse(e=>{var r;(r=e.geometry)==null||r.dispose(),(Array.isArray(e.material)?e.material:[e.material]).filter(Boolean).forEach(l=>l.dispose())})}function hT({worlds:s,progress:e,activeId:i,topDown:r,focusedId:l,focusZoom:c,onSelect:h,onReady:p}){const m=T.useRef(null),d=T.useRef({}),v=T.useRef(e),x=T.useRef(i),g=T.useRef(r),E=T.useRef(l),A=T.useRef(c),D=T.useRef(h),b=T.useRef(p),[M,P]=T.useState(!1);return T.useEffect(()=>{v.current=e},[e]),T.useEffect(()=>{x.current=i},[i]),T.useEffect(()=>{g.current=r},[r]),T.useEffect(()=>{E.current=l},[l]),T.useEffect(()=>{A.current=c},[c]),T.useEffect(()=>{D.current=h},[h]),T.useEffect(()=>{b.current=p},[p]),T.useEffect(()=>{const O=m.current;if(!O)return;let C=!1;const B=window.matchMedia("(prefers-reduced-motion: reduce)").matches,U=new aT({antialias:!0,alpha:!1,powerPreference:"high-performance"});U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),U.setClearColor(132363,1),U.outputColorSpace=Jn,U.toneMapping=n0,U.toneMappingExposure=1.08,U.domElement.className="journey-canvas",U.domElement.setAttribute("aria-hidden","true"),O.appendChild(U.domElement);const I=new wS;I.fog=new m0(132363,23,60);const S=new pi(42,1,.08,150);S.position.set(3.2,2.1,10.6);const N=new K(2.7,0,0),k=new Hr;I.add(k);const G=oT();I.add(G),I.add(new iy(10138831,.82));const Q=new ny(11061224,.72);Q.position.set(12,8,16),I.add(Q);const fe=new ey(16753483,68,82,1.28);fe.position.set(0,.4,.4),I.add(fe);const pe=new Nn().setFromPoints([new K(0,0,0),new K(el+5,0,0)]),$=new mv(pe,new _0({color:6914459,transparent:!0,opacity:.22}));k.add($);const z=lT();k.add(z);const H=new Hr;H.visible=!1,s.slice(1).forEach(He=>H.add(uT($d[He.id].orbit)));const te=cT();H.add(te),k.add(H);const _e=new jS,be=[],F=new Map,J=[],Ee=async He=>{const L=sd[He.id];let y;try{y=await _e.loadAsync(rT(He.id))}catch{return}if(C){y.dispose();return}y.colorSpace=Jn,y.anisotropy=Math.min(8,U.capabilities.getMaxAnisotropy()),be.push(y);const X=new Hr;X.position.set(He.progress*el,0,L.z),X.userData.worldId=He.id,X.userData.baseX=He.progress*el,X.userData.trackPosition=new K(He.progress*el,0,L.z),X.userData.overviewPosition=sT(He.id),X.userData.materials=[];const ee=new x0(L.radius,He.id==="sun"?96:64,He.id==="sun"?64:48),de=He.id==="sun"?new rl({map:y,transparent:!0}):new M0({map:y,roughness:.86,metalness:0,transparent:!0}),Re=new $n(ee,de);if(Re.userData.worldId=He.id,X.userData.materials.push(de),X.add(Re),J.push(Re),He.id==="saturn"&&[[1.18,1.65,14204817,.82],[1.7,2.05,9270876,.52]].forEach(([we,ne,ue,Ae])=>{const Fe=new rl({color:ue,transparent:!0,opacity:Ae,side:Oi,depthWrite:!1}),Ue=new $n(new lu(L.radius*we,L.radius*ne,160),Fe);Ue.rotation.x=1.18,Ue.rotation.z=-.16,X.add(Ue),X.userData.materials.push(Fe)}),He.id==="uranus"){const we=new rl({color:8169912,transparent:!0,opacity:.28,side:Oi,depthWrite:!1}),ne=new $n(new lu(L.radius*1.18,L.radius*1.58,120),we);ne.rotation.x=1.52,ne.rotation.z=.22,X.add(ne),X.userData.materials.push(we)}k.add(X),F.set(He.id,X)};Promise.allSettled(s.map(Ee)).then(()=>{var He;C||(P(!0),(He=b.current)==null||He.call(b))});let Ce=!1,Pe=0,re=0,Me=0,Se=0,ze=0;const it=new ly,Je=new mt,kt=He=>{var L,y;Ce=!0,Pe=0,re=He.clientX,Me=He.clientY,(y=(L=U.domElement).setPointerCapture)==null||y.call(L,He.pointerId)},lt=He=>{if(!Ce||He.pointerType==="touch")return;const L=He.clientX-re,y=He.clientY-Me;Pe+=Math.abs(L)+Math.abs(y),Se=Xo.clamp(Se-L*.006,-1.25,1.25),ze=Xo.clamp(ze+y*.01,-1.4,2.8),re=He.clientX,Me=He.clientY},ht=He=>{var L;if(Ce&&Pe<7){const y=U.domElement.getBoundingClientRect();Je.x=(He.clientX-y.left)/y.width*2-1,Je.y=-((He.clientY-y.top)/y.height)*2+1,it.setFromCamera(Je,S);const X=it.intersectObjects(J,!1)[0];X!=null&&X.object.userData.worldId&&((L=D.current)==null||L.call(D,X.object.userData.worldId))}Ce=!1};U.domElement.addEventListener("pointerdown",kt),U.domElement.addEventListener("pointermove",lt),U.domElement.addEventListener("pointerup",ht),U.domElement.addEventListener("pointercancel",ht);const gt=()=>{const{width:He,height:L}=O.getBoundingClientRect();!He||!L||(U.setSize(He,L,!1),S.aspect=He/L,S.updateProjectionMatrix())},dt=new ResizeObserver(gt);dt.observe(O),gt();const qt=new sy;qt.connect(document);const Lt=new K,Yt=new K,jt=new K,Pt=new K(1,1,1);let Kt=0,q=0;const Dt=()=>{var Re,we;qt.update();const He=Math.min(qt.getDelta(),.05),L=B?1:Math.min(1,He*4.2);Kt+=(v.current*el-Kt)*L;const y=g.current,X=E.current;I.fog.near=y?50:23,I.fog.far=y?120:60,$.visible=!y,z.visible=!y,H.visible=y&&!X,F.forEach((ne,ue)=>{const Ae=s.find(et=>et.id===ue),Fe=y?ne.userData.overviewPosition:ne.userData.trackPosition;ne.position.lerp(Fe,L);const Ue=y?$d[ue].radius/sd[ue].radius:1;Pt.setScalar(Ue),ne.scale.lerp(Pt,L);const Ne=y||ue==="sun"?1:Xo.smoothstep(v.current,Math.max(0,Ae.progress-.17),Math.max(.02,Ae.progress-.035)),Qe=Math.max(0,Math.min(1,Ne));ne.visible=(!X||ue===X)&&(Qe>.015||ue==="sun"),ne.userData.opacity=Qe,ne.userData.materials.forEach(et=>{const Z=et.userData.baseOpacity??et.opacity;et.userData.baseOpacity=Z,et.opacity=Z*Qe});const je=ne.children.find(et=>{var Z;return et.isMesh&&((Z=et.geometry)==null?void 0:Z.type)==="SphereGeometry"});je&&!B&&(je.rotation.y+=He*(ue==="sun"?.035:.075))});const ee=X?F.get(X):null;if(ee){const ne=sd[X].radius*ee.scale.x,ue=X==="saturn"?ne*1.9:0,Ae=Math.max(1.9,ne*3.1+ue)*A.current;jt.copy(ee.position),Yt.set(ee.position.x+Math.sin(Se)*Ae,ee.position.y+.35+ze*.35,ee.position.z+Math.cos(Se)*Ae),S.up.set(0,1,0)}else if(y){const ne=S.aspect<.8?2.3:S.aspect<1.25?1.35:1;Yt.set(0,28*ne+ze,24*ne),jt.set(0,0,0),S.up.set(0,1,0)}else Yt.set(Kt+3.2+Math.sin(Se)*4.5,2.3+ze,10.7+Math.abs(Math.sin(Se))*1.6),jt.set(Kt+3.05,0,0),S.up.set(0,1,0);S.position.lerp(Yt,L),N.lerp(jt,L),S.lookAt(N),F.forEach((ne,ue)=>{const Ae=d.current[ue];Ae&&(Lt.copy(ne.position).project(S),Ae.style.left=`${(Lt.x*.5+.5)*O.clientWidth}px`,Ae.style.top=`${(-Lt.y*.5+.5)*O.clientHeight}px`,Ae.classList.toggle("is-visible",ne.userData.opacity>.38&&Lt.z<1&&(!X||ue===X)),Ae.classList.toggle("active",ue===x.current))});const de=F.get(x.current);if(de){Lt.copy(de.position).project(S);const ne=(Lt.x*.5+.5)*O.clientWidth,ue=(-Lt.y*.5+.5)*O.clientHeight,Ae=x.current==="sun"?22:Xo.clamp(ne+70,22,O.clientWidth-310),Fe=x.current==="sun"?O.clientHeight*.64:Xo.clamp(ue+92,250,O.clientHeight-275);(Re=O.parentElement)==null||Re.style.setProperty("--anchor-x",`${Ae}px`),(we=O.parentElement)==null||we.style.setProperty("--anchor-y",`${Fe}px`)}B||(G.rotation.y+=He*.002),U.render(I,S),q=requestAnimationFrame(Dt)};return Dt(),()=>{C=!0,cancelAnimationFrame(q),qt.disconnect(),dt.disconnect(),U.domElement.removeEventListener("pointerdown",kt),U.domElement.removeEventListener("pointermove",lt),U.domElement.removeEventListener("pointerup",ht),U.domElement.removeEventListener("pointercancel",ht),fT(k),G.geometry.dispose(),G.material.dispose(),be.forEach(He=>He.dispose()),U.dispose(),U.domElement.remove()}},[s]),Te.jsx("div",{className:`journey-3d ${M?"is-ready":""}`,ref:m,children:Te.jsx("div",{className:"journey-label-layer","aria-label":"太阳系天体",children:s.map(O=>Te.jsx("button",{ref:C=>{d.current[O.id]=C},className:"journey-label",onClick:()=>h(O.id),"aria-pressed":i===O.id,children:O.name},O.id))})})}const dT=s=>`./${s}`,di=[{id:"sun",name:"太阳",english:"Sun",kind:"恒星",distance:"0 AU",progress:0,diameter:"1,392,700 km",temperature:"5,500 °C",mass:"1.989 × 10³⁰ kg",year:"约 25–35 天",intro:"太阳是太阳系的中心天体，占据太阳系总质量的 99.86%。它的引力维系着八颗行星与无数小天体的轨道。",fact:"光从太阳抵达地球约需 8 分 20 秒。"},{id:"mercury",name:"水星",english:"Mercury",kind:"类地行星",distance:"0.39 AU",progress:.115,diameter:"4,879 km",temperature:"−180 至 430 °C",mass:"3.30 × 10²³ kg",year:"88 天",intro:"离太阳最近、也是最小的行星。稀薄外逸层无法留住热量，因此昼夜温差极端。",fact:"水星的一天比它的一年更长。"},{id:"venus",name:"金星",english:"Venus",kind:"类地行星",distance:"0.72 AU",progress:.185,diameter:"12,104 km",temperature:"约 464 °C",mass:"4.87 × 10²⁴ kg",year:"224.7 天",intro:"与地球大小相近，却被浓密的二氧化碳大气包裹，是太阳系表面最热的行星。",fact:"金星的自转方向与多数行星相反。"},{id:"earth",name:"地球",english:"Earth",kind:"类地行星",distance:"1.00 AU",progress:.255,diameter:"12,756 km",temperature:"平均 15 °C",mass:"5.97 × 10²⁴ kg",year:"365.25 天",intro:"液态水、稳定的大气和磁场共同塑造了这颗蓝色星球，也是目前已知唯一拥有生命的世界。",fact:"地球表面约 71% 被海洋覆盖。"},{id:"mars",name:"火星",english:"Mars",kind:"类地行星",distance:"1.52 AU",progress:.34,diameter:"6,779 km",temperature:"平均 −65 °C",mass:"6.42 × 10²³ kg",year:"687 天",intro:"氧化铁让火星呈现红色。古老河谷与极地冰盖记录着它曾经更温暖湿润的历史。",fact:"奥林帕斯山约为珠穆朗玛峰高度的三倍。"},{id:"jupiter",name:"木星",english:"Jupiter",kind:"气态巨行星",distance:"5.20 AU",progress:.52,diameter:"142,984 km",temperature:"云顶 −110 °C",mass:"1.90 × 10²⁷ kg",year:"11.86 年",intro:"太阳系最大的行星。明暗云带、大红斑和强磁场共同构成一颗充满风暴的巨型世界。",fact:"木星内部大约能容纳 1,000 个地球。"},{id:"saturn",name:"土星",english:"Saturn",kind:"气态巨行星",distance:"9.58 AU",progress:.66,diameter:"120,536 km",temperature:"云顶 −140 °C",mass:"5.68 × 10²⁶ kg",year:"29.45 年",intro:"由冰粒、岩石与尘埃组成的巨大行星环，让土星成为太阳系中最醒目的世界。",fact:"土星的平均密度比水还低。"},{id:"uranus",name:"天王星",english:"Uranus",kind:"冰巨星",distance:"19.2 AU",progress:.82,diameter:"51,118 km",temperature:"约 −195 °C",mass:"8.68 × 10²⁵ kg",year:"84 年",intro:"淡青色来自大气中的甲烷。它近乎横躺着绕太阳运行，拥有太阳系最独特的自转姿态。",fact:"天王星的一个季节约持续 21 个地球年。"},{id:"neptune",name:"海王星",english:"Neptune",kind:"冰巨星",distance:"30.1 AU",progress:1,diameter:"49,528 km",temperature:"约 −200 °C",mass:"1.02 × 10²⁶ kg",year:"164.8 年",intro:"八大行星中距离太阳最远的世界，深蓝云层里活跃着太阳系已知速度最快的行星风。",fact:"自 1846 年被发现后，它只完成过一次公转。"}].map(s=>({...s,image:dT(`assets/planets/${s.id}.png`)}));function pT(s){return di.reduce((e,i)=>Math.abs(i.progress-s)<Math.abs(e.progress-s)?i:e,di[0])}function mT(){const[s,e]=T.useState(0),[i,r]=T.useState("sun"),[l,c]=T.useState(!1),[h,p]=T.useState(!0),[m,d]=T.useState(!1),[v,x]=T.useState(!0),[g,E]=T.useState(null),[A,D]=T.useState(1),[b,M]=T.useState(!1),P=T.useRef(null),O=T.useRef(null),C=T.useMemo(()=>di.find(S=>S.id===i)??di[0],[i]),B=S=>{S&&(e(S.progress),r(S.id),E(null),d(!1),x(!0))},U=S=>{S&&(e(S.progress),r(S.id),E(S.id),D(1),d(!1),x(!0))};T.useEffect(()=>{r(pT(s).id)},[s]),T.useEffect(()=>{const S=fe=>{e(pe=>Math.min(1,Math.max(0,pe+fe)))},N=fe=>{if(!m){if(fe.preventDefault(),g){D(pe=>Math.min(1.65,Math.max(.58,pe+Math.sign(fe.deltaY)*.08)));return}S(Math.sign(fe.deltaY)*Math.min(.055,Math.abs(fe.deltaY)/2200))}},k=fe=>{if(fe.key==="Escape"){m?d(!1):E(null);return}m||g||(["ArrowDown","ArrowRight","PageDown"].includes(fe.key)&&S(.045),["ArrowUp","ArrowLeft","PageUp"].includes(fe.key)&&S(-.045))},G=fe=>{var pe;m||(O.current=((pe=fe.touches[0])==null?void 0:pe.clientY)??null)},Q=fe=>{var z;if(m||g||O.current==null)return;const pe=((z=fe.touches[0])==null?void 0:z.clientY)??O.current,$=(O.current-pe)/900;Math.abs($)>.002&&(fe.preventDefault(),S($),O.current=pe)};return window.addEventListener("wheel",N,{passive:!1}),window.addEventListener("keydown",k),window.addEventListener("touchstart",G,{passive:!0}),window.addEventListener("touchmove",Q,{passive:!1}),()=>{window.removeEventListener("wheel",N),window.removeEventListener("keydown",k),window.removeEventListener("touchstart",G),window.removeEventListener("touchmove",Q)}},[g,m]);const I=async()=>{var S,N,k;document.fullscreenElement?await((k=document.exitFullscreen)==null?void 0:k.call(document)):await((N=(S=document.documentElement).requestFullscreen)==null?void 0:N.call(S))};return Te.jsxs("div",{className:`journey-shell ${l?"is-top-down":""} ${g?"is-focused":""}`,ref:P,children:[Te.jsx(hT,{worlds:di,progress:s,activeId:i,topDown:l,focusedId:g,focusZoom:A,onSelect:S=>U(di.find(N=>N.id===S)),onReady:()=>M(!0)}),Te.jsxs("header",{className:"journey-header",children:[Te.jsxs("button",{className:"brand",onClick:()=>B(di[0]),"aria-label":"返回太阳",children:[Te.jsx(pM,{weight:"thin","aria-hidden":"true"}),Te.jsxs("span",{children:[Te.jsx("strong",{children:"太阳系之旅"}),Te.jsx("small",{children:"Solar System Journey"})]})]}),Te.jsxs("nav",{className:"journey-nav","aria-label":"主要导航",children:[Te.jsx("button",{className:"active",onClick:()=>B(di[0]),children:"总览"}),Te.jsx("button",{onClick:()=>B(di[5]),children:"探索"}),Te.jsx("button",{onClick:()=>x(!0),children:"知识库"}),Te.jsx("button",{onClick:()=>B(di[8]),children:"时间线"}),Te.jsx("button",{onClick:()=>c(S=>!S),children:"3D 模式"})]}),Te.jsxs("div",{className:"header-tools",children:[Te.jsx("button",{onClick:()=>d(!0),"aria-label":"搜索行星",children:Te.jsx(hM,{})}),Te.jsx("button",{onClick:()=>p(S=>!S),"aria-label":h?"开启环境音":"关闭环境音",children:h?Te.jsx(_M,{}):Te.jsx(gM,{})}),Te.jsx("button",{onClick:I,"aria-label":"全屏",children:Te.jsx(lM,{})})]})]}),Te.jsxs("div",{className:`scene-instruction ${!l&&!g&&s>.08?"is-quiet":""}`,children:[Te.jsx("span",{children:g?"拖动模型改变观察方向，滚轮缩放细节":l?"点击任意行星，进入近距细节观察":"滚动鼠标滚轮或拖动，探索太阳系"}),Te.jsx(Mg,{weight:"light"}),Te.jsx(oM,{className:"instruction-arrow"})]}),Te.jsxs("button",{className:"view-mode",onClick:()=>c(S=>!S),children:[Te.jsx(uM,{})," ",l?"返回平视":"俯视视角"]}),Te.jsxs("aside",{className:`world-card ${v?"is-open":""}`,"aria-live":"polite",children:[Te.jsx("div",{className:"world-card-anchor"}),Te.jsxs("div",{className:"world-card-heading",children:[Te.jsxs("div",{children:[Te.jsx("small",{children:C.english}),Te.jsx("h1",{children:C.name}),Te.jsx("span",{children:C.kind})]}),Te.jsx("button",{onClick:()=>x(S=>!S),"aria-label":v?"收起详情":"展开详情",children:Te.jsx(vg,{})})]}),v&&Te.jsxs("div",{className:"world-card-body",children:[Te.jsx("p",{children:C.intro}),Te.jsxs("dl",{children:[Te.jsxs("div",{children:[Te.jsx("dt",{children:"直径"}),Te.jsx("dd",{children:C.diameter})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"温度"}),Te.jsx("dd",{children:C.temperature})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"质量"}),Te.jsx("dd",{children:C.mass})]}),Te.jsxs("div",{children:[Te.jsx("dt",{children:"公转"}),Te.jsx("dd",{children:C.year})]})]}),Te.jsxs("button",{className:"observe-button",onClick:()=>g===C.id?E(null):U(C),children:[Te.jsx(xg,{})," ",g===C.id?"退出近距观察":"放大观察细节"]}),Te.jsxs("button",{className:"fact-button",children:[Te.jsx(_g,{})," ",C.fact]})]})]}),Te.jsxs("div",{className:"side-rail","aria-label":"快捷导航",children:[Te.jsx("button",{className:"active",onClick:()=>B(di[0]),"aria-label":"返回太阳",children:Te.jsx(fM,{})}),Te.jsx("button",{onClick:()=>c(S=>!S),"aria-label":"切换视角",children:Te.jsx(cM,{})}),Te.jsx("button",{onClick:()=>x(S=>!S),"aria-label":"查看知识",children:Te.jsx(_g,{})})]}),g&&Te.jsxs("div",{className:"focus-hud","aria-label":"模型缩放控制",children:[Te.jsxs("span",{children:[Te.jsx(xg,{})," 细节观察"]}),Te.jsx("button",{onClick:()=>D(S=>Math.min(1.65,S+.12)),"aria-label":"缩小模型",children:Te.jsx(dM,{})}),Te.jsx("button",{onClick:()=>D(S=>Math.max(.58,S-.12)),"aria-label":"放大模型",children:Te.jsx(mM,{})}),Te.jsx("button",{onClick:()=>E(null),"aria-label":"退出细节观察",children:Te.jsx(Sg,{})})]}),Te.jsxs("section",{className:"distance-console","aria-label":"太阳系距离进度",children:[Te.jsxs("div",{className:"distance-readout",children:[Te.jsx("span",{children:"距离太阳"}),Te.jsx("strong",{children:C.distance})]}),Te.jsxs("div",{className:"distance-track",children:[Te.jsx("div",{className:"distance-fill",style:{width:`${s*100}%`}}),di.map(S=>Te.jsx("button",{className:S.id===i?"active":"",style:{left:`${S.progress*100}%`},onClick:()=>B(S),"aria-label":`前往${S.name}`,title:`${S.name} · ${S.distance}`,children:Te.jsx("img",{src:S.image,alt:""})},S.id))]}),Te.jsx("span",{className:"distance-unit",children:"30 AU"})]}),Te.jsxs("div",{className:"scroll-cue",children:[Te.jsx(Mg,{weight:"light"}),Te.jsx("span",{children:"向下滚动，拉近距离"}),Te.jsx(vg,{})]}),m&&Te.jsxs("div",{className:"search-overlay",role:"dialog","aria-modal":"true","aria-label":"选择天体",children:[Te.jsx("button",{className:"search-close",onClick:()=>d(!1),"aria-label":"关闭",children:Te.jsx(Sg,{})}),Te.jsx("p",{children:"选择一颗天体，立即跃迁"}),Te.jsx("div",{className:"search-worlds",children:di.map(S=>Te.jsxs("button",{onClick:()=>B(S),children:[Te.jsx("img",{src:S.image,alt:""}),Te.jsxs("span",{children:[Te.jsx("strong",{children:S.name}),Te.jsx("small",{children:S.distance})]})]},S.id))})]}),!b&&Te.jsx("div",{className:"journey-loading",children:"正在点亮太阳系"})]})}kx.createRoot(document.getElementById("root")).render(Te.jsx(Fx.StrictMode,{children:Te.jsx(mT,{})}));
