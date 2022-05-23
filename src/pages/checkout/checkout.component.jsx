import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import { selectCurrectUser } from "../../redux/user/user.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        5555555555554444
        <br />
        Exp: any date after today's date
        <br />
        CVV: any combo of 3 numbers
      </div>
      <div className="s-button">
        <span>TOTAL: ${total}</span>
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrectUser,
});

export default connect(mapStateToProps)(CheckoutPage);
