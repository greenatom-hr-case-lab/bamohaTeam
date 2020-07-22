let mongoose = require('mongoose'),
    user = require("../models/user.schema")

exports.userLogin = async function({email, password}) {
    const user = await user.findOne({email});
    if (user && password) {
        return{
            ...user.toJSON
        }
    }
}