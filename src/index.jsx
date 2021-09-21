import React from 'react';                           //import is an ES6 command
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


ReactDOM.render(                                     //ReactDOM mnz virtual Dom
  <React.StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>                                         
  </React.StrictMode>,
  document.getElementById('root')
);                                                   // <App/> calling app()  //react in stict mode
                                                     

