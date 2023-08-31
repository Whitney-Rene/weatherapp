import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherAppForm from './components/weatherAppForm';
import WeatherAppCard from './components/weatherAppCard';

function App() {
  //[message, the function that will change message]
  const [message, setMessage] = useState('');
  //create a state city

  //backend to frontend
  const callBackEnd = async () => {
    const response = await fetch ('http://localhost:1965/backendMessage');
    const data = await response.json();
    console.log(data);
    setMessage(data);
  }
  
  useEffect(() => {
    callBackEnd();
  }, []);

  return (
    <>
      <h1>Whitney-Rene's Weather App</h1>
      <WeatherAppForm/>
      <WeatherAppCard/>
      <div>{message}</div>
    </>
  )
}

export default App
