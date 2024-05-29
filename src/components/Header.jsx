import React from 'react'

function Header() {
    const d = new Date();
    const year = d.getFullYear();
  return (
    <header>
    <div className=" flex items-center justify-end h-16 w-full  before:block ">
      {" "}
      <div className="grow flex justify-end space-x-6 h-auto items-center  md:justify-end  ">
        <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text  xl:hidden md:hidden lg:hidden ">
          @sujanthapa {year}
        </p>
        <button className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600 rounded-full h-8 w-[6rem]">
          signup
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header
