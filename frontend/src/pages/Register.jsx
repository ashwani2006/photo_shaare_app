import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
 const [value, setValue]  = useState({username:"", password:""});

 const navigate = useNavigate();

 const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
         await axios.post("https://photo-shaare-app-2.onrender.com/auth/api/register",value,{ withCredentials: true }) 
         toast("successfully register",{autoClose: 1000});
         navigate("/login")
        
    } catch (error) {
         toast.error("error on register",{autoClose: 1000})
    }
 }
  return (
    <div>
        <h1>Register</h1>
        <div>
            <form onSubmit={handleSubmit} action="">
                  <input type="text" placeholder='username' onChange={(e)=>setValue({...value, username:e.target.value})}/>
                  <input type="text" placeholder='password' onChange={(e)=>setValue({...value, password:e.target.value})}/>
                  <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register