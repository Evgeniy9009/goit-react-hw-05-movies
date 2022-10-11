import Loading from 'components/Loading/Loading'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviews } from 'shared/API/post'

export default function Revievs() {

    const [state, setState] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
  const {id} = useParams()
  console.log(id)

    useEffect(() => {
      const fetchPosts = async () => {
          setLoading(true);
          try {
            setError(null)            
            const data = await getReviews(id)
            console.log("data", data)
            setState(data.results)
          } catch (error) {
              setError(error)
          } finally {
              setLoading(false)
          }
        }
        fetchPosts()
    }, [id])

    const elements = state?.map(({ author, content }) =>
        <li key={author}>
            <p>{author}</p>
            <p>{content }</p>

        </li>)
  
  console.log("state", state)



  return (

    <>
      {loading && <Loading />}
      {error && <p>Что-то пошло не по плану...</p>}
      {(state===null || state.length===0) && <p>We don't have any reviews from this movie.</p>}
      {state && < ul > {elements} </ul>}
    </>
  )
}



    