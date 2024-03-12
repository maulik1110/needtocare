import React from 'react'
import Header from './component/Header'
import Body from './component/Body'
import { createBrowserRouter, RouterProvider , Outlet, Routes, Route } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Errorpage from './component/Errorpage'
import Cart from './component/Cart'
import ResMenu from './ResMenu'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/restaurant/:resId' element={<ResMenu/>}/>
      </Routes>
    </div>
  )
}

// export const approuter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children:[
//       {
//         path: "/",
//         element:<Body/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       }

//     ],
//     errorElement: <Errorpage/>
//   },
  
// ])

export default App