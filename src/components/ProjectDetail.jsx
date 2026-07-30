import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import spotify from "../assets/images/projects/Screen Shot 2026-07-30 at 09.56.05.png";
import beeyond from "../assets/images/projects/Screen Shot 2026-07-30 at 11.03.57.png";

const projectsData = {
  "spotify-ai-playlisting": {
    title: "Spotify AI Playlisting",
    category: "AI AUTOMATION · MUSIC TECH",
    year: "2024",
    role: "Lead Developer",
    techStack: ["Next.js", "Vite", "Node.js", "OpenAI API", "Spotify API"],
    description: "An AI-powered playlisting system built specifically for record labels and music distribution companies. The system completely automates the workflow of generating massive, thematic playlists of label artists based on metadata, target demographics, and sonic characteristics.",
    challenge: "Record labels manually spent up to 8-10 hours weekly per artist catalog matching new releases with appropriate promotional playlists and compiling thematic collections. This manual task was highly prone to delays, inconsistencies, and distribution gaps.",
    solution: "By building a smart GPT-4 prompted engine integrated directly with the Spotify Web API, we created a dashboard where labels can input a single text prompt describing a mood, theme, or marketing campaign. In less than 2 minutes, the platform audits the catalog, structures a cohesive playlist flow, generates premium cover assets, and publishes the list directly to Spotify.",
    img: spotify,
    link: "https://spoty-bydota.vercel.app",
    nextSlug: "beeyond-media"
  },
  "beeyond-media": {
    title: "Beeyond Media",
    category: "DOOH ADVERTISING · MARTECH",
    year: "2025",
    role: "Full-Stack Developer",
    techStack: ["React", "Vite", "Node.js", "GraphQL", "Tailwind CSS"],
    description: "A premium Digital Out-Of-Home (DOOH) advertising platform that simplifies the process of buying, managing, and optimizing digital billboard campaigns globally.",
    challenge: "Advertisers historically struggled to access, book, and monitor outdoor digital displays dynamically due to fragmented network operators and opaque pricing models.",
    solution: "We built an intuitive, unified DOOH marketplace linking global display networks, enabling real-time campaign scheduling, audience targeting, and traffic auditing in a single dashboard.",
    img: beeyond,
    link: "https://beeyondmedia.com",
    nextSlug: "spotify-ai-playlisting"
  }
};

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F5F0] text-gray-900 px-6">
        <h1 className="text-4xl font-serif mb-4">Project not found</h1>
        <Link to="/#projects" className="text-sm text-celeste hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-celeste tracking-wider uppercase transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-16">
          <span className="block text-xs font-mono tracking-widest text-celeste uppercase mb-3">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 leading-tight mb-8">
            {project.title}
          </h1>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-250/60 mt-12 text-sm font-light">
            <div>
              <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1.5 font-semibold">Role</span>
              <span className="text-gray-800">{project.role}</span>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1.5 font-semibold">Year</span>
              <span className="text-gray-800">{project.year}</span>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1.5 font-semibold">Tech Stack</span>
              <span className="text-gray-800">{project.techStack.join(", ")}</span>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1.5 font-semibold">Live Site</span>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-celeste hover:underline font-normal"
              >
                Visit Link
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </header>

        {/* Showcase Image */}
        <section className="mb-20 rounded-[32px] overflow-hidden shadow-md border border-gray-200 bg-white">
          <img 
            src={project.img} 
            alt={project.altText} 
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </section>

        {/* Detailed Walkthrough */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800 font-light leading-relaxed mb-24">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif font-medium text-gray-900">
              Overview & <br />
              <span className="italic text-celeste">Context</span>
            </h2>
          </div>
          <div className="md:col-span-2 text-sm space-y-8 text-gray-655">
            <p>{project.description}</p>
            
            <div>
              <h4 className="font-serif text-lg text-gray-900 mb-2 font-medium">The Challenge</h4>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-gray-900 mb-2 font-medium">The Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-t border-gray-200 pt-12 flex items-center justify-between">
          <Link 
            to="/#projects" 
            className="text-xs font-semibold text-gray-500 hover:text-celeste tracking-wider uppercase transition-colors"
          >
            ← Back
          </Link>
          
          <Link 
            to={`/projects/${project.nextSlug}`} 
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-850 hover:text-celeste tracking-wider uppercase transition-colors"
          >
            Next Project
            <ChevronRight size={14} />
          </Link>
        </footer>

      </div>
    </main>
  );
};
