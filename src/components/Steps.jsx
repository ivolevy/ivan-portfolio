import { motion } from "framer-motion";
import "../assets/styles/steps.css";

export const Steps = () => {
  const steps = [
    { id: 1, title: "Financial Accountant", description: "Jan 2022 - Apr 2022" },
    { id: 2, title: "CRM Specialist - UO Solutions", description: "May 2022 - Jul 2022" },
    { id: 3, title: "Front-End Web Developer & Designer - UO Solutions", description: "Aug 2022 - Present" },
    { id: 4, title: "WordPress Developer", description: "Sep 2023 - Present" },
  ];

  return (
    <section className="flex flex-col items-center stepsSection py-20" aria-labelledby="steps-title">
      <h2 id="steps-title" className="text-lg mb-5 text-center stepsTitle">
        Professional <span className="text-pink-400">Experience</span>
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl" role="list">
        <div className="absolute w-1 bg-pink-300 rounded-full h-full left-1/2 transform -translate-x-1/2"></div>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex w-full mb-4 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            role="listitem"
          >
            <div className="w-1/2 flex flex-col items-center bg-white p-4 steps">
              <h3 className="text-lg font-semibold mt-2 text-center stepsTitleSquare">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-base mt-10 text-center pl-14 pr-14 stepsTitle">
        Currently working on website development using <span className="text-pink-400">HTML, CSS, React, PHP</span>.  
        Experienced in WordPress development with <span className="text-pink-400">Elementor, Divi</span>.  
        Skilled in FTP management using <span className="text-pink-400">FileZilla</span> for the IAB news blog (news layout with <span className="text-pink-400">PHP</span>, general site maintenance).  
        Proficient in site management for Interact via <span className="text-pink-500">cPanel</span>.
      </p>
    </section>
  );
};
