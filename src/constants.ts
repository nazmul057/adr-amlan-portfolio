import { ExperienceItem, Project, Skill } from './types';

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCMyug9YT0psdG1j2Z-LzsOZuOc2gXBZlgdC9KRmvXkot30PblFnkIjBYutXm9SzNcMx_QU6Gy6Y03kndagbewEDbZG6tf7lDHOwfZZUGqOs9VQEsGnoyC-jG-NOOvWt_uuxSYMEbpNkpZ3S0bu2LWPn4fN6eU8cn4KoZn8o5M__hOpOi6TaTr-nldDJBoObac-3mgT2Bp8F9YM31cW-xqQdk6u0DlvBNXRsEqdt8EEugbX7rb4yluY6wxVFfdqY-NI8-Oom66DmLrq";
export const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJjjUubISPk8ThBLIfhumnO902QJd74PUhvahdgY6MKzFZ2-l-FnYSDY_USvQMMv03XJGgh11IEMwYUlMkEJTiABWuriXwAOrjarNVGgnoDx15_F7VKPVQkTIeJi9sN9u8v8FwWCn_-9doYxHMme1So-nx6jkB4uDHxBB1WiPjmrbPYiRaAkmGg2MUhQh21omhmReJy5sdOzo37GEHUQ8c4k1aiyeK81yCYrqMizaCbvIC8eCcUhVouEvgn0GqXq1hq1fo-gvoUOZu";

// Projects derived from Professional Experience for display purposes
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Real-Time ECG Analysis Backend",
    description: [
      "Built a backend using Python (Flask) and MongoDB supporting continuous data flow, live visualization, and storage for a Holter monitoring project."
    ],
    types: ["Software", "Biomedical", "Backend"],
    tags: ["Python", "Flask", "MongoDB", "GCP"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8k7e0y5JJgQ0qwm_yRLJ33VUpyBf1Y5ESVFkqlXZGMbH7RnLQYFEts-043E_y1gYkTv-dFhzRwt7XzSmWRgBA0WHgwvsZzYQ4s6CC9QZcNdGPHBXD4pzoczDt1j31VIEcwNjQejpfXz_iqlrAsOy1CHal3IuPQ8z3_7D-3flw_19R-R__Le3zQUTW0ft1NfNK3bDRwlbHvi93SZLYpQo4JAoFircu4rtktQy-GN0sbIRojofCGEwutSUSE4rJXWmiyyivypR3FiuA",
    altText: "ECG Signal Analysis",
    href: "https://sites.google.com/view/aa-real-time-ecg-analysis/home"
  },
  {
    id: 2,
    title: "Automated NCV Testing Device",
    description: [
      "Designed and implemented real-time signal processing algorithms in C# and automated USB-based communication."
    ],
    types: ["Software", "Biomedical"],
    tags: ["C#", "Signal Processing", "USB Communication", "Automation"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr1KL-TcwtJDJgNvpDzRh1FtjWN3BFVEa02VXx0XDztZDX0JTpcA5WH3c-zAhhGhb3YG34QLNCgRA07YMYwSVJuszf1kt3F9PW_X_rTeEuwtphmEGurD5YK4MwOSmZrMG3lzRIhRrmSXAo28yFSClAC0gL982Qhtk65fCUhXfvHbWj8rMcz80RqITzy4ZgwfNE1IF1BfEEkwT4rF3bjNQFsXRbaeNGbxC2-vzBVU-_4AuOhKhA_FknpcrlTPaQq0lBbx7mzEKeHR1Q",
    altText: "Medical Device Testing",
    href: "https://sites.google.com/view/aa-ncv-project/home"
  },
  {
    id: 3,
    title: "Medical Data Storage and Management System for Hospitals",
    description: [
      "Designed secure user access control with distinct roles (Doctors, Patients, Admins) for a clinical research platform, ensuring data privacy and compliance."
    ],
    types: ["Software", "Biomedical"],
    tags: ["Security", "System Design", "Healthcare"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjfBBea_6oiIJl8EJnojU9e7al-704r9Uqq-pxKrC95EJXrfEfNdMgVtoPmdWcVT_nOjMJeEhmqK5x_ejjp6SMhSQzGsltr2AymNFf0OQaJgWG4tccRqdIOeAZWCgzZ-j8iVLZqiWyMUUc_RtE2Cmaeu6kl4-FnPMIf9rFD4I_Obip2CQlckCcdnC3cXaxMqxJysLetDbwU3ndyzwrJqU00uitHM5eAyLqtd5M6-zFNfRnAsA2lk6Pk_hYQnvkR4swSzwdBQjihMpd",
    altText: "Secure Access System",
    href: "https://sites.google.com/view/hospital-system-nazmul-audri/home"
  },
  {
    id: 4,
    title: "Optimizing Hydrogen Production Efficiency at Fuel Stations",
    description: [
      "Independent master's course project completed over two months",
      "Focused on controlling production rates to improve energy efficiency in electrolytic hydrogen production systems",
      "Covered the full project lifecycle from initial concept development through final results"
    ],
    types: ["Software", "Mathematical Model", "Dynamic System"],
    tags: ["Java", "Computer Vision", "Hardware Integration"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfi0aNgZ02Cxgg5O_Nh3n3kVK8jjfeQcEQdFedxsXDS7-vOSHzc3vW_tKiNzl7XLd2PAjnzjXzMy2p_286hFC6eUaLedBP8GgvGB_fzSeTo6b5Fcu_nsRAYokhVcEsVPtw4KQAgnKW9T2YuhQ0yjFM1wjY2DDe_dBwTdp6tX_Rbxl_lztL12x1lPVuwexziP4TOO9Kh_BlKTQoQSsr5lzHEGteKZnbIdGAzeTgu0IuIt_Wot64Eaonvsd5vD8LzrPKYNOeeNgA_Sq8",
    altText: "Data Visualization",
    href: "https://github.com/nazmul057/Electrolytic_Hydrogen_Production_Optimization"
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
      "Contributed to maintaining and updating engineering requirements and system specifications for an ECG telemedicine platform.",
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
  { category: "Languages", items: ["Python (Django, Flask)", "C#", "Java", "C++", "C"] },
  { category: "Tools & Platforms", items: ["Docker", "Airflow", "LangGraph", "AWS Data Pipeline", "GCP", "Git"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { category: "Engineering & Design", items: ["MATLAB", "MSC ADAMS", "SolidWorks"] },
  { category: "Hardware & Embedded", items: ["Raspberry Pi", "Arduino", "PIC Microcontrollers", "I2C Protocol", "MPU6050", "Sensors"] },
  { category: "OS", items: ["Ubuntu Server", "Ubuntu", "Raspberry Pi OS", "Windows"] }
];
