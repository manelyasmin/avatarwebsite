import styled from "styled-components"
import Arrow from "../../assets/Arrow.svg"
export const ContainerCarousel=styled.div`

width:25vw;
height:70vh;

@media (max-width: 70em){
   
height:60vh;
}

@media (max-width: 64em){
    width:30vw;
height:50vh;
}

@media (max-width: 48em){
    width:40vw;
height:45vh;
}

@media (max-width: 30em){
    width:60vw;
height:45vh;
}

  .swiper{
    width:100%;
    height:100%;

}  

.Swiperslide{
    background-color:${props=>props.theme.carouselColor};
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        display:block;
        width:100%;
        height:auto;
        object-fit:cover;
    }

}
.swiper-button-next{
    color:${props=>props.theme.text};
    right:0;
    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;
    &:after{
        display:none;
    }

    @media (max-width: 64em){
    width:3rem;

}

@media (max-width: 30em){
    width:2rem;
    
}
}

`; 
