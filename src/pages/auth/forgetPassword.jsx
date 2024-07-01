import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';
import useLogout from '../../Hooks/useLogout';


export default function forgetPassword(){
  
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
  };
  return (
    <main className="flex justify-center h-[100vh] items-center">
      <div className="wrapper flex items-center flex-col w-full md:w-[25rem] lg:w-[25rem] xl:w-[25rem] h-full  md:h-auto lg:h-auto xl:h-auto justify-center md:justify-around lg:justify-around xl:justify-around p-1 bg-transparent backdrop-blur-sm  lg:border xl:border lg:rounded-md xl:rounded-md">
        <div className='flex justify-start w-full pl-4 pt-4 items-center hidden md:block lg:block xl:block '>
          <Link to="/">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
          </Link>
        </div>
        <h1 className="uppercase">forget password</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center mt-2">
          <div className="flex justify-center flex-col gap-2 w-[14rem]">
            <input
              maxLength="26"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300"
            />
            
          </div>
          <button
            type="submit"
            className="border-blue-200 border w-[6rem] bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-md hover:bg-blue-300 duration-100"
          >
            Signin
          </button>
          {/* {loading && <p>Loading...</p>}
          {success && <p className="text-green-500 h-1 pb-4">{success}</p>}
          {error && <p className="text-red-500 h-1 pb-4">{error}</p>} */}
        </form>
        <span className='mt-4'>
          <p className="text-sm">
            <Link to="/signup" className="text-blue-400">Signup</Link>
          </p>
        </span>
        <div className='flex justify-center mt-[4rem]  w-full pl-4 pt-4 items-center block md:hidden lg:hidden xl:hidden '>
          <Link to="/">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

