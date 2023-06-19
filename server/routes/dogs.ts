import express, { Request, Response } from 'express'
import * as db from '../db/db'

const router = express.Router()

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

export default router
