const express = require('express')
const control = express()
const pool = require('../DB/pool')
const queries = require('../DB/Queries/games');

control.use(express.urlencoded({extended:true}))

getGames = async (req,res) => {
    try {
        console.log('game')
        const result = await pool.query(queries.getAllGames);
        res.render('./game_view/index', {game: result.rows})
    } catch (error) {
        console.error('All Game Error')
    }   
} 

getGameId = async (req,res) => {
    try {
        const {body} = req
        const {id} = req.params
        const result = await pool.query(queries.getGameId, [req.params.id]);
        res.render('game_view/index', {game: result.rows})
        res.status(200).json(result.rows)
    } catch (error) {
        console.error('GameID Error')
    }
}

createGame = async (req,res) => {
    try {
        const game = req.body
        await pool.query(queries.createGame, [game])
        res.redirect('/game')
    } catch (error) {
        console.error('Error creating Game', error.message)
        res.status(500).json({error: error.message})
    }
}

updateGame = async (req,res) => {
    try {
        const {game} = req
        const {id} = req.params
        if (!game || game.trim() === '') {
            return res.status(400).json({error: 'Game name is required'})
        }
        await pool.query(queries.updateGame, [game, id]);
        res.redirect('/game')
    } catch (error) {
        console.error('Error updating Game', error.message)
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