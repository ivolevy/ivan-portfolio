import { motion } from "framer-motion";
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Financial Accounting Assistant",
      company: "Estudio Matlin", 
      period: "Jan 2022 - Apr 2022",
      description: "Management of administrative and accounting operations, including invoice control, processing of financial transactions, handling of checks, and preparation of both corporate and personal balance sheets."
    },
    {
      id: 2,
      title: "CRM Specialist",
      company: "UO Solutions",
      period: "May 2022 - Jul 2022",
      description: "Email campaign execution for Banco Santander using Adobe’s CMS platform – Responsible for implementing layout adjustments and updates to email templates using HTML and CSS, ensuring responsive design and brand consistency across devices."
    },
    {
      id: 3,
      title: "Front-End Web Developer & Designer",
      company: "UO Solutions",
      period: "Aug 2022 - Present",
      description: "Full-stack website development with HTML, CSS, JavaScript, React, and PHP. Advanced WordPress development (Elementor, Divi, WooCommerce) including plugin customization and e-commerce integrations. Skilled in FTP management with FileZilla, content publishing, and news/blog layouts using PHP. Proficient in website administration through cPanel, covering domain/DNS configuration, database management (MySQL, phpMyAdmin), backups, security hardening, and performance optimization (caching, CDN, SEO). Experienced in CRM-based workflows, analytics tools (Google Analytics, Search Console), email marketing integrations (Mailchimp, HubSpot), and content management processes. Knowledge of version control (Git/GitHub) and cloud services (Vercel, Supabase) for scalable web solutions. Projects developed and maintained for leading companies and organizations worldwide, ensuring high standards of quality, performance, and scalability."
    },
    {
      id: 4,
      title: "CTO & DevOps Lead",
      company: "Dota Solutions",
      period: "Jan 2025 - Present",
      description: "I lead a collaborative project: a SaaS startup dedicated to building custom digital systems that streamline processes, automate operations, and help businesses increase revenue. I’m responsible for the overall business management and lead the entire technological development, including the design and development of the startup’s website. I also drive the strategic use of artificial intelligence to deliver faster, more efficient, and highly optimized solutions—maximizing value for both the company and our clients."
    }
  ];

  return (
    <section className="py-32 relative" id="experience" style={{ scrollMarginTop: '60px' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-normal text-white mb-2 font-serif"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-serif">Professional</span> <span className="font-serif italic text-pink-400">Experience</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-white/20 ml-3 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="relative" 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Dot with cut effect */}
              <span className="absolute -left-[4.5px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-[6px] ring-[#0a0a0a]"></span>
              
              <div className="group" style={{ marginLeft: '120px' }}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                  <h3 className="text-xl font-medium text-white group-hover:text-pink-200 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-300 font-mono mt-1 sm:mt-0"> {/* Lighter gray for date */}
                    {exp.period}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-pink-400 font-bold tracking-wide uppercase text-sm">{exp.company}</span> {/* Bold and standard pink for visibility */}
                </div>

                <p className="text-gray-300 font-light leading-relaxed text-base"> {/* Lighter gray for description */}
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
