import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About'
import Register from './components/Register'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import { BrowserROuter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div>
        <div className="header" style={{ color: "ivory" }}><h1>Header</h1></div>

        <Sidebar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<Contact Us />} />
        </Routes>
        
        <div className="mainSection"><h1>Main Section</h1></div>

        <div className="sidebar">
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
            <li>Fifth</li>
          </ul>
        </div>

        <div className="footer"><h1>Sidebar</h1></div>
      </div>
      </Router>
    </>
  )
}

export default App
