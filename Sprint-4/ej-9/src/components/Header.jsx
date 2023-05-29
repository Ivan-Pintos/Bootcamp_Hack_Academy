import Nav from "./nav";
function Header() {
  return (
    <div className="container mx-auto text-white bg-[url(../public/header.jpg)] bg-cover h-64 xl:w-11/12">
      <div className="bg-black relative h-full py-5 bg-blur bg-opacity-50">
        <Nav />
        <div className="flex flex-col place-items-center h-full justify-center text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl">
            ¡Tus peliculas favoritas!
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl font-thin">
            Lorem ipsum dolor sit amet consectetur
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Header;
