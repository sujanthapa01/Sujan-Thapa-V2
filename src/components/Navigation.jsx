import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import activeHome from "../assets/active-home.png";
import home from "../assets/Home-icon.png";
import projects from "../assets/Projects-icon.png";
import Abotmeactive from "../assets/Aboutme-active.png";
import Porjectactive from "../assets/Project-active.png";
import Aboutme from "../assets/Aboutme-icon.png";
import Chat from "../assets/chat.png";
import Chatactive from "../assets/chat-active.png";
import myimg from "../assets/myimg.jpeg";

function Navigation() {
  // const [active, setActive] = useState('home');
  // const location = useLocation();
  // const pathname = location.pathname;
  // const pathSegment = pathname.split("/")[1];

  // useEffect(() => {
  //   setActive(pathSegment || 'home');
  // }, [pathname]);

  return (
    <div className="fixed w-full md:sticky bottom-0 md:top-0 h-16 md:w-24 shrink-0 md:h-screen overflow-x-hidden no-scrollbar border-r dark:border-slate-800 z-50 backdrop-filter backdrop-blur-lg">
      <div className="h-full w-full flex flex-row md:flex-col justify-ce items-center after:flex-1 after:mt-auto">
        <div className="hidden md:block md:flex-1 ">
          <div className="flex justify-center my-4 tooltip-container">
            <span className="tooltip rounded-md">@SujanThapa</span>
            <NavLink to="/">
              <img src={myimg} height='32' width='32' className="rounded-full" data-tip="sujanthapa" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="flex-1 grow flex items-center w-full">
          <nav className="w-full">
            <ul className="md:space-y-4 flex flex-row items-center w-screen justify-evenly md:flex-col md:justify-start md:items-center md:w-24">
              <li className="py-2 pl-2 pr-2 rounded-xl duration-300 xl:hover:dark:border-slate-800 xl:hover:dark:bg-gradient-to-b xl:hover:dark:from-slate-800">
                <NavLink to="/" >
                  {({ isActive }) => (
                    <img
                      className="hover:scale-[2px] duration-200 cursor-pointer h-[28px]"
                      src={isActive ? activeHome : home}
                      alt="home"
                    />
                  )}
                </NavLink>
              </li>
             
              <li className="py-2 pl-2 pr-2 rounded-xl duration-300 xl:hover:dark:border-slate-800 xl:hover:dark:bg-gradient-to-b xl:hover:dark:from-slate-800">
                <NavLink to="/Aboutme">
                  {({ isActive }) => (
                    <img
                      className="hover:scale-[2px] duration-200 cursor-pointer h-[28px]"
                      src={isActive ? Abotmeactive : Aboutme}
                      alt="Aboutme"
                    />
                  )}
                </NavLink>
              </li>
              <li className="py-2 pl-2 pr-2 rounded-xl duration-300   xl:hover:dark:border-slate-800 xl:hover:dark:bg-gradient-to-b xl:hover:dark:from-slate-800 ">
                <NavLink to="/Projects">
                  {({ isActive }) => (
                    <img
                      className="hover:scale-[2px] duration-200 cursor-pointer h-[28px]"
                      src={isActive ? Porjectactive : projects}
                      alt="Projects"
                    />
                  )}
                </NavLink>
              </li>
              <li className="py-2 pl-2 pr-2 rounded-xl duration-300 xl:hover:dark:border-slate-800 xl:hover:dark:bg-gradient-to-b xl:hover:dark:from-slate-800">
                <NavLink to="/chat">
                  {({ isActive }) => (
                    <img
                      className="hover:scale-[2px] duration-200 cursor-pointer h-[28px]"
                      src={isActive ? Chatactive : Chat}
                      alt="chat"
                    />
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
