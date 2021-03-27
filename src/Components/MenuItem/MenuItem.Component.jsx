import React from 'react'
import './MenuItem.styles.scss'
import {withRouter} from 'react-router-dom'
const MenuItems=({title,imageUrl,linkUrl,size,match,history})=>{

    return(
    <div className={`MenuItem-container ${size&&'lg-size'} `} onClick={()=>history.push(linkUrl)} >
        <div className="box-container" style={{backgroundImage:`url(${imageUrl})`}}>
           <div className="MenuItem-box">
              <h2 className="MenuItem-box--title">{title}</h2>
              <p className="MenuItem-box--subtitle">Shop Now</p>
              </div>
           </div>
        </div>
    )
}
export default withRouter(MenuItems)