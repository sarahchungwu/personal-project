// import express, { Request, Response } from 'express'
// // import * as db from '../db/pokemon'

// import {
//   Pokemon,
//   FrankenPokemon,
//   UpdateFrankenPokemon,
// } from '../../models/PokemonModels'

// const router = express.Router()

// router.get('/pokemon', async (req: Request, res: Response) => {
//   try {
//     const pokemon = await db.getPokemon()
//     res.json(pokemon)
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message })
//     }
//   }
// })

// router.post('/pokemon', async (req: Request, res: Response) => {
//   try {
//     const newPokemon = req.body as Pokemon
//     await db.addPokemon(newPokemon)
//     res.sendStatus(201)
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message })
//     }
//   }
// })

// router.get('/frankenpokemon', async (req: Request, res: Response) => {
//   try {
//     const frankenPokemon = await db.getFrankenPokemon()
//     res.json(frankenPokemon)
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message })
//     }
//   }
// })

// router.patch('/frankenpokemon', async (req: Request, res: Response) => {
//   try {
//     const frankenId = Number(req.body.id)
//     const selectFranken = await db.selectFrankenPokemon(frankenId)

//     console.log(selectFranken)
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message })
//     }
//   }
// })

// export default router
