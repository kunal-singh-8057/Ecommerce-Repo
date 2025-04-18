import React, { useState } from 'react'
import '../Styles/Contact.css'
import Navbar from './Navbar'
import Footer from '../Components/Footer'
import phoneimg from '../Assets2/icons-phone.png'
import mailimag from '../Assets2/icons-mail.png'
import Axios from 'axios'


const Contact = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[phone,setpassword] = useState("");
  const[message,setmessage] = useState("");

  const addmessage = ()=>{
    Axios.post("http://localhost:4500/api/v1/addcontact",{
      name:name,
      email:email,
      phone:phone,
      message:message
    }).then((response)=>{
      if(response.data === "success") 
      {
        alert("Thanks for contacting us our team will contact you soon")
      }
    })
  }

   return (
   <>
    <Navbar/>

    <div className='condivs'>

    <div className='condiv1'>
    <img src={phoneimg} className='phoneimg'></img>
    <h3>Call To Us</h3>
    <p className='servicetext'>We are available 24/7, 7 days a week.</p>
    <p className='phonetext'>Phone: +8801611112222</p>
    </div>

   <br></br>
   <div className='pseudocon'></div>
   <br></br>

    <div className='condiv2'>
    <img src={mailimag} className='mailimg'></img>
    <h3>Write To Us</h3>
    <p className='pp1'>Fill out our form and we will contact you within 24 hours.</p>
    <p className='pp2'>Emails: customer@exclusive.com</p>
    <p className='pp3'>Emails: support@exclusive.com</p>
    </div>

    </div>


   <div className='condetails'>
   <input placeholder='Your Name' onChange={(e)=>setname(e.target.value)}></input>
   <input placeholder='Your Email' onChange={(e)=>setemail(e.target.value)}></input>
   <input placeholder='Your Phone' onChange={(e)=>setpassword(e.target.value)}></input>
   <br></br>
   <textarea placeholder='Your Message' className='msg' onChange={(e)=>setmessage(e.target.value)}></textarea>
   <br></br>
   <button onClick={addmessage}>Send Message</button>
   </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
   </>
  )
}

export default Contact
