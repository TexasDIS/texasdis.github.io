import{D as o,b as r,n as c,E as s,g as u}from"./index.382f3a4f.js";function l(){let e;const n=u();function t(){e=void 0}return o(t),r(t),{removeTick:t,registerTick(i){e=i,c(()=>{e===i&&(s(n)===!1&&e(),e=void 0)})}}}function f(){let e=null;const n=u();function t(){e!==null&&(clearTimeout(e),e=null)}return o(t),r(t),{removeTimeout:t,registerTimeout(i,a){t(),s(n)===!1&&(e=setTimeout(i,a))}}}export{f as a,l as u};
