import{Q as u,a as p,b as g,c as _}from"./QSeparator.02acd481.js";import{_ as y,A as v,N as A,O as o,R as h,S as t,a0 as l,V as i,ad as T,ae as f,af as n,U as a,ag as S,X as s,aa as D,W as c,Z as R,$ as M}from"./index.b88a365c.js";import{Q as C}from"./QCard.e37cd548.js";import{Q as w}from"./QPage.6e9d1945.js";import"./use-dark.8bf67cdf.js";const I=[{title:"Title 1",caption:"#1 caption",description:"This is a description of test #1"},{title:"Title 2",caption:"#2 caption",description:"This is a description of test #2"}];var L={data:I},x=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. "},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEEP",Name:"Model Evaluation and Execution Platform",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines"},{Operational:null,Type:"Service",SubType:null,Acronym:"DIS",Name:"Data Ingest Service",Audience:"RBFS Vendors",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:null,Type:"Service",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`},{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata",Name:"TDIS metadata schema public documentation",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Damage Plain",Name:"Texas Damage Plain",Audience:"Researchers, Flood Planners",Host_Location:"TACC",URL:null,Message:"Contact TDIS if you are interested in this dataset",Github_Repo:null,Abstract:null,Description:"The Damage Plain is a machine learning model that annualizes the probability of an area experiencing a damaging flood between 1976 - 2020. based on features such as topographic, proximity, and hydrological information. The approach has been scaled up and applied to the 207 watersheds covering the entire state of Texas."},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:null,Name:"Data Catalog ",Audience:"All Users",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model Integration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. "},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. "},{Operational:null,Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide."}];const P=v({name:"ServicesPage",components:{},data(){return{TestJson:L,ProjectsJson:x}}}),m=r=>(R("data-v-365b8e91"),r=r(),M(),r),N={class:"q-gutter-md row"},k={class:"q-gutter-md row"},U=["href"],G={key:0},O=m(()=>l("span",{class:"text-weight-bold"},"Type: ",-1)),E={key:1},F=m(()=>l("span",{class:"text-weight-bold"},"Audience: ",-1)),B=m(()=>l("span",{class:"text-weight-bold"},"Link: ",-1)),H={key:2},j=m(()=>l("span",{class:"text-weight-bold"},"Github Link: ",-1));function V(r,Q,q,W,$,z){const b=A("q-markdown");return o(),h(w,null,{default:t(()=>[l("div",N,[(o(!0),i(f,null,T(r.ProjectsJson.data,(e,d)=>(o(),i("div",{class:"q-ma-lg",key:d},n(d),1))),128))]),l("div",k,[(o(!0),i(f,null,T(r.ProjectsJson,(e,d)=>(o(),i("div",{class:"q-ma-lg",key:d,href:e.URL},[a(C,{flat:"",bordered:"",class:"project-card"},{default:t(()=>[a(u,{class:S(["service_type",e.Type])},{default:t(()=>[a(p,null,{default:t(()=>[a(g,{class:"text-h6"},{default:t(()=>[s(n(e.Name),1)]),_:2},1024),a(g,{class:"text-subtitle1"},{default:t(()=>[s(n(e.Acronym),1)]),_:2},1024)]),_:2},1024),a(p,{avatar:""},{default:t(()=>[a(D,{name:e.Icon},null,8,["name"])]),_:2},1024)]),_:2},1032,["class"]),a(_),a(u,{class:"items-top"},{default:t(()=>[a(p,{class:"test-class q-ma-md"},{default:t(()=>[a(b,{class:"description-section"},{default:t(()=>[s(n(e.Description),1)]),_:2},1024)]),_:2},1024),a(p,{class:"test-class col-3 q-ma-md"},{default:t(()=>[e.Type?(o(),i("p",G,[O,s(n(e.Type),1)])):c("",!0),e.Audience?(o(),i("p",E,[F,s(n(e.Audience),1)])):c("",!0),l("p",null,[B,e.URL?(o(),h(u,{key:0,clickable:"",tag:"a"},{default:t(()=>[s(n(e.URL),1)]),_:2},1024)):c("",!0),e.Message?(o(),h(u,{key:1},{default:t(()=>[s(n(e.Message),1)]),_:2},1024)):c("",!0)]),e.Github_Repo?(o(),i("p",H,[j,s(n(e.Github_Repo),1)])):c("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)],8,U))),128))])]),_:1})}var ee=y(P,[["render",V],["__scopeId","data-v-365b8e91"]]);export{ee as default};
