import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import path from 'path'
import { Server } from 'socket.io'
import greenlock from 'greenlock-express'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
const app = express()

//serve site
app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
const socket = (glx) => {
  var io = new Server(glx.httpsServer())
  io.on("connection", socket => {
    console.log("a user connected")
    socket.emit("Welcome");
    socket.on("chat message", (msg) => {
      socket.broadcast.emit("chat message", msg)
    })
  })
  glx.serveApp(app)
}

if(dev) {
  app.listen(PORT, () => {
    console.log('Server is running on port 3000')
  })
} else {
  greenlock.init({
    packageRoot: path.resolve(),
    configDir: "./greenlock.d",
    maintainerEmail: "babruell@wpi.edu",
    cluster: false
  })
  .serve(socket);
}