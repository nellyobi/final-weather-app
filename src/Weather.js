import React from "react";
import "./Weather.css"
export default function Weather() {
    return (
    <div className="Weather"> 
    <form>
        <div className="row">
            <div className="col-9">
                <input type="search" placeholder="Enter a city..."
                className="form-control"/>
            <div className="col-3">
                <input type="submit" 
                value="Search"
                className="btn btn-primary" /> 
        </div>
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
        <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" 
            alt="Cloudy"
            />
            6 ℃
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