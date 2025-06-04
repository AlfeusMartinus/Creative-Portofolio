import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me🚀</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate and versatile Full Stack Developer with a strong focus on Front-end Development. My expertise spans across both web and mobile platforms, where I excel in creating responsive, user-centric applications. In web development, I specialize in modern frameworks like <b className="font-bold text-cyan-50">React</b>, <b className="font-bold text-cyan-50">TypeScript</b>, and <b className="font-bold text-cyan-50">Next.js</b>, delivering robust and scalable solutions. For mobile development, I leverage <b className="font-bold text-cyan-50">Kotlin</b>, <b className="font-bold text-cyan-50">Jetpack Compose</b>, and <b className="font-bold text-cyan-50">Flutter</b> to build cross-platform applications with native-like performance.

        Beyond front-end development, I possess comprehensive back-end capabilities, including <b className="font-bold text-cyan-50">Node.js</b> and <b className="font-bold text-cyan-50">Express.js</b> for server-side development. My database expertise encompasses both SQL and NoSQL solutions, with proficiency in <b className="font-bold text-cyan-50">PostgreSQL</b>, <b className="font-bold text-cyan-50">MongoDB</b>, and <b className="font-bold text-cyan-50">Redis</b>. I am well-versed in designing and implementing <b className="font-bold text-cyan-50">RESTful APIs</b>, ensuring seamless integration between front-end and back-end systems.

        I am committed to writing clean, maintainable code and following industry best practices. My approach combines technical excellence with a strong focus on user experience, enabling me to deliver high-quality solutions that meet both technical requirements and user needs.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
