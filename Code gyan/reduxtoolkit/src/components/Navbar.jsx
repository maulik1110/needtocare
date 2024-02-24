import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cart from '../pages/Cart'

const Navbar = () => {

  const countNo = useSelector((state)=>state.cart)
  return (
    <div style={{display: "flex", justifyContent:"space-between",alignItems:"center"}}>
        <span className='logo'>Redux Toolkit</span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>
            <span className='cartCount'>
                Cart Items : {countNo.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//     const items = useSelector((state) => state.cart);
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//             }}
//         >
//             <span className="logo">REDUX STORE</span>
//             <div>
//                 <Link className="navLink" to="/">
//                     Home
//                 </Link>
//                 <Link className="navLink" to="/cart">
//                     Cart
//                 </Link>
//                 <span className="cartCount">Cart items: {items.length}</span>
//             </div>
//         </div>
//     );
// };

// export default Navbar;