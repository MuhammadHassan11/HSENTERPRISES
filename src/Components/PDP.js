import React from 'react'
import { connect } from "react-redux";
import { addToCart } from "../State/Action/actions";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { setSelectedImage } from '../State/Action/actions';


import "./PDP.css"

function PDP(props) {
  console.warn('PDP', props.data)
  // const [cartCount, setCartCount] = useState(0);

  // // Function to handle adding to cart
  // const handleAddToCart = () => {
  //   // For now, let's just increment the cart count
  //   setCartCount(cartCount + 1);
  // };
  let location = useLocation();

  const product = location.state;
  const [mainImage, setMainImage] = useState(product.Image);
  const [initialImage, setInitialImage] = useState(product.Image);
  const handleImageClick = (img) => {
    setMainImage(img);
  };

  // Function to reset to initial image
  const resetToInitialImage = () => {
    setMainImage(initialImage);
  };

  return (
    <div>
      <header>

        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">

              <div className="col-lg-2 col-sm-4 col-4">
                <a href="https://mdbootstrap.com/" target="_blank" className="float-start">
                  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </header>

      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href={mainImage}>
                  <img style={{ maxwidth: "100%", maxheight: "100vh", margin: "auto" }} className="rounded-4 fit" src={mainImage} />
                </a>
              </div>
              <div className="d-flex justify-content-center mb-3">
                {product.moreimages.map((img, index) => (
                  <img
                    key={index}
                    width="60"
                    height="60"
                    className="rounded-2 mx-1 border"
                    src={img}
                    alt={`Additional ${index}`}
                    onClick={() => handleImageClick(img)} // Call handleImageClick function on click
                    style={{ cursor: 'pointer' }}
                  />
                ))}

              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  <b>{product.name}</b> <br />
                  {product.description}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">
                      4.5
                    </span>
                  </div>
                  <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{product.Stock}</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">{product.Price}</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  {product.desc}
                </p>

                <div className="row">
                  <dt className="col-3">Type</dt>
                  <dd className="col-9">{product.Type}</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">{product.Color}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">{product.Material}</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">{product.Brand}</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary" style={{ height: "35px" }}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>


                </div>
                {/* <a href="#" className="btn btn-warning shadow-0"> Buy now </a> */}

                <button className="me-1 btn btn-primary shadow-0" onClick={() => { props.addToCartHandler(product) }}>
                  {/* <{a href="/cart" className="btn btn-primary shadow-0"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a> */}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                </button>
                <button className="btn btn-light border border-secondary py-2 icon-hover px-3" onClick={resetToInitialImage}>
                  {' '}
                  <i className="me-1 fa fa-heart fa-lg"></i> Save{' '}
                </button>

              </div>
            </main>
          </div>
        </div>
      </section>

    </div>




  )
}

// const mapDispatchToProps = dispatch => ({
//   addToCartHandler: data => dispatch(addToCart(data))
// })
const mapStateToProps = state => ({
  data: state.cartItems
})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  handleImageClick: (imageUrl) => dispatch(setSelectedImage(imageUrl))
  // removeToCartHandler: () => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(PDP)

