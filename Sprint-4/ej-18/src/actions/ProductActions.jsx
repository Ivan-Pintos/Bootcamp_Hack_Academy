const AddProduct = (product) => {
  return { type: "ADD_PRODUCT", payload: { data: product } };
};

const RemoveProduct = {
  type: "REMOVE_PRODUCT",
};

export default { AddProduct, RemoveProduct };
