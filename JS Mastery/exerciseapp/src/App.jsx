import React from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Box } from "@mui/material";
import Navbar from './components/Navbar';
import Exercisedetaill from './Pages/Exercisedetaill';
import Home from './Pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:"1480px"}}} m="auto"> 
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='./exercise/:id' element={<Exercisedetaill/>} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App