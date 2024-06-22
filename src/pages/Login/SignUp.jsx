
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("Password");
  const [showText, setShowText] = useState("show");
  const [inputValue, setInputValue] = useState(""); // Start with empty string

  function handleInputChange(event) {
    // Update the state with the new value from the input
    setInputValue(event.target.value);
    console.log(inputValue); // Log the input value
  }

  function submit() {
    console.log(inputValue);
  }

  function HandleShowPass() {
    setShowPass(!showPass);
    setType(showPass ? "password" : "text");
    setShowText(showPass ? "show" : "hide");
  }



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
        <h1 className="uppercase">signin</h1>
        <div className="flex flex-col gap-4 items-center mt-2">
          <div className="flex justify-center flex-col gap-2 w-[14rem]">
            <input
              maxLength="26"
              type="text"
              placeholder="full name"
              onChange={handleInputChange} // Correct usage of onChange handler
              className="input border pl-2 w-full rounded-md  border-b-2 border-b-blue-300"
            />
             <input
              maxLength="26"
              type="text"
              placeholder="email"
              onChange={handleInputChange} // Correct usage of onChange handler
              className="input border pl-2 w-full rounded-md  border-b-2 border-b-blue-300"
            />
            
            <div className="flex flex-col items-end">
              <input
                maxLength="16"
                type={type}
                placeholder="password"
                onChange={handleInputChange} // Correct usage of onChange handler
                className=" input border w-full rounded-md border-b-2 pl-2 border-b-blue-300"
              />
              <button onClick={HandleShowPass} className="text-sm">
                {showText}
              </button>
            </div>
          </div>
          <button
            onClick={submit}
            // This button doesn't update the state, consider form submission logic
            className="border-blue-200 border w-[6rem] bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-md hover:bg-blue-300 duration-100"
          >
            signin
          </button>
        </div>

        <span className="mt-2">
          {" "}
          <p className="text-sm">
            <span className="">already have an account? </span> |{" "}
            <Link to="/signin" className="text-blue-400">
              signin
            </Link>
          </p>{" "}
        </span>

        <div className=" flex justify-center mt-[4rem]  w-full pl-4 pt-4 items-center block md:hidden lg:hidden xl:hidden  ">
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
