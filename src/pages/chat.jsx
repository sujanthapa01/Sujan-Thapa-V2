import Dashboard from "./Dashboard";
import Cards from "../components/cards";
function chat() {
  return (
    <div className='grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20'>
    <div className='grow'>
      <div className='min-w-[200px] md:min-w-0'>
        <section>
         <div className="flex justify-center items-center h-full"> chat</div>
        </section>
      </div>
    </div>
    <aside className='md:w-[260px] lg:w-[300px] shrink-0'>
      <div className="xl:fixed lg:fixed md:fixed static top-[8rem] md:w-[262px] lg:w-[300px] space-y-6">
        <Cards />
      </div>
    </aside>
  </div>
  )
}

export default chat