const bodyParser = require('body-parser');
const db = require('../lib/db');
const express = require('express');
const jsonParser = bodyParser.json();
const uploadExp = express();

uploadExp.get('/check', async (req, res) => {
    // const user = req.body.user;
    // const password = req.body.password;
    console.log('Mohon tunggu...');
    const query = `select * from file_chunk;`;
    const queryRes = await db.client.query(query);
    // console.log('hasil', queryRes);
    console.log('Ketembyak');
    res.json(queryRes.rows);
});

uploadExp.post('/upload', jsonParser, async (req, res) => {
    const user = req.body.data;
    const password = req.body.fileName;
    
    const query = `INSERT INTO file_chunk (
        "data", file_name, file_type, file_size, file_hash, total_chunk, file_chunk_id, file_chunk_size, file_path
        ) VALUES (
        '${req.body.data}',
        '${req.body.name}',
        '${req.body.ftype}',
        ${req.body.size},
        '${req.body.hash}',
        ${req.body.total_chunk},
        ${req.body.chunk_id},
        ${req.body.chunk_size},
        '${req.body.path}'
        ) RETURNING id;`;
        console.log('Quary', query);
    const queryRes = await db.client.query(query);
    console.log('hasil', queryRes);
    res.json('{}');
    // const qry = queryRes.rows;
    // console.log('reqqq', req.body);
    // if (qry.length == 1) {
    //     if (qry[0].password == password) {
    //         res.json({ 'data': { 'login': { 'result': 200, 'user': qry[0] } } });
    //     }
    //     else {
    //         res.json({ 'data': { 'login': {'result': 403}}});
    //     }
    // }
    // else if (qry.length > 1) {
    //     res.json({ 'data': { 'login': {'result': 500}}});
    // }
    // else {
    //     res.json({ 'data': { 'login': {'result': 404}}});
    // }
    // res.json(queryRes.rows);
    // await db.client.end();
});

module.exports = uploadExp;