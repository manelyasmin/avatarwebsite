import GlobalStyles from "./styles/GlobalStyles";
import {light} from "./styles/Themes";
import {ThemeProvider} from "styled-components";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Roadmap from "./Pages/Roadmap";
import ShowCase from "./Pages/ShowCase";
import Team from "./Pages/Team";
import Faq from "./Pages/Faq";

function App() {
  return (
    <>
       <GlobalStyles/> 
      
      <ThemeProvider theme={light}>
        <Navigation/>
        <Home/>
        <About/>
        <Roadmap/>
        <ShowCase/>
        <Team/>
        <Faq/>
        <Footer/> 
        </ThemeProvider>
     
    </>
  );
}

export default App;
