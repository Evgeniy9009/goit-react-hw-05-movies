import { useEffect, useState } from "react"
import { getPosts } from "../../shared/API/post"

import FilmItems from "components/FilmItems/FilmItems"
import Loading from "components/Loading/Loading"


export default function Home() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
 
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const data = await getPosts()
                const res = data.results
                console.log("res", res)
                setItems(res)
            } catch (error) {
                setError(error)

            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

console.log(items)
    
    return (
        <>
            {loading && <Loading />}
            {error && <p>Что-то пошло не по плану...</p>}
            {items.length && <h3>Trending today</h3>}
            {items.length && <FilmItems items= {items}  />}
        </>
        
  )
}
