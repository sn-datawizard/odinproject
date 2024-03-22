const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/dashboard/dashboard.html'));
});


app.post('/signup', async (req, res) => {
  const uri = process.env.MONGO_CONX;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('expresstodolist-database');
    const collection = database.collection('user_details');
    collection.deleteMany({});

    const { user, password } = req.body;

    const doc = {
      user: user,
      pwd: password
    }
    
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res.status(200).send('Success');

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});



app.post('/login', async (req, res) => {
  
  const uri = process.env.MONGO_CONX;
  const client = new MongoClient(uri);

  try {
    const database = client.db('expresstodolist-database');
    const collection = database.collection('user_details');

    const { user, password } = req.body;

    const doc = {
      user: user,
      pwd: password
    }
    
    var loginData = await collection.findOne(doc);
    if (loginData) {
      console.log('Logged in!');
      await client.close();
      
      res.status(200).send('Success');
    } else {
      console.log('Wrong credentials!');
      await client.close();

      res.status(401).send('Failed');
    } 

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});



app.listen(port, () => {
  console.log(`Server is listening on port ${port} and can be accessed at http://localhost:3000/ `);
});
