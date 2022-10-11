import FilmItems from 'components/FilmItems/FilmItems'
import Loading from 'components/Loading/Loading'
import MoviesForm from 'components/MoviesForm/MoviesForm'
// import MoviesGallery from 'components/MoviesGallery/MoviesGallery'
import React from 'react'
import { useState, useEffect } from 'react'
import { searchPosts } from 'shared/API/post'


export default function Movies() {

  const [search, setSearch] = useState("")
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!search || search.length ===0 ) { return }
    
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const data = await searchPosts(search)
        setItems(data.results)
        console.log(data.results)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        }
    }
    fetchPosts()
    }, [search])

  const onSearch = (newSearch) => {
    setSearch(newSearch)
  }



  return (
    <div>
      <MoviesForm onSubmit={onSearch} />
      {loading && <Loading />}
      {error && <p>Что-то пошло не по плану...</p>}
      {!items.length && search && <p>Ничего не найдено...</p>}
      {items.length && <FilmItems items={items} />}
    </div>
  )
}
