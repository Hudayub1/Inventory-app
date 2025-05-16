const pool = require('../pool')

const getAllDevs = 'SELECT * FROM developer'
const getDevsById = 'SELECT * FROM developer WHERE devid = $1'
const createDevs = 'INSERT INTO developer (name) VALUES ($1)' 
const updateDevs = 'UPDATE developer SET name = $1 WHERE devid = $2'


module.exports = {
  getAllDevs,
  getDevsById,
  createDevs,
  updateDevs
}