import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../Utils/CheckValidData";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const Password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInform);
  };

  const handelButtonClick = () => {
    // Valid form data
    const messageForValidate = CheckValidData(
      email.current?.value,
      Password.current?.value,
      name.current?.value
    );
    setErrorMessage(messageForValidate);
    if (messageForValidate) return;
    if (!isSignInform) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in logic


signInWithEmailAndPassword(auth, email.current.value,Password.current.value,)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
  });


    }
  };

  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <img
          className="scale-105 absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <div className="bg-opacity-75">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-6 sm:p-8 md:p-10 lg:p-12 bg-black my-12 sm:my-24 md:my-32 lg:my-36 mx-auto right-0 left-0 text-white bg-opacity-85"
        >
          <h1 className="text-white font-bold text-2xl sm:text-3xl py-2 sm:py-4">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
          />
          <br />
          <input
            ref={Password}
            type="text"
            placeholder="Password"
            className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-black text-white border-red-700 border-solid border-l-2"
          />{" "}
          <br />
          <p className="text-red-700">{errorMessage}</p>
          <button
            className="p-3 sm:p-4 my-2 sm:my-4 w-full bg-red-600 text-white"
            onClick={handelButtonClick}
          >
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 sm:py-4 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInform
              ? " New to Netflix? Sign Up"
              : " Already on Netflix? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
