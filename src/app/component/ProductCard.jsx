"use client";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="ingredient">
      <div className="ingredient__title">
        <h3>{product.name}</h3>
      </div>
      <div className="ingredient__image">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
      </div>
      <div className="ingredient__content">
        <p className="price">
          <span>${product.price}</span>
        </p>
      </div>
      <div className="ingredient__btn">
        <button className="btn-white" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
