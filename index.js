const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./models/model');
const LoginAttempt = require('./models/LoginAttempt'); // Import the LoginAttempt model
const jwt = require('jsonwebtoken');
const middleware = require('./middleware/middleware');
const cors = require('cors');

const app = express();

// Hardcoded MongoDB connection URI and JWT secret
const uri = 'mongodb+srv://narasimhagupta2004:NkKSM59KEWEfNABE@ecomm.m3e8i.mongodb.net/ecomm?retryWrites=true&w=majority';
const JWT_SECRET = 'jwtSecret'; // Hardcoded JWT secret

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

app.use(express.json());
app.use(cors({ origin: "*" }));

// Registration route
app.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body;

        // Check if user already exists
        let exist = await Registeruser.findOne({ email });
        if (exist) {
            return res.status(400).send('User Already Exists');
        }
        
        if (password !== confirmpassword) {
            return res.status(400).send('Passwords do not match');
        }

        let newUser = new Registeruser({
            username,
            email,
            password // Store password as plain text (not recommended)
        });

        await newUser.save();
        console.log("Saved user:", newUser);
        res.status(200).send('Registered Successfully');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Prepare to log the login attempt
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // Get client IP address
        const loginAttempt = new LoginAttempt({ email, success: false, ipAddress });

        let exist = await Registeruser.findOne({ email });
        
        if (!exist) {
            // Log failed attempt
            await loginAttempt.save();
            return res.status(400).send('User not found');
        }

        // Check if password matches (this should ideally be hashed)
        if (exist.password !== password) { // Compare plain text passwords (not recommended)
            // Log failed attempt
            await loginAttempt.save();
            return res.status(400).send('Invalid credentials');
        }

        let payload = {
            user: {
                id: exist.id
            }
        };

        // Use an async IIFE to handle await inside jwt.sign callback
        jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, async (err, token) => {
            if (err) throw err;

            // Log successful attempt
            loginAttempt.success = true; // Update success status
            await loginAttempt.save(); // Save successful attempt

            return res.json({ token });
        });
    } catch (err) {
         console.log(err);
         return res.status(500).send('Server Error');
     }
});

// Profile route
app.get('/components/Home', middleware, async (req, res) => {
    try {
         let exist = await Registeruser.findById(req.user.id);
        
         if (!exist) {
             return res.status(400).send('User not found');
         }
        
         res.json(exist);
     } catch (err) {
          console.log(err);
          return res.status(500).send('Server Error');
      }
});

// Start server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
