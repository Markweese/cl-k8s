const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true
  },
  fields: [{
    fieldName: String,
    fieldRequired: Boolean,
    fieldDescription: String
  }]
});

typeSchema.index({
  name: 'text'
});

module.exports = mongoose.model('Type', typeSchema);
