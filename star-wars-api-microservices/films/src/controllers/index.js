const { catchedAsync } = require('../utils')

module.exports = {
  getFilms: catchedAsync(require('./getFilms')),
  getFilmById: catchedAsync(require('./getFilmById')),
  createFilm: catchedAsync(require('./createFilm')),
  deleteFilm: catchedAsync(require('./deleteFilm'))
}