// Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";
import Category from "../Products/Category";
import Product from "../Products/Product";
import { products } from "../Products/Products";

function Home({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSeeMore = ()=>{
    navigate("/games"); // Navigates to the /games route
  }
 
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Limit to the first 8 products
  const limitedProducts = filteredProducts.slice(0, 8);

  return (
    <>
      <Slideshow />
      <Category selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />

      <div className="container flex justify-center flex-wrap gap-6">
        {limitedProducts.length > 0 ? (
          limitedProducts.map((product) => (
            <Product key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>

      {/* See More Button */}
      <div className="container flex justify-end p-6">
        <button
          className="px-4 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500 transition"
          onClick={handleSeeMore}
        >
          See More
        </button>
      </div>
    </>
  );
}

export default Home;
