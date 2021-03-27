import React from 'react'
import './CartItem.styles.scss'
const CartItem=({item})=>{
  return(
      <div className="cart-item">
          <img src={item.imageUrl} alt="image of cart"/>
          <div className="item-details">
            <p className="name">{item.name}</p>
            <p>{item.quantity} x {item.price}</p>
          </div>
      </div>
  )
}
export default CartItem