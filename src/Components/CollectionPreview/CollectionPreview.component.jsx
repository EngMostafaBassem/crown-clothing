import React, { Component } from 'react'
import CollectionItem from '../CollectionItem/CollectionItem.component';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
class CollectionPreview extends Component{
    constructor(props){
        super(props)      
    }
  render(){
      const {collectionData}=this.props
      return(
          <div>
            {collectionData.map( ({id,...otherProps})=> <CollectionItem key={id} {...otherProps} />)}
           
          </div>
          
      )
  }
}
const mapStateToProps=(state)=>({
    collectionData:Object.values(state.collectionData.ShopData)
})
export default  connect(mapStateToProps,null)(CollectionPreview)