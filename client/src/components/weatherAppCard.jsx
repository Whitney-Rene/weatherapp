import React from "react";
import WeatherAppForm from "./weatherAppForm";

//destructuring weather out of the props object
export default function WeatherAppCard({weather, test}) {

  //too many can cause performance issues
  console.log(test);

  return (
    <>
      <h1>City: {weather.name}</h1>
      <h2>Temperature: {weather.main.temp}</h2>
      <h2>Feels Like: {weather.main.feels_like}</h2>
      <p>Weather: {weather.weather[0].description}</p>
    </>
  );

}
