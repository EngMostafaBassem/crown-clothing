import React ,{Component} from 'react'
import './App.css';
import MainPage from './Pages/MainPage/MainPage.component';
import {BrowserRouter as Router, Redirect, Route,Switch,withRouter} from "react-router-dom";
import Shop from './Pages/ShopPage/ShopPage.component'
import Header from './Components/Header/Header.component'
import Sign from './Pages/Sign/Sign.component'
import {auth} from './Firebase/firebaseConfig'
import {CreateOrGetUserProfile  } from "./Firebase/Auth";
import { connect } from 'react-redux'
import {FetchCurrentUserAction}from './Redux/User/user.action'
import CheckOut from './Pages/CheckOut/CheckOut';
const Hats=()=>{
  return(
    <div>
      Hey Hat's
    </div>
  )
}
const Jackets=()=>{
  return(
    <div>
      Hey Jackets
    </div>
  )
}
const Sneakers=()=>{
  return(
    <div>
      Hey Sneakers
    </div>
  )
}
const Women=()=>{
  return(
    <div>
      Hey Womens
    </div>
  )
}
const Men=()=>{
  return(
    <div>
      Hey Mens
    </div>
  )
}
class App extends Component{

  constructor(props){
    super(props)
    this.state={
      currentUser:null,loginResponse:false
    }
    this.unsubscribe=null
  }
 
  componentDidMount(){  
    console.log(this.props.user.currentUser)
    this.unsubscribe=auth.onAuthStateChanged( async user=>{
     if(user!=null){
       var {uid,displayName,email}=user
       var userRef=await CreateOrGetUserProfile(uid,email,displayName)
       userRef.onSnapshot(user=>{
         this.props.SetCurrentUser({currentUser:{...user.data()}});
       })
      }
       else{
         this.props.SetCurrentUser({currentUser:null})
       }
     
    })
  }
  componentWillUnmount(){
   this.unsubscribe()
  }

render(){

  return(
  
    <div className="App-container">
      <Header />
      <Switch>  
        <Route path="/" exact component={MainPage}/>
        <Route path="/shop"  component={Shop}/>
        
        <Route path="/checkout" exact component={CheckOut}/>
        <Route path="/login" exact component={Sign}/>
        
     
      </Switch>
      </div>
  )
}
}
const mapStateToProps=(state)=>({
  user:state.user
})

const mapDispatchToProps=(dispatch)=>({
  SetCurrentUser:(user)=>dispatch(FetchCurrentUserAction(user))
})
export default  connect(mapStateToProps,mapDispatchToProps) (withRouter(App))

