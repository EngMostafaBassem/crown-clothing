import React from 'react'
import './CheckoutItem.styles.scss'
import {connect} from 'react-redux'
import {ClearItemToCartAction,AddItemToCartAction,DecItemToQtyAction} from '../../Redux/Cart/Cart.actions'
const CheckOutItem=(props)=>{
    const {item,ClearItemToCart,AddItemToCart,DecItemToQty}=props
    return(
        <div className="checkout-item ">
            <div className="image-container">
              <img src={item.imageUrl} alt="image of item"/>
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity"> <span className="dec-cursor" onClick={()=>DecItemToQty(item)}>&#10092;</span> {item.quantity} <span className="inc-cursor" onClick={()=>AddItemToCart(item)}>&#10093;</span> </span>
            <span className="price">{item.price}</span>
            <span className="remove-button" onClick={()=>ClearItemToCart(item)}>&#10005;</span>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>({
    ClearItemToCart:(item)=>dispatch(ClearItemToCartAction(item)),
    AddItemToCart:(item)=>dispatch(AddItemToCartAction(item)),
    DecItemToQty:(item)=>dispatch(DecItemToQtyAction(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem)