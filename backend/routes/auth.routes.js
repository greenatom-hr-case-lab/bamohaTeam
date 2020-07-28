let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
    authService = require("../services/user.service")

const User = require('../models/user.schema');
const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');

router.get('/login', function(req, res, next){
    let user = User.findOne({email: req.body.email}, (err, user) => {
                
        if(!user)
         return res.json({ loginSuccess: false, message: "Auth failed, email not found"});
  
        user.comparePassword(req.body.password, (err, isMatch) => {
         if (!isMatch)
         return res.json({ loginSuccess: false, message: "Wrong password" });
        });

    console.log(req.body)
    console.log(res.body)
    })
})

router.get('/find', function(req, res, next){
    authService.getAll(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
    console.log(res.body)
})

router.get('/register', function(req, res, next){
    console.log(req.body)
    const user = new User(req.body);
    
    user.save((err) => {
        if (err) return res.json({ success: false, err }); 
        return res.status(200).json({ success: true })
    })

    console.log(res.body)
})

module.exports = router;