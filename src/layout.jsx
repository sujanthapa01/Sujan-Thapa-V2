import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';

function Layout() {
  return (
    <div className='max-w-7xl  m-auto flex grow '>

      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
