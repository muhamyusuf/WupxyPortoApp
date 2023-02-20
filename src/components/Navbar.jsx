import React, { useState } from "react";
import { logo_white, logo_black } from "../assets/export_image";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { FaRegSun, FaRegMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const checkDarkMode = document.querySelector("#toggle_dark_mode");
  const html = document.querySelector("html");

  return (
    <nav className="w-full p-5 bg-light flex justify-around items-center text-text_dark dark:bg-dark absolute top-0">
      <div className="flex flex-row items-center gap-1" id="logo dark_mode">
        <img
          src={toggleDarkMode ? logo_white : logo_black}
          alt="logo"
          className="w-[150px] flex align-middle"
        />

        <input
          type="checkbox"
          id="toggle_dark_mode"
          className="hidden"
          onClick={() => {
            checkDarkMode.checked
              ? html.classList.add("dark")
              : html.classList.remove("dark");
          }}
        />
        <label
          htmlFor="toggle_dark_mode"
          className="cursor-pointer mx-3 text-xl"
          onClick={() => setToggleDarkMode((prev) => !prev)}
        >
          {[
            toggleDarkMode ? (
              <FaRegSun className="dark:text-text_light" />
            ) : (
              <FaRegMoon className="dark:text-text_light" />
            ),
          ]}
        </label>
      </div>

      {/* <div id="link" className='mt-1 font-bold'>
            <ul className='flex gap-5'>
                <li><a href="#home" className='hover:underline'>Home</a></li>
                <li><a href="#about" className='hover:underline'>About</a></li>
                <li><a href="#skills" className='hover:underline'>Skills</a></li>
                <li><a href="#project" className='hover:underline'>Project</a></li>
            </ul>
        </div> */}

      <div
        id="social"
        className="sm:flex hidden gap-3 justify-between items-center"
      >
        <a
          href="https://github.com/muhamyusuf"
          className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhamyusuf/"
          className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/muhamyusuf_/"
          className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.fiverr.com/wupxy__?up_rollout=true"
          className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
        >
          <SiFiverr />
        </a>
      </div>

      <div
        className="sm:hidden flex cursor-pointer"
        onClick={() => setToggleNavbar((prev) => !prev)}
      >
        {[
          toggleNavbar ? (
            <AiOutlineClose className="font-bold text-dark text-xl dark:text-text_light" />
          ) : (
            <FaBars className="font-bold text-dark text-xl dark:text-text_light" />
          ),
        ]}
        <div
          id="social"
          className={`${
            !toggleNavbar ? "hidden" : "flex"
          } gap-3 justify-center items-center absolute top-20 right-0 w-full rounded-xl`}
        >
          <a
            href="https://github.com/muhamyusuf"
            className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhamyusuf/"
            className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/muhamyusuf_/"
            className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.fiverr.com/wupxy__?up_rollout=true"
            className="text-4xl hover:text-gray-500 dark:text-text_light dark:hover:text-dark_secondary transition ease-in-out"
          >
            <SiFiverr />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
