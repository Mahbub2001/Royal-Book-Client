import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getPaymentIntent, savePayment } from "../../api/booking";

const PaymentForm = ({ bookingData }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { book_price, user_email, user_name } = bookingData;

  useEffect(() => {
    getPaymentIntent(book_price).then((data) => {
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    });
  }, [book_price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user_name,
            email: user_email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      // console.log(paymentIntent)

      //store payment on database
      const data = {
        transectionId: paymentIntent.id,
        ...bookingData,
      };
      savePayment(data)
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          // console.log(data)
          toast.success("Payment Successful!");
          navigate("/dashboard/my-orders");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="my-10 max-w-lg">
        <CardElement
          className="md:w-96 w-72 border p-4 rounded-md shadow-md"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" mt-4 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-md text-white px-4 py-1"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </div>
  );
};

export default PaymentForm;
