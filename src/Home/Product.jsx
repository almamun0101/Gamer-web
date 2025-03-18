import React, { useState } from 'react';

const Product = ({ product }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border border-gray-200 ">
      <img src={product.image} alt={product.name} className="w-60 h-70 object-cover rounded-md" />
      <div className="p-5">

      <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
      <p className="text-lg font-bold text-gray-600 mt-2">${product.price}</p>
      <p className="text-base font-medium text-gray-600 mt-2">Cat : {product.category}</p>
      <button
        onClick={handleAddToCart}
        className="bg-[#605fff] text-white py-2 px-4 rounded mt-4 hover:bg-[#00b8ab] transition"
      >
        Add to Cart
      </button>
      {cartCount > 0 && <p className="text-gray-500 mt-2">{cartCount} item(s) in cart</p>}
      </div>
    </div>
  );
};



export default Product;
