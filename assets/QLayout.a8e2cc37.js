import{q as C,k as s,h as f,t as B,x as M,K as $,a1 as W,M as O,a2 as j,g as H,r as b,a3 as k,w as y,b as K,a4 as N,o as A,a5 as I,l as U,z as P,d as D}from"./index.382f3a4f.js";import{Q as V}from"./QResizeObserver.0bc86f5d.js";import{a as G,b as J,c as X,g as F}from"./scroll.4b77b77f.js";var ne=C({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const a=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>f("div",{class:a.value},B(h.default))}}),le=C({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:h}){const a=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:a.value,role:"toolbar"},B(h.default))}}),ae=C({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:a}}=H(),l=M(O,$);if(l===$)return console.error("QPageContainer needs to be child of QLayout"),$;W(j,!0);const o=s(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>f("div",{class:"q-page-container",style:o.value},B(h.default))}}),ie=C({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:a}){const{proxy:{$q:l}}=H(),o=M(O,$);if(o===$)return console.error("QFooter needs to be child of QLayout"),$;const i=b(parseInt(e.heightHint,10)),c=b(!0),p=b(k.value===!0||o.isContainer.value===!0?0:window.innerHeight),v=s(()=>e.reveal===!0||o.view.value.indexOf("F")>-1||l.platform.is.ios&&o.isContainer.value===!0),u=s(()=>o.isContainer.value===!0?o.containerHeight.value:p.value),w=s(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return c.value===!0?i.value:0;const t=o.scroll.value.position+u.value+i.value-o.height.value;return t>0?t:0}),m=s(()=>e.modelValue!==!0||v.value===!0&&c.value!==!0),z=s(()=>e.modelValue===!0&&m.value===!0&&e.reveal===!0),d=s(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(m.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),T=s(()=>{const t=o.rows.value.bottom,r={};return t[0]==="l"&&o.left.space===!0&&(r[l.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(r[l.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),r});function g(t,r){o.update("footer",t,r)}function S(t,r){t.value!==r&&(t.value=r)}function Q({height:t}){S(i,t),g("size",t)}function q(){if(e.reveal!==!0)return;const{direction:t,position:r,inflectionPoint:x}=o.scroll.value;S(c,t==="up"||r-x<100||o.height.value-u.value-r-i.value<300)}function L(t){z.value===!0&&S(c,!0),a("focusin",t)}y(()=>e.modelValue,t=>{g("space",t),S(c,!0),o.animate()}),y(w,t=>{g("offset",t)}),y(()=>e.reveal,t=>{t===!1&&S(c,e.modelValue)}),y(c,t=>{o.animate(),a("reveal",t)}),y([i,o.scroll,o.height],q),y(()=>l.screen.height,t=>{o.isContainer.value!==!0&&S(p,t)});const n={};return o.instances.footer=n,e.modelValue===!0&&g("size",i.value),g("space",e.modelValue),g("offset",w.value),K(()=>{o.instances.footer===n&&(o.instances.footer=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const t=N(h.default,[f(V,{debounce:0,onResize:Q})]);return e.elevated===!0&&t.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f("footer",{class:d.value,style:T.value,onFocusin:L},t)}}});const{passive:E}=U,Y=["both","horizontal","vertical"];var Z=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,o,i;y(()=>e.scrollTarget,()=>{v(),p()});function c(){l!==null&&l();const m=Math.max(0,J(o)),z=X(o),d={top:m-a.position.top,left:z-a.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const T=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";a.position={top:m,left:z},a.directionChanged=a.direction!==T,a.delta=d,a.directionChanged===!0&&(a.direction=T,a.inflectionPoint=a.position),h("scroll",{...a})}function p(){o=G(i,e.scrollTarget),o.addEventListener("scroll",u,E),u(!0)}function v(){o!==void 0&&(o.removeEventListener("scroll",u,E),o=void 0)}function u(m){if(m===!0||e.debounce===0||e.debounce==="0")c();else if(l===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];l=()=>{d(z),l=null}}}const{proxy:w}=H();return y(()=>w.$q.lang.rtl,c),A(()=>{i=w.$el.parentNode,p()}),K(()=>{l!==null&&l(),v()}),Object.assign(w,{trigger:u,getPosition:()=>a}),I}}),re=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:a}){const{proxy:{$q:l}}=H(),o=b(null),i=b(l.screen.height),c=b(e.container===!0?0:l.screen.width),p=b({position:0,direction:"down",inflectionPoint:0}),v=b(0),u=b(k.value===!0?0:F()),w=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=s(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),z=s(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),d=s(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function T(n){if(e.container===!0||document.qScrollPrevented!==!0){const t={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};p.value=t,e.onScroll!==void 0&&a("scroll",t)}}function g(n){const{height:t,width:r}=n;let x=!1;i.value!==t&&(x=!0,i.value=t,e.onScrollHeight!==void 0&&a("scrollHeight",t),Q()),c.value!==r&&(x=!0,c.value=r),x===!0&&e.onResize!==void 0&&a("resize",n)}function S({height:n}){v.value!==n&&(v.value=n,Q())}function Q(){if(e.container===!0){const n=i.value>v.value?F():0;u.value!==n&&(u.value=n)}}let q=null;const L={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:o,height:i,containerHeight:v,scrollbarWidth:u,totalWidth:s(()=>c.value+u.value),rows:s(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:p,animate(){q!==null?clearTimeout(q):document.body.classList.add("q-body--layout-animate"),q=setTimeout(()=>{q=null,document.body.classList.remove("q-body--layout-animate")},155)},update(n,t,r){L[n][t]=r}};if(W(O,L),F()>0){let r=function(){n=null,t.classList.remove("hide-scrollbar")},x=function(){if(n===null){if(t.scrollHeight>l.screen.height)return;t.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(r,300)},R=function(_){n!==null&&_==="remove"&&(clearTimeout(n),r()),window[`${_}EventListener`]("resize",x)},n=null;const t=document.body;y(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),D(()=>{R("remove")})}return()=>{const n=N(h.default,[f(Z,{onScroll:T}),f(V,{onResize:g})]),t=f("div",{class:w.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},n);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:o},[f(V,{onResize:S}),f("div",{class:"absolute-full",style:z.value},[f("div",{class:"scroll",style:d.value},[t])])]):t}}});export{re as Q,le as a,ne as b,ae as c,ie as d};