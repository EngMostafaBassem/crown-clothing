import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const StripeButton=({price})=>{
 const publishKey='pk_test_51IZLeOH3gnZQvhJiJTL3m9BWLVCE2eredFWeGeA646qo3ELVChtCLsf2CFD5t1Yn7ZfXSMRrk4PP2IsS3alEkCwD00fBKRSbgB'
 const onToken=(token)=>{
   console.log(token)
   console.log('transaction has been done successfully')
 }
 return(
    <StripeCheckout
    token={onToken}
    stripeKey={publishKey}
    name={"CROWN-CLOTHING"}
    currency="USD"
    amount={price*100}
    description="Payment Process"
    shippingAddress
    billingAddress={true}
  />
 )
}
export default StripeButton