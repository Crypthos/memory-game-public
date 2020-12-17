const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
}); // allows Cross-Origin Resource Sharing(CORS)

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Welcome to the memory chat!'));

/**
 * socket.io connection and event handling
 */
io.on('connection', (socket) => {
//  Show welcome message
  socket.emit('message', 'Welcome to MemoryChat');

  // Checks user disconnections
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Broadcast/Send a message to the server
  socket.on('message', (msg) => {
    console.log(msg);
    socket.broadcast.emit('message-broadcast', msg);
  });

//  Broadcast user disconnections to all users
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  });


});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


