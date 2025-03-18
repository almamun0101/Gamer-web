import React, { useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 10, quantity: 0 },
    { id: 2, name: "Product B", price: 20, quantity: 0 },
    { id: 3, name: "Product C", price: 30, quantity: 0 },
  ]);

  // Update quantity of a product
  const updateQuantity = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discount = totalPrice > 100 ? totalPrice * 0.1 : 0;
  const charge = totalPrice > 0 ? 5 : 0;
  const finalTotal = totalPrice - discount + charge;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg  flex gap-6 h-screen">
      {/* Product List */}
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center p-4 border rounded-lg bg-gray-50"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold text-gray-700">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="w-1/3 h-2/3 p-4 bg-gray-100 rounded-lg shadow-inner">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <p className="text-gray-700">Total Price: <span className="font-semibold">${totalPrice.toFixed(2)}</span></p>
        <p className="text-gray-700">Discount: <span className="font-semibold text-red-500">-${discount.toFixed(2)}</span></p>
        <p className="text-gray-700">Charge: <span className="font-semibold">${charge.toFixed(2)}</span></p>
        <hr className="my-2" />
        <p className="text-lg font-bold text-green-600">Final Total: ${finalTotal.toFixed(2)}</p>

        {/* User Details */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">User Details</h3>
          <input type="text" placeholder="Name" className="w-full p-2 mt-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mt-2 border rounded" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
