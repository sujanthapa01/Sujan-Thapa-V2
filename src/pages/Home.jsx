// Home.js
import React from "react";
import img2 from "../assets/img2.png";
import github from "../assets/Github.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import spotify from "../assets/spotify.png";
import Cards from "../components/cards";
import Header from "../components/Header";
import ProjectComp from "../components/projectComp";

function Home() {
  return (
    <main className="grow px-6 pr-[1.5rem] pl-[1.5rem] overflow-hidden">
      <div className="xl:w-[1072px] h-full mx-auto">
        <Header />
        <section className="max-w-[700px] pt-8 pb-12">
          {/* Your existing content */}
          <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text hidden xl:block md:block lg:block">
            @sujanthapa 2024
          </p>
          <div className="h-[12rem]  xl:w-full overflow-hidden rounded-xl ">
            <img
              className=" object-cover rounded-md hover:scale-[1.1] -translate-y-[20px] duration-200 "
              src={img2}
              alt=""
            />
          </div>
          <div className="mt-8">
            <p className="text-xl">
              Hi, I'm{" "}
              <span className="text-blue-500 inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:bg-yellow-300 before:opacity-30 before:-z-10  hover:before:-rotate-0  before:-rotate-3 before:translate-y-1/4">
                Sujan Thapa
              </span>
            </p>
            <h1 className="text-[2.25rem] xl:text-[3rem] leading-[50px] mt-2">
              <strong>
                I engineer <span className="text-green-500"> end-to-end </span>
                solutions that users{" "}
                <span className="text-pink-400"> love</span>
              </strong>
            </h1>
            <p className="text-lg xl:text-xl text-gray-500 mt-4">
              Passionate full-stack student 🧑‍🎓 crafting seamless digital
              experiences. Outside the code, I'm a music enthusiast{" "}
            </p>
          </div>
        </section>
        <section className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
          <div className="grow max-w-[700px]">
            <div className="max-w-full ">
              <div className="space-y-10 ">
                <li className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
                  <a href="https://github.com/sujanthapa01" target="blank">
                    <img
                      className="h-[38px] hover:scale-[1.2] duration-200 cursor-pointer"
                      src={github}
                      alt=""
                    />
                  </a>
                  <a href="" target="blank">
                    <img
                      className="h-[38px] hover:scale-[1.2] duration-200 cursor-pointer"
                      src={instagram}
                      alt=""
                    />
                  </a>
                  <a href="" target="blank">
                    {" "}
                    <img
                      className="h-[38px] hover:scale-[1.2] duration-200 cursor-pointer"
                      src={mail}
                      alt=""
                    />
                  </a>
                  <a href="" target="blank">
                    {" "}
                    <img
                      className="h-[38px] hover:scale-[1.2] duration-200 cursor-pointer"
                      src={spotify}
                      alt=""
                    />
                  </a>
                </li>
              </div>
            </div>
            <p className="text-gray-700 mt-8 text-lg xl:text-[1.2rem]">
              I'm a full-stack student learning about data and algorithms in
              C++. I also enjoy music and exploring the internet. I'm passionate
              about software engineering and eager to learn and create.
            </p>
            <ProjectComp maxProjects={4} />
          </div>
          <aside className="md:w-[240px] lg:w-[300px] shrink-0 space-y-6">
            <Cards />
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Home;


