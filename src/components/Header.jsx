import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../Hooks/useLogin'; // Ensure this path is correct
import useLogout from '../Hooks/useLogout'; // Ensure this path is correct
import ThemeToggle from './themeToggleButton/themeToggle'; // Ensure this path is correct
import { useSelector } from 'react-redux';
import { auth } from '../Services/firebaseConfig'; // Ensure this path is correct
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const { handleLogout, loading, error } = useLogout();

  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user); // Update login status based on user state
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-between md:justify-end space-x-4">
          <p className={`app ${theme} text-sm text-gray-500 pt-2 pb-2 text-center sig-text xl:hidden md:hidden lg:hidden`}>
            @sujanthapa {new Date().getFullYear()}
          </p>
          <div className='flex gap-6'>
            <ThemeToggle />

            {isLogin ? (
              <button
                onClick={handleLogout} // Trigger the logout process
                className="btn-sm text-slate-100 bg-sky-500 flex justify-center items-center hover:bg-sky-600 rounded-full h-8 w-[6rem]"
                disabled={loading} // Disable button when logging out
              >
                {loading ? (
                  <span>Logging out...</span> // Show loading state
                ) : (
                  <span>Logout</span>
                )}
              </button>
            ) : (
              <Link
                to="/login"
                className="btn-sm text-slate-100 bg-sky-500 flex justify-center items-center hover:bg-sky-600 rounded-full h-8 px-[1.5rem]"
              >
                <span>Signin</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>} {/* Display any error */}
    </header>
  );
}

export default Header;
