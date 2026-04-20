const express = require('express')
const router = express.Router()
const moviesControllers = require("../controllers/moviesControllers")

// index
router.get('/', moviesControllers.index);


module.exports = router