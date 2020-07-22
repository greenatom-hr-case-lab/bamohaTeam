const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model('Task', taskSchema)