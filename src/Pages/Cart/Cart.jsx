import React from "react";
import { Trash2 } from "lucide-react";

function Cart({ cartItems = [], onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
 
 


  return (
    <div className="container mx-auto h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex sm:flex-row sm:justify-between gap-4 sm:gap-30"
            >
              {/* Left side: Product Name */}
              <div className="flex-1">
                <p className="text-base font-medium">{item.name}</p>
              </div>

              {/* Center: Quantity and Buttons */}
              <div className="flex justify-center items-center space-x-3">
                <button
                  className="bg-yellow-500 text-white px-2 rounded"
                  onClick={() => onDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <p className="text-lg font-medium">{item.count}</p>
                <button
                  className="bg-blue-500 text-white px-2 rounded"
                  onClick={() => onIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              {/* Right side: Price */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-red-500 text-white p-1 rounded flex items-center justify-center"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <Trash2 size={20} />
                </button>
                <p className="text-lg font-semibold">
                  ${(item.price * item.count).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-between border-t py-5">
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
