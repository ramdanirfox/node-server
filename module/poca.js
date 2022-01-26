// const psList = () => import('ps-list').then(x => x.default());
const psList = require('ps-list');
const { spawn, execSync } = require('child_process');
const bodyParser = require('body-parser');
const db = require('../lib/db');
const CONSTANT = require('./constants');
const turf = require('@turf/turf');
const express = require('express');
const jsonParser = bodyParser.json();
const pocaModule = express();


pocaModule.get('/driverpos', async (req, res) => {
    // console.log("Akses ke driverpos");
    const now = new Date();
    const timestamp = now.getTime();
    const progress = (timestamp / 1000) % 100;
    const lineLen = turf.length(CONSTANT.lineMonas, { units: 'kilometers' });
    const progressLen = lineLen * (progress / 100);
    const currentPointPos = turf.along(CONSTANT.lineMonas.features[0], progressLen, { units: "kilometers" });
    // console.log("PSLIst", await psList({all: true}));
    res.json({ time: progress, pointLen: progressLen, len: lineLen, geojson: currentPointPos });
});

pocaModule.get('/driverpos2', async (req, res) => {
    // console.log("Akses ke driverpos2");
    const now = new Date();
    const timestamp = now.getTime();
    const progress = (timestamp / 1000) % 100;
    const lineLen = turf.length(CONSTANT.lineMotor, { units: 'kilometers' });
    const progressLen = lineLen * (progress / 100);
    const currentPointPos = turf.along(CONSTANT.lineMotor.features[0], progressLen, { units: "kilometers" });
    // console.log("PSLIst", await psList({all: true}));
    res.json({ time: progress, pointLen: progressLen, len: lineLen, geojson: currentPointPos });
    
});

module.exports = pocaModule;