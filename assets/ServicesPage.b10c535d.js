import{Q as f,a as r,b as m,c as u}from"./QSeparator.458b3e3a.js";import{_ as T,A as y,N as D,O as i,R as S,S as t,X as n,ab as l,ac as L,ad as R,U as e,V as o,a6 as _,ae as A,af as s,ag as p,a9 as w,aa as I}from"./index.74543d0c.js";import{Q as h,a as b}from"./QCard.5b891ef1.js";import{Q as x}from"./QPage.cf9532f2.js";import"./use-dark.f87dfb50.js";const U=[{title:"Title 1",caption:"#1 caption",description:"This is a description of test #1"},{title:"Title 2",caption:"#2 caption",description:"This is a description of test #2"}];var C={data:U};const k=[{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MS2",Name:"Model Storage & Management System",Icon:"explore",Audience:"TWDB Administrators, Regional Flood Planning Groups, Regional Flood Planning Vendors",Host_Location:"TACC",Dev_URL:null,URL:"//twdb.tdis.io/",Github_Repo:null,Abstract:null,Description:`# The MS2 system is an administrative web portal designed to help TWDB process and manage file uploads. 
TWDB is responsible for putting together the first statewide flood plan for Texas. Because flooding is unique to the watershed, TWDB coordinated flood planning at the regional level. Each region worked independently with their chosen engineering firm to develop flood models.

In order to pull together the regional work into a statewide plan, TWDB is collecting the flood models from each region. Flood model files are often too large to be uploaded through a browser, and they do not follow a standard file structure. 

As a result, TDIS developed a four part application. These parts include:

* Metadata configuration. First, the user sets up the model metadata through a web form.
* Data upload. Next, the user receives instructions covering how to prepare their model files and upload them through the terminal.
* Data validation. Once the files have been uploaded, the TDIS system checks the upload for completeness.
* Data management. After validation, the data is available for review in the MS2 web portal.`},{Operational:"Yes",Type:"Service",SubType:"Model",Acronym:"MEEP",Name:"Model Evaluation and Execution Platform",Audience:"USACE Reviewers, RBFS Vendors",Host_Location:"Microsoft Azure",Dev_URL:null,URL:null,Github_Repo:null,Abstract:null,Description:"TDIS personnel have developed and presented a workflow to allow USACE to do their model review on TDIS-deployed cloud based Virtual Machines"},{Operational:null,Type:"Service",SubType:null,Acronym:"DIS",Name:"Data Ingest Service",Audience:"RBFS Vendors",Host_Location:"TACC",Dev_URL:null,URL:null,Github_Repo:null,Abstract:null,Description:null},{Operational:null,Type:"Service",SubType:null,Acronym:"ACT-FAST",Name:"Advanced compound flood hazard assessment science for TDIS",Audience:`TIFF via USACE, Galveston Office, WRM Modelers
`,Host_Location:"TACC",Dev_URL:null,URL:null,Github_Repo:null,Abstract:null,Description:`This project provides a Linux environment on the TACC supercomputing resources to enable rapid model emulations to support flood and hurricane impact forecasting in collaboration with the USACE Galveston District offices and TIFF.  The Linux environment has been tested and made available for use with existing flood and coastal models to agency users. 
`},{Operational:null,Type:"Code Repository",SubType:null,Acronym:"TexasDIS/metadata",Name:"TDIS metadata schema public documentation",Audience:null,Host_Location:"GitHub",Dev_URL:null,URL:"//github.com/TexasDIS/metadata",Github_Repo:null,Abstract:null,Description:`Descriptive and other forms of metadata are being collected and maintained in accordance with TDIS\u2019 standards to enable discoverability, access, interoperable use, and dataset reuse. TDIS has developed a metadata standard that sets out the metadata fields we expect to collect for datasets, models, and other artifacts. This information is published via GitHub: https://github.com/TexasDIS/metadata We continue to make revisions to the metadata standard in consultation with the RBFS vendor teams and other partners. We provide training and guidance on metadata requirements and expectations to partners and have developed a provisional tool that walks users through our metadata standard in an accessible format intended for use by those with little training or expertise in metadata creation.
`},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:"Damage Plain",Name:"Texas Damage Plain",Audience:"Researchers, Flood Planners",Host_Location:null,Dev_URL:"///ms2-dev.tacc.utexas.edu/texas-damage-plain/",URL:null,Github_Repo:null,Abstract:null,Description:"The Damage Plain is a machine learning model that predicts the probability of an area experiencing a damaging flood between 1976-2020, based on a set of features that include topographic, proximity, and hydrological information. The statewide Damage Plain model is an improved version of the original Damage Plain model, which was only able to predict the probability of flood loss in 13 specific areas along the coast of Texas. The new version includes additional data on distance to lakes and precipitation, and is able to predict flood risk in 207 watersheds across the entire state of Texas. The model uses a combination of data and machine learning techniques, specifically a binary classification random forest method and rasterized spatial data, to make predictions about flooding."},{Operational:"Dev",Type:"Product",SubType:"Data",Acronym:null,Name:"Data Catalog ",Audience:null,Host_Location:null,Dev_URL:null,URL:null,Github_Repo:null,Abstract:null,Description:null},{Operational:"Dev",Type:"Product",SubType:"Model",Acronym:"MINT",Name:"Model Integration Platform",Audience:null,Host_Location:null,Dev_URL:"//tacc.mint.isi.edu",URL:null,Github_Repo:null,Abstract:null,Description:"[The Model INTegration (MINT) project](https://tacc.mint.isi.edu) is developing a modeling environment aimed at simplifying and automating the process of integrating information and models from multiple disciplines. The project reduces the time needed to develop new integrated models while ensuring their utility and accuracy. "},{Operational:null,Type:"Service",SubType:"Data",Acronym:"DOLCE",Name:"Digital Object Life-Cycle Ecosystem",Audience:null,Host_Location:null,Dev_URL:null,URL:"//tdl-ir.tdl.org/handle/2249.1/156521",Github_Repo:null,Abstract:null,Description:"The goal of the Digital Object Life-Cycle Ecosystem (DOLCE) is to create policies and services that enable TDIS to support accessibility to and discovery of digital objects throughout the phases of their lifecycle."},{Operational:null,Type:"Product",SubType:null,Acronym:null,Name:"LIDAR Terrain Data",Audience:null,Host_Location:null,Dev_URL:null,URL:null,Github_Repo:null,Abstract:null,Description:"In collaboration with Texas Natural Resource Information System (TNRIS), the TDIS Implementation Team has processed the best in time and best in space point cloud data statewide. The result is the best available coverage for detailed terrain data, largely at 1 meter resolution, statewide."}];var N={data:k};const O=y({name:"ServicesPage",components:{},data(){return{TestJson:C,ProjectsJson:N}}}),c=d=>(w("data-v-bff6a9be"),d=d(),I(),d),P={class:"q-gutter-md row"},M=["href"],E={key:0},G=c(()=>n("span",{class:"text-weight-bold"},"Type: ",-1)),j={key:1},F=c(()=>n("span",{class:"text-weight-bold"},"Audience: ",-1)),B={key:2},H=c(()=>n("span",{class:"text-weight-bold"},"Github Link: ",-1)),q={key:3},Q=c(()=>n("span",{class:"text-weight-bold"},"Development URL Link: ",-1)),V={key:4},W=c(()=>n("span",{class:"text-weight-bold"},"URL Link: ",-1)),z={target:"_blank"},$={class:"col-3 q-ma-lg"},J=c(()=>n("a",{href:"https://tdl-ir.tdl.org/handle/2249.1/156521",target:"_blank"},"DOLCe Project Report",-1));function Y(d,X,K,Z,ee,te){const g=D("q-markdown");return i(),S(x,null,{default:t(()=>[n("div",P,[(i(!0),l(R,null,L(d.ProjectsJson.data,(a,v)=>(i(),l("div",{class:"q-ma-lg",key:v,href:a.URL},[e(b,{flat:"",bordered:"",class:"project-card"},{default:t(()=>[e(f,{class:A(["service_type",a.Type])},{default:t(()=>[e(r,null,{default:t(()=>[e(m,{class:"text-h6"},{default:t(()=>[o(s(a.Name),1)]),_:2},1024),e(m,{class:"text-subtitle1"},{default:t(()=>[o(s(a.Acronym),1)]),_:2},1024)]),_:2},1024),e(r,{avatar:""},{default:t(()=>[e(_,{name:a.Icon},null,8,["name"])]),_:2},1024)]),_:2},1032,["class"]),e(u),e(f,{class:"items-top"},{default:t(()=>[e(r,{class:"test-class q-ma-md"},{default:t(()=>[e(g,{class:"description-section"},{default:t(()=>[o(s(a.Description),1)]),_:2},1024)]),_:2},1024),e(r,{class:"test-class col-3 q-ma-md"},{default:t(()=>[a.Type?(i(),l("p",E,[G,o(s(a.Type),1)])):p("",!0),a.Audience?(i(),l("p",j,[F,o(s(a.Audience),1)])):p("",!0),a.Github_Repo?(i(),l("p",B,[H,o(s(a.Github_Repo),1)])):p("",!0),a.Dev_URL?(i(),l("p",q,[Q,o(s(a.Dev_URL),1)])):p("",!0),a.URL?(i(),l("p",V,[W,n("a",z,s(a.URL),1)])):p("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)],8,M))),128))]),n("div",$,[e(b,{flat:"",bordered:""},{default:t(()=>[e(f,{class:"bg-green-3"},{default:t(()=>[e(r,null,{default:t(()=>[e(m,null,{default:t(()=>[o("Digital Object Life-Cycle Ecosystem")]),_:1}),e(m,{caption:""},{default:t(()=>[o(" DOLCE ")]),_:1})]),_:1}),e(r,{avatar:""},{default:t(()=>[e(_,{name:"explore"})]),_:1})]),_:1}),e(u),e(h,{horizontal:"",class:"q-pa-md"},{default:t(()=>[o(" The goal of the Digital Object Life-Cycle Ecosystem (DOLCE) is to create policies and services that enable TDIS to support accessibility to and discovery of digital objects throughout the phases of their lifecycle. ")]),_:1}),e(u),e(h,{horizontal:""},{default:t(()=>[e(h,{class:"col-4"}),e(u),e(h,{class:"col-4"}),e(u),e(h,{class:"col-4"},{default:t(()=>[J,o(" (external link) ")]),_:1})]),_:1})]),_:1})])]),_:1})}var le=T(O,[["render",Y],["__scopeId","data-v-bff6a9be"]]);export{le as default};