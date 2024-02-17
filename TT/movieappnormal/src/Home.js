// import React, { useContext } from 'react'
// import { AppContext, useGlobalContext } from './context'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
  // const data = useContext(AppContext)
  // const takeData = useGlobalContext(AppContext)
  return (
    <div>

      {/* <h1>Name provided is {takeData.name}</h1>
      <h1>Age provided is {takeData.age}</h1>
      <h1>Studies provided is {takeData.studies}</h1>
      <h1>Where provided is {takeData.where}</h1> */}
      <Movies/>
      <Search/>
    </div>
  )
}

export default Home