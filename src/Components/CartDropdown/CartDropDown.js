import React from 'react'
import './CartDropDown.scss'
import {Button} from '@material-ui/core'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem.component'
import {withRouter} from 'react-router-dom'
const CartDropDown=(props)=>{
    const{items,history}=props
    return(
        <div className="cart-dropdown">
          <div className="cart-items"> 
          {
            (items.length)?
            items.map(item=> <CartItem key={item.id} item={item}/>):
            <span className="cart-empty">Cart Is Empty</span>
          }
          </div>
          <div className={history.location.pathname.includes("checkout")?"hidden":"button"}>
            <Button variant="contained" color="secondary"  onClick={()=>history.push('/checkout')}>
               GO TO CHECKOUT
            </Button>
          </div>
         
        </div>
    )
}
const mapStateToProps=({cart})=>({
  items:cart.items
})

export default withRouter(connect(mapStateToProps,null) (CartDropDown))