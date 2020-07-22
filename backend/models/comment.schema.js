const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    text: String,
    created_at: { type: Date, default: Date.now },
}, {
    collection: 'comments'
});

module.exports = mongoose.model('Comment', commentSchema)