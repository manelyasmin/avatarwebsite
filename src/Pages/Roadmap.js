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
    <Section >
      <Title>
        Roadmap
        </Title>
        <Container>
          <SvgContainer>
            <DrawSvg/>
          </SvgContainer>
          <Items>
            <Item>&nbsp;</Item>
             <RoadMapItem addToRef={addToRef} title="Start with inspiration" subtext="We hook you up with thousands of professionally designed templates, so you’re never starting from a blank canvas to have fresh inspiration at your fingertips." />
             <RoadMapItem addToRef={addToRef} title="Remix it to make it your own " subtext="to personalize your avatar templates. Change up the copy and font. Sub out the imagery with your photos." />
             <RoadMapItem addToRef={addToRef} title="Amp up the flair" subtext="It’s easy to add extra flair and personality to your projects with our exclusive design assets. Add animated stickersYou can also add collaborators to your project so that you can have a more hands-on-deck bringing your design to life." />
             <RoadMapItem addToRef={addToRef} title="Resize to make your content go further" subtext="Gone are the days of having to memorize image dimensions for every single platform. Once you’ve landed on a design you like, you can easily modify it for any printed need or social network by using our handy, auto-magical resize featur." />
             <RoadMapItem addToRef={addToRef} title="Save and share your custom avatar" subtext="Once your design is complete, hit that publish button and share your creation with others. Creative Cloud Express saves your results,and buy it ." />
              
          </Items>

        </Container>
    </Section>
  )
}

export default Roadmap