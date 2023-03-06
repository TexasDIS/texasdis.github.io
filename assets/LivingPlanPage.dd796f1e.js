import{u as me,a as fe,b as ge,c as ve}from"./QTabs.c136b779.js";import{q as G,ag as ne,m as T,O as ie,ah as se,a as C,ai as M,aj as R,u as j,c as q,r as A,k as y,w as K,g as $,n as oe,h as w,s as ye,ak as be,t as E,al as Te,am as re,p as Y,an as H,S as we,_ as De,A as Se,U as Ie,V as U,W as V,X as z,a0 as ke,Y as L,Z,ab as ee,ac as te}from"./index.f716de49.js";import{c as le}from"./selection.720b2471.js";import{u as de,a as ce}from"./use-dark.16985b6a.js";import{Q as xe}from"./QPage.3bac1630.js";import"./use-timeout.a0407662.js";var Ce=G({name:"QTab",props:me,emits:fe,setup(e,{slots:n,emit:s}){const{renderTab:c}=ge(e,n,s);return()=>c("div")}});const J={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ae=Object.keys(J);J.all=!0;function B(e){const n={};for(const s of Ae)e[s]===!0&&(n[s]=!0);return Object.keys(n).length===0?J:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}function F(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function _e(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((s,c)=>{const a=parseFloat(s);a&&(n[c]=a)}),n}var Pe=ne({name:"touch-swipe",beforeMount(e,{value:n,arg:s,modifiers:c}){if(c.mouse!==!0&&T.has.touch!==!0)return;const a=c.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:_e(s),direction:B(c),noop:ie,mouseStart(i){F(i,t)&&se(i)&&(C(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(i,!0))},touchStart(i){if(F(i,t)){const o=i.target;C(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","notPassiveCapture"],[o,"touchend","end","notPassiveCapture"]]),t.start(i)}},start(i,o){T.is.firefox===!0&&M(e,!0);const d=R(i);t.event={x:d.left,y:d.top,time:Date.now(),mouse:o===!0,dir:!1}},move(i){if(t.event===void 0)return;if(t.event.dir!==!1){j(i);return}const o=Date.now()-t.event.time;if(o===0)return;const d=R(i),r=d.left-t.event.x,u=Math.abs(r),f=d.top-t.event.y,p=Math.abs(f);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(i);return}}else if(u<t.sensitivity[2]&&p<t.sensitivity[2])return;const h=u/o,g=p/o;t.direction.vertical===!0&&u<p&&u<100&&g>t.sensitivity[0]&&(t.event.dir=f<0?"up":"down"),t.direction.horizontal===!0&&u>p&&p<100&&h>t.sensitivity[0]&&(t.event.dir=r<0?"left":"right"),t.direction.up===!0&&u<p&&f<0&&u<100&&g>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<p&&f>0&&u<100&&g>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>p&&r<0&&p<100&&h>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>p&&r>0&&p<100&&h>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(j(i),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),le(),t.styleCleanup=b=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const x=()=>{document.body.classList.remove("no-pointer-events--children")};b===!0?setTimeout(x,50):x()}),t.handler({evt:i,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:o,distance:{x:u,y:p}})):t.end(i)},end(i){t.event!==void 0&&(q(t,"temp"),T.is.firefox===!0&&M(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),i!==void 0&&t.event.dir!==!1&&j(i),t.event=void 0)}};if(e.__qtouchswipe=t,c.mouse===!0){const i=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";C(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}T.has.touch===!0&&C(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const s=e.__qtouchswipe;s!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&s.end(),s.handler=n.value),s.direction=B(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(q(n,"main"),q(n,"temp"),T.is.firefox===!0&&M(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function ze(){const e=new Map;return{getCache:function(n,s){return e[n]===void 0?e[n]=s:e[n]},getCacheWithFn:function(n,s){return e[n]===void 0?e[n]=s():e[n]}}}const Me={name:{required:!0},disable:Boolean},ae={setup(e,{slots:n}){return()=>w("div",{class:"q-panel scroll",role:"tabpanel"},E(n.default))}},qe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ee=["update:modelValue","beforeTransition","transition"];function Ue(){const{props:e,emit:n,proxy:s}=$(),{getCacheWithFn:c}=ze();let a,t;const i=A(null),o=A(null);function d(l){const m=e.vertical===!0?"up":"left";I((s.$q.lang.rtl===!0?-1:1)*(l.direction===m?1:-1))}const r=y(()=>[[Pe,d,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=y(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=y(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=y(()=>`--q-transition-duration: ${e.transitionDuration}ms`),h=y(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),g=y(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),b=y(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(l,m)=>{const k=_(l)===!0?P(l):-1;t!==!0&&S(k===-1?0:k<P(m)?-1:1),i.value!==k&&(i.value=k,n("beforeTransition",l,m),oe(()=>{n("transition",l,m)}))});function x(){I(1)}function D(){I(-1)}function W(l){n("update:modelValue",l)}function _(l){return l!=null&&l!==""}function P(l){return a.findIndex(m=>m.props.name===l&&m.props.disable!==""&&m.props.disable!==!0)}function v(){return a.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function S(l){const m=l!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(l===-1?u.value:f.value):null;o.value!==m&&(o.value=m)}function I(l,m=i.value){let k=m+l;for(;k>-1&&k<a.length;){const O=a[k];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){S(l),t=!0,n("update:modelValue",O.props.name),setTimeout(()=>{t=!1});return}k+=l}e.infinite===!0&&a.length>0&&m!==-1&&m!==a.length&&I(l,l===-1?a.length:-1)}function X(){const l=P(e.modelValue);return i.value!==l&&(i.value=l),!0}function Q(){const l=_(e.modelValue)===!0&&X()&&a[i.value];return e.keepAlive===!0?[w(Te,g.value,[w(b.value===!0?c(h.value,()=>({...ae,name:h.value})):ae,{key:h.value,style:p.value},()=>l)])]:[w("div",{class:"q-panel scroll",style:p.value,key:h.value,role:"tabpanel"},[l])]}function ue(){if(a.length!==0)return e.animated===!0?[w(ye,{name:o.value},Q)]:Q()}function pe(l){return a=be(E(l.default,[])).filter(m=>m.props!==null&&m.props.slot===void 0&&_(m.props.name)===!0),a.length}function he(){return a}return Object.assign(s,{next:x,previous:D,goTo:W}),{panelIndex:i,panelDirectives:r,updatePanelsList:pe,updatePanelIndex:X,getPanelContent:ue,getEnabledPanels:v,getPanels:he,isValidPanelName:_,keepAliveProps:g,needsUniqueKeepAliveWrapper:b,goToPanelByOffset:I,goToPanel:W,nextPanel:x,previousPanel:D}}var Re=G({name:"QTabPanel",props:Me,setup(e,{slots:n}){return()=>w("div",{class:"q-tab-panel",role:"tabpanel"},E(n.default))}}),We=G({name:"QTabPanels",props:{...qe,...de},emits:Ee,setup(e,{slots:n}){const s=$(),c=ce(e,s.proxy.$q),{updatePanelsList:a,getPanelContent:t,panelDirectives:i}=Ue(),o=y(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(n),re("div",{class:o.value},t(),"pan",e.swipeable,()=>i.value))}});function N(e,n,s){const c=R(e);let a,t=c.left-n.event.x,i=c.top-n.event.y,o=Math.abs(t),d=Math.abs(i);const r=n.direction;r.horizontal===!0&&r.vertical!==!0?a=t<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?a=i<0?"up":"down":r.up===!0&&i<0?(a="up",o>d&&(r.left===!0&&t<0?a="left":r.right===!0&&t>0&&(a="right"))):r.down===!0&&i>0?(a="down",o>d&&(r.left===!0&&t<0?a="left":r.right===!0&&t>0&&(a="right"))):r.left===!0&&t<0?(a="left",o<d&&(r.up===!0&&i<0?a="up":r.down===!0&&i>0&&(a="down"))):r.right===!0&&t>0&&(a="right",o<d&&(r.up===!0&&i<0?a="up":r.down===!0&&i>0&&(a="down")));let u=!1;if(a===void 0&&s===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};a=n.event.lastDir,u=!0,a==="left"||a==="right"?(c.left-=t,o=0,t=0):(c.top-=i,d=0,i=0)}return{synthetic:u,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:c,direction:a,isFirst:n.event.isFirst,isFinal:s===!0,duration:Date.now()-n.event.time,distance:{x:o,y:d},offset:{x:t,y:i},delta:{x:c.left-n.event.lastX,y:c.top-n.event.lastY}}}}let Oe=0;var Le=ne({name:"touch-pan",beforeMount(e,{value:n,modifiers:s}){if(s.mouse!==!0&&T.has.touch!==!0)return;function c(t,i){s.mouse===!0&&i===!0?j(t):(s.stop===!0&&H(t),s.prevent===!0&&Y(t))}const a={uid:"qvtp_"+Oe++,handler:n,modifiers:s,direction:B(s),noop:ie,mouseStart(t){F(t,a)&&se(t)&&(C(a,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),a.start(t,!0))},touchStart(t){if(F(t,a)){const i=t.target;C(a,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),a.start(t)}},start(t,i){if(T.is.firefox===!0&&M(e,!0),a.lastEvt=t,i===!0||s.stop===!0){if(a.direction.all!==!0&&(i!==!0||a.modifiers.mouseAllDir!==!0&&a.modifiers.mousealldir!==!0)){const r=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&Y(r),t.cancelBubble===!0&&H(r),Object.assign(r,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[a.uid]:t.qClonedBy.concat(a.uid)}),a.initialEvent={target:t.target,event:r}}H(t)}const{left:o,top:d}=R(t);a.event={x:o,y:d,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:o,lastY:d}},move(t){if(a.event===void 0)return;const i=R(t),o=i.left-a.event.x,d=i.top-a.event.y;if(o===0&&d===0)return;a.lastEvt=t;const r=a.event.mouse===!0,u=()=>{c(t,r);let h;s.preserveCursor!==!0&&s.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),le(),a.styleCleanup=g=>{if(a.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),r===!0){const b=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{b(),g()},50):b()}else g!==void 0&&g()}};if(a.event.detected===!0){a.event.isFirst!==!0&&c(t,a.event.mouse);const{payload:h,synthetic:g}=N(t,a,!1);h!==void 0&&(a.handler(h)===!1?a.end(t):(a.styleCleanup===void 0&&a.event.isFirst===!0&&u(),a.event.lastX=h.position.left,a.event.lastY=h.position.top,a.event.lastDir=g===!0?void 0:h.direction,a.event.isFirst=!1));return}if(a.direction.all===!0||r===!0&&(a.modifiers.mouseAllDir===!0||a.modifiers.mousealldir===!0)){u(),a.event.detected=!0,a.move(t);return}const f=Math.abs(o),p=Math.abs(d);f!==p&&(a.direction.horizontal===!0&&f>p||a.direction.vertical===!0&&f<p||a.direction.up===!0&&f<p&&d<0||a.direction.down===!0&&f<p&&d>0||a.direction.left===!0&&f>p&&o<0||a.direction.right===!0&&f>p&&o>0?(a.event.detected=!0,a.move(t)):a.end(t,!0))},end(t,i){if(a.event!==void 0){if(q(a,"temp"),T.is.firefox===!0&&M(e,!1),i===!0)a.styleCleanup!==void 0&&a.styleCleanup(),a.event.detected!==!0&&a.initialEvent!==void 0&&a.initialEvent.target.dispatchEvent(a.initialEvent.event);else if(a.event.detected===!0){a.event.isFirst===!0&&a.handler(N(t===void 0?a.lastEvt:t,a).payload);const{payload:o}=N(t===void 0?a.lastEvt:t,a,!0),d=()=>{a.handler(o)};a.styleCleanup!==void 0?a.styleCleanup(d):d()}a.event=void 0,a.initialEvent=void 0,a.lastEvt=void 0}}};if(e.__qtouchpan=a,s.mouse===!0){const t=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";C(a,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}T.has.touch===!0&&C(a,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const s=e.__qtouchpan;s!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&s.end(),s.handler=n.value),s.direction=B(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),q(n,"main"),q(n,"temp"),T.is.firefox===!0&&M(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}}),je=G({name:"QSplitter",props:{...de,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:n,emit:s}){const{proxy:{$q:c}}=$(),a=ce(e,c),t=A(null),i={before:A(null),after:A(null)},o=y(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(a.value===!0?" q-splitter--dark":"")),d=y(()=>e.horizontal===!0?"height":"width"),r=y(()=>e.reverse!==!0?"before":"after"),u=y(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function f(v){return(e.unit==="%"?v:Math.round(v))+e.unit}const p=y(()=>({[r.value]:{[d.value]:f(e.modelValue)}}));let h,g,b,x,D;function W(v){if(v.isFirst===!0){const I=t.value.getBoundingClientRect()[d.value];h=e.horizontal===!0?"up":"left",g=e.unit==="%"?100:I,b=Math.min(g,u.value[1],Math.max(u.value[0],e.modelValue)),x=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:c.lang.rtl===!0?-1:1)*(e.unit==="%"?I===0?0:100/I:1),t.value.classList.add("q-splitter--active");return}if(v.isFinal===!0){D!==e.modelValue&&s("update:modelValue",D),t.value.classList.remove("q-splitter--active");return}const S=b+x*(v.direction===h?-1:1)*v.distance[e.horizontal===!0?"y":"x"];D=Math.min(g,u.value[1],Math.max(u.value[0],S)),i[r.value].value.style[d.value]=f(D),e.emitImmediately===!0&&e.modelValue!==D&&s("update:modelValue",D)}const _=y(()=>[[Le,W,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function P(v,S){v<S[0]?s("update:modelValue",S[0]):v>S[1]&&s("update:modelValue",S[1])}return K(()=>e.modelValue,v=>{P(v,u.value)}),K(()=>e.limits,()=>{oe(()=>{P(e.modelValue,u.value)})}),()=>{const v=[w("div",{ref:i.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:p.value.before},E(n.before)),w("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[re("div",{class:"q-splitter__separator-area absolute-full"},E(n.separator),"sep",e.disable!==!0,()=>_.value)]),w("div",{ref:i.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:p.value.after},E(n.after))];return w("div",{class:o.value,ref:t},we(n.default,v))}}}),Be=`# Executive Summary

The Texas Disaster Information System (TDIS) will be an interactive, web-based spatial data system designed to support disaster preparedness, response, recovery, and mitigation for the State of Texas. At present, multiple federal, state, and local agencies are collecting and using data to respond and mitigate against the effects of numerous disaster events in Texas. However, disaster information is often fragmented, poorly maintained, and difficult to access. This lack of data coherency limits the ability of responders, planners, grantmakers, and researchers to support disaster resilience.

TDIS will address these challenges by:

- Stewarding high-value disaster datasets by offering a standard catalog system and integrated access to data sources through a single mediated point (i.e. a federated information system).
- Employing data analytics, mapping technologies, and decision support tools to provide information needed to understand hazard risks, assess disaster impacts, and develop mitigation strategies.
- Enabling secured sharing of Texas-based disaster information and preserving data products generated during disaster response, recovery, and planning efforts.

## Funding and Implementation

Planning and initial development of TDIS is being funded primarily by the Texas General Land Office (GLO) and implemented through a contract with the Institute for a Disaster Resilient Texas (IDRT) at Texas A&M University-Galveston (TAMUG) in partnership with multiple partners, including the Texas Advanced Computing Center (TACC) at the University of Texas at Austin. In the future, additional funders and partners will join TDIS to facilitate continued development and operation beyond the current start-up phase.

## Vision Statement

The goal of TDIS is to increase disaster resilience by addressing real-world problems through open, transparent, and accessible data products and services.

TDIS will operate with the following key principles:

- People and problem-centered
- Decision and action-minded
- Trusted sources
- Team-based collaboration

## Planning Approach

The TDIS plan is "evergreen," meaning it will be reviewed and revised at regular intervals over the course of the TDIS lifecycle with updated versions published at least annually. This initial version of the Living Plan summarizes and reflects the overarching conceptual design considerations and best practices for developing information systems. Concepts in this plan will continue to be developed, revised, and adapted on a regular basis throughout future TDIS implementation phases.

### Initial Planning Focus

For the planning phase, the TDIS team made two important choices to guide early development of the system:

1. _Focus on flooding first_: In terms of loss of life and economic impact, floods are the most damaging natural hazard facing Texas. Prioritizing flooding will help TDIS align with numerous ongoing flood-related efforts in Texas and build a foundation that can translate to other hazards over time. This initial TDIS planning phase is also supported by federal funds specific to supporting interventions to mitigate flooding impacts.
2. _Start with planning and mitigation use cases_: TDIS will start with a focus on planning and mitigation use cases with the intention to transition to support for future recovery and response efforts. TDIS will adopt a staggered implementation approach to prioritize development of services that will eventually support all phases of disaster planning including preparation, mitigation, response, and recovery.

   Based on initial stakeholder focus groups and interviews, the TDIS team is focused on developing flood mitigation use cases from the following themes, which will be formalized during the implementation phase:

   - Theme 1: Risk Tools for Hazard Assessment, Planning and Evaluation specifically focused on flood hazards
   - Theme 2: Mitigation Strategies and Program Tracking

## Stakeholders and Users

Development of TDIS will rely on long-term and continuous engagement to identify users and understand their needs. During the initial planning phase, the TDIS team's focus has been on stakeholders who are knowledgeable about flood data and are active users of flood data products. Members of the TDIS Steering Committee, made up of state and federal agency representatives and academic partners, provided considerable input and advice.

The environment of flood-related projects and stakeholders in Texas is rich, presenting many opportunities for collaboration and multi-agency partnerships. The TDIS team has developed strong collaborative working relationships with the Texas Water Development Board (TWDB), Texas General Land Office (TGLO), Texas Division of Emergency Management (TDEM), and other organizations that seek enhanced data and analytical tools to support flood mitigation in the state.

### TDIS User Personas

TDIS products and services will operate on a continuum, ranging from providing access to raw data to sophisticated analysis and visualizations that support decision making. These services will be utilized by partners for various short and long-term purposes within the disaster life cycle.

The TDIS planning team identified and prioritized specific user "personas" to fine-tune thinking about user needs and interests. These personas can be grouped into three key categories of users: (1) end-users of analytical products; (2) developers of analytical products; and (3) those who provide the foundational data and knowledge that will feed all TDIS services.

## Conceptual Architecture - Services and Design

TDIS' architecture adopts a service-oriented approach that leverages computational and data resources in support of Intelligent Decision Support Systems (iDSS). The infrastructure design will provide tools and access to the data required to manage, analyze, and understand critical issues facing Texas disaster management and recovery. The figure below shows the conceptual architecture for TDIS.

![](/images/livingplan/TDIS_Conceptual_Architecture.png)
_TDIS Conceptual Architecture_

### Key Points - TDIS Design Approach

- TDIS will use a service-oriented approach to bundle capabilities in a user-friendly manner.
- Design and implementation will be completed by multidisciplinary teams.
- State of the art methods and analytics will accelerate modeling and automation of workflow tasks.
- The development process will include end-to-end human-computer interaction and evaluation.

## Data Stewardship and Governance

TDIS will be a steward of the data it receives and generates. As a data steward, TDIS\u2019 main objective is to build a fiduciary relationship with the partners, stakeholders, and entities whose data, studies, and research products are stored and managed within it. TDIS' intent is not to replicate or claim credit for any existing services and efforts, but rather to enhance their value by offering integrated access to data sources through a single mediated point (i.e. a federated information system). In doing so, TDIS will simplify the data query process of critical natural hazards data and enable the discovery and visualization of information more comprehensively than is possible using individual datasets.

### Data Identification, Storage, and Security

The identification of the authoritative and trusted data sources will be conducted in parallel with development of TDIS\u2019 use cases via targeted outreach efforts with industry leaders and outside entities. Once priority data and their sources are identified, TDIS will begin the process of executing the Data Transfer and Use Agreements (DTUAs) that will protect confidentiality when necessary and permit appropriate publication and sharing of research results. This process has already been initiated with the Federal Emergency Management Agency.

Once ingested, TDIS\u2019 data will be stored within data management services designed and optimized to support large-scale collections, collaborative research, and broader access. Currently, the technical team is assessing various options for data storage. Ideally, the data management system will be able to support multiple modes of data transfer and access. To control data access, TDIS will establish a roles-based authorization structure that both protects sensitive data and enables collaboration.

## Organizational Design

TDIS has a technical team that brings deep subject matter expertise. Managed by the IDRT Executive Director and TDIS Director, the principal staffing roles will include a nimble core set of seven technical expert areas including 1) Systems Administration, 2) Data Management Services, 3) Software Services and Application Protocols (APIs), 4) Intelligent Decision Support Systems (iDSS), 5) Applied Research & Use Case development, 6) Program Management, and 7) Data Agreements. The figure below shows the planned Organizational Chart for the core Technical Team.

![](/images/livingplan/Proposed_TDIS_Organizational_Structure.png)
_Proposed TDIS Organizational Structure_

## Development Roadmap and Timeline

TDIS is on a 3-year timeline to develop an initial design, implementation strategy, testing and evaluation protocols, and two themed "service bundles". These service bundles will provide evidence of initial proof-of-concepts, visualizations and graphics, conceptual system design, and workflows. The two service bundles will include:

1. TDIS Risk Tools for Hazard Assessment, Planning and Evaluation specifically focused on flood hazards
2. TDIS Mitigation Strategies and Program Tracking

To accomplish these goals, TDIS will follow an iterative design-build-test cycle, which will enable continuous improvement and refinement of TDIS services over time. In year one and two of the project, proof-of-concept and prototype services will be developed. After initial testing core capabilities will be transitioned to production.

![](/images/livingplan/TDIS_Roadmap.png)
_TDIS Roadmap_
`,Fe=`# Vision and Planning Approach

The TDIS vision and planning approach has been refined using stakeholder input throughout the planning year.

## Vision

**_TDIS will increase disaster resilience by addressing real-world problems through open, transparent, and accessible data products and services._**

### People and problem centered

TDIS is grounded in a sense of service and guided by ongoing involvement and feedback from stakeholders in the Texas disaster community.

### Decision and action minded

The purpose of TDIS is to translate knowledge into action by answering specific questions and solving specific problems with faster access to data and analytics.

### Trusted source

TDIS provides a rational system for capturing, cataloging, maintaining, and securely sharing high-value information. The TDIS governance process ensures priority focus on delivering authoritative sources of data at proper access levels.

### Team-based collaboration

TDIS is a forum for collaboration to enable more services and computing power than any one entity can develop on its own. TDIS rectifies disconnects between, and overlaps across, organizations with similar data needs and helps minimize duplication of effort.

# Planning Approach

The State of Texas has an all-hazards approach to disaster planning, from hurricanes and floods to wildfires and tornadoes.

For the initial planning phase, the TDIS team made two important early choices to focus early development of the system.

## Focus on Flooding First

Instead of dividing focus between all potential hazards, the TDIS planning team chose to focus on flooding first because:

- Floods are the most damaging and repetitive hazard facing Texas.
- Funding for this planning initiative stems from federal funds allocated to Texas in the aftermath of Hurricane Harvey.
- The Institute for a Disaster Resilient Texas has a specific legislative mandate to address flood-related data and resiliency issues.
- Prioritizing flooding ensures that TDIS remains aligned with other major initiatives funded by the Texas Legislature, such as new flood planning and data projects at the Texas Water Development Board and Texas General Land Office.

By focusing on flooding first, TDIS will address the highest priority hazards while building a foundation for data, governance, and stakeholder engagement that will translate to other hazards in time.

## Start with Planning and Mitigation Use Cases

Emergency managers typically break down the disaster cycle into four (or sometimes five) phases:

- planning (sometimes divided into prevention & preparedness);
- mitigation;
- response; and
- recovery.

TDIS will start with a focus on direct tie-ins to existing planning and mitigation programs with the intention to support recovery and response long-term. TDIS will adopt a staggered implementation approach to prioritize development of services.

At this time, TDIS will not play a direct role in disaster response workflows, given the unique types of systems, analytics, and expertise needed to support immediate life-saving decisions and activities during an emergency response.

TDIS does envision preserving and collecting data that may be generated prior to, during, or immediately after an event that become useful for recovery. TDIS will continue to work with recovery and response programs to further develop tools and data flows to support these needs as planning and implementation of TDIS advances.

## Initial Planning and Mitigation Use Case Themes

Services within TDIS will be grouped into themed sets of tools and services that target common needs across decision-making organizations. Following initial stakeholder input,\u202Fthe TDIS team\u202Fidentified three\u202Fthemes that TDIS can help address to benefit\u202Fflood\u202Fstakeholder workflows and missions:

**Better\u202Frisk assessment and\u202Fplanning coordination.**\u202FThere are multiple plans developed by state, regional, and local agencies that would benefit from universal data and improved coordination. For example,\u202Fevery five years,\u202Fthe Texas Division of Emergency Management (TDEM)\u202Fdevelops a state hazard mitigation plan. The Texas Water Development Board (TWDB)\u202Fwill\u202Falso begin\u202Freleasing\u202Fa\u202Fstate\u202Fflood risk assessment plan\u202Fevery five years. Additionally,\u202Fthe Texas GLO develops an action plan\u202Fafter each disaster\u202Fthat also requires a risk assessment. Local jurisdictions are also developing flood models and risk assessments for their region.

**Better mitigation\u202F program \u202Ftracking.**\u202FAs the frequency of disasters increase in Texas, the scale of mitigation\u202Fprojects\u202Foccurring at every level of government\u202Falso increases.\u202FFor example, parcel buyout programs are funded by multiple federal, state, and local agencies and not comprehensively tracked.\u202FAs a result, the Texas GLO must coordinate with\u202Fmultiple\u202Fagencies\u202Fto\u202Fbetter understand whether it is distributing funding\u202Feffectively.\u202FTDIS could provide a statewide view of\u202Fbuyout\u202Factivity, while limiting access to the full data based on need.\u202FEvaluations could also assess\u202Felevation/freeboard requirements, impervious surface coverage\u202Frequirements, drainage standards, planning policies, insurance penetration, and FEMA CRS activities.

**Predictive\u202Fanalytics.**\u202FThe state agencies in TDIS focus groups expressed interest in using data to better understand the effects of their\u202Fgrant-funded\u202Fmitigation projects. Some examples include understanding the effects of buyouts on taxes collected, or how recovery and mitigation projects have affected future losses. TDIS could provide the\u202Fcomputing power and\u202Fadvanced spatial analysis tools necessary to manage these complex queries\u202Fand help target future programs to the highest need and most effective strategies.
`,Ge=`# Stakeholders and Users

The development of TDIS will depend on long-term and continuous engagement to identify users and understand their needs. During the initial planning phase, the TDIS team's focus has been on stakeholders who are knowledgeable about flood data and active users of flood data products. The environment of flood-related projects and stakeholders in Texas is rich, presenting many opportunities for collaboration and multi-agency partnerships.

## Planning phase engagement activities

### Stakeholder engagement highlights to date:

- The Steering Committee, made up of state and federal agency representatives, university partners, and other entities, convened four times during the planning year to review planning progress and provide high-level input.
- Steering Committee members participated in a survey regarding the TDIS mission, vision, and value proposition, which shaped the planning team\u2019s initial focus and priorities.
- The planning team conducted additional in-depth focus-group style interviews with representatives from key agencies, including the Texas Water Development Board, Texas Division of Emergency Management, Texas General Land Office, Federal Emergency Management Agency, U.S. Army Corps of Engineers, Harris County Flood Control District, and the Houston-Galveston Area Council.
- The planning team requested several demonstrations of various tools and systems developed by local, state, and federal partners relevant to the TDIS mission, including the InFRM Flood Decision Support Toolbox and the Texas Department of Information Resources' Texas Open Data Portal.
- The planning team convened additional work sessions and informal meetings to gather ideas and input from private sector, university, and government partners. Topics discussed include mechanics of data sharing agreements, coordinating data taxonomy standards with existing state systems and data products, and long-term collaboration strategies between TDIS and partner agencies pursuing relevant projects.

### Next steps:

- The Steering Committee will continue to meet quarterly throughout the TDIS lifecycle and provide high-level input and direction.
- The TDIS planning team will continue to convene stakeholder meetings and workshops to refine initial TDIS services and products. These workshops will become more specific and targeted as the initial TDIS services are launched during implementation.
- TDIS will continue to develop working relationships with relevant parallel efforts in the Texas flood data space to maximize collaboration and minimize potential duplication of effort.

## Context: Flood Data Improvements in Texas

### An ecosystem of projects

The TDIS planning process is occurring in the midst of several state, federal, and academic efforts to improve the availability and use of flood-related information. These initiatives each have specific goals and parameters that form an ecosystem in which TDIS will operate and provide support. Projects include data collection and production (such as mapping and stream gauges); hydrologic and hydraulic modeling; data access through digitization, catalogs, and search features; and planning, decision making, and outreach.

The graphic below summarizes the landscape of ongoing flood data improvement projects in Texas and how TDIS services will support these efforts.
![](/images/livingplan/tx_flood_data_projects.png)
_Preliminary draft graphic. Credit: Taylor Christian, Texas Water Development Board._

### Texas Water Data Hub

The Texas Water Development Board's Texas Water Data Hub is a particularly relevant project with which the TDIS planning team has coordinated closely during its initial focus on the flood hazard domain. Funded by the Texas Legislature in 2019, the Hub's key product will be a data catalog of Texas Water Data that is indexed and organized in ways that allow all water data to be discovered and utilized following FAIR data principles (Findable, Interoperable, Accessible, and Reusable).

While the two projects may have overlapping stakeholders, the focus of each are complementary and not duplicative (as described in the graphic below). The Water Data Hub will contain more water data sets beyond those useful for TDIS' initial focus on flooding, while TDIS will provide computing services that the Water Data Hub is not developing. TDIS will benefit from the TWDB's work to collect and organize source data, while water stakeholders will benefit from the analytical tools and computing power TDIS will provide. While the Water Data Hub will continue to evolve and focus on adding new sources of water information, TDIS will eventually expand beyond flood information to other natural hazards well outside of the Hub's scope.

An early focus of both the Water Data Hub and TDIS teams has been to align metadata and other standards so that these two efforts are in sync and can seamlessly share information and services as deemed appropriate. The two projects have already coordinated closely during the planning phase and will continue to do so.

![](/images/livingplan/stakeholders_wordcloud.png)

_Preliminary draft graphic. Credit: Taylor Christian, Texas Water Development Board_

## Key TDIS stakeholders

TDIS partners are a rich combination of government actors, academic institutions, and private sector interests. The figure below depicts the current landscape of key TDIS stakeholders in the flood hazard domain. All of these stakeholders could become consumers, contributors, and complementors to TDIS data and analytics over time.

![](/images/livingplan/key_stakeholders.png)

### User Personas

TDIS products and services will operate on a continuum from providing access to raw data to sophisticated analysis and visualizations to support decision making. These services will be utilized by partners for various short and long-term purposes through the disaster life cycle.

The TDIS planning team identified and prioritized seven user "personas" to fine tune thinking about user needs and interests, summarized below. These personas can be grouped into three key categories of users: end-users of analytical products; developers of analytical products; and those who provide the building block data and knowledge that will feed all TDIS services.

| End-Users      | Developers             | Building Block Providers          |
| -------------- | ---------------------- | --------------------------------- |
| Decision Maker | Modeler/Data Scientist | Data Collector / Model Calibrator |
| Planner        | Technical Analyst      | Subject Matter Expert             |
| Communicator   |                        |

#### End Users of Analytical Products

These personas are using the TDIS end products. They desire rich information that can assist in decision making for discrete events, planning for a disaster, or telling a story to wider audience.

##### **Decision Maker**

Decision makers need quick access to actionable information to make sound decisions. They possess authority and communication skills, but may lack the time and technical ability to sift through complex data on their own. They need trusted, objective, and rapid information to balance competing needs and justify decisions. Most TDIS services will seek to provide products useful for decision making.

- _Example users:_
  - federal/state/local agency director
  - regulators
  - grant makers
  - tax assessor/collector
  - legislator
  - homeowner
  - voters
- _Skills_:
  - leadership
  - communication
  - social/political capital
  - strategic
  - authority
  - accountability
- _Technical level:_ Low
- _Key problems/questions:_
  - Where to allocate resources?
  - How to justify decisions?
  - What is the cost/benefit?
  - Where is the biggest risk?
  - How to distill complex issues into actionable information?
  - How does this impact me?
- _TDIS solutions:_
  - Answer "what if" scenarios
  - Organize and visualize information into jurisdictional boundaries
  - Provide catalog of solutions
  - Provide trusted/verified sources
  - Tell stories with visualizations
  - On-demand, easy to interpret statistical and visual information at multiple scales
  - Parcel-level information

##### **Planner**

Planners need contextual and comparative information to assess risk and develop specific strategies and recommendations for long-term improvement. They are familiar with GIS and other technical systems, but may lack the skills and resources to process risk analytics on their own. They must communicate with stakeholders and decision makers and need ways to visualize issues and alternative scenarios effectively.

- _Example users:_
  - Federal/state/local project manager
  - Community engagement leads
  - TWDB Flood Planning regional groups
  - County emergency managers / mitigation planners
  - Councils of governments
  - metropolitan planning organizations
  - city code developers
- _Skills_:
  - Analysis and writing
  - Research and synthesis
  - Project management
  - Organizing, distilling information
  - Making recommendations
- _Technical level:_
  - Medium to low
  - Likely some GIS skills
- _Key problems/questions:_
  - What is the landscape of issues?
  - What are the best practices?
  - Where are the biggest risks?
  - How to best communicate risk?
  - What are the best strategies to address risk?
  - Where are the gaps/blindspots?
  - Where should we start?
- _TDIS solutions:_
  - Standard risk reporting by jurisdiction
  - Automated services for developing standard reports
  - Best practices library / platforms for collaboration
  - Dashboards
  - Knowledge capture tools
  - Tools to compare jurisdictions
  - Prioritization and ranking tools

##### **Communicator**

Communicators must tell stories with technical information, often on very short deadlines. They are translators with less technical skills than some other personas and need trusted sources to effectively describe complex issues to a broader audience. They often have more narrow questions or geographies of interest and may be pursuing a specific issue.

- _Example users:_
  - Journalists
  - PIO of government agencies
  - Advocates (foundation/nonprofit)
  - "influencers"
  - Outreach efforts (AgriLife Extension / CHARM)
  - Local emergency managers
- _Skills_:
  - Writing
  - Issue synthesis
  - Communications
  - Public relations
  - Coordination / Outreach
- _Technical level:_
  - Low
- _Key problems/questions:_
  - What is the context for this issue?
  - What is the best way to communicate flood risk to X group?
  - How does flooding affect X community or issue (such as safety or equity)
  - How has flooding impacted property values in X area?
- _TDIS solutions:_
  - Maps showing small geographies
  - Objective infographics (low tech)
  - Interactive tools for exploration and discovery
  - Access to subject matter experts to answer questions
  - Trusted source of truth/facts

#### Developers of Analytical Products

These users are not satisfied with staged analytics or they may be developing custom analytics for decision makers. They have some degree of coding skills and a strong understanding of statistics and related methodologies. They may also use specific or custom types of softwares or disaster models. Their goal is to provide end products useful by decision makers.

##### **Modeler / Data Scientist**

Data scientists develop and run the complex analytical models that feed into the decision support tools that TDIS will develop. They have very high technical skills but frequently narrow focus areas. They often want help understanding decision maker needs and ways to test and validate their work to make it relevant, helpful, and fundable.

- _Example users:_
  - Applied researchers (academic, public, or private)
  - Research scientists
  - graduate students
  - professors
  - consultants
- _Skills_:
  - Coding
  - Computational
  - Strong expertise in narrow areas
- _Technical level:_
  - High
- _Key problems/questions:_
  - Which options are best to create models/solutions?
  - How to engineer software to produce outputs?
  - Is the research sustainable by grants?
  - Will a cutting edge model be accepted by decision makers?
  - What do decision makers need?
- _TDIS solutions:_
  - Support problem identification and decision pathways solutions
  - Move prototypes to operational services
  - Seamless workshops

##### **Technical Analyst**

Technical analysts work in many different contexts providing in-house support to decision makers across a wide range of topics. They have a medium level of technical proficiency using a limited set of tools. They understand the context of their organization's problems and must search for information to answer their organization's specific questions. They need help getting access to the best data available and automating work flows to rapidly derive answers.

- _Example users:_
  - Decision analysts (in a government housing agency or elected official office)
  - Research analyst at a nonprofit/think-tank (making recommendations and/or supporting advocacy)
  - Business analyst (ex: at a real estate investment firm)
- _Skills_:
  - Data fusion
  - Geospatial analysis
  - Technical project management
  - Communications/writing
  - Understands context of a problem / real-world impact
  - Translating between the context of flood hazards and the related impacts
- _Technical level:_
  - Medium (running analysis but not designing models)
  - Proficient in a limited set of tools
- _Key problems/questions:_
  - What are the potential impacts of a proposed flood mitigation effort from a variety of perspectives?
  - How does flooding impact our calculations?
  - How fast can this analysis be completed?
  - Should we give affordable housing tax credits to this property given flooding risk? (Social/policy questions associated with hazards)
- _TDIS solutions:_
  - Exploratory tools
  - Clean data for analysis abstracted to a workable level
  - Common work flow tools to accelerate analysis
  - Solid model catalog & data standards

#### Building Block Providers

These users are either ingesting external data into TDIS or using TDIS as a "one stop shop" to find disaster related data. They may be collecting primary data on historic impacts from a recent disaster or providing an updated flood model from an engineering firm. Conversely they may be looking for a previous run from a flood model.

##### **Data Collector / Model Calibrator**

Data collectors and calibrators live closest to the technical problems TDIS seeks to help solve or have access to valuable information that may be collected for esoteric or bureacratic purposes. Their technical abilities vary greatly depending on the size and sophistication of their organizations. Some of their information may be difficult to access for technical or policy reasons. They need help developing data standards and finding easier ways to collect, archive, and share their information.

- _Example users:_
  - Local entities with valuable information (river authorities, flood control districts)
  - private engineering firms developing information under a government contract
  - Data scientist in an academic group
  - IT manager in a government office
  - Regulatory/funding agencies with historical program data
- _Skills_:
  - Could vary
  - Understanding of local context, history, conditions
  - Application development
- _Technical level:_
  - Could vary
  - Much information may be "locked" in paper files
- _Key problems/questions:_
  - What data is authoritative?
  - What data standards should I use?
  - What quality is this data?
  - Is this the most up to date data?
  - Where can I store, organize, and archive my data?
  - How can I share my data (digitize useful information like windshield surveys, damage assessments)?
  - What data should I be collecting?
- _TDIS solutions:_
  - Recommended data standards
  - Data submission interfaces and workflows
  - Data search tools
  - Data transformation pipelines
  - Data stash services
  - Metadata and data quality assessment tools
  - Data sharing platforms

##### **Subject Matter Expert**

Subject matter experts build careers in specific areas of expertise and exist within most major government agencies with a role in disaster resiliency. They possess the best knowledge of origins, limitations, and potential uses of various data sets and have extensive institutional knowledge of how data use has evolved over time. They have a medium level of technical skills and need help keeping their products updated and replicable over time.

- _Example users:_
  - Public sector hydrologist
  - Economic impact analysts
  - Scientists within USACE, NOAA, USGS
- _Skills_:
  - Statistics
  - Disaster models (Hec, Adcirc, etc)
- _Technical level:_
  - Medium
- _Key problems/questions:_
  - Collecting data for a specific location.
  - Updating a disaster model for a community.
- _TDIS solutions:_
  - Provenance tracking (replicability)
  - Data accessibility
`,He=`# Data Landscape\r
\r
The state of Texas is data-rich, but information poor. While a great deal of data exist, they reside in many different places and are not easily integrated nor readily applied in useful ways.\r
\r
## Challenge 1: What is relevant? \r
\r
A wide range of data are relevant for supporting different user communities across Texas in their understanding of disaster risks, impacts, and mitigation strategies. Some of these data are well-known, while others will be novel datasets created during the lifetime of TDIS. We refer to this as the "data landscape". Within the landscape, data are created by and located within organizations at multiple levels, each with different management practices and responsibilities.\r
\r
The TDIS team has identified and begun to coordinate with partner organizations working at these different levels as both sources and users of data. Initially, insight into the data landscape is being gained through virtual one-on-one conversations with partners. These discussions reveal the importance of developing a common categorization for data within the landscape that support  particular problem domains and inform quality assessment and standardization.\r
\r
Although many features can be used to classify data, a shared vocabulary for describing the subject matter covered by datasets will be of great importance to TDIS. Data of interest are already independently grouped in this manner by documents such as the UT Center for Space Research's "CDR Data Management Plan: Data Survey and System Design" Final Report to GLO under "data themes", and the recent GLO Flood Study Data Collection Plans as "categories". Existing data distribution systems, such as the Texas Natural Resources Information System (TNRIS) Datahub and CUAHSI HydroShare use similair subject-based  categories to enable  users to discover and group data via filters. However, these categories are not standardized or aligned across systems. The Texas Water Datahub currently under development will also take advantage of this kind of data categorization and TDIS has an opportunity to strategically align thinking and activities in this area to establish appropriate standards for Texas data across systems. The TDIS Data Taxonomy Working Group will synthesize information from partners to create a systematic data classification for TDIS. \r
\r
Classifying data at this level of abstraction provides basic information about the content of datasets, can be used to inform more detailed and technical classifications such as expected file types and metadata needs, and serves as a tool for conversations with experts across hazard domains about the potential relevance of different kinds of data. As the data classification system is refined with the TDIS community, it will allow for the comparison of datasets from different sources to help identify authoritative data, common data formats and structures, and more systematically apply appropriate data and metadata standards. In terms of later data findability within TDIS, subject matter categories intuitive to the user community will also support discovery features, such as search and filtering across cataloged data. \r
\r
## Challenge 2: Prioritizing data \r
\r
A broad review of the data landscape is being undertaken in parallel with a deeper investigation of select datasets. Targeting priority data for TDIS will allow the team to quickly begin developing and implementing data management policies, procedures and standards that will continue to be refined over time. \r
\r
Currently, multiple needs and requests from stakeholders are informing TDIS target data and collection priorities: \r
\r
### Timely pursuit of data with the greatest requirements for secure handling and difficulty in acquisition. \r
This issue has been identified by the TDIS Steering Committee and the Data Governance Working Group, which is focusing on FEMA data. \r
\r
### Defining initial use cases from the flood hazard domain that inform the design of TDIS. \r
These use cases will require particular datasets, as identified by the Domain Problems and Use Cases Working Group. \r
\r
### Meeting project requirements for groups mandated to submit data products into TDIS. \r
These include the GLO Regional Flood Studies Groups. \r
\r
### Datasets identified as \u201Cframework\u201D and \u201Cfoundational\u201D based their utility to partners. \r
Written expert reports prioritize and review specific datasets for their problem areas, including UT Center for Space Research's "CDR Data Management Plan: Data Survey and System Design" Final Report to GLO, and GLO Regional Flood Study Data Collection Plans. \r
\r
The TDIS team will coordinate across Working Groups to capture and centralize appropriate information describing these datasets (metadata) for the purposes of agreeing on their priority and uses, and collection, management and stewardship requirements within TDIS. As datasets are identified through these channels, the team will need to further refine its approach for targeting data by developing a framework and procedure for assessing datasets with partner input about their uses, value, and quality.`,Ve=`# Conceptual Architecture - Services and Design

The Texas Disaster Information System (TDIS) aims to offer a full set of context-aware computing capabilities and services as shown in the figure below. The architecture adopts a service-oriented approach that leverages Computational and Data Resources in support of Intelligent Decision Support Systems (iDSS). The infrastructure design will provide the tools and access to data needed to manage, analyze, and understand the critical issues facing Texas disaster management and recovery. The figure below shows the conceptual architecture for TDIS.

![](/images/livingplan/TDIS_Conceptual_Architecture.png)
_TDIS Conceptual Architecture_

## Computational and Data Resources

Addressing disaster risks and impacts using data requires using many sources and types of information. The TDIS computing infrastructure design includes advanced computing resources, such as high performance and cloud computing, as well as data services for storage and management for many types of data sources and applications. This section briefly summarizes core capabilities that will be needed regardless of the final implementation of TDIS services.

### Computing Resources

Computing resources are the primary infrastructure that will underpin every TDIS transaction with data, information, and knowledge. The infrastructure will prioritize creation of secure, scalable compututational resources capable of meeting current and future demands. This infrastructure will prioritize the rapid escalation of network traffic that occurs during disasters. It will include hybrid cloud infrastructure that is redundant, scalable, and secure. It will also include a baseline level of infrastructure with failover.

### Data Management Services (DMS)

TDIS will serve as a unified data commons, collecting and standardizing data from multiple sources, managing these data and associated metadata, and distributing these data and products.
The DMS tier of the system supports data collection, conversion, and transformation processes that will be built into the system to accommodate each hazard and dataset. Core capabilities include ingest, data assurance, management and storage, and data visualization.

Data descriptions will be collected and maintained with metadata standards that match the level of data management needed to find, access, use interoperably, and reuse dataset. In the event that data products created with TDIS applications or ingested as new datasets require unique identifiers, TDIS will offer access to create digital object identifiers (DOIs) for appropriate resources.

### Information Discovery Services

Information Discovery Services turn data into useful information. This "Data to Information Threshold" makes datasets findable and accessible. This level in the architecture allows the user to access shared data, workflows, software, and computing services through an easy-to-use interface. It also provides the ability to view and display data products in digestible formats, such as interactive maps. The Discovery layer assists users by presenting information in ways that are actionable and support advanced decision making.

### Computational and Data Resources - Challenges

These complex computing environments include many infrastructure elements for hardware and software across multiple settings. The TDIS planning team has already identified several challenges early in the planning process. These challenges are listed below. The TDIS organizational design will apply modified agile processes to assure that issues are identified as they arise, and the team can adjust quickly. The issues include:

- Long timeframes to acquire, secure, and implement hardware and related infrastructure
- To assure stability and operational availability, need to develop models for-
  o incremental growth of capacity
  o \u201Cburst\u201D mode usage in the face of events, and
  o the Max Capacity available for services in \u201Cpeak\u201D scenarios.
  o Establishing a clear understanding of how much warning we can expect prior to each hazard event type
  o Assuring qualified Systems Administration and Operations staff are available 24/7
- Defining levels of data immediacy (e.g. to help define what data always needs to be available) and how much data should be available in relevant scenarios.
- Establish failover protection and resources for TDIS and partners with defined timelines for converting cold-site storage location to a warm site for failover (cold |warm |hot)
- Additive nature and increasing complexity over time as new data models, use cases, and hazard types are incorporated into TDIS
- Assuring design of data, model, and other cataloging services closely match the use case needs
- Establishing clear protocols to maintain and encourage compliance with metadata registration requirements and needs
- Matching storage service designs across TDIS data landscape
- Delineating access levels between portals and designing functional portals for appropriate authentication and access privileges, as well as providing compelling services for both protected and non-protected resources

## Intelligent Applications

TDIS will support advanced decision making in disaster management by providing data, tools, and other applications that assist with analyses and capture. Intelligent Decision Support (iDSS) capabilities enable the transition from information (data) to knowledge (insights) through the three elements described below.

### Interactive Analytics Environments

Interactive data dashboards can assist with every step of a decision process. The TDIS Interactive Analytics Environments will provide a suite of services that: 1) present analyses and results in interactive, public facing web applications, 2) provide tools for analysts that support rapid composition of workflows, and 3) report on tools that automate common tasks and track data provenance.

### Intelligent Decision Support

As applications and use cases mature, the focus of TDIS shifts to providing the underlying capabilities that move information into actionable knowledge. At this level in the architecture, TDIS will use artificial intelligence to support human-computer partnerships while also increasing the sophistication of analytical and modeling tasks.

### Human-Computer Interaction (HCI)

As described earlier, Intelligent Decision Support Systems (iDSS) are where social and technical aspects converge and inform the system design. The TDIS team envisions conceptual workflows that pair humans with machines at every stage. In addition to developing user interfaces for applications, TDIS will work across stakeholder communities by enabling participatory interactions via multi-modal and mixed reality user interfaces. To support the design, HCI considerations will be included from the start with every TDIS service. As products move through the Alpha, Beta, and Production phases, TDIS team members will conduct tests with users and evaluate performance of the overall system.

### Intelligent Applications - Challenges

The data and services layers in the TDIS architecture are designed to accelerate research for action-centered applications. Primary challenges include:

- Assuring that the TDIS team has the breadth of skills needed to design and implement complex iDSS, or can work with partner organizations to fill any knowledge gaps.
- Streamlining the processes for setting up decision problems using data so users can quickly instantiate, relevant decision problems.
- Addressing the 'invisible' tasks related to data extraction, transformation, and loading for new domain and use case applications.
- Establishing robust data pipelines through complex, multi-step workflows.
- Assuring the TDIS community has access to services and approaches that enable reusability and portability of iDSS applications.
- Providing adequate user training, onboarding, and engagement to build a strong user base and community around IDRT and TDIS applications.
`,Ne=`# Data Stewardship and Governance

TDIS is a steward of the data it receives and generates. As a data steward, TDIS\u2019 main objective is to build a fiduciary relationship with the partners, stakeholders, and entities whose data, study, and research products are stored and managed within it. Broadly speaking, data stewardship can be thought of as a data management strategy that specifies how data will be acquired, stored, aggregated, shared and deidentified through the implementation of procedures and protocols to ensure that the data is being managed in a safe and secure manner. This section will discuss TDIS\u2019 data stewardship and governance policies by highlighting two critical components: data transfer/use agreements and security protocols.

## Data Identification, Transfer, and Use

As data stewards, TDIS does not directly develop data transfer and use agreements (DTUAs), but, rather, is a consumer and enforcer of them. Data transfer as part of a collaborative university research project or state agency contract is addressed in the study protocol, funding agreement, data grantor\u2019s terms and conditions, or contract. Considering the large breadth of potential data sources needed for TDIS to accomplish its objectives and provide key services, it is critical to first identify the priority data needs and their respective authoritative or trusted sources. As part of regular operations TDIS staff will dedicate resources to identify, ingest, and maintain new data sources will be key to TDIS\u2019s development into implementation and operations activities. An authoritative source is an entity authorized by a legal authority to develop or manage data for a specific purpose [@stage2009authority]. The data produced by an authoritative source is considered authoritative because they are the most current and accurate, have been vetted according to a set of official rules and policies, and have a known accuracy and lineage that can be verified and certified by data stewards. The alternative to authoritative sources are trusted sources, which are recognized by the authoritative source as an official publisher and are often created to integrate data from multiple authoritative sources and jurisdictions and compile them into a centralized location. Trusted sources produce trusted data that contains clearly documented metadata describing how the data was compiled from the authoritative source.

The identification of the authoritative and trusted data sources will be conducted in parallel when developing TDIS\u2019 use cases via targeted outreach efforts with industry leaders and outside entities. Currently, TDIS has a set of governing structures to engage productively with a broader community of contributors and experts to identify critical information needs. These include the TDIS Steering Committee that guides the strategic direction of TDIS, active Working Groups that address key challenges and identify recommended actions, and a general Outreach Program that assures engagement with knowledge and expertise beyond TDIS. Once priority data and their sources are identified, TDIS will begin the process of executing the DTUAs that will protect confidentiality when necessary and permit appropriate publication and sharing of research results in accordance with Texas A&M policies, applicable laws and regulations, and federal requirements. TDIS will make use of Texas A&M University\u2019s Research Data Management Services (RDMS) that will provide services and tools to streamline the coordination, preparation, and execution of DTUAs, data management plans, technology control plans, and confidential data control plans based on templates and best practices.

Some authoritative and/or trusted source\u2019s data may be licensed and will require specific legal and operational considerations to reconcile the license conditions with TDIS services. Typically, these data licenses will contain a statement of ownership and copyright, a product description and statement of quality, warranties, disclaimers and indemnification, any restrictions on use or resale, specification of the length of the agreement and terms of renewal, cancellation terms, fees or in-kind exchange, and responsibilities for updates and error notification [@wells2005public]. These licensing restrictions pose not only significant restraints on data sharing and reproduction, but will also limit, if not preclude, the availability and usability of TDIS services that may ingest this type of data. To address this issue TDIS proposes the development of a service level agreement (SLA) that specifies, at the time of data ingestion, how a source\u2019s data can and cannot be used within the TDIS ecosystem. These SLAs will likely consist of a TDIS sublicense that will be submitted to the data producer to illustrate that TDIS is committed to complying with their original license and that TDIS is taking the appropriate steps to prevent misappropriation of the data. If a TDIS service relies on licensed data, then it will specify within the sublicense how the data will be used and who will have access to said service.

## Data Storage, Security Controls, and Monitoring

Once ingested, TDIS\u2019 data will be stored within a data management resource that is designed and optimized to support large-scale collections, collaborative research, and broader access. Currently, the technical team is assessing various options for data storage. Ideally, the data management system will be able to support multiple modes of data transfer and access, including simple HTTP, Globus/GridFTP and SFTP, support multiple modes of encrypted transfer, and access controls ranging from fully open data to highly constrained data. Data stored within TDIS should leverage multiple modes of data and operational protection to support continuous operation over both individual and multiple component failures. TDIS data integrity should be verified with checksums upon ingest, and those checksums should be validated periodically to ensure consistency over time. Finally, TDIS\u2019 data storage technology should have data redundancy procedures in place that can backup copies of the data on disk and tape components. Additional copies of data can be maintained in third party partner sites, or in commercial cloud infrastructures, as appropriate.

To control data access, TDIS will establish a roles-based authorization structure that both protects sensitive data and enables collaboration. This is generally accomplished with an identity management system that can authenticate users and by creating and managing groups, roles, and permissions. The security roles define how different users, such as developers, government officials, and the public, will be able to access different types of data, features, and capabilities in TDIS. Identity management and authentication will use modern, web-based technologies such as LDAP and OAuth2. When onboarding new users, an initial account-creation step is required. Users will enter their identifying information (name, position, agency, affiliation, etc.) into a web-based system, at which point their account will be in a \u201Cpending\u201D status and TDIS/IDRT administrators will be notified. An administrator must verify the identity information of the account before the account is active and the new user is assigned roles and permissions. To login, users will be required to use multi-factor authentication to access the TDIS system. Only a select number of individuals will be given the authorization to access confidential datasets that include PII and other information requiring special controls. Access restrictions of this nature will likely be specified in the DTUAs from the entity providing the confidential data. To further improve security, TDIS will be designed in such a way that it can support the monitoring and encryption, both at rest in in transit, of confidential datasets. TDIS is expected to maintain compliance certifications by following NIST 800-53 Rev 5 and NIST 800-171 frameworks and will likely be audited against those from a Texas A&M University third party auditor.

The data that TDIS will use to develop tools and applications will originate from diverse sources including existing legacy applications and databases, many of which are maintained by different local, state, and federal government agencies. TDIS will be constructed to act as an integrating function across these diverse data sources by employing multiple data ingestion methods within what is referred to as a federated information system. Data ingestion methods will include:

- Ingesting data directly via ingestion portals;
- Uploading and warehousing physical media;
- Linking to existing state natural hazard web services via APIs;
- Integrating publicly available datasets within TDIS data pipelines; and
- Providing access points to internal data products from ongoing research efforts.

TDIS' intent is not to replicate or claim credit for any existing services and efforts, but rather to enhance their value by offering integrated access to all these data sources through a single mediated point. In doing so, TDIS will significantly simplify the data query process of critical natural hazards data and enable the discovery and visualization of information in richer and more meaningful ways than is possible from individual datasets. Below is a conceptual model of the federated governance structure highlighting some of the key agencies that TDIS is collaborating with to identify priority datasets and existing data services and who will have access to them.

![TDIS Federated Data Governance Structure](/images/livingplan/federated_data_governance.png)
_TDIS Federated Data Governance Structure_

## Capabilities

TDIS\u2019 data governance capabilities will include:

- The ability to readily produce the required documentation (i.e. compliance certifications, security protocols, encryption standards) to ease the data procurement process as high value datasets are identified;
- Information security measures that will protect data:
  - Confidentiality: prevent the disclosure of information to unauthorized individuals/systems;
  - Integrity: protect data from modification or deletion by unauthorized parties;
  - Availability: ensure reliable functioning of systems, access channels, and authentication mechanisms so that the information provided is available when needed.
- An access control system that will authenticate and authorize users;

## Challenges

- Establishing a multi-platform/multi-portal system that specifies granular access controls that will distinguish:
  - Which types of data are stored in each platform/portal;
  - Who can gain access to a particular part of the system;
  - What a user can do with the data;
  - When the data can be accessed;
  - How data is accessed via authentication protocols and session management configurations;
  - Where data can be accessed through IP address verification;
- Establishing workflows and acquiring the appropriate personnel for monitoring, maintaining, and updating the portals and their associated databases.
- Training users on how to appropriately use the system.
`,Ke=`# Organizational Design

TDIS primarily provides support through infrastructure, technical services, and analytic support on a project basis. Housed and managed by the Institute for a Disaster Resilient Texas (IDRT or the Institute), TDIS has a technical team that brings deep subject matter expertise. Managed by the IDRT Executive Director and TDIS Director, the principal staffing roles will include a nimble core set of seven technical expert areas including 1) Systems Administration and Operations, 2) Data management Services, 3) Software Services and Application Protocols (APIs), 4) Intelligent Decision Support Systems (iDSS), 5) Applied Research & Use Case development, 6) Program Management, and 7) Data Agreements. The figure below shows the planned Organizational Chart for the core Technical Team.

![](/images/livingplan/Proposed_TDIS_Organizational_Structure.png)
_Proposed TDIS Organizational Structure_

The core technical team is designed to be small and nimble, leveraging deep knowledge via two implementation partners:

- Texas A&M University System and Galveston campus (TAMUG), and
- The University of Texas at Austin (UTexas) Texas Advanced Computing Center (TACC) and Center for Space Research (CSR)

Computational services will be managed by the implementation partners (TAMUG and UTexas) who will maintain services and activities with other organizations, users, and collaborators. To build a robust and cohesive technical team, TDIS has created joint appointments between the implementation partners, which allows key staff roles to span partner organizations. This approach also assures that the technical team can be smaller yet have access to deeper levels of expertise on an as-needed basis.

## Steering Committee and Strategic Partners

To successfully support the needs of the broader hazard and disaster community and the citizens of Texas, it will be important for TDIS to enact tactical and operational services while also setting a strategic vision and a process of continuous innovation. Partnerships are the mechanism TDIS uses to coordinate with other state agencies and stakeholder groups to provide input for data sharing agreements, and application development, and to prevent duplication of efforts. The range of partnering relationships include:

- The TDIS Steering Committee members that provide guidance and recommendations regarding design, development, and implementation. Continuation of the TDIS Steering Committee is expected to continue throughout the implementation activities with standing positions for key state and federal agencies to ensure ongoing coordination and avoid duplication of effort as TDIS develops.
- The TDIS planning and development process is assisted by several ad hoc working groups made up of Steering Committee members and other partners on the following topics: Domain Problems / Use Cases; Data Taxonomy; Governance; Portals; and Architecture and User Services.
- Collaborating agencies include regional, city, state, and federal government organizations with overlapping interests in using, collaborating, and contributing to TDIS. During the course of initial planning the TDIS team interviewed the following agencies: Texas Division of Emergency Management; Texas General Land Office; Texas Water Development Board; United States Army Corps of Engineers; Federal Emergency Management Agency; Harris County Flood Control District; and the Houston-Galveston Area Council.
- Innovation Partners are academic, private, and non-profit partners working on research that aligns with TDIS priority use case needs.
- Data Sharing Partners include any individual or organization interested in contributing datasets to TDIS.
`,$e=`# Development Roadmap and Timeline

TDIS is on a 3-year timeline to develop an initial design, implementation strategy, testing and evaluation protocols, and two themed "service bundles". These service bundles will demonstrate initial proof-of-concepts, visualizations and graphics, conceptual system design, and workflows. The two service bundles will include:

1. TDIS Risk Tools for Hazard Assessment, Planning and Evaluation specifically focused on flood hazards and
2. TDIS Predictive Analytics and User Testing for Disaster Communications.

To accomplish these objectives, TDIS will follow an iterative design-build-test cycle, which will enable continuous improvement and refinement of TDIS services over time. In year 1 and 2 of the project, proof-of-concept and prototype services will be developed. After initial testing, core capabilities will be transitioned to production.

Over the next 3 years, TDIS will move through 6 phases, which are briefly highlighted below.

**1. Planning: through October 2021**

- Detailed, deliverable TDIS plan
- On-going, living planning document for TDIS planning adaptation

**2. Development: through March 2022**

- Development and documentation of Standard Operating Procedures
  - Data formats and metadata standards
  - Data Validation
  - User roles, authentication, and access
  - Plans for data ingest and registration
- Complete staffing requirements and hiring priorities
- Design, test and, and implement user interface/portal for data ingest and registration

**3. Implementation: through June 2022**

- Develop and implement a prioritization rubric for use-case development
- Integrate processes for onboarding and training new TDIS users
- Complete specifications and trial runs of first TDIS Risk-Assessment Theme

**4. Evaluation: through September 2022**

- Evaluate and test 1st Use-Case
- Test and confirm data ingest and registration for event-based hazard data

**5. Refinement: Through June 2023**

- Develop fail-safe protocols, data protection protocols, and data back-up schedules
- Re-evaluate systems architecture and interfaces based in input and experiences gained during 1.0 release.

**6. Expansion: through December 2023**

- Complete second use-case scoring and selection
- Complete proof-of-concept and specifications for predictive analytics theme

![](/images/livingplan/TDIS_Roadmap.png)
_TDIS Roadmap_
`,Je=`# TDIS Steering Committee Roster (as of May 2022)

**Charles Cook**
Federal Emergency Management Agency

**Jerry Cotter**
U.S. Army Corps of Engineers

**Nick Fang**
University of Texas \u2013 Arlington

**Sam Hermitte**
Texas Water Development Board

**Jason Johnson**
NOAA/National Weather Service - West Gulf River Forecast Center

**Leslie Lenser**
Texas A&M University \u2013 System

**Steven Mikulencak**
Texas A&M University \u2013 AgriLife Extension

**Ali Mostafavidarani**
Texas A&M University

**Michael Ouimet**
Texas Division of Emergency Management

**Tyler Payne**
Texas General Land Office

**Hugh Roberts**
Water Institute

**Richard Wade**
Texas Natural Resources Information System

**Larry Weber**
University of Iowa

**Gordon Wells**
University of Texas

**Reem Zoun**
Texas Water Development Board
`,Xe=`# Credits\r
\r
## Authors\r
*Suzanne A. Pierce*, Texas Advanced Computing Center, The University of Texas at Austin\r
*William Mobley*, Institute for a Disaster Resilient Texas, Texas A&M University -- Galveston\r
*Anna Dabrowski*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Wesley Highfield*, Institute for a Disaster Resilient Texas, Texas A&M University -- Galveston\r
*Russell Blessing*, Institute for a Disaster Resilient Texas, Texas A&M University -- Galveston\r
*Katharine Teleki*, Teleki Consulting LLC\r
*Je'aime Powell*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Brent Porter*, Center for Space Research, The University of Texas at Austin\r
*Jeff Reichman*, January Advisors\r
*Brian Barr*, January Advisors\r
*Samuel Brody*, Institute for a Disaster Resilient Texas, Texas A&M University -- Galveston\r
\r
## Contributors\r
\r
*Chris Jordan*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Karla Gendler*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Tracy Brown*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Paul Navratil*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Mike Packard*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Joe Stubbs*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Dan Stanzione*, Texas Advanced Computing Center, The University of Texas at Austin\r
*Sal Tijerina*, Texas Advanced Computing Center, The University of Texas at Austin\r
\r
\r
## Steering Committee Members\r
\r
*Charles Cook*, Federal Emergency Management Agency \r
*Jerry Cotter*, U.S. Army Corps of Engineers \r
*Nick Fang*, University of Texas \u2013 Arlington \r
*Sam Hermitte*, Texas Water Development Board \r
*Leslie Lenser*, Texas A&M University \u2013 System \r
*Steven Mikulencak*, Texas A&M AgriLife Extension \r
*Ali Mostafavidarani*, Texas A&M University \r
*Michael Ouimet*, Texas Division of Emergency Management \r
*Tyler Payne*, Texas General Land Office \r
*Hugh Roberts*, Water Institute of the Gulf \r
*Alika Valdez*, Texas Division of Emergency Management \r
*Richard Wade*, Texas Natural Resources Information System \r
*Larry Weber*, University of Iowa \r
*Gordon Wells*, The University of Texas -- Austin\r
*Reem Zoun*, Texas Water Development Board \r
\r
## Funding\r
\r
The Texas Disaster Information System is an initiative of the Institute for a Disaster Resilient Texas funded by The Texas General Land Office Community Development and Revitalization (GLO-CDR) Contract 20-165-000-C238. \r
\r
## How to cite this document\r
\r
Pierce, S.A., Mobley, W., Dabrowski, A., Highfield, W.E., Blessing, R., Teleki, K., Je'aime, P., Porter, B., Reichman, R., Barr, B., Brody, S.D. (2021). *Texas Disaster Information System Living Plan*.  Institute for a Disaster Resilient Texas. Texas A&M University, Galveston Campus. `;const Qe=Se({name:"LivingPlanPage",components:{},data(){return{planSections:[{name:"ExecutiveSummary",label:"Executive Summary",markdown:Be},{name:"Vision",label:"Vision and Planning Approach",markdown:Fe},{name:"Stakeholders",label:"Stakeholders and Users",markdown:Ge},{name:"DataLandscape",label:"Data Landscape",markdown:He},{name:"Architecture",label:"Conceptual Architecture - Services and Design",markdown:Ve},{name:"DataStewardship",label:"Data Stewardship and Governance",markdown:Ne},{name:"OrgDesign",label:"Organizational Design",markdown:Ke},{name:"Roadmap",label:"Development Roadmap and Timeline",markdown:$e},{name:"steering",label:"Steering Committee",markdown:Je},{name:"credits",label:"Credit & Versioning",markdown:Xe}]}},setup(){return{mountainurl:A("/images/tdis-mountain.png"),tab:A("ExecutiveSummary"),splitterModel:A(20)}},mounted(){}}),Ye={color:"primary"};function Ze(e,n,s,c,a,t){const i=Ie("q-markdown");return U(),V(xe,null,{default:z(()=>[ke("div",Ye,[L(je,{modelValue:e.splitterModel,"onUpdate:modelValue":n[2]||(n[2]=o=>e.splitterModel=o)},{before:z(()=>[L(ve,{modelValue:e.tab,"onUpdate:modelValue":n[0]||(n[0]=o=>e.tab=o),vertical:"",class:"text-accent",style:{position:"fixed"}},{default:z(()=>[(U(!0),Z(te,null,ee(e.planSections,(o,d)=>(U(),V(Ce,{key:d,name:o.name,label:o.label},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),after:z(()=>[L(We,{modelValue:e.tab,"onUpdate:modelValue":n[1]||(n[1]=o=>e.tab=o),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up",color:"primary"},{default:z(()=>[(U(!0),Z(te,null,ee(e.planSections,(o,d)=>(U(),V(Re,{key:d,name:o.name},{default:z(()=>[L(i,{src:o.markdown},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})}var ot=De(Qe,[["render",Ze],["__scopeId","data-v-c2e74332"]]);export{ot as default};
