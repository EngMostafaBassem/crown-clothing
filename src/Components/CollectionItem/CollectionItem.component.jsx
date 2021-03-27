import React from 'react'
import ItemPreview from '../ItemPreview/ItemPreview.component'
import './CollectionItem.styles.scss'

const CollectionItem=({title,items})=>{

    return(
        <div>
           <h1 style={{marginLeft:'1.8rem'}}>{title}</h1>
           <div className="ItemsPreview-container"> 
           {items.filter((_,index)=>index<4).map((item)=>(
             <ItemPreview  key={item.id} item={item}/>
           ))}
        
           </div>
        </div>
    )
}
export default CollectionItem