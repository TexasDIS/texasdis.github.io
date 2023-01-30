import{Q as h,a as d,b as _,c as b}from"./QSeparator.c6acbc9a.js";import{_ as f,A as y,N as D,O as o,R as v,S as a,a0 as r,V as s,ad as g,ae as T,af as n,U as t,ag as S,X as i,aa as A,W as u,Z as R,$ as M}from"./index.30766047.js";import{Q as L}from"./QCard.85512bee.js";import{Q as w}from"./QPage.6c23b59f.js";import"./use-dark.878acfb7.js";const C=[{title:"Title 1",caption:"#1 caption",description:"This is a description of test #1"},{title:"Title 2",caption:"#2 caption",description:"This is a description of test #2"}];var I={data:C},U=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",URL:"https://twdb.tdis.io/",URL_MD:"[https://twdb.tdis.io/](https://twdb.tdis.io/)",Message:null,Github_Repo:null,Abstract:null,Description:"The Model Storage and Management System (MS2) is an application that supports our partner, Texas Water Development Board (TWDB), with administering the statewide flood planning program. Designed to help TWDB process and manage file uploads, the MS2 services support 1) Metadata configuration, 2) Data upload, 3) Data Validation, and 4) Data Management via the MS2 web portal. "},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEEP",Name:"Model Evaluation and Execution Platform",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines"},{Operational:null,Type:"Service",SubType:null,Acronym:"DIS",Name:"Data Ingest Service",Audience:"RBFS Vendors",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:null,Type:"Service",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`},{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata",Name:"TDIS metadata schema public documentation",Audience:"Agency Partners, RBFS Vendors",Host_Location:"GitHub",URL:"https://github.com/TexasDIS/metadata",URL_MD:"[https://github.com/TexasDIS/metadata](https://github.com/TexasDIS/metadata)",Message:null,Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Damage Plain",Name:"Texas Damage Plain",Audience:"Researchers, Flood Planners",Host_Location:"TACC",URL:null,URL_MD:null,Message:"Contact TDIS if you are interested in this dataset",Github_Repo:null,Abstract:null,Description:"The Damage Plain is a machine learning model that annualizes the probability of an area experiencing a damaging flood between 1976 - 2020. based on features such as topographic, proximity, and hydrological information. The approach has been scaled up and applied to the 207 watersheds covering the entire state of Texas."},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:null,Name:"Data Catalog ",Audience:"All Users",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:null},{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model Integration Platform",Audience:"Partner Agency Planners and Modelers",Host_Location:"TACC",URL:null,URL_MD:null,Message:null,Github_Repo:null,Abstract:null,Description:"The Model INTegration (MINT) platform provides an orchestration environment aimed at simplifying and automating the process of linking information and models from multiple disciplines. MINT reduces the time needed to while streamlining the execution, provenance tracking, and implementation of workflows for analyses that are useful for decisions. "},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:"All Users",Host_Location:"TDR/TACC",URL:"https://tdl-ir.tdl.org/handle/2249.1/156521",URL_MD:"[https://tdl-ir.tdl.org/handle/2249.1/156521](https://tdl-ir.tdl.org/handle/2249.1/156521)",Message:null,Github_Repo:null,Abstract:null,Description:"The Digital Object Life-Cycle Ecosystem (DOLCE) is set of policies and services that enable TDIS to support accessibility and discovery digital objects through all phases of their lifecycle. The services assure the description, documentation, curation, and preservation of digital data, collections, and information. "},{Operational:null,Type:"Product",SubType:"Data",Acronym:"Texas Terrain",Name:"LiDAR Terrain Data",Audience:"All Users",Host_Location:"TACC",URL:null,URL_MD:null,Message:"Statewide DEM tile service coming soon",Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide to generate DEM tiles. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide."}];const x=y({name:"ServicesPage",components:{},data(){return{TestJson:I,ProjectsJson:U}}}),p=l=>(R("data-v-0ba76d0a"),l=l(),M(),l),P={class:"q-gutter-md row"},N={class:"q-gutter-md row"},k=["href"],G={key:0},O=p(()=>r("span",{class:"text-weight-bold"},"Type: ",-1)),E={key:1},F=p(()=>r("span",{class:"text-weight-bold"},"Audience: ",-1)),B={key:2},H=p(()=>r("span",{class:"text-weight-bold"},"Link: ",-1)),j={key:3},V=p(()=>r("span",{class:"text-weight-bold"},"Github Link: ",-1));function Q(l,q,W,$,z,J){const m=D("q-markdown");return o(),v(w,null,{default:a(()=>[r("div",P,[(o(!0),s(T,null,g(l.ProjectsJson.data,(e,c)=>(o(),s("div",{class:"q-ma-lg",key:c},n(c),1))),128))]),r("div",N,[(o(!0),s(T,null,g(l.ProjectsJson,(e,c)=>(o(),s("div",{class:"q-ma-lg",key:c,href:e.URL},[t(L,{flat:"",bordered:"",class:"project-card"},{default:a(()=>[t(h,{class:S(["service_type",e.Type])},{default:a(()=>[t(d,null,{default:a(()=>[t(_,{class:"text-h6"},{default:a(()=>[i(n(e.Name),1)]),_:2},1024),t(_,{class:"text-subtitle1"},{default:a(()=>[i(n(e.Acronym),1)]),_:2},1024)]),_:2},1024),t(d,{avatar:""},{default:a(()=>[t(A,{name:e.Icon},null,8,["name"])]),_:2},1024)]),_:2},1032,["class"]),t(b),t(h,{class:"items-top"},{default:a(()=>[t(d,{class:"test-class q-ma-md"},{default:a(()=>[t(m,{class:"description-section"},{default:a(()=>[i(n(e.Description),1)]),_:2},1024)]),_:2},1024),t(d,{class:"test-class col-3 q-ma-md"},{default:a(()=>[e.Type?(o(),s("p",G,[O,i(n(e.Type),1)])):u("",!0),e.Audience?(o(),s("p",E,[F,i(n(e.Audience),1)])):u("",!0),e.URL?(o(),s("p",B,[H,t(m,null,{default:a(()=>[i("["+n(e.URL)+"]("+n(e.URL)+")",1)]),_:2},1024)])):u("",!0),e.Github_Repo?(o(),s("p",j,[V,i(n(e.Github_Repo),1)])):u("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)],8,k))),128))])]),_:1})}var te=f(x,[["render",Q],["__scopeId","data-v-0ba76d0a"]]);export{te as default};
