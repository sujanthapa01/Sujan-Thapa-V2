import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function Layout() {
  return (
    <div className='xl:pl-[22rem] flex'>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
