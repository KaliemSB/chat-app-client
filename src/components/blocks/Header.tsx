import { useModalStore } from "../../contexts/modal";
import { ChannelButton } from "../atoms/ChannelButton";

const Header: React.FC = () => {
  const toggleModal = useModalStore((state) => state.toggle)

  const showModal = () => {
    toggleModal();
  };

  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-text font-bold text-sm cursor-pointer select-none text-center">
        Channels
      </p>
      <ChannelButton onClick={showModal} />
    </div>
  );
};

export { Header };
