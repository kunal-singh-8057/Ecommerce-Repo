import React, { useEffect, useState } from "react";
import {Outlet,Navigate} from 'react-router-dom'
import Axios from 'axios'

const ProtectedRoutes = ()=>{

    const[user,setuser] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:4500/api/v1/verify")
        .then((response)=>{
            if(response.data === 'success')
            {
                  setuser(true)
            }

            else
            {
                setuser(null)
            }
        })
    },[])

    return user ? <Outlet/> : <Navigate to='/home'/>
}

export default ProtectedRoutes