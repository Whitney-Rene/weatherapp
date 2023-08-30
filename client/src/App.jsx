import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //[message, the function that will change message]
  const [message, setMessage] = useState('');

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
      <h1>Weather App</h1>
      {message}
    </>
  )
}

export default App
