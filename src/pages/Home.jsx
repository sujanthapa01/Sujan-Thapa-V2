import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import github from "../assets/Github.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";
import spotify from "../assets/spotify.png";

function Home() {
  return (
    <div className="   ">
      <header className="w-full flex justify-end pr-[20rem]  ">
        {" "}
        <button className="bg-sky-500 text-white h-8 pl-8 pr-8  rounded-full mt-4">
          signup
        </button>
      </header>
      <div className="flex">
      <section className="w-[60%] ml-[3.5rem] mr-8 mt-4">
        <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text ">
          @sujanthapa 2024
        </p>
        <section className=" ">
          <div className="h-[15rem] w-[50rem] overflow-hidden rounded-xl ">
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
            <h1 className="text-[3rem] leading-[50px] mt-2">
              <strong>
                I engineer <span className="text-green-500"> end-to-end </span>
                solutions that users{" "}
                <span className="text-pink-400"> love</span>
              </strong>
            </h1>
            <p className="text-xl text-gray-500 mt-4">
              Passionate full-stack student 🧑‍🎓 crafting seamless digital
              experiences. Outside the code, I'm a music enthusiast{" "}
            </p>
          </div>

          <section className="flex flex-col mt-14">
            <div className="flex gap-8 ">
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
            </div>

            <div>
              <p className="text-gray-700 mt-8 text-[1.2rem]">
                I'm a full-stack student learning about data and algorithms in
                C++. I also enjoy music and exploring the internet. I'm
                passionate about software engineering and eager to learn and
                create.
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className="w-full">conatiner 2</section>
      </div>
    </div>
  );
}

export default Home;
