import { useState } from 'react';
import { Link } from 'react-router-dom';
import useResetpassword from '../../Hooks/useResetpassword';

export default function forgetPassword() {

  const { handleResetPassword, error, success, loading} = useResetpassword;
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    handleResetPassword(email);
    console.log(success, "/n", "/n", error)
  }

  return (
    <main className="flex justify-center h-[100vh] items-center">
      <div className="wrapper  dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 flex items-center flex-col w-full md:w-[25rem] lg:w-[25rem] xl:w-[25rem] h-full  md:h-auto lg:h-auto xl:h-auto justify-center md:justify-around lg:justify-around xl:justify-around p-1 bg-transparent backdrop-blur-sm  lg:border xl:border lg:rounded-md xl:rounded-md">
        <div className='justify-start w-full pl-4 pt-4 items-center hidden md:block lg:block xl:block '>
          <Link to="/">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
          </Link>
        </div>
        <h1 className="uppercase ">forget password</h1>

        {success ? (<div className='text-green-400 text-center pb-4 '>
          {success} <br />{email}</div>) : (<form onSubmit={onSubmit} className="flex flex-col gap-4 items-center mt-2">
            <div className="flex justify-center flex-col gap-2 w-[14rem]">
              <input
                maxLength="26"
                required
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300 dark:text-black"
              />

            </div>

            {loading ? (<button
              type="submit"
              className="border-blue-200 border flex justify-center items-center w-[6rem] h-[2.1rem] bg-blue-400 pl-2 pr-2  rounded-full hover:bg-blue-300 duration-100"
            > <div className="loader"></div></button>) : (<button
              type="submit"
              className="border-blue-200 border w-[6rem] bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-full hover:bg-blue-300 duration-100 dark:hover:bg-blue-600 dark:bg-blue-500"
            > send</button>)}
                <div className='h-7 p-1'>
          {error && <p className="text-red-500 h-1 pb-4 ">{error}</p>}
          </div>
         
            <span className='mt-4'>
              <p className="text-sm">
                <Link to="/signup" className="text-blue-400">Signup</Link>
              </p>
            </span>
          </form>
        )}



        <div className='flex justify-center mt-[4rem]  w-full pl-4 pt-4 items-center  md:hidden lg:hidden xl:hidden '>
          <Link to="/">
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}

