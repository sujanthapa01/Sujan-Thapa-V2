import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import useLogout from '../Hooks/useLogout';
import ThemeTogglel from './themeToggleButton/themeToggle';
import { useSelector } from 'react-redux';

function Header() {
  const d = new Date();
  const year = d.getFullYear();
  const { isLogin } = useLogin();
  const handleLogout = useLogout();

  const theme = useSelector((state) => state.theme.theme)

  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-between md:justify-end space-x-4">
          <p className={`app ${theme} text-sm text-gray-500 pt-2 pb-2 text-center sig-text xl:hidden md:hidden lg:hidden`}>
            @sujanthapa {year}
          </p>

         <ThemeTogglel/>

          {isLogin ? (
            <Link
              to=""
              onClick={handleLogout}
              className="btn-sm text-slate-100 bg-sky-500 flex justify-center items-center hover:bg-sky-600 rounded-full h-8 w-[6rem]"
            >
              <span>Logout</span>
            </Link>
          ) : (
            <Link
              to="/login" // Assuming profile route for logged-in users
              className="btn-sm text-slate-100 bg-sky-500 flex justify-center items-center hover:bg-sky-600 rounded-full h-8 w-[6rem]"
            >
              <span>Signin</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
