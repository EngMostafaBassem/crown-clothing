import React from "react";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.component";
import './ShopPage.styles.scss'
import {Route}  from 'react-router-dom'
import Collection from "../../Components/Collection/Collection.component";

const ShopPage=({match})=>{ 
   
    return (
        <div className="App-container">      
          <Route exact path={`${match.path}`}  component={CollectionPreview}/>
          <Route  path={`${match.path}/:id`}  component={Collection}/>
        </div>
    )
}

export default ShopPage