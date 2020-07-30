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
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
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
        if(!user){
         console.log(req.body) 
         return res.json({ loginSuccess: false, message: "Auth failed, email not found"})};
        //если да то да, если нет, то нет(тернарненько)
        user.comparePassword(req.body.password, (err, isMatch) => {
         !isMatch ?
         ( res.json({ loginSuccess: false, message: "Wrong password" }))
         :
         ( res.json({ ...user.toJSON() }));
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

router.put('/updatepassword', function(req, res, next){
    let user = User.findOneAndUpdate({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        plans: req.body.plans
    })
    //.then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    //.catch(err => next(err));
    //console.log(res.body)
})


router.post('/register', function(req, res, next){
    let user = User.findOne({email: req.body.email}, (err, user) => {
        if(!user){
            const user = new User(req.body);
            user.save((err) => {
                if (err) return res.json({ success: false, err }); 
                return res.status(200).json({ ...user.toJSON() })
            })
        } 
        else 
        {
            res.json({message: "email already exists"});
        }         
    })
})

module.exports = router;