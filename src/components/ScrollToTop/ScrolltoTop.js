import React from 'react'
import {Up} from "./ScrollToTop.element.js";
import { useEffect } from "react";

const ScrolltoTop= () => {

  const scrollToTop = (top = 0) => {
    try {
      /**
       * Latest API
       */
      window.scroll({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    } catch (_) {
      /**
       * Fallback
       */
      window.scrollTo(0, top);
    }
  };
   
  return (
    
    <Up onClick={()=>scrollToTop()}>
        &#x2191;
    </Up>
    
  )
}






 




export default ScrolltoTop