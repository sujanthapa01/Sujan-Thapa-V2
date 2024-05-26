import React from "react";
import Arrow from "../assets/Arrow.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import github from "../assets/Github.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import spotify from "../assets/spotify.png";


function Home() {
  return (
    <main className="grow px-6 pr-[1.5rem] pl-[1.5rem] overflow-hidden ">
      <div className="  xl:w-[1072px] h-full mx-auto   ">
        <header>
          <div className=" flex items-center justify-end h-16 w-full  before:block ">
            {" "}
            <div className="grow flex justify-end space-x-6 h-auto items-center  md:justify-end  ">
              <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text  xl:hidden md:hidden lg:hidden ">
                @sujanthapa 2024
              </p>
              <button className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600 rounded-full h-8 w-[6rem]">
                signup
              </button>
            </div>
          </div>
        </header>

        <section className=" max-w-[700px] pt-8 pb-12">
          <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text hidden xl:block md:block lg:block">
            @sujanthapa 2024
          </p>
          <div className="h-[12rem]  xl:w-full overflow-hidden rounded-xl ">
            {" "}
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
          <div className="grow">
            <div className=" max-w-[700px] ">
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
          </div>
          <aside className="md:w-[240px] lg:w-[300px]  shrink-0 space-y-6">
            <div className="  xl:rotate-0 md:rotate-0 lg:rotate-0 rounded-md ">
              <div
                style={{ position: "relative" }}
                className="overflow-hidden "
              >
                <img
                  src={img3}
                  className="rounded-2xl border-[2px]   "
                  alt=""
                  srcSet=""
                  style={{ width: "100% ", height: "160px" }}
                />
                <a
                  href="https://open.spotify.com/user/rgwfr9glols5ew1tdqkngs12x?si=74462a81a6774569"
                  className="absolute rounded-2xl h-full"
                  style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(32, 32, 32, 0.438)",
                  }}
                >
                  <div className="p-6 text-center flex justify-between flex-col h-full text-white">
                    <div className="">
                      <strong className="">
                        <span className="font-bold">Spotify - </span>Lost in
                        Alluring Tunes
                      </strong>
                      <p className="text-start mt-2">
                        Immersed in melodies that once consumed, echoing in my
                        soul.
                      </p>
                    </div>
                    <p className="text-end font-thin text-sm sig-text ">
                      - sujan thapa
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className=" rotate-[1deg]  ">
              <div className="overflow-hidden w-full h-[200px] rounded-md border-[1px] border-gray-300 ">
                <div className="p-6  h-full text-start">
                  <div>
                    {" "}
                    <div>
                      <span className=" text-gray-400 text-sm ">
                        {" "}
                        <span className="text-xl text-thin">🫂 </span> Thanks
                        For visiting my site!
                      </span>
                      <p className="text-start text-xl mt-2 font-bold text-gray-800">
                        It's a pleasure
                      </p>
                    </div>
                    <div className="mt-4">
                      <di className="">
                        <a href="">
                        <div className="text-blue-400 flex items-center gap-5">
                            {" "}
                           <span className="span">Check out the message box </span>  <img src={Arrow} className=" h-[28px]" id="arrow"  alt="" srcset="" />
                          </div>
                        </a>
                      </di>
                      <div className="mt-3">
                        <a href="">
                          <div className="text-blue-400 flex items-center gap-5">
                            {" "}
                           <span className="span">Send me a Email </span>  <img src={Arrow} className="h-[28px]" id="arrow" alt="" srcset="" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Home;
