import React, { useEffect, useRef } from "react";
import personImg from "../../assets/person2.png";
import Typed from "typed.js";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","Backend Developer","Full Stack Developer"],
      // Speed settings, try different values until you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="ml-1 uppercase text-lg">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Yash Kumar
              </p>
              <h2 className="text-3xl text-gray-700 dark:text-white">
                <span className="font-semibold" ref={el}></span>
              </h2>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae quod accusamus accusantium voluptas autem doloribus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque eveniet nostrum quae voluptas sit.
              </p>
              <div className="space-x-5 flex mt-2 justify-center md:justify-start mb-2">
            <a className="cursor-pointer flex justify-center items-center" href="https://www.linkedin.com/in/yash3535/" target="_blank">
            <img className="w-10 h-10 hover:w-9 hover:h-9 dark:invert" src={linkedin} alt="" />
            </a>
            <a className="cursor-pointer flex justify-center items-center" href="https://www.github.com/ygarg3535" target="_blank">
            <img className="w-10 h-10 hover:w-9 hover:h-9 dark:invert" src={github} alt="" />
            </a>
          
          </div>
              <a
                className="inline-block primary-btn !my-3"
              >
                Hire me
              </a>
            </div>
          </div>
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;