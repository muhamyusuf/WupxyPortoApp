import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../style/glass.css";

const ProjectContent = () => {
  return (
    <div
      className={
        "absolute inset-0 invisible h-full flex flex-col gap-5 justify-center items-center cursor-default font-bold glass"
      }
      id="project_container"
    >
      <div>
        <h1 className="text-2xl mb-5">Project</h1>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center gap-5">
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">Wedding Party Web</p>
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">School Web</p>
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">Web UMKM</p>
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">Web Portofolio</p>
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">Web App</p>
        <p className="bg-dark p-5 rounded-lg shadow-lg cursor-pointer text-light hover:bg-dark_secondary transition">Digital Artwork Web</p>
      </div>

      <button
        className="absolute top-3 left-3 text-2xl"
        onClick={() => {
          project_container.classList.add("invisible");
        }}
      >
        <IoMdArrowRoundBack className="text-[50px]"/>
      </button>
    </div>
  );
};

const Project = () => {
  const [toggleProject, setToggleProject] = useState(false);
  return (
    <section>
      <button
        onClick={() => {
          project_container.classList.remove("invisible");
          setToggleProject(true);
        }}
      >
        <div className="bg-light basis-1 w-[150px] ss:w-[200px] sm:w-[250px] md:w-[450px] lg:w-[500px] h-[140px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-lg shadow-lg text-center font-bold hover:bg-gray-200 transition-all cursor-pointer flex justify-center items-center dark:bg-dark_secondary dark:hover:bg-dark flex-col">
          <h1 className="text-text_dark dark:text-text_light text-xl">Project</h1>
        </div>
      </button>
      {toggleProject ? (
        <ProjectContent className="invisible" />
      ) : (
        <ProjectContent className="visible" />
      )}
    </section>
  );
};

export default Project;
