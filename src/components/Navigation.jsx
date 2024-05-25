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
    <div className="">
      <div className="flex flex-col justify-center items-center pl-5 pr-5 h-screen w-[6rem] bottom-2 border-r-[1px] border-gray-300">
        <ul className="flex flex-col space-y-8">
          {/*Nav Link1*/}
          <li>
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
          </li>
          {/*Nav Link2*/}
          <li>
            <NavLink to="/Projects"
            onClick={() =>setActive('Projects')}>
             {active === 'Projects'? ( <img
                className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
                src={Porjectactive}
                alt="Projects"
              />
) : ( <img
  className="hover:scale-[1.1] duration-200 cursor-pointer h-[28px]"
  src={projects}
  alt="About"
/>
)}

            </NavLink>
          </li>

          {/*Nav Link3*/}
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
