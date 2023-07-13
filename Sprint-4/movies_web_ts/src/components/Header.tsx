type headerProps = {
  img: string;
};
export default ({ img }: headerProps) => {
  return (
    <div className="h-72 bg-slate-900 border-b border-b-blue-400 ">
      <img
        src={img}
        alt="Header image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
