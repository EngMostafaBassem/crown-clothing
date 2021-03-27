import React from 'react'
import './CheckOut.scss'
import {connect}from 'react-redux'
import CheckOutItem from '../../Components/CheckoutItem/CheckoutItem.component'
import {GetTotalItemsPrice} from '../../Redux/Cart/Cart.utils'
import StripeButton from '../../Components/StripeButton/StripeButton.component'
 const CheckOut=(props)=>{
     const {cart,TotalCount}=props
    return(
        <div className="checkout-page ">
          <div className="checkout-header">    
           <div className="header-block">
             <span>Product</span>
           </div>
           <div className="header-block">
             <span>Description</span>
           </div>
           <div className="header-block">
             <span>Quantity</span>
           </div>
           <div className="header-block">
             <span>Price</span>
           </div>
           <div className="header-block">
             <span>Remove</span>
           </div>
          </div>
         
           {
               cart.items.map(item=><CheckOutItem key={item.id} item={item}/>)
           }
            <div className="total ">
             <span> Total: ${TotalCount}</span>
          </div>
          <StripeButton price={TotalCount}/>
        </div>
    )
 }
 const mapStateToProps=(state)=>({
     cart:state.cart,
     TotalCount:GetTotalItemsPrice(state.cart.items)
 })
 export default  connect(mapStateToProps,null)(CheckOut)