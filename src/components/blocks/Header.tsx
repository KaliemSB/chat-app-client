import { ChannelButton } from "../atoms/ChannelButton";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-text font-bold text-sm cursor-pointer select-none text-center">
        Channels
      </p>
      <ChannelButton />
    </div>
  );
};

export { Header };
