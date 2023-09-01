import React from "react";
import WeatherAppForm from "./weatherAppForm";

//destructuring props object {weather, test} out of the props object
export default function WeatherAppCard({weather, test}) {

  //grab props from weatherAppForm-data object, gives me the value of the key
  return (
    <>
      <h3>{weather.name}: </h3>
      <h3>Temperature: {weather.main.temp}</h3>
      <h3>Feels Like: {weather.main.feels_like}</h3>
      <h3>Weather: {weather.weather[0].description}</h3>
    </>
  );

}

  //tips from mentor:
  //too many console logs can cause performance issues
  //chanllenges:
  //{/* <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} /> */}
