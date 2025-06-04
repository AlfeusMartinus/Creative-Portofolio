import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SocialMedia } from "../constants";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'hasInternet ? "Online and unstoppable! 🌐💪" : "No internet? Guess I\'ll just stare at my code. 🫠";',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center gap-5 pt-10`}
      >
        <div>
          <div className="flex gap-3 select-none">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-2 sm:h-52 h-36 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className="font-black text-white lg:text-[50px] sm:text-[60px] xs:text-[50px] text-[33px] lg:leading-[68px] mt-2">
                console.log <br /> ('
                <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Alfeus Martinus
                </span>
                ');
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}
              >
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          {/* <a
              href="#about"
              className="w-fit mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none">
              <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
                <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
              </div>

              <p>Pencet Ini</p>
            </a> */}
        </div>

        <div className="w-full">
          <div className="mt-10 flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card">
            <div className="bg-avatar bg-cover bg-no-repeat bg-[50%] justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
          </div>
          <motion.div
            className="flex items-center justify-center md:gap-16 gap-8 md:m-0"
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {SocialMedia.map(({ id, icon, navigate }) => (
              <a
                href={navigate}
                target="_blank"
                key={id}
                className={`xl:w-[90px] xl:h-[90px] md:w-24 md:h-24 w-14 h-14 cursor-pointer ${
                  id === 2 || id === 3 ? "md:mt-20 mt-12" : "mt-0"
                }`}
              >
                <motion.img
                  src={icon}
                  alt="logo"
                  whileHover={{ scale: 1.13, rotate: 10 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
