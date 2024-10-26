import React from "react";
import project1 from "../../assets/project_1.png";
import project2 from "../../assets/project_2.png";
import project3 from "../../assets/project_3.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="py-8 md:py-12">
      <div className=" font-bold relative">
            <div className=" text-center text-5xl xl:text-7xl font-bold text-black/5 dark:text-gray-700">
              PROJECTS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Projects
            </h1>
          </div>
      </div>
      <div className="md:flex mt-4 md:space-x-5 space-y-7 md:space-y-0 px-10 pb-10  ">
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 p-5">
          <img className="w-[150vh] h-[30vh]" src={project1} alt="" />
          <div className="dark:text-black">
            <h2 className="font-bold">Contactify - Smart Contact Manager</h2>
            <p>Design to enhance how users manage their personal and professional contacts.<br/>Tools : React, Tailwind, Spring Boot, MySql</p>
            <div className="flex hover:text-primary">
            <a
              href="https://github.com/ygarg3535/Contactify-SCM"
              target="_blank"
              className="ml-[21rem] font-semibold text-base"
            >
              GitHub
            </a>
            <a className="px-2 py-1" href="https://github.com/ygarg3535/Contactify-SCM"
              target="_blank"><FaExternalLinkAlt/></a>
            </div>
          </div>
        </div>
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 p-5">
          <img className="w-[150vh] h-[30vh]" src={project2} alt="" />
          <div className="dark:text-black">
          <h2 className="font-bold">Password Manager</h2>
            <p>It is designed to store and manage online credentials for various online services.<br/>Tools : React, Tailwind, Spring Boot, MySql</p>
            <div className="flex hover:text-primary">
            <a
              href="https://github.com/ygarg3535/Password-Manager"
              target="_blank"
              className="ml-[21rem] font-semibold text-base"
            >
              GitHub
            </a>
            <a className="px-2 py-1" href="https://github.com/ygarg3535/Password-Manager"
              target="_blank"><FaExternalLinkAlt/></a>
            </div>
          </div>
        </div>
        <div className="space-y-4 cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl bg-slate-200 p-5">
          <img className="w-[150vh] h-[30vh]" src={project3} alt="" />
          <div className="dark:text-black">
          <h2 className="font-bold">Portfolio</h2>
            <p>Designed to showcases your skills and abilities to potential clients or employers.<br/>Tools : React, Tailwind</p>
            <div className="flex hover:text-primary">
            <a
              href="https://github.com/ygarg3535/Portfolio"
              target="_blank"
              className="ml-[21rem] font-semibold text-base"
            >
              GitHub
            </a>
            <a className="px-2 py-1" href="https://github.com/ygarg3535/Portfolio"
              target="_blank"><FaExternalLinkAlt/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
