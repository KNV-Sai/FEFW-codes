import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage]=useState("");

  useEffect(()=>{
    fetch("/api/message")
    .then( res => res.json())
    .then(data => setMessage(data.message))  
    .catch(err => console.error(err));
  },[]);
  
  return (
    <div style={{ textAlign: "center", marginTop: "40px",fontSize: "24px"}}>
    <h1>React+Express Full Stack App</h1>
    <p>{message || "Loading..."}</p>
    </div>
  );

}

export default App
