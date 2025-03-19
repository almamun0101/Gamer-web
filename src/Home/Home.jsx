import React, { useState } from "react";
import Slideshow from "./Slideshow";
import Category from "./Category";
import Product from "./Product";
import Cart from "../Cart/Cart";

const products = [
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
  {
    name: "Dragon Dogma",
    image: "./Images/product (1).jpg",
    price: "29.99",
    category: "Action",
  },
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
    category: "Role Playing",
  },
  {
    name: "Stray",
    image: "./Images/product (3).jpg",
    price: "29.99",
    category: "Open World",
  },
  // ... (Other products)
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartInfo, setCartInfo] = useState({ name: '', count: 0 });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCartUpdate = (name, count) => {
    setCartInfo((prevState) => {
      // Update or add a new product to the cart
      return { ...prevState, name, count };
    });
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const productData = {
    name: 'Stylish Jacket',
    price: 49.99,
    category: 'Clothing',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <>
      <Slideshow />
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      
      <div className="container flex justify-center flex-wrap gap-6 p-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} product={product} onAddToCart={handleCartUpdate} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>

      <div className="p-6">
        {/* <Product product={productData} onAddToCart={handleCartUpdate} /> */}
        {cartInfo.count > 0 && (
          <p className="mt-4 text-lg font-semibold">
            {cartInfo.count} item(s) of {cartInfo.name} in cart.
          </p>
        )}
      </div>

      {/* Pass cartInfo to Cart component */}
      <Cart cartInfo={cartInfo} />
    </>
  );
}

export default Home;
