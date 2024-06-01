import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
      <div className='w-48 pr-4 '>
        <img className='px-[7px]' alt="Movie_Card" src={IMG_CDN_URL + posterPath} />
      </div>
    );
  };
  
  export default MovieCard;