import { useState } from "react";
import Product from "../components/Product";
import data from "../data";
import ProductCarrito from "../components/ProductCarrito";

function App() {
  const [carritoGroceries, setCarritoGroceries] = useState([]);
  const [groceries, setGrocery] = useState(data);

  const addToCart = (grocery) => {
    const existingItem = carritoGroceries.some(
      (item) => item.id === grocery.id
    );

    if (existingItem) {
      const updatedCarritoGroceries = carritoGroceries.map((item) => {
        if (item.id === grocery.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      setCarritoGroceries(updatedCarritoGroceries);
    } else {
      setCarritoGroceries((prevState) => [
        ...prevState,
        { ...grocery, count: 1 },
      ]);
    }
  };
  const takeFromCart = async (grocery) => {
    const updatedCarritoGroceries = carritoGroceries.map((item) => {
      if (item.id === grocery.id) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          return null;
        }
      }
      return item;
    });

    setCarritoGroceries(
      updatedCarritoGroceries.filter((item) => item !== null)
    );
  };

  return (
    <div className="container d-flex gap-2 justify-content-between">
      <div className=" w-100">
        <h1 className="h2 text-center">Productos disponibles</h1>
        <ul className="list-group w-100">
          {groceries.map((grocerie) => {
            return (
              <Product
                key={grocerie.id}
                name={grocerie.name}
                addCarrito={() => addToCart(grocerie)}
                count
              />
            );
          })}
        </ul>
      </div>
      <div className=" w-100">
        <h1 className="h2 text-center">Productos Carrito</h1>
        <ul className="list-group">
          {carritoGroceries.map((carritoGrocery) => {
            return (
              <ProductCarrito
                key={carritoGrocery.id}
                name={carritoGrocery.name}
                count={carritoGrocery.count}
                takeFromCarrito={() => takeFromCart(carritoGrocery)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
