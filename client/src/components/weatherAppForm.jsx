import { useState } from "react";

const backendApiUrl = 'http://localhost:1965';


export default function WeatherAppForm () {
const [city, setCity] = useState('');

const getCity = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
}

const getWeather = (event) => {
    fetch(`${backendApiUrl}/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
     console.log("Weather data:", data);
  // Now you can do something with the weather data, such as displaying it on the frontend
})
.catch(error => {
  console.error("Error fetching weather data:", error);
})
};

    return (
        <>
        {/* <h1>This is my weatherAppForm</h1> */}
        <input type="text" placeholder="Enter city name" onChange={getCity}></input>
        <button onClick={getWeather}>Submit</button>
        </>
    );
}