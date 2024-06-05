import React, { useEffect } from "react";
import Login from "./Login";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUser } from "../Utils/UserSlice";
import { togelGPTSearchView } from "../Utils/GPTSlice";
import { SUPPORTED_LANG } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            udi: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTsearchClick = () => {
    //Toglt GPT search
    dispatch(togelGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <div>
        <div className="absolute w-full px-40 pt-4 bg-gradient-to-b from-black z-10 flex justify-between">
          <img
            className="w-44"
            alt="Logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          />
          {user && (
            <div>
              <div className="flex">
                {showGptSearch && (
                  <select
                    className="p-2 bg-gray-900 text-white opacity-75 rounded-xl"
                    onClick={handleLanguageChange}
                  >
                    {SUPPORTED_LANG.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  className=" px-5 mx-12 bg-purple-800 text-white rounded-lg hover:bg-purple-900"
                  onClick={handleGPTsearchClick}
                >
                 {showGptSearch ? "Home Page" : "GPT Search"}
                </button>
                <img
                  className="h-12"
                  src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                  alt="user_icon"
                />
                <button
                  className="font-bold text-white pb-1 px-4"
                  onClick={handleSignOut}
                >
                  (Sign Out)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
