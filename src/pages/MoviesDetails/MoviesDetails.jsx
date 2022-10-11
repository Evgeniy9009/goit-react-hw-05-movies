import Loading from 'components/Loading/Loading'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link, Outlet } from 'react-router-dom'
import { getPostsById } from 'shared/API/post'
import css from "pages/MoviesDetails/MoviesDetails.module.css"



export default function MoviesDetails() {

  const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const {id} = useParams()
  // console.log(id)
  const navigate = useNavigate()
 
    useEffect(() => {
      const fetchPosts = async () => {
          setLoading(true);
          try {
            setError(null)            
            const data = await getPostsById(id)
            // console.log("data", data)
            setState(data)
          } catch (error) {
              setError(error)
          } finally {
              setLoading(false)
          }
        }
        fetchPosts()
    }, [id])
  
  const goBack = () => navigate(-1)
  // const goPosts = () => navigate("/movies")
  
  // console.log("state", state)
  
  // const elements = items.map(({ title, id, backdrop_path, overview, release_date, genre_ids, vote_average }) => 
              
  const { title, backdrop_path, overview, release_date, genres, popularity } = state 
  
  // let today = new Date()
  // let y = today.getFullYear()
  // console.log(today)
  // console.log(release_date)

  
  const elements = genres?.map(({name}) => 
    <span>{name } </span>)
  console.log(elements)

  const URL = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
let res = URL+backdrop_path
  return (
    <>
      {loading && <Loading />}
      {error && <p>Something went wrong</p>}
      <div>
        <button onClick={goBack}>Go back</button>
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
          <ul>Additional information
            <li><Link to="cast">Cast</Link></li>
            <li><Link to="revievs">Revievs</Link></li>
          </ul>
        </div>
      }
        <Outlet/>
  </>
  )
}
