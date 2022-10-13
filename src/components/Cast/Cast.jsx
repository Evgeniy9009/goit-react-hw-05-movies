import Loading from 'components/Loading/Loading'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCast } from 'shared/API/post'

export default function Cast() {
  const [state, setState] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const { id } = useParams()
  // console.log(id)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        setError(null)
        const data = await getCast(id)
        // console.log("data", data)
        setState(data.cast)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [id])
  
  // console.log("state", state)

  let elements = null
  
  if (state) {
    elements = state.map(({ name, id }) => 
      <li key={id}>{name}</li> 
  )}
    // console.log("state", state)
  return (
    <div>
      {loading && <Loading />}
      {error && <p>Что-то пошло не по плану...</p>}
      {(state===null || state.length===0) && <p>We don't have any cast from this movie.</p>}
      {state && <ul>{elements}</ul>}
    </div>
  )
}
