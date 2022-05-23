import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KZpJcDHJBJiOjkMrQYaEeQyMBGH6jWvPfeX9GSpNvtEJLWjRFgv2mKQiu9OMMtHPq6HKhVbfBJPtFB3Twl2NtCU00Mh0ANnO8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="TI-Verse"
      shippingAddress
      //   image="https://svgshare.com/i/Cuz.svg"
      description={`Your total in $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
