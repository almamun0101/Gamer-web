import React from 'react';

function Cart({ cartInfo }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartInfo.count > 0 ? (
        <div>
          <p>Product: {cartInfo.name}</p>
          <p>Quantity: {cartInfo.count}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
