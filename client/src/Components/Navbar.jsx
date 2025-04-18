import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import img1 from '../Assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const navcart = ()=>{
    navigate("/cartdata")
  }

  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img classNameName='img1' src={img1} className='logo1'></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  mx-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item mx-5">
          <Link className="nav-link active" aria-current="page"  to='/home'>Home</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to='/shop'>Shop</Link>
        </li>
        <li className="nav-item dropdown mx-5">
        <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link mx-5" to='/contact'>Contact us</Link>
        </li>

        <li className="nav-item">
        <FontAwesomeIcon icon={faCartShopping}  className='cartlogo' onClick={navcart}/>
        <button className="btn1">Logout</button>
        </li>

      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
