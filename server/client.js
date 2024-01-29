var io = require('socket.io')

var socket = io.connect('localhost:3000', {'forceNew':true})
