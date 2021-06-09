require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const db = require("./database/database")
const router = require("./roots")
const app = express()

app.use('/api', router)

app.use( (req, res) => {
    res.json({
        urls: {
            get_all: `/api`,
            get_100_most_rented_movies_for_year_n:`/api/100-most-rented-movies/:annee`,
            get_100_most_rented_movies: `/api/100-most-rented-movies`,
            get_most_rented_movie_for_year_n: `/api/most-rented-movie/:annee`,
            get_most_rented_movie: `/api/most-rented-movie`,
            get_author_most_rented_movies: `/api/author-most-rented-movies`,
            get_search_movies: `/api/search-movies/:keyword`
        }
    })
})

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')

})

module.exports=app





