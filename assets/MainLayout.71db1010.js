import{q as T,H as J,I as X,k as c,w,h as v,t as N,x as K,J as L,r as m,b as j,K as Y,L as D,g as C,M as G,N as Z,o as ee,O as te,l as ae,R as oe,z as R,d as ne,S as le,_ as re,U as ie,V as I,W as se,X as _,Y as h,Z as ue,$ as ce,a0 as q,a1 as de,a2 as fe,a3 as ve}from"./index.f716de49.js";import{u as he,a as ge,b as me,Q as M,c as pe}from"./QTabs.c136b779.js";import{a as be,b as ye,c as _e,g as B}from"./scroll.80bc54b2.js";import"./use-timeout.a0407662.js";var F=T({name:"QRouteTab",props:{...J,...he},emits:ge,setup(e,{slots:s,emit:n}){const a=X({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:r}=me(e,s,n,{exact:c(()=>e.exact),...a});return w(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{r.verifyRouteModel()}),()=>o(a.linkTag.value,a.linkAttrs.value)}}),W=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const n=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:n.value},N(s.default))}});const we=v("div",{class:"q-space"});var xe=T({name:"QSpace",setup(){return()=>we}}),A=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const n=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:n.value,role:"toolbar"},N(s.default))}}),Se=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:n}){const{proxy:{$q:a}}=C(),o=K(D,L);if(o===L)return console.error("QHeader needs to be child of QLayout"),L;const r=m(parseInt(e.heightHint,10)),u=m(!0),y=c(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||a.platform.is.ios&&o.isContainer.value===!0),p=c(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return u.value===!0?r.value:0;const t=r.value-o.scroll.value.position;return t>0?t:0}),d=c(()=>e.modelValue!==!0||y.value===!0&&u.value!==!0),$=c(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),x=c(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=c(()=>{const t=o.rows.value.top,g={};return t[0]==="l"&&o.left.space===!0&&(g[a.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(g[a.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),g});function i(t,g){o.update("header",t,g)}function b(t,g){t.value!==g&&(t.value=g)}function k({height:t}){b(r,t),i("size",t)}function O(t){$.value===!0&&b(u,!0),n("focusin",t)}w(()=>e.modelValue,t=>{i("space",t),b(u,!0),o.animate()}),w(p,t=>{i("offset",t)}),w(()=>e.reveal,t=>{t===!1&&b(u,e.modelValue)}),w(u,t=>{o.animate(),n("reveal",t)}),w(o.scroll,t=>{e.reveal===!0&&b(u,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const Q={};return o.instances.header=Q,e.modelValue===!0&&i("size",r.value),i("space",e.modelValue),i("offset",p.value),j(()=>{o.instances.header===Q&&(o.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const t=Y(s.default,[]);return e.elevated===!0&&t.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(v(M,{debounce:0,onResize:k})),v("header",{class:x.value,style:S.value,onFocusin:O},t)}}}),Te=T({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:n}}=C(),a=K(D,L);if(a===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(Z,!0);const o=c(()=>{const r={};return a.header.space===!0&&(r.paddingTop=`${a.header.size}px`),a.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(r.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),r});return()=>v("div",{class:"q-page-container",style:o.value},N(s.default))}});const{passive:U}=ae,$e=["both","horizontal","vertical"];var ze=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>$e.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,o,r;w(()=>e.scrollTarget,()=>{p(),y()});function u(){a!==null&&a();const x=Math.max(0,ye(o)),S=_e(o),i={top:x-n.position.top,left:S-n.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const b=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";n.position={top:x,left:S},n.directionChanged=n.direction!==b,n.delta=i,n.directionChanged===!0&&(n.direction=b,n.inflectionPoint=n.position),s("scroll",{...n})}function y(){o=be(r,e.scrollTarget),o.addEventListener("scroll",d,U),d(!0)}function p(){o!==void 0&&(o.removeEventListener("scroll",d,U),o=void 0)}function d(x){if(x===!0||e.debounce===0||e.debounce==="0")u();else if(a===null){const[S,i]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];a=()=>{i(S),a=null}}}const{proxy:$}=C();return w(()=>$.$q.lang.rtl,u),ee(()=>{r=$.$el.parentNode,y()}),j(()=>{a!==null&&a(),p()}),Object.assign($,{trigger:d,getPosition:()=>n}),te}}),Le=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:n}){const{proxy:{$q:a}}=C(),o=m(null),r=m(a.screen.height),u=m(e.container===!0?0:a.screen.width),y=m({position:0,direction:"down",inflectionPoint:0}),p=m(0),d=m(oe.value===!0?0:B()),$=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=c(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),S=c(()=>d.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),i=c(()=>d.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};y.value=f,e.onScroll!==void 0&&n("scroll",f)}}function k(l){const{height:f,width:z}=l;let P=!1;r.value!==f&&(P=!0,r.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),Q()),u.value!==z&&(P=!0,u.value=z),P===!0&&e.onResize!==void 0&&n("resize",l)}function O({height:l}){p.value!==l&&(p.value=l,Q())}function Q(){if(e.container===!0){const l=r.value>p.value?B():0;d.value!==l&&(d.value=l)}}let t=null;const g={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:o,height:r,containerHeight:p,scrollbarWidth:d,totalWidth:c(()=>u.value+d.value),rows:c(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:y,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,f,z){g[l][f]=z}};if(G(D,g),B()>0){let z=function(){l=null,f.classList.remove("hide-scrollbar")},P=function(){if(l===null){if(f.scrollHeight>a.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(z,300)},V=function(E){l!==null&&E==="remove"&&(clearTimeout(l),z()),window[`${E}EventListener`]("resize",P)},l=null;const f=document.body;w(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ne(()=>{V("remove")})}return()=>{const l=le(s.default,[v(ze,{onScroll:b}),v(M,{onResize:k})]),f=v("div",{class:$.value,style:x.value,ref:e.container===!0?void 0:o,tabindex:-1},l);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:o},[v(M,{onResize:O}),v("div",{class:"absolute-full",style:S.value},[v("div",{class:"scroll",style:i.value},[f])])]):f}}});const qe={data(){return{}},setup(){const e=m(!1),s=m(!1);return{icon:m(!1),leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},rightDrawerOpen:s,toggleRightDrawer(){s.value=!s.value}}},methods:{notHomePage(){return!(this.$route.path=="/"||this.$route.path=="/home"||this.$route.path=="/#")}}},H=e=>(fe("data-v-a169864a"),e=e(),ve(),e),Qe={key:0,class:"header-title","text-center":""},Pe=H(()=>q("image",{src:"/images/tdis-mountain.png"},null,-1)),Re={class:"scroll-footer"},Ce=H(()=>q("div",null," This material is based upon work supported by the Texas General Land Office under Texas GLO Contract NO. 21-245-000 ",-1)),He=H(()=>q("div",null,[q("a",{class:"footer-tdis-a",href:"https://www.recovery.texas.gov/planning-studies/tdis/index.html",target:"_blank"},"https://www.recovery.texas.gov/planning-studies/tdis/index.html")],-1)),ke=H(()=>q("img",{src:"/images/glo_logo.png"},null,-1));function Oe(e,s,n,a,o,r){const u=ie("router-view");return I(),se(Le,{view:"hHh lpR fFf tdis-app"},{default:_(()=>[h(Se,{elevated:"","height-hint":"200",class:"main-header"},{default:_(()=>[h(A,{class:"flex flex-center",style:{height:"100px"}},{default:_(()=>[h(W,null,{default:_(()=>[r.notHomePage()?(I(),ue("span",Qe,"Texas Disaster Information System")):ce("",!0),h(pe,{align:"left"},{default:_(()=>[h(F,{to:"/",label:"Home"}),h(F,{to:"/about",label:"About"}),h(F,{to:"/livingplan",label:"Living Plan"})]),_:1})]),_:1}),h(xe)]),_:1})]),_:1}),h(Te,null,{default:_(()=>[h(u),Pe,q("div",Re,[h(A,{class:"row"},{default:_(()=>[h(W,{align:"center",class:"footer-tdis"},{default:_(()=>[Ce,He]),_:1}),h(de,null,{default:_(()=>[ke]),_:1})]),_:1})])]),_:1})]),_:1})}var Ne=re(qe,[["render",Oe],["__scopeId","data-v-a169864a"]]);export{Ne as default};
