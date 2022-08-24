import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Signin from "./pages/signIn/SignIn.jsx";
import Signup from "./pages/signUp/Signup.jsx";
import  Dashboard  from "./pages/dashboard/Dashboard.js";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route path ="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
