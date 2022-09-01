import { useModalStore } from "../../contexts/modal";

const Modal: React.FC = () => {
  const state = useModalStore((state) => state.modal);
  const toggleModal = useModalStore((state) => state.toggle);

  return (
    <div
      id="modal"
      className={`${
        state ? "" : "hidden"
      } z-10 fixed inset-0 transition-opacity px-2`}
    >
      <div
        tabIndex={-1}
        onClick={() => toggleModal()}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="bg-base w-full max-w-xl h-max relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-text text-lg uppercase">New channel</p>
          <span onClick={() => toggleModal()} className="material-symbols-rounded text-text cursor-pointer select-none">close</span>
        </div>
        <div className="bg-surface1 rounded-md flex px-2 py-2">
          <input
            className="bg-transparent text-text placeholder:text-text outline-none overflow-hidden"
            type="text"
            placeholder="Channel name"
          />
        </div>
        <div className="bg-surface1 rounded-md flex px-2 py-2">
          <textarea
            className="bg-transparent text-text placeholder:text-text outline-none w-full"
            rows={3}
            placeholder="Channel description"
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-mauve px-4 py-1 rounded-md">
            <p className="text-white">Save</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
