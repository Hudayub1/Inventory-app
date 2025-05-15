const express = require('express')
const app = express()
const gameRoute = require('./Route/game_route')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))
app.use('/game', gameroute)


app.listen(PORT, () => {
    console.log('Hello there!')
})
