import React from 'react'
import NavBar from "./NavBar.element";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import { NavLink } from 'react-router-dom';
import {useState}  from 'react'
import { Link } from 'react-router-dom' 
import About from "../../Pages/About";
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
import LogoText from "../Logo/LogoText.element";
import {MenuItem,Menu,NavigationStyle,MenuItemLink} from "./Navigation.element";
import { BrowserRouter } from 'react-router-dom';
function Navigation() {
/*   const scrollTo=(id)=>{
    let element=document.getElementById(id);
    element.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest'
    })
  } */

     const [click,setClick]=useState(false);
    const changeClick=() => {
        setClick(!click);
        console.log(click);
    }

  return (
    <NavigationStyle> 
      
    <NavBar>
    
       
    <LogoText>   <Link to="/">
        Jas.
      </Link></LogoText>
    
          <Menu>
          
            <MenuItem>
          
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/roadmap">Roadmap</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/showcase">ShowCase</Link>
            </MenuItem>
          </Menu>
          
          <Button text="connect wallet" link="https://google.com"/>
        </NavBar>
        </NavigationStyle> 
   /*

   
    <NavigationStyle> 
        <NavBar>
          <Logo/>
          
        
         
          <Menu>
            <MenuItem  >Home</MenuItem>
             <MenuItem  >About</MenuItem>
            <MenuItem  >Roadmap</MenuItem>
            <MenuItem  >Showcase</MenuItem>  
           
          </Menu>
          
          <Button text="connect wallet" link="https://google.com"/>
        </NavBar> 
    </NavigationStyle>
   
  */  
     
  )
}

export default Navigation