import{D as r,b as s,n as f,E as c,g as d,F as a,G as l}from"./index.ee6be7d0.js";function p(){let e;const o=d();function t(){e=void 0}return r(t),s(t),{removeTick:t,registerTick(n){e=n,f(()=>{e===n&&(c(o)===!1&&e(),e=void 0)})}}}function g(){let e=null;const o=d();function t(){e!==null&&(clearTimeout(e),e=null)}return r(t),s(t),{removeTimeout:t,registerTimeout(n,u){t(),c(o)===!1&&(e=setTimeout(n,u))}}}const m=[null,document,document.body,document.scrollingElement,document.documentElement];function v(e,o){let t=a(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return m.includes(t)?window:t}function h(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function T(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let i;function b(){if(i!==void 0)return i;const e=document.createElement("p"),o=document.createElement("div");l(e,{width:"100%",height:"200px"}),l(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=o.clientWidth),o.remove(),i=t-n,i}export{g as a,v as b,h as c,T as d,b as g,p as u};