const express = require('express');
const { loginSchema } = require('./schemas/auth');
const { sanitizeLogin } = require('./middleware/sanitize');
const { generateExpiry } = require('./utils/token');

const app = express();
app.use(express.json());

app.post('/login',
    sanitizeLogin,  // Task 2
    (req, res, next) => {
        const { error } = loginSchema.validate(req.body); // Task 1
        if (error) return res.status(400).json({ error: error.details[0].message });
        next();
    },
    (req, res) => {
        const expiry = generateExpiry(); // Task 3
        res.json({ token: 'fake-jwt', expiresAt: expiry });
    }
);

app.listen(3000, () => console.log('Auth micro on :3000'));
