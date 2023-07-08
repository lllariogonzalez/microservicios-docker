module.exports = {

  list: async ()=> {
    const data = await fetch('http://database:8004/Character')
    const characters = await data.json()
    return characters.data
  },

  get: async (id)=> {
    const data = await fetch(`http://database:8004/Character/${id}`)
    const character = await data.json()
    return character.data
  },

  create: async (newCharacter)=> {
    const data = await fetch('http://database:8004/Character', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCharacter)
    })
    const characterCreated = await data.json()
    return characterCreated.data
  },

  delete: async (id) => {
    const data = await fetch(`http://database:8004/Character/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    const characterDeleted = await data.json()
    return characterDeleted.data
  }

}