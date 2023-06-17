import { join } from 'node:path'
import express from 'express'
import dogs from './routes/dogs'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/dogs', dogs)

export default server
