const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const componentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  componentType: {
    type: String
  },
  tags: [{
    type: String
  }],
  html: {
    type: String
  },
  author: {
    type: String
  },
  lastUpdate: {
    type: Date
  },
  fields: [{
    fieldName: String
  }]
});

componentSchema.index({
  componentType: 'text',
  tags: 1
});

module.exports = mongoose.model('Component', componentSchema);
