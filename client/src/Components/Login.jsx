import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import phonebackimg from '../Assets2/Side Image.png'
import  Axios  from 'axios'
const Login = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true
  
  const login = ()=>{
    Axios.post("http://localhost:4500/api/v1/login",{
      email:email,
      password:password
    }).then((response)=>{
      if(response.data === "success")
      {
        alert("Welcome back users")
        navigate("/home")
      }
    })
  }

  return (
   <>

   <div className='loginform'>
   <img src={phonebackimg}></img>
   <h1>Login To Exclusive</h1>
   <br></br>
   <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
   <br></br>
   <input placeholder='Enter the password here'  onChange={(e)=>{setpassword(e.target.value)}}></input>
   <br></br>
   <button onClick={login}>Login</button>
   <br></br>
    <p>Don't Have An Account Yet ? : <Link to='/' className='logobtns'>Signup</Link></p>
  </div>

   </>
  )
}

export default Login
