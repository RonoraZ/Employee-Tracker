//Creating a connection  
 
const mysql = require("mysql");  
require('dotenv').config(); 


const connection = mysql.createConnection({ 
    host:"localhost", 
    port:'3001',
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database:  process.env.DB_DATABASE
}); 


module.exports = connection;