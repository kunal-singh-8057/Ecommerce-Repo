import React from 'react'
import '../Styles/Watchlist.css'
import wimg from '../Assets/watches/1.jpg'
import wimg1 from '../Assets/watches/2.jpg'
import wimg2 from '../Assets/watches/3.jpg'
import wimg3 from '../Assets/watches/4.jpg'

import {Link} from 'react-router-dom'

const Watchlist = () => {
  return (
   <>
    <h1 className='wh'>Best Watches</h1>
    <br></br>
    <div className='pseudo3'></div>
    <h4 className='pstext'>Here you can check out new products with fair price on rymo</h4>
    <br></br>
    
    <div className='watchsets'>

   <div className='watch1'>
   <img src={wimg}></img>
   <h5>MEN Watch</h5>
   <Link to='/shop' className='vb'>Shop</Link>
   </div>

   <div className='watch1'>
   <img src={wimg1}></img>
   <h5>MEN Watch</h5>
   <Link to='/shop' className='vb'>Shop</Link>
   </div>

   <div className='watch1'>
   <img src={wimg2}></img>
   <h5>MEN Watch</h5>
   <Link to='/shop' className='vb'>Shop</Link>
   </div>

   <div className='watch1'>
   <img src={wimg3}></img>
   <h5>MEN Watch</h5>
   <Link to='/shop' className='vb'>Shop</Link>
   </div>

   
 </div>

   </>
  )
}

export default Watchlist
