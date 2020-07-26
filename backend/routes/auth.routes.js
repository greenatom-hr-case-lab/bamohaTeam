let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
    authService = require("../services/user.service")

let user = require('../models/user.schema');

router.get('/login', function(req, res, next){
    authService.signIn(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
    console.log(req.body)
    console.log(res.body)
})

router.get('/find', function(req, res, next){
    authService.getAll(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
    console.log(res.body)
})

module.exports = router