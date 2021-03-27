import React from 'react'
import { connect } from 'react-redux'
import {mapCollectionName} from '../../Redux/CollectionData/CollectionData.utils'
import ItemPreview from '../ItemPreview/ItemPreview.component'
import "./Collection.styles.scss"
const Collection=({shopData})=>{
    const {title,items}=shopData

    return(
        <div className="collection-page">
           <p className="title">{title}</p>
           <div className="items">              
                      {
                       items.map(item=>(
                           <div className="collection-item"> 
                              <ItemPreview key={item.id} item={item}/>
                           </div>
                       ))
                    }
                  
             
         </div>
       </div>
    )
   
}
const mapstateToProps=(state,props)=>({
    shopData:state.collectionData.ShopData[props.match.params.id]
})
export default connect(mapstateToProps,null)(Collection)