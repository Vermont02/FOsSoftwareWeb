const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('staticirc'));

let usernames = {};

io.on('connection', (socket) => {
  console.log('A user has connected');

  socket.emit('request username');

  socket.on('set username', (username) => {
    usernames[socket.id] = username;
    console.log(`${username} has joined the chat`);
    socket.emit('chat message', `Welcome, ${username}!`);
    io.emit('chat message', `${username} has joined the chat.`);
  });

  socket.on('chat message', (msg) => {
    const username = usernames[socket.id] || 'Anonymous';
    io.emit('chat message', `${username}: ${msg}`);
  });

  socket.on('disconnect', () => {
    const username = usernames[socket.id] || 'Anonymous';
    console.log(`${username} disconnected`);
    io.emit('chat message', `${username} has left the chat.`);
    delete usernames[socket.id];
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

