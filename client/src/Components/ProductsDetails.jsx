import React, { useEffect, useState } from 'react'
import '../Styles/productDetails.css'
import { useParams } from 'react-router-dom';
import Axios from 'axios'
import { Link } from 'react-router-dom';

const ProductsDetails = () => {

  const[users,setusers] = useState([]);

  const{id} = useParams();


     
     useEffect(()=>{
       Axios.get("http://localhost:4500/api/v1/viewproductsbyid/"+id)
       .then((res)=>{
       setusers(res.data)
      })
  },[]) 

  return (
  <>
  <div className='details'>

  <img src={users.image} className='productpng'></img>
  <h1>{users.name}</h1>
  <h4>PRICE:{users.price}</h4>
  <br></br>
  <br></br>
  <Link className='detailsbtns' to={"/billingsonline/"+id}>Proceed Pay Online</Link>
  <br></br>
  <br></br>
  <Link className='detailsbtns' to={'/billingsoffline/'+id}>Proceed Pay Offline</Link>
  <br></br>
  <br></br>
  <Link className='detailsbtns' to='/cartdata'>ADD To Cart</Link>
  </div>
  </>
  )
}

export default ProductsDetails
