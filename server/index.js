// Import config
const keys = require('./keys');

// Express app setup
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Client setup
const mongoUrl = `mongodb://${keys.mongoUser}:${keys.mongoPass}@${keys.mongoHost}.mlab.com:${keys.mongoPort}/${keys.dbName}`;
const MongoClient = require('mongodb').MongoClient;

// Express route handlers
app.get('/', (req, res) => {
  console.log(mongoUrl);
  res.send('Lib or Builder');
});

app.get('/components', async (req, res) => {
  let result = await MongoClient.connect(mongoUrl, function(err, db) {
    if (err) res.send(err);
    var dbo = db.db(keys.dbName);
    dbo.collection("components").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });
});

app.get('/tags', async (req, res) => {
  let result = await MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(err, db) {
    if (err) res.send(err);
    var dbo = db.db(keys.dbName);
    dbo.collection("components").find({}).project({_id:0, tags:1}).toArray(function(err, result) {
      if(err) throw err;
      res.send(result);
    });
  });
});

app.get('/types', async (req, res) => {
  let result = await MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(err, db) {
    if (err) res.send(err);
    var dbo = db.db(keys.dbName);
    dbo.collection("components").find({}).project({_id:0, type:1}).toArray(function(err, result) {
      if(err) throw err;
      res.send(result);
    });
  });
});

app.post('/components', async (req, res) => {
  const tags = req.body.tags;
  const name = req.body.name;
  const type = req.body.type;
  const markup = req.body.markup;

  let result = await MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(err, db) {
    if (err) res.send(err);
    var dbo = db.db(keys.dbName);
    dbo.collection("components").insertOne({name, type, tags, markup}, function(err, result) {
      if(err) throw err;
      res.send({ success:1 });
    });
  });
});

app.listen(5000, err => {
  console.log('listening on port 5000');
});
