import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link, demo_link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card group overflow-hidden relative h-[380px] md:h-[450px]"
  >
    <img
      src={image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="View Source Code"
      >
        <span className="material-symbols-outlined text-white text-xl">code</span>
      </a>
      <a
        href={demo_link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="View Demo"
      >
        <span className="material-symbols-outlined text-white text-xl">open_in_new</span>
      </a>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
      <div className="glass p-5 md:p-6 rounded-xl border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg md:text-xl font-bold text-white mb-3">{name}</h3>
        <p className="text-sm text-slate-300 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-1 rounded"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <span className="hash-span" id="projects">
        &nbsp;
      </span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-20 text-center md:text-left"
      >
        <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
          Portfolio
        </h4>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Featured Projects
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl">
          A showcase of my recent work spanning mobile apps, web applications, and more.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/AlfeusMartinus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-pill px-8 py-4 text-sm font-semibold hover:bg-white/15 transition-colors"
        >
          View More on GitHub
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Works;
