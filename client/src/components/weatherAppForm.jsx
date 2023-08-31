import React, { useState } from "react";
import WeatherAppCard from "./weatherAppCard";

const backendApiUrl = 'http://localhost:1965';

export default function WeatherAppForm () {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getCity = (event) => {
    // console.log(event.target.value);
    setWeatherData('');
    setErrorMessage('');
    setCity(event.target.value);
  }

  const getWeather = (event) => {
      
    setErrorMessage('');

    fetch(`${backendApiUrl}/weather?city=${city}`)
      .then(response => response.json())
      .then(test => {
  
        console.log(test);
        // console.log(`City: ${data.name}`); //name
        // console.log(`Temperature: ${data.main.temp}`); //temp
        // console.log(`Weather: ${data.weather[0].description}`); //weather
        setWeatherData(test);

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setErrorMessage('City not found. Please check the city name and try again.');
      })
  };


  return (
      //react fragment
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

//if weatherData excits, then show the weather card, short-circuiting
{/* {weatherData && <WeatherAppCard weather={weatherData}/>} */}
