import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/login";
import Signup from "./page/signup";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )
};

export default App;
