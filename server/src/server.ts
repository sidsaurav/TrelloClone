import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.json({ name: 'sid', msg: 'heyyy' })
})

// always connect to server after we connect to db
mongoose.connect('mongodb://localhost:27017/trello').then(() => {
  console.log('mongodb connected')
  app.listen(5000, () => {
    console.log('server is up on 5000')
  })
})

io.on('connection', (socket) => {
  console.log('io connected')
})
