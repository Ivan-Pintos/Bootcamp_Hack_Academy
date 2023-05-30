import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex text-lg justify-between place-items-center absolute inset-x-10">
      <Link to="/">
        <span className="font-bold">Pinflix</span>
      </Link>
      <div className="flex flex-row gap-2">
        <Link to="/">
          <span className="font-thin text-gray-200 underline text-sm">
            Home
          </span>
        </Link>
        <Link to="/sobre-nosotros">
          <span className="font-thin text-gray-200 underline text-sm">
            About us
          </span>
        </Link>
        <Link to="/contacto">
          <span className="font-thin text-gray-200 underline text-sm">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
