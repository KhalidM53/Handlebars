var mysql = require('mysql');
var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
    connection = mysql.createConnection({
        host: 'yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'k2tzba1sftx9ns63',
        password:"d774jqp5a177xsu2",
        database: "oslqtikjh0oo79u7" 
    });
// };

connection.connect();
module.exports = connection;