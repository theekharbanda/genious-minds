import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/SignIn';
import Signup from './Components/Signup';
import Dashboard from './Components/dashboard/dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<App/>}/>
        <Route path ="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
