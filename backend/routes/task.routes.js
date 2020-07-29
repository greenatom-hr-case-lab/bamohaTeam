let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let Task = require('../models/task.schema');
const { Plan } = require('../helpers/_db');

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

  });
  

router.post('/createTask', function (req, res, next){
    const task = new Task( {title : req.body.title, 
        description: req.body.description, 
        start_date: req.body.start_date, 
        end_date: req.body.end_date, 
        result: req.body.result, 
        comments: req.body.comments,
        grade: req.body.grade
    });
    task.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        let plan = Plan.findById(req.body._id, (err, plan) => {
            plan.tasks = [...plan.tasks, task._id]
            plan.save()
            return res.status(200).json({ message: "Новая задача добавлена", ...task.toJSON() })
           
        })
    })


})


router.route('/getTasks').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.patch('/editTask', function(req, res) {
   
    Task.findOneAndUpdate({_id : req.body._id},req.body, {                        
        upsert: true, new: true
    }
    , (err, task) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ message: "Задача обновлена", ...task.toJSON() })
    })
})

router.route('/removeTask').delete(async(req, res, next) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router;