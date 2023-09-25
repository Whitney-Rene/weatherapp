import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express() 
app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 2023

console.log('I am proud of you, Whitney-Rene.');

//home route, user will see message
// http://localhost:1965/
app.get('/', (req, res) => {
    console.log("Someone is visiting my HOME server page")
    res.send('Welcome! You are visiting my HOME server!')
})

//- /backendMessage route, user will see an object
// http://localhost:1965/backendMessage
app.get('/backendMessage', (req, res) => {
    const myName = {name: "Whitney-Rene"};
    res.json(`*${myName.name} is fetching from the BACKEND to the FRONTEND*`);
})

//http://localhost:1965/weather?city=durham
app.get("/weather", (req, res) => {
    const APIkey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const city = req.query.city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()})
      .then(data => {
        // console.log(data);
        res.json(data);
      })
      .catch(error => {
        // console.log('#1', typeof error.message);
        console.error("Error fetching weather data:", error);
        if (error.message.includes('404')) {
          // console.log("inside 404")
          res.status(404).json({ error: "City not found" });
        } else {
          // console.log('inside 500')
          res.status(500).json({ error: "Error fetching weather data" });
        }
      });
  });

//think about adding a route to reroute users to the homepage

//this should be the last function of your server, it tells computer which port to use
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})