function Nav() {
  return (
    <nav className="flex text-lg justify-between place-items-center absolute inset-x-10">
      <span className="font-bold">Pinflix</span>
      <a href="/" className="font-thin text-gray-200 underline  text-sm">
        Home
      </a>
    </nav>
  );
}

export default Nav;
