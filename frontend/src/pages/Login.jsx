import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';

const Login = () => {
  const [value, setValue] = useState({username:"", password:""});

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:4000/auth/api/login",value,{withCredentials: true});
        alert("login successfully")
        navigate("/home")
    } catch (error) {
        alert("error || in login")        
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