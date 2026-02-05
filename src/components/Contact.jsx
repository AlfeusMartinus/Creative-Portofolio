import { motion } from "framer-motion";
import { personalInfo, SocialMedia } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <span className="hash-span" id="contact">
        &nbsp;
      </span>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Let's build together 🤝
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto">
              Reach out through any of my social channels for collaborations or project inquiries.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-10">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 glass-card p-5 md:p-6 bg-white/5 border-white/5 hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">mail</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">
                  Direct Line
                </div>
                <div className="font-bold text-sm md:text-base">{personalInfo.email}</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 glass-card p-5 md:p-6 bg-white/5 border-white/5"
            >
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">location_on</span>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50 mb-1">
                  Location
                </div>
                <div className="font-bold text-sm md:text-base">{personalInfo.location}</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {SocialMedia.map((social, index) => (
              <motion.a
                key={social.id}
                href={social.navigate}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="glass-card p-4 md:p-5 hover:bg-white/10 flex items-center gap-3"
                aria-label={social.label}
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-6 h-6 md:w-7 md:h-7 opacity-80"
                  loading="lazy"
                />
                <span className="text-sm font-medium hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
