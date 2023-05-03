const mysql = require("mysql2/promise");

const ConnectionConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "ha_ejercicio_20",
};

async function CustomQuery(QueryString, Values = []) {
  try {
    const connection = await mysql.createConnection(ConnectionConfig);
    const [results, fields] = await connection.execute(QueryString, Values);
    connection.end();
    return results;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { CustomQuery };
