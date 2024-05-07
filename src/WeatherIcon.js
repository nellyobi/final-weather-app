import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props) {

    const codeMapping ={
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "RAIN",
        "04n": "RAIN",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "SNOW",
        "11n": "SNOW",
        "13d": "WIND",
        "13n": "WIND",
        "50d": "FOG",
        "50n": "FOG",
     

    };

    
    

   
    return (
    <ReactAnimatedWeather
    icon= {codeMapping[props.code]}
    color= "pink"
    size= {props.size}
    animate= {true}
      />
    );

}