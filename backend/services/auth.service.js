let mongoose = require('mongoose'),
    //user = require("../models/user.schema"),
    db = require('../config/_db'),
    User = db.User;

 

async function signIn ({email, password}) {
    let result = await User.findOne({email});
    //if (user && password) {
        return{
           //...result.toJSON
           result
        }
   // }
}

async function getAll(){
    //const userResponse = await user.find();
    return await User.find()
}

module.exports = {
    signIn,
    getAll
}   