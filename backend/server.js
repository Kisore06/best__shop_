// import express from 'e'

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mysql = require('mysql');

// const app = express();
// app.use(express.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'naveen',
//   password: 'naveen',
//   database: 'best_shop'
// });

// // Register route
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert user into the database
//     db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error registering user');
//       } else {
//         res.status(201).send('User registered successfully');
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error registering user');
//   }
// });

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Check if the user exists in the database
//   db.query('SELECT * FROM admin WHERE username = ?', [username], async (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error logging in');
//     } else if (results.length === 0) {
//       res.status(401).send('Invalid username or password');
//     } else {
//       const user = results[0];

//       try {
//         // Compare the provided password with the hashed password
//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (isPasswordValid) {
//           // Generate a JSON Web Token
//           const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
//           res.json({ token });
//         } else {
//           res.status(401).send('Invalid username or password');
//         }
//       } catch (err) {
//         console.error(err);
//         res.status(500).send('Error logging in');
//       }
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 3000');
// });