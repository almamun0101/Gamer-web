import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Home/Cart";

const App = () => {
  return (
    <Router>

    <Navbar/>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
