import React from "react";
import home from "../assets/Home-icon.png";
import projects from "../assets/Projects-icon.png";
import Aboutme from "../assets/Aboutme-icon.png";
function Navigation() {
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center pl-5 pr-5 h-screen w-[6rem]  bottom-2  border-r-[1px] border-gray-300">
        <ul className="flex flex-col space-y-8">
          <li className="">
            <img className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]" src={home} alt="" srcset="" />
          </li>
          <li>
            <img className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]" src={projects} alt="" srcset="" />
          </li>
          <li>
            <img className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]" src={Aboutme} alt="" srcset="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
