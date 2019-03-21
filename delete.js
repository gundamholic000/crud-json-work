var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    // kita akan menghapus Starbucks
    let sql = `DELETE FROM user WHERE id=4`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});