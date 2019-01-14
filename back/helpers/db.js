const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'wilder',
  password : '*********',
  database : 'homer'
});
module.exports  =  connection;
