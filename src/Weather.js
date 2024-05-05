import React from "react";
import "./Weather.css"
import axios from "axios";
export default function Weather() {
    const apiKey = "c5e3a245dac7782f3e1ab46737af1838";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
    return (
    <div className="Weather"> 
    <form>
        <div className="row">
            <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                />
                </div>
            <div className="col-3">
                <input 
                type="submit" 
                value="Search"
                className="btn btn-primary w-100" 
                /> 
        </div>  
        </div>
    </form>
    <h1>London</h1> 
    <ul>
        <li>Sunday 13:10 </li> 
        <li>Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6"> 
        <div className="clearfix">
        <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
            alt="Cloudy"
            className="float-left"
            />
            <span className="temperature">6</span>
            <span className="unit">℃</span>
            
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 7%</li>
                <li>Humidity: 50%</li>
                <li>Wind: 3 mph</li>
            </ul>

        </div>

    </div>
    
    </div>
    );
    
}