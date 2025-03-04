import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Logout = () => {
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // Backend se logout karte hain
      await axios.post("https://photo-shaare-app-2.onrender.com/auth/api/logout", {}, { withCredentials: true, headers: { "Content-Type": "application/json" } });

      // Logout hone ke baad cookie delete karte hain
      document.cookie = 'token=; Max-Age=0; path=/; secure; samesite=strict';  // Cookie ko explicitly delete karna

      toast("Logged out successfully!", { autoClose: 1000 });

      // Optionally, you can redirect to login page or home page
    } catch (error) {
      toast("Error during logout");
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleClick} type='submit'>Logout</button>
    </div>
  );
};

export default Logout;
