import React, { useEffect, useState } from 'react'
import '../Styles/Biilings.css'
import Axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Billingsoffline = () => {

  const[users,setusers] = useState([]);
  
  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[phone,setphone] = useState("");
  const[address,setaddress] = useState("");
  const[pid,setpid] = useState("");
  const[pname,setpname] = useState("");
  const[pprice,setpprice] = useState("");



  const navigate = useNavigate();

  const{id} = useParams();

  const addorders = ()=>{
    Axios.post("http://localhost:4500/api/v1/addorders",{
      name:name,
      email:email,
      phone:phone,
      address:address,
      pid:pid,
      pname:pname,
      pprice:pprice

    }).then(()=>{
      navigate("/success")
      alert("Added successfully")
    })
  }

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewproductsbyid/"+id)
    .then((res)=>{
       setusers(res.data)
       setpid(res.data._id)
       setpname(res.data.name)
       setpprice(res.data.price)
      })
  },[])

  return (
  <>
    <div className='billings'>
    <h1>Billing Details</h1>
    <input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
    <br></br>
    <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <input placeholder='Enter the phone here' onChange={(e)=>{setphone(e.target.value)}}></input>
    <br></br>
    <input placeholder='Enter the address here' onChange={(e)=>{setaddress(e.target.value)}}></input>
    <br></br>
    <input value={`${users._id}`}></input>
    <br></br>
    <input  value={`${users.name}`}></input>
    <br></br>
    <input  value={`${users.price}`}></input>
    <br></br>
    <button onClick={addorders}>Pay</button>
    </div>

    <div className='offlinepage'>
    <img src={users.image} className='offlinepagesimages'></img>
    <br></br>
    <h1>{users.name}</h1>
    <br></br>
    <h2>{users.price}</h2>
    </div>

  </>
  )
}

export default Billingsoffline
