import header from "../img/header.jpg";
export default () => {
  return (
    <div className="h-72 bg-slate-900 border-b border-b-blue-400 ">
      <img
        src={header}
        alt="Header image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
