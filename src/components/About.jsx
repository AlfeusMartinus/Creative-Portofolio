import React from "react";
import { motion } from "framer-motion";
import { personalInfo, stats, services } from "../constants";

const StatCard = ({ value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6 md:p-8 text-center border-white/20 bg-white/10"
  >
    <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
      {value}
    </div>
    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">
      {label}
    </div>
  </motion.div>
);

const ServiceCard = ({ title, icon, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6 md:p-8 group"
  >
    <img
      src={icon}
      alt={title}
      className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300"
    />
    <h3 className="font-bold text-lg md:text-xl mb-2">{title}</h3>
    <p className="text-sm opacity-60">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-8 bg-primary"></div>
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                Full-Stack Developer
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              About My <br />
              Craft 🧪
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            {personalInfo.bio}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-white/20 relative shadow-2xl backdrop-blur-3xl">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <StatCard key={stat.label} {...stat} index={index} />
                ))}
              </div>
              <div className="space-y-4 md:space-y-8 mt-8 md:mt-12">
                {stats.slice(2, 4).map((stat, index) => (
                  <StatCard key={stat.label} {...stat} index={index + 2} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default About;
