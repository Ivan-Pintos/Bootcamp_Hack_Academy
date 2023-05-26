import Nav from "./nav";
import "./Header.css";
function Header() {
  return (
    <div className="container d-flex flex-column  position-relative bg-Header text-white">
      <Nav />
      <div
        className="text-center d-flex flex-column justify-content-center"
        style={{ height: "300px" }}
      >
        <h1>¡Tus peliculas favoritas!</h1>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
      </div>
    </div>
  );
}
export default Header;
