import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.img} alt={product.name} />
        <div className="product-actions">
          <button className="icon-btn">
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
