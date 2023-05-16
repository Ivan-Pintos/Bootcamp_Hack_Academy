const { faker } = require("@faker-js/faker");
const { User } = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  for (let index = 0; index < 10; index++) {
    const user = new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.datatype.number({
        min: 18,
        max: 80,
      }),
    });
    await user.save();
  }

  console.log("[Database] Se corrió el seeder de Users.");
};
