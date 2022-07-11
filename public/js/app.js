let username
let socket = io()

do {
    username = prompt('Enter Your Name :')
} while (!username)

const message = document.querySelector('#message')
const postBtn = document.querySelector('#post')
const commBox = document.querySelector('#comments-box')
const typing = document.querySelector('#typing')

postBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = message.value

    if (!comment) {
        return
    }

    postComment(comment)
})

function postComment(comment) {
    let data = {
        username: username,
        comment: comment
    }

    appendToDOM(data)

    message.value = ''

    broadcastComm(data)

    syncWithDb(data)
}

function appendToDOM(data) {
    let div = document.createElement('div')

    let markup = `
    <div class="mx-2 p-3 mb-4 mt-4 text-base text-white bg-gray-700 rounded-lg border-gray-600 transform transition duration-700 hover:scale-105 animate-fade_in">
        <span id="name" class="font-bold underline underline-offset-4">${data.username}</span>
        <p id="comment" class="mt-2 mb-2">${data.comment}</p>
        <span id="time">${moment(data.time).format('LT')}</span>
    </div>`

    div.innerHTML = markup
    commBox.prepend(div)
}

function broadcastComm(data) {
    socket.emit('comment', data)
}

socket.on('comment', (data) => {
    appendToDOM(data)
})

socket.on('typing', (data) => {
    typing.innerHTML = `${data.username} is typing...`
    debounce(function () {
        typing.innerHTML = ''
    }, 10000)
})

let timerId = null
function debounce(func, timer) {
    if (timerId) {
        clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
        func()
    }, timer)
}

message.addEventListener('keyup', (e) => {
    socket.emit('typing', { username })
})

function syncWithDb(data) {
    const headers = {
        'Content-Type': 'application/json'
    }
    fetch('/api/comments', { method: 'Post', body: JSON.stringify(data), headers })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
}

function fetchComments() {
    fetch('/api/comments')
        .then(res => res.json())
        .then(result => {
            result.forEach((comment) => {
                comment.time = comment.createdAt
                appendToDOM(comment)
            })
        })
}

window.onload = fetchComments