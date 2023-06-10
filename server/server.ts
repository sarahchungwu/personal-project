import { join } from 'node:path'
import express from 'express'
// import face from './routes/face'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

// server.use('/api/v1', face)

export default server
