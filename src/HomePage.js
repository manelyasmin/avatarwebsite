import React,{useRef,useState,useEffect} from 'react'
import About from "./Pages/About.js";
import Home from "./Pages/Home";
import Roadmap from "./Pages/Roadmap";
import ShowCase from "./Pages/ShowCase";
import { Link } from 'react-router-dom' 
import {useLocation} from "react-router"
import {Routes,Route,BrowserRouter,Redirect} from "react-router-dom";
function HomePage() {
    const location=useLocation();

    
  return (
     
<div>
<Home/>
   <About/><Roadmap/><ShowCase/>


</div>
)
}

export default HomePage