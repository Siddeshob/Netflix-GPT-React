import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpCommingMovies from "../CustomHooks/useUpCommingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies()
useTopRatedMovies()
useUpCommingMovies()
  return (
    <div>
      <Header />
      {showGptSearch?<GPTSearch/> : <><MainContainer/><SecondaryContainer/> </> }
      
      
    </div>
  );
};

export default Browse;
