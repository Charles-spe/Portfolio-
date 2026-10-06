export const profileImage = '/images/profile/profile-placeholder.jpg'
export const aboutSecondaryImage = '/images/profile/about-secondary.jpg'
export const aboutSecondaryFallbackImage = '/images/profile/profile-placeholder.svg'
export const cvFile = '/documents/CHARLES%20T.%20NZELU_CV.pdf'
export const designPortfolio = {
  file: '/documents/design-portfolio.pdf',
  available: false,
  title: 'Graphic Design Portfolio',
  label: 'View Graphic Design Portfolio',
}

export const contactInfo = {
  email: 'nzelucharles98@gmail.com',
  phone: '+2348149368077',
  discordUrl: 'https://discord.com/users/1184858163992870996',
  location: 'Lagos, Nigeria',
}

export const navItems = ['Home', 'About', 'Projects', 'Contact']

export const aboutContent = {
  intro:
    'I am Charles T. Nzelu, a creative professional focused primarily on graphic design and frontend development, with video editing as a complementary creative skill used to support visual storytelling and digital content.',
  story: [
    'Design has always been the foundation of my creative direction. I am drawn to clean layouts, strong visual language, and thoughtful composition, because those details shape how people connect with a message or a brand.',
    'My frontend development journey grew from that same desire to make ideas feel clear and alive on the web. I like building interfaces that are responsive, intentional, and easy to use, combining structure and style in a way that feels natural.',
    'The strongest work happens when design and technology come together. That is where I work best: turning visual ideas into digital experiences that are practical, polished, and meaningful.',
    'Video editing remains part of my creative toolkit, but it supports the overall work rather than defining it. I continue to refine my process through thoughtful projects and hands-on execution.',
  ],
}

export const skillGroups = [
  {
    title: 'Development',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js'],
  },
  {
    title: 'Design',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW'],
  },
  {
    title: 'Video',
    items: ['Video Editing'],
  },
]

export const skillCategories = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML', description: 'Building structured and accessible web interfaces.' },
      { name: 'CSS', description: 'Creating responsive layouts and polished visual styling.' },
      { name: 'Tailwind CSS', description: 'Building modern interfaces efficiently with utility-first styling.' },
      { name: 'React', description: 'Creating reusable and interactive frontend experiences.' },
      { name: 'Node.js', description: 'Supporting practical frontend workflows and JavaScript tooling.' },
    ],
  },
  {
    title: 'Graphic Design',
    items: [
      { name: 'Adobe Photoshop', description: 'Image editing, compositing, and creative visual work.' },
      { name: 'Adobe Illustrator', description: 'Logo design, vector graphics, and visual identity work.' },
      { name: 'Adobe InDesign', description: 'Layout design and polished editorial presentation.' },
      { name: 'CorelDRAW', description: 'Vector-based design for branding and print-friendly visuals.' },
    ],
  },
  {
    title: 'Video Editing',
    items: [{ name: 'Video Editing', description: 'Creating and refining visual content for digital platforms.' }],
  },
]

export const selfInitiatedLabel = 'Self-Initiated Project'

export const webProjects = [
  {
    title: 'Real Estate Marketplace',
    category: 'Frontend Development',
    ownershipLabel: selfInitiatedLabel,
    homeDescription:
      'An original real-estate marketplace concept I designed and developed from the ground up, covering the interface, user experience, property discovery flow, and responsive frontend.',
    description:
      'A real-estate marketplace concept I designed and developed from the ground up. I created the interface, user experience, property discovery flow, and responsive frontend as a personal project.',
    role: ['Concept', 'UI/UX Design', 'Frontend Development'],
    tools: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
    liveLink: 'https://real-estate-marketplace-tawny.vercel.app',
    githubLink: 'https://github.com/Charles-spe/Real-estate-marketplace.git',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Car Marketplace',
    category: 'Frontend Development',
    ownershipLabel: selfInitiatedLabel,
    homeDescription:
      'An original automotive marketplace concept created and developed from the ground up to explore vehicle discovery, marketplace design, and responsive frontend development.',
    description:
      'A personal automotive marketplace concept created from the ground up to explore marketplace design, vehicle discovery, responsive interfaces, and frontend development.',
    role: ['Concept', 'UI/UX Design', 'Frontend Development'],
    tools: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
    liveLink: 'https://car-marketplace-db4l.vercel.app/',
    githubLink: 'https://github.com/Charles-spe/car-marketplace-.git',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
  },
]

export const frontendProjects = webProjects

export const designProjects = [
  {
    title: 'Graphic Design Portfolio Preview',
    category: 'Graphic Design',
    description:
      'A design preview covering branding, editorial layouts, promotional graphics, and social media visuals. The full PDF portfolio will be added when the final design collection is ready.',
    tools: ['Branding', 'Editorial', 'Poster Design', 'Social Graphics'],
    image: '/images/design/portfolio-preview.svg',
    portfolioComingSoon: true,
  },
]

export const videoProjects = [
  {
    title: 'Video Editing',
    category: 'Video Editing',
    description:
      'Video editing is another part of my creative skill set, supporting promotional content, social media and visual storytelling with a clean, purposeful edit style.',
    tools: ['Premiere Pro', 'Storytelling', 'Social Content'],
    image: '/images/video/video-preview.svg',
    comingSoon: true,
  },
]

export const services = [
  { title: 'Frontend Development', description: 'Responsive and modern websites and interfaces built for clarity, performance, and usability.' },
  { title: 'Graphic Design', description: 'Creative visual identity and marketing graphics designed to strengthen brand recognition and online presence.' },
  { title: 'Video Editing', description: 'Engaging video content shaped through editing, pacing, and storytelling for digital audiences.' },
]

export const serviceCards = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    summary: 'I create visual materials that help brands and ideas feel clear, consistent, and memorable.',
    items: ['Logos', 'Brand and identity designs', 'Posters', 'Flyers', 'Social media graphics', 'Banners', 'Magazine and editorial layouts', 'Book covers', 'Letterheads', 'Other marketing visuals'],
    cta: 'View Design Work',
    href: '/projects?category=graphic-design',
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    summary: 'I build responsive and visually polished websites and interfaces using practical, modern frontend tools.',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js', 'Business websites', 'Portfolio websites', 'Marketplace interfaces', 'Responsive web pages', 'Interactive UI'],
    cta: 'View Web Projects',
    href: '/projects?category=frontend-development',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    summary: 'I edit and shape visual content for digital platforms so the message feels clear, engaging, and purposeful.',
    items: ['Social media videos', 'Promotional videos', 'Short-form content', 'Advertisements', 'Video cleanup and editing', 'Text and motion-based edits'],
    cta: 'View Video Work',
    href: '/projects?category=video-editing',
  },
]

export const serviceProcess = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the idea, goal, audience, and requirements before creating anything.',
  },
  {
    step: '02',
    title: 'Create',
    description: 'Design, build, or edit the project with a clear visual direction and consistent execution.',
  },
  {
    step: '03',
    title: 'Refine',
    description: 'Review the result, improve the details, and deliver a polished final version.',
  },
]

export const serviceReasons = [
  'Design-focused thinking',
  'Responsive frontend development',
  'Attention to visual details',
  'Practical and clean solutions',
  'Willingness to learn and improve',
  'One person who can handle both visual and technical aspects',
]

export const serviceTools = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js'],
  },
  {
    title: 'Design',
    items: ['Photoshop', 'Illustrator', 'InDesign', 'CorelDRAW'],
  },
  {
    title: 'Video',
    items: ['Video Editing'],
  },
]

export const projectCategoryOptions = [
  { key: 'all', label: 'All' },
  { key: 'frontend-development', label: 'Frontend Development' },
  { key: 'graphic-design', label: 'Graphic Design' },
  { key: 'video-editing', label: 'Video Editing' },
]

export const projectCategoryByKey = {
  all: 'All',
  'frontend-development': 'Frontend Development',
  'graphic-design': 'Graphic Design',
  'video-editing': 'Video Editing',
}

export const projectCategories = projectCategoryOptions.map((category) => category.label)

export const allProjects = [...frontendProjects, ...designProjects, ...videoProjects]

export const selectedWork = [
  {
    title: 'Real Estate Marketplace',
    category: 'Frontend Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    liveLink: 'https://real-estate-marketplace-tawny.vercel.app',
    githubLink: 'https://github.com/Charles-spe/Real-estate-marketplace.git',
  },
  {
    title: 'Car Marketplace',
    category: 'Frontend Development',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
    liveLink: 'https://car-marketplace-db4l.vercel.app/',
    githubLink: 'https://github.com/Charles-spe/car-marketplace-.git',
  },
]