import { formatMs } from '@material-ui/core'
import React from 'react'

import Directory from '../../Components/Directory/Directory.component'
import './MainPage.styles.scss'

import {Route,Switch} from 'react-router-dom'
const MainPage=({match})=>{
    
return(
    <div className="App-container">
        <Directory/>
        
        
    </div>
)
}
export default MainPage