import { Link } from "react-router-dom";
function Error() {
  return (
    <section className="text-gray-300 bg-black flex container mx-auto items-center xl:w-11/12">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <Link to="/">
            <span
              href="#"
              class=" text-black bg-gray-300 hover:bg-white outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Back to Homepage
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
