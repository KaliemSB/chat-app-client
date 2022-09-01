type ChannelSearch = {
  value: string,
  onChange: Function
}

const ChannelSearch: React.FC<ChannelSearch> = (props) => {
  return (
    <div className="bg-surface1 rounded-md flex px-2 py-2">
      <span className="material-symbols-rounded text-text mr-2 select-none">
        search
      </span>
      <input value={props.value} onChange={e => props.onChange(e.target.value)} placeholder="Search" className="placeholder:text-text outline-none bg-transparent text-text text-sm overflow-hidden" type="text" />
    </div>
  );
};

export { ChannelSearch };
