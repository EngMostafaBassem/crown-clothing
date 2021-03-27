import React from 'react'
import { Component } from 'react'
import {Button, TextField} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { SignUpForEmailAndPassword } from "../../Firebase/Auth";
class SignUp extends Component{
  constructor(props){
    super(props)
    this.state={username:'',email:'',password:'',confirmpassword:'',errorMessage:''}
  }
   setControl=(event)=>{
     const {name,value}=event.target
     this.setState({[name]:value})
   }
   submitForm=(event)=>{
     event.preventDefault() 
     const {email,password,confirmpassword,username}=this.state
     if(password!=confirmpassword){
      this.setErrorMessage("Passwords are mismatched!!")
     }
     else{
      
      SignUpForEmailAndPassword(email,password,username).
       then(()=>this.setState({errorMessage:''}))
      .catch(result=>this.setErrorMessage(result))
     }
    
   }
   setErrorMessage=(errorMessage)=>{
     this.setState({errorMessage:errorMessage})
   }
  render(){
    return(
      <div>
         <h1>I don't have an account</h1>
         <p>Sign up with your email and password</p>
      <form onSubmit={(e)=>this.submitForm(e)}>
         <TextField id="username" name="username" label="Display Name" type="text" fullWidth  style={{ margin: 8 }} onChange={e=>this.setControl(e)}/>
         <TextField id="email" name="email" type="email" label="Email" fullWidth  style={{ margin: 8 }} onChange={e=>this.setControl(e)}/>
         <TextField id="password" name="password" type="password" label="Password" fullWidth   style={{ margin: 8 }} onChange={e=>this.setControl(e)}/>
         <TextField id="confirm-password" type="password" label="Confirm Password" name="confirmpassword" fullWidth  style={{ margin: 8 }} onChange={e=>this.setControl(e)}/>
         <Button variant="contained" color="primary" style={{ margin: 8 }} type="submit"> SIGN UP</Button>
         {this.state.errorMessage&&<Alert severity="error">{this.state.errorMessage}</Alert>} 
      </form>

      </div>
  )
}
  }
  
export default SignUp