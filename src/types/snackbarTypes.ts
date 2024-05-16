import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../store/actions/actionsTypes'

export type showSnackbarType = {
	type: typeof SHOW_SNACKBAR
	payload: string
}

export type hideSnackbarType = {
	type: typeof HIDE_SNACKBAR
}

export type snackbarActionsType = showSnackbarType | hideSnackbarType
