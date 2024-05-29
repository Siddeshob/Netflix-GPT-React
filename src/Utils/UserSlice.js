import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUsers:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export const {addUsers,removeUser} =UserSlice.actions;
export default UserSlice.reducer;

