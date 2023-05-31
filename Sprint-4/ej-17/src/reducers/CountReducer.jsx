export default (state = 0, action) => {
  switch (action.type) {
    case "COUNT":
      return state + 1;
    case "DISCOUNT":
      return state - 1;
    case "SET":
      return (state = action.payload);
    default:
      return state;
  }
};
