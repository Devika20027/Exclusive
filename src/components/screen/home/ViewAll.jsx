import React from 'react'
import NavbarTop from '../../navbar/NavbarTop'
import Navbar from '../../navbar/Navbar'
import Footer from '../footer/Footer'
import ViewPage from '../view-products/ViewPage'

function ViewAll() {
  return (
    <div>
        <NavbarTop />
        <Navbar />
        <ViewPage />
        <Footer />
    </div>
  )
}

export default ViewAll