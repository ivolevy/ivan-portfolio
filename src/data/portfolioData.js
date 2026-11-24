import spotifyImg from "../assets/images/projects/Screen Shot 2026-07-30 at 09.56.05.png";
import beeyondImg from "../assets/images/projects/Screen Shot 2026-07-30 at 11.03.57.png";

export const profile = {
  name: "Ivan Levy",
  role: "Full-Stack & AI Software Engineer",
  location: "Buenos Aires, Argentina",
  availability: "Open to Full-Stack & AI Engineering · Graduating Dec 2026",
  email: "ivo.levy03@gmail.com",
  phone: "+54 9 11 3824-0929",
  whatsappUrl: "https://wa.me/5491138240929",
  linkedinUrl: "https://www.linkedin.com/in/ivan-levy/",
  githubUrl: "https://github.com/ivolevy",
  instagramUrl: "https://www.instagram.com/ivo.levy",
  cvEnUrl: "/IVAN LEVY - CV (EN).pdf",
  cvEsUrl: "/IVAN LEVY - CV (ES).pdf",
};

export const projects = [
  {
    id: "autonomous-ops",
    slug: "autonomous-ops",
    tabLabel: "Ops Agent",
    title: "Autonomous Ops & Deployment Engine",
    category: "AI Agents",
    tagLine: "AGENTIC WORKFLOWS · PRODUCTION INFRASTRUCTURE",
    year: "2025 – 2026",
    role: "AI & Automation Engineer",
    organization: "UO Solutions (IAB Argentina & Interact)",
    featured: true,
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
    pipelineSteps: [
      { node: "Slack", detail: "Client request parsed" },
      { node: "Python Agent", detail: "Backup + deterministic edit" },
      { node: "cPanel / FTP", detail: "Deploy + HTTP 200 check" },
      { node: "Telegram HITL", detail: "Approve & notify" },
    ],
    diagramType: "ops",
    link: null,
    repoUrl: null,
  },
  {
    id: "beeyond-media",
    slug: "beeyond-media",
    tabLabel: "Beeyond Media",
    title: "Beeyond Media",
    category: "Full-Stack",
    tagLine: "DOOH ADVERTISING · MARTECH PLATFORM",
    year: "2026",
    role: "Product Technical Lead",
    organization: "UO Solutions",
    featured: true,
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
    pipelineSteps: [
      { node: "Marketplace UI", detail: "React + TS + Tailwind" },
      { node: "GraphQL Layer", detail: "Unified network schema" },
      { node: "Booking Engine", detail: "Real-time slot lock" },
      { node: "Analytics", detail: "Audited impression metrics" },
    ],
    img: beeyondImg,
    altText: "Beeyond Media digital billboard marketplace dashboard",
    link: "https://beeyondmedia.com",
    repoUrl: null,
  },
  {
    id: "auteur-studio",
    slug: "auteur-studio",
    tabLabel: "Auteur Studio",
    title: "Auteur AI Audiovisual Studio",
    category: "AI Agents",
    tagLine: "MCP SERVER · REMOTION V4 · DSP ENGINE",
    year: "2026",
    role: "Creator & Lead Architect",
    organization: "DOTA Lab",
    featured: false,
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
    pipelineSteps: [
      { node: "MCP + Brief", detail: "Creative direction JSON" },
      { node: "Python DSP", detail: "Beat sync + 3D LUT + LUFS" },
      { node: "Remotion v4", detail: "Multi-format composition" },
      { node: "Visual QA", detail: "Grid frame inspection" },
    ],
    diagramType: "auteur",
    link: null,
    repoUrl: null,
  },
  {
    id: "spotify-ai-playlisting",
    slug: "spotify-ai-playlisting",
    tabLabel: "Spotify AI",
    title: "Spotify AI Playlisting",
    category: "AI Agents",
    tagLine: "3RD PLACE HACKATHON · MUSIC TECH",
    year: "2025",
    role: "Lead Developer",
    organization: "Hackathon Project",
    featured: false,
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
    pipelineSteps: [
      { node: "Prompt", detail: "Mood & campaign brief" },
      { node: "OpenAI Engine", detail: "Catalog semantic match" },
      { node: "Sequencer", detail: "Sonic flow ordering" },
      { node: "Spotify API", detail: "Publish + cover art" },
    ],
    img: spotifyImg,
    altText: "Spotify AI Playlisting interface",
    link: "https://spoty-bydota.vercel.app",
    repoUrl: null,
  },
  {
    id: "dota-erp-crm",
    slug: "dota-erp-crm",
    tabLabel: "DOTA ERP/CRM",
    title: "DOTA ERP / CRM & B2B Engine",
    category: "Full-Stack",
    tagLine: "SAAS ARCHITECTURE · CLIENT ACQUISITION",
    year: "2025 – 2026",
    role: "AI Full-Stack Engineer",
    organization: "DOTA Solutions",
    featured: false,
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
    pipelineSteps: [
      { node: "Figma Spec", detail: "Component & UX system" },
      { node: "Next.js App", detail: "Modular ERP/CRM views" },
      { node: "Supabase", detail: "Auth + Postgres RLS" },
      { node: "B2B Flow", detail: "Pipeline & outreach" },
    ],
    diagramType: "erp",
    link: "https://b2b-client-acquisition-system.vercel.app",
    repoUrl: "https://github.com/ivolevy/smartleads-software",
  },
];

export const experiences = [
  {
    id: "uo-engineer",
    company: "UO Solutions",
    role: "Software & AI Automation Engineer",
    period: "Jul 2022 – Present",
    type: "Full-time",
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
    type: "Independent Lab",
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
    type: "Full-time",
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
];

export const skillGroups = [
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
];

export const education = [
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
];

export const certifications = [
  { title: "Microsoft Power BI Analyst", issuer: "Microsoft", detail: "Data Modeling & Visualization" },
  { title: "Google SEO Certification", issuer: "Google", detail: "ID: 809120" },
  { title: "Google Display Certification", issuer: "Google", detail: "ID: 225423675" },
];
