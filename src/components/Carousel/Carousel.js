import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* import "./styles.css"; */
import {EffectCards,Navigation,Pagination,Autoplay} from "swiper";
import {ContainerCarousel} from "./Carousel.element.js"
import img1 from "../../assets/Nfts/bighead-1.svg"
import img2 from "../../assets/Nfts/bighead-2.svg"
import img3 from "../../assets/Nfts/bighead-3.svg"
import img4 from "../../assets/Nfts/bighead-4.svg"
import img5 from "../../assets/Nfts/bighead-5.svg"
import img6 from "../../assets/Nfts/bighead-6.svg"
import img7 from "../../assets/Nfts/bighead-7.svg"
import img8 from "../../assets/Nfts/bighead-8.svg"
import img9 from "../../assets/Nfts/bighead-9.svg"  
import img10 from "../../assets/Nfts/bighead-10.svg"  


const Carousel=()=> {
  return (
    
    <ContainerCarousel> 
   <Swiper
   autoplay={{
     delay:2000,
     disableOnInteraction:false,
   }}
   pagination={{
     type:'fraction',

   }}
   scrollbar={{
     draggable:true
   }}
   navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Navigation,Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="Swiperslide"><img src={img1} alt="the wirdos" /> </SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img2} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img3} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img4} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img5} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img6} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img7} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img8} alt="the wirdos" /></SwiperSlide>
        <SwiperSlide className="Swiperslide"><img src={img9} alt="the wirdos" /></SwiperSlide>
         <SwiperSlide className="Swiperslide"><img src={img10} alt="the wirdos" /></SwiperSlide>
      </Swiper>
    
    </ContainerCarousel>
   
  )
}

export default Carousel

 

 