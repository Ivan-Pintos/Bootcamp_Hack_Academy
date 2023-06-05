import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct, removeProduct } from "../redux/listMarketSlice";

export default ({ product }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const handlerDeleteProduct = (idProduct) => {
    dispatch(
      removeProduct({ mercadoId: Number(params.id), productId: idProduct })
    );
  };
  const handlerSelectProduct = (idProduct) => {
    dispatch(
      selectProduct({ mercadoId: Number(params.id), productId: idProduct })
    );
  };

  return (
    <li className="flex justify-between items-center py-4 mb-2">
      <div className=" flex gap-20">
        <input
          checked={product.selected ? true : false}
          type="checkbox"
          className="mr-2"
          onChange={() => handlerSelectProduct(product.id)}
        />
        <span
          className={`text-slate-900 dark:text-slate-300 ${
            product.selected ? "line-through" : ""
          }`}
        >
          {product.name}
        </span>
      </div>
      <TrashIcon
        className="h-6 w-6 text-red-800 hover:text-red-600 hover:cursor-pointer"
        onClick={() => handlerDeleteProduct(product.id)}
      />
    </li>
  );
};
