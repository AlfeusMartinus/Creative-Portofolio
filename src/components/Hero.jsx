import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { personalInfo, SocialMedia } from "../constants";
import { avatar } from "../assets";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-10 group"
      >
        <div className="absolute inset-0 bg-primary blur-[100px] opacity-25 rounded-full"></div>

        <div className="relative p-2 rounded-3xl glass backdrop-blur-3xl border-white/30">
          <img
            src={avatar}
            alt="Alfeus Martinus Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover relative z-10 shadow-2xl"
            loading="eager"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute -bottom-3 -right-6 glass-pill px-4 py-2 border-white/40 flex items-center gap-2 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            Open to Work
          </span>
        </motion.div>
      </motion.div>

      <div className="max-w-4xl text-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass px-5 py-2 rounded-full inline-flex items-center gap-2 border-white/10"
        >
          <span className="text-sm font-mono text-primary font-bold">
            const dev = "Alfeus";
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-tight"
        >
          Alfeus{" "}
          <span className="gradient-text">Martinus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-white font-medium">
            <Typewriter
              words={[
                "Software Engineer",
                "Full-Stack Developer",
                "Frontend Specialist",
                "Mobile Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
          <br />
          <span className="text-base md:text-lg">
            {personalInfo.tagline}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-6"
        >
          {SocialMedia.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.navigate}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              className="glass-card p-4 hover:bg-white/10"
              aria-label={social.label}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-6 h-6 md:w-7 md:h-7 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
