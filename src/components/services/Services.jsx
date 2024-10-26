import React from "react";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section id="services" className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
      <div className=" font-bold relative">
            <div className=" text-center text-5xl xl:text-7xl font-bold text-black/5 dark:text-gray-700">
              SERVICES
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Services
            </h1>
          </div>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;