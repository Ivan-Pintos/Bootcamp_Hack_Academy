const connection = require("./connection");
module.exports = {
  SelectAllUsers: function SelectAllUsers() {
    const users = connection.CustomQuery("SELECT * FROM users");
    return users;
  },
  SelectUser: function SelectUser(id) {
    const users = connection.CustomQuery(
      `SELECT * FROM users WHERE id = ${id}`
    );
    return users;
  },
  InsertUser: function InsertUser(values) {
    const { firstname, lastname, age } = values;
    connection.CustomQuery(
      `INSERT INTO users (firstname, lastname , age) VALUES (?,?,?)`,
      [firstname, lastname, age]
    );
  },
  Edituser: function Edituser(id, values) {
    const { firstname, lastname, age } = values;
    connection.CustomQuery(
      `UPDATE users set firstname =  "${firstname}" , lastname =" ${lastname}" , age =  ${age}  WHERE id = ${id}`
    );
  },
  DeleteUser: function DeleteUser(id) {
    connection.CustomQuery(`DELETE FROM users WHERE id = ${id}`);
  },
};
