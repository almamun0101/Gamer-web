import React, { useState } from "react";
import Slideshow from "./Slideshow";
import Category from "./Category";
import Product from "./Product";

const products = [
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dying Light",
    image: "./Images/product (2).jpg",
    price: "29.99",
    category: "Role Palying",
  },
  {
    name: "Stray",
    image: "./Images/product (3).jpg",
    price: "29.99",
    category: "Open world",
  },
  {
    name: "Spiderman",
    image: "./Images/product (4).jpg",
    price: "29.99",
    category: "Open World",
  },
  {
    name: "Sants Raw",
    image: "./Images/product (5).jpg",
    price: "29.99",
    category: "Open World",
  },
  {
    name: "Ghost",
    image: "./Images/product (6).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Ritual",
    image: "./Images/product (7).jpg",
    price: "29.99",
    category: "Role Playing",
  },
  {
    name: "Product 1",
    image: "./Images/product (8).jpg",
    price: "29.99",
    category: "Adventure",
  },
  {
    name: "Product 1",
    image: "./Images/product (9).jpg",
    price: "29.99",
    category: "Adventure",
  },
  {
    name: "Product 1",
    image: "./Images/product (10).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Product 1",
    image: "./Images/product (11).jpg",
    price: "29.99",
    category: "Sport",
  },
  {
    name: "Product 1",
    image: "./Images/product (12).jpg",
    price: "29.99",
    category: "Card",
  },
  {
    name: "Product 1",
    image: "./Images/product (13).jpg",
    price: "29.99",
    category: "Card",
  },
  {
    name: "Product 1",
    image: "./Images/product (14).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Product 1",
    image: "./Images/product (15).jpg",
    price: "29.99",
    category: "Adventure",
  },
  {
    name: "Product 1",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Sport",
  },
  {
    name: "Product 1",
    image: "./Images/product (2).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Product 1",
    image: "./Images/product (3).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Product 1",
    image: "./Images/product (4).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Product 1",
    image: "./Images/product (5).jpg",
    price: "29.99",
    category: "Action",
  },
 
  
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      {/* <Navbar /> */}
      <Slideshow />
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <div className="container flex justify-center flex-wrap gap-6 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
      
    </>
  );
}

export default Home;