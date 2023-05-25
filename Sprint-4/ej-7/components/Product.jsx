function Product({ name, addCarrito }) {
  return (
    <li
      className="list-group-item d-flex gap-2"
      onClick={() => {
        addCarrito();
      }}
    >
      <i class="bi bi-plus-circle"></i>
      {name}
    </li>
  );
}

export default Product;
