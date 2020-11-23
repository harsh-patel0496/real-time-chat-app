$(document).ready(() => {
    let socket = io()
    $('form').submit((e) => {
        e.preventDefault()
        socket.emit('chat message',$('#m').val())
        $('#m').val('')
        return false
    })
})