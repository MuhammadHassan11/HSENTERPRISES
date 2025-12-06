// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { connect } from "react-redux";
// import { Link } from "react-router-dom"
// import "./Navbar.css"
// import logo from "../assets/logo.png";


// const Navbar = (props) => {

//   return (
//     <div>
//       <nav className="navbar fixed-top bg-dark  navbar-expand-lg  bg-body-tertiary " data-bs-theme="dark">
//         <div className="container-fluid">
//           {/* <Link className="navbar-brand " to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzRz25lRk_D4UFKANKCVnnSk6m48XUkfTbA&s" alt="Logo" width="40" height="40" class="d-inline-block align-text-top rounded-pill" /> </Link> */}
//           <Link className="navbar-brand" to="/">
//             <img
//               src={logo}
//               alt="Logo"
//               width="40"
//               height="40"
//               className="d-inline-block align-text-top rounded-pill"
//             />
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link " to="/about">About</Link>
//               </li> */}
//             </ul>
//             <div>
//               <span className="cart-btn">{props.carttotal}</span>
//               <Link className="nav-link " to="/cart"><i class="me-1 fa fa-shopping-basket" style={{ color: "white" }}></i></Link>
//             </div>
//           </div>
//         </div>
//       </nav >
//     </div >
//   )
// }
// const mapStateToProps = ({ cartItems }) => {
//   const { carttotal } = cartItems;
//   return { carttotal };
//   // carttotal: state.cartItems.carttotal
// };

// export default connect(mapStateToProps, null)(Navbar);

import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'; // Assuming this is correct for your brand icon

const Navbar = (props) => {

  return (
    <div>
      {/* Used standard Bootstrap classes for structure and coloring */}
      <nav className="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">

          {/* 1. Logo/Brand Link */}
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top rounded-pill"
            />
          </Link>

          {/* 2. CART GROUP (Always visible, moved outside collapse) */}
          {/* d-flex is used to contain the icon and badge, and order-lg-last pushes it right on desktop */}
          <div className="d-flex order-lg-last align-items-center me-3">

            {/* Cart Count Badge - The absolute positioning is handled by Navbar.css */}
            <span className="cart-btn">{props.carttotal}</span>

            {/* Cart Icon Link */}
            <Link className="nav-link text-white p-0" to="/cart" aria-label="Shopping Cart">
              {/* NOTE: Changed class to 'fa-solid' if using FontAwesome 6, or ensure FontAwesome is loaded correctly */}
              <i className="fa-solid fa-shopping-basket" style={{ color: "white", fontSize: "1.2rem" }}></i>
            </Link>
          </div>

          {/* 3. Toggler Button (Hamburger) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 4. Collapsible Menu (Only contains navigation links) */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
              </li>
              {/* Add other links here if needed */}
            </ul>
          </div>

        </div>
      </nav >
    </div >
  )
}

const mapStateToProps = ({ cartItems }) => {
  const { carttotal } = cartItems;
  return { carttotal };
};

export default connect(mapStateToProps, null)(Navbar);
