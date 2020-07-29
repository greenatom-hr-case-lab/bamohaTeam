let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
 
let Plan = require('../models/plan.schema')
let Comment = require('../models/comment.schema')
let Task = require('../models/task.schema')
let User = require('../models/user.schema');
const { use } = require('bcrypt/promises');

router.get("/", async (req, res) => {
    try {
        const plans = await Plan.find({});
        res.send(plans);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/createPlan', function (req, res, next){
    const plan = new Plan( req.body);
    plan.save((err) => {
        if (err) return res.json({ success: false, err: err.message }); 
        //return res.status(200).json({ message: "Новый план добавлен", ...plan.toJSON() })
        let employee = User.findById(plan.employee, (err, employee) => {
            employee.plans = [...employee.plans, plan._id]
            //return res.status(200).json({ message: "Новый план добавлен", ...employee.toJSON() })
            employee.save()
        })

        let boss = User.findById(plan.boss, (err, boss) => {
            boss.plans = [...boss.plans, plan._id]
           // return res.status(200).json({ message: "Новый план добавлен", ...boss.toJSON() })
           boss.save()
        })

        let hr = User.findById(plan.hr, (err, hr) => {
            hr.plans = [...hr.plans, plan._id]
            hr.save()
            return res.status(200).json({ message: "Новый план добавлен", ...hr.toJSON() })
           
        })
    })


})



router.get('/getPlans', function(req, res, next){
       
        let user = User.findById(req.body._id, (err, user) => {
            
            if(!user){
             console.log(req.body) 
             return res.json({ success: false, message: "Fuck", err: err})}
            else{
                let plansID = user.plans
                    Plan.find({'_id': { $in: plansID}})  
                    .exec((err, plans) => {
                        if (err) return res.status(400).send(err);
                        return res.status(200).json({ sucess: true, plans})
                    }
                    )
            }
})
})

router.get('/getPlanInfo', function(req, res, next){
       
    let plan = Plan.findById(req.body._id, (err, plan) => {
        
        if(!plan){
         console.log(req.body) 
         return res.json({ success: false, message: "Fuck", err: err})}
        else{
            console.log(req.body) 
            let planTasksID = plan.tasks
                Task.find({'_id': { $in: planTasksID}})
                .exec((err, planTasks) => {               
                   /* Comment.find({'_id': { $in: taskCommentsID}})
                    .exec((err, taskComments) => {*/
                        if (err) return res.status(400).send(err);                        
                        let planCommsID = plan.comments
                         Comment.find({'_id': { $in: planCommsID}})
                             .exec((err, planComments) => {
                             if (err) return res.status(400).send(err);
                             return res.status(200).json({ sucess: true, plan, planTasks, planComments})
                          })
                        })                
        }
    })
})

router.put('/editPlan', function(req, res, next){
    let plan = Plan.findOneAndUpdate(req.body._id, {$set: req.body}, (err, plan) => {
        plan.save()
        return res.status(200).json({ message: "План обновлен", ...plan.toJSON() })
    })

})

router.route('/moveStage').put(async (req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router;