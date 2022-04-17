import React,{useState} from 'react'
import NavBar from "./NavBar.element";
import Button from "../Button/Button"
import { Link } from 'react-router-dom' 
import LogoText from "../Logo/LogoText.element";
import {MenuItem,Menu,NavigationStyle,HamburgerMenu} from "./Navigation.element";

function Navigation() {
const [click,setClick]=useState(false);

  return (
    <NavigationStyle> 
      
    <NavBar>
    
       
    <LogoText>   <Link to="/">
        Jas.
      </Link></LogoText>
    <HamburgerMenu click={click} onClick={()=>setClick(!click)}>
      &nbsp;
      </HamburgerMenu>
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
              <Link to="/showcase">Premuim</Link>
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