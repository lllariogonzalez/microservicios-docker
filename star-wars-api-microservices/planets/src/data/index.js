module.exports = {

  list: async ()=> {
    const data = await fetch('http://database:8004/Planet')
    const planets = await data.json()
    return planets.data
  },

  get: async (id)=> {
    const data = await fetch(`http://database:8004/Planet/${id}`)
    const planet = await data.json()
    return planet.data
  },

  create: async (newPlanet)=> {
    const data = await fetch('http://database:8004/Planet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlanet)
    })
    const planetCreated = await data.json()
    return planetCreated.data
  },

  delete: async (id) => {
    const data = await fetch(`http://database:8004/Planet/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const planetDeleted = await data.json()
    return planetDeleted.data
  }

}