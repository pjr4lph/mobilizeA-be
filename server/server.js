const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const urlController = require('../controller/urlController.js');

const mongoose = require('mongoose');

const dbURI = 'mongodb://ralph:pjr4lph@ds151558.mlab.com:51558/ralphs';

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('Connected to Database');
});

// this is used to simply check what is being asked for - for development only
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/style.css'));
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.js'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
