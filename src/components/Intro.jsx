import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../style/glass.css";

const IntroContent = () => {
  return (
    <div
      className={
        "absolute inset-0 invisible h-full flex flex-col justify-center items-center cursor-default font-bold glass"
      }
      id="intro_container"
    >

      <p className="text-text_dark text-xl dark:text-text_light">Hello My Name is</p>
      <p className="text-[30px] sm:text-[50px] text-center">Muhammad Yusuf</p>
      <p className="text-lg">as</p>
      <p className="flex flex-col overflow-hidden gap-3 mt-10 text-center text-[30px]">
        <span className="hover:tracking-[7px] cursor-pointer ease-out">
          Web Developer
        </span>
        <span className="hover:tracking-[7px] cursor-pointer ease-out">
          Front-End Developer
        </span>
        <span className="hover:tracking-[7px] cursor-pointer ease-out">
          Web Design
        </span>
      </p>

      <button
        className="absolute top-3 left-3"
        onClick={() => {
          intro_container.classList.add("invisible");
        }}
      >
        <IoMdArrowRoundBack className="text-[50px]" />
      </button>
    </div>
  );
};

const Intro = () => {
  const [toggleIntro, setToggleIntro] = useState(false);

  return (
    <section>
      <button
        onClick={() => {
          intro_container.classList.remove("invisible");
          setToggleIntro(true);
        }}
      >
        <div className="bg-light basis-1 w-[150px] ss:w-[200px] sm:w-[250px] md:w-[450px] lg:w-[500px] h-[140px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-lg shadow-lg text-center font-bold hover:bg-gray-200 transition-all cursor-pointer flex justify-center items-center dark:bg-dark_secondary dark:hover:bg-dark flex-col">
          <h1 className="text-text_dark dark:text-text_light text-xl">Intro</h1>
        </div>
      </button>
      {toggleIntro ? (
        <IntroContent className="invisible" />
      ) : (
        <IntroContent className="visible" />
      )}
    </section>
  );
};

export default Intro;
