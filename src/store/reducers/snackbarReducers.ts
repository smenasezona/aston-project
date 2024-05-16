import { snackbarActionsType } from '../../types/snackbarTypes'
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../actions/actionsTypes'

const initialState = {
	snackbarOpen: false,
	snackbarMessage: '',
}

export const snackbarReducer = (
	state = initialState,
	action: snackbarActionsType
) => {
	switch (action.type) {
		case SHOW_SNACKBAR:
			return {
				...state,
				snackbarOpen: true,
				snackbarMessage: action.payload,
			}
		case HIDE_SNACKBAR:
			return {
				...state,
				snackbarOpen: false,
				snackbarMessage: '',
			}
		default:
			return state
	}
}
