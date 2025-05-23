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
        const {genre} = req.body
        await pool.query(queries.createGenre, [genre])
        res.redirect('/genre')
    } catch (error) {
        console.error('Error creating genre', error.message)
        res.status(500).json({error: error.message})
    }
}

updateGenre = async (req,res) => {
    try {
        const {genre} = req.body
        const {id} = req.params.id
        if (!genre || genre.trim() === '') {
            return res.status(400).json({error: 'Genre name is required'})
        }
        await pool.query(queries.updateGenre, [genre, id])
        res.redirect('/genre')
    } catch (error) {
        console.error('GameID Error', error.message)
        res.status(500).json({error: error.message})
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

/*  23/05/2025
    had some problems understanding update and delete operations
    suddenly theres this npm called method overide i need to use
    and the ejs sntax isnt helping due to syntax complexity
*/