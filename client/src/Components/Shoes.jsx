import React from 'react'
import '../Styles/Shop.css'
import ssimg1 from '../Assets/shoes/8.jpg'
import ssimg2 from '../Assets/shoes/7.jpg'
import ssimg3 from '../Assets/shoes/6.jpg'
import ssimg4 from '../Assets/shoes/5.jpg'
import {Link} from 'react-router-dom'

const Shoes = () => {
  return (
  <>
  <h1 className='shoetest'>Running Shoes</h1>
  <div className='pseudoshoes'></div>

 <div className='shoelist'>

 <div className='shoelist1'>
    <img src={ssimg1}></img>
    <h4>Bradnded shoes</h4>
    <Link to='/shop' className='shopbtnss'>Shop</Link>
  </div>

  <div className='shoelist1'>
    <img src={ssimg2}></img>
    <h4>Bradnded shoes</h4>
    <Link to='/shop' className='shopbtnss'>Shop</Link>
  </div>


  <div className='shoelist1'>
    <img src={ssimg3}></img>
    <h4>Bradnded shoes</h4>
    <Link to='/shop' className='shopbtnss'>Shop</Link>
  </div>


  <div className='shoelist1'>
    <img src={ssimg4}></img>
    <h4>Bradnded shoes</h4>
    <Link to='/shop' className='shopbtnss'>Shop</Link>
  </div>

 </div>

  </>
  )
}

export default Shoes
