import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        togelGPTSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
    }
})
export const {togelGPTSearchView}=GPTSlice.actions
export default GPTSlice.reducer