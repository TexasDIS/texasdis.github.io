import{f as d,e as R,r as u,w as j,b as Q,h as l,T as p,j as x,al as L,a4 as D,t as E,a6 as F,a7 as H,a8 as M,ac as S,a9 as O,ae as V,af as U}from"./index.ff52863b.js";import{Q as W}from"./QPage.a2fd5198.js";const A={ratio:[String,Number]};function G(e,r){return d(()=>{const o=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const J=16/9;var K=R({name:"QImg",props:{...A,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:o}){const v=u(e.initialRatio),h=G(e,v);let i=null,g=!1;const a=[u(null),u(_())],n=u(0),s=u(!1),c=u(!1),q=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),B=d(()=>({width:e.width,height:e.height})),N=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));j(()=>y(),b);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function b(t){i!==null&&(clearTimeout(i),i=null),c.value=!1,t===null?(s.value=!1,a[n.value^1].value=_()):s.value=!0,a[n.value].value=t}function z({target:t}){g!==!0&&(i!==null&&(clearTimeout(i),i=null),v.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,f){g===!0||f===1e3||(t.complete===!0?I(t):i=setTimeout(()=>{i=null,w(t,f+1)},50))}function I(t){g!==!0&&(n.value=n.value^1,a[n.value].value=null,s.value=!1,c.value=!1,o("load",t.currentSrc||t.src))}function $(t){i!==null&&(clearTimeout(i),i=null),s.value=!1,c.value=!0,a[n.value].value=null,a[n.value^1].value=_(),o("error",t)}function C(t){const f=a[t].value,m={key:"img_"+t,class:N.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return n.value===t?(m.class+=" q-img__image--waiting",Object.assign(m,{onLoad:z,onError:$})):m.class+=" q-img__image--loaded",l("div",{class:"q-img__container absolute-full",key:"img"+t},l("img",m))}function P(){return s.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},x(r[c.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[l(L,{color:e.spinnerColor,size:e.spinnerSize})])}return b(y()),Q(()=>{g=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return h.value!==null&&t.push(l("div",{key:"filler",style:h.value})),c.value!==!0&&(a[0].value!==null&&t.push(C(0)),a[1].value!==null&&t.push(C(1))),t.push(l(p,{name:"q-transition--fade"},P)),l("div",{class:q.value,style:B.value,role:"img","aria-label":e.alt},t)}}});const X=E({name:"DocumentationPage",components:{},data(){return{}},setup(){return{url:u("/images/tdis-mountain.png")}},mounted(){}}),T=e=>(V("data-v-09332d38"),e=e(),U(),e),Y={class:"row"},Z=T(()=>S("div",{class:"col"},"Lets test out some stuff in here",-1)),ee=T(()=>S("image",{src:"images/tdis-mountain.png"},null,-1));function te(e,r,o,v,h,i){return F(),H(W,{class:"wrapper"},{default:M(()=>[S("div",Y,[Z,ee,O(K,{src:e.url,"spinner-color":"white"},null,8,["src"])])]),_:1})}var ne=D(X,[["render",te],["__scopeId","data-v-09332d38"]]);export{ne as default};