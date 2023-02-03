import{w as V,x as W,o as A,g as O,n as y,f as C,y as b,r as M,z as _,A as N,h as Q,B as G,C as U,D as j,E as k,F as L,d as z}from"./index.455a56f4.js";const J={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},K=["beforeShow","show","beforeHide","hide"];function R({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:s,processOnMount:d}){const r=O(),{props:l,emit:a,proxy:w}=r;let u;function p(o){e.value===!0?E(o):h(o)}function h(o){if(l.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const f=l["onUpdate:modelValue"]!==void 0;f===!0&&(a("update:modelValue",!0),u=o,y(()=>{u===o&&(u=void 0)})),(l.modelValue===null||f===!1)&&F(o)}function F(o){e.value!==!0&&(e.value=!0,a("beforeShow",o),i!==void 0?i(o):a("show",o))}function E(o){if(l.disable===!0)return;const f=l["onUpdate:modelValue"]!==void 0;f===!0&&(a("update:modelValue",!1),u=o,y(()=>{u===o&&(u=void 0)})),(l.modelValue===null||f===!1)&&S(o)}function S(o){e.value!==!1&&(e.value=!1,a("beforeHide",o),s!==void 0?s(o):a("hide",o))}function $(o){l.disable===!0&&o===!0?l["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):o===!0!==e.value&&(o===!0?F:S)(u)}V(()=>l.modelValue,$),n!==void 0&&W(r)===!0&&V(()=>w.$route.fullPath,()=>{n.value===!0&&e.value===!0&&E()}),d===!0&&A(()=>{$(l.modelValue)});const T={show:h,hide:E,toggle:p};return Object.assign(w,T),T}const Z={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ee(e,t=()=>{},n=()=>{}){return{transitionProps:C(()=>{const i=`q-transition--${e.transitionShow||t()}`,s=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:C(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let m=[],g=[];function q(e){g=g.filter(t=>t!==e)}function I(e){q(e),g.push(e)}function H(e){q(e),g.length===0&&m.length>0&&(m[m.length-1](),m=[])}function te(e){g.length===0?e():m.push(e)}const P=[];function oe(e){return P.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function x(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return b(e)}else if(e.__qPortal===!0){const n=b(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=b(e)}while(e!=null)}function ne(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=x(e,t);continue}e.hide(t)}e=b(e)}}function B(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function le(e,t,n,i){const s=M(!1),d=M(!1);let r=null;const l={},a=i==="dialog"&&B(e);function w(p){if(p===!0){H(l),d.value=!0;return}d.value=!1,s.value===!1&&(a===!1&&r===null&&(r=U(!1,i)),s.value=!0,P.push(e.proxy),I(l))}function u(p){if(d.value=!1,p!==!0)return;H(l),s.value=!1;const h=P.indexOf(e.proxy);h!==-1&&P.splice(h,1),r!==null&&(j(r),r=null)}return _(()=>{u(!0)}),e.proxy.__qPortal=!0,N(e.proxy,"contentEl",()=>t.value),{showPortal:w,hidePortal:u,portalIsActive:s,portalIsAccessible:d,renderPortal:()=>a===!0?n():s.value===!0?[Q(G,{to:r},n())]:void 0}}const X=[null,document,document.body,document.scrollingElement,document.documentElement];function ie(e,t){let n=k(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return X.includes(n)?window:n}function se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ae(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let v;function ue(){if(v!==void 0)return v;const e=document.createElement("p"),t=document.createElement("div");L(e,{width:"100%",height:"200px"}),L(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),v=n-i,v}function re(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const c=[];function D(e){c[c.length-1](e)}function ce(e){z.is.desktop===!0&&(c.push(e),c.length===1&&document.body.addEventListener("focusin",D))}function de(e){const t=c.indexOf(e);t>-1&&(c.splice(t,1),c.length===0&&document.body.removeEventListener("focusin",D))}export{Z as a,K as b,ee as c,R as d,le as e,ie as f,ue as g,ce as h,ae as i,se as j,re as k,te as l,oe as m,ne as n,P as p,de as r,J as u};
