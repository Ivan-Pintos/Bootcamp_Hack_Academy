function actualDate(date) {
  return `Se llamó al servidor el ${date.getDate()} de ${date.toLocaleString(
    "es",
    { month: "long" }
  )} de ${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} (${date.toLocaleString(
    "es",
    { weekday: "long" }
  )}).`;
}

module.exports = actualDate;
