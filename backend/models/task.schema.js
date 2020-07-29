const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    created_at: { type: Date, default: Date.now },
    start_date: { type: Date, default: Date.now },
    end_date: Date,
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
    }]
}, {
    collection: 'tasks'
});

taskSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.id;
    }
});

module.exports = mongoose.model('Task', taskSchema)