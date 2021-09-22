const { Client, Pool } = require('pg')
// const pgCfg = {
//     host: '127.0.0.1',
//     port: '15432',
//     database: 'exxon',
//     password: 'SemogaBerkah'
// }
const pgCfg = {
    host: 'db.jhqrimueimbqxgowplav.supabase.co',
    port: '5432',
    database: 'postgres',
    password: 'C55stylesheet;'
}
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