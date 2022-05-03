import styled from "styled-components";

const NavBar=styled.nav`

display:flex;
justify-content:space-between;
align-items:center;
width:85%;
height:${props=>props.theme.navhight};
margin:0 auto;

.mobile{
display:none;    
}

@media (max-width: 64em){
    .desktop{
        display:none;

    }
    .mobile{
        display:inline-block;
    }
}
`;
 

export default NavBar;