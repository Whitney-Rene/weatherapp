import React, { useState } from "react";
import WeatherAppCard from "./weatherAppCard";

//globla variable
const backendApiUrl = 'http://localhost:1965';

export default function WeatherAppForm () {
  //states
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //function activated by onChange, sets weatherData & errorMessage to empty string, sets city
  const getCity = (event) => {

    setWeatherData('');
    setErrorMessage('');
    setCity(event.target.value);

  }

  //function activated by onClick, resets errorMessage
  const getWeather = (event) => {
      
    setErrorMessage('');

    //call to api, sends back a data in json and catches errors 
    fetch(`${backendApiUrl}/weather?city=${city}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setErrorMessage('City not found. Please check the city name and try again.');
      })
  };

  //render to page
  return (
  
    <>

      <input type="text" placeholder="Enter city name" onChange={getCity} />
      <div>
          <button onClick={getWeather}>Submit</button>
      </div>
      <div>{errorMessage}</div>
      {weatherData === "" ? null : <WeatherAppCard weather={weatherData} test="This is a test."/>}
      
    </>
  );
}


//TERNEARY OPERATOR = line 48
//if weatherData excits, then show the weather card, short-circuiting
{/* {weatherData && <WeatherAppCard weather={weatherData}/>} */}
//notes:
// console.log(`City: ${data.name}`); //name
// console.log(`Temperature: ${data.main.temp}`); //temp
// console.log(`Weather: ${data.weather[0].description}`); //weather
