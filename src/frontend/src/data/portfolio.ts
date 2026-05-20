// ============================================================
// PORTFOLIO DATA — Edit these arrays to customize your portfolio
// ============================================================

export const PERSONAL = {
  name: "Omkar Solat",
  title: "AI-ML Student",
  roles: [
    "AI-ML Student",
    "Future ML Engineer",
    "Python Developer",
    "Problem Solver",
  ],
  intro:
    "BTech CSE student specializing in Artificial Intelligence and Machine Learning. I build intelligent systems, craft modern web applications, and solve real-world problems through the power of data and algorithms.",
  email: "omkar.solat@example.com",
  github: "https://github.com/omkarsolat",
  linkedin: "https://linkedin.com/in/omkarsolat",
  location: "India",
  resumeUrl: "#",
};

export interface Skill {
  name: string;
  icon: string;
  level: "current" | "future";
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "🐍", level: "current" },
      { name: "C Programming", icon: "⚙️", level: "current" },
      { name: "JavaScript", icon: "✨", level: "current" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", icon: "🌐", level: "current" },
      { name: "CSS3", icon: "🎨", level: "current" },
      { name: "React", icon: "⚛️", level: "future" },
      { name: "Tailwind CSS", icon: "💨", level: "future" },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "NumPy", icon: "🔢", level: "current" },
      { name: "Pandas", icon: "🐼", level: "current" },
      { name: "Scikit-learn", icon: "🤖", level: "current" },
      { name: "Deep Learning", icon: "🧠", level: "future" },
      { name: "TensorFlow", icon: "🔥", level: "future" },
      { name: "PyTorch", icon: "⚡", level: "future" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "🗄️", level: "current" },
      { name: "DBMS", icon: "📊", level: "current" },
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      { name: "OOP", icon: "🏗️", level: "current" },
      { name: "Data Structures", icon: "🌳", level: "current" },
      { name: "Git", icon: "🔀", level: "current" },
      { name: "VS Code", icon: "💻", level: "current" },
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  gradient: string;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "Conversational AI assistant powered by NLP techniques. Understands context, handles multi-turn conversations, and provides intelligent responses using Python and transformer-based models.",
    techStack: ["Python", "NLTK", "Flask", "JavaScript"],
    githubUrl: "https://github.com/omkarsolat/ai-chatbot",
    demoUrl: "#",
    gradient: "from-cyan-500/20 to-blue-600/20",
    accentColor: "#00d4ff",
  },
  {
    id: 2,
    title: "Weather Intelligence App",
    description:
      "Real-time weather forecasting app with ML-based prediction enhancements. Aggregates data from multiple weather APIs and visualizes trends with interactive charts.",
    techStack: ["Python", "Pandas", "OpenWeather API", "HTML/CSS"],
    githubUrl: "https://github.com/omkarsolat/weather-app",
    demoUrl: "#",
    gradient: "from-blue-500/20 to-indigo-600/20",
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    title: "Smart Expense Tracker",
    description:
      "Full-stack expense management system with ML-powered spending pattern analysis. Auto-categorizes transactions and generates predictive budget insights using clustering algorithms.",
    techStack: ["Python", "Scikit-learn", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/omkarsolat/expense-tracker",
    demoUrl: "#",
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "#a855f7",
  },
  {
    id: 4,
    title: "Resume Analyzer",
    description:
      "Intelligent resume parsing and scoring system. Extracts key information using NLP, compares candidates against job descriptions, and generates ATS compatibility scores.",
    techStack: ["Python", "spaCy", "Pandas", "Flask"],
    githubUrl: "https://github.com/omkarsolat/resume-analyzer",
    demoUrl: "#",
    gradient: "from-emerald-500/20 to-teal-600/20",
    accentColor: "#10b981",
  },
  {
    id: 5,
    title: "ML Prediction Engine",
    description:
      "End-to-end machine learning pipeline for classification and regression tasks. Features automated feature engineering, model selection via cross-validation, and a clean prediction API.",
    techStack: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/omkarsolat/ml-prediction",
    demoUrl: "#",
    gradient: "from-orange-500/20 to-red-600/20",
    accentColor: "#f97316",
  },
];

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: "education" | "milestone" | "skill";
}

export const LEARNING_JOURNEY: TimelineItem[] = [
  {
    id: 1,
    date: "2022",
    title: "Started BTech CSE",
    subtitle: "B.Tech in Computer Science & Engineering",
    description:
      "Began my journey in Computer Science with a specialization in AI and Machine Learning. Laid solid foundations in programming, algorithms, and data structures.",
    icon: "🎓",
    type: "education",
  },
  {
    id: 2,
    date: "2022",
    title: "Mastered Python & C",
    subtitle: "Core Programming Languages",
    description:
      "Gained strong command over Python and C programming. Completed extensive practice in DSA, OOP principles, and problem-solving.",
    icon: "🐍",
    type: "skill",
  },
  {
    id: 3,
    date: "2023",
    title: "Entered the AI/ML World",
    subtitle: "Machine Learning Fundamentals",
    description:
      "Dove into machine learning with NumPy, Pandas, and Scikit-learn. Built first supervised learning models and explored data preprocessing pipelines.",
    icon: "🤖",
    type: "milestone",
  },
  {
    id: 4,
    date: "2023",
    title: "First Real Projects",
    subtitle: "Applied Engineering",
    description:
      "Built practical projects including an AI chatbot and weather prediction app. Experienced the full lifecycle from data collection to deployment.",
    icon: "🚀",
    type: "milestone",
  },
  {
    id: 5,
    date: "2024",
    title: "Database & Web Skills",
    subtitle: "Full-Stack Capabilities",
    description:
      "Expanded into MySQL, DBMS, HTML/CSS, and JavaScript. Integrated frontend interfaces with Python backends to build complete data-driven applications.",
    icon: "🌐",
    type: "skill",
  },
  {
    id: 6,
    date: "2025+",
    title: "Deep Learning Ahead",
    subtitle: "Next: TensorFlow, PyTorch, React",
    description:
      "On the horizon — deep learning frameworks, neural network architectures, and modern React development. Ready to go deeper into AI engineering.",
    icon: "🧠",
    type: "milestone",
  },
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  badgeColor: string;
  platformColor: string;
  icon: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    date: "2024",
    badgeColor: "from-blue-500 to-cyan-500",
    platformColor: "#0056D2",
    icon: "🧠",
  },
  {
    id: 2,
    title: "Python for Data Science",
    issuer: "IBM",
    platform: "Coursera",
    date: "2023",
    badgeColor: "from-cyan-500 to-teal-500",
    platformColor: "#0056D2",
    icon: "🐍",
  },
  {
    id: 3,
    title: "The Complete Python Bootcamp",
    issuer: "Jose Portilla",
    platform: "Udemy",
    date: "2023",
    badgeColor: "from-purple-500 to-violet-600",
    platformColor: "#A435F0",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Google Data Analytics",
    issuer: "Google",
    platform: "Google",
    date: "2024",
    badgeColor: "from-emerald-500 to-green-600",
    platformColor: "#34A853",
    icon: "📊",
  },
  {
    id: 5,
    title: "SQL for Data Science",
    issuer: "UC Davis",
    platform: "Coursera",
    date: "2023",
    badgeColor: "from-orange-500 to-amber-500",
    platformColor: "#0056D2",
    icon: "🗄️",
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    issuer: "Angela Yu",
    platform: "Udemy",
    date: "2024",
    badgeColor: "from-rose-500 to-pink-600",
    platformColor: "#A435F0",
    icon: "🌐",
  },
];

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  color: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/omkarsolat",
    icon: "github",
    color: "hover:border-foreground/50",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/omkarsolat",
    icon: "linkedin",
    color: "hover:border-blue-400/50",
  },
  {
    label: "Email",
    url: "mailto:omkar.solat@example.com",
    icon: "mail",
    color: "hover:border-accent/50",
  },
];
