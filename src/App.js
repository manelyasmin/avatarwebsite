import {light} from "./styles/Themes";
import {ThemeProvider} from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import ShowCase from "./Pages/ShowCase";
import {Routes,Route} from "react-router-dom";
  import {useLocation} from "react-router" 
  import styled from "styled-components"
  import ScrolltoTop from "./components/ScrollToTop/ScrolltoTop";
  import HomePage from "./HomePage.js";
  import  {useRef,useState,useEffect} from "react"
function App() {
  const location=useLocation();
  console.log(location)
   
  return (
    <div className="App">
          <ThemeProvider theme={light}>
  <Navigation/> 
 
       <Routes key={location.pathname} location={location}>
       
               <Route path="/"  element={<HomePage/>}/>
                 <Route path="/about" exact element={<About/>}/>
                 <Route path="/roadmap" exact element={<Roadmap/>}/>
                 <Route path="/showcase" exact element={<ShowCase/>}/>
                  
        </Routes> 
        
        <Footer/>   
         <ScrolltoTop/>   
        </ThemeProvider>

</div>

);
}


const MainContentStyled=styled.main`
/* 
margin-top:5rem;
width:100vw; */
/* width:100%;  */
`;

export default App;
