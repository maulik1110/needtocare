import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import SearchMovie from './SearchMovie'
import PathNotFound from './PathNotFound'
import Movies from './Movies'

const App = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={<Movies/>}/> */}
        <Route path='movies/:movieid' element={<SearchMovie/>}/>
        <Route path='*' element={<PathNotFound/>}/>
      </Routes>
    // </BrowserRouter>    
  )
}

export default App