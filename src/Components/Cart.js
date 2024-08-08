import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { removeToCart, checkoutSuccess } from '../State/Action/actions';
import "./Cart.css";

const Cart = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedCartData, setSortedCartData] = useState([]);

    const cartData = useSelector((state) => state.cartItems.cartData || []);
    const selectedImage = useSelector((state) => state.selectedImage);
    const dispatch = useDispatch();

    // Function to sort items by price
    const sortByPrice = (items, order) => {
        const sorted = [...items].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ''));
            const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ''));
            return priceA - priceB;
        });
        return order === 'desc' ? sorted.reverse() : sorted;
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

    const parsePrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ''));

    const handleRemoveFromCart = (id) => {
        dispatch(removeToCart(id));
    };

    const handleCheckout = () => {
        dispatch(checkoutSuccess());
    };

    return (
        <div className="container mt-4 p-3 rounded cart">
            <div className="row no-gutters" style={{ paddingTop: "50px", paddingBottom: "120px" }}>
                <div className="product-details mr-2">
                    <div className="d-flex flex-row align-items-center">
                        <i className="fa fa-long-arrow-left"></i>
                        <Link className="ml-2" to="/">Continue Shopping</Link>
                    </div>
                    <hr />
                    <h6 className="mb-0">Shopping cart</h6>
                    <div>
                        <div className="d-flex justify-content-between">
                            <span>You have {cartData.length} Items in Cart</span>
                            <div className="d-flex flex-row align-items-end">
                                <span className="text-black-50">Sort by:</span>
                                <div className="price ml-2" onClick={handleSortChange}>
                                    <span className="mr-1">price</span>
                                    <i className={`fa fa-angle-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        {sortedCartData.length > 0 ? (
                            <ul>
                                {sortedCartData.map((product, index) => (
                                    <li key={index}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img src={selectedImage || product.image} alt={product.name} width="100" height="100" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <b>{product.name}</b>
                                                <br />
                                                ${parsePrice(product.price).toFixed(2)}
                                                <br />
                                                {product.description}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="quantity input-group mb-3" style={{ width: "170px" }}>
                                                <button className="btn btn-white border border-secondary px-3" onClick={handleDecrement} type="button">
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                                <div className="form-control text-center">{quantity}</div>
                                                <button className="btn btn-white border border-secondary px-3" onClick={handleIncrement} type="button">
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <button className="me-1 btn btn-danger shadow-0 remove1" onClick={() => handleRemoveFromCart(product.id)}>
                                            <i className="me-1 fa fa-trash"></i>
                                        </button>
                                    </li>
                                ))}
                                <div className='remove'>
                                    <Link to="/checkout" onClick={handleCheckout}>
                                        <button className="checkout">Proceed To CheckOut</button>
                                    </Link>
                                </div>
                            </ul>
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
