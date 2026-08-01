import { Project, SkillCategory, ExperienceItem, Certification, GalleryItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ahmad Ali',
  title: 'Frontend Developer',
  tagline: 'Frontend Web Developer building fast, responsive, AI-assisted digital experiences',
  location: 'Bahawalpur, Pakistan',
  email: 'chahmad4362@gmail.com',
  phone: '+92 316 1547101',
  phoneClean: '+923161547101',
  whatsappUrl: 'https://wa.me/923161547101',
  githubUrl: 'https://github.com/ahmadali2003an-max',
  linkedinUrl: 'https://linkedin.com/in/ahmad-ali-frontend',
  bio: `Frontend Web Developer with 1+ years of hands-on experience building and deploying 45+ responsive websites, web apps, and e-commerce storefronts for real clients across logistics, pharmaceutical, and fashion/retail sectors. Skilled in HTML5, CSS3, JavaScript, and React, with growing expertise in TypeScript and full-stack development (Node.js, Express, MongoDB). Strong focus on clean UI, mobile-first responsiveness, cross-browser compatibility, and fast deployment via Vercel and GitHub Pages. Experienced working directly and remotely with a Saudi-based logistics client. Leverages AI-assisted development workflows to deliver high-quality results efficiently.`,
  education: [
    {
      degree: 'Matriculation',
      institution: 'BISE Bahawalpur',
      period: '2020 – 2022',
      details: 'Focus on Science, Mathematics, and Computer Fundamentals'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Urdu', proficiency: 'Native / Bilingual' }
  ],
  stats: [
    { label: 'Websites & Apps Built', value: '45+' },
    { label: 'Years Experience', value: '1+' },
    { label: 'Remote Saudi Logistics Client', value: 'Prime Logistics' },
    { label: 'Deployment Uptime', value: '99.9%' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Technologies',
    key: 'core',
    skills: [
      { name: 'HTML5', level: 98, description: 'Semantic markup, accessibility, SEO best practices' },
      { name: 'CSS3 / Modern CSS', level: 96, description: 'Flexbox, Grid, CSS animations, custom properties' },
      { name: 'JavaScript (ES6+)', level: 92, description: 'Async/await, DOM manipulation, closures, modular JS' },
      { name: 'React.js', level: 90, description: 'Hooks, Context API, component architecture, state management' },
      { name: 'TypeScript', level: 84, description: 'Strict typing, interfaces, generics, type-safe APIs' },
      { name: 'Responsive & Mobile-First', level: 98, description: 'Pixel-perfect fluid layouts across all viewports' }
    ]
  },
  {
    title: 'Frontend Tooling & Mobile',
    key: 'tooling',
    skills: [
      { name: 'Vite', level: 94, description: 'Ultra-fast bundling, ES modules, asset optimization' },
      { name: 'Framer Motion', level: 88, description: 'Smooth 3D page transitions, scroll interactions, micro-animations' },
      { name: 'Tailwind CSS', level: 96, description: 'Utility-first styling, custom design tokens, responsive breakpoints' },
      { name: 'React Native (Expo)', level: 78, description: 'Cross-platform mobile app development for Android & iOS' },
      { name: 'Lucide Icons & WebGL', level: 86, description: 'Vector graphics and 3D Canvas visual effects' }
    ]
  },
  {
    title: 'Backend & Data',
    key: 'backend',
    skills: [
      { name: 'Node.js', level: 80, description: 'Event-driven server architecture and RESTful APIs' },
      { name: 'Express.js', level: 82, description: 'Server-side routing, middleware, API proxies' },
      { name: 'MongoDB Atlas', level: 78, description: 'NoSQL document databases and query modeling' },
      { name: 'lowdb & JSON Storage', level: 85, description: 'Lightweight JSON database storage for rapid MVPs' },
      { name: 'JWT Authentication', level: 80, description: 'Secure token-based auth and session handling' }
    ]
  },
  {
    title: 'Other & Business Operations',
    key: 'other',
    skills: [
      { name: 'Shopify Store Management', level: 85, description: 'Theme customizations, product catalogs, checkout setup' },
      { name: 'Landing Page Optimization', level: 96, description: 'High-converting agency layouts and speed optimization' },
      { name: 'AI-Assisted Workflows', level: 95, description: 'Leveraging AI tools to accelerate build speed and code quality' },
      { name: 'Digital Marketing', level: 82, description: 'SEO fundamentals, meta tag optimization, lead capture' }
    ]
  },
  {
    title: 'Deployment & Version Control',
    key: 'deployment',
    skills: [
      { name: 'Vercel', level: 98, description: 'Instant CI/CD production deployments, serverless routing' },
      { name: 'GitHub Pages', level: 95, description: 'Static site hosting and workflow pipelines' },
      { name: 'Git & GitHub', level: 92, description: 'Branch management, pull requests, version tracking' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'prime-logistics',
    role: 'Frontend Developer & Web Operations',
    company: 'Prime Logistics',
    location: 'Remote, Saudi Arabia',
    period: '2025 – 2026',
    isRemote: true,
    badgeColor: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/40',
    bullets: [
      "Developed and maintained the company's official responsive corporate website featuring smooth 3D animations, deployed reliably on Vercel.",
      'Managed ongoing content updates, performance optimization, and cross-browser compatibility for Saudi client operations.',
      'Handled complete front-end web operations remotely for a high-volume Saudi Arabia logistics provider with zero downtime.'
    ],
    techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D WebGL', 'Vercel']
  },
  {
    id: 'innovista',
    role: 'E-Commerce & Digital Marketing Executive',
    company: 'InnoVista Cholistan',
    location: 'Bahawalpur, Pakistan',
    period: '2024 – 2026',
    isRemote: false,
    badgeColor: 'border-purple-500/50 text-purple-400 bg-purple-950/40',
    bullets: [
      'Designed and developed frontends for 7+ client websites and e-commerce storefronts from scratch.',
      'Built a responsive, mobile-first UI for Dhanak, a premier Pakistani women & kids fashion brand.',
      'Delivered pixel-perfect, cross-browser compatible designs across retail, fashion, pharmaceutical, and services sectors.'
    ],
    techUsed: ['HTML5/CSS3', 'JavaScript', 'React', 'Shopify', 'Responsive Web Design', 'SEO']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'prime-logistics-web',
    title: 'Prime Logistics — Corporate Website',
    category: 'Logistics',
    description: 'Official corporate website with 3D interactive animations for a Saudi-based international logistics company.',
    longDescription: 'High-end corporate website developed for Prime Logistics (Saudi Arabia). Features smooth 3D animated hero elements, dynamic service fleet showcases, interactive quote calculators, and multi-language friendly layout architecture.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D Canvas', 'Vercel'],
    liveUrl: 'https://prime-logistics-prime-logistics.vercel.app/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: '99.8% Speed Score • Saudi Logistics Leader',
    highlights: ['3D Fleet Interactive Animation', 'Saudi Arabia Operations Portal', 'Mobile-First Responsive']
  },
  {
    id: 'dhanak-fashion',
    title: 'Dhanak Official — E-Commerce Fashion Brand',
    category: 'E-Commerce',
    description: 'Premier e-commerce fashion storefront for Pakistani women & kids apparel with high-conversion mobile UI.',
    longDescription: 'Pixel-perfect e-commerce shopping experience for Dhanak fashion brand. Built for rapid product browsing, custom filter drawers, sticky mobile cart drawer, and high-resolution visual storytelling.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Shopify Engine', 'Responsive UI'],
    liveUrl: 'https://dhanak.com.pk',
    featured: true,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    metrics: '7+ Retail Storefront Collections',
    highlights: ['Pakistani Women & Kids Fashion', 'Mobile-Optimized Checkout Flow', 'Rich Product Image Galleries']
  },
  {
    id: 'hr-pharma',
    title: 'HR Pharmaceuticals — AI Operations Dashboard',
    category: 'Healthcare',
    description: 'AI-powered pharmaceutical operations and inventory tracking dashboard with real-time analytics.',
    longDescription: 'Next-gen analytics and inventory dashboard built for HR Pharmaceuticals. Incorporates AI automated stock predictions, order tracking, batch validation, and crisp visual metrics charts.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'AI Insights', 'Vercel'],
    liveUrl: 'https://hr-pharmaceuticals.vercel.app/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AI Batch Analytics & Stock Forecasting',
    highlights: ['Pharma Batch Intelligence', 'Interactive Analytics Charts', 'High Contrast Dark Dashboard']
  },
  {
    id: 'zatca-invoicing',
    title: 'ZATCA-Compliant E-Invoicing Platform',
    category: 'Logistics',
    description: 'Full-stack Saudi ZATCA Phase 2 compliant electronic invoicing management software.',
    longDescription: 'Engineered a specialized web portal strictly conforming to Saudi Arabia ZATCA tax authority rules. Includes QR code payload generator, XML/PDF output parsing, and enterprise billing history.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'JWT Auth', 'Tailwind CSS'],
    liveUrl: 'https://prime-logistics-prime-logistics.vercel.app/', // featured highlight
    featured: true,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    metrics: 'ZATCA Saudi Tax Compliance',
    highlights: ['Cryptographic QR Code Generator', 'Full-Stack Node/React Arc', 'Multi-Tenant Billing']
  },
  {
    id: 'courier-mobile',
    title: 'Courier & Logistics Mobile App',
    category: 'Mobile App',
    description: 'Cross-platform mobile application for courier tracking, delivery status, and driver dispatch built with Expo.',
    longDescription: 'React Native (Expo) mobile solution designed for delivery agents and customers. Features live shipment tracking status, push notification prompts, signature capture, and offline logging.',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Tailwind/StyleSheet', 'REST API'],
    liveUrl: 'https://prime-logistics-prime-logistics.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Cross-Platform iOS & Android',
    highlights: ['Live Delivery Route Pinning', 'Mobile Signature Pad', 'Push Notification Feed']
  },
  {
    id: 'softzilaa-agency',
    title: 'Softzilaa Agency — Official Agency Website',
    category: 'Agency',
    description: 'Own digital agency portal offering full-stack web engineering, SEO, and e-commerce development.',
    longDescription: 'Softzilaa agency showcase website built to convert high-ticket web agency leads. Features animated service matrices, client case study carousels, and instant quote booking wizard.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Framer Motion'],
    liveUrl: 'https://ahmadali2003an-max.github.io/softzilaa-website/',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Agency Portal & Lead Generator',
    highlights: ['Interactive Service Estimator', 'Client Case Studies', 'GitHub Pages Hosting']
  },
  {
    id: 'pest-kill',
    title: 'Pest Kill Website — Service Provider Portal',
    category: 'Services',
    description: 'Modern, high-converting service booking portal for commercial and residential pest control.',
    longDescription: 'Responsive business website built for Pest Kill services. Optimized for fast phone calls, instant service request forms, and visual pest identification guides.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    liveUrl: 'https://pest-kill-website.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80',
    metrics: 'High Conversion Service Booking',
    highlights: ['Direct WhatsApp Call Booking', 'Residential & Commercial Tabs', 'Fast Mobile Load']
  },
  {
    id: 'vip-business',
    title: 'VIP Business Website — Premium Corporate Portal',
    category: 'Consulting',
    description: 'Luxury corporate landing platform for VIP business consultancy and enterprise service offerings.',
    longDescription: 'Sleek dark-mode glassmorphic website designed for VIP Business services. Incorporates gold/cyan neon highlights, smooth section scrolling, and client testimonial cards.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://vip-bussiness-website.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Premium Dark Glassmorphism',
    highlights: ['Executive Brand Identity', 'Consultation Booking Form', 'Responsive Micro-Interactions']
  },
  {
    id: 'umair-quran',
    title: 'Umair Quran Academy — Online Education Portal',
    category: 'Education',
    description: 'International online educational portal for Quranic studies with multi-country course registration.',
    longDescription: 'Responsive academy website built for global students. Features course syllabus breakdown, instructor profiles, multi-currency course pricing cards, and student registration.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://umair-quran-academy-umair-quran-aca.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Global Student Intake UI',
    highlights: ['Online Registration System', 'Course Curriculum Cards', 'RTL & Multi-Language Support']
  },
  {
    id: 'tech-nova',
    title: 'Tech Nova — Next-Gen Tech Showcase',
    category: 'Agency',
    description: 'Futuristic digital product and AI technology showcase featuring neon aesthetics and 3D card tilt effects.',
    longDescription: 'High-concept landing page showcasing emerging software products. Features interactive 3D particle nodes, glowing product feature grids, and newsletter subscription engine.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', '3D Effects', 'Vercel'],
    liveUrl: 'https://tech-nova-eta.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Futuristic UI Showcase',
    highlights: ['3D Node Mesh Graphics', 'Product Launch Countdown', 'Interactive Feature Tabs']
  },
  {
    id: 'upwise-consulting',
    title: 'Upwise Consulting — Financial & Business Advisory',
    category: 'Consulting',
    description: 'Professional financial consulting website with ROI calculators and client appointment scheduler.',
    longDescription: 'Clean corporate website engineered for Upwise Consulting. Includes interactive ROI estimation widgets, downloadable advisory brochures, and team credentials display.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    liveUrl: 'https://upwise-consulting.vercel.app/',
    featured: false,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Financial Services UI',
    highlights: ['Interactive ROI Calculator', 'Schedule Advisory Session', 'Clean High Contrast Design']
  },
  {
    id: 'hkb-consultancy',
    title: 'HKB Consultancy — International Trade & Services',
    category: 'Consulting',
    description: 'Corporate business consultancy portal for international trade, import/export, and business setups.',
    longDescription: 'Web portal developed for HKB Traders & Consultancy. Built with clean navigation, service portfolio catalogs, contact inquiry triggers, and multi-sector showcase.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    liveUrl: 'https://hkbtradersofficial-star.github.io/hkbconsultancy/#home',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    metrics: 'International Trade Portal',
    highlights: ['Import/Export Service Matrix', 'GitHub Pages Deployment', 'Responsive Grid Layout']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'innovista-web-dev-cert',
    title: 'Web Development Course',
    issuer: 'Innovista Cholistan',
    date: 'Jan – Jun 2025',
    status: 'Completed',
    isPlaceholder: false,
    image: '/certificates/innovista-web-development.jpg',
    description: 'Completed a 6-month Web Development Course at Innovista Cholistan covering frontend fundamentals, responsive design, and real project-based training.',
    skillsLearned: ['HTML5 & CSS3', 'JavaScript', 'Responsive Web Design', 'Project-Based Training']
  },
  {
    id: 'innovista-ai-ml-cert',
    title: 'AI & ML Professional Workshop',
    issuer: 'Innovista Cholistan',
    date: 'Jun – Aug 2025',
    status: 'Completed',
    isPlaceholder: false,
    image: '/certificates/innovista-ai-ml.jpg',
    description: 'Completed a professional workshop on Artificial Intelligence and Machine Learning at Innovista Cholistan, covering core AI/ML concepts and applied, AI-assisted workflows.',
    skillsLearned: ['AI Fundamentals', 'Machine Learning Concepts', 'AI-Assisted Workflows', 'Applied Problem Solving']
  },
  {
    id: 'enablers-ecommerce-cert',
    title: 'Digital e-Commerce Mastery',
    issuer: 'Enablers College of Technology, Lahore',
    date: '2025',
    status: 'Completed',
    isPlaceholder: false,
    image: '/certificates/enablers-ecommerce.jpg',
    description: 'Completed a 6-month Digital e-Commerce Mastery certification from Enablers College of Technology, covering end-to-end e-commerce store operations and digital business strategy.',
    skillsLearned: ['E-Commerce Store Management', 'Digital Business Strategy', 'Online Store Operations', 'Shopify Store Management']
  },
  {
    id: 'google-marketing-cert',
    title: 'Google Digital Marketing & E-Commerce Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'Jul 2025',
    status: 'Completed',
    isPlaceholder: false,
    image: '/certificates/google-digital-marketing.jpg',
    credentialUrl: 'https://www.credly.com/go/1x94TtCP',
    description: 'Industry-recognized professional certification covering digital marketing fundamentals, customer analytics, search engine optimization (SEO), and e-commerce strategy.',
    skillsLearned: ['Digital Marketing Analytics', 'SEO Strategy', 'Customer Acquisition', 'E-Commerce Strategy']
  },
  {
    id: 'dha-internship-cert',
    title: 'Internship Certificate',
    issuer: 'Defence Housing Authority Bahawalpur (DHA)',
    date: 'Jul – Sep 2025',
    status: 'Completed',
    isPlaceholder: false,
    image: '/certificates/dha-internship.jpg',
    description: 'Completed a 2-month internship as a Trainee at DHA Bahawalpur, recognized for professionalism, discipline, and hard work throughout the internship tenure.',
    skillsLearned: ['Professional Work Ethics', 'On-the-Job Training', 'Team Collaboration', 'Workplace Discipline']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Prime Logistics 3D Fleet Hub',
    category: '3D Corporate',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    caption: '3D animated interactive fleet display for Saudi Arabian logistics partner.',
    tags: ['React', '3D WebGL', 'Logistics UI']
  },
  {
    id: 'gal-2',
    title: 'Dhanak Fashion Mobile Storefront',
    category: 'E-Commerce UI',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    caption: 'Mobile-first shopping interface designed for Pakistani women & kids fashion brand.',
    tags: ['Mobile First', 'Shopify', 'Fashion']
  },
  {
    id: 'gal-3',
    title: 'HR Pharma AI Intelligence Console',
    category: 'Dashboards',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dark mode AI batch analytics and pharmaceutical inventory tracking grid.',
    tags: ['Dark Theme', 'Recharts', 'Healthcare']
  },
  {
    id: 'gal-4',
    title: 'ZATCA Compliance Portal Dashboard',
    category: 'Dashboards',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Cryptographic QR and XML validator interface for Saudi e-invoicing laws.',
    tags: ['TypeScript', 'Full-Stack', 'Saudi ZATCA']
  },
  {
    id: 'gal-5',
    title: 'Courier Express Dispatch Screen',
    category: 'Mobile Web',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    caption: 'React Native Expo mobile screen for live courier route dispatch.',
    tags: ['React Native', 'Expo', 'Mobile App']
  },
  {
    id: 'gal-6',
    title: 'Tech Nova Futuristic Dark Glass UI',
    category: '3D Corporate',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    caption: 'Neon glow 3D product showcase with interactive mouse parallax.',
    tags: ['Glassmorphism', 'Neon Cyan', 'Agency UI']
  }
];
