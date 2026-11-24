import spotifyImg from "../assets/images/projects/Screen Shot 2026-07-30 at 09.56.05.png";
import beeyondImg from "../assets/images/projects/Screen Shot 2026-07-30 at 11.03.57.png";

export const profile = {
  name: "Ivan Levy",
  email: "ivo.levy03@gmail.com",
  phone: "+54 9 11 3824-0929",
  whatsappUrl: "https://wa.me/5491138240929",
  linkedinUrl: "https://www.linkedin.com/in/ivan-levy/",
  githubUrl: "https://github.com/ivolevy",
  instagramUrl: "https://www.instagram.com/ivo.levy",
  cvEnUrl: "/IVAN LEVY - CV (EN).pdf",
  cvEsUrl: "/IVAN LEVY - CV (ES).pdf",
};

export const translations = {
  en: {
    metaTitle: "Ivan Levy — Software Engineer",
    nav: {
      work: "Work",
      experience: "Experience",
      skills: "Capabilities",
      contact: "Contact",
      skip: "Skip to main content",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      langGroup: "Language selector",
    },
    hero: {
      eyebrow: "Software Engineer · Buenos Aires, Argentina",
      headline: "Building web products, scalable platforms, and practical AI systems.",
      bio1: "Over four years at UO Solutions shipping full-stack applications across TypeScript, React, Next.js, Node.js, and Python—from global MarTech marketplaces like Beeyond Media to autonomous production workflows.",
      bio2: "Final-year Information Technology Management student at UADE (graduating Dec 2026), bridging clean software architecture with product strategy and business outcomes.",
      currentlyLabel: "Currently",
      currentlyValue: "UO Solutions",
      degreeLabel: "Degree",
      degreeValue: "IT Management · Dec 2026",
      resumeLabel: "Resume",
      ctaWork: "Selected Work",
    },
    projectsSection: {
      title: "Selected Work",
      subtitle:
        "Products, MarTech platforms, and AI automation pipelines built from concept to production.",
      readCase: "Read Case Study",
      visitSite: "Visit Site",
      systemsTitle: "AI Workflows & Systems Architecture",
      systemsHint: "Select a row to inspect details",
      fullCase: "Full Case Study",
      liveApp: "Live App",
      github: "GitHub",
    },
    experienceSection: {
      title: "Experience",
      subtitle:
        "Four-plus years delivering web platforms, MarTech products, and AI automation in production.",
    },
    skillsSection: {
      title: "Capabilities & Stack",
      subtitle:
        "Full-stack engineering paired with agentic AI workflows, cloud operations, and data analytics.",
      educationTitle: "Education",
      languagesLabel: "Languages:",
      languagesValue: "Spanish (Native) · English (Advanced C1 — Bilingual Education)",
      certificationsTitle: "Certifications",
      downloadLabel: "Download full resume (ATS-ready PDF)",
      resumeEn: "Resume (EN)",
      resumeEs: "Curriculum (ES)",
    },
    contactSection: {
      title: "Let's work together.",
      subtitle:
        "Available for Full-Stack & AI Software Engineering roles, product engineering, and automation architecture.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Company or team",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the role or project...",
      send: "Send Message",
      sending: "Sending...",
      sentOk: "Message sent. I will get back to you shortly.",
      sentErr: "Delivery failed. Please write directly to ivo.levy03@gmail.com.",
    },
    footer: {
      location: "Buenos Aires, Argentina",
    },
    projectDetail: {
      notFound: "Case study not found",
      backWork: "Back to Work",
      backSelected: "Back to Selected Work",
      role: "Role",
      timeline: "Timeline",
      outcome: "Outcome",
      link: "Link",
      visitSite: "Visit Site",
      internal: "Internal System",
      technologies: "Technologies",
      highlights: "Highlights",
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      allWork: "All Work",
      next: "Next",
    },
    notFound: {
      desc: "The page you requested does not exist.",
      back: "Back to portfolio",
    },
    projects: [
      {
        id: "beeyond-media",
        slug: "beeyond-media",
        title: "Beeyond Media",
        organization: "UO Solutions",
        year: "2026",
        role: "Product Technical Lead",
        metric: "Global DOOH marketplace",
        summary:
          "Global Digital Out-Of-Home (DOOH) marketplace simplifying discovery, real-time booking, and audited campaign analytics across digital billboard networks.",
        description:
          "Led the end-to-end engineering of a unified Digital Out-Of-Home advertising platform at UO Solutions, enabling advertisers to schedule, book, and monitor outdoor digital campaigns across international screen networks in one dashboard.",
        challenge:
          "Advertisers struggled with fragmented billboard network operators, opaque inventory availability, and manual campaign reporting workflows.",
        solution:
          "Architected and delivered a high-performance React and Node.js marketplace backed by GraphQL APIs for real-time screen scheduling, audience targeting, and audited traffic analytics.",
        techStack: ["React", "TypeScript", "Vite", "Node.js", "GraphQL", "Tailwind CSS"],
        highlights: [
          "Led architecture & delivery at UO Solutions",
          "Real-time DOOH inventory scheduling",
          "GraphQL marketplace API layer",
          "Audited campaign analytics dashboard",
        ],
        img: beeyondImg,
        altText: "Beeyond Media digital billboard marketplace dashboard",
        link: "https://beeyondmedia.com",
        repoUrl: null,
      },
      {
        id: "spotify-ai-playlisting",
        slug: "spotify-ai-playlisting",
        title: "Spotify AI Playlisting",
        organization: "Hackathon Project",
        year: "2025",
        role: "Lead Developer",
        metric: "Saves ~8 hrs/week per catalog",
        summary:
          "Hackathon-winning (3rd place) AI engine turning a single campaign prompt into structured, published Spotify artist playlists in under 2 minutes.",
        description:
          "Built during a competitive hackathon (3rd place) for record labels and music distributors to automate catalog matching, track sequencing, cover art generation, and direct publishing via the Spotify Web API.",
        challenge:
          "Label marketing teams manually spent 8–10 hours weekly per catalog matching releases to moods and building promotional playlists.",
        solution:
          "Engineered a GPT-4 prompted orchestration layer integrated with Spotify Web API metadata and sonic attributes, shipping playlists from prompt to live Spotify URL in under 2 minutes.",
        techStack: ["Next.js", "Node.js", "OpenAI API", "Spotify Web API", "TypeScript"],
        highlights: [
          "3rd Place Hackathon winner",
          "<2 min from prompt to live playlist",
          "Saves ~8 hours weekly per catalog",
          "Direct Spotify OAuth & publishing",
        ],
        img: spotifyImg,
        altText: "Spotify AI Playlisting interface",
        link: "https://spoty-bydota.vercel.app",
        repoUrl: null,
      },
      {
        id: "autonomous-ops",
        slug: "autonomous-ops",
        title: "Autonomous Ops & Deployment Engine",
        organization: "UO Solutions (IAB Argentina & Interact)",
        year: "2025 – 2026",
        role: "AI & Automation Engineer",
        metric: ">90% token & manual reduction",
        summary:
          "Production Python agent pipeline connecting Slack, Telegram human-in-the-loop approvals, and cPanel/FTP APIs to execute real client deployments safely.",
        description:
          "Built an autonomous operational pipeline for high-touch institutional accounts (IAB Argentina and Interact Argentina) that monitors Slack requests, parses intent, backs up remote production files, applies code updates locally, deploys via cPanel/FTP APIs, verifies live HTTP responses, and requests approval via Telegram before notifying clients.",
        challenge:
          "Routine production updates across PHP/HTML sites required repetitive manual cPanel/FTP edits, high LLM context consumption, and carried the risk of unverified edits or accidental message dispatches to clients.",
        solution:
          "Engineered a deterministic Python watcher and publishing engine with automatic timestamped backups, template-based deterministic scripts (>99% token reduction on news publishing), live HTTP post-deploy verification, and a Telegram approval gate.",
        techStack: [
          "Python",
          "Slack API",
          "Telegram Bot API",
          "cPanel / FTP APIs",
          "LLM Routing",
          "Human-in-the-Loop",
        ],
        highlights: [
          "Slack event listener & intent routing",
          "Pre-edit remote backup & diff audit",
          ">90% operational & token overhead reduction",
          "Telegram approval gate before client reply",
        ],
        link: null,
        repoUrl: null,
      },
      {
        id: "auteur-studio",
        slug: "auteur-studio",
        title: "Auteur AI Audiovisual Studio",
        organization: "DOTA Lab",
        year: "2026",
        role: "Creator & Lead Architect",
        metric: "End-to-end autonomous QA",
        summary:
          "Autonomous local video production engine combining Antigravity, Remotion v4, Python DSP/LUTs, FFmpeg, Whisper captions, and an MCP server with automated visual QA.",
        description:
          "Built a multi-agent audiovisual studio architecture capable of taking raw footage and briefs into mastered 1080p/9:16 deliverables. Integrates an immutable raw-asset vault, 3D LUT color grading, beat-aligned editing, two-pass EBU R128 loudness mastering, and post-render frame-grid QA inspection.",
        challenge:
          "Automated video pipelines often fail on mismatched aspect ratios, clipped audio, generic templates, and unverified renders with overlapping captions.",
        solution:
          "Created a custom MCP server + Python DSP toolkit driving Remotion v4 compositions and FFmpeg fast-lane edits, enforced by pre-tool safety hooks and mandatory post-render visual grid verification.",
        techStack: [
          "Remotion v4",
          "React & TypeScript",
          "Python",
          "MCP Server",
          "FFmpeg",
          "Whisper",
        ],
        highlights: [
          "Custom MCP toolset & safety hooks",
          "3D LUT grading & EBU R128 mastering",
          "Whisper word-level subtitle sync",
          "Automated post-render visual QA grid",
        ],
        link: null,
        repoUrl: null,
      },
      {
        id: "dota-erp-crm",
        slug: "dota-erp-crm",
        title: "DOTA ERP / CRM & B2B Engine",
        organization: "DOTA Solutions",
        year: "2025 – 2026",
        role: "AI Full-Stack Engineer",
        metric: "End-to-end ERP/CRM + B2B",
        summary:
          "Custom operational ERP/CRM modules and B2B client-acquisition workflows built from Figma prototypes to production with Next.js, React, and Supabase.",
        description:
          "Designed and built modular client-management, operational tracking, and B2B lead-acquisition tools under DOTA Solutions—bridging Figma UX/UI design with PostgreSQL/Supabase persistence and automated outreach pipelines.",
        challenge:
          "Small service businesses needed tailored operational visibility and lead qualification without the bloat or cost of enterprise CRM suites.",
        solution:
          "Delivered lean, schema-driven Next.js & Supabase modules alongside a dedicated B2B client-acquisition web app with streamlined pipeline stages.",
        techStack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Figma"],
        highlights: [
          "Figma to production UI/UX workflow",
          "Custom ERP & CRM operational modules",
          "Supabase PostgreSQL data layer",
          "B2B client acquisition live app",
        ],
        link: "https://b2b-client-acquisition-system.vercel.app",
        repoUrl: "https://github.com/ivolevy/smartleads-software",
      },
    ],
    experiences: [
      {
        id: "uo-engineer",
        company: "UO Solutions",
        role: "Software & AI Automation Engineer",
        period: "Jul 2022 – Present",
        bullets: [
          {
            lead: "Product Technical Lead (Beeyond Media):",
            text: "led end-to-end development of a global MarTech / DOOH marketplace (React, TypeScript, Node.js, GraphQL) with real-time screen booking and audited analytics.",
          },
          {
            lead: "Autonomous AI & Operations Workflows:",
            text: "engineered Python agentic pipelines integrating Slack API, Telegram (human-in-the-loop), and server/cPanel APIs to automate client updates, backups, and HTTP verification (IAB Argentina, Interact), cutting manual overhead and token usage by >90%.",
          },
          {
            lead: "Full-Stack & API Integrations:",
            text: "built and maintained scalable web platforms, REST APIs, and CRM/e-commerce workflows across React, Next.js, TypeScript, Node.js, Supabase, PHP, and WordPress.",
          },
          {
            lead: "Technical SEO & Data Analytics:",
            text: "implemented technical/semantic SEO architectures and performance dashboards with Google Analytics (GA4), SEMrush, Ahrefs, and Power BI.",
          },
        ],
      },
      {
        id: "dota-solutions",
        company: "DOTA Solutions",
        role: "AI Full-Stack Engineer (Independent Venture)",
        period: "Jan 2025 – May 2026",
        bullets: [
          {
            lead: "Custom ERP & CRM Modules:",
            text: "designed and shipped operational and commercial management modules end-to-end from Figma prototypes to production using Next.js, React, TypeScript, and Supabase.",
          },
          {
            lead: "Agentic Systems & AI Tooling:",
            text: "architected Auteur Studio (autonomous Remotion v4 + Python + FFmpeg + Whisper + MCP video engine) and B2B client-acquisition workflows.",
          },
          {
            lead: "Spotify AI Playlisting (3rd Place Hackathon):",
            text: "built an OpenAI + Spotify Web API engine generating promotional playlists from a prompt in under 2 minutes (~8 hrs/week saved per catalog).",
          },
        ],
      },
      {
        id: "uo-cms",
        company: "UO Solutions",
        role: "CMS & CRM Specialist",
        period: "May 2022 – Jul 2022",
        bullets: [
          {
            lead: "Enterprise Campaigns (Banco Santander):",
            text: "executed responsive technical email marketing campaigns using Adobe Experience CMS, HTML, and CSS.",
          },
          {
            lead: "CRM Automation:",
            text: "operated internal CRM pipelines and technical workflows for automated lead routing and integration.",
          },
        ],
      },
    ],
    skillGroups: [
      {
        id: "ai-agents",
        title: "AI & Agentic Systems",
        summary:
          "Production LLM integrations, deterministic tool orchestration, MCP servers, and human-in-the-loop automation.",
        items: [
          "OpenAI & Anthropic APIs",
          "Claude Agent SDK",
          "MCP (Model Context Protocol)",
          "Claude Code",
          "Antigravity CLI",
          "Human-in-the-Loop Workflows",
          "Prompt Engineering",
        ],
      },
      {
        id: "fullstack",
        title: "Full-Stack & Languages",
        summary:
          "Type-safe web applications, GraphQL/REST APIs, high-craft UI engineering, and legacy platform integrations.",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "GraphQL",
          "REST APIs",
          "Tailwind CSS",
          "PHP & WordPress",
        ],
      },
      {
        id: "data-cloud",
        title: "Data, Cloud & Automation",
        summary:
          "Relational data modeling, serverless deployment, browser automation, and multi-channel bot integrations.",
        items: [
          "PostgreSQL",
          "Supabase",
          "MySQL",
          "Vercel",
          "Git & GitLab",
          "Slack & Telegram APIs",
          "Playwright / Chrome CDP",
        ],
      },
      {
        id: "product-bi",
        title: "Product, BI & Growth",
        summary:
          "Connecting engineering delivery with business strategy, organic acquisition, and executive analytics.",
        items: [
          "Power BI",
          "Google Analytics (GA4)",
          "Technical SEO (SEMrush, Ahrefs)",
          "Google Ads",
          "Figma & UI/UX",
        ],
      },
    ],
    education: [
      {
        degree: "B.S. in Information Technology Management",
        institution: "UADE — Universidad Argentina de la Empresa",
        period: "2022 – Dec 2026 (Expected)",
        detail: "Bridging software engineering, systems architecture, and business strategy.",
      },
      {
        degree: "Full Stack Web Development",
        institution: "Digital House",
        period: "2021 – 2022",
        detail: "Intensive full-stack engineering fundamentals in JavaScript, Node.js, React, and SQL.",
      },
    ],
    certifications: [
      { title: "Microsoft Power BI Analyst", issuer: "Microsoft", detail: "Data Modeling & Viz" },
      { title: "Google SEO Certification", issuer: "Google", detail: "ID: 809120" },
      { title: "Google Display Certification", issuer: "Google", detail: "ID: 225423675" },
    ],
  },

  es: {
    metaTitle: "Ivan Levy — Software Engineer",
    nav: {
      work: "Proyectos",
      experience: "Experiencia",
      skills: "Capacidades",
      contact: "Contacto",
      skip: "Ir al contenido principal",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      switchToLight: "Cambiar a tema claro",
      switchToDark: "Cambiar a tema oscuro",
      langGroup: "Selector de idioma",
    },
    hero: {
      eyebrow: "Software Engineer · Buenos Aires, Argentina",
      headline: "Desarrollo productos web, plataformas escalables y sistemas con IA.",
      bio1: "Más de cuatro años en UO Solutions construyendo aplicaciones full-stack con TypeScript, React, Next.js, Node.js y Python—desde marketplaces globales MarTech como Beeyond Media hasta flujos autónomos en producción.",
      bio2: "En el último tramo de la Licenciatura en Gestión de Tecnologías de la Información en UADE (graduación dic. 2026), integrando arquitectura de software con estrategia de producto y negocio.",
      currentlyLabel: "Actualmente",
      currentlyValue: "UO Solutions",
      degreeLabel: "Carrera",
      degreeValue: "Gestión de TI · Dic 2026",
      resumeLabel: "Curriculum",
      ctaWork: "Ver proyectos",
    },
    projectsSection: {
      title: "Proyectos Destacados",
      subtitle:
        "Productos, plataformas MarTech y flujos de automatización con IA llevados de arquitectura a producción.",
      readCase: "Ver caso de estudio",
      visitSite: "Visitar sitio",
      systemsTitle: "Workflows con IA y Arquitectura de Sistemas",
      systemsHint: "Seleccioná una fila para ver el detalle",
      fullCase: "Caso completo",
      liveApp: "App en vivo",
      github: "GitHub",
    },
    experienceSection: {
      title: "Experiencia",
      subtitle:
        "Más de cuatro años construyendo plataformas web, productos MarTech y automatización con IA en producción.",
    },
    skillsSection: {
      title: "Capacidades y Stack",
      subtitle:
        "Ingeniería full-stack combinada con sistemas agénticos de IA, operaciones cloud y analítica de datos.",
      educationTitle: "Educación",
      languagesLabel: "Idiomas:",
      languagesValue: "Español (Nativo) · Inglés (Avanzado C1 — Formación bilingüe)",
      certificationsTitle: "Certificaciones",
      downloadLabel: "Descargar CV completo (PDF compatible con ATS)",
      resumeEn: "CV (Inglés)",
      resumeEs: "CV (Español)",
    },
    contactSection: {
      title: "Trabajemos juntos.",
      subtitle:
        "Disponible para roles de Full-Stack & AI Software Engineer, desarrollo de producto y arquitectura de automatizaciones.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      companyLabel: "Empresa",
      companyPlaceholder: "Empresa o equipo",
      emailLabel: "Email",
      emailPlaceholder: "nombre@empresa.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Contame sobre el rol o proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      sentOk: "Mensaje enviado. Te respondo a la brevedad.",
      sentErr: "No se pudo enviar. Escribime directo a ivo.levy03@gmail.com.",
    },
    footer: {
      location: "Buenos Aires, Argentina",
    },
    projectDetail: {
      notFound: "Caso de estudio no encontrado",
      backWork: "Volver a Proyectos",
      backSelected: "Volver a Proyectos Destacados",
      role: "Rol",
      timeline: "Período",
      outcome: "Impacto",
      link: "Enlace",
      visitSite: "Visitar sitio",
      internal: "Sistema interno",
      technologies: "Tecnologías",
      highlights: "Puntos clave",
      overview: "Resumen",
      challenge: "El desafío",
      solution: "La solución",
      allWork: "Todos los proyectos",
      next: "Siguiente",
    },
    notFound: {
      desc: "La página que buscás no existe.",
      back: "Volver al portfolio",
    },
    projects: [
      {
        id: "beeyond-media",
        slug: "beeyond-media",
        title: "Beeyond Media",
        organization: "UO Solutions",
        year: "2026",
        role: "Product Technical Lead",
        metric: "Marketplace DOOH global",
        summary:
          "Plataforma global de publicidad Digital Out-Of-Home (DOOH) que simplifica la búsqueda, reserva en tiempo real y analítica auditada de pantallas digitales.",
        description:
          "Lideré el desarrollo end-to-end de un marketplace unificado de publicidad exterior digital en UO Solutions, permitiendo a anunciantes programar, reservar y auditar campañas globales desde un único tablero.",
        challenge:
          "Los anunciantes dependían de operadores fragmentados, disponibilidad opaca de pantallas y reportes manuales lentos.",
        solution:
          "Arquitecté y desarrollé un marketplace de alto rendimiento en React y Node.js respaldado por APIs GraphQL para reservas en tiempo real, segmentación de audiencias y analítica auditada.",
        techStack: ["React", "TypeScript", "Vite", "Node.js", "GraphQL", "Tailwind CSS"],
        highlights: [
          "Liderazgo técnico end-to-end en UO Solutions",
          "Reserva e inventario DOOH en tiempo real",
          "Capa de API GraphQL unificada",
          "Tablero de analítica de tráfico auditada",
        ],
        img: beeyondImg,
        altText: "Panel del marketplace Beeyond Media",
        link: "https://beeyondmedia.com",
        repoUrl: null,
      },
      {
        id: "spotify-ai-playlisting",
        slug: "spotify-ai-playlisting",
        title: "Spotify AI Playlisting",
        organization: "Proyecto Hackathon",
        year: "2025",
        role: "Lead Developer",
        metric: "Ahorra ~8 hs/semana por catálogo",
        summary:
          "Sistema premiado en hackathon (3er puesto) que convierte un prompt en playlists promocionales publicadas en Spotify en menos de 2 minutos.",
        description:
          "Desarrollado en un hackathon competitivo (3er puesto) para sellos discográficos y distribuidoras musicales, automatizando la curaduría de catálogos, ordenamiento sónico, portadas y publicación directa en Spotify Web API.",
        challenge:
          "Los equipos de marketing invertían entre 8 y 10 horas semanales por catálogo emparejando lanzamientos con playlists temáticas.",
        solution:
          "Implementé un motor de orquestación con GPT-4 conectado a la API de Spotify y sus atributos sónicos, publicando playlists completas desde un prompt en menos de 2 minutos.",
        techStack: ["Next.js", "Node.js", "OpenAI API", "Spotify Web API", "TypeScript"],
        highlights: [
          "3er puesto en Hackathon",
          "<2 min desde el prompt hasta la playlist publicada",
          "Ahorro de ~8 horas semanales por catálogo",
          "Integración directa con OAuth y API de Spotify",
        ],
        img: spotifyImg,
        altText: "Interfaz de Spotify AI Playlisting",
        link: "https://spoty-bydota.vercel.app",
        repoUrl: null,
      },
      {
        id: "autonomous-ops",
        slug: "autonomous-ops",
        title: "Motor Autónomo de Operaciones y Despliegue",
        organization: "UO Solutions (IAB Argentina e Interact)",
        year: "2025 – 2026",
        role: "AI & Automation Engineer",
        metric: ">90% reducción operativa y de tokens",
        summary:
          "Pipeline agéntico en Python que conecta Slack, aprobaciones human-in-the-loop en Telegram y APIs de cPanel/FTP para desplegar cambios en producción de forma segura.",
        description:
          "Construí un flujo operativo autónomo para cuentas institucionales (IAB Argentina e Interact Argentina) que escucha pedidos en Slack, interpreta la solicitud, respalda archivos remotos, aplica cambios locales, despliega por APIs de cPanel/FTP, valida HTTP en vivo y pide confirmación en Telegram antes de responder al cliente.",
        challenge:
          "Las actualizaciones frecuentes en sitios PHP/HTML requerían tareas manuales repetitivas por cPanel/FTP, alto consumo de contexto en LLMs y riesgo de errores sin respaldo.",
        solution:
          "Diseñé un watcher en Python y scripts determinísticos basados en plantillas (>99% menos consumo de tokens al publicar noticias) con backups automáticos, verificación HTTP post-despliegue y puerta de aprobación por Telegram.",
        techStack: [
          "Python",
          "Slack API",
          "Telegram Bot API",
          "cPanel / FTP APIs",
          "LLM Routing",
          "Human-in-the-Loop",
        ],
        highlights: [
          "Escucha de eventos en Slack y clasificación de pedidos",
          "Backup automático previo a cada edición",
          ">90% reducción de tiempo manual y consumo de tokens",
          "Aprobación obligatoria en Telegram antes de notificar",
        ],
        link: null,
        repoUrl: null,
      },
      {
        id: "auteur-studio",
        slug: "auteur-studio",
        title: "Auteur AI Audiovisual Studio",
        organization: "DOTA Lab",
        year: "2026",
        role: "Creador y Arquitecto Principal",
        metric: "QA visual autónomo de punta a punta",
        summary:
          "Motor local de producción audiovisual autónoma que combina Antigravity, Remotion v4, Python DSP/LUTs, FFmpeg, subtítulos con Whisper y servidor MCP con QA visual.",
        description:
          "Arquitecté un estudio audiovisual multi-agente capaz de transformar material crudo y un brief en entregables masterizados 1080p/9:16. Integra bóveda inmutable de originales, gradación 3D LUT, edición al ritmo musical, masterización EBU R128 en 2 pasadas e inspección visual post-render.",
        challenge:
          "Los pipelines automatizados de video suelen fallar en encuadres, niveles de audio dispares, plantillas genéricas y subtítulos superpuestos sin verificación.",
        solution:
          "Creé un servidor MCP propio y utilidades DSP en Python que orquestan composiciones Remotion v4 y carril rápido FFmpeg, protegidos por hooks de seguridad y auditoría obligatoria por grilla de frames.",
        techStack: [
          "Remotion v4",
          "React & TypeScript",
          "Python",
          "MCP Server",
          "FFmpeg",
          "Whisper",
        ],
        highlights: [
          "Toolset MCP propio con hooks de protección",
          "Gradación 3D LUT y masterización EBU R128",
          "Subtitulado palabra por palabra con Whisper",
          "Auditoría visual automática post-render",
        ],
        link: null,
        repoUrl: null,
      },
      {
        id: "dota-erp-crm",
        slug: "dota-erp-crm",
        title: "DOTA ERP / CRM y Motor B2B",
        organization: "DOTA Solutions",
        year: "2025 – 2026",
        role: "AI Full-Stack Engineer",
        metric: "ERP/CRM y adquisición B2B end-to-end",
        summary:
          "Módulos operativos ERP/CRM a medida y flujos de prospección B2B construidos desde prototipos en Figma hasta producción con Next.js, React y Supabase.",
        description:
          "Diseñé y desarrollé módulos modulares de gestión de clientes, seguimiento operativo y adquisición B2B bajo DOTA Solutions—conectando diseño UI/UX en Figma con persistencia PostgreSQL/Supabase y flujos comerciales.",
        challenge:
          "Equipos de servicios necesitaban visibilidad operativa y calificación de leads a medida sin la complejidad ni el costo de suites ERP corporativas.",
        solution:
          "Construí módulos ágiles orientados a esquema en Next.js y Supabase junto con una aplicación web dedicada de adquisición de clientes B2B.",
        techStack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Figma"],
        highlights: [
          "Ciclo completo desde Figma hasta producción",
          "Módulos ERP y CRM personalizados",
          "Persistencia PostgreSQL con Supabase",
          "App en vivo de prospección B2B",
        ],
        link: "https://b2b-client-acquisition-system.vercel.app",
        repoUrl: "https://github.com/ivolevy/smartleads-software",
      },
    ],
    experiences: [
      {
        id: "uo-engineer",
        company: "UO Solutions",
        role: "Software & AI Automation Engineer",
        period: "Jul 2022 – Presente",
        bullets: [
          {
            lead: "Liderazgo técnico de producto (Beeyond Media):",
            text: "lideré el desarrollo end-to-end de un marketplace global MarTech / DOOH (React, TypeScript, Node.js, GraphQL) con reservas en tiempo real y analítica auditada.",
          },
          {
            lead: "Agentes autónomos y automatización operativa:",
            text: "diseñé workflows agénticos en Python integrando Slack API, Telegram (human-in-the-loop) y APIs de cPanel/hosting para automatizar pedidos de clientes, respaldos y verificación HTTP en producción (IAB Argentina, Interact), reduciendo tareas manuales y consumo de tokens en >90%.",
          },
          {
            lead: "Desarrollo Full-Stack e integraciones:",
            text: "construcción y mantenimiento de plataformas web escalables, APIs REST y flujos CRM/e-commerce con React, Next.js, TypeScript, Node.js, Supabase, PHP y WordPress.",
          },
          {
            lead: "SEO técnico y analítica de datos:",
            text: "implementación de arquitectura SEO técnica/semántica y tableros de rendimiento con Google Analytics (GA4), SEMrush, Ahrefs y Power BI.",
          },
        ],
      },
      {
        id: "dota-solutions",
        company: "DOTA Solutions",
        role: "AI Full-Stack Engineer (Emprendimiento Independiente)",
        period: "Ene 2025 – May 2026",
        bullets: [
          {
            lead: "Módulos ERP y CRM a medida:",
            text: "diseñé y desarrollé sistemas de gestión operativa y comercial de punta a punta desde prototipos en Figma hasta producción con Next.js, React, TypeScript y Supabase.",
          },
          {
            lead: "Sistemas agénticos y herramientas de IA:",
            text: "arquitecté Auteur Studio (motor audiovisual autónomo con Remotion v4, Python, FFmpeg, Whisper y MCP) y flujos de prospección B2B.",
          },
          {
            lead: "Spotify AI Playlisting (3er puesto Hackathon):",
            text: "desarrollé un motor con OpenAI y Spotify Web API que genera playlists promocionales desde un prompt en menos de 2 minutos (~8 hs/semana ahorradas por catálogo).",
          },
        ],
      },
      {
        id: "uo-cms",
        company: "UO Solutions",
        role: "CMS & CRM Specialist",
        period: "May 2022 – Jul 2022",
        bullets: [
          {
            lead: "Campañas Enterprise (Banco Santander):",
            text: "ejecución de campañas técnicas de email marketing en Adobe Experience CMS con maquetación responsive avanzada en HTML y CSS.",
          },
          {
            lead: "Automatización CRM:",
            text: "operación de pipelines internos y workflows técnicos para la integración y seguimiento automático de leads.",
          },
        ],
      },
    ],
    skillGroups: [
      {
        id: "ai-agents",
        title: "IA y Sistemas Agénticos",
        summary:
          "Integración de LLMs en producción, orquestación determinística de herramientas, servidores MCP y automatización human-in-the-loop.",
        items: [
          "OpenAI & Anthropic APIs",
          "Claude Agent SDK",
          "MCP (Model Context Protocol)",
          "Claude Code",
          "Antigravity CLI",
          "Workflows Human-in-the-Loop",
          "Prompt Engineering",
        ],
      },
      {
        id: "fullstack",
        title: "Full-Stack y Lenguajes",
        summary:
          "Aplicaciones web tipadas, APIs GraphQL y REST, ingeniería de interfaces y evolución de plataformas en producción.",
        items: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "GraphQL",
          "REST APIs",
          "Tailwind CSS",
          "PHP y WordPress",
        ],
      },
      {
        id: "data-cloud",
        title: "Datos, Cloud y Automatización",
        summary:
          "Modelado relacional, despliegues serverless, automatización de navegador e integraciones multicanal por API.",
        items: [
          "PostgreSQL",
          "Supabase",
          "MySQL",
          "Vercel",
          "Git y GitLab",
          "Slack & Telegram APIs",
          "Playwright / Chrome CDP",
        ],
      },
      {
        id: "product-bi",
        title: "Producto, BI y Growth",
        summary:
          "Conexión entre ejecución técnica, estrategia de negocio, adquisición orgánica y analítica ejecutiva.",
        items: [
          "Power BI",
          "Google Analytics (GA4)",
          "SEO Técnico (SEMrush, Ahrefs)",
          "Google Ads",
          "Figma y UI/UX",
        ],
      },
    ],
    education: [
      {
        degree: "Licenciatura en Gestión de Tecnologías de la Información",
        institution: "UADE — Universidad Argentina de la Empresa",
        period: "2022 – Dic 2026",
        detail: "Puente entre ingeniería de software, arquitectura de sistemas y estrategia de negocio.",
      },
      {
        degree: "Programación Web Full Stack",
        institution: "Digital House",
        period: "2021 – 2022",
        detail: "Bases intensivas de desarrollo full-stack en JavaScript, Node.js, React y SQL.",
      },
    ],
    certifications: [
      { title: "Microsoft Power BI Analyst", issuer: "Microsoft", detail: "Modelado y Vis." },
      { title: "Google SEO Certification", issuer: "Google", detail: "ID: 809120" },
      { title: "Google Display Certification", issuer: "Google", detail: "ID: 225423675" },
    ],
  },
};
