import React from 'react'
import SignIn from '../../Components/SignIn/SignIn.component'
import SignUp from '../../Components/SignUp/SignUp.component'
import {Grid} from '@material-ui/core'
import './Sign.styles.scss'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'
const Sign=({user})=>{
    return(
    <div className="sign-container">
    
        <Grid container spacing={1}>

          <Grid container item xs={12} lg={6} spacing={3}>
            <div className="signIn-container">
              <SignIn/>
            </div>
         </Grid>        
          <Grid container item xs={12} lg={6} spacing={3}>
            <div className="signUp-container">
                <SignUp/>
            </div>
         </Grid>
        </Grid>    
        {user.currentUser&&<Redirect to="/"/>}
    </div>
    )
}
const mapStateToProps=({user})=>({
  user:user

})
export default connect(mapStateToProps,null)(Sign)