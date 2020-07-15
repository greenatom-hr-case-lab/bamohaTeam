var express = require('express');
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb+srv://DmitriyBor:Xnn2qsr6VN7fFu96@adaptaionplan.koqlm.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    client.close();
});