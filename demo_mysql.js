const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_nodejs",
  charsetType: "utf8_unicode_ci",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  //   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  //   var sql = "INSERT INTO customers (name, address) VALUES ('Can Tho University', 'CanTho, VietNam')";
  var sql = "SELECT * FROM customers";
  //   var sql = "SELECT * FROM customers WHERE address='Nguyen Van Cu'";
  //   var sql ="DELETE FROM customers WHERE address = 'NVC'";
  // var sql = "UPDATE customers SET address = 'NVC' WHERE name = 'FPT University'";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Working success");
  });
});

// con.end();
