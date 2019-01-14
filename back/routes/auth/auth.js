const express = require('express');

const connection = require('../../helpers/db');

const router = express.Router();

/* GET index page. */
/*auth #auth ici est une sous-route gérant la partie authentification */
router.post('/signup', function(req, res, next) {
  const formData = req.body;
  connection.query('INSERT INTO users SET ?', formData, function (err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200).json({
        flash:'User has been signed up !'
      });
    }
  });
});


module.exports = router;