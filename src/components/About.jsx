import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../style/glass.css";

const AboutContent = () => {
  return (
    <div
      className={
        "absolute inset-0 invisible h-full flex flex-wrap justify-center items-center cursor-default font-bold glass"
      }
      id="about_container"
    >
      <div className="flex flex-col items-center justify-center sm:flex-1 flex-2">
        <h1 className="text-[50px]">About Me</h1>
        <button className="p-2 rounded-lg flex bg-dark dark:bg-light justify-center items-center">
          <a 
            className="text-center text-text_light dark:text-dark_secondary"
            href=""
          >
            See my resume
          </a>
        </button>
      </div>

      <div className="flex flex-col items-start justify-center sm:flex-1 flex-2 p-10">
        <p className="text-justify text-xl">"Web developer who brings creativity and technical prowess to every project. With a passion for coding and a drive for excellence, I have the skills and experience to turn your online ideas into a reality design in web. Responsive websites it's the priority"</p>
      </div>
      
      <button
        className="absolute top-3 left-3 text-2xl"
        onClick={() => {
          about_container.classList.add("invisible");
        }}
      >
        <IoMdArrowRoundBack className="text-[50px]"/>
      </button>
    </div>
  );
};

const About = () => {
  const [toggleAbout, setToggleAbout] = useState(false);

  return (
    <section>
      <button
        onClick={() => {
          about_container.classList.remove("invisible");
          setToggleAbout(true);
        }}
      >
        <div className="bg-light basis-1 w-[150px] ss:w-[200px] sm:w-[250px] md:w-[450px] lg:w-[500px] h-[140px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-lg shadow-lg text-center font-bold hover:bg-gray-200 transition-all cursor-pointer flex justify-center items-center dark:bg-dark_secondary dark:hover:bg-dark flex-col">
          <h1 className="text-text_dark dark:text-text_light text-xl">About</h1>
        </div>
      </button>
      {toggleAbout ? (
        <AboutContent className="invisible" />
      ) : (
        <AboutContent className="visible" />
      )}
    </section>
  );
};

export default About;
