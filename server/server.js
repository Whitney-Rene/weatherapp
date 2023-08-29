//app framework
import express from 'express';
//import these before the creation of the "app"
import cors from 'cors'; //makes sure nothing else in comp is using this port #
import path from 'path'; //will tell express the pwd
import bodyParser from 'body-parser'; //allow put & post requests
import fetch from 'node-fetch';
import 'dotenv/config';

const app = express() //holds a new express app, each time it is called
const port = 2023


app.use(cors()); //Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const __dirname = path.resolve();

console.log('Whitney-Rene');

//home route, user will see message
// http://localhost:2023/
app.get('/', (req, res) => {
    console.log("Someone is visiting my HOME page")
    res.send('Welcome! You are visiting my HOME server!')
})


app.get('/weather/:cityName', (req, res) => {
    console.log("Someone is visiting my weather site.");
    const {cityName} = req.params;
    console.log(req.params);
    //string literal ``
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    fetch(url) 
        .then(response => {
            // Code to handle the response
            // The response might contain data or information about the request status
            return response.json(); // For example, parsing response as JSON
        })
        .then(data => {
            // Code to handle the parsed data
            console.log(data);
            res.send(data);
        })
        .catch(error => {
            // Code to handle errors during the fetch request
            console.error('Error:', error);
        });
})


//this should be the last function of your server, it tells computer which port to use
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

