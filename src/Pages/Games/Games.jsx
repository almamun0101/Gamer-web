import React from "react";
import Product from "../Products/Product";
import { products } from "../Products/Products";

function Games({ onAddToCart }) {
  return (
    <div className="container flex justify-center flex-wrap gap-10 pt-20">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="flex-shrink-0" style={{ width: "200px" }} key={product.id}>
            <Product
              product={product}
              onAddToCart={() => onAddToCart(product)}
            />
          </div>
        ))
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
}

export default Games;
