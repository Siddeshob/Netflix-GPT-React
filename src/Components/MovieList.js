import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Check if movies is defined and has at least one element
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
