import React, { useState } from "react";  
import { useParams, Routes, Route, useNavigate } from "react-router-dom";

function Login()
{
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

      const handleUser = (e) => {
        e.preventDefault();
            if (username.trim()) {
                navigate(`/profile/${username}`); 
            } 
        };

    return(
        <>
        <h2>Login Page</h2>
        <form onSubmit={handleUser}>
            <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} />  
            <button type="submit">Login</button>
        </form>
        </>
    )
}

function UserProfile(){
    const {username} = useParams()

    return(
        <h2>Welcome to {username} ! This is your Profile page</h2>
    )
}

export default function DynamicRouting() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile/:username" element={<UserProfile />} />
      </Routes>
   
  );
}