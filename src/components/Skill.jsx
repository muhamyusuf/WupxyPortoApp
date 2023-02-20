import React, { useState } from "react";
import { IoMdArrowRoundBack,IoLogoCss3,IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss,SiReact } from "react-icons/si";
import "../style/glass.css";

const SkillContent = () => {
  return (
    <div
      className={
        "absolute inset-0 invisible h-full flex flex-row justify-center items-center cursor-default font-bold glass"
      }
      id="skill_container"
    >
      <div className="h-full flex flex-1 items-center justify-center gap-10 flex-col">
        <div>
          <h1 className="text-[30px] sm:text-[50px] text-center">Skill set for build a modern & responsive website</h1>
        </div>
        <div className='flex text-5xl'>
          <AiFillHtml5/>
          <IoLogoCss3/>
          <IoLogoJavascript/>
          <SiReact/>
          <SiTailwindcss/>
        </div>
        <div>
          <p>And more skill of tech....</p>
        </div>
      </div>

      <button
        className="absolute top-3 left-3 text-2xl"
        onClick={() => {
          skill_container.classList.add("invisible");
        }}
      >
        <IoMdArrowRoundBack className="text-[50px]"/>
      </button>
    </div>
  );
};

const Project = () => {
  const [toggleSkill, setToggleSkill] = useState(false);
  return (
    <section>
      <button
        onClick={() => {
          skill_container.classList.remove("invisible");
          setToggleSkill(true);
        }}
      >
        <div className="bg-light basis-1 w-[150px] ss:w-[200px] sm:w-[250px] md:w-[450px] lg:w-[500px] h-[140px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-lg shadow-lg text-center font-bold hover:bg-gray-200 transition-all cursor-pointer flex justify-center items-center dark:bg-dark_secondary dark:hover:bg-dark flex-col">
          <h1 className="text-text_dark dark:text-text_light text-xl">Skill</h1>
        </div>
      </button>
      {toggleSkill ? (
        <SkillContent className="invisible" />
      ) : (
        <SkillContent className="visible" />
      )}
    </section>
  );
};

export default Project;
