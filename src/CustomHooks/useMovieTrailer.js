import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    const dispatch = useDispatch();
  
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${ movieId }/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results(0);
    //   console.log(filterData);
    //   console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMovieVideos();
    }, []);

}
export default useMovieTrailer;