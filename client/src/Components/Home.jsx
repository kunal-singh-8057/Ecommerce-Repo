import React from 'react'
import '../Styles/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import backimg from '../Assets/back.jpg'

import b1 from '../Assets/brand/1.png'
import b2 from '../Assets/brand/2.png'
import b3 from '../Assets/brand/3.png'
import b4 from '../Assets/brand/4.png'
import b5 from '../Assets/brand/5.png'
import b6 from '../Assets/brand/6.png'

import nb1 from '../Assets/new/1.jpg'
import nb2 from '../Assets/new/3.jpg'
import nb3 from '../Assets/new/5.jpg'


import { Link, useNavigate } from 'react-router-dom'
import Productlist from './Productlist'
import ProductList2 from './ProductList2'
import Banner2 from './Banner2'
import Watchlist from './Watchlist'
import Shoes from './Shoes'


const Home = () => {

  const  naviagte = useNavigate();

  const go = ()=>{
    naviagte('/shop')
  }

  return (
  <>
    <Navbar/>
    <br></br>
    <div className='backset'>
    <img src={backimg} className='caresole'></img>
    <div className='backheading'>
    <h3>NEW ARRAIVALS</h3>
    <br></br>
    <h1 className='b'>Best Price</h1> <h1 className='t'>This Year</h1>
    <br></br>
    <p>Shoomatic Offers your very comfortable time <br></br>
       on walking and excercises
    </p>
    <br></br>
    <button onClick={go} className='bshop'>SHOP NOW</button>
    </div>
    </div>

    <br></br>
    
    <div className='brandsets'>
      <img src={b1} className='b1'></img>
      <img src={b2} className='b1'></img>
      <img src={b3} className='b1'></img>
      <img src={b4} className='b1'></img>
      <img src={b5} className='b1'></img>
      <img src={b6} className='b1'></img>
    </div>

    <br></br>
    <br></br>

    <h1 className='season'>View Our New Commings of the season</h1>
    <br></br>
    <div className='pse'></div>

    <br></br>
    <br></br>

    <div className='hoverbrands'>

    <div className='nb1'>
    <img src={nb1}></img>
    <h1>Extreme Rare Sneakers</h1>
    <Link className='sh' to='/shop'>SHOP NOW</Link>
    <div className='overlay'></div>
    </div>


    <div className='nb1'>
    <img src={nb1}></img>
    <h1>Extreme Rare Sneakers</h1>
    <Link className='sh' to='/shop'>SHOP NOW</Link>
    <div className='overlay'></div>
    </div>

    </div>
    <br></br>
    <br></br>
    <Productlist/>
    <br></br>
    <br></br>

    <Banner2/>

    <br></br>
    <br></br>
    
    <ProductList2/>

    <br></br>
    <br></br>

    <Watchlist/>

    <br></br>
    <br></br>

    <Shoes/>
  <Footer/>
  </>
  )
}

export default Home
