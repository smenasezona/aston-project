import { hideSnackbarType, showSnackbarType } from '../../types/snackbarTypes'
import { HIDE_SNACKBAR, SHOW_SNACKBAR } from './actionsTypes'

export const showSnackbar = (message: string): showSnackbarType => ({
	type: SHOW_SNACKBAR,
	payload: message,
})

export const hideSnackbar = (): hideSnackbarType => ({
	type: HIDE_SNACKBAR,
})
