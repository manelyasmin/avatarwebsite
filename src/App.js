import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes";
import {ThemeProvider} from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import ShowCase from "./Pages/ShowCase";
import {Routes,Route,BrowserRouter} from "react-router-dom";
  import {useLocation} from "react-router" 
  import { Link } from 'react-router-dom' 
  import styled from "styled-components"
  import Logo from "/home/manel/reactProject/nftprj/src/components/Logo/Logo.js";
  import HomePage from "./HomePage.js";
  import  {useRef,useState,useEffect} from "react"
function App() {
  const location=useLocation();
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
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
