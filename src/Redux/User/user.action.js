import {userTypes} from './user.actionTypes'
export const FetchCurrentUserAction=(user)=>({
    type:userTypes.FETCH_CURRENT_USER,
    payload:user
})