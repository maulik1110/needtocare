import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();

  const prods = useSelector((state)=>state.cart)
  const handleRemoce = (productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="classWrapper">
        {prods.map(prod=>(
          <div className="cartCard">
            <img src={prod.image} alt="" />
            <h5>{prod.title}</h5>
            <h5>{prod.price}</h5>
            <button onClick={()=>handleRemoce(prod.id)} className='btn'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart