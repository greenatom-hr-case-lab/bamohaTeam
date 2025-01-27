const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let planSchema = new Schema({
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
        type: Number,
        min: 1,
        max: 6,
        defalut: 1, 
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

planSchema.pre('save', function (next) {
    let plan = this;

    if (plan.isModified('stage')) {
        console.log('plan was changed')
        } else {
        next()
    }
});

planSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.id;
    }
});
 
module.exports = mongoose.model('Plan', planSchema)
