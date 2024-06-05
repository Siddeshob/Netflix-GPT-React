import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggesition from './GPTMovieSuggesition'
import { BG_URL } from '../Utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className=' '>
        <img 
          className="scale-105 absolute w-full h-full object-cover -z-10"
          src={BG_URL}
             alt="logo"
        />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggesition/>
    </div>
  )
}

export default GPTSearch