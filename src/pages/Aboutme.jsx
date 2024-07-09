import React from 'react'
import Cards from '../components/cards'

function Aboutme() {
  return (
    <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20'>
   <div className='grow'>
    <div className='min-w-[700px]'>
      <section>
<h1 className='text-[2.25rem] xl:text-[3rem] leading-[50px] mt-2'>         <strong>hii I'm <span className='text-blue-500 inline-flex relative duration-200 cursor-pointer before:absolute before:inset-0 before:bg-blue-300 before:opacity-30 before:-z-10  hover:before:-rotate-0  before:-rotate-3 before:translate-y-1/4'>sujan thapa</span></strong></h1>
      </section>
    </div>
   </div>

   <aside className='md:w-[240px] lg:w-[300px] shrink-0'>
   <div className="xl:fixed lg:fixed md:fixed static top-[8rem] space-y-6">
            <Cards />
          </div>
   </aside>
    </div>
  )
}

export default Aboutme
