import React from 'react'
import { useParams } from 'react-router-dom'

export default function MoviesDetails(items) {
  const { moviesId } = useParams()
  
          // const elements = items.map(({ title, id, backdrop_path, overview, release_date, genre_ids, vote_average }) => 
          //   <li key={id} backdrop_path={backdrop_path}>
          //       <img src={backdrop_path} alt="" />
          //       <h2>{title}</h2>
          //       <p>{release_date}</p>
          //       <p> User Score: {vote_average}</p>
          //       <h3>Overview</h3>
          //       <p>{overview}</p>
          //       <h3>Genres</h3>
          //       <p>{ genre_ids }</p>
          //   </li>        
  // )
  
    return (
      <>
        <div>MoviesDetails  with { moviesId }</div>
            {/* <ul>
                {elements}
            </ul> */}
    </>
    )
}
