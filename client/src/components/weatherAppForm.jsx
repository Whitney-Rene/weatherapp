import { useState } from "react";
import WeatherAppCard from "./weatherAppCard";

const backendApiUrl = 'http://localhost:1965';


export default function WeatherAppForm () {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState('');

const getCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
}

const getWeather = (event) => {
    event.preventDefault();

    fetch(`${backendApiUrl}/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
    console.log(`City: ${data.name}`); //name
    console.log(`Temperature: ${data.main.temp}`); //temp
    console.log(`Weather: ${data.weather[0].description}`); //weather
    setWeatherData(data);
  // Now you can do something with the weather data, such as displaying it on the frontend
})
.catch(error => {
  console.error("Error fetching weather data:", error);
})
};

    return (
        <>
        <form>
        <input type="text" placeholder="Enter city name" onChange={getCity}></input>
        </form>
        <button onClick={getWeather}>Submit</button>
        {/* <div>{weatherData}</div> */}
        </>
    );
}