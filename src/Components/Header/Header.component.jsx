import React from 'react'
import './Header.styles.scss';
import  HeaderLogo from '../../Assets/crown.svg'
import {Link} from 'react-router-dom'
import {auth,SignOut} from '../../Firebase/Auth'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon';
import {withRouter}from 'react-router-dom'
const Header=({user})=>{
return(
    <div className="Header-container">
      <div className="Header-logo">
          <Link to="/">
          <img src={HeaderLogo} alt="React Logo" />
         </Link>
      </div>
        <nav className="Header-nav">
          {
           <Link to="/login" className="nav-item">
            {
             (user.currentUser!=null)?<li onClick={SignOut}>Sign Out</li>:<li>Sign In</li>
            }
             
           </Link>
          }
            <Link to="/shop" className="nav-item">
              <li>Shop</li>
            </Link>
             <Link to="/" className="nav-item"> 
               <li>Contact</li>
            </Link>
            <CartIcon/>
        </nav>
    </div>
)
}
const mapStateToProps=(state)=>{
  return{
    user:state.user,
    
  }
}
export default   connect(mapStateToProps)(Header)