import React from 'react'

function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("Password");
  const [showText, setShowText] = useState("show");
  const [inputValue, setInputValue] = useState(""); // Start with empty string

  function handleInputChange(event) {
    // Update the state with the new value from the input
    setInputValue(event.target.value);
    console.log(inputValue); // Log the input value
  }

  function submit(){
    console.log(inputValue);
  }

  function HandleShowPass() {
   setShowPass(!showPass);
   showText(showPass? 'show' : 'hideuu')
   setType(showPass? 'password' : 'text')
  }

  return (
    <main className="flex justify-center h-[100vh] items-center">
      <div className="wrapper flex items-center flex-col w-[25rem] h-[14rem] justify-around p-1  bg-white border rounded-md">
        <h1 className="uppercase">signin</h1>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center flex-col gap-2 w-[14rem]">
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
              <button onClick={HandleShowPass} className="text-sm">{showText}</button>
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

        <Link>
          {" "}
          <p className="text-sm">
            <span className="hover:text-red-400">forget password</span> |
            <Link  to="CreateAccount" className="text-blue-400">signup</Link>  
          </p>{" "}
        </Link>
      </div>
    </main>
  )
  
}

export default Signup
