import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Pages/Footer/Footer";
import Games from "./Pages/Games/Games";

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const totalItemCount = cartItems.reduce((acc,item)=> acc+ item.count,0);
  

  const handleCartUpdate = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const onIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const onDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const onRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <Router>
      <Navbar  cartCount={totalItemCount}/>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleCartUpdate} />} />
          <Route path="/games" element={<Games onAddToCart={handleCartUpdate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={ <Cart
        cartItems={cartItems}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onRemoveItem={onRemoveItem}
      />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
