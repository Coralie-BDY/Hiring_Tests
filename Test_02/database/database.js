const mariadb = require("mariadb")

const pool= mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DB,
    port: process.env.MARIADB_PORT,
    connectionLimit: process.env.MARIADB_CONNECTLIMIT
})

async function getAllMovies(limit = 10) {
    return new Promise(async (resolve, reject) => {
        let conn;
        try {
            conn = await pool.getConnection()
            const sql = "SELECT * FROM movies LIMIT ?"
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

module.exports = {
    getAllMovies

}
