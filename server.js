const express = require('express');
const filmRouter = require('./routes/film.routes')
const genreRouter = require('./routes/genre.routes')
const film_genreRouter = require('./routes/film_genre.routes')

const PORT = process.env.PORT || 8087;

const app = express()

app.use(express.json())
app.use('/api', filmRouter)
app.use('/api', genreRouter)
app.use('/api', film_genreRouter)
app.get('/', (req, res) => {
    res.send(`HELLO PORT !!`)
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))