const express = require('express')
const app = express()
const path = require('path')
const gameRoute = require('./Route/game_route')
const devRoute = require('./Route/developer_route')
const genreRoute = require('./Route/genre_route')
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/game', gameRoute)
app.use('/dev', devRoute)
app.use('/genre', genreRoute)


app.listen(PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})