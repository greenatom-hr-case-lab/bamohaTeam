const mongoose = require('mongoose');
const config = require("../config/config");


mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});


// Обработчики подключения
mongoose.connection.on("connected", () => {
    console.log("Connection Success");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect, error: " + err);
});

module.exports = {
    User: require('../models/user.schema')
};

process.on('uncaughtException', function (err) {
  console.log(err);
});