const AddProduct = (product) => {
  return { type: "ADD_PRODUCT", payload: product };
};

const RemoveProduct = (id) => {
  return { type: "REMOVE_PRODUCT", payload: id };
};

const SelectionProduct = (id) => {
  return { type: "SELECTION_PRODUCT", payload: id };
};
export default { AddProduct, RemoveProduct, SelectionProduct };
