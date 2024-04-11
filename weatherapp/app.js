
const express = require('express'); 
const path = require('path');
const app = express(); 
const port = 3000; 
require('dotenv').config()
const key = require('./src/utils/apikey.js');

app.use('/src', express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/home/home.html'));
  });


app.get('/data', async (req, res) => {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=Munich');
        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(port, (error) =>{ 
    if(!error) 
    console.log(`Server is listening on port ${port} and can be accessed at http://localhost:3000/ `);
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);