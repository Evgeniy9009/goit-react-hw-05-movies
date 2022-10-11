import React from 'react'
import { useState } from 'react'


export default function MoviesForm({value, onSubmit}) {
  const [search, setSearch] = useState("")


  const handleChange = (e) => {
    const { value } = e.target
    setSearch(value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit( search )

    }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={search}
        type="text"
        name='search'
      />
        <button type='submit' onClick={handleSubmit}>Search</button>
    </form>
  )
}
