import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/UserSlice"
import MoviesReducer from "../Utils/MoviesSlice"
import gptReducer from "../Utils/GPTSlice" 
import configReducer from "../Utils/configSlice"


const AppStore=configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer, // store name + Reducer=MoviesReducer
        gpt:gptReducer,
        config:configReducer,
    },
})
export default AppStore;