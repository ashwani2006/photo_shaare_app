import React from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Logout = () => {
  const handleClick = async(e)=>{
      e.preventDefault()
    try {
        await axios.post("http://localhost:4000/auth/api/logout",{},{withCredentials: true});
        toast("logout successfully",{autoClose: 1000})
    } catch (error) {
        toast("error on logout")
    }
  }

  return (
    <div>
        <h1>Logout</h1>
        <button onClick={handleClick} type='submit'>Logout</button>
    </div>
  )
}

export default Logout