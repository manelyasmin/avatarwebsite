import React from 'react'
import {Section,Container,Box} from "../PagesStyles/AboutStyles.element"
import {Title,SubText,SubTextLight,ButtonContainer} from "../PagesStyles/AboutStyles.element"
import Carousel from "/home/manel/reactProject/nftprj/src/components/Carousel/Carousel.js"
import Button from "../components/Button/Button";
import {ThemeProvider} from "styled-components";
import {dark} from "../styles/Themes";
function About() {
  return (
    
    <Section >
       <Container>
          <Box><Carousel/></Box>
          <Box>
              <Title>
              welcome to the avatar maker.
              </Title>
              <SubText>
              Use the avatar maker to bring your most creative vision to life
              Explore all the possibilities of your avatar’s aesthetic, from realistic to cartoony to manga-inspired; the options are endless
              </SubText>

              <SubTextLight>
              Customize the colors and layout, then drop in text or your logo to pull the whole design together. Upload your avatar as your profile photo on your social or streaming channels.
              There are endless creative opportunities at your fingertips.


              </SubTextLight>
              <ButtonContainer>
              <ThemeProvider theme={dark} >
              <Button text="CREATE NOW" link="#" />

              </ThemeProvider>
              </ButtonContainer>
             
             

          
          </Box>
       </Container>
    </Section>
  )
}

export default About