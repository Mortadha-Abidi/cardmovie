import React from 'react'
import { MovieCard } from './MovieCard'
import './movieCard.css'
export const MovieList = ({movie,edit}) => {
    // console.log(movie);
  return (
    <div className='grid-container'>
        {movie.map(e=><MovieCard movie={e} key={e.id} edit={edit}/>
        )}
        
    </div>
 
  )
}
