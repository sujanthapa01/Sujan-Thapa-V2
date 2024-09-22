import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
import useSignup from "../../Hooks/useSignup";
import GoogleButton from "../../components/googleButton/button";
import GoogleIcon from "../../assets/SVG/googleicon.svg"

export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("password");
  const [showText, setShowText] = useState("show");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignup, error, success, loading } = useSignup();

  function handleShowPass() {
    setShowPass(!showPass);
    setType(showPass ? "password" : "text");
    setShowText(showPass ? "show" : "hide");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSignup(username, email, password); // Call signup function with form values
    }
  };

  // Basic validation function
  const validateForm = () => {
    if (!username || !email || !password) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  // Google sign-in handler with redirect instead of popup
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      // Use signInWithRedirect instead of signInWithPopup
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error: ", error.message);
    }
  };

  return (
    <main className="flex justify-center h-screen items-center">
      <div className="wrapper dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 flex items-center flex-col w-full md:w-96 lg:w-96 xl:w-96 h-auto justify-center p-4 bg-transparent backdrop-blur-sm lg:border md:border xl:border rounded-md">
        <div className="w-full pl-4 pt-4 hidden md:block">
          <Link to="/">
            <svg fill="#000000" width="20" height="20" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
            </svg>
          </Link>
        </div>
        <h1 className="uppercase text-xl font-semibold mb-4">Create Account</h1>
        <div className="flex flex-col gap-4 items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2 w-60">
              <input
                type="text"
                placeholder="Full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300 dark:text-black"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input border pl-2 w-full rounded-md border-b-2 border-b-blue-300 dark:text-black"
              />
              <div className="flex flex-col items-end">
                <input
                  type={type}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input border w-full rounded-md border-b-2 pl-2 border-b-blue-300 dark:text-black"
                />
                <button type="button" onClick={handleShowPass} className="text-sm">
                  {showText}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="border-blue-200 border w-24 bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded-full hover:bg-blue-300 duration-100 dark:hover:bg-blue-600 dark:bg-blue-500"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-slate-400">
              or
            </div>
          </form>

          <GoogleButton
            onClick={handleGoogleSignIn}
            text="SignUp With Google"
            img={GoogleIcon}
            className={'select-none bg-white flex items-center justify-center border-2 px-4 rounded-full text-slate-400 cursor-pointer hover:bg-slate-100'}
            imgClass={'h-8 w-8'}

          />

          <div className="h-7 p-1">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
        </div>
        <span className="mt-4">
          <p className="text-sm">
            <span>Already have an account?</span> |{" "}
            <Link to="/login" className="text-blue-400">Login</Link>
          </p>
        </span>
        <div className="flex justify-center mt-8 w-full pl-4 pt-4 items-center md:hidden">
          <Link to="/">
            <svg fill="#000000" width="20" height="20" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
