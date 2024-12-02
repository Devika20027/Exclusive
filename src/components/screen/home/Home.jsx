import React, { useState } from 'react'
import Spotlight from './Spotlight'
import Categories from './Categories'
import Footer from '../footer/Footer'
import Support from '../support/Support'
import View from '../view-products/View'
import { Link } from 'react-router-dom'
import NavbarTop from '../../navbar/NavbarTop'
import Navbar from '../../navbar/Navbar'
import data from '../../data/ViewAll.json'

function Home() {

  const [selectedCategory, setSelectedCategory] = useState(''); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <div>
      <NavbarTop />
      <Navbar />
        <Spotlight />
        <Categories onCategoryClick={handleCategoryClick}/>
        <div>
        <View data={data} selectedCategory={selectedCategory}/>
        <hr/>
  <div className="flex justify-center mt-6">
    <Link to='/view-all'><button className="bg-red-500 text-white px-[48px] py-[16px] rounded hover:bg-red-600">View All Products</button></Link>
  </div>
        </div>
        <Support />
        <Footer />
    </div>
  )
}

export default Home