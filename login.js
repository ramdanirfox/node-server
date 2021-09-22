'use strict';

const express = require('express');
const login = express();
const bodyParser = require('body-parser');
const db = require('./lib/db');

const jsonParser = bodyParser.json();



login.get('/list', async (req, res) => {
    const queryRes = await db.client.query('select * from users;');
    res.json(queryRes.rows);
});

login.post('/register', async (req, res) => {
    const queryRes = await db.client.query('select * from users;');
    res.send(req.headers);
});

login.post('/login', jsonParser, async (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    const query = `select * from users where username = '${user}';`;
    const queryRes = await db.client.query(query);
    const qry = queryRes.rows;
    console.log('reqqq', req.body);
    if (qry.length == 1) {
        if (qry[0].password == password) {
            res.json({ 'data': { 'login': { 'result': 200, 'user': qry[0] } } });
        }
        else {
            res.json({ 'data': { 'login': {'result': 403}}});
        }
    }
    else if (qry.length > 1) {
        res.json({ 'data': { 'login': {'result': 500}}});
    }
    else {
        res.json({ 'data': { 'login': {'result': 404}}});
    }
    // res.json(queryRes.rows);
    // await db.client.end();
}); 

module.exports = login;