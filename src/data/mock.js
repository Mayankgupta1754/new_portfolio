export const profileData = {
  name: 'Mayank Gupta',
  title: 'Data Science, Machine Learning, AI & Ethical Hacking Enthusiast',
  tagline: 'A curated space showcasing my journey, my work, and the ideas I\'m bringing to life.',
  profileImage: 'https://customer-assets.emergentagent.com/job_6e45107b-7f1c-49cf-95db-7b815b8d2de1/artifacts/6hw1f7ll_1736653887401.jpg',
  email: 'themayankgupta17@gmail.com',
  social: {
    github: 'https://github.com/Mayankgupta1754',
    linkedin: 'https://www.linkedin.com/in/mayank-gupta-218636253/',
    email: 'mailto:themayankgupta17@gmail.com'
  },
  resumeUrl: 'https://drive.google.com/file/d/1Oc7E2bPq0Prr1dHkNEym0PRkHzAWqb-Q/view?usp=sharing'
};

export const aboutData = {
  bio: 'Data Science, Analytics, Machine Learning, AI, and Ethical Hacking enthusiast pursuing a B.Tech in Computer Science at VIT Vellore. Passionate about solving real-world problems through data-driven approaches and intelligent systems, with a strong focus on continuous learning and hands-on building.',
  highlights: [
    'Built 25+ AI/ML projects using real-world datasets',
    'Strong experience in EDA, feature engineering, and predictive modeling',
    'Hands-on work with ML integration in web and IoT systems',
    'Mentored 250+ students through workshops and technical sessions',
    'Hackathon winner and active community contributor'
  ],
  interests: ['Data Science','Machine Learning',
    'Deep Learning',
    'Data Analytics',
    'Ethical Hacking',
    'Applied AI Systems']
};

export const projectsData = [
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

export const skillsData = {
  technical: [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Machine Learning', level: 88 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Data Science', level: 85 },
    { name: 'Deep Learning', level: 78 },
    { name: 'Computer Vision', level: 70 },
    { name: 'Ethical Hacking', level: 75 }
  ],
  tools: [
    'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV',
    'Flask', 'FastAPI', 'Git', 'Linux',
    'Raspberry Pi', 'Arduino'
  ],
  softSkills: [
    'Problem Solving', 'Team Leadership', 'Communication',
    'Project Management', 'Research', 'Mentoring'
  ]
};

export const experienceData = [
  {
    id: 1,
    company: 'Pantech Solutions',
    position: 'AI & Machine Learning Intern',
    duration: 'Remote Internship',
    location: 'Remote',
    description: 'Worked on multiple hands-on projects across AI, ML, deep learning, and data science domains.',
    achievements: [
      'Completed 25+ projects across AI, ML, and Data Science',
      'Gained strong practical exposure to real-world datasets',
      'Improved understanding of end-to-end ML workflows'
    ]
  },
  {
    id: 2,
    company: 'The AI ML Club, VIT Vellore',
    position: 'Technical Head',
    duration: '2024 - 2025',
    location: 'VIT Vellore',
    description: 'Led workshops, mentored juniors, and contributed to technical community growth.',
    achievements: [
      'Mentored 250+ students',
      'Conducted workshops on Git, ML, and AI fundamentals',
      'Organized and led technical events and sessions'
    ]
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
    gpa: 'XII - 92.5%, X - 91%',
    achievements: [
      'Graduated with high distinction',
      'Active participant in science and tech fairs',
      'Received awards for academic excellence'
    ]
  }
];

export const knowledgeSharingData = [
  {
    id: 1,
    type: 'dsa',
    title: 'Binary Tree Maximum Path Sum - LeetCode Hard',
    artist: 'LeetCode',
    album: 'DSA Problem Solutions',
    duration: '12 min read',
    description: 'A comprehensive solution to the classic LeetCode Hard problem of finding the maximum path sum in a binary tree. Includes multiple approaches, time/space complexity analysis, and edge case handling.',
    problemStatement: 'Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.',
    solutions: [
      {
        approach: 'DFS with Recursion',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(h)',
        code: `def maxPathSum(self, root: TreeNode) -> int:
    def dfs(node):
        if not node:
            return 0
        left = max(0, dfs(node.left))
        right = max(0, dfs(node.right))
        self.max_sum = max(self.max_sum, left + right + node.val)
        return max(left, right) + node.val
    
    if not root:
        return 0
    self.max_sum = float('-inf')
    dfs(root)
    return self.max_sum`
      }
    ],
    technologies: ['Python', 'Tree Traversal', 'Dynamic Programming', 'Recursion'],
    category: 'DSA',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
    link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    github: 'https://github.com/Mayankgupta1754/dsa-solutions/tree/main/binary-tree-max-path',
    sharedDate: '2024',
    difficulty: 'Hard',
    contentType: 'Problem Solution',
    keyTakeaways: [
      'Mastered tree DP techniques for path sum problems',
      'Learned to handle negative node values in path calculations',
      'Implemented efficient O(n) time complexity solution'
    ]
  },
  {
    id: 2,
    type: 'ethical_hacking',
    title: 'Advanced XSS Attack Vectors & Prevention',
    artist: 'OWASP',
    album: 'Web Security Deep Dive',
    duration: '15 min read',
    description: 'Comprehensive analysis of Cross-Site Scripting (XSS) vulnerabilities including stored, reflected, and DOM-based XSS. Covers advanced attack techniques and modern prevention strategies.',
    vulnerability: 'Cross-Site Scripting (XSS)',
    impact: 'Critical - Can lead to session hijacking, data theft, and complete account compromise',
    attackVectors: [
      'Stored XSS: Malicious scripts stored in database and executed when displayed',
      'Reflected XSS: Malicious scripts reflected in HTTP response',
      'DOM-based XSS: Client-side JavaScript manipulation',
      'Blind XSS: Payloads executed in admin panels or internal systems'
    ],
    prevention: [
      'Implement Content Security Policy (CSP) headers',
      'Use proper output encoding for different contexts',
      'Implement input validation and sanitization',
      'Use modern frameworks with built-in XSS protection',
      'Regular security audits and penetration testing'
    ],
    demoPayloads: [
      '<script>alert("XSS")</script>',
      'javascript:alert(document.cookie)',
      '<img src=x onerror=alert(1)>',
      '<svg onload=alert(1)>'
    ],
    technologies: ['JavaScript', 'HTML', 'Web Security', 'OWASP'],
    category: 'Ethical Hacking',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop',
    link: 'https://owasp.org/www-community/attacks/xss/',
    github: 'https://github.com/Mayankgupta1754/xss-security-guide',
    sharedDate: '2024',
    difficulty: 'Advanced',
    contentType: 'Security Analysis',
    keyTakeaways: [
      'Understood advanced XSS attack vectors and bypass techniques',
      'Implemented comprehensive XSS prevention strategies',
      'Learned modern web security best practices'
    ]
  },
  {
    id: 3,
    type: 'notion',
    title: 'Complete System Design Study Notes',
    artist: 'Personal Knowledge Base',
    album: 'System Design & Architecture',
    duration: '25 min read',
    description: 'Comprehensive Notion workspace covering system design fundamentals, scalability patterns, database design, caching strategies, and real-world case studies from major tech companies.',
    notionPages: [
      'System Design Fundamentals',
      'Scalability & Performance',
      'Database Design & Indexing',
      'Caching Strategies (Redis, Memcached)',
      'Load Balancing & CDN',
      'Microservices Architecture',
      'API Design & RESTful Services',
      'Message Queues & Event Streaming',
      'Case Studies: Netflix, Uber, Instagram'
    ],
    contents: [
      'Detailed architecture diagrams and flowcharts',
      'Code examples for different design patterns',
      'Performance benchmarks and optimization techniques',
      'Interview questions and solutions',
      'Real-world implementation examples',
      'Progress tracking and review schedules'
    ],
    templates: [
      'System Design Interview Template',
      'API Documentation Template',
      'Database Schema Design Template',
      'Performance Testing Checklist'
    ],
    technologies: ['System Design', 'Distributed Systems', 'Databases', 'APIs'],
    category: 'Study Notes',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop',
    link: 'https://mayankgupta.notion.site/System-Design-Study-Notes-1234567890',
    github: '#',
    sharedDate: '2024',
    difficulty: 'Advanced',
    contentType: 'Knowledge Base',
    keyTakeaways: [
      'Built comprehensive system design knowledge base',
      'Mastered scalability and performance optimization',
      'Prepared for senior engineering interviews',
      'Created reusable templates for system design work'
    ]
  },
  {
    id: 4,
    type: 'project',
    title: 'AI-Powered Code Review Assistant',
    artist: 'Personal Project',
    album: 'AI & DevOps Integration',
    duration: '20 min read',
    description: 'An intelligent code review tool that uses machine learning to analyze code quality, detect bugs, suggest improvements, and provide automated feedback for pull requests.',
    projectFeatures: [
      'Automated code quality analysis using AST parsing',
      'Bug detection with pattern recognition',
      'Security vulnerability scanning',
      'Performance optimization suggestions',
      'Code style and best practices enforcement',
      'Integration with GitHub/GitLab webhooks',
      'Custom rule engine for team-specific guidelines'
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI GPT', 'PostgreSQL', 'Docker', 'GitHub API'],
    category: 'AI Project',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/ai-code-reviewer',
    github: 'https://github.com/Mayankgupta1754/ai-code-reviewer',
    sharedDate: '2024',
    difficulty: 'Advanced',
    contentType: 'Full-Stack Project',
    keyTakeaways: [
      'Integrated AI/ML with software development workflows',
      'Built scalable microservices architecture',
      'Implemented real-time webhook processing',
      'Created production-ready DevOps pipeline'
    ]
  },
  {
    id: 5,
    type: 'tutorial',
    title: 'Building Production-Ready APIs with FastAPI',
    artist: 'Tutorial Series',
    album: 'Backend Development',
    duration: '30 min read',
    description: 'Complete tutorial series covering advanced FastAPI concepts including async programming, dependency injection, authentication, database integration, testing, and deployment.',
    tutorialModules: [
      'FastAPI fundamentals and async/await patterns',
      'Pydantic models and automatic validation',
      'SQLAlchemy ORM integration with Alembic migrations',
      'JWT authentication and role-based access control',
      'Redis caching and background task processing',
      'Comprehensive testing with pytest and httpx',
      'Docker containerization and deployment strategies',
      'API documentation and versioning',
      'Monitoring, logging, and error handling'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT'],
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/fastapi-production-tutorial',
    github: 'https://github.com/Mayankgupta1754/fastapi-production-tutorial',
    sharedDate: '2024',
    difficulty: 'Intermediate',
    contentType: 'Tutorial Series',
    keyTakeaways: [
      'Mastered production-ready API development',
      'Implemented comprehensive authentication and security',
      'Learned advanced testing and deployment practices',
      'Built scalable and maintainable backend systems'
    ]
  },
  {
    id: 6,
    type: 'dsa',
    title: 'Graph Algorithms Implementation Guide',
    artist: 'GeeksforGeeks',
    album: 'Advanced Data Structures',
    duration: '18 min read',
    description: 'Complete implementation guide for graph algorithms including DFS/BFS traversal, shortest paths (Dijkstra, Bellman-Ford), minimum spanning trees (Kruskal, Prim), and topological sorting.',
    algorithms: [
      {
        name: 'Depth First Search (DFS)',
        timeComplexity: 'O(V + E)',
        applications: ['Connected components', 'Cycle detection', 'Topological sorting']
      },
      {
        name: 'Breadth First Search (BFS)',
        timeComplexity: 'O(V + E)',
        applications: ['Shortest path in unweighted graph', 'Level order traversal']
      },
      {
        name: 'Dijkstra\'s Algorithm',
        timeComplexity: 'O((V + E) log V)',
        applications: ['Single source shortest path', 'Network routing']
      },
      {
        name: 'Kruskal\'s MST',
        timeComplexity: 'O(E log E)',
        applications: ['Minimum spanning tree', 'Network design']
      }
    ],
    implementations: [
      'Adjacency List representation',
      'Priority Queue for Dijkstra',
      'Union-Find for Kruskal',
      'Recursive and iterative approaches'
    ],
    technologies: ['Python', 'Graphs', 'Algorithms', 'Data Structures'],
    category: 'DSA',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop',
    link: 'https://github.com/Mayankgupta1754/graph-algorithms',
    github: 'https://github.com/Mayankgupta1754/graph-algorithms',
    sharedDate: '2024',
    difficulty: 'Advanced',
    contentType: 'Algorithm Guide',
    keyTakeaways: [
      'Mastered complex graph algorithms and their implementations',
      'Understood algorithm design and optimization techniques',
      'Applied graph theory to real-world problems',
      'Built efficient data structures for graph representations'
    ]
  },
  {
    id: 7,
    type: 'ethical_hacking',
    title: 'Network Packet Analysis with Wireshark',
    artist: 'Wireshark Foundation',
    album: 'Network Security Tools',
    duration: '14 min read',
    description: 'Hands-on guide to network traffic analysis using Wireshark. Covers packet capture, protocol dissection, traffic filtering, and identifying security threats in network communications.',
    analysisTechniques: [
      'Packet capture and display filters',
      'Protocol hierarchy statistics',
      'TCP stream reconstruction',
      'Expert information analysis',
      'Following TCP conversations'
    ],
    securityApplications: [
      'Detecting man-in-the-middle attacks',
      'Identifying suspicious network traffic',
      'Analyzing malware communications',
      'Investigating data exfiltration',
      'Monitoring network performance and anomalies'
    ],
    commonFilters: [
      'http contains "password"',
      'tcp.port == 443 and ssl.handshake',
      'ip.src == 192.168.1.1 or ip.dst == 192.168.1.1',
      'dns and !mdns'
    ],
    technologies: ['Wireshark', 'Network Protocols', 'TCP/IP', 'Security Analysis'],
    category: 'Ethical Hacking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    link: 'https://wiki.wireshark.org/',
    github: 'https://github.com/Mayankgupta1754/network-analysis-guide',
    sharedDate: '2024',
    difficulty: 'Intermediate',
    contentType: 'Network Analysis',
    keyTakeaways: [
      'Mastered network traffic analysis techniques',
      'Learned to identify security threats in packet data',
      'Understood protocol-level communication patterns',
      'Built skills for network forensics and monitoring'
    ]
  },
  {
    id: 8,
    type: 'notion',
    title: 'Interview Preparation Dashboard',
    artist: 'Personal Knowledge Base',
    album: 'Career Development',
    duration: '12 min read',
    description: 'Comprehensive interview preparation system with question banks, progress tracking, company research templates, and performance analytics for technical and behavioral interviews.',
    dashboardSections: [
      'Technical Interview Questions by Topic',
      'System Design Case Studies',
      'Behavioral Interview Preparation',
      'Company Research Templates',
      'Progress Tracking & Analytics',
      'Mock Interview Scheduling',
      'Feedback Collection System'
    ],
    questionBanks: [
      'Data Structures & Algorithms (150+ questions)',
      'System Design (50+ scenarios)',
      'Programming Languages (Python, Java, JavaScript)',
      'Database Design & SQL',
      'Web Development & APIs',
      'Machine Learning & AI'
    ],
    trackingFeatures: [
      'Question difficulty ratings',
      'Time spent per question',
      'Success rate analytics',
      'Weak topic identification',
      'Progress visualization'
    ],
    technologies: ['Notion', 'Interview Prep', 'Career Development', 'Analytics'],
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
    link: 'https://mayankgupta.notion.site/Interview-Prep-Dashboard-1234567890',
    github: '#',
    sharedDate: '2024',
    difficulty: 'Intermediate',
    contentType: 'Career Tool',
    keyTakeaways: [
      'Built comprehensive interview preparation system',
      'Developed structured learning and tracking methodology',
      'Created reusable templates for career development',
      'Implemented progress analytics and feedback systems'
    ]
  }
];

export const personalityData = [
  {
    id: 1,
    title: 'Gaming Enthusiast',
    category: 'Gaming',
    description: 'Passionate about strategy games and competitive gaming. Love exploring new game mechanics and participating in gaming communities.',
    tags: ['Strategy Games', 'Competitive Gaming', 'Game Development', 'Community'],
    favoriteQuote: '"Games are the most elevated form of investigation." - Albert Einstein',
    personalStory: 'My gaming journey started with simple puzzle games and evolved into competitive strategy gaming. I\'ve participated in multiple gaming tournaments and enjoy the strategic depth that games like Civilization and StarCraft offer.',
    goalsAndAspirations: 'To develop my own indie game and create gaming content that educates and entertains. I also want to explore game development using AI and procedural generation techniques.'
  },
  {
    id: 2,
    title: 'Music Lover',
    category: 'Music',
    description: 'Deep appreciation for classical and electronic music. Enjoy discovering new artists and understanding music theory.',
    tags: ['Classical Music', 'Electronic Music', 'Music Production', 'Audio Engineering'],
    favoriteQuote: '"Music is the universal language of mankind." - Henry Wadsworth Longfellow',
    personalStory: 'Music has been my constant companion through life\'s ups and downs. I started with classical piano lessons and later discovered electronic music production. I find solace in creating beats and exploring different musical genres.',
    goalsAndAspirations: 'To produce my own music album and collaborate with artists from different genres. I also want to learn advanced music production techniques and possibly start a music blog or podcast.'
  },
  {
    id: 3,
    title: 'Tech Explorer',
    category: 'Technology',
    description: 'Always curious about emerging technologies. Love tinkering with gadgets and exploring the latest in AI and robotics.',
    tags: ['Emerging Tech', 'AI', 'Robotics', 'Gadgets'],
    favoriteQuote: '"The best way to predict the future is to create it." - Peter Drucker',
    personalStory: 'My fascination with technology began when I built my first computer. From there, I\'ve explored everything from AI algorithms to robotics projects. I love the challenge of solving real-world problems through technology.',
    goalsAndAspirations: 'To work on cutting-edge AI projects that make a positive impact on society. I want to build autonomous systems and explore the intersection of AI with other fields like healthcare and education.'
  },
  {
    id: 4,
    title: 'Nature Photographer',
    category: 'Photography',
    description: 'Find peace in capturing the beauty of nature. Special interest in landscape and wildlife photography.',
    tags: ['Landscape Photography', 'Wildlife', 'Nature', 'Digital Art'],
    favoriteQuote: '"In every walk with nature, one receives far more than he seeks." - John Muir',
    personalStory: 'Photography became my passion during long hikes in the mountains. I started with a simple smartphone and gradually invested in better equipment. Nature photography teaches me patience and appreciation for the world around us.',
    goalsAndAspirations: 'To capture the natural beauty of different ecosystems around the world. I want to publish a photography book and teach workshops on nature photography techniques.'
  },
  {
    id: 5,
    title: 'Data Science Enthusiast',
    category: 'Data Science',
    description: 'Passionate about extracting insights from data and building predictive models that solve real-world problems.',
    tags: ['Machine Learning', 'Data Analysis', 'Python', 'Statistics'],
    favoriteQuote: '"Data is the new oil." - Clive Humby',
    personalStory: 'My journey into data science began with curiosity about patterns in everyday data. I taught myself Python and statistics, and now I love building models that can predict outcomes and provide valuable insights.',
    goalsAndAspirations: 'To work on large-scale data projects that drive business decisions and social impact. I want to advance my expertise in deep learning and contribute to open-source data science tools.'
  },
  {
    id: 6,
    title: 'Ethical Hacker',
    category: 'Cyber Security',
    description: 'Dedicated to understanding system vulnerabilities and promoting secure digital practices.',
    tags: ['Network Security', 'Penetration Testing', 'Linux', 'Cryptography'],
    favoriteQuote: '"The best defense is a good offense." - Unknown',
    personalStory: 'My interest in cybersecurity sparked when I learned about data breaches and their impact. I started learning ethical hacking techniques and now focus on helping organizations secure their systems.',
    goalsAndAspirations: 'To become a certified ethical hacker and work with organizations to improve their security posture. I want to educate others about cybersecurity best practices and contribute to secure software development.'
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