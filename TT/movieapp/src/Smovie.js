import React from 'react'
import { useParams } from 'react-router-dom'

const Smovie = () => {

  const {userid} = useParams()
  return (
    <div>Our Movie id is {id}</div>
  )
}

export default Smovie