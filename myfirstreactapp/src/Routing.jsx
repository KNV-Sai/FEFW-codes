import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Component</h2>;
}

function About() {
  return <h2>About Component</h2>;
}

function Contact() {
  return <h2>Contact Component</h2>;
}

export default function Routing() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
