import React from 'react';
import Cards from '../components/cards';
import bioimg from "../assets/bioimg.png";
import Header from '../components/Header';

function Aboutme() {
  return (

    <>   
    <Header  />
     <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-[1.5rem] md:pt-[1.5rem] lg-pt-[4rem] xl:pt-[4rem] pb-16 md:pb-20'>
      <div className='grow'>
        <div className='min-w-[200px] md:min-w-0'>
          <section>
            <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] leading-[50px] mb-8'>
              <strong>Hii. I'm <span className='text-blue-500 inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:bg-blue-300 before:opacity-30 before:-z-10 hover:before:-rotate-0 before:-rotate-3 before:translate-y-1/4'>Sujan Thapa </span> 🎸</strong>
            </h1>

            <div className="relative w-full overflow-hidden rounded-md">
              <img
                src={bioimg}
                className="w-auto h-auto object-cover"
                loading="lazy"
                decoding="async"
                alt="Sujan Thapa"
              />
            </div>

            <div className='text-slate-500 dark:text-slate-400 space-y-8 mt-4'>
              <div className="space-y-4">
                <h2 className="h2 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>Hi, I’m Sujan Thapa! I’m currently studying for my <a href="https://www.google.com/search?q=bca+explanation&sca_esv=ffcfe78bb05bd262&sxsrf=ADLYWIL0J8pBlhvOWA4kd0G_sfzzQUKCsw%3A1720807650745&ei=4nCRZsCcLZnu1e8P_s_5mAE&oq=bca+expl&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGJjYSBleHBsKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYFhgKGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IwS9QAFixJnAFeACQAQCYAeECoAG_CaoBBzAuMi4yLjG4AQHIAQD4AQGYAgqgAvkJwgIEECMYJ8ICChAjGIAEGCcYigXCAg0QABiABBixAxhDGIoFwgIKEAAYgAQYQxiKBcICDRAuGIAEGLEDGEMYigXCAgUQIRigAcICBRAhGJ8FwgIKEAAYgAQYFBiHAsICDBAAGIAEGAIYChjLAcICCxAAGIAEGJECGIoFwgINEAAYgAQYsQMYFBiHApgDAJIHBzUuMi4xLjKgB9sX&sclient=gws-wiz-serp" className='text-blue-500'
                >BCA</a> at <a href="https://dcedu.in/" className='text-blue-500'>  Dronacharya</a> College and deeply passionate about <a href="https://www.google.com/search?q=software+development&oq=software+development&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDIHCAIQABiABDIKCAMQABixAxiABDIHCAQQABiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTExNTQwajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8" className='text-blue-500'>software development </a>and <a href="https://www.google.com/search?q=software+engineering&sca_esv=ffcfe78bb05bd262&sxsrf=ADLYWILQVZMwrDYr94D8ktiW72REGDa4qQ%3A1720808255518&ei=P3ORZt6mH7bi2roPwMW-wAg&ved=0ahUKEwiewq-mjqKHAxU2sVYBHcCiD4gQ4dUDCA8&uact=5&oq=software+engineering&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHNvZnR3YXJlIGVuZ2luZWVyaW5nMgoQIxiABBgnGIoFMgoQABiABBhDGIoFMggQABiABBixAzIKEAAYgAQYAhjLATIIEAAYgAQYsQMyChAAGIAEGEMYigUyDhAAGIAEGLEDGIMBGIoFMgoQABiABBgCGMsBMgUQABiABDIKEAAYgAQYAhjLAUiUBVCbA1ibA3ABeAGQAQCYAdMBoAHTAaoBAzItMbgBA8gBAPgBAZgCAqAC5wHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBZgDAIgGAZAGCZIHBTEuMC4xoAe9CA&sclient=gws-wiz-serp" className='text-blue-500'>engineering</a>. As a <a href="https://www.google.com/search?q=full+stack+developer&oq=full+st&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyDQgAEAAYgwEYsQMYgAQyCggBEAAYsQMYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBggEEEUYOTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDMyOTNqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8" className='text-blue-500'>full stack developer</a>, I focus on creating applications that provide seamless user experiences across all aspects. You can check out my <a href="https://github.com/sujanthapa01" className='text-blue-500'>GitHub</a> to see examples of the full stack applications I’ve developed. Outside of coding, I enjoy immersing myself in <a href="https://open.spotify.com/user/rgwfr9glols5ew1tdqkngs12x?si=f1d46095b68f4661" className='text-blue-500'>music</a>, which is my favorite way to unwind and recharge.







                </p>
              </div>
            </div>

          </section>
        </div>
      </div>
      <aside className='md:w-[260px] lg:w-[300px] shrink-0'>
        <div className=" md:w-[262px] lg:w-[300px] space-y-6">
          <Cards />
        </div>
      </aside>
    </div>
    </>
  );
}

export default Aboutme;
