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
          <div className="max-w-[700px]">

            <section>

              <h1 className="font-bold text-[2.5rem] mb-12 text-center ">Some Of My Projects</h1>
              <div>
                <ProjectComp />
              </div>

            </section>
          </div>
        </div>
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="xl:fixed lg:fixed md:fixed static top-[8rem] space-y-6">
            <Cards />
          </div>
        </aside>
      </div>
    </>
  )
}

export default Projects;
