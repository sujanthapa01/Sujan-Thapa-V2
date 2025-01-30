import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Newyear from '@/components/events/newyear';
import Header from "@/components/Header";
function Layout() {


  return (
    <div className={`max-w-7xl mx-auto`} >
      <div className='min-h-screen flex'>
        <Navigation />
        <div className='grow overflow-hidden px-6'>
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
        <Header />
<Newyear />
          <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Layout;
