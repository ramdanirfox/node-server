'use strict';

const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
const login = require('./login');

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());

app.use('/api/user', login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})