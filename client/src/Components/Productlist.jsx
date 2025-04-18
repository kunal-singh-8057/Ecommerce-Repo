import React from 'react'
import '../Styles/Productlist.css'
import ps1 from '../Assets/featured/1.jpg'
import ps2 from '../Assets/featured/2.jpg'
import ps3 from '../Assets/featured/3.jpg'
import ps4 from '../Assets/featured/4.jpg'
import {Link} from 'react-router-dom'

const Productlist = () => {
  return (
   <>

   <br></br>

   <h1 className='vhead'>View our Variety products</h1>
   <div className='pseudo'></div>

   <div className='productsets'>

   <div className='colarge'>
   <img src={ps1} className='ps1'></img>
   <br></br>
   <br></br>
   <h4>Sports Shoes</h4>
   <br></br>
   <Link to='/shop' className='viewbtn'>View Now</Link>
   </div>

   <div className='colarge'>
   <img src={ps2} className='ps1'></img>
   <br></br>
   <br></br>
   <h4>Sneak Shoes</h4>
   <br></br>
   <Link to='/shop' className='viewbtn'>View Now</Link>
   </div>


   <div className='colarge'>
   <img src={ps3} className='ps1'></img>
   <br></br>
   <br></br>
   <h4>Ladder Bags</h4>
   <br></br>
   <Link to='/shop' className='viewbtn'>View Now</Link>
   </div>


   <div className='colarge'>
   <img src={ps4} className='ps1'></img>
   <br></br>
   <br></br>
   <h4>Cotton caps</h4>
   <br></br>
   <Link to='/shop' className='viewbtn'>View Now</Link>
   </div>


   </div>

   </>
  )
}

export default Productlist
