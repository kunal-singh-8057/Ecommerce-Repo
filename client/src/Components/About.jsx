import React from 'react'
import '../Styles/About.css'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import storyimg from '../Assets2/Side Image (1).png'
import founder1 from '../Assets2/Frame 874.png'
import founder2 from '../Assets2/Frame 875.png'
import founder3  from '../Assets2/Frame 876.png'
import service1 from '../Assets2/Services (1).png'
import service2 from '../Assets2/Services (2).png'
import service3 from '../Assets2/Services.png'
import social from '../Assets2/Frame 877.png'

const About = () => {
  return (
   <>
    <Navbar/>

    <div className='stotydiv'>
    <img src={storyimg} className='storyimg'></img>
    <h1>Our Story</h1>

    <p className='storypara'>
    Launced in 2015, Exclusive is South Asia’s premier online shopping <br></br>
    makterplace with an active presense in Bangladesh. Supported <br></br>
    by wide range of tailored marketing, data and service solutions, <br></br>
    Exclusive has 10,500 sallers and 300 brands and serves 3 <br></br>
    millioons customers across the region. 
    </p>

    <p className='storypara2'>
    Exclusive has more than 1 Million products to offer, growing at a <br></br>
    very fast. Exclusive offers a diverse assotment in categories <br></br>
    ranging  from consumer.
    </p>

    </div>

  <br></br>
  <br></br>

    <div className='founderssets'>

    <div className='founderdiv1'>
    <img src={founder1}></img>
    <h1>Tom Cruise</h1>
    <p>Founder & Chairman</p>
    <img src={social}></img>
    </div>

    <div className='founderdiv1'>
    <img src={founder2}></img>
    <h1>Emma Watson</h1>
    <p>Managing Director</p>
    <img src={social}></img>
    </div>


    <div className='founderdiv1'>
    <img src={founder3}></img>
    <h1>Will Smith</h1>
    <p>Product Designer</p>
    <img src={social}></img>
    </div>

    </div>
   

   <div className='servicesoffer'>

   <div className='service1'>
   <img src={service1}></img>
   <h3>24/7 CUSTOMER SERVICE</h3>
   <p>Friendly 24/7 customer support</p>
   </div>

   <div className='service1'>
   <img src={service2}></img>
   <h3>MONEY BACK GUARANTEE</h3>
   <p>We reurn money within 30 days</p>
   </div>


   <div className='service1'>
   <img src={service3}></img>
   <h3>FREE AND FAST DELIVERY</h3>
   <p>Free delivery for all orders over $140</p>
   </div>



   </div>

    <br></br>
    <Footer/>
   </>
  )
}

export default About
