import React from 'react'
import NavBar from "./NavBar.element";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
import {MenuItem,Menu,NavigationStyle} from "./Navigation.element";
function Navigation() {
  return (
    <NavigationStyle>
        <NavBar>
          <Logo/>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Roadmap</MenuItem>
            <MenuItem>Showcase</MenuItem>
            <MenuItem>Team</MenuItem>
            <MenuItem>Faq</MenuItem>
          </Menu>

          <Button text="connect wallet" link="https://google.com"/>
        </NavBar>
    </NavigationStyle>
    
     
  )
}

export default Navigation