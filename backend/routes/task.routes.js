let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let Task = require('../models/task.schema');

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

  });
  

router.route('/createTask').post(async(req, res, next) => {
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


router.post('/createTask', function (req, res, next){
    const task = new Task( req.body);
    task.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        return res.status(200).json({ message: "Новая задача добавлен", ...task.toJSON() })
        /*let hr = User.findById(plan.hr, (err, hr) => {
            hr.plans = [...hr.plans, plan._id]
            hr.save()
            return res.status(200).json({ message: "Новый план добавлен", ...hr.toJSON() })
           
        })*/
    })


})


router.route('/getTasks').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/editTask').put(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/removeTask').delete(async(req, res, next) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router;