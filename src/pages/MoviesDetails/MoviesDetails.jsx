import Loading from 'components/Loading/Loading'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link, Outlet, useLocation } from 'react-router-dom'
import { getPostsById } from 'shared/API/post'
import css from "pages/MoviesDetails/MoviesDetails.module.css"
import { nanoid } from 'nanoid'

export default function MoviesDetails() {

  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const {id} = useParams()

  const location = useLocation()
  // console.log("location", location)
  const cameBack = location.state?.from ?? "/"
 
    useEffect(() => {
      const fetchPosts = async () => {
          setLoading(true);
          try {
            setError(null)            
            const data = await getPostsById(id)
            setState(data)
          } catch (error) {
              setError(error)
          } finally {
              setLoading(false)
          }
        }
        fetchPosts()
    }, [id])

  const { title, backdrop_path, overview, release_date, genres, popularity } = state 
  
  const elements = genres?.map(({name}) => 
    <span key={nanoid()}>{name } </span>)
  // console.log(elements)

  const URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  let res = URL + backdrop_path
  
  const castId = nanoid()
  const reviewsId = nanoid()

  return (
    <>
      {loading && <Loading />}
      {error && <p>Something went wrong</p>}
      <div>
        <Link to={cameBack}>Go back</Link>
      </div>
      
      {state &&
        <div>
          <div className={css.box}>
            <div>
              <img src={res} alt="" width={400}/>
            </div>
            <div>
              <h2>{title} <span>({release_date?.slice(0, 4)})</span></h2>
              <p> User Score: {Math.round(popularity)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{elements}</p>
            </div>
          </div>
          <h3>Additional information
            <li key={castId} ><Link to="cast" state={{from: cameBack}}>Cast</Link></li>
            <li key={reviewsId} ><Link to="revievs" state={{from: cameBack}}>Reviews</Link></li>
          </h3>
        </div>
      }
        <Outlet/>
  </>
  )
}
