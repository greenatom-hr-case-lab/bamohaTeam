let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let User = require('../models/user.schema');

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

router.route('/login').get(async(req, res) => {
    try {
    
    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

// router.route('/edit/:id').get(async(req, res) => {
//     try {
    
//     } catch(e) {

//     }
// })


// router.route('/update/:id').put(async(req, res, next) => {
//     try {
    
//     } catch(e) {

//     }
// })

// router.route('/delete/:id').delete(async(req, res, next) => {
//     try {
    
//     } catch(e) {

//     }
// })

module.exports = router;