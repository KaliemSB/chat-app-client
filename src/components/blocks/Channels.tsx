import { ChannelItem } from "../atoms/ChannelItem";

const Channels: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(30)].map((v, i) => {
        return (
          <ChannelItem
            label="FRONT END DEVELPOERASDASDASDAS"
            preview="FD"
            key={i}
          />
        );
      })}
    </div>
  );
};

export { Channels };
