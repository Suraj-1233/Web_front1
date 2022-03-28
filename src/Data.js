import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route, Link,Switch } from "react-router-dom";
import Login from './Component/Login';
import Signin from './Component/Signin';
import App from './App';
import Header1 from './Component/Header1';
function Data() {
  return (

   <>
  
   
 
 
  <Routes>
        <Route exact path="/login" element={<Login />} />
       
        <Route exact path="/" element={<App />} />
        <Route exact path="/insert" element={<Header1 />} />
        
        </Routes>
 
       
   </>



  )
}

export default Data;