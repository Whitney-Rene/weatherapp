import React from "react";
import WeatherAppForm from "./weatherAppForm";

//destructuring weather out of the props object
export default function WeatherAppCard({weather, test}) {

  //too many console logs can cause performance issues
  // console.log(test);

  return (
    <>
      {/* <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} /> */}
      <h3>{weather.name}: </h3>
      <h3>Temperature: {weather.main.temp}</h3>
      <h3>Feels Like: {weather.main.feels_like}</h3>
      <h3>Weather: {weather.weather[0].description}</h3>
    </>
  );

}
