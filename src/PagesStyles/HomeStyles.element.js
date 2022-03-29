import styled from "styled-components"; 

export const Circle=styled.span`

width:3rem;
height:3rem;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background-color:${props=>props.theme.text};
color:${props=>props.theme.body};
font-size:${props=>props.theme.fontxl};
position:absolute;
top:50%;
left:50%;
transform:transalte(-50%,-50%);

`;


 

export const HomeStyle=styled.section`
min-height:${props => `calc(100vh - ${props.theme.navhight})`};
width:100vw;
position:relative;
background-color:${props=>props.theme.body};

`;

export const Container=styled.div`
width:75%;
min-height:80vh;
margin:0 auto;
/* background-color:lightblue; */
display:flex;
justify-content:center;
align-items:center;
`;

export const Box=styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

/* export const Round=styled.div`
position:absolute;
bottom:2rem;
right:90%;
width:6rem;
height:6rem;
img{
    width:100%;
    height:auto;
    transform:rotate(360deg);
    animation:${rotate(360deg)} 6s linear-infinite-reverse;
    
} 
`;

*/