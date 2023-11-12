import './App.css';
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';
import Home from "./routes/Home";
import Session from "./routes/Session";
import History from "./routes/History";
import Profile from "./routes/Profile";



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/session" element={<Session/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

      <Navbar/>
      
    </div>
  );
}

export default App;
