import React from 'react'
import NavBar from "./NavBar.element";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import {MenuItem,Menu,NavigationStyle} from "./Navigation.element";
function Navigation() {
  const scrollTo=(id)=>{
    let element=document.getElementById(id);
    element.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest'
    })
  }
  return (
    <NavigationStyle>
        <NavBar>
          <Logo/>
          <Menu>
            <MenuItem onClick={()=>scrollTo('home')}>Home</MenuItem>
            <MenuItem onClick={()=>scrollTo('about')}>About</MenuItem>
            <MenuItem onClick={()=>scrollTo('roadmap')}>Roadmap</MenuItem>
            <MenuItem onClick={()=>scrollTo('showcase')}>Showcase</MenuItem>
           
          </Menu>

          <Button text="connect wallet" link="https://google.com"/>
        </NavBar>
    </NavigationStyle>
    
     
  )
}

export default Navigation