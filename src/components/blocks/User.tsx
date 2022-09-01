const User: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-2 items-center">
        <img
          width={32}
          height={32}
          className="rounded-lg"
          src="https://github.com/kaliemSB.png"
          alt="User"
        />
        <p className="text-text text-sm text-bold">Kaliem Ajudas</p>
      </div>
      <span className="material-symbols-rounded text-text select-none cursor-pointer">expand_more</span>
    </div>
  );
};

export { User };
