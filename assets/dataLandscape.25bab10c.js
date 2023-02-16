var e=`# Executive Summary

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
`,a=`# Vision and Planning Approach

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
`,n=`# Stakeholders and Users

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
`,t=`# Data Landscape\r
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
The TDIS team will coordinate across Working Groups to capture and centralize appropriate information describing these datasets (metadata) for the purposes of agreeing on their priority and uses, and collection, management and stewardship requirements within TDIS. As datasets are identified through these channels, the team will need to further refine its approach for targeting data by developing a framework and procedure for assessing datasets with partner input about their uses, value, and quality.`;export{t as D,e as E,n as S,a as V};
