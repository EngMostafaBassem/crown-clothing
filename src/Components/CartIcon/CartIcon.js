import React from 'react'
import { ReactComponent as CartSvg } from '../../Assets/shopping-bag.svg'
import CartDropDown from '../CartDropdown/CartDropDown'
import {connect } from 'react-redux'
import {GetItemsCount} from '../../Redux/Cart/Cart.utils'
import {ToggleCartMenu} from '../../Redux/Cart/Cart.actions'
import './CartIcon.scss'
const CartIcon=({cart,ToggleCartProp,itemsCount})=>{
    return(
        <div className="cart-icon" onClick={()=>ToggleCartProp()}>
            <div className="shopping-icon">
              <CartSvg/>
            </div> 
            <div className="item-count"> 
               {itemsCount}
            </div>
          {cart.IsShown&&<CartDropDown/>} 
        </div>
    )
}
const mapStateToProps=(state)=>({
    cart:state.cart,
    itemsCount:GetItemsCount(state.cart.items)
    
})
const mapDispatchToProps=(dispatch)=>({
    ToggleCartProp:()=>dispatch(ToggleCartMenu())
})
export default   connect (mapStateToProps,mapDispatchToProps)(CartIcon)