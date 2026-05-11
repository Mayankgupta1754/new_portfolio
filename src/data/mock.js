export const profileData = {
  name: 'Mayank Gupta',
  title: 'Data Analyst | Turning data into decisions.',
  tagline: 'A curated space showcasing the dashboards, insights, and stories I bring to life from raw data.',
  profileImage: 'https://customer-assets.emergentagent.com/job_6e45107b-7f1c-49cf-95db-7b815b8d2de1/artifacts/6hw1f7ll_1736653887401.jpg',
  email: 'themayankgupta17@gmail.com',
  social: {
    github: 'https://github.com/Mayankgupta1754',
    linkedin: 'https://www.linkedin.com/in/mayank-gupta-218636253/',
    email: 'mailto:themayankgupta17@gmail.com'
  },
  resumeUrl: 'https://drive.google.com/file/d/17RK8MXgW-0BzkIkVj3oZUEPt7_AKY-gx/view?usp=sharing'
};

export const aboutData = {
  bio: 'B.Tech Computer Science student at VIT Vellore specializing in Data Analytics and Business Intelligence. I transform raw, messy data into clear, actionable insights through SQL, Python, Power BI, and Tableau — combining strong statistical fundamentals, EDA, and storytelling to drive better decisions. I also bring a working foundation in Machine Learning and AI, allowing me to push analytics beyond reporting into prediction and automation when needed.',
  highlights: [
    'Built 25+ data analytics and ML projects on real-world datasets',
    'Strong in SQL, Python, Power BI, Tableau, and Excel for end-to-end analysis',
    'Hands-on with EDA, feature engineering, statistical analysis, and KPI dashboards',
    'Skilled at translating business questions into measurable, data-backed answers',
    'Mentored 250+ students through workshops on analytics and data storytelling'
  ],
  interests: [
    'Data Analytics',
    'Business Intelligence',
    'Data Visualization',
    'SQL & Databases',
    'Statistical Analysis',
    'Machine Learning',
    'Data Storytelling'
  ]
};

export const projectsData = [
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
    { name: 'Data Analytics', level: 92 },
    { name: 'SQL', level: 88 },
    { name: 'Power BI', level: 88 },
    { name: 'Tableau', level: 82 },
    { name: 'Excel', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'Statistical Analysis', level: 80 },
    { name: 'Machine Learning', level: 82 }
  ],
    tools: [
  'SQL',
  'Power BI',
  'Tableau',
  'Excel',
  'Python',
  'Pandas',
  'NumPy',
  'Data Cleaning',
  'Data Visualization',
  'EDA',
  'Statistical Analysis',
  'Hypothesis Testing',
  'Feature Engineering',
  'DAX',
  'Power Query',
  'Matplotlib',
  'Seaborn',
  'Plotly',
  'Scikit-learn',
  'Model Evaluation',
  'Cross-Validation',
  'Hyperparameter Tuning',
  'A/B Testing',
  'KPI Reporting',
  'Dashboarding',
  'Data Storytelling',
  'Jupyter Notebook',
  'Google Colab',
  'VS Code',
  'Git',
  'GitHub',
  'Kaggle',
  'Java',
  'TensorFlow',
  'Keras'
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
    gpa: '8.72',
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
    title: 'CamJett – Smart Face Recognition Door Lock',
    description: 'An intelligent security system combining face recognition, RFID authentication, and access logging with a web-based admin dashboard.',
    technologies: ['Python', 'OpenCV', 'Flask', 'Raspberry Pi', 'Arduino', 'IoT'],
    category: 'AI + IoT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Smart Firefighting Robot',
    description: 'Autonomous robot capable of detecting and extinguishing fire using sensors, computer vision, and real-time motor control.',
    technologies: ['Python', 'OpenCV', 'Arduino', 'Raspberry Pi', 'Embedded Systems'],
    category: 'Robotics & AI',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Machine Learning Analytics Projects',
    description: 'A collection of end-to-end ML projects covering regression, classification, clustering, and real-world dataset analysis.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Ethical Hacking & Network Security Labs',
    description: 'Hands-on labs focusing on network analysis, system vulnerabilities, and ethical hacking fundamentals.',
    technologies: ['Linux', 'Networking', 'Security Tools', 'Python'],
    category: 'Cyber Security',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    link: '#',
    github: '#'
  }
];
