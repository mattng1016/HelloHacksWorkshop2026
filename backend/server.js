const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is running' })
})

app.get('/api/type/:type', async (req, res) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${encodeURIComponent(req.params.type)}/`,
    )
    const typeData = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(typeData)
    }

    const data = {
      half_damage_to: typeData.damage_relations.half_damage_to.map(({ name }) => name),
      double_damage_from: typeData.damage_relations.double_damage_from.map(
        ({ name }) => name,
      ),
    }

    res.status(response.status).json(data)
  } catch (error) {
    console.error('Failed to fetch Pokémon type:', error)
    res.status(502).json({ error: 'Could not retrieve Pokémon type from PokéAPI' })
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
