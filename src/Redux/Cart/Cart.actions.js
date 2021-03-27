
import {cartTypes} from './Cart.types'
export const ToggleCartMenu=()=>({
    type:cartTypes.TOOGLE_CART
})
export const AddItemToCartAction=(item)=>({
    type:cartTypes.ADD_ITEM_TO_CART,
    payload:item
})
export const ClearItemToCartAction=(item)=>({
    type:cartTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})
export const DecItemToQtyAction=(item)=>({
    type:cartTypes.DEC_ITEM_QTY,
    payload:item
})