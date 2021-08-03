//Creating a connection  
 
const mysql = require("mysql");   
const util = require("util"); 

require('dotenv').config();



const connection = mysql.createConnection({ 
    host:"localhost", 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME
});  



connection.query = util.promisify(connection.query); 

module.exports = connection;
