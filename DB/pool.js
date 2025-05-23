require('dotenv').config();
const {Pool} = require('pg')


console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });


const pool = new Pool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

module.exports = pool


/* had problem where string is undefined and
    thought that databse was not connected to modules
*/