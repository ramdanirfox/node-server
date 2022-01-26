'use strict';

const express = require('express');
const app = express();
var cors = require('cors')
const port = 17072;
const login = require('./login');
const uploadExp = require('./module/upload');
const perintahModule = require('./module/perintah');
const pocaModule = require('./module/poca');
const bodyParser = require('body-parser');
// const { authRouter } = require('./routes/authRouter');

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());

// app.use('/auth', authRouter)
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/perintah', perintahModule);
app.use('/api/user', login);
app.use('/api/poca', pocaModule);
app.use('/api/file', uploadExp);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})