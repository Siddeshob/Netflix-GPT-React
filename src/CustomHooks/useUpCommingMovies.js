import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addUpCommingMovies } from '../Utils/MoviesSlice'

const useUpCommingMovies = () => {

    const dispatch=useDispatch()

  const getUpCommingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
    const json=await data.json()
    dispatch(addUpCommingMovies(json.results))
  }

  useEffect(()=>{
    getUpCommingMovies()
},[])
}

export default useUpCommingMovies