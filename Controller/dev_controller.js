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
        const devs = req.body
        await pool.query(queries.createDevs, [devs])
        res.redirect('/dev')
    } catch (error) {
        console.error('Error creating devs', error.message)
        res.status(500).json({error: error.message})
    }
}

updateDevs = async (req,res) => {
    try {
        const {devs} = req
        const {id} = req.params.id
        if (!devs || devs.trim() === '') {
            return res.status(400).json({error: 'Dev name is required'})
        }
        await pool.query(queries.updateDevs, [devs, id])
        res.redirect('/dev')
    } catch (error) {
        console.error('Error updating devs', error.message);
        res.status(500).json({error: error.message})
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

