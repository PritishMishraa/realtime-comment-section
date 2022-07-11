const Comment = require('./models/comment')
const express = require('express')
const dbConnect = require('./db')
const app = express()

app.use(express.static('public'))
app.use(express.json())
dbConnect()

app.post('/api/comments', (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    })
    comment.save().then(response => {
        res.send(response)
    })

})

app.get('/api/comments', (req, res) => {
    Comment.find().then(function (comments) {
        res.send(comments)
    })
})

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => console.log(`server listening on PORT ${PORT}, visit : http://localhost:${PORT}/`))

let io = require('socket.io')(server)

io.on('connection', (socket) => {
    socket.on('comment', (data) => {
        data.time = Date()
        socket.broadcast.emit('comment', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
})