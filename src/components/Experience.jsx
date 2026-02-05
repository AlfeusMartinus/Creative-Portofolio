import { motion } from "framer-motion";
import { experiences, organizationalExperience, achievements, education } from "../constants";

const ExperienceCard = ({ experience, index, isRight = false }) => (
  <div className={`relative flex items-center md:justify-between ${isRight ? "flex-row-reverse" : ""} group`}>
    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
      <div className="glass-node animate-pulse-glow"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="ml-12 md:ml-0 md:w-[45%] glass-card p-6 md:p-8"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <time className="font-mono text-xs font-bold text-primary mb-1 block">
            {experience.date}
          </time>
          <h3 className="text-lg md:text-xl font-bold">{experience.title}</h3>
          <p className="text-slate-400 text-sm">{experience.company_name}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {experience.points.slice(0, 2).map((point, idx) => (
          <li key={idx} className="text-sm opacity-80 leading-relaxed flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const AchievementCard = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6 border-primary/30"
  >
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-2xl">emoji_events</span>
      <div>
        <h4 className="font-bold text-sm md:text-base mb-1">{title}</h4>
        <p className="text-xs md:text-sm opacity-70">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <span className="hash-span" id="experience">
        &nbsp;
      </span>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
            Career Journey
          </h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Professional Path
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-8 rounded-[2rem] mb-12 md:mb-16"
        >
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg md:text-xl">{education.institution}</h3>
                <span className="font-mono text-xs text-primary font-bold">{education.period}</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">{education.degree} • GPA: {education.gpa}</p>
              <p className="text-sm opacity-80 leading-relaxed">
                <strong>Thesis:</strong> {education.thesis}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12 md:mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} index={index} />
          ))}
        </div>

        <div className="relative space-y-12 md:space-y-16">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0">
            <div className="glass-tube h-full"></div>
          </div>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isRight={index % 2 !== 0}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
            Organizational Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {organizationalExperience.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h4 className="font-bold">{org.title}</h4>
                  <span className="font-mono text-xs text-primary">{org.date}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{org.organization}</p>
                <ul className="space-y-1">
                  {org.points.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="text-xs opacity-70 flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
