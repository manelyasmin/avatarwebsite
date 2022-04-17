import React from 'react'
import Typewriter from "typewriter-effect";
import {Title,SubTitle,ButtonContainer} from "./TypeWriterText.element";
import Button from "../Button/Button";
const TypeWriterText = () => {
  return (
    <>
    <Title>
    Discover Avatar Maker
    <Typewriter
    options={{
      autoStart:true,
      loop:true,
    }}
    onInit={(typewriter)=> {
      typewriter.typeString('<span class="text-1">Create your own avatar.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">for free.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">in different styles</span>')
      .pauseFor(2000)
      .deleteAll()
      .start() 
           
    }}/>
  </Title>
  <SubTitle>Welcome to Avatar Maker!</SubTitle>
  <ButtonContainer><Button text="Explore" link="#about" /> </ButtonContainer>
  </>
  )
}

export default TypeWriterText ;