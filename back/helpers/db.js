const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : '*********',
  password : '*********',
  database : 'homer'
});
module.exports  =  connection;
