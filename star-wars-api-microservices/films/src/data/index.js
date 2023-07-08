module.exports = {

  list: async ()=> {
    const data = await fetch('http://database:8004/Film')
    const films = await data.json()
    return films.data
  },

  get: async (id)=> {
    const data = await fetch(`http://database:8004/Film/${id}`)
    const film = await data.json()
    return film.data
  },

  create: async (newFilm)=> {
    const data = await fetch('http://database:8004/Film', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFilm)
    })
    const filmCreated = await data.json()
    return filmCreated.data
  },

  delete: async (id) => {
    const data = await fetch(`http://database:8004/Film/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const filmDeleted = await data.json()
    return filmDeleted.data
  }

}