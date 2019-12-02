const mongoose = require('mongoose');
const Component = mongoose.model('Component');

exports.getComponents = async (req,res) => {
  let components = await Component.find({});

  res.send(components);
}

exports.getTags = async (req,res) => {
  let tags = await Component.find({}, {_id:0, tags:1});

  res.send(tags);
}

exports.getTypes = async (req,res) => {
  let types = await Component.find({}, {_id:0, type:1});

  res.send(types);
}

exports.postComponents = async (req, res) => {
  res.send({sent:true});
}
