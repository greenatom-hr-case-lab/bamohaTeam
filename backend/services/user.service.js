let mongoose = require('mongoose'),
    //user = require("../models/user.schema"),
    db = require('../helpers/_db'),
    User = db.User;

const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');



async function signIn ({email, password}) {
    let user = await User.findOne({email});
    
        if(!user)
            return({ loginSuccess: false, message: "Auth failed, email not found"});
    user.comparePassword(password, (err, isMatch) => {
        if (!isMatch)
            return({ loginSuccess: false, message: "Wrong password" });
        });
    //return { ...user.toJSON()}
   
}

async function getAll(){
    const user = await User.find();
    return await User.find()
}

async function signUp (body){
    console.log(body)
    const user = new User(body);
    
    user.save((err) => {
        if (err) return ({ success: false, err }); 
        return {success: true}
    })
}

module.exports = {
    signIn,
    getAll,
    signUp
}   