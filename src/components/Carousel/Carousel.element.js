import styled from "styled-components"
import Arrow from "../../assets/Arrow.svg"
export const ContainerCarousel=styled.div`

width:25vw;
height:70vh;

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

}
.swiper-button-next{
    color:${props=>props.theme.text};
    right:0;
    background-image:url(${Arrow})
    background-position:left;
    background-size:cover;
}

`; 
