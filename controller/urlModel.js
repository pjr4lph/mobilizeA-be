const mongoose = require('mongoose');
const Schema = mongoose.schema;

let Url = mongooose.Schema({
  url: String,
  shortUrl: String,
  createdAt: {type: Date, default: Date.now},
  visits: Number
});

module.exports = mongoose.model('Url', Url);
