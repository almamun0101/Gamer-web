// Category.js
import React from 'react';

const Category = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    'Action',
    'Adventure',
    'Sport',
    'Racing',
    'Open World',
    'Card',
    'Role Playing',
  ];

  return (
    <div className="container lg:flex lg:justify-between lg:items-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-6">
        Category
      </h2>

      {/* Category List */}
      <div className="lg:flex lg:justify-between py-5">
        {/* Scrollable categories for mobile */}
        <div className="lg:flex lg:w-full lg:overflow-visible flex overflow-x-auto space-x-4 pb-2 lg:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-black'
              } hover:bg-blue-500 hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
