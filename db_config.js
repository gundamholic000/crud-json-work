var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "septiyo23",
    database: "crud_json"
});

module.exports = db;

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });