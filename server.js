const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

//Use static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000 || process.env.PORT

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))