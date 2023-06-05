import { Link } from "react-router-dom";
import { format } from "date-fns";
import uniqolor from "uniqolor";

export default ({ market }) => {
  return (
    <li>
      <Link to={`Mercado/${market.id}`}>
        <article
          className="bg-slate-800 border-t-8 px-4 py-8"
          style={{
            borderTopColor: uniqolor(market.id, { format: "hex" }).color,
          }}
        >
          <h2 className="text-slate-300 text-2xl">
            {market.name} (
            {market.products.filter((product) => product.selected).length}/
            {market.products.length})
          </h2>
          <time
            dateTime={format(new Date(market.createdDate), "yyyy-mm-dd")}
            className="text-slate-400 text-sm "
          >
            Creada: {format(new Date(market.createdDate), "yyyy-mm-dd")}
          </time>
        </article>
      </Link>
    </li>
  );
};
