import React, { useEffect, useState } from 'react'
import '../Styles/Biilings.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom';



const Billings = () => {

  const[users,setusers] = useState([]);

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[phone,setphone] = useState("");
  const[address,setaddress] = useState("");
  const[pid,setpid] = useState("");
  const[pname,setpname] = useState("");
  const[pprice,setpprice] = useState("");

  const pay = ()=>{
    Axios.post("http://localhost:4500/api/v1/addorders",{
      name:name,
      email:email,
      phone:phone,
      address:address,
      pid:pid,
      pname:pname,
      pprice:pprice
    }).then(()=>{
      alert("OrrderAdded successfully")
    })
  }

  const {id} = useParams();

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewproductsbyid/"+id)
    .then((response)=>{
      setusers(response.data)
      setpid(response.data._id)
      setpname(response.data.name)
      setpprice(response.data.price)
    })

  },[])


 
  

  const checkout = async(amount)=>{
    const{data:{key}} = await Axios.get("http://localhost:4500/api/v1/getkey")
    const{data:{order}} = await Axios.post("http://localhost:4500/api/v1/checkout",{amount})
    console.log("Order Amount:", order.amount);

    const options = {
     key, // Enter the Key ID generated from the Dashboard
     amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
     currency: "INR",
     name: "kunal",
     description: "Test Transaction",
     image: "https://example.com/your_logo",
     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     callback_url: "http://localhost:4500/api/v1/verifypayment",
    "prefill": {
         name: "kunal",
         email: "ks9836185@gmail.com",
         contact: "8057900731"
    },
    notes: {
        address: "Razorpay Corporate Office Dehradun"
    },
    theme: {
        "color": "#3399cc"
    }

 
};

 const razor = new window.Razorpay(options)
  razor.open();

  }

const final =  ()=>{
 checkout(pprice)
 pay()
}

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
    <input value={`${users.name}`}></input>
    <br></br>
    <input value={`${users.price}`}></input>
    <br></br>
    <button onClick={final}>Pay</button>
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

export default Billings
