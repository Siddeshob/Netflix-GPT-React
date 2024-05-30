import React, { useState } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
  import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers, removeUser } from "../Utils/UserSlice";



const Body = () => {

  const dispatch=useDispatch()


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

useState(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
     const {uid,email,displayName,photoURL} = user.uid;
    dispatch(addUsers({udi:uid,email:email,displayName:displayName,photoURL:photoURL}))

  } else {
    dispatch(removeUser());

  }
});
},[])






  return (
    <div>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </div>
  );
};

export default Body;
