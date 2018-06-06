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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../client')));

// this is used to simply check what is being asked for - for development only
app.use((req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
});

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {
      shortUrl: ''
    });
});

app.post('/submit', urlController.checkUrl, urlController.addUrl);

app.get('/:hash', urlController.redirectToLink);

const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
