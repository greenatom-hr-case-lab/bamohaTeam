const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let planSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    boss: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    hr: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    position: {
        type: String,
        required: true
    },
    created_at: { type: Date, default: Date.now },
    start_date: { type: Date, default: Date.now },
    end_date: Date,
    stage: {
        type: String,
        enum: [ 'Plan_creation',
                'Employee_fill_up',
                'Boss_check',
                'In_progress',
                'Boss_evaluation',
                'Evaluation_complete'],
        default: 'Plan_creation',
        required: true
    },
    grade: {
        type: String,
        enum: ['A', 'B', 'C', 'D', 'E'],
    },
    result: {
        type: String,
        enum: ['Done', 'Not_done'],
    },
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    }],
    tasks:  [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Task'
    }]
}, {
    collection: 'plans'
});

module.exports = mongoose.model('Plan', planSchema)