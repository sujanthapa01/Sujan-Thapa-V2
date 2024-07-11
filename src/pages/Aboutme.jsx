import React from 'react';
import Cards from '../components/cards';
import bioimg from "../assets/bioimg.png";

function Aboutme() {
  return (
    <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20'>
      <div className='grow'>
        <div className='min-w-[200px] md:min-w-0'>
          <section>
            <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem] leading-[50px] mt-2 mb-8'>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita dignissimos repellendus sunt ullam magni qui natus accusantium praesentium nam quidem sit molestias inventore, eos a quas odio libero eveniet ipsum assumenda laborum sequi odit. Accusamus, obcaecati unde! Consequuntur omnis velit, reprehenderit earum neque voluptatem vitae minus? Quam amet explicabo officiis dignissimos sequi delectus odio optio repudiandae, veniam reprehenderit nihil nisi enim itaque nobis!
                </p>
              </div>
            </div>
  
          </section>
        </div>
      </div>
      <aside className='md:w-[260px] lg:w-[300px] shrink-0'>
        <div className="xl:fixed lg:fixed md:fixed static top-[8rem] md:w-[262px] lg:w-[300px] space-y-6">
          <Cards />
        </div>
      </aside>
    </div>
  );
}

export default Aboutme;
