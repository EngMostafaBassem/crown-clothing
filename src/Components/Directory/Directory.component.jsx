import React, { Component } from 'react'
import './Directory.styles.scss'
import MenuItems from '../MenuItem/MenuItem.Component'
import {connect } from 'react-redux'
import {Route, Switch, withRouter,Link} from 'react-router-dom'
class Directory extends Component{
    constructor(props){
        super(props)
    }
 render(){
   const {DirectoryData,match}=this.props
    console.log(match)
    
     return(
    
        <div className="directory-container">
           {
              DirectoryData.map(({id,...otherProps})=><MenuItems key={id} {...otherProps}/>)
           }
            
            
            
          
        </div>
    )
 }

}
const mapStateToProps=(state)=>({
 DirectoryData:state.DirectoryData.Sections
})
export default   withRouter(connect(mapStateToProps,null)(Directory))