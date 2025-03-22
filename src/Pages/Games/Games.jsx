// Home.js
import React from "react";
import Product from "../Products/Product";
import { products } from "../Products/Products";

function Games({ onAddToCart }) {
  return (
    <div className="container flex justify-center flex-wrap gap-6 p-20">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
          
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
}

export default Games;
