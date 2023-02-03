import{V as h,S as m,D as g,Q as f,a as v,b as y,c as T}from"./dataLandscape.d0bb7367.js";import{c as b}from"./QTabs.a02cd4e2.js";import{Q as w}from"./QPage.bc39c737.js";import{E as D}from"./executiveSummary.fe06c584.js";import{_ as S,t as I,r as o,Z as A,$ as i,a0 as d,a1 as n,a6 as x,a2 as s,a3 as l,ah as c,ai as u}from"./index.455a56f4.js";import"./use-dark.a582957a.js";import"./selection.5638546b.js";import"./use-timeout.fe894b87.js";var C=`# Conceptual Architecture - Services and Design

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
`,k=`# Data Stewardship and Governance

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
`,U=`# Organizational Design

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
`,M=`# Development Roadmap and Timeline

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
`,R=`# TDIS Steering Committee Roster (as of May 2022)

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
`,P=`# Credits\r
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
Pierce, S.A., Mobley, W., Dabrowski, A., Highfield, W.E., Blessing, R., Teleki, K., Je'aime, P., Porter, B., Reichman, R., Barr, B., Brody, S.D. (2021). *Texas Disaster Information System Living Plan*.  Institute for a Disaster Resilient Texas. Texas A&M University, Galveston Campus. `;const z=I({name:"TestPage",components:{},data(){return{planSections:[{name:"ExecutiveSummary",label:"Executive Summary",markdown:D},{name:"Vision",label:"Vision and Planning Approach",markdown:h},{name:"Stakeholders",label:"Stakeholders and Users",markdown:m},{name:"DataLandscape",label:"Data Landscape",markdown:g},{name:"Architecture",label:"Conceptual Architecture - Services and Design",markdown:C},{name:"DataStewardship",label:"Data Stewardship and Governance",markdown:k},{name:"OrgDesign",label:"Organizational Design",markdown:U},{name:"Roadmap",label:"Development Roadmap and Timeline",markdown:M},{name:"steering",label:"Steering Committee",markdown:R},{name:"credits",label:"Credit & Versioning",markdown:P}]}},setup(){return{mountainurl:o("/images/tdis-mountain.png"),tab:o("ExecutiveSummary"),splitterModel:o(20)}},mounted(){}}),E={color:"primary"};function _(a,t,G,L,O,W){const p=A("q-markdown");return i(),d(w,null,{default:n(()=>[x("div",E,[s(v,{modelValue:a.splitterModel,"onUpdate:modelValue":t[2]||(t[2]=e=>a.splitterModel=e)},{before:n(()=>[s(b,{modelValue:a.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>a.tab=e),vertical:"",class:"text-accent",style:{position:"fixed"}},{default:n(()=>[(i(!0),l(u,null,c(a.planSections,(e,r)=>(i(),d(y,{key:r,name:e.name,label:e.label},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),after:n(()=>[s(f,{modelValue:a.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>a.tab=e),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up",color:"primary"},{default:n(()=>[(i(!0),l(u,null,c(a.planSections,(e,r)=>(i(),d(T,{key:r,name:e.name},{default:n(()=>[s(p,{src:e.markdown},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})}var Q=S(z,[["render",_],["__scopeId","data-v-6f7b313b"]]);export{Q as default};
