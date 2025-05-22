const express = require('express')
const control = express()
const pool = require('../DB/pool')
const queries = require('../DB/Queries/developer');

control.use(express.urlencoded({extended:true}))

getDevs = async (req,res) => {
    try {
        console.log('dev')
        const result = await pool.query(queries.getAllDevs);
        res.render('./dev_view/index', {devs: result.rows})
    } catch (error) {
        console.error('All Devs Error')
    }   
} 

getDevsById = async (req,res) => {
    try {
        const {body} = req
        const {id} = req.params
        const result = await pool.query(queries.getDevsById, [req.params])
        res.render('./dev_view/index', {devs: result.rows})
        res.status(200).json(result.rows)
    } catch (error) {
        console.error('GameID Error')
    }
}

createDevs = async (req,res) => {
    try {
        createDevs,
        await pool.query()
    } catch (error) {
        console.error('GameID Error')
    }
}

updateDevs = async (req,res) => {
    try {
        const {body} = req.body
        const {id} = req.params.id
        await pool.query(queries.updateDevs)
    } catch (error) {
        console.error('GameID Error')
    }
}

  module.exports = {
    getDevs,
    getDevsById,
    createDevs,
    updateDevs
  }
  


/* Had problem here whereby res.json property is undefined,
   Higly likely because table in sql not populated.

   try and catch always when you want to test just to give very fast feedback
*/

