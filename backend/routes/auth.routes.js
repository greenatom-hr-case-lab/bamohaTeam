let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
    service = require("../services/auth.service")

let user = require('../models/user.schema');

router.post('/login', function(req, res){
    service.userLogin(req.body)
})