import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlice";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";

// fetch trailer video & updating store also
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        // src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default VideoBackground;
