import React, { useState } from "react";
import activeHome from "../assets/active-home.png"; // Importing instagram image
import home from "../assets/Home-icon.png";
import projects from "../assets/Projects-icon.png";
import Abotmeactive from "../assets/Aboutme-active.png";
import Porjectactive from "../assets/Project-active.png";
import Aboutme from "../assets/Aboutme-icon.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed xl:h-screen lg:h-screen md:h-screen bottom-0 xl:static lg:static md:static z-10  ">
      <div className=" xl:flex lg:flex md:flex  xl:flex-col lg:flex-col md:flex-col justify-center items-end xl:items-center md:items-center lg:items-center  xl:h-full lg:h-full md:h-full w-[6rem] xl:bottom-2 lg:bottom-2 md:bottom-2 xl:border-r-[1px] lg:border-r-[1px] md:border-r-[1px] border-gray-300">
        <div className="backdrop-blur-md border-t-[1px] lg:border-t-0 xl:border-t-0 md:border-t-0 h-[4rem] lg:h-0 md:h-0 xl:h-0 flex pr-[2rem] pl-[2rem] xl:pr-[0px] lg:pr-[0px] md:pr-[0px] xl:pl-[0px] lg:pl-[0] md:pl-[0px] xl:flex-col lg:flex-col md:flex-col xl:gap-[2rem] lg:gap-[2rem] md:gap-[2rem] w-screen sm:w-screen xl:w-full lg:w-full md:w-full justify-between sm:justify-between xl:justify-center lg:justify-center items-center   ">
         
          {/*Nav Link1*/}
            <NavLink
              to="/"
              activeClassName="active"
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
            </NavLink>
        
          {/*Nav Link2*/}
         
            <NavLink to="/Projects" onClick={() => setActive("Projects")}>
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
            </NavLink>
          
          {/*Nav Link3*/}
       
            <NavLink
              to="/Aboutme"
              activeClassName="active"
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
            </NavLink>
         
        </div>
      </div>
    </div>
  );
}

export default Navigation;
