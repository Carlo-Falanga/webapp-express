const express = require('express')
const connection = require('./database/connection')
const moviesRouters = require("./routes/moviesRoutes")
const notFound = require("./middlewares/notFound")
const serverError = require("./middlewares/serverError")


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(cors())

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})


app.get('/', (req, res) => {
  res.send('WebApp Server Home Page')
})

// Movies routes
app.use('/movies', moviesRouters)


// 404 middleware
app.use(notFound)

// 500 middleware
app.use(serverError)