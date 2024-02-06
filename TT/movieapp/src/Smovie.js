import React from 'react'
import { useParams } from 'react-router-dom'

const Smovie = () => {

  const {userid} = useParams()
  return (
    <div>Our Movie id is {userid}</div>
  )
}

export default Smovie