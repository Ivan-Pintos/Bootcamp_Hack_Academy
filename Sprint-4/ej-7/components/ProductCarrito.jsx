import "bootstrap/dist/css/bootstrap.min.css";

function Product({ name, count, takeFromCarrito }) {
  return (
    <li
      className="list-group-item d-flex gap-2"
      onClick={() => {
        takeFromCarrito();
      }}
    >
      <i class="bi bi-dash-circle"></i>
      {`${name} (Cantidad: ${count})`}
    </li>
  );
}

export default Product;
