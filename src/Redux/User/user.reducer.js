import {userTypes} from './user.actionTypes'
const userReducer=(
    state={
        currentUser:null
    },
    action)=>{
  switch(action.type){
      case userTypes.FETCH_CURRENT_USER:
          return {...state,...action.payload}
       default:
           return state;   

  }
}
export default userReducer