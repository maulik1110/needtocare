import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

  const [isloggedin, setIsloggedin] = useState("Logout")
  const onlineStatus = useOnlineStatus()
  return (
    <div className='flex justify-between px-8 py-4'>
        <div className="logo text-violet-400">LOGO</div>
        <div className="navlink">
            <ul className='flex gap-4 font-medium items-center'>
                <li>Status: {onlineStatus===true ? "💚" : "🔴"}</li>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
                <Link to="/cart">Cart</Link>
                <button onClick={()=>{  
                  setIsloggedin(isloggedin==="Login" ? "Log out" : "Login");
                }} className='bg-slate-200 px-8 py-1 rounded-md'>{isloggedin}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header