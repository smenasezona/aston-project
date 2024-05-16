import { hideModalType, showModalType } from '../../types/modalTypes'
import { HIDE_MODAL, SHOW_MODAL } from './actionsTypes'

export const showModal = (): showModalType => ({
	type: SHOW_MODAL,
	payload: true,
})

export const hideModal = (): hideModalType => ({
	type: HIDE_MODAL,
	payload: false,
})
