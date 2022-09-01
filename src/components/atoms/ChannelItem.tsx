type ChannelItem = {
  label: string,
  preview: string
}

const ChannelItem: React.FC<ChannelItem> = (props) => {
  return (
    <div className="flex gap-2 cursor-pointer select-none" title={props.label}>
      <div className="bg-surface0 p-2 rounded-lg">
        <p className="text-text uppercase my-auto">{props.preview}</p>
      </div>
      <p className="text-text truncate uppercase my-auto">{props.label}</p>
    </div>
  );
};

export { ChannelItem };
