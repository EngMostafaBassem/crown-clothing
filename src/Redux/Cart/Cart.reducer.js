import {cartTypes} from './Cart.types'
import{GetFilterdItems, GetFilterdItemDecQty} from './Cart.utils'
const CartReducer=(state={IsShown:false,items:[]},action)=>{
 switch(action.type){
      case cartTypes.TOOGLE_CART:
         return {...state,IsShown:!state.IsShown}        
      case cartTypes.ADD_ITEM_TO_CART:
          const items=GetFilterdItems(state.items,action.payload);
          return {...state,items}   
      case cartTypes.CLEAR_ITEM_FROM_CART:
            return {...state,items:state.items.filter(item=>item.id!=action.payload.id)}
      case cartTypes.DEC_ITEM_QTY:
            return {...state,items:GetFilterdItemDecQty(state.items,action.payload)}              
      default:
          return state;   
 }
}
export default CartReducer