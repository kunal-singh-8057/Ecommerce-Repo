import React, { useEffect, useState } from 'react'
import '../Styles/Admine.css'
import phone from '../Assets2/Side Image.png'
import Axios from 'axios'
import { useParams } from 'next/navigation'

const Adminelog = () => {

  const[name,setname] = useState("");
  const[categories,setcategories] = useState("");
  const[price,setprice] = useState("");
  const[image,setimage] = useState("");
  const[stock,setstock] = useState("");

  const[data,setdata] =  useState([]);




  const add = ()=>{
    Axios.post("http://localhost:4500/api/v1/addproducts",{
      name:name,
      categories:categories,
      price:price,
      image:image,
      stock:stock
    }).then(()=>{
      alert("Product Added Successfully")
    })
  }


  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewproducts")
    .then((response)=>{
      setdata(response.data)
    })
  },[])


  const del = (id)=>{
    Axios.delete(`http://localhost:4500/api/v1/deleteproducts/`+id)
    .then(()=>{
      alert("Data Deleted successfully")
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
  <>
  <div className='admineform'>
  <img src={phone} className='phoneclass'></img>
  <h1>Add Products</h1>
  <br></br>
  <input placeholder='Enter the name of the products' onChange={(e)=>{setname(e.target.value)}}></input>
  <br></br>
  <input placeholder='Enter the category of the products' onChange={(e)=>{setcategories(e.target.value)}}></input>
  <br></br>
  <input placeholder='Enter the price of the products' onChange={(e)=>{setprice(e.target.value)}}></input>
  <br></br>
  <input placeholder='Enter the image of the products' onChange={(e)=>{setimage(e.target.value)}}></input>
  <br></br>
  <input placeholder='Enter the stock of the products' onChange={(e)=>{setstock(e.target.value)}}></input>
  <br></br>
  <button onClick={add}>Add</button>
  </div> 

<h1>Product Data List</h1>
<br></br>
{
  data.map((user)=>{
    return(
      <div className='adminesets'>
        Name:<p>{user.name}</p>
        Price:<p>{user.Price}</p>
        Categories:<p>{user.categories}</p>
        Image:<p>{user.image}</p>
        Stock:<p>{user.stock}</p>
        <button className='productsdelete' onClick={(e)=>del(user._id)}>Delete</button>
      </div>
    )
  })
}
  </>
  )
}

export default Adminelog
