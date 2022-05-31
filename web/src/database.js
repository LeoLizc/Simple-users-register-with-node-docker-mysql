// create connection to the mysql database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'pass123',
    database: 'my_db'
});

// try to connect to the database


connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database')
    }else
    console.log('Connected to database');
})

// reconnect to the database if the connection on fails

connection.promiseQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};


// export the connection
module.exports = connection;