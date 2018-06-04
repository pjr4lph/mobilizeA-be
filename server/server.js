const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// this is used to simply check what is being asked for - for development only
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
