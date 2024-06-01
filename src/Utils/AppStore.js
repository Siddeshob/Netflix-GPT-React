import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/UserSlice"
import MoviesReducer from "../Utils/MoviesSlice"


const AppStore=configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer, // store name + Reducer=MoviesReducer
    },
})
export default AppStore;