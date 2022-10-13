import FilmItems from 'components/FilmItems/FilmItems'
import Loading from 'components/Loading/Loading'
import MoviesForm from 'components/MoviesForm/MoviesForm'
// import MoviesGallery from 'components/MoviesGallery/MoviesGallery'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchPosts } from 'shared/API/post'


export default function Movies() {

  // const [search, setSearch] = useState("")
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
 
  const searchQuery = searchParams.get("searchQuery")


  useEffect(() => {
    if (!searchQuery || searchQuery.length ===0  ) { return }
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const data = await searchPosts(searchQuery)
        setItems(data.results)
        // console.log(data.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        }
    }
    fetchPosts()
    }, [searchQuery])

  const onSearch = (search) => {
    setSearchParams({searchQuery: search})
  }



  return (
    <div>
      <MoviesForm onSubmit={onSearch} searchQuery={searchQuery} />
      {loading && <Loading />}
      {error && <p>Что-то пошло не по плану...</p>}
      {!items.length && searchQuery && <p>Ничего не найдено...</p>}
      {items.length> 0  && <FilmItems items={items} />}
    </div>
  )
}
