const Count = {
  type: "COUNT",
};

const Discount = {
  type: "DISCOUNT",
};

const SetNumber = (value) => {
  return { type: "SET", payload: value };
};

export default { Count, Discount, SetNumber };
