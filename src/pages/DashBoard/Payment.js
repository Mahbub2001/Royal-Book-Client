import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '../../components/PayementForm/PaymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    // console.log(booking);
    const {book_name,book_price} = data;
    if (navigation.state === "loading") {
    //   return <Spinner />;
    }
    // console.log(data);
    return (
        <div className='text-center mt-10'>
        <h3 className="text-1xl my-5">Payment for <span className='text-2xl font-bol'>{book_name}</span> </h3>
        <p>
          Please pay <strong>${book_price}</strong> for your book
        </p>
        <div className="my-12">
          <Elements stripe={stripePromise}>
            <PaymentForm bookingData={data} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;