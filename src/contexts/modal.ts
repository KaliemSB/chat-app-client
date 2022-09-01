import create from 'zustand'

interface ModalState {
  modal: boolean
  toggle: () => void
}

const useModalStore = create<ModalState>()((set) => ({
  modal: false,
  toggle: () => set((state) => ({ modal: !state.modal })),
}))

export { useModalStore };