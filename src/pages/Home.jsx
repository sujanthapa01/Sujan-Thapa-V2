import img2 from "../assets/img2.webp";
import github from "../assets/scoial-icons/github.webp";
import instagram from "../assets/scoial-icons/instagram.webp";
import mail from "../assets/scoial-icons/gmail.webp";
import spotify from "../assets/scoial-icons/spotify-black.webp";
import Cards from "../components/cards";
import ProjectComp from "../components/projectComp";
import { Link } from "react-router-dom";
import content from "@/data/data.js";
import TooltipComponent from "@/components/tooltip/tooltip-sociallink/tooltip";

function Home() {
  const currentDate = new Date();

  return (
    <>
    
      <section>
        <div className="max-w-[700px]">
          <div className="pt-8 pb-10">
            <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text hidden xl:block md:block lg:block">
              @{content.name_letters} {currentDate.getFullYear()}
            </p>

            <div className="h-[12rem] xl:w-full overflow-hidden rounded-xl cursor-pointer">
              <img
                className="object-cover rounded-md hover:scale-[1.1] -translate-y-[20px] duration-200"
                src={img2}
                loading="lazy"
                decoding="async"
                alt="banner"
              />
            </div>
            <p className="text-xl mt-6">
              {"Hi, I'm"}{" "}
              <span className="text-blue-500 inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:bg-yellow-300 before:opacity-30 before:-z-10 before:-rotate-3 before:translate-y-1/4 hover:before:rotate-0 dark:before:bg-blue-400">
                {content.name}
              </span>
            </p>
            <h1 className="text-[2.25rem] xl:text-[3rem] leading-[50px] mt-2">
              <strong>
                I engineer <span className="text-green-500">end-to-end</span>{" "}
                solutions that users <span className="text-pink-400">love</span>
              </strong>
            </h1>
            <p className="text-lg xl:text-xl text-gray-500 mt-4 dark:text-slate-400">
              {content.bio}
            </p>
          </div>
        </div>
      </section>
      <section className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">
              <ul className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
                <li> <TooltipComponent
                type="github"
                  link={content.socialLinks.github}
                  icon={github}
                  alt="GitHub"
                  content="Visit my GitHub"
                /></li>
                <li><TooltipComponent
                type="instagram"
                  link={content.socialLinks.instagram}
                  icon={instagram}
                  alt="Instagram"
                  content="Follow me on Instagram"
                /></li>
                <li> <TooltipComponent
                type="gmail"
                  link={content.socialLinks.email}
                  icon={mail}
                  alt="Email"
                  content="Send me an email"
                /></li>
                <li> <TooltipComponent
                type="spotify"
                  link={content.socialLinks.spotify}
                  icon={spotify}
                  alt="Spotify"
                  content="Check out my Spotify"
                /></li>
              </ul>
              <p className="text-gray-700 mt-8 text-lg xl:text-[1.2rem] dark:text-slate-300">
                {"I'm a full-stack student learning about data and algorithms in C++. I also enjoy music and exploring the internet. I'm passionate about software engineering and eager to learn and create."}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <ProjectComp maxProjects={4} />
            <div className="mt-2">
              See a list of all my{" "}
              <Link to="projects" className="text-blue-400">
                projects
              </Link>
              .
            </div>
          </div>
        </div>
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <Cards />
        </aside>
      </section>
    </>
  );
}

export default Home;
