import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import "./Navbar.css"


const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar fixed-top bg-dark  navbar-expand-lg  bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzRz25lRk_D4UFKANKCVnnSk6m48XUkfTbA&s" alt="Logo" width="40" height="40" class="d-inline-block align-text-top rounded-pill" /> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/pdp">Products</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link " to="/checkout">Checkout</Link>
              </li> */}
            </ul>
            <div>
              <span className="cart-btn">{props.carttotal}</span>
              <Link className="nav-link " to="/cart"><i class="me-1 fa fa-shopping-basket" style={{ color: "white" }}></i></Link>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}
const mapStateToProps = ({ cartItems }) => {
  const { carttotal } = cartItems;
  return { carttotal };
  // carttotal: state.cartItems.carttotal
};

export default connect(mapStateToProps, null)(Navbar);
