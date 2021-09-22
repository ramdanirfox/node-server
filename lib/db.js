const { Client, Pool } = require('pg')
const client = new Client(
    {
        host: '127.0.0.1',
        port: '15432',
        database: 'exxon',
        password: 'SemogaBerkah'
    }
);
const pool = new Pool(
    {
        host: '127.0.0.1',
        port: '15432',
        database: 'exxon',
        password: 'SemogaBerkah'
    }
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