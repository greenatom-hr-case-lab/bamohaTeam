let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
 
let Plan = require('../models/plan.schema')
let Comment = require('../models/comment.schema')
let Task = require('../models/task.schema')
let User = require('../models/user.schema');
const { use } = require('bcrypt/promises');

router.post('/createPlan', function (req, res, next){
    const plan = new Plan( req.body);
    plan.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        //return res.status(200).json({ message: "Новый план добавлен", ...plan.toJSON() })
        let employee = User.findById(plan.employee, (err, employee) => {
            employee.plans = [...employee.plans, plan._id]
            employee.save()
        })

        let boss = User.findById(plan.boss, (err, boss) => {
            boss.plans = [...boss.plans, plan._id]
            boss.save()
        })

        let hr = User.findById(plan.hr, (err, hr) => {
            hr.plans = [...hr.plans, plan._id]
            hr.save()
            return res.status(200).json({ message: "Новый план добавлен", ...hr.toJSON() })
           
        })
    })
})

router.post('/getPlansEmployeeNames', function(req, res, next){
       
    console.log(req.body);
        let user = User.findById(req.body._id, (err, user) => {
            
            if(!user){
             console.log(req.body) 
             return res.json({ success: false, message: "Fuck", err: err})}
            else{ //'Members', '_id name', null, { sort: { 'created_at': -1 } }
                    Plan.find({'_id': { $in: user.plans}})
                    .populate({path: 'employee', model: 'User', select: "name", sort: {'name': -1}})
                    .exec((err, plans) => {
                        if (err) return res.status(400).send(err);
                        return res.status(200).json({ sucess: true, plans})
                    }
                    )
            }
})
})

router.get('/getPlanInfo', function(req, res, next){
       
    Plan.findById(req.body._id)
    .populate({path: 'tasks', model: 'Task', populate: {
        path: 'comments', model: 'Comment'    
    }})
    .populate('comments')
    .exec((err, plan) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ sucess: true, plan})   
})
})

router.patch('/editPlan', function(req, res, next){

    Plan.findOneAndUpdate({_id : req.body._id},req.body, {                        
        upsert: true, new: true
    }
    , (err, plan) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ message: "План обновлен", ...plan.toJSON() })
    })

})

router.patch('/moveStage', function(req, res, next){
    Plan.findOneAndUpdate({_id : req.body._id},{stage: (req.body.stage + 1)}, {                        
        upsert: true, new: true
    }
    , (err, plan) => {
        if (err) return res.status(400).json({message: err})
        return res.status(200).json({ message: "Стадия обновлена", ...plan.toJSON() })
    })
})



module.exports = router;