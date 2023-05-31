export default (
  state = [
    { name: "Manzana", id: 1 },
    { name: "Pera", id: 2 },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.data];
    case "DEL_PRODUCT":
      return state.filter((item) => item.data.id !== action.id);
    default:
      return state;
  }
};
