import React from 'react'
import axios from "axios";

const Logout = () => {
  const handleClick = async(e)=>{
      e.preventDefault()
    try {
        await axios.post("http://localhost:4000/auth/api/logout",{},{withCredentials: true});
        alert("logout successfully")
    } catch (error) {
        alert("error on logout")
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