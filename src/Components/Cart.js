import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { removeToCart } from '../State/Action/actions';
import "./Cart.css"
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1)
            setQuantity(prevCount => prevCount - 1);
    }
    const handleIncrement = () => {
        if (quantity < 10)
            setQuantity(prevCount => prevCount + 1);
    }

    const cartData = useSelector((state) => state.cartItems.cartData);
    const selectedImage = useSelector((state) => state.selectedImage);

    return (
        <div>

            <div className="container mt-4 p-3 rounded cart ">
                <div className="row no-gutters" style={{ paddingTop: "50px", paddingBottom: "120px" }}>
                    {/* <div className="col-md-8"> */}
                    <div className="product-details mr-2">
                        <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><Link className="ml-2" to="/">Continue Shopping</Link></div>
                        <hr />
                        <h6 className="mb-0">Shopping cart</h6>
                        <div className="d-flex justify-content-between"><span>You have{cartData.length} Items in Cart</span>
                            <div className="d-flex flex-row align-items-end"><span className="text-black-50">Sort by:</span>
                                <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                            </div>
                        </div>
                        <div className='container'>

                            {cartData.length > 0 ? (
                                <ul>
                                    {cartData.map((product, index) => (
                                        <li key={index}>
                                            <div className="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img src={selectedImage || product.Image} alt={product.name} width="100" height="100" />
                                                </div>

                                                <br></br>
                                                <div class="flex-grow-1 ms-3">
                                                    <b>  {product.name}</b>

                                                    <br></br>

                                                    {product.Price}


                                                    {product.description}
                                                </div>
                                            </div>

                                            <div  >
                                                {/* <div className="col-md-4 col-6 mb-3"> */}
                                                {/* <label className="mb-2 d-block">Quantity</label> */}
                                                <div className="input-group mb-3 " style={{ width: "170px" }}>
                                                    <button className="btn btn-white border border-secondary px-3 " onClick={handleDecrement} type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <div className="form-control text-between ">{quantity}</div>
                                                    {/* <input type="number" className="form-control text-center border border-secondary" Palceholder={quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" /> */}
                                                    <button className="btn btn-white border border-secondary px-3 " onClick={handleIncrement} type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* </div> */}
                                            {/* <button className="btn-n" onClick={handleIncrement}>+</button>

                                            <button className="btn-n" onClick={handleDecrement}>-</button>
                                            <div className="form-control text-between">{quantity}</div>  */}
                                            <div className='remove'>
                                                <a href="/checkout"  > <button className="checkout" >  Proceed To CheckOut </button></a>
                                                < button className="me-1 btn btn-danger shadow-0 " onClick={() => { props.removeToCartHandler() }}>
                                                    {/* <{a href="/cart" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a> */}
                                                    <i className="me-1 fa fa-trash"></i>
                                                </button>

                                            </div>

                                        </li>

                                    ))}


                                </ul>
                            ) : (
                                <p>Your cart is empty</p>
                            )}


                        </div>


                        {/* <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/QRwjbm5.jpg" width="40" />
                                    <div className="ml-2"><span className="font-weight-bold d-block"></span><span className="spec">256GB, Navy Blue</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center"><span className="d-block">2</span><span className="d-block ml-5 font-weight-bold">$900</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/GQnIUfs.jpg" width="40" />
                                    <div className="ml-2"><span className="font-weight-bold d-block">One pro 7T</span><span className="spec">256GB, Navy Blue</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center"><span className="d-block">2</span><span className="d-block ml-5 font-weight-bold">$900</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/o2fKskJ.jpg" width="40" />
                                    <div className="ml-2"><span className="font-weight-bold d-block">Google pixel 4 XL</span><span className="spec">256GB, Axe black</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">$800</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/Tja5H1c.jpg" width="40" />
                                    <div className="ml-2"><span className="font-weight-bold d-block">Samsung galaxy Note 10&nbsp;</span><span className="spec">256GB, Navy Blue</span></div>
                                </div>
                                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">$999</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
                            </div> */}
                    </div>
                </div >
                {/* <div className="col-md-4 ">
                        <div className=" payment-info ">
                            <div className="d-flex justify-content-between align-items-center "><span>Card details</span><img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" /></div><span className="type d-block mt-3 mb-1">Card type</span><label className="radio"> <input type="radio" name="card" value="payment" checked /> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>

                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>

                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>


                            <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                            <div><label className="credit-card-label">Name on card</label><input type="text" className="form-control credit-inputs" placeholder="Name" /></div>
                            <div><label className="credit-card-label">Card number</label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" /></div>
                            <div className="row">
                                <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
                                <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
                            </div>
                            <hr className="line" />
                            <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
                            <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
                            <div className="d-flex justify-content-between information"><Link to="/checkout"> <button className="btn btn-primary btn-block d-flex justify-content-between white mt-3" type="button"><span>Checkout</span><i className="fa fa-long-arrow-right ml-1"></i></button></Link></div>


                        </div>
                    </div> */}
            </div >
        </div >
        // </div >
    )
}
const mapDispatchToProps = dispatch => ({
    removeToCartHandler: () => dispatch(removeToCart())
});

export default connect(null, mapDispatchToProps)(Cart);



