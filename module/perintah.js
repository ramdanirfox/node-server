// const psList = () => import('ps-list').then(x => x.default());
const psList = require('ps-list');
const { spawn, execSync } = require('child_process');
const bodyParser = require('body-parser');
const db = require('../lib/db');
const express = require('express');
const jsonParser = bodyParser.json();
const perintahModule = express();


perintahModule.get('/check', async (req, res) => {
    console.log("Akses ke cek");
    // console.log("PSLIst", await psList({all: true}));
    res.json(await psList({all: true}));
});

perintahModule.get('/check2', async (req, res) => {
    console.log("Akses ke cek2");
    const ls = execSync("ps ax").toString();
    // console.log("PSLIst", await psList({all: true}));
    res.json([{result:  ls }]);
});

module.exports = perintahModule;