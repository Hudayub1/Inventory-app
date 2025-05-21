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
        const {body} = req
        const {id} = req.params
        await pool.query(queries.updateGame, [body, id]);
        res.status(200).json({message: 'Game updated successfully'});
    } catch (error) {
        console.error('GameID Error', error.message)
        res.status(500).json({error: error.message})
       
    }
}

  module.exports = {
    getGames,
    getGameId,
    createGame,
    updateGame
  }
  


/*   5/18/2025
    Had problem here whereby res.json property is undefined,
    Higly likely because table in sql not populated.

    try and catch always when you want to test just to give very fast feedback
*/

/*   5/21/2025
    Had problem here whereby res.status property is undefined,
    Higly likely because calling updateGame function where it is an 
    express route handler and cant be called directly.

    try and catch always when you want to test just to give very fast feedback
*/