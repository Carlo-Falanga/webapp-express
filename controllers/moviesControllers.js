const connection = require("../database/connection")

const index = (req, res) => {
    connection.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Database query failed' })
        }
        res.json(results)
    })
}

const show = (req, res) => {
    const id = req.params.id
    
    const moviesql = 'SELECT * FROM movies WHERE id = ?'

    const rewiewsql = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(moviesql, [id], (err, movieResults) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Database query failed' })
        }
        if (movieResults.length === 0) {
            return res.status(404).json({ error: 'Movie not found' })
        }
        const movie = movieResults[0]

        connection.query(rewiewsql, [id], (err, reviewResults) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Database query failed' })
            }
            movie.reviews = reviewResults
            res.json(movie)
        })
    })
}

const storeReview = (req, res) =>{
    const movie_id = req.params.id;
    const {name, vote, text} = req.body;
    
    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)';
    
    connection.query(sql, [movie_id, name, vote, text], (err, results) =>{

        if(err){
            console.log(err);
            return res.status(500).json({error: 'Database query failed'})
        }
        res.status(201).json({message:'Review added successfully', reviewId: results.insertId})
    })
};

module.exports = {
    index,
    show,
    storeReview
}