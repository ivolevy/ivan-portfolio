import { motion } from "framer-motion";
import "../assets/styles/services.css";

const SkillCard = ({ title, skills }) => (
  <motion.article
    className="relative bg-white borderRadius p-10 flex flex-col shadow-md min-h-[200px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    role="article"
  >
    <h3 className="font-semibold text-2xl">{title}</h3>
    <ul className="text-gray-500 text-sm mt-2 list-disc pl-5">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </motion.article>
);

export default function Skills() {
  return (
    <section className="p-8 rounded-lg servicesSection pt-0 pb-20" id="skills">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My <span className="border-b-4 border-black pb-1">Skills & Expertise</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <SkillCard
          title="Technical Skills"
          skills={[
            "HTML, CSS, Tailwind, JavaScript, React, WordPress, PHP",
            "SQL, SQL Server",
            "Vercel, Git, FileZilla",
            "Adobe Suite, Figma, XAMPP",
            "Google Ads",
            "Artificial Intelligence for Web Development and ERP/CRM Systems",
            "Next.js & React Ecosystem",
            "PostgreSQL & Database Design",
            "AI/ML Integration",
            "API Development & Integration",
            "Cloud Services (AWS/Vercel)",
            "DevOps & CI/CD",
            "TypeScript",
            "RESTful APIs"
          ]}
        />
        <SkillCard
          title="Soft Skills"
          skills={[
            "Agile Methodologies",
            "Effective Communication",
            "Leadership",
            "Problem-Solving",
            "Creativity",
            "Team Leadership & Management",
            "Strategic Planning",
            "Innovation & AI Integration",
            "Client Relationship Management",
            "Project Management",
            "Business Analysis",
            "Resource Optimization",
            "Technical Documentation",
            "Cross-functional Team Collaboration"
          ]}
        />
        <SkillCard
          title="Languages"
          skills={["Spanish (Native)", "English (Advanced)", "Hebrew (Basic)"]}
        />
        <SkillCard
          title="Education & Certifications"
          skills={[
            "Bachelor's in Economics - Scholem Aleijem High School (2016-2020)",
            "Full Stack Web Development - Digital House (2021-2022)",
            "Bachelor's in IT Management - UADE (2022-Present)",
            "Google Display Certification (ID: 225423675)",
            "Google SEO Certification (ID: 809120)",
          ]}
        />
      </div>
    </section>
  );
}
