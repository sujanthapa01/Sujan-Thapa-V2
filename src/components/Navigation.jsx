import React, { useState } from "react";
import activeHome from "../assets/active-home.png"; // Importing instagram image
import home from "../assets/Home-icon.png";
import projects from "../assets/Projects-icon.png";
import Abotmeactive from "../assets/Aboutme-active.png";
import Porjectactive from "../assets/Project-active.png";
import Aboutme from "../assets/Aboutme-icon.png";
import { NavLink } from "react-router-dom";
import myimg from "../assets/myimg.jpeg";

function Navigation() {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed w-full md:sticky bottom-0 md:top-0 h-16 md:w-24 shrink-0 md:h-screen overflow-y-auto no-scrollbar border-r dark:border-slate-800 z-50 backdrop-filter backdrop-blur-lg">
      <div className="h-full w-full flex flex-row md:flex-col justify-ce items-center after:flex-1 after:mt-auto">
    <div className="hidden md:block md:flex-1">
      <div class="flex justify-center my-4"> <img src={myimg} height='32' width='32' className="rounded-full" alt="" srcset="" /></div>
    </div>
       

<div className="flex-1 grow flex items-center w-full">
  <nav className="w-full">
    <ul className="md:space-y-4 flex flex-row items-center w-screen justify-evenly md:flex-col md:justify-start md:items-center md:w-24">
      <li className="md:py-2"> <NavLink
            to="/"

            onClick={() => setActive("Home")}
          >
            {active === "Home" ? (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={activeHome}
                alt="Home"
              />
            ) : (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={home}
                alt="Home"
              />
            )}
          </NavLink></li>
      <li className="md:py-2"><NavLink to="/Projects" onClick={() => setActive("Projects")}>
            {active === "Projects" ? (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={Porjectactive}
                alt="Projects"
              />
            ) : (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={projects}
                alt="About"
              />
            )}
          </NavLink></li>
      <li className="md:py-2"> <NavLink
            to="/Aboutme"

            onClick={() => setActive("Aboutme")}
          >
            {active === "Aboutme" ? (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={Abotmeactive}
                alt=""
              />
            ) : (
              <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={Aboutme}
                alt="Aboutme"
              />
            )}
          </NavLink></li>
    </ul>
  </nav>
   </div>
      </div>
    </div>
  );
}

export default Navigation;
