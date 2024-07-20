import React from 'react';
import { connect } from "react-redux";
import { addToCart, setSelectedImage } from "../State/Action/actions";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./PDP.css";

function PDP(props) {
  console.warn('PDP', props.data);
  let location = useLocation();

  const product = location.state || {}; // Use an empty object as fallback

  const [mainImage, setMainImage] = useState(product.image);
  const [initialImage, setInitialImage] = useState(product.image);

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
              {/* Placeholder for possible logo or other header content */}
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="main-image-card">
                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href={mainImage}>
                  <img src={mainImage} alt="Main product" />
                </a>
              </div>
              <div className="additional-images">
                {product.moreImages && product.moreImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Additional ${index}`}
                    onClick={() => handleImageClick(img)} // Call handleImageClick function on click
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
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{product.stock}</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">{product.price}</span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>{product.desc}</p>

                <div className="row">
                  <dt className="col-3">Type</dt>
                  <dd className="col-9">{product.type}</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">{product.color}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">{product.material}</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">{product.brand}</dd>
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

                <button className="me-1 btn btn-primary shadow-0" onClick={() => { props.addToCartHandler(product) }}>
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                </button>
                <button className="btn btn-light border border-secondary py-2 icon-hover px-3" onClick={resetToInitialImage}>
                  <i className="me-1 fa fa-heart fa-lg"></i> Save
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.cartItems
});

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  handleImageClick: (imageUrl) => dispatch(setSelectedImage(imageUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(PDP);
