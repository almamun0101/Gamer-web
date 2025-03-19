import React, { useState } from 'react';

const Product = ({ product, onAddToCart }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    const totalPrice = newCount * product.price; // Calculate total price
    onAddToCart(product.name, newCount, totalPrice); // Pass to parent
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <img src={product.image} alt={product.name} className="w-60 h-70 object-cover rounded-md" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
        <p className="text-lg font-bold text-gray-600 mt-2">${product.price}</p>
        <p className="text-base font-medium text-gray-600 mt-2">Cat: {product.category}</p>
        <button
          onClick={handleAddToCart}
          className="bg-[#605fff] text-white py-2 px-4 rounded mt-4 hover:bg-[#00b8ab] transition"
        >
          Add to Cart
        </button>
        {cartCount > 0 && (
          <p className="text-gray-500 mt-2">
            {cartCount} item(s) in cart - Total: ${cartCount * product.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
