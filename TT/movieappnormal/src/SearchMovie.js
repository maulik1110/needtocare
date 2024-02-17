import React from 'react'
import { useParams } from 'react-router-dom'

const SearchMovie = () => {
  const {movieid} = useParams()
  return (
      <div>The id is {movieid}</div>
  )
}

export default SearchMovie