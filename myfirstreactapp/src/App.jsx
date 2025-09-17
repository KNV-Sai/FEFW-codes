import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing"; // make sure the file is src/Routing.jsx

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
