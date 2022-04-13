import React,{useRef,useLayoutEffect} from 'react' 
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {SubTitle,Text,Box,ItemContainer,Section,Title,Container,SvgContainer,Items,Item} from "../PagesStyles/Roadmap.element"
import DrawSvg from "../components/DrawSvg/DrawSvg";

const RoadMapItem=({title,subtext,addToRef})=>{
    

  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
        <SubTitle>{title}</SubTitle>
       <Text>{subtext}</Text>
        </Box>
       
       </ItemContainer>

    </Item>
  )
}

function Roadmap() {
  const revealRefs=useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  revealRefs.current=[];
  const addToRef=(el)=>{
    if (el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }
 /*  useLayoutEffect(()=>{
    let t1=gsap.timeline();
    revealRefs.current.forEach((el,index)=>{
      t1.fromTo(
        el.childNodes[0],
        {
          y:'0'
        },{
          y:'-30%',
          scrollTrigger:{
            id:`section-${index +1}`,
            trigger:el,
            start:'top center+=200px',
            end:'bottom center',
            scrub:true,
             
          }
        }
      )
    })
    return ()=>{

    };
  },[]) */
  return (
    <Section id="roadmap">
      <Title>
        Roadmap
        </Title>
        <Container>
          <SvgContainer>
            <DrawSvg/>
          </SvgContainer>
          <Items>
            <Item>&nbsp;</Item>
             <RoadMapItem addToRef={addToRef} title="Grand Opening" subtext="Lorem Ipsum dolor sit amet consectetur,Lorem Ipsum dolor sit amet consectetur Lorem Ipsum dolor sit amet consectetur" />
             <RoadMapItem addToRef={addToRef} title="Great Benefits" subtext="Lorem Ipsum dolor sit amet consectetur,Lorem Ipsum dolor sit amet consectetur Lorem Ipsum dolor sit amet consectetur" />
             <RoadMapItem addToRef={addToRef} title="Early Access" subtext="Lorem Ipsum dolor sit amet consectetur,Lorem Ipsum dolor sit amet consectetur Lorem Ipsum dolor sit amet consectetur" />
             <RoadMapItem addToRef={addToRef} title="New Merch" subtext="Lorem Ipsum dolor sit amet consectetur,Lorem Ipsum dolor sit amet consectetur Lorem Ipsum dolor sit amet consectetur" />
             <RoadMapItem addToRef={addToRef} title="Holders Ranking" subtext="Lorem Ipsum dolor sit amet consectetur,Lorem Ipsum dolor sit amet consectetur Lorem Ipsum dolor sit amet consectetur" />
              
          </Items>

        </Container>
    </Section>
  )
}

export default Roadmap