import React, { useState } from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState ("celcius");


    function showFahrenheit (event) {
    event.preventDefault();
    setUnit("fahrenheit");

}


function  showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
}

function fahrenheit (event) {
    return (props.celcius * 9) /5 + 32;
}

if (unit === "celcius") {
    return (
    <div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">
             ℃ |{" "}
             <a href="/" onClick={showFahrenheit}>
                 ℉ 
                 </a> 
            </span>     
    </div>
);

} else {
    
    return (
        <div className="WeatherTemperature">
        <span className="temperature">
                {Math.round(fahrenheit())}</span>
                <span className="unit">
                <a href="/" onClick={showCelsius}>
                     ℃
                     </a>{" "}
                     | ℉
                </span>     
        </div>
    );
}

}
