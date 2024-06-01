import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upCommingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpCommingMovies:(state,action)=>{
            state.upCommingMovies=action.payload;

        }
    }
})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpCommingMovies}=MoviesSlice.actions
export default MoviesSlice.reducer;