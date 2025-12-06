// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { CHECKOUT_SUCCESS } from '../State/constant';
// import './Checkout.css';
// import { Link } from "react-router-dom"

// function Checkout() {
//   const cartItems = useSelector((state) => state.cartItems?.cartData || []);
//   const dispatch = useDispatch();

//   const handleCheckout = (event) => {
//     event.preventDefault();

//     // Simulate a checkout process. Replace with actual API call
//     const isCheckoutSuccessful = true; // Replace with actual checkout success condition

//     if (isCheckoutSuccessful) {
//       dispatch({ type: CHECKOUT_SUCCESS });
//       // Redirect to success page or show success message
//     }
//   };

//   console.log('Cart Items:', cartItems); // Debugging line

//   return (

//     <div className="checkout-container" style={{ paddingTop: "100px" }}>
//       <div className="checkout-card">
//         <div className="payment-info">
//           <form onSubmit={handleCheckout}>
//             <h1>CheckOut</h1>
//             <h2>Payment Information</h2>
//             <p>Cardholder Name</p>
//             <input type="text" className="inputbox" name="name" required />
//             <p>Card Number</p>
//             <input type="number" className="inputbox" name="card_number" id="card_number" required />
//             <p>Card Type</p>
//             <select className="inputbox" name="card_type" id="card_type" required>
//               <option value="">--Select a Card Type--</option>
//               <option value="Visa">Visa</option>
//               <option value="RuPay">RuPay</option>
//               <option value="MasterCard">MasterCard</option>
//             </select>
//             <div className="expcvv">
//               <p className="expcvv_text">Expiry</p>
//               <input type="date" className="inputbox" name="exp_date" id="exp_date" required />
//               <p className="expcvv_text2">CVV</p>
//               <input type="password" className="inputbox" name="cvv" id="cvv" required />
//             </div>
//             <Link to="/success"><button type="submit" className="button">CheckOut</button></Link>
//           </form>
//         </div>
//         <div className="cart-items">
//           <h2>Cart Items</h2>
//           <div className="row">
//             {cartItems && cartItems.length > 0 ? (
//               cartItems.map((item, index) => (

//                 <div key={index} className="cart-item">
//                   <img src={item.image} alt={item.name} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p>{item.description}</p>
//                     <p>Quantity: {item.quantity}</p>
//                     <p>Price: ${item.price}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No items in the cart</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CHECKOUT_SUCCESS } from '../State/constant';
import './Checkout.css';
import { useNavigate } from "react-router-dom"; // Use useNavigate for programmatic navigation

function Checkout() {
  const cartItems = useSelector((state) => state.cartItems?.cartData || []);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  // Helper to safely parse price strings
  const parsePrice = (price) => parseFloat(String(price).replace(/[^0-9.-]+/g, '') || 0);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Assuming item.quantity might be missing, default to 1
      const quantity = item.quantity ? parseInt(item.quantity) : 1;
      const itemPrice = parsePrice(item.price);
      return total + (itemPrice * quantity);
    }, 0);
  };

  const handleCheckout = (event) => {
    event.preventDefault();

    // 1. Validate form data here (optional but recommended)

    // 2. Simulate a checkout process (Replace with actual API call)
    const isCheckoutSuccessful = true;

    if (isCheckoutSuccessful) {
      // 3. Dispatch success action
      dispatch({ type: CHECKOUT_SUCCESS });

      // 4. Redirect to the success page
      navigate("/success");
    }
  };

  return (
    <div className="checkout-container" style={{ paddingTop: "100px" }}>
      <div className="checkout-card">

        {/* Payment Info Section (Left/Top) */}
        <div className="payment-info">
          <form onSubmit={handleCheckout}>
            <h1 className="form-title">Secure Checkout</h1>
            <h2 className="section-title">Payment Information</h2>

            <label htmlFor="name">Cardholder Name</label>
            <input type="text" className="inputbox" id="name" name="name" required />

            <label htmlFor="card_number">Card Number</label>
            <input type="text" className="inputbox" id="card_number" name="card_number" pattern="\d{13,16}" title="Card number must be 13 to 16 digits" required />

            <label htmlFor="card_type">Card Type</label>
            <select className="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>

            <div className="expcvv">
              <div>
                <label htmlFor="exp_date" className="expcvv_text">Expiry Date</label>
                {/* Changed type from 'date' to 'month' for typical CC expiry input */}
                <input type="month" className="inputbox" name="exp_date" id="exp_date" required />
              </div>
              <div>
                <label htmlFor="cvv" className="expcvv_text2">CVV</label>
                <input type="password" className="inputbox" name="cvv" id="cvv" pattern="\d{3,4}" title="CVV must be 3 or 4 digits" required />
              </div>
            </div>

            {/* The submission button now correctly triggers the handleCheckout function */}
            <button type="submit" className="button checkout-submit-btn">Complete Purchase</button>
          </form>
        </div>

        {/* Cart Items Section (Right/Bottom) */}
        <div className="cart-items">
          <h2 className="section-title">Order Summary</h2>
          <div className="items-list">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-desc">{item.description}</p>
                    <p className="item-qty">Qty: **{item.quantity || 1}**</p>
                    <p className="item-price">**${parsePrice(item.price).toFixed(2)}**</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-items">No items in the cart</p>
            )}
          </div>

          {/* Totals Section */}
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="total-row grand-total">
              <span>**Grand Total:**</span>
              <span>**${calculateTotal().toFixed(2)}**</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;