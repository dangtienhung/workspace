require('dotenv').config();
const mysql = require('mysql2');

// create the connection to database
// const connection = mysql.createConnection({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	port: process.env.DB_PORT, // defautl port: 3306
// 	database: process.env.DB_NAME,
// });

// connection pools
const connection = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT, // defautl port: 3306
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = connection;
