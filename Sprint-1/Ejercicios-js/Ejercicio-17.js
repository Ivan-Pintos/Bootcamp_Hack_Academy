function optimalPath(Directions) {
  let FinalDirections = [];
  for (let index = 0; index < Directions.length; index++) {
    if (
      (Directions[index] === "ESTE" && Directions[index + 1] != "OESTE") ||
      Directions[index - 1] != "OESTE" ||
      (Directions[index] === "OESTE" && Directions[index + 1] != "ESTE") ||
      Directions[index - 1] != "ESTE" ||
      (Directions[index] === "NORTE" && Directions[index + 1] != "SUR") ||
      Directions[index - 1] != "SUR" ||
      (Directions[index] === "SUR" && Directions[index + 1] != "NORTE") ||
      Directions[index - 1] != "NORTE"
    ) {
      (Directions[index] === "ESTE" &&
        FinalDirections[FinalDirections.length - 1] == "OESTE") ||
      (Directions[index] === "OESTE" &&
        FinalDirections[FinalDirections.length - 1] == "ESTE") ||
      (Directions[index] === "SUR" &&
        FinalDirections[FinalDirections.length - 1] == "NORTE") ||
      (Directions[index] === "NORTE" &&
        FinalDirections[FinalDirections.length - 1] == "SUR")
        ? FinalDirections.pop()
        : FinalDirections.push(Directions[index]);
    }
  }
  return FinalDirections;
}

console.log(
  optimalPath(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"])
);
