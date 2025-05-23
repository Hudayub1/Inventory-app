const pool = require('../pool')

const getAllGames = 'SELECT * FROM games'
const getGamesById = 'SELECT * FROM games WHERE gameid = $1'
const createGame = 'INSERT INTO games (name) VALUES ($1)' 
const updateGame = 'UPDATE games SET name = $1 WHERE gameid = $2'


module.exports = {
  getAllGames,
  getGamesById,
  createGame,
  updateGame
}