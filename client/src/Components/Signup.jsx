import React, { useState } from 'react'
import '../Styles/Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import phonebackimg from '../Assets2/Side Image.png'

const Signup = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const add = ()=>{
    Axios.post("http://localhost:4500/api/v1/register",{
      name:name,
      email:email,
      password:password
    }).then((response)=>{
      if(response.data === "success")
      {
        alert("Registeration Successfully")
        navigate("/login")
      }

      else
      {
        alert("user Already existed Procced to login")
      }
      
    })
  }

  return (
  <>
  <div className='form1'>
   <h1>Create Account Now</h1>
   <img src={phonebackimg}></img>
   <br></br>
   <input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
   <br></br>
   <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
   <br></br>
   <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
   <br></br>
   <button onClick={add}>Create Account</button>
   <br></br>
   <br></br>
   <p>Already Have An Account ? : <Link to='/login' className='logobtns'>Login</Link></p>
  </div>
  </>
  )
}

export default Signup
