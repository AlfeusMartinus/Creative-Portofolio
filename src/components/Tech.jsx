import { motion } from "framer-motion";
import { technologies } from "../constants";

const TechIcon = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    viewport={{ once: true }}
    className="w-20 h-20 md:w-24 md:h-24 glass-card p-4 md:p-6 flex items-center justify-center hover:bg-white/10 group"
  >
    <img
      src={icon}
      alt={name}
      className="w-10 h-10 md:w-12 md:h-12 grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
      loading="lazy"
    />
  </motion.div>
);

const Tech = () => {
  return (
    <section className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border-white/10 text-center relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -z-10 pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 md:mb-16">
            Tech Stack.
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <TechIcon key={tech.name} {...tech} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12 text-sm md:text-base text-slate-400 max-w-2xl mx-auto"
          >
            TypeScript, Node.js, Next.js, Kotlin, Google Cloud Platform (GCP), Docker, Architecture Patterns, Scalable System Design
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
