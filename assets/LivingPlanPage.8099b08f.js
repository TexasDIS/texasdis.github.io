import{Q as o}from"./QPage.6c23b59f.js";import{_ as r,A as d,N as l,O as e,R as n,S as c,a0 as p,V as h,ad as u,ae as g}from"./index.30766047.js";var m=`# Executive Summary

The Texas Disaster Information System (TDIS) will be an interactive, web-based spatial data system designed to support disaster preparedness, response, recovery, and mitigation for the State of Texas. At present, multiple  federal, state, and local agencies are collecting and using data to respond and mitigate against the effects of numerous disaster events in Texas.  However, disaster information is often fragmented, poorly maintained, and difficult to access. This lack of data coherency limits the ability of responders, planners, grantmakers, and researchers to support disaster resilience. 

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

The TDIS plan is "evergreen," meaning it will be reviewed and revised at regular intervals over the course of the TDIS lifecycle with updated versions published at least annually.  This initial version of the Living Plan summarizes and reflects the overarching conceptual design considerations and best practices for developing information systems.  Concepts in this plan will continue to be developed, revised, and adapted on a regular basis throughout future TDIS implementation phases.

### Initial Planning Focus

For the planning phase, the TDIS team made two important choices to guide early development of the system:

1. *Focus on flooding first*: In terms of loss of life and economic impact, floods are the most damaging natural hazard facing Texas.  Prioritizing flooding will help TDIS align with numerous ongoing flood-related efforts in Texas and build a foundation that can translate to other hazards over time. This initial TDIS planning phase is also supported by federal funds specific to supporting interventions to mitigate flooding impacts.
2. *Start with planning and mitigation use cases*: TDIS will start with a focus on planning and mitigation use cases with the intention to transition to support for future recovery and response efforts. TDIS will adopt a staggered implementation approach to prioritize development of services that will eventually support all phases of disaster planning including preparation, mitigation, response, and recovery. 

    Based on initial stakeholder focus groups and interviews, the TDIS team is focused on developing flood mitigation use cases from the following themes, which will be formalized during the implementation phase:
    - Theme 1: Risk Tools for Hazard Assessment, Planning and Evaluation specifically focused on flood hazards 
    - Theme 2: Mitigation Strategies and Program Tracking


## Stakeholders and Users

Development of TDIS will rely on long-term and continuous engagement to identify users and understand their needs. During the initial planning phase, the TDIS team's focus has been on stakeholders who are knowledgeable about flood data and are active users of flood data products. Members of the TDIS Steering Committee, made up of state and federal agency representatives and academic partners, provided considerable input and advice.

The environment of flood-related projects and stakeholders in Texas is rich, presenting many opportunities for collaboration and multi-agency partnerships. The TDIS team has developed strong collaborative working relationships with the Texas Water Development Board (TWDB), Texas General Land Office (TGLO), Texas Division of Emergency Management (TDEM), and other organizations that seek enhanced data and analytical tools to support flood mitigation in the state.

### TDIS User Personas

TDIS products and services will operate on a continuum, ranging from providing access to raw data to sophisticated analysis and visualizations that support decision making.  These services will be utilized by partners for various short and long-term purposes within the disaster life cycle.

The TDIS planning team identified and prioritized specific user "personas" to fine-tune thinking about user needs and interests. These personas can be grouped into three key categories of users: (1) end-users of analytical products; (2) developers of analytical products; and (3) those who provide the foundational data and knowledge that will feed all TDIS services.

## Conceptual Architecture - Services and Design

TDIS' architecture adopts a service-oriented approach that leverages computational and data resources in support of Intelligent Decision Support Systems (iDSS).  The infrastructure design will provide tools and access to the data required to manage, analyze, and understand critical issues facing Texas disaster management and recovery. The figure below shows the conceptual architecture for TDIS.


### Key Points - TDIS Design Approach

- TDIS will use a service-oriented approach to bundle capabilities in a user-friendly manner.
- Design and implementation will be completed by multidisciplinary teams.
- State of the art methods and analytics will accelerate modeling and automation of workflow tasks.
- The development process will include end-to-end human-computer interaction and evaluation.

## Data Stewardship and Governance

TDIS will be a steward of the data it receives and generates. As a data steward, TDIS\u2019 main objective is to build a fiduciary relationship with the partners, stakeholders, and entities whose data, studies, and research products are stored and managed within it. TDIS' intent is not to replicate or claim credit for any existing services and efforts, but rather to enhance their value by offering integrated access to data sources through a single mediated point (i.e. a federated information system). In doing so, TDIS will  simplify the data query process of critical natural hazards data and enable the discovery and visualization of information more comprehensively than is possible using individual datasets.

### Data Identification, Storage, and Security

The identification of the authoritative and trusted data sources will be conducted in parallel with development of TDIS\u2019 use cases via targeted outreach efforts with industry leaders and outside entities. Once priority data and their sources are identified, TDIS will begin the process of executing the Data Transfer and Use Agreements (DTUAs) that will protect confidentiality when necessary and permit appropriate publication and sharing of research results. This process has already been initiated with the Federal Emergency Management Agency.

Once ingested, TDIS\u2019 data will be stored within data management services designed and optimized to support large-scale collections, collaborative research, and broader access. Currently, the technical team is assessing various options for data storage. Ideally, the data management system will be able to support multiple modes of data transfer and access. To control data access, TDIS will establish a roles-based authorization structure that both protects sensitive data and enables collaboration. 


## Organizational Design
TDIS has a technical team that brings deep subject matter expertise. Managed by the IDRT Executive Director and TDIS Director, the principal staffing roles will include a nimble core set of seven technical expert areas including 1) Systems Administration, 2) Data Management Services, 3) Software Services and Application Protocols (APIs), 4) Intelligent Decision Support Systems (iDSS), 5) Applied Research & Use Case development, 6) Program Management, and 7) Data Agreements. The figure below shows the planned Organizational Chart for the core Technical Team.


## Development Roadmap and Timeline

TDIS is on a 3-year timeline to develop an initial design, implementation strategy, testing and evaluation protocols, and two themed "service bundles". These service bundles will provide evidence of initial proof-of-concepts, visualizations and graphics, conceptual system design, and workflows. The two service bundles will include:

1. TDIS Risk Tools for Hazard Assessment, Planning and Evaluation specifically focused on flood hazards 
2. TDIS Mitigation Strategies and Program Tracking

To accomplish these goals, TDIS will follow an iterative design-build-test cycle, which will enable continuous improvement and refinement of TDIS services over time. In year one and two of the project, proof-of-concept and prototype services will be developed. After initial testing core capabilities will be transitioned to production.







`,f=`# Vision and Planning Approach

The TDIS vision and planning approach has been refined using stakeholder input throughout the planning year. 

## Vision

***TDIS will increase disaster resilience by addressing real-world problems through open, transparent, and accessible data products and services.***

### People and problem centered
TDIS is grounded in a sense of service and guided by ongoing involvement and feedback from stakeholders in the Texas disaster community.

### Decision and action minded
The purpose of TDIS is to translate knowledge into action by answering specific questions and solving specific problems with faster access to data and analytics. 

### Trusted source
TDIS provides a rational system for capturing, cataloging, maintaining, and securely sharing high-value information. The TDIS governance process ensures priority focus on delivering authoritative sources of data at proper access levels.

### Team-based collaboration
TDIS is a forum for collaboration to enable more services and computing power than any one entity can develop on its own.  TDIS rectifies disconnects between, and overlaps across, organizations with similar data needs and helps minimize duplication of effort.

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
* planning (sometimes divided into prevention & preparedness); 
* mitigation; 
* response; and 
* recovery. 

TDIS will start with a focus on direct tie-ins to existing planning and mitigation programs with the intention to support recovery and response long-term. TDIS will adopt a staggered implementation approach to prioritize development of services. 

At this time, TDIS will not play a direct role in disaster response workflows, given the unique types of systems, analytics, and expertise needed to support immediate life-saving decisions and activities during an emergency response. 

TDIS does envision preserving and collecting data that may be generated prior to, during, or immediately after an event that become useful for recovery.   TDIS will continue to work with recovery and response programs to further develop tools and data flows to support these needs as planning and implementation of TDIS advances.  

## Initial Planning and Mitigation Use Case Themes

Services within TDIS will be grouped into themed sets of tools and services that target common needs across decision-making organizations. Following initial stakeholder input,\u202Fthe TDIS team\u202Fidentified three\u202Fthemes that TDIS can help address to benefit\u202Fflood\u202Fstakeholder workflows and missions:\u202F 

__Better\u202Frisk assessment and\u202Fplanning coordination.__\u202FThere are multiple plans developed by state, regional, and local agencies that would benefit from universal data and improved coordination. For example,\u202Fevery five years,\u202Fthe Texas Division of Emergency Management (TDEM)\u202Fdevelops a state hazard mitigation plan. The Texas Water Development Board (TWDB)\u202Fwill\u202Falso begin\u202Freleasing\u202Fa\u202Fstate\u202Fflood risk assessment plan\u202Fevery five years. Additionally,\u202Fthe Texas GLO develops an action plan\u202Fafter each disaster\u202Fthat also requires a risk assessment. Local jurisdictions are also developing flood models and risk assessments for their region.\u202F\u202F 

__Better mitigation\u202F program \u202Ftracking.__\u202FAs the frequency of disasters increase in Texas, the scale of mitigation\u202Fprojects\u202Foccurring at every level of government\u202Falso increases.\u202FFor example, parcel buyout programs are funded by multiple federal, state, and local agencies and not comprehensively tracked.\u202FAs a result, the Texas GLO must coordinate with\u202Fmultiple\u202Fagencies\u202Fto\u202Fbetter understand whether it is distributing funding\u202Feffectively.\u202FTDIS could provide a statewide view of\u202Fbuyout\u202Factivity, while limiting access to the full data based on need.\u202FEvaluations could also assess\u202Felevation/freeboard requirements, impervious surface coverage\u202Frequirements, drainage standards, planning policies, insurance penetration, and FEMA CRS activities.\u202F 

__Predictive\u202Fanalytics.__\u202FThe state agencies in TDIS focus groups expressed interest in using data to better understand the effects of their\u202Fgrant-funded\u202Fmitigation projects. Some examples include understanding the effects of buyouts on taxes collected, or how recovery and mitigation projects have affected future losses. TDIS could provide the\u202Fcomputing power and\u202Fadvanced spatial analysis tools necessary to manage these complex queries\u202Fand help target future programs to the highest need and most effective strategies.
`;const v=d({name:"LivingPlanPage",data(){return{planSections:[m,f]}}}),T={class:"q-ma-xl"};function y(a,w,b,S,D,I){const t=l("q-markdown");return e(),n(o,{class:"row"},{default:c(()=>[p("div",T,[(e(!0),h(g,null,u(a.planSections,(i,s)=>(e(),n(t,{class:"q-ma-lg",key:s,src:i,ref_for:!0,ref:"markdownobject"},null,8,["src"]))),128))])]),_:1})}var z=r(v,[["render",y]]);export{z as default};
