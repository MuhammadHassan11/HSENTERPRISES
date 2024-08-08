import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHECKOUT_SUCCESS } from '../State/constant';
import './Checkout.css';
import { Link } from "react-router-dom"

function Checkout() {
  const cartItems = useSelector((state) => state.cartItems?.cartData || []);
  const dispatch = useDispatch();

  const handleCheckout = (event) => {
    event.preventDefault();

    // Simulate a checkout process. Replace with actual API call
    const isCheckoutSuccessful = true; // Replace with actual checkout success condition

    if (isCheckoutSuccessful) {
      dispatch({ type: CHECKOUT_SUCCESS });
      // Redirect to success page or show success message
    }
  };

  console.log('Cart Items:', cartItems); // Debugging line

  return (

    <div className="checkout-container" style={{ paddingTop: "100px" }}>
      <div className="checkout-card">
        <div className="payment-info">
          <form onSubmit={handleCheckout}>
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" className="inputbox" name="card_number" id="card_number" required />
            <p>Card Type</p>
            <select className="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div className="expcvv">
              <p className="expcvv_text">Expiry</p>
              <input type="date" className="inputbox" name="exp_date" id="exp_date" required />
              <p className="expcvv_text2">CVV</p>
              <input type="password" className="inputbox" name="cvv" id="cvv" required />
            </div>
            <Link to="/success"><button type="submit" className="button">CheckOut</button></Link>
          </form>
        </div>
        <div className="cart-items">
          <h2>Cart Items</h2>
          <div className="row">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (

                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
