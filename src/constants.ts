import { ExperienceItem, Project, Skill } from './types';


export const EMAIL_ADDRESS_AA = "adr.nazmul@gmail.com";
export const PHONE_NUMBER_AA = "+1 548 577 4072";
export const LINKEDIN_URL_AA = "https://www.linkedin.com/in/amlan-audri/";
export const GITHUB_URL_AA = "https://github.com/nazmul057";


import ECG_BACKEND_PROJ_IMAGE from "@/supp_dcs/project_card_images/ecg_backend.webp";
import PERIPHERAL_VISION_LOSS_PROJ_IMAGE from "@/supp_dcs/project_card_images/peripheral_vision_loss.webp";
import NCV_PROJ_IMAGE from "@/supp_dcs/project_card_images/ncv.webp";
import MULTILINK_SUSPENSION_PROJ_IMAGE from "@/supp_dcs/project_card_images/multilink_suspension.webp";
import HOSPITAL_SYSTEM_PROJ_IMAGE from "@/supp_dcs/project_card_images/hospital_system.webp";
import H2_OPT_PROJ_IMAGE from "@/supp_dcs/project_card_images/h2_optimization.webp";
import DAQ_PROJ_IMAGE from "@/supp_dcs/project_card_images/daq.webp";
import BLENDER_CAR_PROJ_IMAGE from "@/supp_dcs/project_card_images/blender_car.webp";

// Projects derived from Professional Experience for display purposes
export const PROJECTS: Project[] = [
  {
    id: 3,
    title: "Real-Time ECG Analysis Backend",
    description: [
      "Built a backend using Python (Flask) and MongoDB supporting continuous data flow, live visualization, and storage for a Holter monitoring project."
    ],
    types: ["Software", "Biomedical", "Backend"],
    tags: ["Python", "Flask", "MongoDB", "GCP"],
    imageUrl: ECG_BACKEND_PROJ_IMAGE,
    altText: "ECG Signal Analysis",
    href: "https://sites.google.com/view/aa-real-time-ecg-analysis/home"
  },
  {
    id: 4,
    title: "Automated NCV Testing Device",
    description: [
      "Designed and implemented real-time signal processing algorithms in C# and automated USB-based communication."
    ],
    types: ["Software", "Biomedical"],
    tags: ["C#", "Signal Processing", "USB Communication", "Automation"],
    imageUrl: NCV_PROJ_IMAGE,
    altText: "Medical Device Testing",
    href: "https://sites.google.com/view/aa-ncv-project/home"
  },
  {
    id: 2,
    title: "Medical Data Storage and Management System for Hospitals",
    description: [
      "Designed secure user access control with distinct roles (Doctors, Patients, Admins) for a clinical research platform, ensuring data privacy and compliance."
    ],
    types: ["Software", "Biomedical"],
    tags: ["Cloud System", "Data Architecture", "Healthcare"],
    imageUrl: HOSPITAL_SYSTEM_PROJ_IMAGE,
    altText: "Secure Access System",
    href: "https://sites.google.com/view/hospital-system-nazmul-audri/home"
  },
  {
    id: 1,
    title: "Optimizing Hydrogen Production Efficiency at Fuel Stations",
    description: [
      "Independent master's course project completed over two months",
      "Focused on controlling production rates to improve energy efficiency in electrolytic hydrogen production systems",
      "Covered the full project lifecycle from initial concept development through final results"
    ],
    types: ["Software", "Mathematical Model", "Dynamic System"],
    tags: ["Java", "Computer Vision", "Hardware Integration"],
    imageUrl: H2_OPT_PROJ_IMAGE,
    altText: "Data Visualization",
    href: "https://github.com/nazmul057/Electrolytic_Hydrogen_Production_Optimization"
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
    imageUrl: MULTILINK_SUSPENSION_PROJ_IMAGE,
    altText: "Dynamics Project",
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
    imageUrl: DAQ_PROJ_IMAGE,
    altText: "Windows Software",
    href: "https://sites.google.com/view/aa-daqusb/home"
  },
  {
    id: 7,
    title: "Assistive Wearable Device for Peripheral Vision Loss",
    description: [
      "Prototype to assist individuals with peripheral vision loss.",
      "Intersection of biomedical and mechatronic domains.",
      "Carried out circuit design, algorithm development, microcontroller programming, and QFD management.",
      "Project from Systems Design Workshop course."
    ],
    types: ["Mechatronics", "Software", "Biomedical"],
    tags: ["Lidar", "Microcontrollers", "Real-time Mapping"],
    imageUrl: PERIPHERAL_VISION_LOSS_PROJ_IMAGE,
    altText: "Mechatronic Systems",
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
    imageUrl: BLENDER_CAR_PROJ_IMAGE,
    altText: "Car Design",
    href: "https://www.youtube.com/watch?v=uTKwdIGYJB4"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineer (AI and Backend)",
    organization: "Infai",
    orgDesc: "Software Startup for building AI systems and services for knowledge-centric workflows.",
    orgType: "Company",
    period: "Oct 2025 – Present",
    type: "work",
    link: "https://www.linkedin.com/company/infai-llc/",
    engagement: "Part-time",
    details:[
      "Design of a Knowledge Graph agnostic system for interacting with different Knowledge Graphs to perform queries using a novel path aware Markhov Chain traversal algorithm.",
      "Custom train and design of a small language model for instruction oriented chat interactions."
    ],
    tags: ["Python", "Langgraph", "PyTorch", "Model Context Protocol", "System Design"]
  },
  {
    id: 2,
    title: "Research Assistant",
    organization: "Qatar University",
    orgDesc: "Machine Learning Group (Electrical and Electronic Engineering)",
    period: "Sep 2022 – Aug 2023",
    type: "work",
    details:[
      "Developed a backend system using Python (Flask) and MongoDB for real-time ECG signal analysis, data storage, and viewing (live and historical) for a Holter Monitoring research project.",
      "Implemented user access control for two roles (Doctors and Patients) to ensure secure and role-specific access.",
      "Collaborated with frontend developers to design consistent data packets for seamless and semantically correct communication between frontend and backend systems.",
      "Designed an efficient data schema to store real-time ECG data with annotations (e.g., unusual heartbeats) while optimizing long-term database performance.",
      "Added audio recording functionality to associate patient voice clips with specific ECG segments.",
      "Configured and deployed the system on an AWS server, enabling backend hosting, database integration, and secure request handling.",
      "Wrote automated test scripts and conducted both backend unit tests and integrated system tests to ensure stability after feature updates.",
      "Modified the server infrastructure to support concurrent deployment of multiple backend systems for collecting diverse datasets for research."
    ],
    tags: ["Python", "Flask", "MongoDB", "GCP", "System Design"]
  },
  {
    id: 3,
    title: "Research Engineer",
    organization: "University of Dhaka",
    orgDesc: "Biomedical Physics & Technology",
    period: "Nov 2021 – Aug 2023",
    type: "work",
    details: [
      "Designed and implemented real-time signal analysis and decision-making algorithms in C# to automate 12-lead ECG data acquisition.",
      "Improved USB-based communication with a biomedical device for Nerve Conduction Velocity (NCV) measurement, enhancing automation, user experience, and testing efficiency.",
      "Developed automated report generation features from NCV test results within the C# application.",
      "Collaborated with multidisciplinary teams to define system scope, align requirements, and ensure smooth hardware-software integration.",
      "Updated Java-based software for compatibility with upgraded hardware for dynamic foot pressure measurement, incorporating computer vision techniques.",
      "Built custom debugging tools for early-stage testing of USB communication with prototype biomedical devices.",
      "Created a reusable C# class for establishing USB communication with external medical hardware.",
      "Designed user interfaces, authored test scripts, and conducted integrated system testing for all developed modules."
    ],
    tags: ["C#", "Java", "Computer Vision", "Embedded Systems", "Automation"]
  },
  {
    id: 4,
    title: "Master of Engineering in Systems Design Engineering",
    organization: "University of Waterloo, Ontario, Canada",
    period: "Sep 2023 – Dec 2024",
    type: "education",
    details: [
      "Principles, methodologies, and strategies for building effective Engineering Systems.",
      "Modeling and Simulating Physical Systems.",
      "Interfacing physical and computational domains.",
      "Modular design and full System Integration."
    ],
    courses: [
      "Systems Theory, Models, Research, & Design (SYDE 600)",
      "Dynamics of Multibody Systems (SYDE 652)",
      "Methods and Principles of Safety-Critical Embedded Software (ECE 652)",
      "Advanced Micro-electromechanical Systems (SYDE 682)",
      "Control of Machines and Processes (ME 649)",
      "Fundamentals of Continuous System Models (SYDE 620)",
      "Optimization Methods (SYDE 632)",
      "Data Analysis (BE 602)",
      "Project Management (BE 605)"
    ],
    cgpa: "87.12/100"
  },
  {
    id: 5,
    title: "Bachelor of Science in Biomedical Engineering",
    organization: "Military Institute of Science and Technology (MIST), Bangladesh",
    period: "Feb 2017 – Apr 2021",
    type: "education",
    details: [
      "Acquired knowledge over a diverse set of Engineering Domains.",
      "Gained expertise in applying Software Engineering, Computation, and Math in solving Biomedical challenges.",
      "Industrial training on the operations of Biomedical Engineering Department of a Hospital.",
      "Final year project on a cloud system for managing and sharing electronic health data."
    ],
    cgpa: "3.88/4.00",
    honors: "Dean's List"
  },
  {
    id: 6,
    title: "Data Engineering",
    organization: "Deeplearning.Ai",
    orgDesc: "Coursera",
    period: "Completed (September 2025)",
    type: "certification",
    link: "https://www.coursera.org/account/accomplishments/verify/9OKHM6XVCSW0",
    details: ["Gained hands-on experience with AWS-based data pipelines."],
    tags: ["AWS", "Data Pipelines", "Apache Airflow"]
  },
  {
    id: 7,
    title: "Foundation: Introduction to LangGraph",
    organization: "LangChain Academy",
    period: "Completed",
    type: "certification",
    link: "https://academy.langchain.com/certificates/ayoz20o8gt",
    details: ["Learned to build AI agents with memory and Model Context Protocol."],
    tags: ["AI Agents", "LangGraph"]
  },
  {
    id: 8,
    title: "Algorithms, Part 1",
    organization: "Princeton University (Coursera)",
    period: "Completed",
    type: "certification",
    details: ["Evaluations on Union-Find, Analysis of Algorithms, Stacks/Queues, Priority Queues, Sorting Algorithms, BSTs, Hash tables."],
    tags: ["Algorithms", "Data Structures"]
  },
  {
    id: 9,
    title: "Software Development Processes and Methodologies",
    organization: "University of Minnesota (Coursera)",
    period: "Completed",
    type: "certification",
    tags: ["Software Engineering", "Agile"]
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
  {
    id: 11,
    title: "Volunteer",
    organization: "Sunnybrook Health Sciences",
    period: "Sep 2025 – Present",
    type: "volunteer",
    details: [
      "Helping the attendents at the Same Day Surgery.",
      "Transporting discharged Patients."
    ]
  },
  {
    id: 12,
    title: "President",
    organization: "Einthoven Club",
    period: "Jan 2020 – Apr 2021",
    type: "leadership_extracurricular",
    details: [
      "Led Student Club.",
      "Organized Events.",
      "Coordinated student led research"
    ]
  }
];


export const SKILLS: Skill[] = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Python (Django, Flask)", "C#", "Java", "C++", "C"]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    items: ["Docker", "Airflow", "LangGraph", "AWS Data Pipeline", "GCP", "Git"]
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MongoDB", "PostgreSQL"]
  },
  {
    category: "Engineering & Design",
    icon: "Boxes",
    items: ["MATLAB", "MSC ADAMS", "SolidWorks"]
  },
  {
    category: "Hardware & Embedded",
    icon: "Cpu",
    items: [
      "Raspberry Pi",
      "Arduino",
      "PIC Microcontrollers",
      "I2C Protocol",
      "MPU6050",
      "Sensors"
    ]
  },
  {
    category: "OS",
    icon: "Monitor",
    items: ["Ubuntu Server", "Ubuntu", "Raspberry Pi OS", "Windows"]
  }
];
