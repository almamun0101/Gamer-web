import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart/Cart";
import Footer from "./Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleCartUpdate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
