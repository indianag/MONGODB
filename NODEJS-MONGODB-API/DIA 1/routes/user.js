const express = require('express');
const userSchema = require('../userMDB')
const router = express.Router();

//create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({messagge: error}));
});




