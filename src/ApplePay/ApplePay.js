import React from 'react'
import {useStripe, useElements} from '@stripe/ react-stripe-js';

const ApplePay = () => {
    const stripe = useStripe ();
    const elements= useElements ();

    const pr = stripe. paymentRequest ({
    currency: 'usd',
    country: 'US',
    requestPayerEmail: true,
    requestPayerName: true,
    total:{
    Label:'Demo payment',
    amount: 1999,
    }
})

  return (
  
    <div>
      hello apple pay 
      <apple-pay-button buttonstyle="black" type="plain" locale="en"></apple-pay-button>
    </div>
  )
}

export default ApplePay

