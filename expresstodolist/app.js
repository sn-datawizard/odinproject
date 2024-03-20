const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');

app.use('/src', express.static(path.join(__dirname, 'src')));

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


app.post('/signup', (req, res) => {

  const uri = process.env.MONGO_CONX;
  const client = new MongoClient(uri);

  async function run() {
    try {
      const database = client.db('expresstodolist-database');
      const collection = database.collection('user_details');

      const doc = {
        user: 'user1',
        pwd: 'pwd1'
      }

      const result = await collection.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

});



app.listen(port, () => {
  console.log(`Server is listening on port ${port} and can be accessed at http://localhost:3000/ `);
});
