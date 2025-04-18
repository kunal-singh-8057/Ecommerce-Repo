import React, { useEffect, useState } from 'react'
import '../Styles/Shoes.css'
import Navbar from './Navbar'
import Footer from './Footer'

import Cart from './Cart'

const Shop = () => {
  return (
   <>
    <Navbar/>
    <br></br>
    <Cart/>
    <br></br>
    <Footer/>
   </>
  )
}

export default Shop
