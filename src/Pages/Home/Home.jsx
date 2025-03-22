import React, { useState } from "react";
import Slideshow from "./Slideshow";
import Category from "./Category";
import Product from "./Product";

const products = [
  { id: 1, name: "Dragon Dogma", image: "./Images/product (1).jpg", price: 29.99, category: "Action" },
  { id: 2, name: "Dying Light", image: "./Images/product (2).jpg", price: 29.99, category: "Role Playing" },
  { id: 3, name: "Stray", image: "./Images/product (3).jpg", price: 29.99, category: "Open World" },
];

function Home({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Slideshow />
      <Category selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />

      <div className="container flex justify-center flex-wrap gap-6 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </>
  );
}

export default Home;
