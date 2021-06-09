const express = require("express")
const db = require("./database/database")
const router = express.Router()

router.get("/", (req, res) => {
    db.getAllMovies()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/100-most-rented-movies/:annee", (req, res) => {
    let annee = req.params.annee
    let limit = req.params.limit
    db.getMostRentedMoviesForYearN(annee, limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/100-most-rented-movies", (req, res) => {
    let limit = req.params.limit
    db.getMostRentedMovies( limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/most-rented-movie/:annee", (req, res) => {
    let annee = req.params.annee
    let annee2 = req.params.annee
    db.getMostRentedMovieForYearN(annee, annee2)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/most-rented-movie", (req, res) => {
    db.getMostRentedMovie()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/author-most-rented-movies", (req, res) => {
    let limit = req.params.limit
    db.getAuthorMostRentedMovies(limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

router.get("/search-movies/:keyword", (req, res) => {
    let keyword = req.params.keyword
    db.searchMovies(keyword)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

module.exports = router