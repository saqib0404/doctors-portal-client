import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_stripePk);

const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, price, slot, treatment} = booking;
    return (
        <div>
            <h2 className='text-3xl mt-2 mb-4'>Payment</h2>
            <h3 className='text-xl my-2 mb-4'>Please pay <strong>${price}</strong> for your appointment on {treatment} on {appointmentDate} at {slot}</h3>
            <h3 className='text-lg my-2 mt-8'>Pay by your card</h3>
            <Elements  stripe={stripePromise}>
                <CheckoutForm booking={booking} />
            </Elements>
        </div>
    );
};

export default Payment;