var express = require('express');
var router = express.Router();
require('../models/connexion')
const trips = require('../models/trips')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
let arrayBook = []

router.post('/idTrip', (req, res) => {

  //faire une boucle pour verifier si l'id est deja dans le tableau
  if (arrayBook.includes(req.body.idTrip)) {
    res.json("you already booked this trip")
  }
  else {
    res.json("you booked this trip")
    arrayBook.push(req.body.idTrip)
    console.log(arrayBook)
  }

})

router.get('/idTrip', (req, res) => {

  for (let i = 0; i < idOrder.length; i++) {


    trips.findById(idOrder[0], (err, data) => {
      if (err) {
        res.json(err)
      } else {
        res.json(data)
        idOrder.shift()

      }
    }
    )

  }
})


module.exports = router;
