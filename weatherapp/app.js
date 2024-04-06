
const express = require('express'); 
const path = require('path');
const app = express(); 
const port = 3000; 
require('dotenv').config()


app.use('/src', express.static(path.join(__dirname, 'src')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/home/home.html'));
  });




app.listen(port, (error) =>{ 
    if(!error) 
    console.log(`Server is listening on port ${port} and can be accessed at http://localhost:3000/ `);
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);