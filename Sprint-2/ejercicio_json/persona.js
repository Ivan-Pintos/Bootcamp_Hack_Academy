class persona {
  constructor(
    firstname = "Sin_Asignar",
    lastname = "Sin_Asignar",
    age = "Sin_Asignar"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
}
const Maria = new persona("María", "López", 20);

module.exports = Maria;
