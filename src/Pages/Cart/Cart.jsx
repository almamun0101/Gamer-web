import React from "react";

function Cart({ cartItems = [], onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count, 
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between gap-30">
              {/* Left side: Product Name */}
              <div className="flex-1">
                <p className="text-lg font-medium">{item.name}</p>
              </div>

              

              {/* Center: Quantity and Buttons */}
              <div className="flex justify-center items-center space-x-4">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => onDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <p className="text-lg font-medium">{item.count}</p>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => onIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              {/* Right side: Price */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
                <p className="text-lg font-semibold">${(item.price * item.count).toFixed(2)}</p>
              </div>


            </div>
          ))}

          <div className="flex justify-between border-t  py-5">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
