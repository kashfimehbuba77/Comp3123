const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

// Middleware
app.use(express.json());

// User routes
app.use('/api/v1/user', userRouter);

// Serve home.html
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('<h1>Server Error</h1>');
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
