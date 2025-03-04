import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [value, setValue] = useState({username:"", password:""});

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        await axios.post("https://photo-shaare-app-2.onrender.com/auth/api/login",value,{withCredentials: true, headers: {"Content-Type": "application/json"}});
        
        toast("login successfully",{autoClose: 1000}) 
        navigate("/home")
    } catch (error) {
        toast("error || in login",{autoClose: 1000})        
    }
  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder='username' onChange={(e)=>setValue({...value, username:e.target.value})}/>
            <input type="text" placeholder='password' onChange={(e)=>setValue({...value, password:e.target.value})}/>
            <button type='submit'>Loggedin</button>
        </form>
    </div>
  )
}

export default Login