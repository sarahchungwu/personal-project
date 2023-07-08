import express, { Request, Response } from 'express'
import * as db from '../db/db'

const router = express.Router()

//Get all dogs
router.get('/', async (req: Request, res: Response) => {
  try {
    const dogs = await db.getAllDogs()
    res.json(dogs)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// router.post('/', async (req: Request, res: Response) => {
//   try {
//     console.log('I am in the server', req.body.id)
//     const id = Number(req.body.id)
//     db.createSelectedDog(id)
//     res.sendStatus(201)
//   } catch (error) {
//     if (error instanceof Error) {
//       res.status(500).json({ error: error.message })
//     }
//   }
// })

router.get('/detail/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const selectedDog = await db.getSelectedDog(id)
    res.json({ selectedDog })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
