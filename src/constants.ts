import { Award, ExperienceItem, Project, Publication, Skill } from './types';

export const EMAIL_ADDRESS_AA = "adr.nazmul@gmail.com";
export const PHONE_NUMBER_AA = "+880 1321195338";
export const LINKEDIN_URL_AA = "https://www.linkedin.com/in/amlan-audri/";
export const GITHUB_URL_AA = "https://github.com/nazmul057";

export const FULL_NAME_AA = "Amlan Nazmul Hai Audri";
export const LOCATION_AA = "Dhaka, Bangladesh";

/* =========================================================
   PROJECTS
   Artwork is vector, drawn in components/ProjectArt.tsx
   ========================================================= */

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Optimizing Hydrogen Production Efficiency at Fuel Stations",
    description: [
      "Independent master's course project completed over two months",
      "Focused on controlling production rates to improve energy efficiency in electrolytic hydrogen production systems",
      "Covered the full project lifecycle from initial concept development through final results"
    ],
    types: ["Mathematical Model", "Dynamic System"],
    tags: ["Optimization", "Energy Efficiency", "Dynamic Modelling"],
    art: "hydrogen",
    altText: "Electrolysis cell feeding an optimization curve",
    href: "https://github.com/nazmul057/Electrolytic_Hydrogen_Production_Optimization"
  },
  {
    id: 2,
    title: "Medical Data Storage and Management System for Hospitals",
    description: [
      "Undergraduate thesis: Design and Development of Digital Health Record Systems for Hospitals.",
      "Sole contributor to system design, implementation, and user interface.",
      "Designed secure user access control with distinct roles (Doctors, Patients, Admins), ensuring data privacy and compliance.",
      "Supervised by Col. Syed Mahfuzur Rahman, Head, Department of Biomedical Engineering, MIST."
    ],
    types: ["Software", "Biomedical", "Backend"],
    tags: ["Cloud System", "Data Architecture", "Access Control", "Healthcare"],
    art: "records",
    altText: "Layered health records behind a security shield",
    href: "https://sites.google.com/view/hospital-system-nazmul-audri/home"
  },
  {
    id: 3,
    title: "Real-Time ECG Analysis Backend",
    description: [
      "Built a backend using Python (Flask) and MongoDB supporting continuous data flow, live visualization, and storage for a Holter monitoring project.",
      "Data model sized for long-horizon archiving with clinical annotation of arrhythmias and heartbeat irregularities.",
      "Cloud-hosted and in continuous operation for over three years."
    ],
    types: ["Backend", "Research Systems", "Biomedical"],
    tags: ["Python", "Flask", "MongoDB", "AWS", "GCP"],
    art: "ecg",
    altText: "ECG trace streaming into a database stack",
    href: "https://sites.google.com/view/aa-real-time-ecg-analysis/home"
  },
  {
    id: 4,
    title: "Automated NCV Testing Device",
    description: [
      "Designed and implemented real-time signal processing algorithms in C# and automated USB-based communication.",
      "Added automated generation of clinical reports from Nerve Conduction Velocity test results."
    ],
    types: ["Software", "Biomedical"],
    tags: ["C#", "Signal Processing", "USB Communication", "Automation"],
    art: "ncv",
    altText: "Stimulus pulse travelling along a nerve to a recording electrode",
    href: "https://sites.google.com/view/aa-ncv-project/home"
  },
  {
    id: 5,
    title: "Modeling, Simulation and Dynamic Analysis of Multi-link Suspension using ADAMS",
    description: [
      "Modeled, simulated, and analyzed multilink suspension system dynamics",
      "Utilized MSC ADAMS and ADAMS CARS software platforms",
      "Key contributions: initial brainstorming, preliminary modeling and testing, literature research, and final simulation validation"
    ],
    types: ["Mathematical Model", "Dynamic System"],
    tags: ["Multibody Dynamics", "MSC ADAMS", "MATLAB"],
    art: "suspension",
    altText: "Multi-link suspension linkage geometry",
    href: "https://drive.google.com/file/d/1LoOuh2LkyrvIoSl2xS5CWbNvG82g7lPp/view"
  },
  {
    id: 6,
    title: "Data Acquisition Through USB",
    description: [
      "Developed a Windows desktop application from scratch to communicate with external devices via USB protocol. The project involved in-depth study of USB communication technology and implementation of a custom user interface using Windows Presentation Foundation (WPF) framework.",
      "Independent project completed during internship"
    ],
    types: ["Mechatronics", "Software", "Biomedical"],
    tags: ["USB", "C#", "WPF"],
    art: "daq",
    altText: "USB connector feeding sampled data into a desktop application",
    href: "https://sites.google.com/view/aa-daqusb/home"
  },
  {
    id: 7,
    title: "Assistive Wearable Device for Peripheral Vision Loss",
    description: [
      "Prototype to assist individuals with peripheral vision loss.",
      "Intersection of biomedical and mechatronic domains.",
      "Carried out circuit design, algorithm development, microcontroller programming, and QFD management.",
      "Project from the Systems Design Graduate Workshop (SYDE 660D)."
    ],
    types: ["Mechatronics", "Software", "Biomedical"],
    tags: ["Lidar", "Microcontrollers", "Real-time Mapping"],
    art: "vision",
    altText: "Field of vision with the periphery mapped by range sensing",
    href: "https://sites.google.com/view/aa-project-awdpvl/home"
  },
  {
    id: 8,
    title: "Blender Car Design",
    description: [
      "As a personal hobby, I designed a car in Blender based on my own creative vision."
    ],
    types: ["3D Design"],
    tags: ["Blender", "DaVinci Resolve"],
    art: "car",
    altText: "Wireframe car body on a modelling grid",
    href: "https://www.youtube.com/watch?v=uTKwdIGYJB4"
  }
];

/* =========================================================
   EXPERIENCE / EDUCATION
   ========================================================= */

export const EXPERIENCE_DATA: ExperienceItem[] = [
  /* ---------- Research ---------- */
  {
    id: 1,
    title: "Researcher — Agentic AI for Genomics",
    organization: "Qatar University",
    orgDesc: "Machine Learning Group, Department of Electrical Engineering",
    location: "Doha, Qatar · Remote",
    period: "Sep 2025 – Present",
    type: "research",
    current: true,
    engagement: "Remote",
    note: "In collaboration with the Department of Biochemistry, University of Regina, Canada.",
    details: [
      "Building AI-integrated, agentic bioinformatics tooling for comparative genome analysis in bacteria, supporting antimicrobial resistance (AMR) work, with reproducible analysis under natural-language control.",
      "Automating analysis workflows end to end, replacing manual interpretation steps with analysis-ready output.",
      "Developing agentic orchestration of HLA genomics data pipelines, covering database preparation, operation, and ongoing maintenance.",
      "Co-authored a multi-cohort study of gut microbiome signatures across neurological and neuroimmune disorders, applying explainable machine learning across nine public case-control cohorts.",
      "Contributed to research grant writing supporting the group's funding proposals."
    ],
    tags: ["Agentic AI", "Bioinformatics", "Python", "LangGraph", "Explainable ML", "Genomics"]
  },
  {
    id: 2,
    title: "Research Assistant — Biomedical Signal Research",
    organization: "Qatar University",
    orgDesc: "Machine Learning Group, Department of Electrical Engineering",
    location: "Doha, Qatar",
    period: "Sep 2022 – Aug 2023",
    type: "research",
    details: [
      "Developed the research data infrastructure for a Holter monitoring study, enabling continuous acquisition and live review of long-duration ECG recordings.",
      "Designed the data model and storage architecture for long-horizon ECG archiving with clinical annotation of arrhythmias and heartbeat irregularities, sized for sustained growth into the hundreds of gigabytes.",
      "Established data governance for the study, including role-based access for clinicians, participants, and administrators, and a shared data specification used across the research team.",
      "Delivered a cloud-hosted research platform supporting concurrent collection across study sites, in continuous operation and active data collection for over three years."
    ],
    tags: ["Python", "Flask", "MongoDB", "Data Architecture", "AWS", "GCP", "System Design"]
  },
  {
    id: 3,
    title: "Research Engineer",
    organization: "University of Dhaka",
    orgDesc: "Department of Biomedical Physics and Technology",
    location: "Dhaka, Bangladesh",
    period: "Nov 2021 – Aug 2023",
    type: "research",
    note: "Work supported by the International Science Programme, Uppsala University, Sweden.",
    details: [
      "Developed real-time signal processing and decision algorithms for automated 12-lead ECG acquisition, including heart-rate (BPM) estimation, as part of the department's biomedical instrumentation research.",
      "Studied frequency-domain signal morphology for classification, and designed digital filters applied in the acquisition pipeline.",
      "Extended instrumentation and analysis software for Nerve Conduction Velocity (NCV) studies, including automated generation of clinical reports.",
      "Applied computer vision methods to dynamic foot pressure measurement systems, preserving measurement validity across a hardware generation change.",
      "Developed a shared C# USB communication package linking desktop software with the department's custom-designed hardware for real-time data collection."
    ],
    tags: ["C#", "Java", "Signal Processing", "Computer Vision", "Embedded Systems", "Instrumentation"]
  },

  /* ---------- Teaching ---------- */
  {
    id: 4,
    title: "Peer Instruction & Student Workshops",
    organization: "Einthoven Club, Military Institute of Science and Technology",
    orgDesc: "Led as club president",
    location: "Dhaka, Bangladesh",
    period: "Feb 2020 – Apr 2021",
    type: "teaching",
    details: [
      "Taught fellow undergraduates in MATLAB, Python, and C/C++ programming, circuit analysis, and ECG signal acquisition and interpretation.",
      "Introduced bioinformatics concepts and tooling to students from a biomedical engineering background.",
      "Selected topics, prepared material, and ran sessions for audiences of mixed prior experience."
    ],
    tags: ["MATLAB", "Python", "C/C++", "Circuit Analysis", "ECG", "Bioinformatics"]
  },

  /* ---------- Education ---------- */
  {
    id: 5,
    title: "Master of Engineering in Systems Design Engineering",
    organization: "University of Waterloo",
    orgDesc: "Specialization in Mechatronic and Physical Systems. Degree conferred June 2025.",
    location: "Waterloo, Ontario, Canada",
    period: "Sep 2023 – Dec 2024",
    type: "education",
    details: [
      "Principles, methodologies, and strategies for building effective Engineering Systems.",
      "Modeling and Simulating Physical Systems.",
      "Interfacing physical and computational domains.",
      "Modular design and full System Integration."
    ],
    courses: [
      "Optimization Methods (SYDE 632)",
      "Systems Design Graduate Workshop 1 (SYDE 660D)",
      "Data Analysis and Management (BE 602)",
      "Project Management (BE 605)",
      "Dynamics of Multibody Systems (SYDE 652)",
      "Systems Theory, Models, Research & Design (SYDE 600)",
      "Advanced Microelectromechanical Systems (SYDE 682)",
      "Control of Machines and Processes (ME 649)"
    ],
    auditedCourses: [
      "Methods and Principles of Safety-Critical Embedded Software (ECE 652)",
      "Fundamentals of Continuous System Models (SYDE 620)"
    ],
    cgpa: "87.12 / 100"
  },
  {
    id: 6,
    title: "Bachelor of Science in Biomedical Engineering",
    organization: "Military Institute of Science and Technology (MIST)",
    location: "Dhaka, Bangladesh",
    period: "Feb 2017 – Apr 2021",
    type: "education",
    thesis:
      "Design and Development of Digital Health Record Systems for Hospitals — sole contributor to system design, implementation, and user interface. Supervisor: Col. Syed Mahfuzur Rahman, Head, Department of Biomedical Engineering, MIST.",
    details: [
      "Acquired knowledge over a diverse set of Engineering Domains.",
      "Gained expertise in applying Software Engineering, Computation, and Math in solving Biomedical challenges.",
      "Industrial training on the operations of the Biomedical Engineering Department of a hospital."
    ],
    courses: [
      "Computer Programming",
      "Digital Signal Processing",
      "Random Signals & Processes",
      "Digital Electronics",
      "Electrical Circuits",
      "Electronic Devices & Circuits",
      "Embedded Systems & Interfacing",
      "Bioinformatics",
      "Biomedical Instrumentation & Measurements",
      "Probability & Statistics",
      "Differential Equations",
      "Complex Variables & Linear Algebra"
    ],
    cgpa: "3.88 / 4.00",
    honors: "Dean's List"
  },

  /* ---------- Certifications ---------- */
  {
    id: 7,
    title: "Data Engineering",
    organization: "DeepLearning.AI",
    orgDesc: "Coursera",
    period: "Completed September 2025",
    type: "certification",
    link: "https://www.coursera.org/account/accomplishments/verify/9OKHM6XVCSW0",
    details: ["Gained hands-on experience with AWS-based data pipelines."],
    tags: ["AWS", "Data Pipelines", "Apache Airflow"]
  },
  {
    id: 8,
    title: "Introduction to LangGraph",
    organization: "LangChain Academy",
    period: "Completed",
    type: "certification",
    link: "https://academy.langchain.com/certificates/ayoz20o8gt",
    details: ["Learned to build AI agents with memory and Model Context Protocol."],
    tags: ["AI Agents", "LangGraph"]
  },
  {
    id: 9,
    title: "Algorithms, Part I",
    organization: "Princeton University (Coursera)",
    period: "Completed",
    type: "certification",
    details: [
      "Evaluations on Union-Find, Analysis of Algorithms, Stacks/Queues, Priority Queues, Sorting Algorithms, BSTs, Hash tables."
    ],
    tags: ["Algorithms", "Data Structures"]
  },
  {
    id: 10,
    title: "Lean Six Sigma Yellow Belt",
    organization: "Six Sigma Academy Amsterdam (Udemy)",
    period: "Completed",
    type: "certification",
    link: "https://www.virtualbadge.io/certificate-validator?credential=aab3593c-9c2e-46cb-b347-3f2bd61fcbce",
    tags: ["Process Improvement", "Six Sigma"]
  },

  /* ---------- Volunteering ---------- */
  {
    id: 11,
    title: "Volunteer — Same Day Surgery",
    organization: "Sunnybrook Health Sciences Centre",
    location: "Toronto, Canada",
    period: "Sep 2025 – Apr 2026",
    type: "volunteer",
    details: [
      "Supported clinical operations in a high-throughput surgical unit, assisting staff with patient flow and coordination under strict privacy and safety protocols."
    ]
  },
  {
    id: 12,
    title: "Volunteer",
    organization: "York Region Educational Services (YRES)",
    location: "Ontario, Canada",
    period: "Sep 2025 – Apr 2026",
    type: "volunteer",
    details: [
      "Supported educational and administrative initiatives through technical and operational assistance, including process organization and documentation."
    ]
  },

  /* ---------- Leadership ---------- */
  {
    id: 13,
    title: "President",
    organization: "Einthoven Club",
    orgDesc: "Military Institute of Science and Technology",
    location: "Dhaka, Bangladesh",
    period: "Feb 2020 – Apr 2021",
    type: "leadership_extracurricular",
    details: [
      "Led Student Club.",
      "Organized Events.",
      "Coordinated student led research"
    ]
  },

  /* ---------- Secondary engagement ---------- */
  {
    id: 14,
    title: "Software Engineer (AI and Backend)",
    organization: "Infai",
    orgDesc: "Software startup building AI systems and services for knowledge-centric workflows.",
    orgType: "Company",
    period: "Oct 2025 – Present",
    type: "secondary",
    link: "https://www.linkedin.com/company/infai-llc/",
    engagement: "Part-time",
    details: [
      "Contributing to a Knowledge Graph agnostic system for interacting with different Knowledge Graphs to perform queries using a novel path-aware Markov Chain traversal algorithm.",
      "Designing and training a small language model for instruction-oriented chat interactions.",
      "Optimizing inference engines.",
      "Utilizing Knowledge Graphs for precise and accurate answers from agentic AI systems."
    ],
    tags: ["Python", "LangGraph", "PyTorch", "Model Context Protocol", "System Design"]
  }
];

/* =========================================================
   PUBLICATIONS
   ========================================================= */

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    authors:
      "Amlan Audri†, S. A. Hossain†, K. A. Aly, M. S. I. Sumon, S. M. Zughaier, M. Babu, M. E. H. Chowdhury",
    title:
      "BG-AGT: Natural Language Driven Agentic Orchestration for End to End Biological Sequence Analysis",
    venue: "For submission to Bioinformatics (Oxford University Press)",
    year: "2026",
    status: "In preparation",
    note: "† Equal contribution. Working title."
  },
  {
    id: 2,
    authors:
      "M. S. I. Sumon, M. E. H. Chowdhury, S. A. Hossain, A. N. H. Audri, M. K. Smatti, H. M. Yassine",
    title:
      "Shared and heterogeneous gut microbiome signatures across neurological and neuroimmune disorders: a multi-cohort analysis with explainable machine learning",
    venue:
      "Advances in Bioengineering & Biomedical Intelligent Systems Conference (BioBIS 2027), KFUPM, Dhahran, Saudi Arabia",
    year: "2027",
    status: "Submitted"
  }
];

/* =========================================================
   AWARDS
   ========================================================= */

export const AWARDS: Award[] = [
  {
    id: 1,
    title: "Second Place — Project Showcasing",
    organization: "Biomedical Engineering Fest, MIST",
    year: "2018"
  },
  {
    id: 2,
    title: "Poster Presentation",
    organization: "Biomedical Engineering Fest, MIST",
    year: "2018"
  }
];

/* =========================================================
   SKILLS
   ========================================================= */

export const SKILLS: Skill[] = [
  {
    category: "Programming",
    icon: "Code2",
    items: ["Python (FastAPI, Flask, Django)", "C# (WPF, .NET)", "Java (JavaFX, Swing)", "C / C++"]
  },
  {
    category: "ML & Scientific Computing",
    icon: "Brain",
    items: ["scikit-learn", "TensorFlow", "Keras", "SciPy", "pandas", "LangChain", "LangGraph"]
  },
  {
    category: "Software & Platforms",
    icon: "Wrench",
    items: ["Docker", "Airflow", "AWS data pipelines & ETL", "Google Cloud Platform", "Git"]
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Automation",
    icon: "Workflow",
    items: ["Zapier", "n8n"]
  },
  {
    category: "Engineering Tools",
    icon: "Boxes",
    items: ["MATLAB", "MSC ADAMS", "SolidWorks"]
  },
  {
    category: "Embedded & Hardware",
    icon: "Cpu",
    items: [
      "USB communication",
      "Raspberry Pi",
      "Arduino",
      "PIC microcontrollers",
      "I2C",
      "IMU sensors",
      "ECG and LiDAR devices"
    ]
  },
  {
    category: "Operating Systems",
    icon: "Monitor",
    items: ["Ubuntu Server", "Ubuntu", "Raspberry Pi OS", "Windows"]
  }
];
