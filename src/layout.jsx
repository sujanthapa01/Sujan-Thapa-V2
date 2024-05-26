import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function Layout() {
  return (
    <div className='max-w-7xl mx-auto flex grow'>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
