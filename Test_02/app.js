require("dotenv").config()
const express = require("express")
const db = require("./database/database")
const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.json({
        urls: {
            get_all: `localhost:${PORT}/api`,
        },
    })
})

app.get("/api", (req, res) => {
    db.getAllMovies()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
})

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))





