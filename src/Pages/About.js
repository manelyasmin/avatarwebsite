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
              welcome to the wirdos clubs.
              </Title>
              <SubText>
                 the weirdos club is a private 
                 collection of NFTs-unique digital
                 collectibles.the weirdos are stored ERC-721 tokens on the 
                 ethereum blokchain and hosted on IPFS.

              </SubText>

              <SubTextLight>
                with more than +200 hand drawn traits,each NFT is unique and comes with a
                membership to an exclusive group of successful 
                investors.join an ambitous ever growing community with multiple befetis and utilities.



              </SubTextLight>
              <ButtonContainer>
              <ThemeProvider theme={dark} >
              <Button text="JOIN OUR Discor" link="#" />

              </ThemeProvider>
              </ButtonContainer>
             
             

          
          </Box>
       </Container>
    </Section>
  )
}

export default About