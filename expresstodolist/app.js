const express = require('express')
const path = require('path');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/home/home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/login/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/signup/signup.html'));
});


app.use('/src', express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
  console.log(`Server is listening on port ${port} and can be accessed at http://localhost:3000/ `);
});
