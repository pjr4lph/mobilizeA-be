const mongoose = require('mongoose');
const Schema = mongoose.schema;

let Url = mongoose.Schema({
  link: String,
  short: String,
  createdAt: {type: Date, default: Date.now},
  visits: Number
});

module.exports = mongoose.model('Url', Url);
