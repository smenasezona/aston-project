import { modalTypes } from '../../types/modalTypes'
import { HIDE_MODAL, SHOW_MODAL } from '../actions/actionsTypes'

const initalState = {
	modalIsOpen: true,
}

export const modalReducer = (state = initalState, action: modalTypes) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...state, modalIsOpen: true }
		case HIDE_MODAL:
			return { ...state, modalIsOpen: false }
		default:
			return state
	}
}
