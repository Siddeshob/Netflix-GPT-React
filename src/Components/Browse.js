import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpCommingMovies from "../CustomHooks/useUpCommingMovies";

const Browse = () => {
useNowPlayingMovies();
usePopularMovies()
useTopRatedMovies()
useUpCommingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
