const express = require('express')
const control = express()
const pool = require('../DB/pool')
const queries = require('../DB/Queries/games');

control.use(express.urlencoded({extended:true}))

getGames = async (req,res) => {
    try {
        console.log('hello')
        const result = await pool.query(queries.getAllGames);
        res.json(result.rows)
    } catch (error) {
        console.error('All Game Error')
    }   
} 

getGameId = async (req,res) => {
    try {
        await pool.query()
    } catch (error) {
        console.error('GameID Error')
    }
}

createGame = async (req,res) => {
    try {
        createGame,
        await pool.query()
    } catch (error) {
        console.error('GameID Error')
    }
}

updateGame = async (req,res) => {
    try {
        const {body} = req.body
        const {id} = req.params.id
        await pool.query(queries.updateGame)
    } catch (error) {
        console.error('GameID Error')
    }
}

  module.exports = {
    getGames,
    getGameId,
    createGame,
    updateGame
  }
  

getGames()
/* Had problem here whereby res.json property is undefined,
   Higly likely because table in sql not populated.

   try and catch always when you want to test just to give very fast feedback
*/

