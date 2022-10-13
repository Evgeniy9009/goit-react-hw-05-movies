import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"


export default function MoviesForm({onSubmit, searchQuery}) {
  const [search, setSearch] = useState(searchQuery ?? "")


  
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
MoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
}
