import styled from "styled-components";

export const NavigationStyle=styled.section`
width:100vw;

background-color: ${props => props.theme.body};

`;

export const Menu=styled.ul`
 
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style:none;
 
`;

export const MenuItem=styled.li`
margin:0 1rem;
color:${props=>props.theme.text};
cursor:pointer;
&::after{
    content:'';
    display:block;
    width:0%;
    height:2px;
    background:${props=>props.theme.text};
    transition:width 0.2s ease;
}
&:hover::after{
    width:100%;
}

`;

export const MenuItemLink=styled.a`
text-decoration: none;
color:#ebc0bb;

`;