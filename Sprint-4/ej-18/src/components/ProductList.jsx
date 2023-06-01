import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import ProductActions from "../actions/ProductActions";
export default function () {
  const { ProductList } = useSelector((state) => state);
  const [inputProduct, setInputProduct] = useState("");
  const dispatch = useDispatch();

  const handlerAddProduct = (productObject) => {
    dispatch(ProductActions.AddProduct(productObject));
  };
  const handlerSelectProduct = (id) => {
    dispatch(ProductActions.SelectionProduct(id));
  };
  const handlerRemoveProduct = (id) => {
    dispatch(ProductActions.RemoveProduct(id));
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
          value={inputProduct}
          onChange={(e) => setInputProduct(e.target.value)}
        />
        <button
          className="bg-slate-300 w-1/6 rounded-e-sm"
          onClick={() => {
            setInputProduct("");
            handlerAddProduct({
              id:
                ProductList.length !== 0
                  ? ProductList[ProductList.length - 1].id + 1
                  : 1,
              name: inputProduct,
              selected: false,
            });
          }}
        >
          Icon
        </button>
      </div>
      <div className="">
        {ProductList.length !== 0 &&
          ProductList.map((product) => (
            <div
              className="flex justify-between items-center border-b py-4 mb-2 border-slate-300"
              key={product.id}
            >
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handlerSelectProduct(product.id)}
              />
              <span
                className={`text-slate-900 dark:text-slate-300 ${
                  product.selected === true && "line-through"
                }`}
              >
                {product.name}
              </span>
              <button
                className="
                text-slate-900 dark:text-slate-300 
                bg-slate-900 hover:bg-slate-800
                  border border-slate-200 rounded px-2 py-1"
                onClick={() => handlerRemoveProduct(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
