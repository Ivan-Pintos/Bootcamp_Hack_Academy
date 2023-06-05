export default () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center  ">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-3 container w-full h-full md:h-auto md:w-2/5 bg-slate-900 rounded-lg py-4 px-4"
      >
        <h1 className="text-4xl text-center text-slate-100 font-semibold">
          Login
        </h1>
        <label htmlFor="email" className="text-slate-300">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="py-2 px-1 outline-none rounded-md h-10 text-slate-700 transition-all duration-300 hover:h-12"
          placeholder="Ingrese su email..."
          required
          autoComplete={false} // TODO Averiguar como se hace el autocomplete
        />
        <label htmlFor="password" className="text-slate-300">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          className="py-2 px-1 outline-none rounded-md h-10 text-slate-700 transition-all duration-300 hover:h-12"
          placeholder="Ingrese su password..."
        />
        <button className="bg-blue-700 rounded-md w-1/6  text-slate-200 font-bold self-center py-2 hover:bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};
