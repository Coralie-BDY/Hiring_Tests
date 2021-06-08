const mariadb = require("mariadb")

const pool= mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DB,
    port: process.env.MARIADB_PORT,
    connectionLimit: process.env.MARIADB_CONNECTLIMIT
})

//LISTER TOUS LES FILMS
async function getAllMovies() {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT * FROM movies"
            const rows = await conn.query(sql)
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

//LISTER LES 100 FILMS LES PLUS LOUES SUR ANNEE N
async function getMostRentedMoviesForYearN(annee, limit = 100) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT titre, nbre_de_prets FROM movies WHERE annee = ? ORDER BY nbre_de_prets DESC LIMIT ?"
            const rows = await conn.query(sql, [annee, limit])
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}
//LISTER LES 100 FILMS LES PLUS LOUES
async function getMostRentedMovies(limit = 100) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT m.titre, m.nbre_de_prets FROM movies m ORDER BY m.nbre_de_prets DESC LIMIT ?"
            const rows = await conn.query(sql, [limit])
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

//LISTER LE FILM LE PLUS LOUE SUR ANNEE N
async function getMostRentedMovieForYearN(annee, annee) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT titre, nbre_de_prets FROM movies WHERE annee = ? AND nbre_de_prets =(SELECT MAX(nbre_de_prets) FROM movies WHERE annee = ?)"
            const rows = await conn.query(sql, [annee, annee])
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

//LISTER LE FILM LE PLUS LOUE
async function getMostRentedMovie() {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT titre, nbre_de_prets FROM movies WHERE nbre_de_prets =(SELECT MAX(nbre_de_prets) FROM movies)"
            const rows = await conn.query(sql)
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

//AFFICHER L'AUTEUR QUI A LE PLUS DE FILMS LOUES
async function getAuthorMostRentedMovies(limit = 1) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT auteur, SUM(nbre_de_prets) AS nbre_de_prets FROM movies GROUP BY auteur ORDER BY SUM(nbre_de_prets) DESC LIMIT 1"
            const rows = await conn.query(sql)
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

//RECHERCHER UN FILM PAR MOT CLE
async function searchMovies(keyword) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT titre FROM movies WHERE titre LIKE " + conn.escape(`%${keyword}%`)
            const rows = await conn.query(sql, [keyword])
            console.log("response", rows)
            return resolve(rows)
        } catch (err) {
            return reject(err)
        } finally {
            if (conn) await conn.release()

        }
    })
}

module.exports = {
    getAllMovies,
    getMostRentedMoviesForYearN,
    getMostRentedMovies,
    getMostRentedMovieForYearN,
    getMostRentedMovie,
    getAuthorMostRentedMovies,
    searchMovies
}