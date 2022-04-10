import React,{useRef,useLayoutEffect} from 'react'
import {VectorContainer,Ball} from "./DrawSvg.element"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
 import Vector  from "../../Icons/Vector.js";
const DrawSvg = () => {
    const ref=useRef(null);
    const ballRef=useRef(null);
    gsap.registerPlugin(ScrollTrigger); 
    useLayoutEffect(() => {
        let element=ref.current;   
        let svg=document.getElementsByClassName("svg-path")[0];
        const length=svg.getTotalLength();
svg.style.strokeDasharray=length;
svg.style.strokeDashoffset=length;
let t1=gsap.timeline ({
     
    scrollTrigger:{
trigger:element,
start:'top center',
end:"bottom bottom",
onUpdate:(self)=>{
    const draw=length*self.progress;
    svg.style.strokeDashoffset=length-draw;

},
onToggle:self=>{
    if(self.isActive){
ballRef.current.style.display="none";
    }else{
        ballRef.current.style.display="inline-block";

    }
}
    }
})    

        return()=>{
if(t1) t1.kill()
        };
    },[])
  return (
    <>
    <Ball/>  
    <VectorContainer ref={ref}>
        <Vector/> 
    </VectorContainer>
    </>
  )
}

export default DrawSvg