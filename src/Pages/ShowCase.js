import React,{useRef} from 'react'
import {Section,Row, ImgContainer,Details,Price} from "../PagesStyles/ShowCase.element"
 
import img1 from "../assets/Nfts/bighead-1.svg"
import img2 from "../assets/Nfts/bighead-2.svg"
import img3 from "../assets/Nfts/bighead-3.svg"
import img4 from "../assets/Nfts/bighead-4.svg"
import img5 from "../assets/Nfts/bighead-5.svg"
import img6 from "../assets/Nfts/bighead-6.svg"
import img7 from "../assets/Nfts/bighead-7.svg"
import img8 from "../assets/Nfts/bighead-8.svg"
import img9 from "../assets/Nfts/bighead-9.svg"  
import img10 from "../assets/Nfts/bighead-10.svg"   
import ETH from "../assets/icons8-ethereum-48.png";

const NftItem=({img,number=0,price=0,passRef})=>{
  let play=(e)=>{
    passRef.current.style.animationPlayState='running';

  }
  let pause =(e)=>{
    passRef.current.style.animationPlayState='paused';  
  }
  return(
      <ImgContainer onMouseOver={e=>pause(e)}  onMouseOut={e=>play(e)}>
      <img src={img} alt="the weirdos" />
      <Details>
        <div> 
          <span>
            weirdos <br></br>
            <h1>#{number}</h1>
          </span>
          </div>
          <div>
            <span>Price</span>
            <Price>
            <img src={ETH} alt="ETH"/>
            <h1>{Number(price).toFixed(1)}</h1>
            </Price>
          </div>  
      </Details>

      </ImgContainer>
  )
}
function ShowCase() {
  const Row1Ref=useRef(null);
  const Row2Ref=useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={852} price ={1.5} passRef={Row1Ref}/>
        <NftItem img={img2} number={221} price ={1.2} passRef={Row1Ref}/>
        <NftItem img={img3} number={812} price ={3.5} passRef={Row1Ref}/>
        <NftItem img={img4} number={412} price ={5.5} passRef={Row1Ref}/>
        <NftItem img={img5} number={789} price ={7.5} passRef={Row1Ref}/>
         
      </Row>


      <Row direction="reverse" ref={Row2Ref}>
      <NftItem img={img6} number={147} price ={1} passRef={Row2Ref}/>
        <NftItem img={img7} number={159} price ={0.5} passRef={Row2Ref}/>
        <NftItem img={img8} number={963} price ={5.5} passRef={Row2Ref}/>
        <NftItem img={img9} number={858} price ={7.5} passRef={Row2Ref}/>
        <NftItem img={img10} number={852} price ={9.4} passRef={Row2Ref}/>
      </Row>

      </Section>
  )
}

export default ShowCase