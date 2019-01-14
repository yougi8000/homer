const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'wilder',
  password : 'Bordeaux5a#',
  database : 'homer'
});
module.exports  =  connection;