import React from 'react'
import {Section,ImgContainer,Title,BtnContainer,JoinNo} from "./Banner.element.js";
import img1 from "../../assets/Nfts/bighead-1.png"
import img2 from "../../assets/Nfts/bighead-2.png"
import img3 from "../../assets/Nfts/bighead-3.png"
import img4 from "../../assets/Nfts/bighead-4.png"
import img5 from "../../assets/Nfts/bighead-5.png"
import img6 from "../../assets/Nfts/bighead-6.png"
import Button from "../Button/Button";
const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img1} alt="the weirdos"/>
        <img src={img2} alt="the weirdos"/>
        <img src={img3} alt="the weirdos"/>
        <img src={img4} alt="the weirdos"/>
        <img src={img5} alt="the weirdos"/>
        <img src={img6} alt="the weirdos"/>
        </ImgContainer>
      <Title> Join the <br/> weirdos club </Title>
      <BtnContainer>
        <JoinNo>
        join now
        </JoinNo>
      </BtnContainer>
      
    </Section>
  )
}

export default Banner