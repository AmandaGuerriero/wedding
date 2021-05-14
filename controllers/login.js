const jwt = require('jsonwebtoken');
const db = require("../models");
const { findByEmail } = require('./user');
require('dotenv').config();
const secret = process.env.SECRET;

module.exports = {
    authenticate(req, res) {
        if (req.body.email && req.body.password) {
            // Fetch user's data and verify credentials
            const user = findByEmail(req.body.email);

            let token = jwt.sign({user}, secret, { expiresIn: '24h' });
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
            });
        } else {
            res.json({
                error: 'We\'ve couldn\'t sign you in 😔'
            });
        }

    }
};
   