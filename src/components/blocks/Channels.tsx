import { useState } from "react";
import { ChannelItem } from "../atoms/ChannelItem";
import { ChannelSearch } from "../atoms/ChannelSearch";

const Channels: React.FC = () => {
  const [search, setSearch] = useState("");

  const channels = [
    {
      label: "Front-end developers",
      preview: "FD",
    },
    {
      label: "random",
      preview: "R",
    },
    {
      label: "BACK-END",
      preview: "B",
    },
    {
      label: "CATS AND DOGS",
      preview: "CA",
    },
    {
      label: "Welcome",
      preview: "W",
    },
  ];

  const filteredChannels = channels.filter((v) =>
    v.label.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <ChannelSearch onChange={setSearch} value={search} />
      {search.length > 0
        ? filteredChannels.map((v) => (
            <ChannelItem label={v.label} preview={v.preview} />
          ))
        : channels.map((v) => (
            <ChannelItem label={v.label} preview={v.preview} />
          ))}
    </div>
  );
};

export { Channels };
