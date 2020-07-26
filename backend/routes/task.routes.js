let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let task = require('../models/task.schema');

router.route('/create').post(async(req, res, next) => {
    try {
        const task = new Task(req.body);

        await task.save((err) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({ success: true })
        })

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.route('/').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/edit/:id').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/delete/:id').delete(async(req, res, next) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

// router.route('/update/:id').put((req, res, next) => {
    // try {

    // } catch(e) {

    // }
// })



module.exports = router;