// Projects.js
import React from "react";
import Header from "../components/Header";
import Cards from "../components/cards";
import ProjectComp from "../components/projectComp";

function Projects() {
  return (
    <main className="x-6 pr-[1.5rem] pl-[1.5rem]">
      {/* <Header /> */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="grow">
          <div className="xl:w-[1072px] h-full mx-auto">
            <section className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
              <section>
                <div className="grow text-center">
                  <h1 className="font-bold text-[2.5rem] mb-12">Some Of My Projects</h1>
                </div>
                <div>
                  <ProjectComp maxProjects={6} />
                </div>
              </section>
              <aside className="md:w-[240px] lg:w-[300px] shrink-0 space-y-6">
                <div className="fixed top-[8rem] space-y-6">
                  <Cards />
                </div>
              </aside>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
