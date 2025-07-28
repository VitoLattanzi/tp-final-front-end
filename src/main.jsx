/* import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

let div_root  = document.getElementById('root')

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); */


import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);