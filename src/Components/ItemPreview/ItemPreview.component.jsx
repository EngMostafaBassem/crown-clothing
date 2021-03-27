import React from 'react'
import './ItemPreview.styles.scss'
import {connect} from 'react-redux'
import {AddItemToCartAction} from '../../Redux/Cart/Cart.actions'
const ItemPreview=({item,_AddItemToCartAction})=>{
    const{name,imageUrl,price}=item
    return(
        <div className="itemPreview-container">
           <div className="itemPreview-box">
             <figure className="itemPreview-box__img">
                 <img src={imageUrl}/>
             </figure>
             <div className="itemPreview-box__footer">
               <p>{name}</p>
               <p>{price}</p>
             </div>
              <button className="itemPreview-box__btn" onClick={()=>_AddItemToCartAction(item)}>ADD TO CHART</button>
           </div>
        </div>
    )
}
 const mapDispatchToProp=(dispatch)=>({
   _AddItemToCartAction:(item)=>dispatch(AddItemToCartAction(item))
 })

export default   connect(null,mapDispatchToProp)(ItemPreview)