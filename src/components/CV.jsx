import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { CVDuncan, myWords } from "../constants";

import { CV_Image } from "../assets/index";

const Card = ({ index, text, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full select-none">
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{text}</p>

      <div className="mt-28 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const CV = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div variants={textVariant()}>
          <p className={styles.sectionSubText}>For Public</p>
          <h2 className={styles.sectionHeadText}>My CV.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center select-none`}
      >
        {myWords.map((myWords, index) => (
          <Card key={myWords.name} index={index} {...myWords} />
        ))}

        <div className="bg-black-200 p-10 rounded-3xl xs:w-[640px] w-full">
          <div className="flex min-[850px]:flex-row flex-col justify-around items-center gap-3">
            <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" />
            <a href='https://drive.google.com/file/d/1fa9pZsW_rKx8ParOP11oWapqmO2XUTI5/view' target="_blank">
              <img src={CV_Image} alt="" className={`rounded-lg drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-75 mb-5`}/>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px] transition ease-in-out hover:-translate-y-1 hover:scale-110">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(CV, "cv");
