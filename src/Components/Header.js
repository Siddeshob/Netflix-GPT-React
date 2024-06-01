import React, { useEffect } from "react";
import Login from "./Login";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, removeUser } from "../Utils/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
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
    return ()=>unsubscribe()
  }, []);

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
            <div className="flex">
              <img
                className="h-14"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="user_icon"
              />
              <button
                className="font-bold text-white pb-5 px-4"
                onClick={handleSignOut}
              >
                (Sign Out)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
