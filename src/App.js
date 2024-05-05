import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return <div className="App">
    <div className="container">


   <h1> Weather App </h1>
   <Weather />
    <footer>
      This project was coded by <a href="https://github.com/nellyobi"
      target="_blank"
      rel="noreferrer">
       Nelly Obi </a> and is  
    <a href="https://github.com/nellyobi/final-weather-app" 
    target="_blank"
    rel="noreferrer"> open-sourced on Github </a>
    </footer>
    </div>
      </div>;
}

export default App;
