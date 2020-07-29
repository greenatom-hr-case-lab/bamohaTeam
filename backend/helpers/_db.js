const mongoose = require('mongoose');
const config = require("../config/config");


mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


// Обработчики подключения
mongoose.connection.on("connected", () => {
    console.log("Connection Success");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect, error: " + err);
});

module.exports = {
    User: require('../models/user.schema'),
    Plan: require('../models/plan.schema'),
    Task: require('../models/task.schema'),
    Comment: require('../models/comment.schema')
};

process.on('uncaughtException', function (err) {
  console.log(err);
});