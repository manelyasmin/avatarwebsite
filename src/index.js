
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {light} from "./styles/Themes";
ReactDOM.render(
  <BrowserRouter>
  <GlobalStyles/>
  
    <App />
     
  </BrowserRouter>,
  document.getElementById("root")
);