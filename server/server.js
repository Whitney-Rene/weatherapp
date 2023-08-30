//app framework
import express from 'express';
//import these before the creation of the "app"
import cors from 'cors'; //makes sure nothing else in comp is using this port #
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express() //holds a new express app, each time it is called
app.use(cors()); //Middleware

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
    res.json(`${myName.name} is fetching from the BACKEND to the FRONTEND`);
})

//this should be the last function of your server, it tells computer which port to use
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})














// app.get('/weather/:cityName', (req, res) => {
//     console.log("Someone is visiting my weather site.");
//     const {cityName} = req.params;
//     console.log(req.params);
//     //string literal ``
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
//     fetch(url) 
//         .then(response => {
//             // Code to handle the response
//             // The response might contain data or information about the request status
//             return response.json(); // For example, parsing response as JSON
//         })
//         .then(data => {
//             // Code to handle the parsed data
//             console.log(data);
//             res.send(data);
//         })
//         .catch(error => {
//             // Code to handle errors during the fetch request
//             console.error('Error:', error);
//         });
// })