import{q as d,k as a,h as c,t as _,I as Q,J as E,r as y,i as R,u as z,L as K,g as B}from"./index.076a837d.js";import{u as x,a as $}from"./use-dark.9189d2be.js";var N=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=a(()=>parseInt(e.lines,10)),i=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),s=a(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>c("div",{style:s.value,class:i.value},_(l.default))}}),P=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:n.value},_(l.default))}}),T=d({name:"QItem",props:{...x,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:i}}=B(),s=$(e,i),{hasLink:v,linkAttrs:b,linkClass:f,linkTag:o,navigateOnClick:q}=E(),u=y(null),m=y(null),g=a(()=>e.clickable===!0||v.value===!0||e.tag==="label"),r=a(()=>e.disable!==!0&&g.value===!0),S=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function L(t){r.value===!0&&(m.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===u.value?m.value.focus():document.activeElement===m.value&&u.value.focus()),q(t))}function w(t){if(r.value===!0&&R(t,13)===!0){z(t),t.qKeyEvent=!0;const h=new MouseEvent("click",t);h.qKeyEvent=!0,u.value.dispatchEvent(h)}n("keyup",t)}function I(){const t=K(l.default,[]);return r.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:m})),t}return()=>{const t={ref:u,class:S.value,style:C.value,role:"listitem",onClick:L,onKeyup:w};return r.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,b.value)):g.value===!0&&(t["aria-disabled"]="true"),c(o.value,t,I())}}});const D={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},k={xs:2,sm:4,md:8,lg:16,xl:24};var F=d({name:"QSeparator",props:{...x,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=B(),n=$(e,l.proxy.$q),i=a(()=>e.vertical===!0?"vertical":"horizontal"),s=a(()=>` q-separator--${i.value}`),v=a(()=>e.inset!==!1?`${s.value}-${D[e.inset]}`:""),b=a(()=>`q-separator${s.value}${v.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),f=a(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const q=e.spaced===!0?`${k.md}px`:e.spaced in k?`${k[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${u[0]}`]=o[`margin${u[1]}`]=q}return o});return()=>c("hr",{class:b.value,style:f.value,"aria-orientation":i.value})}});export{T as Q,P as a,N as b,F as c};
