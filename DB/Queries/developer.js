const pool = require('../pool')

const getAllDevs = 'SELECT * FROM games'
const getDevsById = 'SELECT * FROM games WHERE gameid = $1'
const createDevs = 'INSERT INTO game (name) VALUES ($1)' 
const updateDevs = 'UPDATE game SET name = $1 WHERE gameid = $2'


module.exports = {
  getAllDevs,
  getDevsById,
  createDevs,
  updateDevs,
}