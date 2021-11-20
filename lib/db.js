const { Client, Pool } = require('pg')
const fs = require('fs');
const pgCfg = {
    // host: '10.54.36.227',
    host: '127.0.0.1',
    port: '15432',
    database: 'test',
    user: 'postgres',
    password: 'PostgreS'
};
// const pgCfg = {
//     host: '127.0.0.1',
//     port: '15432',
//     database: 'exxon',
//     password: 'SemogaBerkah'
// }
// const pgCfg = {
//     host: 'db.jhqrimueimbqxgowplav.supabase.co',
//     port: '5432',
//     user: 'postgres',
//     database: 'postgres',
//     password: 'C55stylesheet;',
//     ssl: {
//         rejectUnauthorized: false,
//         ca: fs.readFileSync('./lib/prod-ca-2021.crt').toString()
//     }
// };
const client = new Client(
    pgCfg
);
const pool = new Pool(
    pgCfg
);
client.connect();

client.on('error', (err) => {
    console.log('====== ADA ERROR : ', err);
    // throw err;
});

module.exports = {
    client: client,
    pool: pool
};

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()