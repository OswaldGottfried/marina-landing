import { createContext, useContext } from 'react'

export enum Modals {
  form = 'form',
}

type ModalState = {
  isOpen: boolean
}
export type ModalsStateDictType = Record<keyof typeof Modals, ModalState>

export type ModalContextValue = {
  showModal: (modalName: Modals) => void
  closeModal: (modalName: Modals) => void
  modalsStateDict: ModalsStateDictType
}

export const modalsStateDict: ModalsStateDictType = {
  form: {
    isOpen: false,
  },
}

export const ModalContext = createContext<ModalContextValue>({
  showModal: () => ({}),
  closeModal: () => ({}),
  modalsStateDict,
})

export const useModalsContext = (modalType: Modals) => {
  const context = useContext(ModalContext)
  return {
    showModal: () => context.showModal(modalType),
    closeModal: () => context.closeModal(modalType),
    isModalOpen: context.modalsStateDict[modalType].isOpen,
  }
}
