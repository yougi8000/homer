const { Router } = require('express');

const router = Router();

/* GET index page. */
/*auth #auth ici est une sous-route gérant la partie authentification */
router.post('/signup', function(req, res, next) {
    res.send('I am in POST signup');
  });


module.exports = router;