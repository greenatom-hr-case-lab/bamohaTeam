let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
 
let Plan = require('../models/plan.schema');

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

router.route('/getPlans').get( async (req, res) => {
    try {
        const plans = await User.findOne({ _id: req.params.id }).children;
        res.send(plans);
    } catch(e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
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