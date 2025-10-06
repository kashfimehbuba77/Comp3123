const express = require('express');
const fs = require('fs');
const path = require('path');

const routerUser = express.Router();

/**
 * Helper function to read user.json file
 */
function getUserData() {
  const dataPath = path.join(__dirname, '../user.json');
  try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(rawData);
  } catch (err) {
    throw new Error('Error reading user.json file: ' + err.message);
  }
}

/**
 * 1. /profile Route
 * - Return all details from user.json file to client as JSON
 */
routerUser.get('/profile', (req, res) => {
  try {
    const user = getUserData();
    res.json(user);
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Error reading user data',
      error: err.message
    });
  }
});

/**
 * 2. /login Route
 * - Accept username & password as JSON body
 * - Validate credentials with user.json
 */
routerUser.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        message: 'Username and password are required'
      });
    }

    const user = getUserData();

    // Validate username
    if (username !== user.username) {
      return res.json({
        status: false,
        message: 'User Name is invalid'
      });
    }

    // Validate password
    if (password !== user.password) {
      return res.json({
        status: false,
        message: 'Password is invalid'
      });
    }

    // Successful login
    res.json({
      status: true,
      message: 'User Is valid'
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Server error: ' + err.message
    });
  }
});

/**
 * 3. /logout Route
 * - Accept username as URL parameter
 * - Return HTML message: <b>{username} successfully logout.</b>
 */
routerUser.get('/logout/:username', (req, res) => {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).send('<b>Username is required to logout.</b>');
    }

    res.send(`<b>${username} successfully logout.</b>`);
  } catch (err) {
    res.status(500).send('<b>Server Error while logging out.</b>');
  }
});

module.exports = routerUser;
