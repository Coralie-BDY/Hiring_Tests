require("dotenv").config()
const express = require("express")
const db = require("./database/database")
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.json({
        urls: {
            get_all: `localhost:${PORT}/api`,
            get_100_most_rented_movies_for_year_n: `localhost:${PORT}/api/100-most-rented-movies/:annee`,
            get_100_most_rented_movies: `localhost:${PORT}/api/100-most-rented-movies`,
            get_most_rented_movie_for_year_n: `localhost:${PORT}/api/most-rented-movie/:annee`,
            get_most_rented_movie: `localhost:${PORT}/api/most-rented-movie`,
            get_author_most_rented_movies: `localhost:${PORT}/api/author-most-rented-movies`,
            get_search_movies: `localhost:${PORT}/api/search-movies/:keyword`
        }
    })
})

app.get("/api", (req, res) => {
    db.getAllMovies()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/100-most-rented-movies/:annee", (req, res) => {
    let annee = req.params.annee
    let limit = req.params.limit
    db.getMostRentedMoviesForYearN(annee, limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/100-most-rented-movies", (req, res) => {
    let limit = req.params.limit
    db.getMostRentedMovies( limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/most-rented-movie/:annee", (req, res) => {
    let annee = req.params.annee
    let annee2 = req.params.annee
    db.getMostRentedMovieForYearN(annee, annee2)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/most-rented-movie", (req, res) => {
    db.getMostRentedMovie()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/author-most-rented-movies", (req, res) => {
    let limit = req.params.limit
    db.getAuthorMostRentedMovies(limit)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.get("/api/search-movies/:keyword", (req, res) => {
    let keyword = req.params.keyword
    db.searchMovies(keyword)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))





