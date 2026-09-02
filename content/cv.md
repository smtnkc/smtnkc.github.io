<CvHero />

<CvSection id="education" title="Education">

<EducationEntry
  degree="PhD, Computer Engineering"
  institution="Izmir Institute of Technology"
  gpa="4.00 / 4.00"
  thesis="Modeling Viral Evolution with Natural Language Processing"
  thesisUrl="https://gcris.iyte.edu.tr/entities/publication/627900e7-4659-4071-8a86-620ef073f651"
  dates="Sep 2019 - Jun 2025"
/>

<EducationEntry
  degree="MSc, Computer Engineering"
  institution="Dokuz Eylül University"
  gpa="3.86 / 4.00"
  thesis="Discovering Disease-Causing Genes by Network Analysis"
  thesisUrl="https://www.proquest.com/openview/dbe7e6f20d0b763e60ad792e1104a4f1/"
  dates="Sep 2016 - Aug 2019"
/>

<EducationEntry
  degree="BSc, Computer Engineering"
  institution="Izmir University"
  gpa="3.23 / 4.00"
  note="Graduated in the top 2% with an honors degree"
  dates="Sep 2009 - Jul 2014"
/>

</CvSection>

<CvSection id="experience" title="Experience">

<ExperienceEntry
role="Researcher & Instructor"
organization="Izmir Institute of Technology"
dates="Jun 2025 - Present"
bullets={[
"Taught courses in AI, software engineering, and computer science",
"Mentored students in interdisciplinary AI research projects",
"Led projects in Software Engineering & AI Research Group",
]}
/>

<ExperienceEntry
role="Research Assistant"
organization="Izmir Institute of Technology"
dates="Jul 2018 - Jun 2025"
bullets={[
"Supported the delivery of computer science and AI courses",
"Contributed to several projects in Data Analytics Research Group",
"Led administrative tasks within the department as the RA coordinator",
"Contributed to the organization of academic conferences and workshops",
]}
/>

<ExperienceEntry
role="Machine Learning Engineer"
organization="AirTies Wireless Networks"
dates="Feb 2017 - May 2018"
bullets={[
"Developed ML-based monitoring systems for networking devices",
"Built data-driven workflows for overheating detection and mitigation",
]}
/>

<ExperienceEntry
role="Teaching Assistant"
organization="Izmir University"
dates="Nov 2014 - Aug 2016"
bullets={[
"Supported the delivery of computer science courses",
"Conducted laboratory sessions for undergraduate courses",
"Coordinated departmental academic and administrative operations",
]}
/>

<ExperienceEntry
role="Software Engineer"
organization="BroadAngle"
dates="Mar 2013 - Nov 2014"
bullets={["Built UI/UX for a mobile health & fitness app"]}
/>

</CvSection>

<CvSection id="projects" title="Projects" layout="grid">

<ProjectEntry
name="GCN4EPI"
description="Developed a multimodal graph neural network framework for identifying gene-regulatory elements by integrating DNA sequence features with enhancer-promoter interaction data. Designed deep learning pipelines for regulatory genomics analysis and predictive modeling of genomic interactions."
tech={["Python", "PyTorch", "TensorFlow", "Bash", "Git"]}
codeUrl="https://github.com/smtnkc/GCN4EPI"
paperUrl="https://doi.org/10.1016/j.compbiolchem.2024.108040"
/>

<ProjectEntry
name="CoV-SNN"
description="Developed a protein language modeling framework for viral escape prediction and zero-shot variant classification using contrastive learning. Led model development, experimentation, and software implementation for efficient viral sequence analysis and predictive modeling."
tech={["Python", "PyTorch", "Streamlit", "HTML", "CSS", "JS", "Git"]}
codeUrl="https://github.com/smtnkc/CoV-SNN"
paperUrl="https://doi.org/10.1109/TCBBIO.2026.3674782"
/>

<ProjectEntry
name="GO-cluster"
description="Developed multimodal network analysis methods for identifying shared disease-associated genes by integrating gene expression, protein interaction, and gene ontology data. Built computational pipelines for disease mechanism discovery and biological network analysis in metabolic disorders."
tech={["R", "Python", "Bash", "Git", "GOSemSim", "STRINGdb"]}
codeUrl="https://github.com/smtnkc/go-cluster"
paperUrl="https://doi.org/10.1109/TCBB.2020.2993301"
/>

<ProjectEntry
name="FastSbR"
description="Developed distributed approximation algorithms for large-scale combinatorial optimization problems related to genome rearrangement analysis. Implemented high-performance parallel computing solutions and achieved significant speed improvements over existing baseline approaches."
tech={["C", "MPI", "OpenMP", "Bash", "SLURM", "Git"]}
codeUrl="https://github.com/smtnkc/FastSbR"
/>

<ProjectEntry
name="MorphoMark"
description="Developed a deep learning framework for automated 3D facial landmark localization using mesh and point cloud data for orthodontic and craniofacial analysis. Coordinated interdisciplinary AI development efforts involving dentistry and computer engineering teams."
tech={["Python", "PyTorch", "Open3D", "NumPy", "MeshLab"]}
websiteUrl="https://morphomark.web.app"
/>

<ProjectEntry
name="AI-Estimator"
description="Developed domain-adapted language models for automated software analytics and effort estimation. Built NLP pipelines for software requirements analysis using real-world engineering datasets. Deployed the model as a web application."
tech={["Python", "PyTorch", "Google Vertex AI", "HTML", "CSS", "JS", "Git", "Docker"]}
codeUrl="https://github.com/smtnkc/SSMBERT"
paperUrl="https://doi.org/10.1016/j.jss.2025.112638"
/>

</CvSection>

<CvSection id="publications" title="Publications">

<PublicationList>

<PublicationEntry
  kind="journal"
  authors="Tenekeci S, Sezgin E, Tekir S"
  title="A contrastive learning framework for efficient viral escape prediction"
  venue="IEEE Transactions on Computational Biology and Bioinformatics"
  year="2026"
  href="https://doi.org/10.1109/TCBBIO.2026.3674782"
/>

<PublicationEntry
  kind="journal"
  authors="Tenekeci S, Ünlü H, Keçeci B, İncir ME, Demirörs O"
  title="Automated software size measurement using multilingual domain-adapted language models"
  venue="Turkish Journal of Electrical Engineering and Computer Sciences"
  year="2026"
  href="https://journals.tubitak.gov.tr/elektrik/vol34/iss2/5/"
/>

<PublicationEntry
  kind="journal"
  authors="Ünlü H, Tenekeci S, Kennouche DE, Demirörs O"
  title="Automating software size measurement with language models: Insights from industrial case studies"
  venue="Journal of Systems and Software"
  year="2026"
  href="https://www.sciencedirect.com/science/article/abs/pii/S0164121225003073"
/>

<PublicationEntry
  kind="journal"
  authors="Tenekeci S, Ünlü H, Gül BA, Keleş D, Küçük M, Demirörs O"
  title="Automating software size measurement from Python code using language models"
  venue="Automated Software Engineering"
  year="2025"
  href="https://doi.org/10.1007/s10515-025-00571-z"
/>

<PublicationEntry
  kind="journal"
  authors="Tenekeci S, Tekir S"
  title="Identifying promoter and enhancer sequences by graph convolutional networks"
  venue="Computational Biology and Chemistry"
  year="2024"
  href="https://doi.org/10.1016/j.compbiolchem.2024.108040"
/>

<PublicationEntry
  kind="conference"
  authors="Ünlü H, Tenekeci S, Çiftçi C, Oral İB, Atalay T, Hacaloğlu T, Musaoğlu B, Demirörs O"
  title="Predicting software functional size using natural language processing: An exploratory case study"
  venue="50th Euromicro Conference on Software Engineering and Advanced Applications"
  year="Paris, France, 2024"
  href="https://doi.org/10.1109/SEAA64295.2024.00036"
/>

<PublicationEntry
  kind="conference"
  authors="Tenekeci S, Ünlü H, Dikenelli E, Selçuk U, Kılınç Soylu G, Demirörs O"
  title="Predicting software size and effort from code using natural language processing"
  venue="IWSM & Mensura"
  year="Montréal, Canada, 2024"
  href="https://ceur-ws.org/Vol-3852/paper1.pdf"
/>

<PublicationEntry
  kind="conference"
  authors="Tekir S, Güzel A, Tenekeci S, Haman BU"
  title="Quote detection: A new task and dataset for NLP"
  venue="7th Joint SIGHUM Workshop"
  year="Dubrovnik, Croatia, 2023"
  href="https://doi.org/10.18653/v1/2023.latechclfl-1.3"
/>

<PublicationEntry
  kind="journal"
  authors="Sezerer E, Tenekeci S, Acar A, Baloğlu B, Tekir S"
  title="Author reputation measurement on question and answer sites by the classification of author-generated content"
  venue="International Journal on Artificial Intelligence Tools"
  year="2021"
  href="https://doi.org/10.1142/S0218194021500479"
/>

<PublicationEntry
  kind="conference"
  authors="Ünlü H, Tenekeci S, Yıldız A, Demirörs O"
  title="Event oriented vs object oriented analysis for microservice architecture: An exploratory case study"
  venue="47th Euromicro Conference on Software Engineering and Advanced Applications"
  year="Palermo, Italy, 2021"
  href="https://doi.org/10.1109/SEAA53835.2021.00038"
/>

<PublicationEntry
  kind="conference"
  authors="Çiftçi O, Tenekeci S, Ülgentürk C"
  title="Artist recommendation based on association rule mining and community detection"
  venue="13th International Joint Conference on Knowledge Discovery, Knowledge Engineering and Knowledge Management"
  year="Valletta, Malta, 2021"
  href="https://doi.org/10.5220/0010678600003064"
/>

<PublicationEntry
  kind="journal"
  authors="Tenekeci S, Işık Z"
  title="Integrative biological network analysis to identify shared genes in metabolic disorders"
  venue="IEEE Transactions on Computational Biology and Bioinformatics"
  year="2020"
  href="https://doi.org/10.1109/TCBB.2020.2993301"
/>

</PublicationList>

</CvSection>

<CvSection id="skills" title="Skills">

<SkillsGroup
areas={[
"Natural Language Processing",
"Bioinformatics",
"Computational Biology",
"Machine Learning",
"Biomedical NLP",
"Clinical Data Analysis",
"Data Science",
"Graph Neural Networks",
"Healthcare AI",
"Complex Networks",
"Parallel Algorithms",
"High-Performance Computing",
"Sequence Analysis",
"Interdisciplinary Research",
]}
technologies={[
"Python",
"PyTorch",
"TensorFlow",
"NumPy",
"Pandas",
"R",
"C",
"HTML",
"CSS",
"JavaScript",
"Git",
"Docker",
"Anaconda",
"SLURM",
"Google Vertex AI",
"Hugging Face",
"Streamlit",
"Scikit-learn",
"XGBoost",
"Bash",
"Linux",
]}
/>

</CvSection>

<CvSection id="teaching" title="Teaching">

- [CENG 212 - Concepts of Programming Languages](https://ceng.iyte.edu.tr/courses/ceng-212/)
- [CENG 323 - Project Management](https://ceng.iyte.edu.tr/courses/ceng-323/)
- [CENG 399 - Concepts of Artificial Intelligence](https://ceng.iyte.edu.tr/courses/ceng-399/)
- [CENG 415 - Senior Design Project & Seminar I](https://ceng.iyte.edu.tr/courses/ceng-415/)
- [SEDS 505 - Team Project](https://ceng.iyte.edu.tr/courses/seds-505/)
- [SEDS 513 - Principles of Human Computer Interaction](https://ceng.iyte.edu.tr/courses/seds-513/)

</CvSection>

<CvSection id="organizations" title="Organizations" layout="grid">

<OrganizationEntry
name="Data Analytics Research Group"
url="https://darg.iyte.edu.tr/people/"
bullets={[
"Received TÜBİTAK, EuroHPC, and YÖK grants",
"Led development in various projects",
"Built and managed GPU workstations",
"Co-authored several publications",
]}
/>

<OrganizationEntry
name="Software Engineering & AI Research Group"
url="https://www.softw-ai.com/"
bullets={[
"Contributed to project proposals",
"Led AI development in various projects",
"Developed AI-Estimator framework",
"Co-authored several publications",
]}
/>

</CvSection>
