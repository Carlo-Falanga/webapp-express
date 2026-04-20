const express = require('express')


const app = express()
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})


app.get('/', (req, res) => {
  res.send('WebApp Server Home Page')
})


