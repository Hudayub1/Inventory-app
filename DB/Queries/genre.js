const pool = require('../pool')

const getAllGenre = 'SELECT * FROM genre'
const getGenreById = 'SELECT * FROM genre WHERE genreid = $1'
const createGenre = 'INSERT INTO genre (name) VALUES ($1)' 
const updateGenre = 'UPDATE genre SET name = $1 WHERE genreid = $2'



module.exports = {
  getAllGenre,
  getGenreById,
  createGenre,
  updateGenre,
}