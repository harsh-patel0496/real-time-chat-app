const express = require('express')
const hbs = require('hbs')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = socketio(server)

const publicDirPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'./views')

app.use(express.static(publicDirPath))
app.set('view engine','hbs')
app.set('views',viewPath)

// app.get('',(req,res) => {
//     res.render('index',{
//         title: 'Weather',
//         name : 'Harsh Patel'
//     })
// })

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('Message from client ' + msg)
    })
    console.log('New Socket Connection')
})
server.listen(3000,()=> {
    console.log('App is up and running on the port 3000')
})