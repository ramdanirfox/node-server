'use strict';

const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
const login = require('./login');
const uploadExp = require('./module/upload');

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());

app.use('/auth', authRouter)
app.use('/api/user', login);
app.use('/api/file', uploadExp);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})