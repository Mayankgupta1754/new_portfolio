export const profileData = {
  name: 'Mayank Gupta',
  title: 'AI Engineer | Building agents, RAG systems, and LLM products.',
  tagline: 'A curated space for agentic AI, LLM engineering, and applied machine learning — with a strong analytics foundation.',
  profileImage: 'https://customer-assets.emergentagent.com/job_6e45107b-7f1c-49cf-95db-7b815b8d2de1/artifacts/6hw1f7ll_1736653887401.jpg',
  email: 'themayankgupta17@gmail.com',
  social: {
    github: 'https://github.com/Mayankgupta1754',
    linkedin: 'https://www.linkedin.com/in/mayank-gupta-218636253/',
    email: 'mailto:themayankgupta17@gmail.com'
  },
  resumeUrl: 'https://drive.google.com/file/d/1LWdMyWcaSYb_sQRuWsQFyAGBa7Z68VhP/view?usp=sharing'
};

export const aboutData = {
  bio: 'Computer Science and Engineering graduate from VIT Vellore with hands-on experience in Python, Data Science, Machine Learning, Generative AI, LLMs, and Agentic AI. I have built end-to-end AI projects involving LLM applications, RAG, AI agents, data processing, and automation, with a strong foundation in developing and deploying practical AI solutions.',
  highlights: [
    'Built multi-LLM, multi-agent, and RAG-style products spanning orchestration, evaluation, and deployment',
    'Hands-on with LangChain, LangGraph, CrewAI, OpenAI Agents SDK, Hugging Face, and OpenAI APIs',
    'Strong in Python, SQL, machine learning, and end-to-end data analysis when models need grounded inputs',
    'Shipped agent workflows for deliberation, product discovery, and natural-language analytics',
    'Mentored 250+ students through workshops on AI, ML, and Git as Technical Head of TAM-VIT'
  ],
  interests: [
    'Generative AI',
    'LLM Engineering',
    'Agentic AI',
    'RAG & Vector Search',
    'Machine Learning',
    'Multimodal AI',
    'Data Analysis'
  ]
};

export const projectsData = [
  {
    id: 10,
    title: 'The AI Group Chat — Multi-LLM Deliberation System',
    description: 'A multi-model orchestration pipeline that runs GPT, Claude, Gemini, and DeepSeek concurrently through OpenRouter, then uses an independent judge LLM to solve problems, evaluate heterogeneous outputs, and decide the final answer with consensus as supporting evidence rather than majority voting. Includes image-to-text transcription, batch question decomposition, LaTeX rendering, Answer/Solve modes, and production deployment on Vercel.',
    technologies: ['Python', 'OpenRouter', 'AsyncIO', 'LLMs', 'OpenAI Agents SDK'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/theaigroupchat',
    github: 'https://github.com/Mayankgupta1754/theaigroupchat'
  },
  {
    id: 11,
    title: 'Shoppiomart Product Finder — Multi-Agent Product Discovery',
    description: 'A CrewAI multi-agent pipeline that finds live products from Google Shopping India and writes store-ready listing content. A sequential Scout → Writer → Dispatcher workflow uses Serper so agents cannot invent products, prices, or URLs, then generates descriptions, price bands, target audience, and Pushover mobile notifications.',
    technologies: ['Python', 'CrewAI', 'Serper', 'OpenAI', 'Pushover'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/shoppiomart_recommender',
    github: 'https://github.com/Mayankgupta1754/shoppiomart_recommender'
  },
  {
    id: 12,
    title: 'Data Analyst Agent',
    description: 'A LangGraph multi-agent analyst that lets users upload CSVs and run natural-language data analysis. A worker–evaluator loop automates EDA, correlation, outlier, and trend work, then produces charts, HTML reports, and downloadable Jupyter notebooks inside a session-based sandbox with a Gradio interface.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Gradio', 'Pandas'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/personal_data_analyst',
    github: 'https://github.com/Mayankgupta1754/personal_data_analyst'
  },
  {
    id: 1,
    title: 'Retail Sales Analytics Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales, profit, and order trends — with custom metrics like Net Sales and Profit Margin, dynamic filtering by product, region, and time, and insights that surface top/bottom performers to guide pricing and discount strategy.',
    technologies: ['Power BI', 'SQL', 'Excel', 'DAX', 'Data Cleaning', 'Data Visualization'],
    category: 'Data Analytics',
    image: '/assests/dash.jpg',
    link: 'https://autonomousedgeintelligence.notion.site/Retail-Sales-Analysis-Dashboard-with-Power-BI-26e8af91f3af8063bf4ffaad22916c5a?pvs=74',
    github: 'https://autonomousedgeintelligence.notion.site/Retail-Sales-Analysis-Dashboard-with-Power-BI-26e8af91f3af8063bf4ffaad22916c5a?pvs=74'
  },
  {
    id: 2,
    title: 'Inventory Demand & Supply Analysis',
    description: 'End-to-end analytics pipeline tracking demand, availability, and revenue impact. Built interactive Power BI dashboards exposing KPIs like demand, supply shortage, profit, and loss, with DAX measures (Average Demand, Total Loss) and SQL-based cleaning, joins, and validation ensuring data accuracy across environments.',
    technologies: ['Power BI', 'SQL', 'Microsoft SQL Server', 'MySQL', 'DAX', 'Data Modeling'],
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    link: 'https://autonomousedgeintelligence.notion.site/Power-Bi-Project-Datasource-MYSQL-Database-SQL-Server-3338af91f3af80e4a1efd54457701cab',
    github: 'https://autonomousedgeintelligence.notion.site/Power-Bi-Project-Datasource-MYSQL-Database-SQL-Server-3338af91f3af80e4a1efd54457701cab'
  },
  {
    id: 3,
    title: 'Agriculture Data Analytics Pipeline & Dashboard',
    description: 'End-to-end cloud data pipeline integrating AWS S3, Snowflake, and Power BI for agricultural data analysis. Performed cleaning, transformation, and feature engineering in Snowflake SQL, then built interactive Power BI dashboards tracking rainfall, temperature, humidity, and yield trends — all profiled and validated for accuracy.',
    technologies: ['Power BI', 'Snowflake', 'AWS S3', 'SQL', 'Data Pipeline', 'Cloud Analytics'],
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    link: 'https://autonomousedgeintelligence.notion.site/End-to-End-Data-Pipeline-Analytics-using-AWS-S3-Snowflake-Power-BI-3358af91f3af80fda1e7ce48e05a79a9?pvs=73',
    github: 'https://autonomousedgeintelligence.notion.site/End-to-End-Data-Pipeline-Analytics-using-AWS-S3-Snowflake-Power-BI-3358af91f3af80fda1e7ce48e05a79a9?pvs=73'
  },
  {
    id: 9,
    title: 'Banking Analytics Dashboard using SQL & Power BI',
    description: 'End-to-end banking analytics project covering synthetic data generation, SQL cleaning, LEFT JOIN integration, Power Query transformations, and DAX KPI modeling to surface customer behavior, transaction activity, account performance, inactive accounts, and monthly financial trends.',
    technologies: ['Power BI', 'SQL Server', 'SQL', 'Power Query', 'DAX', 'Data Cleaning'],
    category: 'Data Analytics',
    image: '/assests/banking-analytics-dashboard.png',
    link: 'https://autonomousedgeintelligence.notion.site/Banking-Analytics-Dashboard-36b8af91f3af8086be37c014b4354da7',
    github: 'https://github.com/Mayankgupta1754/Banking_Analytics_Dashboard'
  },
  {
    id: 4,
    title: 'Suspicious Web Threat Interaction Analysis',
    description: 'Behavioral data analysis on web traffic logs to flag suspicious interactions. Built the full pipeline — cleaning, EDA, feature engineering, and visualization — to extract patterns that signal threats.',
    technologies: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Visualization', 'Statistical Analysis'],
    category: 'Data Analytics',
    image: '/assests/cyber.jpg',
    link: 'https://autonomousedgeintelligence.notion.site/Cybersecurity-Suspicious-Web-Threat-Interactions-26d8af91f3af80ddb300d26de3dfce23?pvs=74',
    github: 'https://www.kaggle.com/code/mayankgupta17/cybersecurity-suspicious-web-threat-interactions'
  },
  {
    id: 5,
    title: 'CyberJett – NLP-Based Voice Assistant',
    description: 'A voice-controlled AI assistant built using NLP and deep learning, capable of understanding intents, responding via speech, and controlling hardware through Arduino.',
    technologies: ['Python', 'NLP', 'TensorFlow', 'Keras', 'Arduino', 'Speech Recognition'],
    category: 'AI & NLP',
    image: '/assests/nlp.jpg',
    link: 'https://cyberjettvoiceassistant.notion.site/CyberJett-Voice-Based-AI-Assistant-24291bf37816802d8e8ef6ad00f0b2ae',
    github: 'https://github.com/Mayankgupta1754/CyberJett_Voice_Based_AI_Assistant'
  },
  {
    id: 6,
    title: 'Autonomous Firefighting Robot',
    description: 'A smart autonomous robot capable of detecting and extinguishing fire using sensors, computer vision, and real-time motor control.',
    technologies: ['Python', 'OpenCV', 'Arduino', 'Raspberry Pi', 'Embedded Systems', 'Robotics'],
    category: 'Robotics & AI',
    image: 'assests/robot.jpg',
    link: 'https://autonomousedgeintelligence.notion.site/Autonomous-Firefighting-Robot-with-Human-Detection-2658af91f3af80c19389ebb6b9198f52?pvs=74',
    github: 'https://autonomousedgeintelligence.notion.site/Autonomous-Firefighting-Robot-with-Human-Detection-2658af91f3af80c19389ebb6b9198f52?pvs=74'
  },
  {
    id: 7,
    title: 'CamJett – Face Recognition Smart Door Lock',
    description: 'An intelligent door security system using face recognition for access control, integrated with hardware locking mechanisms and access logging.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Arduino', 'Computer Vision', 'IoT'],
    category: 'AI + IoT',
    image: '/assests/face.webp',
    link: '#',
    github: '#'
  },
  {
    id: 8,
    title: 'MAGIE – Manual Autonomous Gyro-Integrated Explorer',
    description: 'MAGIE is a dual-mode autonomous robot designed for fire evacuation and hazard monitoring, capable of navigating uneven terrain while detecting humans, animals, and potential fire risks in dangerous environments.',
    technologies: ['Python', 'OpenCV', 'Raspberry Pi' , 'Computer Vision', 'IoT', 'ReactJS'],
    category: 'AI + IoT + Web',
    image: '/assests/magie.png',
    link: 'https://magie-git-main-mayankgupta1754s-projects.vercel.app/',
    github: 'https://github.com/Mayankgupta1754/MAGIE'
  }

];

export const skillsData = {
  technical: [
    { name: 'Python', level: 92 },
    { name: 'Generative AI', level: 90 },
    { name: 'Agentic AI', level: 88 },
    { name: 'LLM Engineering', level: 88 },
    { name: 'Machine Learning', level: 86 },
    { name: 'RAG', level: 85 },
    { name: 'SQL', level: 85 },
    { name: 'Data Analysis', level: 84 }
  ],
    tools: [
  'Python',
  'Java',
  'SQL',
  'Machine Learning',
  'Scikit-learn',
  'TensorFlow',
  'OpenCV',
  'Feature Engineering',
  'Model Evaluation',
  'Cross-Validation',
  'Hyperparameter Tuning',
  'Generative AI',
  'LLMs',
  'Prompt Engineering',
  'Transformers',
  'Hugging Face',
  'OpenAI APIs',
  'Multimodal AI',
  'Function Calling',
  'Structured Outputs',
  'RAG',
  'Vector Embeddings',
  'Vector Databases',
  'Fine-Tuning',
  'QLoRA',
  'LLM Evaluation',
  'Model Selection',
  'AI Agents',
  'Multi-Agent Systems',
  'OpenAI Agents SDK',
  'LangChain',
  'LangGraph',
  'CrewAI',
  'AutoGen',
  'MCP',
  'Pandas',
  'NumPy',
  'EDA',
  'Statistical Analysis',
  'Hypothesis Testing',
  'Power BI',
  'DAX',
  'Power Query',
  'Excel',
  'Matplotlib',
  'Seaborn',
  'Plotly',
  'MySQL',
  'SQL Server',
  'Snowflake',
  'AWS S3',
  'Docker',
  'Git',
  'GitHub',
  'Jupyter Notebook',
  'Google Colab',
  'VS Code',
  'Gradio'
],

  softSkills: [
    'Problem Solving', 'Communication', 'Data Storytelling',
    'Stakeholder Management', 'Critical Thinking', 'Mentoring'
  ]
};

export const experienceData = [
  {
  id: 1,
  company: 'PROJFUEL - IT Solutions Agency',
  position: 'Data Science Intern',
  duration: 'June 2025 - July 2025',
  location: 'On-site',
  description: 'Completed a one-month Data Science internship working on end-to-end ML and computer vision solutions.',
  achievements: [
    "Acquired and delivered a client-based AI face recognition attendance system with real-time automated logging",
    "Built an end-to-end computer vision pipeline using Python and OpenCV for image capture, model training, and live inference",
    "Performed data cleaning, preprocessing, EDA, and implemented ML models on real-world datasets",
    "Generated structured attendance reports with a user-friendly desktop interface for automated and manual tracking",
    "Maintained professional documentation and followed version control"
  ],
  certificates: [
    { title: 'Offer Letter', link: 'https://drive.google.com/file/d/1x4SGywdtbhS3viFBlbzau9Q4WSFPmGo2/view?usp=sharing' },
    { title: 'Internship Certificate', link: 'https://drive.google.com/file/d/1bDjlCTgQPH9j-mSKCNUTgrMTsC6T682-/view?usp=sharing' }
  ],
  github: 'https://github.com/Mayankgupta1754/attendance_management'
},
  {
    id: 2,
    company: 'Pantech Solutions',
    position: 'AI & Machine Learning Intern',
    duration: 'Dec 2023 - March 2024',
    location: 'Remote',
    description: 'Worked on hands-on projects across AI, Machine Learning, and Python, focusing on real-world datasets and practical problem-solving.',
    achievements: [
      'Completed 25+ projects across AI, ML, and Python',
      'Gained strong practical exposure to real-world datasets',
      'Improved understanding of end-to-end ML workflows'
    ],
    certificates: [
      { title: 'AI Certificate', link: 'https://drive.google.com/file/d/1h1eSsy75vcpiTY5kCMRu5l4KGhW9274l/view' },
      { title: 'ML Certificate', link: 'https://drive.google.com/file/d/1Pf4ETUJ2I1IjZXCMFA4iWJDXjan214kD/view' },
      { title: 'Python Certificate', link: 'https://drive.google.com/file/d/1KOPyWCn8y9QM7BAoBRWwrhJzCsh3pius/view' },
      { title: 'Offer Letter', link: 'https://drive.google.com/file/d/1bdy6HtORPLVUHKqvv3de1P5_vDiBR9KN/view?usp=sharing&usp=embed_facebook' }
    ],
    github: 'https://github.com/dummy/pantech-projects'
  },
  {
    id: 3,
    company: 'The AI ML Club, VIT Vellore',
    position: 'Technical Head',
    duration: '2024 - 2025',
    location: 'VIT Vellore',
    description: 'Led technical initiatives, workshops, and mentoring activities to grow the AI/ML community within the university.',
    achievements: [
      'Mentored 250+ students',
      'Conducted workshops on Git, ML, and AI fundamentals',
      'Organized and led technical events and sessions'
    ],
    certificates: []
  }
];


export const educationData = [
  {
    id: 1,
    institution: 'Vellore Institute of Technology, Vellore',
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    duration: '2022 – Present',
    gpa: '8.76',
    achievements: [
      'Active member of AI/ML and technical clubs',
      'Led multiple academic and personal projects',
      'Participated and won hackathons'
    ]
  },
  {
    id: 2,
    institution: 'Jodhamal Public School, Jammu',
    degree: 'Higher Secondary Education',
    field: 'Science Stream',
    duration: '2020 – 2022',
    tenthPercentage: '91%',
    twelfthPercentage: '92.5%',
    achievements: [
      'Graduated with high distinction',
      'Active participant in science and tech fairs',
      'Received awards for academic excellence'
    ]
  }
];

export const blogData = [
  {
    id: 4,
    title: 'Ethical Hacking Learnings',
    subtitle: 'Notes from ZSecurity course',
    category: 'Cyber Security',
    readTime: '15 hrs',
    date: '2024',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=600&fit=crop',
    color: 'from-red-500 to-pink-500',
    link: 'https://autonomousedgeintelligence.notion.site/Ethical-Hacking-2cd8af91f3af8087913fc28a79e5253f'
  },
  {
    id: 5,
    title: 'Data Science Deep Dive',
    subtitle: 'Comprehensive notes from Udemy course',
    category: 'Data Science',
    readTime: '85 hrs',
    date: '2024',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://autonomousedgeintelligence.notion.site/Data-Scientist-26a8af91f3af802f8249f82eaed4cc59?pvs=74'
  },
  {
    id: 6,
    title: 'The Ultimate Cheat Sheets',
    subtitle: 'My curated reference compilation',
    category: 'Reference',
    readTime: '50 hrs',
    date: '2024',
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=600&fit=crop',
    color: 'from-yellow-500 to-orange-500',
    link: 'https://autonomousedgeintelligence.notion.site/Cheat-Sheets-2608af91f3af80a5b3bdf5ded89621fb'
  },
  {
    id: 7,
    title: 'Data Analytics Mastery',
    subtitle: 'Course learnings & practical insights',
    category: 'Data Analytics',
    readTime: '95 hrs',
    date: '2024',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=600&fit=crop',
    color: 'from-purple-500 to-violet-500',
    link: 'https://autonomousedgeintelligence.notion.site/Data-Analyst-24c8af91f3af80ed8c2be839d3ba4751'
  },
  {
    id: 8,
    title: 'CyberJett — Voice AI Assistant',
    subtitle: 'Project deep-dive: NLP + Hardware integration',
    category: 'Project Notes',
    readTime: '20 min',
    date: '2024',
    cover: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=600&fit=crop',
    color: 'from-green-500 to-emerald-500',
    link: 'https://cyberjettvoiceassistant.notion.site/CyberJett-Voice-Based-AI-Assistant-24291bf37816802d8e8ef6ad00f0b2ae'
  }
];

export const certificatesData = [
  {
    id: 0,
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    description: 'Foundational certification covering Azure AI services, machine learning concepts, computer vision, NLP, and generative AI on Azure.',
    date: '2025',
    credentialId: 'AI-900',
    link: 'https://drive.google.com/file/d/180F_PdJ6D-7iVekVSZ1ex_ig4AJPz1Mz/view?usp=sharing',
    skills: ['Azure AI', 'Generative AI', 'Machine Learning', 'NLP', 'Computer Vision']
  },
  {
    id: 1,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    description: 'Comprehensive course covering machine learning algorithms, data analysis, and practical applications.',
    date: '2023',
    credentialId: 'ML-123456',
    skills: ['Machine Learning', 'Python', 'Data Analysis', 'Algorithms']
  },
  {
    id: 2,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    date: '2023',
    credentialId: 'AWS-789012',
    skills: ['Cloud Computing', 'AWS', 'System Design', 'DevOps']
  },
  {
    id: 3,
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    description: 'Advanced course on neural networks, convolutional networks, and sequence models.',
    date: '2024',
    credentialId: 'DL-345678',
    skills: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'Computer Vision']
  }
];

export const contactData = {
  email: 'themayankgupta17@gmail.com',
  phone: '+91 9103087319',
  location: 'Vellore, India',
  availability: 'Open to new opportunities'
};
export const knowledgeData = [
  {
    id: 1,
    title: 'The AI Group Chat — Multi-LLM Deliberation',
    description: 'Concurrent multi-model orchestration with an independent judge LLM for adjudication, plus multimodal question processing.',
    technologies: ['Python', 'OpenRouter', 'AsyncIO', 'LLMs', 'OpenAI Agents SDK'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/theaigroupchat',
    github: 'https://github.com/Mayankgupta1754/theaigroupchat'
  },
  {
    id: 2,
    title: 'Shoppiomart Product Finder',
    description: 'CrewAI sequential agents for grounded Google Shopping discovery and catalog generation with Serper and Pushover.',
    technologies: ['Python', 'CrewAI', 'Serper', 'OpenAI', 'Pushover'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/shoppiomart_recommender',
    github: 'https://github.com/Mayankgupta1754/shoppiomart_recommender'
  },
  {
    id: 3,
    title: 'Data Analyst Agent',
    description: 'LangGraph worker–evaluator loop for natural-language CSV analysis, charts, HTML reports, and Jupyter notebooks.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Gradio', 'Pandas'],
    category: 'Agentic AI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/personal_data_analyst',
    github: 'https://github.com/Mayankgupta1754/personal_data_analyst'
  },
  {
    id: 5,
    title: 'CamJett – Smart Face Recognition Door Lock',
    description: 'An intelligent security system combining face recognition, RFID authentication, and access logging with a web-based admin dashboard.',
    technologies: ['Python', 'OpenCV', 'Flask', 'Raspberry Pi', 'Arduino', 'IoT'],
    category: 'AI + IoT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Smart Firefighting Robot',
    description: 'Autonomous robot capable of detecting and extinguishing fire using sensors, computer vision, and real-time motor control.',
    technologies: ['Python', 'OpenCV', 'Arduino', 'Raspberry Pi', 'Embedded Systems'],
    category: 'Robotics & AI',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 7,
    title: 'Machine Learning Analytics Projects',
    description: 'A collection of end-to-end ML projects covering regression, classification, clustering, and real-world dataset analysis.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 8,
    title: 'Ethical Hacking & Network Security Labs',
    description: 'Hands-on labs focusing on network analysis, system vulnerabilities, and ethical hacking fundamentals.',
    technologies: ['Linux', 'Networking', 'Security Tools', 'Python'],
    category: 'Cyber Security',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  }
];
