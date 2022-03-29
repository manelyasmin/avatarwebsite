import React from 'react'
import LogoText from "./LogoText.element";
import {Link,Router,BrowserRouter} from "react-router-dom";
function Logo() {
  return (
    <LogoText>
      <BrowserRouter>
      <Link to="/">
        Jas.
      </Link>
      </BrowserRouter>
      
    </LogoText>
  )
}

export default Logo