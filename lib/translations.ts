export type Language = 'en' | 'es'

export const translations = {
  en: {
    // Terminal messages
    welcome: "Welcome to altovisual's development portfolio! Type help to see available commands.",
    commandNotFound: "Command not found",
    typeHelp: "Type help to see available commands.",
    
    // Help command
    availableCommands: "Available commands:",
    helpDescriptions: {
      about: "Learn about altovisual",
      education: "View educational background", 
      skills: "See technical skills",
      experience: "View work experience",
      projects: "View projects",
      certifications: "View certifications and achievements",
      contact: "Get contact information",
      clear: "Clear the terminal",
      help: "Show this help message",
      build: "Run project build",
      lang: "Change language (en/es)"
    },
    
    // Build command
    buildRunning: "Building project...",
    buildComplete: "Build successful! Project ready for deployment.",
    
    // Navigation buttons
    nav: {
      about: "About",
      education: "Education", 
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact"
    },
    
    // Language
    language: "Language",
    currentLanguage: "English",
    
    // About section
    aboutTitle: "Full Stack Developer & Integral Designer",
    aboutIntro: "Hello! I'm altovisual, a full stack developer and integral designer with aspirations in blockchain development.",
    aboutDescription: "I specialize in creating complete digital solutions, from user interface design to backend implementation, with a growing focus on blockchain technologies and decentralized applications.",
    personalBio: "Personal Bio:",
    quickFacts: "Quick Facts:",
    locationLabel: "Location:",
    educationLabel: "Education:",
    specialtyLabel: "Specialty:",
    certificationsLabel: "Certifications:",
    
    // Skills section
    skillsTitle: "Technical Skills",
    programmingLanguages: "Programming Languages & Frameworks",
    frontendTechnologies: "Frontend Technologies",
    designTools: "Design & UX/UI Tools",
    databases: "Databases & Cloud",
    blockchainTech: "Blockchain & Web3",
    devTools: "Development Tools & Platforms",
    aiTools: "AI & Prompt Engineering",
    
    // Experience section
    experienceTitle: "Work Experience",
    
    // Projects section
    projectsTitle: "Featured Projects",
    projectsDescription: "Featured development projects showcasing full stack and design capabilities",
    technologies: "Technologies:",
    
    // Education section
    educationTitle: "Education & Learning",
    educationDegree: "Degree:",
    educationGPA: "GPA:",
    educationDate: "Date:",
    relevantCoursework: "Relevant Coursework:",
    
    // Certifications section
    certificationsTitle: "Certifications & Achievements",
    competitionsTitle: "Competitions & Achievements", 
    initiativesTitle: "Development Initiatives",
    
    // Contact section
    contactTitle: "Get In Touch",
    email: "Email",
    phone: "Phone",
    location: "Location",
    linkedin: "LinkedIn",
    github: "GitHub",
    
    // Skills data
    skills: {
      // Programming & Frameworks
      javascript: "JavaScript",
      typescript: "TypeScript", 
      python: "Python",
      react: "React",
      nextjs: "Next.js",
      nodejs: "Node.js",
      express: "Express.js",
      
      // Frontend
      html: "HTML5",
      css: "CSS3",
      tailwind: "Tailwind CSS",
      sass: "Sass/SCSS",
      
      // Backend & Databases
      mongodb: "MongoDB",
      postgresql: "PostgreSQL",
      mysql: "MySQL",
      redis: "Redis",
      
      // Design Tools
      figma: "Figma",
      photoshop: "Adobe Photoshop",
      illustrator: "Adobe Illustrator",
      sketch: "Sketch",
      aftereffects: "After Effects",
      davinci: "DaVinci Resolve",
      unreal: "Unreal Engine",
      blender: "Blender",
      flstudio: "FL Studio",
      
      // Blockchain
      solidity: "Solidity",
      sui: "Sui Move",
      web3: "Web3.js",
      ethers: "Ethers.js",
      hardhat: "Hardhat",
      
      // Dev Tools
      git: "Git",
      docker: "Docker",
      aws: "Amazon Web Services",
      vercel: "Vercel",
      github: "GitHub",
      vscode: "VS Code",
      cursor: "Cursor",
      kiro: "Kiro",
      
      // AI Tools
      promptEngineering: "Prompt Engineering",
      contextEngineering: "Context Engineering",
      agentCreation: "Agent Creation"
    }
  },
  es: {
    // Terminal messages
    welcome: "¡Bienvenido al portafolio de desarrollo de altovisual! Escribe help para ver los comandos disponibles.",
    commandNotFound: "Comando no encontrado",
    typeHelp: "Escribe help para ver los comandos disponibles.",
    
    // Help command
    availableCommands: "Comandos disponibles:",
    helpDescriptions: {
      about: "Conoce sobre altovisual",
      education: "Ver formación académica",
      skills: "Ver habilidades técnicas", 
      experience: "Ver experiencia laboral",
      projects: "Ver proyectos",
      certifications: "Ver certificaciones y logros",
      contact: "Obtener información de contacto",
      clear: "Limpiar la terminal",
      help: "Mostrar este mensaje de ayuda",
      build: "Ejecutar construcción del proyecto",
      lang: "Cambiar idioma (en/es)"
    },
    
    // Build command
    buildRunning: "Construyendo proyecto...",
    buildComplete: "¡Construcción exitosa! Proyecto listo para despliegue.",
    
    // Navigation buttons
    nav: {
      about: "Acerca de",
      education: "Educación",
      skills: "Habilidades", 
      experience: "Experiencia",
      projects: "Proyectos",
      certifications: "Certificaciones",
      contact: "Contacto"
    },
    
    // Language
    language: "Idioma",
    currentLanguage: "Español",
    
    // About section
    aboutTitle: "Desarrollador Full Stack y Diseñador Integral",
    aboutIntro: "¡Hola! Soy altovisual, un desarrollador full stack y diseñador integral con aspiraciones en el desarrollo blockchain.",
    aboutDescription: "Me especializo en crear soluciones digitales completas, desde el diseño de interfaces de usuario hasta la implementación del backend, con un enfoque creciente en tecnologías blockchain y aplicaciones descentralizadas.",
    personalBio: "Biografía Personal:",
    quickFacts: "Datos Rápidos:",
    locationLabel: "Ubicación:",
    educationLabel: "Educación:",
    specialtyLabel: "Especialidad:",
    certificationsLabel: "Certificaciones:",
    
    // Skills section
    skillsTitle: "Habilidades Técnicas",
    programmingLanguages: "Lenguajes de Programación y Frameworks",
    frontendTechnologies: "Tecnologías Frontend",
    designTools: "Herramientas de Diseño y UX/UI",
    databases: "Bases de Datos y Nube",
    blockchainTech: "Blockchain y Web3",
    devTools: "Herramientas de Desarrollo y Plataformas",
    aiTools: "IA e Ingeniería de Prompts",
    
    // Experience section
    experienceTitle: "Experiencia Laboral",
    
    // Projects section
    projectsTitle: "Proyectos Destacados",
    projectsDescription: "Proyectos de desarrollo destacados que muestran capacidades full stack y de diseño",
    technologies: "Tecnologías:",
    
    // Education section
    educationTitle: "Educación y Aprendizaje",
    educationDegree: "Título:",
    educationGPA: "Promedio:",
    educationDate: "Fecha:",
    relevantCoursework: "Materias Relevantes:",
    
    // Certifications section
    certificationsTitle: "Certificaciones y Logros",
    competitionsTitle: "Competencias y Logros",
    initiativesTitle: "Iniciativas de Desarrollo",
    
    // Contact section
    contactTitle: "Ponte en Contacto",
    email: "Correo",
    phone: "Teléfono", 
    location: "Ubicación",
    linkedin: "LinkedIn",
    github: "GitHub",
    
    // Skills data
    skills: {
      // Programming & Frameworks
      javascript: "JavaScript",
      typescript: "TypeScript",
      python: "Python", 
      react: "React",
      nextjs: "Next.js",
      nodejs: "Node.js",
      express: "Express.js",
      
      // Frontend
      html: "HTML5",
      css: "CSS3",
      tailwind: "Tailwind CSS",
      sass: "Sass/SCSS",
      
      // Backend & Databases
      mongodb: "MongoDB",
      postgresql: "PostgreSQL",
      mysql: "MySQL",
      redis: "Redis",
      
      // Design Tools
      figma: "Figma",
      photoshop: "Adobe Photoshop",
      illustrator: "Adobe Illustrator",
      sketch: "Sketch",
      aftereffects: "After Effects",
      davinci: "DaVinci Resolve",
      unreal: "Unreal Engine",
      blender: "Blender",
      flstudio: "FL Studio",
      
      // Blockchain
      solidity: "Solidity",
      sui: "Sui Move",
      web3: "Web3.js",
      ethers: "Ethers.js",
      hardhat: "Hardhat",
      
      // Dev Tools
      git: "Git",
      docker: "Docker",
      aws: "Amazon Web Services",
      vercel: "Vercel",
      github: "GitHub",
      vscode: "VS Code",
      cursor: "Cursor",
      kiro: "Kiro",
      
      // AI Tools
      promptEngineering: "Ingeniería de Prompts",
      contextEngineering: "Ingeniería de Contexto",
      agentCreation: "Creación de Agentes"
    }
  }
} as const