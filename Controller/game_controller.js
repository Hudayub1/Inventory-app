const express = require('express')
const control = express()
const pool = require('../DB/pool')
const queries = require('../DB/Queries/games');



getGames = async (req,res) => {
    console.log('hello')
    const result = await pool.query(queries.getAllGames);
    res.json(result.rows)
    
} 



