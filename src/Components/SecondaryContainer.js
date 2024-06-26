import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies)


  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcomming Movies"} movies={movies.upCommingMovies} />
    

        {/* {movies.map((mov)=><MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />)} */}

      </div>
    </div>
  );
};

export default SecondaryContainer;
