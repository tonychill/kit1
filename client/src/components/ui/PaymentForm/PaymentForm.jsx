import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Input from "../../core/Input";
import axios from "axios";
import styles from "./payments.module.css";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripeKey = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_STRIPEKEY_TEST : process.env.NEXT_PUBLIC_STRIPEKEY_LIVE;

const stripePromise = loadStripe(stripeKey);

const PaymentInput = ({ handleStepChange }) => {
  const { cogName, email, traveler_id } = localStorage;
  const [status, setStatus] = useState("");
  const [succeeded, setSucceeded] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const storeClientSecret = (secret) => {
    localStorage.setItem("stripeSecret", secret);
    setClientSecret(secret);
  };
  // const build = process.env.NODE_ENV === "development" ? "dev" : "prod";

  useEffect(() => {
    console.log(traveler_id);
    let currency = "usd";
    const stripeSecret = localStorage.stripeSecret;
    (async () => {
      if (!stripeSecret) {
        await axios
          .post(`${process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_STRIPESERVER_DEV : process.env.NEXT_PUBLIC_STRIPESERVER_PROD}`, {
            membership_level: 2,
            currency,
            email,
            name: cogName,
            traveler_id,
          })
          .then((data) => {
            if (data.data.payment.client_secret) {
              storeClientSecret(data.data.payment.client_secret);
            } else {
              throw new Error("A client secret from the payment server was not returned. ");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (stripeSecret) setClientSecret(stripeSecret);
    })();
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form id="payment-form" className={styles.form} onSubmit={handleSubmit}>
      <Input>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      </Input>
      <button disabled={processing || disabled || succeeded} className={styles.button} id="submit">
        <span id="button-text">{buttonTextToRender(status)}</span>
        {/* <span id="button-text">{processing ? <div className={styles.spinner} id="spinner"></div> : "Pay"}</span> */}
      </button>
      {/* {error && (
        <div className={styles.card_error} role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {/* <p className={succeeded ? `${styles.result_message}` : `${styles.result_message} ${styles.hidden}`}>Your in!!!</p> */}
    </form>
  );
  async function handleChange(event) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }
  async function handleSubmit(ev) {
    try {
      ev.preventDefault();
      setStatus("processing");
      setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: cogName,
            email,
          },
        },
      });
      if (payload.error) {
        console.log(payload);
        setStatus(payload.error.code);
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        handlePaymentSuccess();
      }
    } catch (err) {
      console.log(err);
    }
  }
  function buttonTextToRender(status) {
    switch (status) {
      case "processing":
        return <div className={styles.spinner} id="spinner"></div>;
      case "succeeded":
        return <p className={succeeded ? `${styles.result_message}` : `${styles.result_message} ${styles.hidden}`}>Your in!!!</p>;
      case "error":
        return "Sorry, there seems to be an issue. 😔";
      case "card_declined":
        return "Sorry, looks like your card was declined. 😔";
      default:
        return "Pay";
    }
  }
  function handlePaymentSuccess() {
    //The follwoig three functions and their associated state are no longer needed. Their absence still needs to be tested.
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    setStatus("succeeded");
    handleStepChange(2);
    localStorage.removeItem("stripeSecret");
    localStorage.signUpStep = 2;
    //Burst the confetti!!!
  }
};

const PaymentForm = ({ handleStepChange }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentInput handleStepChange={handleStepChange} />
    </Elements>
  );
};

export default PaymentForm;
