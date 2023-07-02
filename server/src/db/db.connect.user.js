const mysql = require("mysql2");
const dbConfigUser = require("../configs/db.config-user");
const fs = require("fs");
const path = require("path");
const pathQueryUser = path.join(__dirname, "../../query_database_user.sql");

const connectMysql = mysql.createConnection({
  host: dbConfigUser.host,
  user: dbConfigUser.user,
  password: dbConfigUser.password,
  database: dbConfigUser.database,
});

connectMysql.connect(function (err) {
  if (err) throw err;
  console.log("Connect successfully");
  fs.readFile(pathQueryUser, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Create table successfully");
    connectMysql.query(data, function (err, result) {
      if (err) {
        console.log("Result error");
      } else {
        console.log("Table successfully");
      }
      // connectMysql.end();
    });
  });
});

module.exports = connectMysql;
