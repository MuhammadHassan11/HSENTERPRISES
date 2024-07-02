import React from 'react'
import "./Checkout.css"


function Checkout() {
  return (
    <div>

      <div class="mainscreen" style={{ paddingTop: "100px", alignItems: "center" }}>

        <div class="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div class="expcvv">

              <p class="expcvv_text">Expiry</p>
              <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

              <p class="expcvv_text2">CVV</p>
              <input type="password" class="inputbox" name="cvv" id="cvv" required />
            </div>
            <p></p>
            {/* <a href="/success" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i>CheckOut </a> */}
            <button type="submit" class="button" ><a href="/success" style={{ color: "white" }}>CheckOut</a></button>
          </form>
        </div>
      </div>
    </div>



  )
}

export default Checkout
