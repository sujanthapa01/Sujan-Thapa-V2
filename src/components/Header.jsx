import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import useLogout from '../Hooks/useLogout';

function Header() {
  const d = new Date();
  const year = d.getFullYear();
  const { isLogin } = useLogin();
  const handleLogout = useLogout();

  return (
    <header>
      <div className="flex items-center justify-end h-16 w-full before:block ">
        <div className="grow flex justify-end space-x-6 h-auto items-center md:justify-end">
          <p className="text-sm text-gray-500 pt-2 pb-2 text-center sig-text xl:hidden md:hidden lg:hidden">
            @sujanthapa {year}
          </p>

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
              to="/signin" // Assuming profile route for logged-in users
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
