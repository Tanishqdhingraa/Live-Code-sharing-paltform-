// Import dependencies
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Initialize express app
const app = express(); 

// Create an HTTP server using Express
const server = http.createServer(app);

// Initialize Socket.io with the server
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins (for development)
    methods: ["GET", "POST"],
  },
});

// Define a test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('⚡ A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
