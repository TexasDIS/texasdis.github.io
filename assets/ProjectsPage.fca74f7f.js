import{Q as W}from"./QPage.bc39c737.js";import{e as w,f as n,h as _,j as N,I as V,J as z,r as R,i as Q,s as Y,O as K,g as x,t as J,_ as U,Z as q,$ as s,a0 as f,a1 as a,a2 as i,ad as Z,a4 as b,ag as h,aq as m,ar as X,a6 as v,a3 as S,a8 as ee,a9 as te,ah as ae,ai as ne}from"./index.455a56f4.js";import{u as B,a as P}from"./use-dark.a582957a.js";import{Q as oe}from"./QCard.e9d4bf36.js";var I=w({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:o.value},N(l.default))}}),ie=w({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const o=n(()=>parseInt(e.lines,10)),r=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),c=n(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>_("div",{style:c.value,class:r.value},N(l.default))}}),A=w({name:"QItem",props:{...B,...V,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=x(),c=P(e,r),{hasLink:g,linkAttrs:d,linkClass:T,linkTag:u,navigateOnClick:C}=z(),p=R(null),D=R(null),k=n(()=>e.clickable===!0||g.value===!0||e.tag==="label"),y=n(()=>e.disable!==!0&&k.value===!0),G=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(g.value===!0&&e.active===null?T.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),O=n(()=>{if(e.insetLevel===void 0)return null;const t=r.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function $(t){y.value===!0&&(D.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===p.value?D.value.focus():document.activeElement===D.value&&p.value.focus()),C(t))}function F(t){if(y.value===!0&&Q(t,13)===!0){Y(t),t.qKeyEvent=!0;const E=new MouseEvent("click",t);E.qKeyEvent=!0,p.value.dispatchEvent(E)}o("keyup",t)}function H(){const t=K(l.default,[]);return y.value===!0&&t.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:D})),t}return()=>{const t={ref:p,class:G.value,style:O.value,role:"listitem",onClick:$,onKeyup:F};return y.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,d.value)):k.value===!0&&(t["aria-disabled"]="true"),_(u.value,t,H())}}});const se={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},M={xs:2,sm:4,md:8,lg:16,xl:24};var j=w({name:"QSeparator",props:{...B,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=x(),o=P(e,l.proxy.$q),r=n(()=>e.vertical===!0?"vertical":"horizontal"),c=n(()=>` q-separator--${r.value}`),g=n(()=>e.inset!==!1?`${c.value}-${se[e.inset]}`:""),d=n(()=>`q-separator${c.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),T=n(()=>{const u={};if(e.size!==void 0&&(u[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const C=e.spaced===!0?`${M.md}px`:e.spaced in M?`${M[e.spaced]}px`:e.spaced,p=e.vertical===!0?["Left","Right"]:["Top","Bottom"];u[`margin${p[0]}`]=u[`margin${p[1]}`]=C}return u});return()=>_("hr",{class:d.value,style:T.value,"aria-orientation":r.value})}});const le=J({name:"ProjectCard",props:{project_data:{Name:{type:String,default:"TEST ENTRY"},Acronym:{type:String,default:"TEST ENTRY"},Type:{type:String,default:"TEST ENTRY"},Audience:{type:String,default:"TEST ENTRY"},Description:{type:String,default:"test description"},Icon:{type:String,default:"TEST ENTRY"},URL:{type:String,default:"TEST ENTRY"},Github_Repo:{type:String,default:"TEST ENTRY"}}}}),L=e=>(ee("data-v-9b0a4ee0"),e=e(),te(),e),re={class:"text-subtitle1 col-sm-6"},ce={class:"text-subtitle1 col-sm-6"},de={class:"test-class q-ma-md items-start"},ue={key:0},me=L(()=>v("span",{class:"text-weight-bold"},"Type: ",-1)),pe={key:1},he=L(()=>v("span",{class:"text-weight-bold"},"Audience: ",-1)),ve={key:2},ge=L(()=>v("span",{class:"text-weight-bold"},"Github Link: ",-1));function be(e,l,o,r,c,g){const d=q("q-markdown");return s(),f(oe,{flat:"",bordered:"",class:"project-card"},{default:a(()=>[i(A,{class:X(["project-card-header",e.project_data.Type])},{default:a(()=>[e.project_data.Icon?(s(),f(I,{key:0,avatar:""},{default:a(()=>[i(Z,{name:e.project_data.Icon},null,8,["name"])]),_:1})):b("",!0),i(I,null,{default:a(()=>[i(ie,{class:"text-h4 secondary"},{default:a(()=>[h(m(e.project_data.Name),1)]),_:1})]),_:1})]),_:1},8,["class"]),i(A,{class:"row"},{default:a(()=>[v("div",re,m(e.project_data.Acronym),1),v("div",ce,[e.project_data.URL?(s(),f(d,{key:0,class:"project-link","text-right":"",align:"right"},{default:a(()=>[h(" [Visit Project]("+m(e.project_data.URL)+")",1)]),_:1})):b("",!0)])]),_:1}),i(j),i(A,{class:"project-description"},{default:a(()=>[v("div",de,[i(d,{class:"description-section"},{default:a(()=>[h(m(e.project_data.Description),1)]),_:1}),e.project_data.Message?(s(),f(d,{key:0},{default:a(()=>[h(m(e.project_data.Message),1)]),_:1})):b("",!0)])]),_:1}),i(j),i(A,{class:""},{default:a(()=>[i(I,{class:"test-class q-ma-md"},{default:a(()=>[e.project_data.Type?(s(),S("p",ue,[me,h(m(e.project_data.Type),1)])):b("",!0),e.project_data.Audience?(s(),S("p",pe,[he,h(m(e.project_data.Audience),1)])):b("",!0),e.project_data.Github_Repo?(s(),S("p",ve,[ge,h(m(e.project_data.Github_Repo),1)])):b("",!0)]),_:1})]),_:1})]),_:1})}var fe=U(le,[["render",be],["__scopeId","data-v-9b0a4ee0"]]),Te=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. ",URL_markdown:"[https://twdb.tdis.io/](https://twdb.tdis.io/)"},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEE",Name:"Model Evaluation Environment",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines",URL_markdown:null},{Operational:null,Type:"Allocation",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`,URL_markdown:null},{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata/catalog registry",Name:"TDIS metadata schema public documentation and Data Ingest Service and Catalog",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`,URL_markdown:"[https://github.com/TexasDIS/metadata](https://github.com/TexasDIS/metadata)"},{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model INTegration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. ",URL_markdown:null},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. ",URL_markdown:null},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide.",URL_markdown:null},{Operational:"Dev",Type:"Code Repository",SubType:"Data",Acronym:"TDIS Stats",Name:"TDIS Data Services Performance Statistics",Audience:"All Users",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`Coming Soon! 
The metrics and current status of all TDIS services will be summarized in a dynamic webpage so that users and contributors can see key performance indicators for the data collections managed by TDIS. `,URL_markdown:null}];const ye=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. ",url_md:"[https://twdb.tdis.io/](https://twdb.tdis.io/)"},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEE",Name:"Model Evaluation Environment",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines",url_md:null},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. ",url_md:"[https://tdl-ir.tdl.org/handle/2249.1/156521](https://tdl-ir.tdl.org/handle/2249.1/156521)"}],Se=[{Operational:null,Type:"Allocation",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`,url_md:null}],_e=[{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model INTegration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. ",url_md:null},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide.",url_md:null}];var De={Service:ye,Allocation:Se,"Code Repository":[{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata/catalog registry",Name:"TDIS metadata schema public documentation and Data Ingest Service and Catalog",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`,url_md:"[https://github.com/TexasDIS/metadata](https://github.com/TexasDIS/metadata)"},{Operational:"Dev",Type:"Code Repository",SubType:"Data",Acronym:"TDIS Stats",Name:"TDIS Data Services Performance Statistics",Audience:"All Users",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`Coming Soon! 
The metrics and current status of all TDIS services will be summarized in a dynamic webpage so that users and contributors can see key performance indicators for the data collections managed by TDIS. `,url_md:null}],Product:_e};const Ae={name:"DocumentationPage",components:{ProjectCard:fe},data(){return{projects:Te,categorized:De}},setup(){return{tab:R("Service"),splitterModel:R(20)}},mounted(){}},Re={class:"row"};function we(e,l,o,r,c,g){const d=q("ProjectCard");return s(),f(W,{class:"wrapper"},{default:a(()=>[v("div",Re,[(s(!0),S(ne,null,ae(c.projects,(T,u)=>(s(),S("div",{class:"col-lg-4 col-md-6 col-xs-12",key:u},[(s(),f(d,{class:"q-ma-md",key:u,project_data:T},null,8,["project_data"]))]))),128))])]),_:1})}var ke=U(Ae,[["render",we]]);export{ke as default};
