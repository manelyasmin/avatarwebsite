import React from 'react'
import Banner from "../Banner/Banner";
import Logo from "../Logo/Logo";
import {Section,Container,Left,IconList,MenuItems,Item,Bottom} from "./Footer.element.js";
import Facebook from "../../Icons/Facebook";
import Instgram from "../../Icons/Instagram.js";
import LinkedIn from "../../Icons/LinkedIn.js";
import Twitter from "../../Icons/Twitter.js";
import LogoText from "../Logo/LogoText.element";
import { Link } from 'react-router-dom' 
function Footer() {
  return (
    <Section>
      <Banner/>
      <Container>
        <Left>
        <LogoText>   <Link to="/">
        Jas.
      </Link></LogoText>
          <IconList>
            <a href="http://facebook.com" target={'_blank'} rel="noopener">
            <Facebook/>
            </a>

            <a href="http://instgram.com" target={'_blank'} rel="noopener">
            <Instgram/>
            </a>

            <a href="http://linkedin.com" target={'_blank'} rel="noopener">
            <LinkedIn/>
            </a>

            <a href="http://twitter.com" target={'_blank'} rel="noopener">
            <Twitter/>
            </a>
          </IconList>
        </Left>
        <MenuItems>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Roadmap</Item>
        <Item>Premuim</Item>
        </MenuItems>
      
      </Container>
      <Bottom>
          <span>
            &copy;{new Date().getFullYear()} all rights reserved.
          </span>
           
        </Bottom>
      </Section>
  )
}

export default Footer