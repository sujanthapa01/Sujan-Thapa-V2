// Projects.js
import React from "react";
import Header from "../components/Header";
import Cards from "../components/cards";
import ProjectComp from "../components/projectComp";

function Projects() {
  return (
    <>
      {/* <Header /> */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="grow">
          <div className="max-w-[700] w-[full] ">

            <section>

              <h1 className="font-bold text-[2rem]  md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem] mb-12 text-center  ">Some Of My <span className=" text-blue-400 inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:bg-blue-300 before:opacity-30 before:-z-10  hover:before:-rotate-0  before:-rotate-3 before:translate-y-1/4 before:h-12 dark:before:bg-blue-400">Projects</span></h1>
              <div>
                <ProjectComp />
              </div>

            </section>
          </div>
        </div>
        <aside className="md:w-[262px] lg:w-[262px] shrink-0">
          <div className="xl:fixed lg:fixed md:fixed static top-[8rem] space-y-6">
            <Cards />
          </div>
        </aside>
      </div>
    </>
  )
}

export default Projects;
