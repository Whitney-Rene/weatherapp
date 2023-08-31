import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WeatherAppForm from './components/weatherAppForm';

function App() {
  //[message, the function that will change message]
  const [message, setMessage] = useState('');

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
      <h2>Whitney-Rene's Weather App</h2>
      <WeatherAppForm />
      <div>{message}</div>
    </>
  )
}

export default App
