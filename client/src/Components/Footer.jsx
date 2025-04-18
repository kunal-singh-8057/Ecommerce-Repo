import React from 'react'
import '../Styles/Footer.css'
import img3 from '../Assets/logo2.png'
import payment from '../Assets/payment.png'
import insta1 from '../Assets/insta/1.jpg'
import insta2 from '../Assets/insta/2.jpg'
import insta3 from '../Assets/insta/3.jpg'
import insta4 from '../Assets/insta/4.jpg'
import insta5 from '../Assets/insta/5.jpg'

import {Link} from  'react-router-dom'

const Footer = () => {
  return (
   <>
   <div className='footer1'>
   <img src={img3} className='img3'></img>
   <p className='p1'>
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
   </p>
   <img src={payment} className='paymentimg'></img>


   <ul className='linkset'>
    <h2>Featured</h2>
    <Link className='slinks' to='/home'>Home</Link>
    <br></br>
    <br></br>
    <Link className='slinks' to='/shop'>Shop</Link>
    <br></br>
    <br></br>
    <Link className='slinks' to='/about'>About</Link>
    <br></br>
    <br></br>
    <Link className='slinks' to='/contact'>Contact</Link>
   </ul>


   <ul className='linkset2'>
    <h2>Contact Us</h2>
    <br></br>
    <h4>ADDRESS</h4>
    <p>24 MALL STREET,DEHRADUN,INDIA</p>
    <br></br>
    <h4>PHONE</h4>
    <p>+918057900731</p>
    <br></br>
    <h4>EMAIL</h4>
    <p>KS9836185@gmail.com</p>
   </ul>


   <ul className='instalinks'>
   <h2>Instagram</h2>
   <img src={insta1} className='insta1'></img>
   <img src={insta2} className='insta1'></img>
   <img src={insta3} className='insta1'></img>
   <br></br>
   <br></br>
   <img src={insta4} className='insta1'></img>
   <img src={insta5} className='insta1'></img>
   </ul>

   <p className='copyright'>
    rymo ecommerce © 2025. All Rights Reserved
   </p>
   </div>
   </>
  )
}

export default Footer
