import React from 'react'
import RoundTextBlack from "../assets/Rounded-Text-Black.png"
import {HomeStyle,Container,Box,Round,Circle} from "../PagesStyles/HomeStyles.element";
import TypeWriterText from "../components/TypeWriterText/TypeWriterText .js";
import CoverVideo from "../components/coverVideo/CoverVideo";
import About from "./About";
function Home() {
  return (
     
    <HomeStyle  >
    <Container>
      <Box><TypeWriterText /></Box>
      <Box><CoverVideo/></Box>
      
      </Container>
    </HomeStyle>
     
     
  )
}

export default Home