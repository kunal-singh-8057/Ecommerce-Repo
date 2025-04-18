import React from 'react'
import '../Styles/shoes.css'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const Cart = () => {

      const[users,setusers] = useState([]);
      const[records,setrecords] = useState([]);

      
  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewproducts")
    .then(result=> {
      setusers(result.data)
      setrecords(result.data)
    })
    .catch(err=>console.log(err))
  },[])

  const search = (e)=>{
    setrecords(users.filter(f=>f.name.toLowerCase().includes(e.target.value)))
  }


  return (
  <>
   <div className='searchbar'>
      <input placeholder='Search Here' onChange={search}></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicons'/>
    </div>

    <br></br>

  <div className='pppsets'>
    {
      records.map((user)=>{
        return(
          <div className='vpps'>

          <div className='vpps1'>
          <img src={user.image} className='productimagesets'></img>
          <p className='pppname'>{user.name}</p> 
          <p className='pppprice'>{user.price}</p>
          <Link className='viewdetaisbtn' to={`/productsdetails/${user._id}`}>View Products</Link>
          </div>

          </div>
        )
      })
    }
    </div>
  </>
  )
}

export default Cart
