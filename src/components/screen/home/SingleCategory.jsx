import React, { useState } from 'react';
import View from '../view-products/View';
import Categories from './Categories';


function SingleCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    console.log(`Clicked category: ${category}`); 
    setSelectedCategory(category);
  };

  return (
    <div>
      <Categories onCategoryClick={handleCategoryClick} />
      <View selectedCategory={selectedCategory} />
    </div>
  );
}

export default SingleCategory;
