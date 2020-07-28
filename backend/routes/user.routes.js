let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

//let User = require('../models/user.schema');
const User = require('../models/user.schema');
const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');

router.get("/auth", (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        //isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        //lastname: req.user.lastname,
        role: req.user.role,
        //image: req.user.image,
        //cart: req.user.cart,
        history: req.user.history,
        plans: req.user.plans
    });
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

  });

router.route('/create').post( async (req, res, next) => {
    try {
    
    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post('/login', function(req, res, next){

    let user = User.findOne({email: req.body.email}, (err, user) => {
        if(!user)
         return res.json({ loginSuccess: false, message: "Auth failed, email not found"});
        //если да то да, если нет, то нет
        user.comparePassword(req.body.password, (err, isMatch) => {
         !isMatch ?
         ( res.json({ loginSuccess: false, message: "Wrong password" }))
         :
         ( res.json({user}));
        });


    console.log(req.body)
    console.log(res.body)
    })
})

router.get('/find', function(req, res, next){
    const user = User.find()
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
    console.log(res.body)
})

router.post('/register', function(req, res, next){
    console.log(req.body)
    const user = new User(req.body);
    
    user.save((err) => {
        if (err) return res.json({ success: false, err }); 
        return res.status(200).json({ success: true })
    })

    console.log(res.body)
})

module.exports = router;