import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/UserSlice"

const AppStore=configureStore({
    reducer:{
        user:userReducer,
    },
})
export default AppStore;