const connection = require("./connection");
module.exports = {
  SelectAllUsers: async function SelectAllUsers() {
    const bd = await connection();
    const [users] = await bd.execute("SELECT * FROM users");
    return users;
  },
  InsertUser: async function InsertUser(values) {
    const bd = await connection();
    const { firstname, lastname, age } = values;
    await bd.execute(
      `INSERT INTO users (firstname, lastname , age)
      VALUES (?,?,?)`,
      [firstname, lastname, age]
    );
  },
  SelectUser: async function SelectUser(id) {
    const bd = await connection();
    const [users] = await bd.execute(`SELECT * FROM users WHERE id = ${id}`);
    return users;
  },
  Edituser: async function Edituser(id, values) {
    const { firstname, lastname, age } = values;
    const bd = await connection();
    const [users] = await bd.execute(
      `UPDATE users set firstname =  "${firstname}" , lastname =" ${lastname}" , age =  ${age}  WHERE id = ${id}`
    );
    return users;
  },
  DeleteUser: async function DeleteUser(id) {
    const bd = await connection();
    const [users] = await bd.execute(`DELETE FROM users WHERE id = ${id}`);
    return users;
  },
};
