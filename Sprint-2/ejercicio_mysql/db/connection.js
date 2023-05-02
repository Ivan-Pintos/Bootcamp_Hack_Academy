const mysql = require("mysql2/promise");

async function connectionDB() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "ha_ejercicio_20",
  });
  return connection;
}

module.exports = connectionDB;
