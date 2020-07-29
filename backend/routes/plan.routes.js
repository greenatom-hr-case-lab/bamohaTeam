let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
 
let Plan = require('../models/plan.schema')
let User = require('../models/user.schema');
const { use } = require('bcrypt/promises');

router.get("/", async (req, res) => {
    try {
        const plans = await Plan.find({});
        res.send(plans);
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.route('/createPlan').post(async(req, res, next) => {
    const newPlan = new Plan({
        employee: req.body.employee,
        boss: req.body.boss,
        hr: req.user._id,
        position: req.body.position,
        created_at: req.body.created_at,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        stage: req.body.stage,
        grade: req.body.grade,
        result: req.body.result,
        });
    const newPlanCreated = await newPlan.save();
    res.status(201).send({ message: "Новый план добавлен", data: newOrderCreated });

});

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
                        return res.status(200).json({ sucess: true, plans, plansID})
                    }
                    )
            }
})
})

router.route('/editPlan').put(async (req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.route('/moveStage').put(async (req, res) => {
    try {

    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router;