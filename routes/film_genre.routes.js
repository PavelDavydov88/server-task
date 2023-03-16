const Router = require('express');
const router = new Router();
const film_genreController = require('../controller/filmGenre.controller');

router.post('/film_genre', film_genreController.createFilm_genre);
router.get('/film_genre/:id', film_genreController.getOneFilm_genre);
router.put('/film_genre', film_genreController.updateFilm_genre);
router.delete('/film_genre/', film_genreController.deleteFilm_genre);

module.exports = router;