let mongoose = require('mongoose'),
    //user = require("../models/user.schema"),
    db = require('../helpers/_db'),
    User = db.User;

const bcrypt = require('bcrypt');



async function signIn ({email, password}) {
    let user = await User.findOne({email});
    if (user && bcrypt.compareSync(password, user.hash))  {
       const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return{
            ...user.toJSON(),
            token
          //result
        };
        console.log(result)
    }
}

async function getAll(){
    const user = await User.find();
    return await User.find()
}

module.exports = {
    signIn,
    getAll
}   