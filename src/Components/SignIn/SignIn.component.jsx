import React, { Component } from 'react'
import {TextField,Button} from '@material-ui/core'
import {AuthWithGoogle,SignInForEmailAndPassword} from '../../Firebase/Auth'
import Alert from '@material-ui/lab/Alert';

class SignIn extends Component{
    constructor(props){
        super(props)
            this.state={             
                    email:'',
                    password:'',
                    errorMessage:'' 
            }    
    }
    changeInput=({target})=>{
        const {name,value}=target
        this.setState({[name]:value})
       }
    setErrorMessage=(errorMessage)=>{
           this.setState({errorMessage:errorMessage})
       }
    submitForm=(e)=>{
           e.preventDefault();
           const {email,password}=this.state
           SignInForEmailAndPassword(email,password).catch(error=>{
              this.setErrorMessage(error)
           })

       }
    render(){ 
     return(
        <div>
          <h1>I already have account</h1>
          <p>Sign in with your email and password</p>
          <form onSubmit={this.submitForm}>
          <TextField id="standard-basic" label="Email" fullWidth type="email" name="email"  style={{ margin: 8 }} onChange={this.changeInput}/>
          <TextField id="standard-basic" label="Password" fullWidth  type="password" name="password" style={{ margin: 8 }} onChange={this.changeInput}/>
          <Button variant="contained"  color="primary" style={{margin:8}} type="submit">  SIGN IN </Button>
          <Button variant="contained" color="secondary"  style={{margin:8}} onClick={AuthWithGoogle}>  SIGN IN WITH GOOGLE  </Button>     
          {this.state.errorMessage&&<Alert severity="error">{this.state.errorMessage}</Alert>} 
          
          </form>
      </div>
     )
}
}

export default  SignIn