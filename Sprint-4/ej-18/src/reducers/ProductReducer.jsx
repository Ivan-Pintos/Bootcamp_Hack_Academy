export default (
  state = [
    { id: 1, name: "Manzana", selected: false },
    { id: 2, name: "Pera", selected: false },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    case "SELECTION_PRODUCT":
      const newState = [];
      for (let index = 0; index < state.length; index++) {
        const item = state[index];
        if (item.id === action.payload) {
          newState.push({ ...item, selected: !item.selected });
        } else {
          newState.push({ ...item });
        }
      }
      return newState;
    default:
      return state;
  }
};
