import React from 'react'
import '../Styles/Banner2.css'
import bannerimg from '../Assets/banner/2.jpg'
import {Link} from 'react-router-dom'

const Banner2 = () => {
  return (
   <>
   <div className='banners2'>
   <img src={bannerimg}></img>
   <h4>MID SEASON'S SALE</h4>
   <h1>AUTUMN COLLECTION <br></br>
   UP TO 20% OFF</h1>
   <Link to='/shop' className='shoplink2'>SHOP NOW</Link>
   </div>
   </>
  )
}

export default Banner2
