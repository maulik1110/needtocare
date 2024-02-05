import React from 'react'
import { useParams } from 'react-router-dom'

const Smovie = () => {

  const {id} = useParams()
  return (
    <div>Our Movie id is {id}</div>
  )
}

export default Smovie