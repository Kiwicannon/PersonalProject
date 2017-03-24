const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

const config = require('./config.js');

var db = massive.connectSync({connectionString : config.elephantsql});

app.set('db', db);


db.set_products((err, data) => {
    if (err) console.log(err);
    else console.log('All tables successfully reset');
})
 
// Sunglasses
app.get('/api/products', function(req, res, next) {
  db.get_sunglasses(function(err, sunglasses) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(sunglasses)
      console.log(sunglasses)
    }
  });
})




app.listen(config.port, function() {
    console.log('Connected on port 9090');
})



// db.set_products(function(err){
//     if (err) return console.log('set_products.sql', err);        
//     else console.log("All tabkes successfully reset");
// });

// var db = massive.connect({connectionString: config.elephantsql},
// function(err, localdb){
//   db= localdb;
//   app.set('db', db)
//   db.set_products(function(err){
//     if (err) return console.log('set_products.sql', err);        
//     else console.log("All tables successfully reset");
// })});