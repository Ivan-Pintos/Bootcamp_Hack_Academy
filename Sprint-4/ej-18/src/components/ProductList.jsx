import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import ProductActions from "../actions/ProductActions";
export default function () {
  const { ProductList } = useSelector((state) => state);
  const [inputProduct, setInputProduct] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => setProducts(ProductList), []);

  const handlerAddProduct = (productObject) => {
    dispatch(ProductActions.AddProduct(productObject));
    setProducts([...products, productObject]);
  };
  return (
    <div
      className="
      w-2/3 py-4 px-2
      border border-black dark:border-slate-400 rounded-md 
      bg-slate-500 dark:bg-slate-950
    "
    >
      <div className="flex">
        <input
          type="text"
          className="
          w-5/6  py-2 px-2
          bg-slate-200 rounded-s-sm outline-none
          text-slate-600
          "
          onChange={(e) => setInputProduct(e.target.value)}
        />
        <button
          className="bg-slate-300 w-1/6 rounded-e-sm"
          onClick={() =>
            handlerAddProduct({
              name: inputProduct,
              id: products[products.length - 1] + 1,
            })
          }
        >
          Icon
        </button>
      </div>
      <div className="">
        {products.length !== 0 &&
          products.map((product, index) => (
            <div
              className="flex justify-between items-center border-b py-4 mb-2 border-slate-300"
              key={index}
            >
              <input type="checkbox" className="mr-2" onChange={() => {}} />
              <span className={`text-slate-900 dark:text-slate-300`}>
                {product.name}
              </span>
              <button className="text-slate-900 dark:text-slate-300 border bg-slate-900 hover:bg-slate-800 border-slate-200 rounded px-2 py-1">
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
