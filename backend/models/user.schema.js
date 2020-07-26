const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          },
          required: true,
          unique: true
          
    },
    password: { 
        type: String, 
        required: true 
    },
    role: {
        type: String,
        enum: ['hr', 'boss', 'employee'],
        default: 'employee',
        required: true
    },
    plans: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plan'
    }]

}, {
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema)

