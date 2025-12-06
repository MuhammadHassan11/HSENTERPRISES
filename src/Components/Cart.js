// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { removeToCart, checkoutSuccess } from '../State/Action/actions';
// import "./Cart.css";

// const Cart = (props) => {
//     const [quantity, setQuantity] = useState(1);
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [sortedCartData, setSortedCartData] = useState([]);

//     const cartData = useSelector((state) => state.cartItems.cartData || []);
//     const selectedImage = useSelector((state) => state.selectedImage);
//     const dispatch = useDispatch();

//     // Function to sort items by price
//     const sortByPrice = (items, order) => {
//         const sorted = [...items].sort((a, b) => {
//             const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
//             const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
//             return priceA - priceB;
//         });
//         return order === 'desc' ? sorted.reverse() : sorted;
//     };

//     useEffect(() => {
//         setSortedCartData(sortByPrice(cartData, sortOrder));
//     }, [cartData, sortOrder]);

//     const handleSortChange = () => {
//         const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//         setSortOrder(newOrder);
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             setQuantity(prevCount => prevCount - 1);
//         }
//     };

//     const handleIncrement = () => {
//         if (quantity < 10) {
//             setQuantity(prevCount => prevCount + 1);
//         }
//     };

//     const parsePrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

//     const handleRemoveFromCart = (id) => {
//         dispatch(removeToCart(id));
//     };

//     const handleCheckout = () => {
//         dispatch(checkoutSuccess());
//     };

//     return (
//         <div className="container mt-4 p-3 rounded cart">
//             <div className="row no-gutters" style={{ paddingTop: "50px", paddingBottom: "120px" }}>
//                 <div className="product-details mr-2">
//                     <div className="d-flex flex-row align-items-center">
//                         <i className="fa fa-long-arrow-left"></i>
//                         <Link className="ml-2" to="/">Continue Shopping</Link>
//                     </div>
//                     <hr />
//                     <h6 className="mb-0">Shopping cart</h6>
//                     <div>
//                         <div className="d-flex justify-content-between">
//                             <span>You have {cartData.length} Items in Cart</span>
//                             <div className="d-flex flex-row align-items-end">
//                                 <span className="text-black-50">Sort by:</span>
//                                 <div className="price ml-2" onClick={handleSortChange}>
//                                     <span className="mr-1">price</span>
//                                     <i className={`fa fa-angle-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='container'>
//                         {sortedCartData.length > 0 ? (
//                             <ul>
//                                 {sortedCartData.map((product, index) => (
//                                     <li key={index}>
//                                         <div className="d-flex align-items-center">
//                                             <div className="flex-shrink-0">
//                                                 <img src={selectedImage || product.image} alt={product.name} width="100" height="100" />
//                                             </div>
//                                             <div className="flex-grow-1 ms-3">
//                                                 <b>{product.name}</b>
//                                                 <br />
//                                                 ${parsePrice(product.price).toFixed(2)}
//                                                 <br />
//                                                 {product.description}
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="quantity input-group mb-3" style={{ width: "170px" }}>
//                                                 <button className="btn btn-white border border-secondary px-3" onClick={handleDecrement} type="button">
//                                                     <i className="fas fa-minus"></i>
//                                                 </button>
//                                                 <div className="form-control text-center">{quantity}</div>
//                                                 <button className="btn btn-white border border-secondary px-3" onClick={handleIncrement} type="button">
//                                                     <i className="fas fa-plus"></i>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <button className="me-1 btn btn-danger shadow-0 remove1" onClick={() => handleRemoveFromCart(product.id)}>
//                                             <i className="me-1 fa fa-trash"></i>
//                                         </button>
//                                     </li>
//                                 ))}
//                                 <div className='remove'>
//                                     <Link to="/checkout" onClick={handleCheckout}>
//                                         <button className="checkout">Proceed To CheckOut</button>
//                                     </Link>
//                                 </div>
//                             </ul>
//                         ) : (
//                             <p>Your cart is empty</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeToCart, checkoutSuccess } from '../State/Action/actions';
import "./Cart.css";

const Cart = (props) => {
    // NOTE: This quantity state is shared across all mapped items, which is a logic flaw 
    // for a multi-item cart, but is kept here as requested.
    const [quantity, setQuantity] = useState(1);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedCartData, setSortedCartData] = useState([]);

    const cartData = useSelector((state) => state.cartItems.cartData || []);
    // selectedImage is typically only used on the product detail page, but kept here as requested
    const selectedImage = useSelector((state) => state.selectedImage);
    const dispatch = useDispatch();

    // Function to sort items by price
    const sortByPrice = (items, order) => {
        const sorted = [...items].sort((a, b) => {
            const priceA = parseFloat(a.price?.replace(/[^0-9.-]+/g, '') || 0);
            const priceB = parseFloat(b.price?.replace(/[^0-9.-]+/g, '') || 0);
            const difference = priceA - priceB;
            return order === 'desc' ? -difference : difference;
        });
        return sorted;
    };

    useEffect(() => {
        setSortedCartData(sortByPrice(cartData, sortOrder));
    }, [cartData, sortOrder]);

    const handleSortChange = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
        }
    };

    const parsePrice = (price) => parseFloat(price?.replace(/[^0-9.-]+/g, '') || 0);

    const handleRemoveFromCart = (id) => {
        dispatch(removeToCart(id));
    };

    const handleCheckout = () => {
        dispatch(checkoutSuccess());
    };

    // Calculate Total for display in the summary
    const calculateTotal = () => {
        return cartData.reduce((total, item) => {
            const itemPrice = parsePrice(item.price);
            return total + itemPrice;
        }, 0);
    };

    return (
        <div className="container mt-4 p-3 rounded cart cart-page-container">
            <div className="row no-gutters" style={{ paddingTop: "50px", paddingBottom: "120px" }}>

                {/* Main Cart Items Column */}
                <div className="col-lg-8 product-details mr-lg-2">
                    <div className="d-flex flex-row align-items-center">
                        <i className="fa fa-long-arrow-left"></i>
                        {/* Note: changed className to back-link for stylish CSS */}
                        <Link className="ml-2 back-link" to="/">Continue Shopping</Link>
                    </div>
                    <hr />
                    <h5 className="mb-4">Shopping Cart</h5>

                    <div>
                        <div className="d-flex justify-content-between align-items-center mb-4 cart-info-header">
                            <span>You have {cartData.length} Items in Cart</span>
                            <div className="d-flex flex-row align-items-end sort-container">
                                <span className="text-black-50 mr-2">Sort by:</span>
                                {/* Note: changed className to sort-link for stylish CSS */}
                                <div className="price ml-2 sort-link" onClick={handleSortChange}>
                                    <span className="mr-1">price</span>
                                    <i className={`fa fa-angle-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container cart-items-list'>
                        {sortedCartData.length > 0 ? (
                            <ul className='list-unstyled'>
                                {sortedCartData.map((product, index) => (
                                    // Use cart-item-card for the stylish CSS treatment
                                    <li key={product.id || index} className='cart-item-card mb-3 p-3 border rounded'>

                                        <div className="d-flex align-items-center flex-grow-1">

                                            {/* Image */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={selectedImage || product.image}
                                                    alt={product.name}
                                                    width="100"
                                                    height="100"
                                                    className='rounded'
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-grow-1 ms-3">
                                                <b className='product-name'>{product.name}</b>
                                                <div className='product-price text-success fw-bold'>
                                                    ${parsePrice(product.price).toFixed(2)}
                                                </div>
                                                <p className='p-about text-muted mb-0'>{product.description}</p>
                                            </div>

                                        </div>

                                        {/* Controls (Quantity and Remove) */}
                                        <div className="d-flex flex-column align-items-end item-controls">

                                            {/* Quantity Controls (Original structure retained) */}
                                            <div className="quantity input-group mb-2" style={{ width: "120px" }}>
                                                <button className="btn btn-white border border-secondary px-3" onClick={handleDecrement} type="button">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <div className="form-control text-center p-0">{quantity}</div>
                                                <button className="btn btn-white border border-secondary px-3" onClick={handleIncrement} type="button">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>

                                            {/* Remove Button (Original structure retained) */}
                                            <button
                                                className="btn btn-danger btn-sm shadow-0 remove-btn"
                                                onClick={() => handleRemoveFromCart(product.id)}
                                            >
                                                <i className="me-1 fa fa-trash"></i> Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}

                                {/* Checkout Button Container (Original structure retained) */}
                                <div className='remove text-center mt-4'>
                                    <Link to="/checkout" onClick={handleCheckout}>
                                        <button className="checkout checkout-btn">Proceed To CheckOut</button>
                                    </Link>
                                </div>
                            </ul>
                        ) : (
                            <p className='text-center text-muted p-5'>Your cart is empty</p>
                        )}
                    </div>
                </div>

                {/* Summary / Sidebar Column (Added for a two-column layout) */}
                <div className="col-lg-4 mt-4 mt-lg-0 summary-column">
                    <div className='summary-card p-3 border rounded'>
                        <h5 className="mb-3">Order Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal ({cartData.length} items)</span>
                            <span className='fw-bold'>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
                            <span>Shipping</span>
                            <span className='text-success fw-bold'>FREE</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4 total-row">
                            <span className='fw-bold fs-5'>Total</span>
                            <span className='fw-bold fs-5'>${calculateTotal().toFixed(2)}</span>
                        </div>

                        <Link to={cartData.length > 0 ? "/checkout" : "#"} onClick={handleCheckout} className='checkout-link'>
                            <button
                                className="btn w-100 checkout-btn"
                                disabled={cartData.length === 0}
                            >
                                Proceed To CheckOut
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

// If you choose to use connect for props later:
// const mapStateToProps = ({ cartItems, selectedImage }) => ({
//     cartItems,
//     selectedImage
// });
// export default connect(mapStateToProps)(Cart);
export default Cart;



