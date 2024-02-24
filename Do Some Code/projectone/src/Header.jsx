import React from 'react'
import logo from './assets/brand_logo.png'
const Header = () => {
  return (
    <div className='px-10 py-2 flex justify-between items-center'>
    <img src={logo} alt="logo" />
    <div>
        <ul className='flex gap-4'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </div>
    <button className='bg-red-500 flex px-5 py-2 rounded items-center justify-center'>Login</button>
    </div>
  )
}

export default Header