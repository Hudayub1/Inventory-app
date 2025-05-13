const express = require('express')
const app = express()
const route = require('./Route/game_route')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({extended:true}))
app.use('/', route)


app.listen(PORT, () => {
    console.log('Hello there!')
})
