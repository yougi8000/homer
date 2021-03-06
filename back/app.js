const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
const authRouter = require('./routes/auth/auth');
const router = express.Router();

const indexRouter = require('./routes/index');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));
app.use('/auth', authRouter);

app.get("/", (req,res) => {
  res.send("youhou");
})
/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  4000, function(){
  console.log('Listening on port '  +  server.address().port);
});

module.exports = app;
