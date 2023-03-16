const db = require('../db')

class FilmGenreController {
    async createFilm_genre(req, res) {
        try {
            const {film_id, genre_id} = req.body
            const newFilm_genre = await db.query('INSERT INTO film_genre (film_id, genre_id) VALUES ($1, $2) RETURNING *', [film_id, genre_id])
            res.json(newFilm_genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async getOneFilm_genre(req, res) {
        try {
            const id = req.params.id;
            const film_genre = await db.query('select film.id , film.name as "film name", film_genre.genre_id, genre.name as "genre name"' +
            'from film_genre ' +
            'inner join film on film.id = film_genre.film_id ' +
            'inner join genre on genre.id = film_genre.genre_id ' +
            'where film_genre.film_id = $1', [id])
            res.json(film_genre.rows)
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async updateFilm_genre(req, res) {
        try {
            const {film_id, genre_id_new, genre_id_old} = req.body;
            const film_genre = await db.query('UPDATE film_genre set film_id = $1, genre_id = $2 where film_id = $1 and genre_id = $3 RETURNING *',
                [film_id, genre_id_new, genre_id_old]);
            res.json(film_genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }

    async deleteFilm_genre(req, res) {
        try {
            const {film_id, genre_id} = req.body;
            const film_genre = await db.query('delete FROM film_genre where film_id = $1 and genre_id = $2', [film_id, genre_id])
            res.json(film_genre.rows[0])
        } catch {
            res.json('invalid data for request execution')
        }
    }
}

module.exports = new FilmGenreController();