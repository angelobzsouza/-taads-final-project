const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const port = 4001

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

const client = new MongoClient(url);

var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  client.connect(function(err) {  
    const db = client.db(dbName);

    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      res.send(docs)
    });
  
    client.close();
  });
})

app.put('/', (req, res) => {
  client.connect(function(err) {  
    const db = client.db(dbName);

    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([ req.body ], function(err, result) {
      res.send(result)
    });
  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
