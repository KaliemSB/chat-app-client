type ChannelButton = {
  onClick: Function
}

const ChannelButton: React.FC<ChannelButton> = (props) => {
  return (
    <button onClick={() => props.onClick()} title="Create channel" className="bg-mantle flex items-center justify-center select-none rounded-md p-1">
      <span className="material-symbols-rounded text-text">add</span>
    </button>
  );
};

export { ChannelButton };
