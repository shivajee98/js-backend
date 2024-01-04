require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/twitter', (req, res) => {
    res.send("https://twitter.com/shivajee_")
})
app.listen(process.env.PORT, () => {
    console.log(`example app listening on ${port}`)
})