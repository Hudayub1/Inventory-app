const express = require('express')
const control = express()
const pool = require('../DB/pool')
const queries = require('../DB/Queries/genre');

control.use(express.urlencoded({extended:true}))

getGenre = async (req,res) => {
    try {
        console.log('genre')
        const result = await pool.query(queries.getAllGenre);
        res.render('./genre_view/index', {genre: result.rows}) 
    } catch (error) {
        console.error('All genre Error')
    }   
} 

getGenreId = async (req,res) => {
    try {
        const {body} = req
        const {id} = req.params
        const result = await pool.query(queries.getGenreId, [req.params])
        res.render('./genre_view/index', {genre: result.rows});
    } catch (error) {
        console.error('GameID Error')
    }
}

createGenre = async (req,res) => {
    try {
        createGenre,
        await pool.query()
    } catch (error) {
        console.error('GameID Error')
    }
}

updateGenre = async (req,res) => {
    try {
        const {body} = req.body
        const {id} = req.params.id
        await pool.query(queries.updateGenre)
    } catch (error) {
        console.error('GameID Error')
    }
}

  module.exports = {
    getGenre,
    getGenreId,
    createGenre,
    updateGenre
  }
  


/* Had problem here whereby res.json property is undefined,
   Higly likely because table in sql not populated.

   try and catch always when you want to test just to give very fast feedback
*/

