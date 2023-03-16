const db = require('../db')

class GenreController {
    async createGenre(req, res) {
        try {
            const {name} = req.body
            const newGenre = await db.query('INSERT INTO genre (name) VALUES ($1) RETURNING *', [name])
            res.json(newGenre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async getGenres(req, res) {
        try {
            const genres = await db.query('SELECT * FROM genre')
            res.json(genres.rows)
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async getOneGenre(req, res) {
        try {
            const id = req.params.id;
            const genre = await db.query('SELECT * FROM genre where id = $1', [id])
            res.json(genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async updateGenre(req, res) {
        try {
            const {id, name} = req.body;
            const genre = await db.query('UPDATE genre set name = $1 where id = $2 RETURNING *',
                [name, id]);
            res.json(genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async deleteGenre(req, res) {
        try {
            const id = req.params.id;
            const genre = await db.query('delete FROM genre where id = $1', [id])
            res.json(genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }
}

module.exports = new GenreController();