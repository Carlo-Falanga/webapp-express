const connection = require("../database/connection")

const index = (req, res) => {
    res.send('Movies Index Page')
}

const show = (req, res) => {
    const id = req.params.id
    res.send(`Movie Show Page for movie with id: ${id}`)
}

module.exports = {
    index,
    show
}