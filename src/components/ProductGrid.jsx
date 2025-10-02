import React from 'react'
import ProductCard from './ProductCard';

const ProductGrid = ({title, products}) => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid