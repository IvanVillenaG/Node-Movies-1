const express = require('express');
const {getAllMovies, getIdMovies, getTitleMovies, getGenreMovies, getYearMovies} = require('../controllers/movies.controllers');
const router = express.Router();

router.get("/", getAllMovies);

router.get("/id/:id", getIdMovies);

router.get("/title/:title", getTitleMovies);

router.get("/genre/:genre", getGenreMovies);

router.get("/year/:year", getYearMovies);

module.exports = router;