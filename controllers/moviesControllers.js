const connection = require("../database/connection")

const index = (req, res) => {
    res.send('Movies Index Page')
}

module.exports = {
    index
}