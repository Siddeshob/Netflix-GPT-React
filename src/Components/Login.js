import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../Utils/CheckValidData";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUsers } from "../Utils/UserSlice";
import { BG_URL } from "../Utils/constants";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const Password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

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
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/130699981?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUsers({
                  udi: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
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
          src={BG_URL}
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
          />
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
