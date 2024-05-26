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
    <div className="fixed xl:h-screen bottom-0 xl:static  ">
      <div className=" xl:flex  xl:flex-col justify-center items-end xl:items-center  xl:h-full w-[6rem] xl:bottom-2 xl:border-r-[1px] border-gray-300">
        <div className="backdrop-blur-md border-t-[1px] h-[4rem] xl:h-0 flex pr-[2rem] pl-[2rem] xl:pr-[0px] xl:pl-[0px]  xl:flex-col xl:gap-[2rem] w-screen sm:w-screen xl:w-full justify-between sm:justify-between xl:justify-center items-center   ">
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
