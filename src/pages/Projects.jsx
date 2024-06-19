import Header from "../components/Header";
import Cards from "../components/cards";
import ProjectComp from "../components/projectComp";
import img1 from "../assets/img1.png";

function Projects() {
  return (
    <main className="x-6 pr-[1.5rem] pl-[1.5rem]">
      {" "}
      {/* <Header></Header> */}
      <div className="grow  md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="grow">
          <div className="  xl:w-[1072px] h-full mx-auto   ">
            <section className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
              <section>
                <div className="grow text-center ">
                  <h1 className="font-bold text-[2.5rem] mb-12">
                    Some Of My Projects
                  </h1>
                </div>
                <div>
                  <ProjectComp></ProjectComp>
                </div>
              </section>
              <aside className="md:w-[240px] lg:w-[300px]  shrink-0 space-y-6">
                <Cards></Cards>
              </aside>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
