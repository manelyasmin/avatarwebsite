import React from 'react'
import RoundTextBlack from "../assets/Rounded-Text-Black.png"
import {HomeStyle,Container,Box,Round,Circle} from "../PagesStyles/HomeStyles.element";
import TypeWriterText from "../components/TypeWriterText/TypeWriterText .js";
import CoverVideo from "../components/coverVideo/CoverVideo";
function Home() {
  return (
    <HomeStyle id="home">
    <Container>
      <Box><TypeWriterText /></Box>
      <Box><CoverVideo/></Box>
      {/* <Round>
        <Circle>
          &ax2193;
         </Circle>
      <img src={RoundTextBlack} alt="NFT" />
      </Round> */}
      </Container>
    </HomeStyle>
  )
}

export default Home