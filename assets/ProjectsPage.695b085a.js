import{u as Me,a as we,b as Re,c as Le}from"./QTabs.feea2dfe.js";import{q as U,ad as ve,m as w,S as fe,ae as he,a as k,af as V,ag as G,u as F,c as O,r as E,k as v,w as oe,g as H,n as be,h as S,s as qe,ah as Pe,t as N,ai as Ie,aj as ge,p as de,ak as ee,R as Ee,H as xe,I as ke,i as Ne,K as Ue,A as ye,_ as Te,U as Se,V as C,W as B,X as y,Y as _,a0 as x,al as I,a8 as Be,am as je,$,Z as z,a1 as Ve,a2 as Oe,a3 as X,ab as te,ac as ae}from"./index.ff5cb82b.js";import{c as _e}from"./selection.d532d468.js";import{u as Z,a as J,Q as ze}from"./QCard.bb8c1608.js";import{Q as $e}from"./QPage.78a69d70.js";import"./use-timeout.02992c4b.js";var Fe=U({name:"QTab",props:Me,emits:we,setup(e,{slots:n,emit:o}){const{renderTab:u}=Re(e,n,o);return()=>u("div")}});const re={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ge=Object.keys(re);re.all=!0;function W(e){const n={};for(const o of Ge)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?re:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function K(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function He(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,u)=>{const a=parseFloat(o);a&&(n[u]=a)}),n}var Qe=ve({name:"touch-swipe",beforeMount(e,{value:n,arg:o,modifiers:u}){if(u.mouse!==!0&&w.has.touch!==!0)return;const a=u.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:He(o),direction:W(u),noop:fe,mouseStart(i){K(i,t)&&he(i)&&(k(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(K(i,t)){const r=i.target;k(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,r){w.is.firefox===!0&&V(e,!0);const l=G(i);t.event={x:l.left,y:l.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){F(i);return}const r=Date.now()-t.event.time;if(r===0)return;const l=G(i),s=l.left-t.event.x,d=Math.abs(s),h=l.top-t.event.y,p=Math.abs(h);if(t.event.mouse!==!0){if(d<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(i);return}}else if(d<t.sensitivity[2]&&p<t.sensitivity[2])return;const m=d/r,g=p/r;t.direction.vertical===!0&&d<p&&d<100&&g>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&d>p&&p<100&&m>t.sensitivity[0]&&(t.event.dir=s<0?"left":"right"),t.direction.up===!0&&d<p&&h<0&&d<100&&g>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&d<p&&h>0&&d<100&&g>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&d>p&&s<0&&p<100&&m>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&d>p&&s>0&&p<100&&m>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(F(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_e(),t.styleCleanup=D=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const M=()=>{document.body.classList.remove("no-pointer-events--children")};D===!0?setTimeout(M,50):M()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:d,y:p}})):t.end(i)},end(i){t.event!==void 0&&(O(t,"temp"),w.is.firefox===!0&&V(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&F(i),t.event=void 0)}};if(e.__qtouchswipe=t,u.mouse===!0){const i=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";k(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}w.has.touch===!0&&k(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchswipe;o!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&o.end(),o.handler=n.value),o.direction=W(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(O(n,"main"),O(n,"temp"),w.is.firefox===!0&&V(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ye(){const e=new Map;return{getCache:function(n,o){return e[n]===void 0?e[n]=o:e[n]},getCacheWithFn:function(n,o){return e[n]===void 0?e[n]=o():e[n]}}}const We={name:{required:!0},disable:Boolean},ce={setup(e,{slots:n}){return()=>S("div",{class:"q-panel scroll",role:"tabpanel"},N(n.default))}},Ke={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Xe=["update:modelValue","beforeTransition","transition"];function Ze(){const{props:e,emit:n,proxy:o}=H(),{getCacheWithFn:u}=Ye();let a,t;const i=E(null),r=E(null);function l(c){const b=e.vertical===!0?"up":"left";q((o.$q.lang.rtl===!0?-1:1)*(c.direction===b?1:-1))}const s=v(()=>[[Qe,l,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),m=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),g=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),D=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);oe(()=>e.modelValue,(c,b)=>{const P=f(c)===!0?R(c):-1;t!==!0&&L(P===-1?0:P<R(b)?-1:1),i.value!==P&&(i.value=P,n("beforeTransition",c,b),be(()=>{n("transition",c,b)}))});function M(){q(1)}function A(){q(-1)}function j(c){n("update:modelValue",c)}function f(c){return c!=null&&c!==""}function R(c){return a.findIndex(b=>b.props.name===c&&b.props.disable!==""&&b.props.disable!==!0)}function T(){return a.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function L(c){const b=c!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(c===-1?d.value:h.value):null;r.value!==b&&(r.value=b)}function q(c,b=i.value){let P=b+c;for(;P>-1&&P<a.length;){const Q=a[P];if(Q!==void 0&&Q.props.disable!==""&&Q.props.disable!==!0){L(c),t=!0,n("update:modelValue",Q.props.name),setTimeout(()=>{t=!1});return}P+=c}e.infinite===!0&&a.length>0&&b!==-1&&b!==a.length&&q(c,c===-1?a.length:-1)}function se(){const c=R(e.modelValue);return i.value!==c&&(i.value=c),!0}function ue(){const c=f(e.modelValue)===!0&&se()&&a[i.value];return e.keepAlive===!0?[S(Ie,g.value,[S(D.value===!0?u(m.value,()=>({...ce,name:m.value})):ce,{key:m.value,style:p.value},()=>c)])]:[S("div",{class:"q-panel scroll",style:p.value,key:m.value,role:"tabpanel"},[c])]}function Ce(){if(a.length!==0)return e.animated===!0?[S(qe,{name:r.value},ue)]:ue()}function De(c){return a=Pe(N(c.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&f(b.props.name)===!0),a.length}function Ae(){return a}return Object.assign(o,{next:M,previous:A,goTo:j}),{panelIndex:i,panelDirectives:s,updatePanelsList:De,updatePanelIndex:se,getPanelContent:Ce,getEnabledPanels:T,getPanels:Ae,isValidPanelName:f,keepAliveProps:g,needsUniqueKeepAliveWrapper:D,goToPanelByOffset:q,goToPanel:j,nextPanel:M,previousPanel:A}}var Je=U({name:"QTabPanel",props:We,setup(e,{slots:n}){return()=>S("div",{class:"q-tab-panel",role:"tabpanel"},N(n.default))}}),et=U({name:"QTabPanels",props:{...Ke,...Z},emits:Xe,setup(e,{slots:n}){const o=H(),u=J(e,o.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:i}=Ze(),r=v(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(n),ge("div",{class:r.value},t(),"pan",e.swipeable,()=>i.value))}});function ne(e,n,o){const u=G(e);let a,t=u.left-n.event.x,i=u.top-n.event.y,r=Math.abs(t),l=Math.abs(i);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?a=t<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?a=i<0?"up":"down":s.up===!0&&i<0?(a="up",r>l&&(s.left===!0&&t<0?a="left":s.right===!0&&t>0&&(a="right"))):s.down===!0&&i>0?(a="down",r>l&&(s.left===!0&&t<0?a="left":s.right===!0&&t>0&&(a="right"))):s.left===!0&&t<0?(a="left",r<l&&(s.up===!0&&i<0?a="up":s.down===!0&&i>0&&(a="down"))):s.right===!0&&t>0&&(a="right",r<l&&(s.up===!0&&i<0?a="up":s.down===!0&&i>0&&(a="down")));let d=!1;if(a===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};a=n.event.lastDir,d=!0,a==="left"||a==="right"?(u.left-=t,r=0,t=0):(u.top-=i,l=0,i=0)}return{synthetic:d,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:u,direction:a,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:r,y:l},offset:{x:t,y:i},delta:{x:u.left-n.event.lastX,y:u.top-n.event.lastY}}}}let tt=0;var at=ve({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&w.has.touch!==!0)return;function u(t,i){o.mouse===!0&&i===!0?F(t):(o.stop===!0&&ee(t),o.prevent===!0&&de(t))}const a={uid:"qvtp_"+tt++,handler:n,modifiers:o,direction:W(o),noop:fe,mouseStart(t){K(t,a)&&he(t)&&(k(a,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),a.start(t,!0))},touchStart(t){if(K(t,a)){const i=t.target;k(a,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),a.start(t)}},start(t,i){if(w.is.firefox===!0&&V(e,!0),a.lastEvt=t,i===!0||o.stop===!0){if(a.direction.all!==!0&&(i!==!0||a.modifiers.mouseAllDir!==!0&&a.modifiers.mousealldir!==!0)){const s=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&de(s),t.cancelBubble===!0&&ee(s),Object.assign(s,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[a.uid]:t.qClonedBy.concat(a.uid)}),a.initialEvent={target:t.target,event:s}}ee(t)}const{left:r,top:l}=G(t);a.event={x:r,y:l,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:r,lastY:l}},move(t){if(a.event===void 0)return;const i=G(t),r=i.left-a.event.x,l=i.top-a.event.y;if(r===0&&l===0)return;a.lastEvt=t;const s=a.event.mouse===!0,d=()=>{u(t,s);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),_e(),a.styleCleanup=g=>{if(a.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),s===!0){const D=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{D(),g()},50):D()}else g!==void 0&&g()}};if(a.event.detected===!0){a.event.isFirst!==!0&&u(t,a.event.mouse);const{payload:m,synthetic:g}=ne(t,a,!1);m!==void 0&&(a.handler(m)===!1?a.end(t):(a.styleCleanup===void 0&&a.event.isFirst===!0&&d(),a.event.lastX=m.position.left,a.event.lastY=m.position.top,a.event.lastDir=g===!0?void 0:m.direction,a.event.isFirst=!1));return}if(a.direction.all===!0||s===!0&&(a.modifiers.mouseAllDir===!0||a.modifiers.mousealldir===!0)){d(),a.event.detected=!0,a.move(t);return}const h=Math.abs(r),p=Math.abs(l);h!==p&&(a.direction.horizontal===!0&&h>p||a.direction.vertical===!0&&h<p||a.direction.up===!0&&h<p&&l<0||a.direction.down===!0&&h<p&&l>0||a.direction.left===!0&&h>p&&r<0||a.direction.right===!0&&h>p&&r>0?(a.event.detected=!0,a.move(t)):a.end(t,!0))},end(t,i){if(a.event!==void 0){if(O(a,"temp"),w.is.firefox===!0&&V(e,!1),i===!0)a.styleCleanup!==void 0&&a.styleCleanup(),a.event.detected!==!0&&a.initialEvent!==void 0&&a.initialEvent.target.dispatchEvent(a.initialEvent.event);else if(a.event.detected===!0){a.event.isFirst===!0&&a.handler(ne(t===void 0?a.lastEvt:t,a).payload);const{payload:r}=ne(t===void 0?a.lastEvt:t,a,!0),l=()=>{a.handler(r)};a.styleCleanup!==void 0?a.styleCleanup(l):l()}a.event=void 0,a.initialEvent=void 0,a.lastEvt=void 0}}};if(e.__qtouchpan=a,o.mouse===!0){const t=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";k(a,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}w.has.touch===!0&&k(a,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=W(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),O(n,"main"),O(n,"temp"),w.is.firefox===!0&&V(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}}),nt=U({name:"QSplitter",props:{...Z,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:n,emit:o}){const{proxy:{$q:u}}=H(),a=J(e,u),t=E(null),i={before:E(null),after:E(null)},r=v(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(a.value===!0?" q-splitter--dark":"")),l=v(()=>e.horizontal===!0?"height":"width"),s=v(()=>e.reverse!==!0?"before":"after"),d=v(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function h(T){return(e.unit==="%"?T:Math.round(T))+e.unit}const p=v(()=>({[s.value]:{[l.value]:h(e.modelValue)}}));let m,g,D,M,A;function j(T){if(T.isFirst===!0){const q=t.value.getBoundingClientRect()[l.value];m=e.horizontal===!0?"up":"left",g=e.unit==="%"?100:q,D=Math.min(g,d.value[1],Math.max(d.value[0],e.modelValue)),M=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:u.lang.rtl===!0?-1:1)*(e.unit==="%"?q===0?0:100/q:1),t.value.classList.add("q-splitter--active");return}if(T.isFinal===!0){A!==e.modelValue&&o("update:modelValue",A),t.value.classList.remove("q-splitter--active");return}const L=D+M*(T.direction===m?-1:1)*T.distance[e.horizontal===!0?"y":"x"];A=Math.min(g,d.value[1],Math.max(d.value[0],L)),i[s.value].value.style[l.value]=h(A),e.emitImmediately===!0&&e.modelValue!==A&&o("update:modelValue",A)}const f=v(()=>[[at,j,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function R(T,L){T<L[0]?o("update:modelValue",L[0]):T>L[1]&&o("update:modelValue",L[1])}return oe(()=>e.modelValue,T=>{R(T,d.value)}),oe(()=>e.limits,()=>{be(()=>{R(e.modelValue,d.value)})}),()=>{const T=[S("div",{ref:i.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:p.value.before},N(n.before)),S("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[ge("div",{class:"q-splitter__separator-area absolute-full"},N(n.separator),"sep",e.disable!==!0,()=>f.value)]),S("div",{ref:i.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:p.value.after},N(n.after))];return S("div",{class:r.value,ref:t},Ee(n.default,T))}}}),pe=U({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=v(()=>parseInt(e.lines,10)),u=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),a=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>S("div",{style:a.value,class:u.value},N(n.default))}}),Y=U({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:o.value},N(n.default))}}),me=U({name:"QItem",props:{...Z,...xe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:u}}=H(),a=J(e,u),{hasLink:t,linkAttrs:i,linkClass:r,linkTag:l,navigateOnClick:s}=ke(),d=E(null),h=E(null),p=v(()=>e.clickable===!0||t.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&p.value===!0),g=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(t.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),D=v(()=>{if(e.insetLevel===void 0)return null;const f=u.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function M(f){m.value===!0&&(h.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===d.value?h.value.focus():document.activeElement===h.value&&d.value.focus()),s(f))}function A(f){if(m.value===!0&&Ne(f,13)===!0){F(f),f.qKeyEvent=!0;const R=new MouseEvent("click",f);R.qKeyEvent=!0,d.value.dispatchEvent(R)}o("keyup",f)}function j(){const f=Ue(n.default,[]);return m.value===!0&&f.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:h})),f}return()=>{const f={ref:d,class:g.value,style:D.value,role:"listitem",onClick:M,onKeyup:A};return m.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,i.value)):p.value===!0&&(f["aria-disabled"]="true"),S(l.value,f,j())}}});const it={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ie={xs:2,sm:4,md:8,lg:16,xl:24};var ot=U({name:"QSeparator",props:{...Z,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=H(),o=J(e,n.proxy.$q),u=v(()=>e.vertical===!0?"vertical":"horizontal"),a=v(()=>` q-separator--${u.value}`),t=v(()=>e.inset!==!1?`${a.value}-${it[e.inset]}`:""),i=v(()=>`q-separator${a.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),r=v(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const s=e.spaced===!0?`${ie.md}px`:e.spaced in ie?`${ie[e.spaced]}px`:e.spaced,d=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${d[0]}`]=l[`margin${d[1]}`]=s}return l});return()=>S("hr",{class:i.value,style:r.value,"aria-orientation":u.value})}});const rt=ye({name:"ProjectCard",props:{project_data:{Name:{type:String,default:"TEST ENTRY"},Acronym:{type:String,default:"TEST ENTRY"},Type:{type:String,default:"TEST ENTRY"},Audience:{type:String,default:"TEST ENTRY"},Description:{type:String,default:"test description"},Icon:{type:String,default:"TEST ENTRY"},URL:{type:String,default:"TEST ENTRY"},Github_Repo:{type:String,default:"TEST ENTRY"}}}}),le=e=>(Ve("data-v-1a80aee2"),e=e(),Oe(),e),lt={key:0},st=le(()=>X("span",{class:"text-weight-bold"},"Type: ",-1)),ut={key:1},dt=le(()=>X("span",{class:"text-weight-bold"},"Audience: ",-1)),ct={key:2},pt=le(()=>X("span",{class:"text-weight-bold"},"Github Link: ",-1));function mt(e,n,o,u,a,t){const i=Se("q-markdown");return C(),B(ze,{flat:"",bordered:"",class:"project-card q-ma-lg"},{default:y(()=>[_(me,{class:je(["service_type",e.project_data.Type])},{default:y(()=>[_(Y,null,{default:y(()=>[_(pe,{class:"text-h6"},{default:y(()=>[x(I(e.project_data.Name),1)]),_:1}),_(pe,{class:"text-subtitle1"},{default:y(()=>[x(I(e.project_data.Acronym),1)]),_:1})]),_:1}),_(Y,{avatar:""},{default:y(()=>[_(Be,{name:e.project_data.Icon},null,8,["name"])]),_:1})]),_:1},8,["class"]),_(ot),_(me,{class:"items-top"},{default:y(()=>[_(Y,{class:"test-class q-ma-md"},{default:y(()=>[_(i,{class:"description-section"},{default:y(()=>[x(I(e.project_data.Description),1)]),_:1}),e.project_data.Message?(C(),B(i,{key:0},{default:y(()=>[x(I(e.project_data.Message),1)]),_:1})):$("",!0),e.project_data.URL?(C(),B(i,{key:1},{default:y(()=>[x("**Link:** ["+I(e.project_data.URL)+"]("+I(e.project_data.URL)+")",1)]),_:1})):$("",!0)]),_:1}),_(Y,{class:"test-class col-3 q-ma-md"},{default:y(()=>[e.project_data.Type?(C(),z("p",lt,[st,x(I(e.project_data.Type),1)])):$("",!0),e.project_data.Audience?(C(),z("p",ut,[dt,x(I(e.project_data.Audience),1)])):$("",!0),e.project_data.Github_Repo?(C(),z("p",ct,[pt,x(I(e.project_data.Github_Repo),1)])):$("",!0)]),_:1})]),_:1})]),_:1})}var vt=Te(rt,[["render",mt],["__scopeId","data-v-1a80aee2"]]),ft=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",URL_MD:"[https://twdb.tdis.io/](https://twdb.tdis.io/)",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. "},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEEP",Name:"Model Evaluation and Execution Platform",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines"},{Operational:null,Type:"Service",SubType:null,Acronym:"DIS",Name:"Data Ingest Service",Audience:"RBFS Vendors",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:null,Type:"Service",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`},{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata",Name:"TDIS metadata schema public documentation",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",URL_MD:"[https://github.com/TexasDIS/metadata](https://github.com/TexasDIS/metadata)",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Damage Plain",Name:"Texas Damage Plain",Audience:"Researchers, Flood Planners",Host_Location:"TACC",URL:null,URL_MD:null,Message:"Contact TDIS if you are interested in this dataset",Github_Repo:null,Abstract:null,Description:"The Damage Plain is a machine learning model that annualizes the probability of an area experiencing a damaging flood between 1976 - 2020. based on features such as topographic, proximity, and hydrological information. The approach has been scaled up and applied to the 207 watersheds covering the entire state of Texas."},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:null,Name:"Data Catalog ",Audience:"All Users",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model Integration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. "},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",URL_MD:"[https://tdl-ir.tdl.org/handle/2249.1/156521](https://tdl-ir.tdl.org/handle/2249.1/156521)",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. "},{Operational:null,Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,URL_MD:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide."}];const ht=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. ",url_md:"[https://twdb.tdis.io/](https://twdb.tdis.io/)"},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEE",Name:"Model Evaluation Environment",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines",url_md:null},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. ",url_md:"[https://tdl-ir.tdl.org/handle/2249.1/156521](https://tdl-ir.tdl.org/handle/2249.1/156521)"}],bt=[{Operational:null,Type:"Allocation",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`,url_md:null}],gt=[{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model INTegration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. ",url_md:null},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide.",url_md:null}];var yt={Service:ht,Allocation:bt,"Code Repository":[{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata/catalog registry",Name:"TDIS metadata schema public documentation and Data Ingest Service and Catalog",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`,url_md:"[https://github.com/TexasDIS/metadata](https://github.com/TexasDIS/metadata)"},{Operational:"Dev",Type:"Code Repository",SubType:"Data",Acronym:"TDIS Stats",Name:"TDIS Data Services Performance Statistics",Audience:"All Users",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`Coming Soon! 
The metrics and current status of all TDIS services will be summarized in a dynamic webpage so that users and contributors can see key performance indicators for the data collections managed by TDIS. `,url_md:null}],Product:gt};const Tt=ye({name:"DocumentationPage",components:{ProjectCard:vt},data(){return{projectsjson:ft,categorized:yt}},setup(){return{tab:E("Service"),splitterModel:E(20)}},mounted(){}});function St(e,n,o,u,a,t){const i=Se("ProjectCard");return C(),B($e,null,{default:y(()=>[X("div",null,[_(nt,{modelValue:e.splitterModel,"onUpdate:modelValue":n[2]||(n[2]=r=>e.splitterModel=r)},{before:y(()=>[_(Le,{modelValue:e.tab,"onUpdate:modelValue":n[0]||(n[0]=r=>e.tab=r),vertical:"",class:"text-blue-10"},{default:y(()=>[(C(!0),z(ae,null,te(e.categorized,(r,l)=>(C(),B(Fe,{key:l,name:l,label:l},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),after:y(()=>[_(et,{modelValue:e.tab,"onUpdate:modelValue":n[1]||(n[1]=r=>e.tab=r),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:y(()=>[(C(!0),z(ae,null,te(e.categorized,(r,l)=>(C(),B(Je,{key:l,name:l,label:l},{default:y(()=>[(C(!0),z(ae,null,te(e.categorized[l],(s,d)=>(C(),B(i,{key:d,project_data:s},null,8,["project_data"]))),128))]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})}var Rt=Te(Tt,[["render",St]]);export{Rt as default};
