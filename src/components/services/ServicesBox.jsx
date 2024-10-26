import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCodeSlash} from "react-icons/io5";
import { FaAws } from "react-icons/fa";

const Services = [
  {
    name: "Web Development",
    description:
      "We create basic sites with ongoing monthly support, SEO, Reputation Management services, content writing, and custom websites.",
    image: "https://picsum.photos/200/300",
    icon: <FaEarthAmericas className="text-4xl" />,
    bgColor: "bg-slate-300",
  },
  {
    name: "Backend Development",
    description:
      "We help businesses build robust web-based applications backend that enables them to create seamless user experience through their applications",
    image: "https://picsum.photos/200/301",
    icon: <IoCodeSlash className="text-4xl" />,
    bgColor: "bg-slate-300",
  },
  {
    name: "AWS Services",
    description:
      "AWS Activate works with hundreds of accelerators, angel investors, seed/venture capital firms, and startup enabling organizations across the world",
    image: "https://picsum.photos/200/302",
    icon: <FaAws className="text-5xl" />,
    bgColor: "bg-slate-300",
  },
  {
    name: "Security",
    description:
      "Security empowers businesses to grow, innovate, and achieve incredible outcomes. See how Cisco provides the tools you need to succeed.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-5xl" />,
    bgColor: "bg-slate-300",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-black  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              <span className="flex justify-center">{icon}</span>
              <h1 className="text-3xl font-bold text-center">{name}</h1>
              <p className="px-10 text-lg text-center">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;