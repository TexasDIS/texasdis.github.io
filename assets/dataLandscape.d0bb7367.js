import{u as re,a as le,b as de}from"./QTabs.a02cd4e2.js";import{e as O,Y,d as w,V as Q,aj as J,a as C,ak as P,al as W,s as F,c as z,r as E,f as y,w as R,g as U,n as Z,h as T,T as ue,am as ce,j as A,an as pe,ao as ee,p as X,ap as H,X as he}from"./index.455a56f4.js";import{u as te,a as ne}from"./use-dark.a582957a.js";import{c as ae}from"./selection.5638546b.js";var Ie=O({name:"QTab",props:re,emits:le,setup(t,{slots:a,emit:s}){const{renderTab:d}=de(t,a,s);return()=>d("div")}});const G={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},me=Object.keys(G);G.all=!0;function B(t){const a={};for(const s of me)t[s]===!0&&(a[s]=!0);return Object.keys(a).length===0?G:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}function L(t,a){return a.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof a.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(a.uid)===-1)}function fe(t){const a=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((s,d)=>{const n=parseFloat(s);n&&(a[d]=n)}),a}var ve=Y({name:"touch-swipe",beforeMount(t,{value:a,arg:s,modifiers:d}){if(d.mouse!==!0&&w.has.touch!==!0)return;const n=d.mouseCapture===!0?"Capture":"",e={handler:a,sensitivity:fe(s),direction:B(d),noop:Q,mouseStart(i){L(i,e)&&J(i)&&(C(e,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(i,!0))},touchStart(i){if(L(i,e)){const r=i.target;C(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),e.start(i)}},start(i,r){w.is.firefox===!0&&P(t,!0);const u=W(i);e.event={x:u.left,y:u.top,time:Date.now(),mouse:r===!0,dir:!1}},move(i){if(e.event===void 0)return;if(e.event.dir!==!1){F(i);return}const r=Date.now()-e.event.time;if(r===0)return;const u=W(i),o=u.left-e.event.x,c=Math.abs(o),f=u.top-e.event.y,p=Math.abs(f);if(e.event.mouse!==!0){if(c<e.sensitivity[1]&&p<e.sensitivity[1]){e.end(i);return}}else if(c<e.sensitivity[2]&&p<e.sensitivity[2])return;const h=c/r,v=p/r;e.direction.vertical===!0&&c<p&&c<100&&v>e.sensitivity[0]&&(e.event.dir=f<0?"up":"down"),e.direction.horizontal===!0&&c>p&&p<100&&h>e.sensitivity[0]&&(e.event.dir=o<0?"left":"right"),e.direction.up===!0&&c<p&&f<0&&c<100&&v>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&c<p&&f>0&&c<100&&v>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&c>p&&o<0&&p<100&&h>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&c>p&&o>0&&p<100&&h>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(F(i),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ae(),e.styleCleanup=b=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const _=()=>{document.body.classList.remove("no-pointer-events--children")};b===!0?setTimeout(_,50):_()}),e.handler({evt:i,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:r,distance:{x:c,y:p}})):e.end(i)},end(i){e.event!==void 0&&(z(e,"temp"),w.is.firefox===!0&&P(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),i!==void 0&&e.event.dir!==!1&&F(i),e.event=void 0)}};if(t.__qtouchswipe=e,d.mouse===!0){const i=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";C(e,"main",[[t,"mousedown","mouseStart",`passive${i}`]])}w.has.touch===!0&&C(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,a){const s=t.__qtouchswipe;s!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&s.end(),s.handler=a.value),s.direction=B(a.modifiers))},beforeUnmount(t){const a=t.__qtouchswipe;a!==void 0&&(z(a,"main"),z(a,"temp"),w.is.firefox===!0&&P(t,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete t.__qtouchswipe)}});function ge(){const t=new Map;return{getCache:function(a,s){return t[a]===void 0?t[a]=s:t[a]},getCacheWithFn:function(a,s){return t[a]===void 0?t[a]=s():t[a]}}}const ye={name:{required:!0},disable:Boolean},$={setup(t,{slots:a}){return()=>T("div",{class:"q-panel scroll",role:"tabpanel"},A(a.default))}},be={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},we=["update:modelValue","beforeTransition","transition"];function Te(){const{props:t,emit:a,proxy:s}=U(),{getCacheWithFn:d}=ge();let n,e;const i=E(null),r=E(null);function u(l){const m=t.vertical===!0?"up":"left";k((s.$q.lang.rtl===!0?-1:1)*(l.direction===m?1:-1))}const o=y(()=>[[ve,u,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),c=y(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),f=y(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),p=y(()=>`--q-transition-duration: ${t.transitionDuration}ms`),h=y(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),v=y(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),b=y(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);R(()=>t.modelValue,(l,m)=>{const x=I(l)===!0?q(l):-1;e!==!0&&S(x===-1?0:x<q(m)?-1:1),i.value!==x&&(i.value=x,a("beforeTransition",l,m),Z(()=>{a("transition",l,m)}))});function _(){k(1)}function D(){k(-1)}function M(l){a("update:modelValue",l)}function I(l){return l!=null&&l!==""}function q(l){return n.findIndex(m=>m.props.name===l&&m.props.disable!==""&&m.props.disable!==!0)}function g(){return n.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function S(l){const m=l!==0&&t.animated===!0&&i.value!==-1?"q-transition--"+(l===-1?c.value:f.value):null;r.value!==m&&(r.value=m)}function k(l,m=i.value){let x=m+l;for(;x>-1&&x<n.length;){const j=n[x];if(j!==void 0&&j.props.disable!==""&&j.props.disable!==!0){S(l),e=!0,a("update:modelValue",j.props.name),setTimeout(()=>{e=!1});return}x+=l}t.infinite===!0&&n.length>0&&m!==-1&&m!==n.length&&k(l,l===-1?n.length:-1)}function N(){const l=q(t.modelValue);return i.value!==l&&(i.value=l),!0}function K(){const l=I(t.modelValue)===!0&&N()&&n[i.value];return t.keepAlive===!0?[T(pe,v.value,[T(b.value===!0?d(h.value,()=>({...$,name:h.value})):$,{key:h.value,style:p.value},()=>l)])]:[T("div",{class:"q-panel scroll",style:p.value,key:h.value,role:"tabpanel"},[l])]}function ie(){if(n.length!==0)return t.animated===!0?[T(ue,{name:r.value},K)]:K()}function se(l){return n=ce(A(l.default,[])).filter(m=>m.props!==null&&m.props.slot===void 0&&I(m.props.name)===!0),n.length}function oe(){return n}return Object.assign(s,{next:_,previous:D,goTo:M}),{panelIndex:i,panelDirectives:o,updatePanelsList:se,updatePanelIndex:N,getPanelContent:ie,getEnabledPanels:g,getPanels:oe,isValidPanelName:I,keepAliveProps:v,needsUniqueKeepAliveWrapper:b,goToPanelByOffset:k,goToPanel:M,nextPanel:_,previousPanel:D}}var qe=O({name:"QTabPanel",props:ye,setup(t,{slots:a}){return()=>T("div",{class:"q-tab-panel",role:"tabpanel"},A(a.default))}}),Pe=O({name:"QTabPanels",props:{...be,...te},emits:we,setup(t,{slots:a}){const s=U(),d=ne(t,s.proxy.$q),{updatePanelsList:n,getPanelContent:e,panelDirectives:i}=Te(),r=y(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(a),ee("div",{class:r.value},e(),"pan",t.swipeable,()=>i.value))}});function V(t,a,s){const d=W(t);let n,e=d.left-a.event.x,i=d.top-a.event.y,r=Math.abs(e),u=Math.abs(i);const o=a.direction;o.horizontal===!0&&o.vertical!==!0?n=e<0?"left":"right":o.horizontal!==!0&&o.vertical===!0?n=i<0?"up":"down":o.up===!0&&i<0?(n="up",r>u&&(o.left===!0&&e<0?n="left":o.right===!0&&e>0&&(n="right"))):o.down===!0&&i>0?(n="down",r>u&&(o.left===!0&&e<0?n="left":o.right===!0&&e>0&&(n="right"))):o.left===!0&&e<0?(n="left",r<u&&(o.up===!0&&i<0?n="up":o.down===!0&&i>0&&(n="down"))):o.right===!0&&e>0&&(n="right",r<u&&(o.up===!0&&i<0?n="up":o.down===!0&&i>0&&(n="down")));let c=!1;if(n===void 0&&s===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,c=!0,n==="left"||n==="right"?(d.left-=e,r=0,e=0):(d.top-=i,u=0,i=0)}return{synthetic:c,payload:{evt:t,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:d,direction:n,isFirst:a.event.isFirst,isFinal:s===!0,duration:Date.now()-a.event.time,distance:{x:r,y:u},offset:{x:e,y:i},delta:{x:d.left-a.event.lastX,y:d.top-a.event.lastY}}}}let De=0;var Se=Y({name:"touch-pan",beforeMount(t,{value:a,modifiers:s}){if(s.mouse!==!0&&w.has.touch!==!0)return;function d(e,i){s.mouse===!0&&i===!0?F(e):(s.stop===!0&&H(e),s.prevent===!0&&X(e))}const n={uid:"qvtp_"+De++,handler:a,modifiers:s,direction:B(s),noop:Q,mouseStart(e){L(e,n)&&J(e)&&(C(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(e,!0))},touchStart(e){if(L(e,n)){const i=e.target;C(n,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),n.start(e)}},start(e,i){if(w.is.firefox===!0&&P(t,!0),n.lastEvt=e,i===!0||s.stop===!0){if(n.direction.all!==!0&&(i!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const o=e.type.indexOf("mouse")>-1?new MouseEvent(e.type,e):new TouchEvent(e.type,e);e.defaultPrevented===!0&&X(o),e.cancelBubble===!0&&H(o),Object.assign(o,{qKeyEvent:e.qKeyEvent,qClickOutside:e.qClickOutside,qAnchorHandled:e.qAnchorHandled,qClonedBy:e.qClonedBy===void 0?[n.uid]:e.qClonedBy.concat(n.uid)}),n.initialEvent={target:e.target,event:o}}H(e)}const{left:r,top:u}=W(e);n.event={x:r,y:u,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:r,lastY:u}},move(e){if(n.event===void 0)return;const i=W(e),r=i.left-n.event.x,u=i.top-n.event.y;if(r===0&&u===0)return;n.lastEvt=e;const o=n.event.mouse===!0,c=()=>{d(e,o);let h;s.preserveCursor!==!0&&s.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),o===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ae(),n.styleCleanup=v=>{if(n.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),o===!0){const b=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{b(),v()},50):b()}else v!==void 0&&v()}};if(n.event.detected===!0){n.event.isFirst!==!0&&d(e,n.event.mouse);const{payload:h,synthetic:v}=V(e,n,!1);h!==void 0&&(n.handler(h)===!1?n.end(e):(n.styleCleanup===void 0&&n.event.isFirst===!0&&c(),n.event.lastX=h.position.left,n.event.lastY=h.position.top,n.event.lastDir=v===!0?void 0:h.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||o===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){c(),n.event.detected=!0,n.move(e);return}const f=Math.abs(r),p=Math.abs(u);f!==p&&(n.direction.horizontal===!0&&f>p||n.direction.vertical===!0&&f<p||n.direction.up===!0&&f<p&&u<0||n.direction.down===!0&&f<p&&u>0||n.direction.left===!0&&f>p&&r<0||n.direction.right===!0&&f>p&&r>0?(n.event.detected=!0,n.move(e)):n.end(e,!0))},end(e,i){if(n.event!==void 0){if(z(n,"temp"),w.is.firefox===!0&&P(t,!1),i===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(V(e===void 0?n.lastEvt:e,n).payload);const{payload:r}=V(e===void 0?n.lastEvt:e,n,!0),u=()=>{n.handler(r)};n.styleCleanup!==void 0?n.styleCleanup(u):u()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(t.__qtouchpan=n,s.mouse===!0){const e=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";C(n,"main",[[t,"mousedown","mouseStart",`passive${e}`]])}w.has.touch===!0&&C(n,"main",[[t,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,a){const s=t.__qtouchpan;s!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&s.end(),s.handler=a.value),s.direction=B(a.modifiers))},beforeUnmount(t){const a=t.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),z(a,"main"),z(a,"temp"),w.is.firefox===!0&&P(t,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete t.__qtouchpan)}}),ze=O({name:"QSplitter",props:{...te,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:t=>["%","px"].includes(t)},limits:{type:Array,validator:t=>t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"?!1:t[0]>=0&&t[0]<=t[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(t,{slots:a,emit:s}){const{proxy:{$q:d}}=U(),n=ne(t,d),e=E(null),i={before:E(null),after:E(null)},r=y(()=>`q-splitter no-wrap ${t.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${t.disable===!0?"disabled":"workable"}`+(n.value===!0?" q-splitter--dark":"")),u=y(()=>t.horizontal===!0?"height":"width"),o=y(()=>t.reverse!==!0?"before":"after"),c=y(()=>t.limits!==void 0?t.limits:t.unit==="%"?[10,90]:[50,1/0]);function f(g){return(t.unit==="%"?g:Math.round(g))+t.unit}const p=y(()=>({[o.value]:{[u.value]:f(t.modelValue)}}));let h,v,b,_,D;function M(g){if(g.isFirst===!0){const k=e.value.getBoundingClientRect()[u.value];h=t.horizontal===!0?"up":"left",v=t.unit==="%"?100:k,b=Math.min(v,c.value[1],Math.max(c.value[0],t.modelValue)),_=(t.reverse!==!0?1:-1)*(t.horizontal===!0?1:d.lang.rtl===!0?-1:1)*(t.unit==="%"?k===0?0:100/k:1),e.value.classList.add("q-splitter--active");return}if(g.isFinal===!0){D!==t.modelValue&&s("update:modelValue",D),e.value.classList.remove("q-splitter--active");return}const S=b+_*(g.direction===h?-1:1)*g.distance[t.horizontal===!0?"y":"x"];D=Math.min(v,c.value[1],Math.max(c.value[0],S)),i[o.value].value.style[u.value]=f(D),t.emitImmediately===!0&&t.modelValue!==D&&s("update:modelValue",D)}const I=y(()=>[[Se,M,void 0,{[t.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function q(g,S){g<S[0]?s("update:modelValue",S[0]):g>S[1]&&s("update:modelValue",S[1])}return R(()=>t.modelValue,g=>{q(g,c.value)}),R(()=>t.limits,()=>{Z(()=>{q(t.modelValue,c.value)})}),()=>{const g=[T("div",{ref:i.before,class:["q-splitter__panel q-splitter__before"+(t.reverse===!0?" col":""),t.beforeClass],style:p.value.before},A(a.before)),T("div",{class:["q-splitter__separator",t.separatorClass],style:t.separatorStyle,"aria-disabled":t.disable===!0?"true":void 0},[ee("div",{class:"q-splitter__separator-area absolute-full"},A(a.separator),"sep",t.disable!==!0,()=>I.value)]),T("div",{ref:i.after,class:["q-splitter__panel q-splitter__after"+(t.reverse===!0?"":" col"),t.afterClass],style:p.value.after},A(a.after))];return T("div",{class:r.value,ref:e},he(a.default,g))}}}),Ae=`# Vision and Planning Approach

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
`,Ee=`# Stakeholders and Users

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
`,We=`# Data Landscape\r
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
The TDIS team will coordinate across Working Groups to capture and centralize appropriate information describing these datasets (metadata) for the purposes of agreeing on their priority and uses, and collection, management and stewardship requirements within TDIS. As datasets are identified through these channels, the team will need to further refine its approach for targeting data by developing a framework and procedure for assessing datasets with partner input about their uses, value, and quality.`;export{We as D,Pe as Q,Ee as S,Ae as V,ze as a,Ie as b,qe as c};
