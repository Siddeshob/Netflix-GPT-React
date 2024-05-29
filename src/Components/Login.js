import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <img
          className="scale-105 absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <div className="bg-opacity-75">
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
          <h1 className="text-white font-bold text-3xl py-4">
            
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (<input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
          />)}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
          />{" "}
          <br />
          <button className="p-4 my-4 w-full bg-red-600 text-white">
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInform? " New to Netflix ? Sign Up":" Already on Netflix ? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
