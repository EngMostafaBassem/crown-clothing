export const GetFilterdItems=(items,itemToBeUpdated)=>{
    var targetItem=items.find(item=>item.id==itemToBeUpdated.id)
    if(targetItem){
      return items.map(item=>item.id==itemToBeUpdated.id?{...item,quantity:item.quantity+1}:item)  
    }
    return [...items,{...itemToBeUpdated,quantity:1}]

}
export const GetItemsCount=(items)=>items.reduce((accum,item)=>accum+item.quantity,0)
export const GetTotalItemsPrice=(items)=>items.reduce((accum,item)=>accum+item.quantity*item.price,0)
export const GetFilterdItemDecQty=(items,itemTobeQtyDec)=>{
  if(itemTobeQtyDec.quantity==1)
    return items.filter(item=>item.id!=itemTobeQtyDec.id)
  else
    return items.map(item=>item.id==itemTobeQtyDec.id?{...item,quantity:item.quantity-1}:item)  
   
   
}