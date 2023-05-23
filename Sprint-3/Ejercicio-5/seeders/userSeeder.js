const { faker } = require("@faker-js/faker");
const { User } = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  const users = [];
  for (let index = 0; index < 10; index++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.datatype.number({
        min: 18,
        max: 80,
      }),
    });
  }
  await User.insertMany(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
