const mysql = require("mysql2");

const pool = mysql.createPool(process.env.DATABASE_URL);

const promisePool = pool.promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("MySQL database connected successfully");
  connection.release();
});

module.exports = promisePool;