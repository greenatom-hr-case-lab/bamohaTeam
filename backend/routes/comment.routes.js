let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let Plan = require('../models/plan.schema')
let Comment = require('../models/comment.schema')
let Task = require('../models/task.schema');

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.send(comments);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }

  });


router.post('/createPlanComment', (req, res, next) => {
    let comment = new Comment( {author: req.body.author_id, text: req.body.text});
    comment.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        let plan = Plan.findById(req.body.plan_id, (err, plan) => {
            plan.comments = [...plan.comments, comment._id]
            plan.save()
            return res.status(200).json({ message: "Новый комментарий добавлен", ...comment.toJSON() })
           
        })
    })

});

router.post('/createTaskComment', (req, res, next) => {
    let comment = new Comment( {author: req.body.author_id, text: req.body.text});
    comment.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        let task = Task.findById(req.body.task_id, (err, task) => {
            task.comments = [...task.comments, comment._id]
            task.save()
            return res.status(200).json({ message: "Новый комментарий добавлен", ...comment.toJSON() })
           
        })
    })

});

router.delete('/deleteTaskComment', (req, res, next) => {

    Comment.findOneAndDelete({_id: req.body.comment_id}, (err) => {
        if (err) return res.json({ success: false, err: err.message }); 
       // return res.status(200).json({ message: "Комментарий удален" })
        let task = Task.findById(req.body.task_id, (err, task) => {
            task.comments = task.comments.filter(_id => _id != req.body.comment_id);
            //task.comments = [...task.comments, comment._id]
            task.save()
        return res.status(200).json({ message: "Комментарий удален"})
           
        })
    })

});

router.delete('/deletePlanComment', (req, res, next) => {

    Comment.findOneAndDelete({_id: req.body.comment_id}, (err) => {
        if (err) return res.json({ success: false, err: err.message }); 
       // return res.status(200).json({ message: "Комментарий удален" })
        let plan = Plan.findById(req.body.plan_id, (err, plan) => {
            plan.comments = plan.comments.filter(_id => _id != req.body.comment_id);
            //task.comments = [...task.comments, comment._id]
            plan.save()
        return res.status(200).json({ message: "Комментарий удален"})
           
        })
    })

});

router.route('/getPlansComments').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/getTasksComments').get(async(req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/deleteComment').delete(async(req, res, next) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router;