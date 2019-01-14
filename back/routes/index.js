var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
  if(error)
    res.status(500).end();
res.end();
});

module.exports = router;
