import { HIDE_MODAL, SHOW_MODAL } from '../store/actions/actionsTypes'

export type showModalType = {
	type: typeof SHOW_MODAL
	payload: boolean
}

export type hideModalType = {
	type: typeof HIDE_MODAL
	payload: boolean
}

export type modalTypes = showModalType | hideModalType
