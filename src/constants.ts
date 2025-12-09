import { ExperienceItem, Project, Skill } from './types';

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCMyug9YT0psdG1j2Z-LzsOZuOc2gXBZlgdC9KRmvXkot30PblFnkIjBYutXm9SzNcMx_QU6Gy6Y03kndagbewEDbZG6tf7lDHOwfZZUGqOs9VQEsGnoyC-jG-NOOvWt_uuxSYMEbpNkpZ3S0bu2LWPn4fN6eU8cn4KoZn8o5M__hOpOi6TaTr-nldDJBoObac-3mgT2Bp8F9YM31cW-xqQdk6u0DlvBNXRsEqdt8EEugbX7rb4yluY6wxVFfdqY-NI8-Oom66DmLrq";
export const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCJjjUubISPk8ThBLIfhumnO902QJd74PUhvahdgY6MKzFZ2-l-FnYSDY_USvQMMv03XJGgh11IEMwYUlMkEJTiABWuriXwAOrjarNVGgnoDx15_F7VKPVQkTIeJi9sN9u8v8FwWCn_-9doYxHMme1So-nx6jkB4uDHxBB1WiPjmrbPYiRaAkmGg2MUhQh21omhmReJy5sdOzo37GEHUQ8c4k1aiyeK81yCYrqMizaCbvIC8eCcUhVouEvgn0GqXq1hq1fo-gvoUOZu";

// Projects derived from Professional Experience for display purposes
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Real-Time ECG Analysis Backend",
    description: "Built a backend using Python (Flask) and MongoDB supporting continuous data flow, live visualization, and storage for a Holter monitoring project. Hosted over 150 sessions.",
    tags: ["Python", "Flask", "MongoDB", "GCP"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8k7e0y5JJgQ0qwm_yRLJ33VUpyBf1Y5ESVFkqlXZGMbH7RnLQYFEts-043E_y1gYkTv-dFhzRwt7XzSmWRgBA0WHgwvsZzYQ4s6CC9QZcNdGPHBXD4pzoczDt1j31VIEcwNjQejpfXz_iqlrAsOy1CHal3IuPQ8z3_7D-3flw_19R-R__Le3zQUTW0ft1NfNK3bDRwlbHvi93SZLYpQo4JAoFircu4rtktQy-GN0sbIRojofCGEwutSUSE4rJXWmiyyivypR3FiuA",
    altText: "ECG Signal Analysis"
  },
  {
    id: 2,
    title: "Automated NCV Testing Device",
    description: "Designed and implemented real-time signal processing algorithms in C# and automated USB-based communication, reducing manual intervention by over 70%.",
    tags: ["C#", "Signal Processing", "USB Communication", "Automation"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBr1KL-TcwtJDJgNvpDzRh1FtjWN3BFVEa02VXx0XDztZDX0JTpcA5WH3c-zAhhGhb3YG34QLNCgRA07YMYwSVJuszf1kt3F9PW_X_rTeEuwtphmEGurD5YK4MwOSmZrMG3lzRIhRrmSXAo28yFSClAC0gL982Qhtk65fCUhXfvHbWj8rMcz80RqITzy4ZgwfNE1IF1BfEEkwT4rF3bjNQFsXRbaeNGbxC2-vzBVU-_4AuOhKhA_FknpcrlTPaQq0lBbx7mzEKeHR1Q",
    altText: "Medical Device Testing"
  },
  {
    id: 3,
    title: "Foot Pressure Measurement Software",
    description: "Updated Java-based software with computer vision techniques for dynamic foot pressure measurement, improving scientific accuracy and reducing machine height by 65%.",
    tags: ["Java", "Computer Vision", "Hardware Integration"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfi0aNgZ02Cxgg5O_Nh3n3kVK8jjfeQcEQdFedxsXDS7-vOSHzc3vW_tKiNzl7XLd2PAjnzjXzMy2p_286hFC6eUaLedBP8GgvGB_fzSeTo6b5Fcu_nsRAYokhVcEsVPtw4KQAgnKW9T2YuhQ0yjFM1wjY2DDe_dBwTdp6tX_Rbxl_lztL12x1lPVuwexziP4TOO9Kh_BlKTQoQSsr5lzHEGteKZnbIdGAzeTgu0IuIt_Wot64Eaonvsd5vD8LzrPKYNOeeNgA_Sq8",
    altText: "Data Visualization"
  },
  {
    id: 4,
    title: "Clinical Data Access Control System",
    description: "Designed secure user access control with distinct roles (Doctors, Patients, Admins) for a clinical research platform, ensuring data privacy and compliance.",
    tags: ["Security", "System Design", "Healthcare"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjfBBea_6oiIJl8EJnojU9e7al-704r9Uqq-pxKrC95EJXrfEfNdMgVtoPmdWcVT_nOjMJeEhmqK5x_ejjp6SMhSQzGsltr2AymNFf0OQaJgWG4tccRqdIOeAZWCgzZ-j8iVLZqiWyMUUc_RtE2Cmaeu6kl4-FnPMIf9rFD4I_Obip2CQlckCcdnC3cXaxMqxJysLetDbwU3ndyzwrJqU00uitHM5eAyLqtd5M6-zFNfRnAsA2lk6Pk_hYQnvkR4swSzwdBQjihMpd",
    altText: "Secure Access System"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "Research Assistant",
    organization: "Qatar University (Machine Learning Group)",
    period: "Sep 2022 – Aug 2023",
    type: "work",
    details: "Built a real-time ECG signal analysis backend using Python (Flask) and MongoDB. Designed secure user access control improving data privacy. Co-developed standardized JSON structures reducing API miscommunications by 90%. Created scalable database schema for 500GB+ ECG data. Integrated voice recording and deployed backend on GCP with automated testing scripts.",
    tags: ["Python", "Flask", "MongoDB", "GCP", "System Design"]
  },
  {
    id: 2,
    title: "Research Engineer",
    organization: "University of Dhaka (Biomedical Physics & Technology)",
    period: "Nov 2021 – Aug 2023",
    type: "work",
    details: "Designed real-time signal processing algorithms in C#, automating 12-lead ECG data acquisition. Enhanced USB communication for NCV testing devices. Applied computer vision in Java for foot pressure measurement. Built custom debugging tools and collaborated with multidisciplinary teams for system integration.",
    tags: ["C#", "Java", "Computer Vision", "Embedded Systems", "Automation"]
  },
  {
    id: 3,
    title: "Master of Engineering in Systems Design Engineering",
    organization: "University of Waterloo, Canada",
    period: "Sep 2023 – Dec 2024",
    type: "education",
    details: "Focused on development processes, design effectiveness, and systems methodology.",
    gpa: "87.12/100",
    tags: ["Systems Design", "Engineering"]
  },
  {
    id: 4,
    title: "Bachelor of Science in Biomedical Engineering",
    organization: "Military Institute of Science and Technology (MIST), Bangladesh",
    period: "Feb 2017 – Apr 2021",
    type: "education",
    details: "President of Einthoven Club. 2nd Place in Project Showcasing at Biomedical Engineering Fest 2018.",
    gpa: "3.88/4.00",
    honors: "Dean's List",
    tags: ["Biomedical Engineering", "Leadership"]
  },
  {
    id: 5,
    title: "Data Engineering",
    organization: "Deeplearning.Ai (Coursera)",
    period: "Completed (September 2025)",
    type: "certification",
    details: "Gained hands-on experience with AWS-based data pipelines.",
    tags: ["AWS", "Data Pipelines", "Apache Airflow"]
  },
  {
    id: 6,
    title: "Foundation: Introduction to LangGraph",
    organization: "LangChain Academy",
    period: "Completed",
    type: "certification",
    details: "Learned to build AI agents with memory and Model Context Protocol.",
    tags: ["AI Agents", "LangGraph"]
  },
  {
    id: 7,
    title: "Algorithms, Part 1",
    organization: "Princeton University (Coursera)",
    period: "Completed",
    type: "certification",
    details: "Evaluations on Union-Find, Analysis of Algorithms, Stacks/Queues, Sorting, BSTs, Hash tables.",
    tags: ["Algorithms", "Data Structures"]
  },
  {
    id: 8,
    title: "Software Development Processes and Methodologies",
    organization: "University of Minnesota (Coursera)",
    period: "Completed",
    type: "certification",
    tags: ["Software Engineering", "Agile"]
  },
  {
    id: 9,
    title: "Lean Six Sigma Yellow Belt",
    organization: "Six Sigma Academy Amsterdam (Udemy)",
    period: "Completed",
    type: "certification",
    tags: ["Process Improvement", "Six Sigma"]
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
