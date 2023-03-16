const db = require('../db')

class FilmController {
    async createFilm(req, res) {
        try {
            const {name, year} = req.body
            const newFilm = await db.query('INSERT INTO film (name, year) VALUES ($1, $2) RETURNING *', [name, year])
            res.json(newFilm.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async getFilms(req, res) {
        try {
            const films = await db.query('SELECT * FROM film')
            res.json(films.rows)
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async getOneFilm(req, res) {
        try {
            const id = req.params.id;
            const film = await db.query('SELECT * FROM film where id = $1', [id])
            res.json(film.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async updateFilm(req, res) {
        try {
            const {id, name, year} = req.body;
            const film = await db.query('UPDATE film set name = $1, year = $2 where id = $3 RETURNING *',
                [name, year, id]);
            res.json(film.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async deleteFilm(req, res) {
        try {
            const id = req.params.id;
            const film = await db.query('delete FROM film where id = $1', [id])
            res.json(film.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }
}

module.exports = new FilmController();