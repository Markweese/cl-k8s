// Import config/packages
const keys = require('./keys');
const mongoose = require('mongoose');
const mongoUrl = `mongodb://${keys.mongoUser}:${keys.mongoPass}@${keys.mongoHost}.mlab.com:${keys.mongoPort}/${keys.dbName}`;

// Connect to our Database and handle any bad connections
mongoose.connect(mongoUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`Mongo Connection Error in start.js, line 10: ${err}`);
});

//import all models
require('./models/Type');
require('./models/User');
require('./models/Component');

// Start the app
const app = require('./app');
app.listen(5000, err => {
  console.log('listening on port 5000');
});
