import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("password");
  const [showText, setShowText] = useState("show");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignup, error, success, loading } = useSignup();

  function HandleShowPass() {
    setShowPass(!showPass);
    setType(showPass ? "password" : "text");
    setShowText(showPass ? "show" : "hide");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(username, email, password);
  };

  return (
    <main className="flex justify-center h-[100vh] items-center">
      <div className="wrapper flex items-center flex-col w-full md:w-[25rem] lg:w-[25rem] xl:w-[25rem] h-full  md:h-auto lg:h-auto xl:h-auto justify-center md:justify-around lg:justify-around xl:justify-around p-1 bg-transparent backdrop-blur-sm border lg:rounded-md xl:rounded-md">
        <div className="flex justify-start w-full pl-4 pt-4 items-center hidden md:block lg:block xl:block ">
          <Link to="/">
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 52 52"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
            </svg>
          </Link>
        </div>
        <h1 className="uppercase">Sign Up</h1>
        <div className="flex flex-col gap-4 items-center mt-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
            <div className="flex justify-center flex-col gap-2 w-[14rem]">
              <input
                maxLength="26"
                type="text"
                placeholder="Full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300"
              />
              <input
                maxLength="26"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300"
              />
              <div className="flex flex-col items-end">
                <input
                  maxLength="16"
                  type={type}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input border w-full rounded-md border-b-2 pl-2 border-b-blue-300"
                />
                <button type="button" onClick={HandleShowPass} className="text-sm">
                  {showText}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="border-blue-200 border w-[6rem] bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-md hover:bg-blue-300 duration-100"
            >
              Sign Up
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Signup successful!</p>}
        </div>
        <span className="mt-2">
          <p className="text-sm">
            <span className="">Already have an account? </span> |{" "}
            <Link to="/signin" className="text-blue-400">
              Sign In
            </Link>
          </p>
        </span>
        <div className=" flex justify-center mt-[4rem]  w-full pl-4 pt-4 items-center block md:hidden lg:hidden xl:hidden">
          <Link to="/">
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 52 52"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
