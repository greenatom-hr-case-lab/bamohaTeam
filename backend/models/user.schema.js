const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
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
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ['hr', 'boss', 'employee'],
        default: 'employee',
        required: false
    },
    plans: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plan'
    }]

}, {
    collection: 'users'
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.id;
    }
});

userSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('password')) {
        console.log('password was changed')
        await bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
});



userSchema.methods.comparePassword = async function (plainPassword, cb) {
password = this.password
  await bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
       console.log("2", plainPassword, this.password, isMatch)
       if (err) return cb(err);
       cb(null, isMatch)
    })
  
}

module.exports = mongoose.model('User', userSchema)

