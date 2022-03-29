import styled from "styled-components";

const NavBar=styled.section`
display:flex;
justify-content:space-between;
align-items:center;
width:85%;
height:${props=>props.theme.newheight};
margin:0 auto;
`;

export default NavBar;