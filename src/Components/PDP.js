import React, { useState, useMemo } from 'react';
import { connect } from "react-redux";
import { addToCart, setSelectedImage } from "../State/Action/actions";
import { useLocation } from 'react-router-dom';
import "./PDP.css";

/* Uses Font Awesome icon classes (fa-*) — make sure Font Awesome is
   linked in public/index.html, same as in the original file. */

const SIZES = ["Small", "Medium", "Large"];

function PDP(props) {
  const location = useLocation();
  const product = location.state || {};

  const gallery = useMemo(
    () => [product.image, ...(product.moreImages || [])].filter(Boolean),
    [product.image, product.moreImages]
  );

  const [mainImage, setMainImage] = useState(product.image);
  const [size, setSize] = useState(SIZES[1]);
  const [qty, setQty] = useState(1);
  const [saved, setSaved] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const rating = product.rating ?? 4.5;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  const handleImageClick = (img) => {
    setMainImage(img);
    props.handleImageClick && props.handleImageClick(img);
  };

  const handleAddToCart = () => {
    props.addToCartHandler({ ...product, size, qty });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  if (!product || !product.name) {
    return (
      <div className="pdp-empty">
        <i className="fa fa-box-open pdp-empty-icon"></i>
        <h2>Product not found</h2>
        <p>The item you're looking for isn't available right now.</p>
      </div>
    );
  }

  return (
    <div className="pdp">
      <div className="pdp-breadcrumb">
        <span>Shop</span>
        <i className="fa fa-chevron-right"></i>
        <span>{product.type || "Products"}</span>
        <i className="fa fa-chevron-right"></i>
        <span className="pdp-breadcrumb-current">{product.name}</span>
      </div>

      <section className="pdp-main">
        <div className="pdp-gallery">
          <div className="pdp-main-image">
            <a
              data-fslightbox="mygalley"
              className="pdp-lightbox-link"
              target="_blank"
              rel="noreferrer"
              data-type="image"
              href={mainImage}
            >
              <img src={mainImage} alt={product.name} />
            </a>
            {product.stock > 0 && product.stock < 10 && (
              <span className="pdp-badge pdp-badge-low">Only {product.stock} left</span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="pdp-thumbs">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  className={`pdp-thumb ${img === mainImage ? "active" : ""}`}
                  onClick={() => handleImageClick(img)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pdp-info">
          {product.brand && <div className="pdp-brand">{product.brand}</div>}
          <h1 className="pdp-title">{product.name}</h1>
          {product.description && <p className="pdp-subtitle">{product.description}</p>}

          <div className="pdp-rating-row">
            <div className="pdp-stars" aria-label={`Rated ${rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`fa ${i < fullStars ? "fa-star" : i === fullStars && hasHalf ? "fas fa-star-half-alt" : "fa-star pdp-star-empty"
                    }`}
                ></i>
              ))}
              <span className="pdp-rating-num">{rating}</span>
            </div>
            {product.stock > 0 ? (
              <span className="pdp-stock in">
                <i className="fas fa-check-circle"></i> In stock
                {product.stock ? ` · ${product.stock} available` : ""}
              </span>
            ) : (
              <span className="pdp-stock out">
                <i className="fas fa-times-circle"></i> Out of stock
              </span>
            )}
          </div>

          <div className="pdp-price-row">
            <span className="pdp-price">{product.price}</span>
            <span className="pdp-price-unit">/per box</span>
          </div>

          {product.desc && <p className="pdp-desc">{product.desc}</p>}

          <dl className="pdp-specs">
            {product.type && (
              <div className="pdp-spec">
                <dt>Type</dt>
                <dd>{product.type}</dd>
              </div>
            )}
            {product.color && (
              <div className="pdp-spec">
                <dt>Color</dt>
                <dd>{product.color}</dd>
              </div>
            )}
            {product.material && (
              <div className="pdp-spec">
                <dt>Material</dt>
                <dd>{product.material}</dd>
              </div>
            )}
            {product.brand && (
              <div className="pdp-spec">
                <dt>Brand</dt>
                <dd>{product.brand}</dd>
              </div>
            )}
          </dl>

          <div className="pdp-divider" />

          <div className="pdp-options-row">
            <div className="pdp-size-select">
              <label>Size</label>
              <div className="pdp-pill-group">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    className={`pdp-pill ${size === s ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="pdp-qty-select">
              <label>Quantity</label>
              <div className="pdp-stepper">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                  −
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="pdp-actions">
            <button
              className={`pdp-btn-primary ${justAdded ? "added" : ""}`}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <i className={`fa ${justAdded ? "fa-check" : "fa-shopping-basket"}`}></i>
              {justAdded ? "Added to cart" : "Add to cart"}
            </button>
            <button
              className={`pdp-btn-secondary ${saved ? "saved" : ""}`}
              onClick={() => setSaved((s) => !s)}
            >
              <i className={saved ? "fas fa-heart" : "fa fa-heart"}></i>
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  handleImageClick: (imageUrl) => dispatch(setSelectedImage(imageUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PDP);